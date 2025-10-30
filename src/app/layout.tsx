import { ReactNode } from 'react';

import { ReactQueryProvider } from '@/components/ReactQueryProvider';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
