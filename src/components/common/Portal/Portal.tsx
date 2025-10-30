'use client';
import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

type PortalProviderProps = PropsWithChildren;

export function PortalProvider({ children }: PortalProviderProps) {
  const [portalContainerRef, setPortalContainerRef] = useState<HTMLDivElement | null>(null);

  return (
    <PortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal-container"
        ref={elem => {
          if (portalContainerRef !== null || elem === null) {
            return;
          }

          setPortalContainerRef(elem);
        }}
      />
    </PortalContext.Provider>
  );
}

type PortalConsumerProps = PropsWithChildren;

export function PortalConsumer({ children }: PortalConsumerProps) {
  return (
    <PortalContext.Consumer>
      {portalContainerRef => {
        if (portalContainerRef === null) {
          return null;
        }

        return createPortal(children, portalContainerRef);
      }}
    </PortalContext.Consumer>
  );
}
