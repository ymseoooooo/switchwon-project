import { ReactNode } from 'react';

import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { Portal } from '@/components/common/Portal';
import AxiosInterceptor from '@/components/AxiosInterceptor';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactQueryProvider>
          <Portal.Provider>
            {children}

            <AxiosInterceptor />
          </Portal.Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
