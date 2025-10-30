import { ReactNode } from 'react';
import { Navigationbar } from '@/components/Navigationbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navigationbar />

      {children}
    </>
  );
}
