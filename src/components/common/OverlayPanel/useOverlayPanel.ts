'use client';
import { RefCallback, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { OverlayPanelHandler, OverlayPanelPosition } from './overlayPanel.define';
import { OverlayPanelProps } from './OverlayPanel';
import { ForwardedRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

interface UseOverlayPanelParams extends OverlayPanelProps {
  ref: ForwardedRef<OverlayPanelHandler>;
}

interface UseOverlayPanelReturn {
  panelMountedRef: RefCallback<HTMLDivElement>;
  isOpened: boolean;
  position: OverlayPanelPosition;
}

export function useOverlayPanel(params: UseOverlayPanelParams): UseOverlayPanelReturn {
  const { ref, relativeGap = 0 } = params;

  const [isOpened, setIsOpened] = useState(false);
  const [position, setPosition] = useState<OverlayPanelPosition>({ x: 0, y: 0 });

  const panelRef = useRef<HTMLDivElement>(null);
  const anchorElementRef = useRef<HTMLElement>(null); // open 시점에 기준이 되는 element
  const panelSizeRef = useRef<DOMRect>(null);

  const handleClickOutside = useCallback(() => {
    setIsOpened(false);
  }, []);

  useClickOutside({
    refs: [anchorElementRef],
    onClickOutside: handleClickOutside,
  });

  const getTargetBoundingRect = (target: HTMLElement): DOMRect => {
    return target.getBoundingClientRect();
  };

  const positionByRelativity = useCallback(
    (panelSize: { clientWidth: number; clientHeight: number }) => {
      const targetRect = anchorElementRef.current
        ? getTargetBoundingRect(anchorElementRef.current)
        : { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };

      const scrolledWidth = window.scrollX;
      const scrolledHeight = window.scrollY;

      const absoluteX = targetRect.left;
      let absoluteY = targetRect.bottom + relativeGap;

      const panelTopOfOpenTop = targetRect.top - panelSize.clientHeight - relativeGap;
      const panelBottomOfOpenDown = absoluteY + panelSize.clientHeight;

      // bottom이 화면 밖으로 나가면 위로 열리되 top, bottom 둘 다 밖으로 나가는 경우 아래로 열림
      if (panelTopOfOpenTop > 0 && panelBottomOfOpenDown > window.innerHeight) {
        absoluteY = panelTopOfOpenTop;
      }

      return { x: scrolledWidth + absoluteX, y: scrolledHeight + absoluteY };
    },
    [relativeGap]
  );

  const panelMountedRef = useCallback(
    (node: HTMLDivElement) => {
      // node가 undefined일 경우 unmount 됐을 때 호출 됨.
      if (node) {
        const panelSize = {
          clientWidth: panelSizeRef.current?.width ?? 0,
          clientHeight: panelSizeRef.current?.height ?? 0,
        };

        setPosition(positionByRelativity(panelSize));
      }

      panelRef.current = node;
    },
    [relativeGap]
  );

  useImperativeHandle<OverlayPanelHandler, OverlayPanelHandler>(ref, () => ({
    open(e) {
      setIsOpened(true);
      anchorElementRef.current = e.currentTarget as HTMLElement;
    },
    close() {
      setIsOpened(false);
    },
    toggle(e) {
      setIsOpened(prev => !prev);
      anchorElementRef.current = e.currentTarget as HTMLElement;
    },
  }));

  return {
    panelMountedRef,
    isOpened,
    position,
  };
}
