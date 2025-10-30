import { ReactNode } from 'react';

import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { Portal } from '@/components/common/Portal';

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
          <Portal.Provider>{children}</Portal.Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
