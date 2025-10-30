import { MouseEvent } from 'react';

export interface OverlayPanelHandler {
  open: (e: MouseEvent) => void;
  close: () => void;
  toggle: (e: MouseEvent) => void;
}

export interface OverlayPanelPosition {
  x: number;
  y: number;
}
