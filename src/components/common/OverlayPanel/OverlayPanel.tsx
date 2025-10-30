'use client';
import { forwardRef, PropsWithChildren } from 'react';

import { Portal } from '@/components/common/Portal';
import { useOverlayPanel } from './useOverlayPanel';
import { OverlayPanelHandler } from './overlayPanel.define';

export interface OverlayPanelProps extends PropsWithChildren {
  relativeGap?: number;
}

export const OverlayPanel = forwardRef<OverlayPanelHandler, OverlayPanelProps>((props, ref) => {
  const { children } = props;
  const { panelMountedRef, isOpened, position } = useOverlayPanel({ ...props, ref });

  return (
    <>
      {isOpened && (
        <Portal.Consumer>
          <div
            ref={panelMountedRef}
            className="z-overlay fixed inset-0"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            {children}
          </div>
        </Portal.Consumer>
      )}
    </>
  );
});
