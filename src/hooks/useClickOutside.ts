'use client';
import { useEffect, RefObject, useCallback } from 'react';

interface useClickOutsideParams<T extends HTMLElement> {
  refs: Array<RefObject<T | null>>;
  onClickOutside: (e: MouseEvent) => void;
}

export function useClickOutside<T extends HTMLElement>(params: useClickOutsideParams<T>) {
  const { refs, onClickOutside } = params;

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!refs.find(refObj => refObj.current?.contains(e.target as Node))) {
        onClickOutside(e);
      }
    },
    [refs, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refs, onClickOutside]);
}
