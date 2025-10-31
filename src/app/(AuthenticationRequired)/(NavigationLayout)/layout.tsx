import { ReactNode } from 'react';
import { Navigationbar } from '@/components/Navigationbar';
import { LoginGuard } from '@/components/LoginGuard';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <LoginGuard>
      <Navigationbar />

      {children}
    </LoginGuard>
  );
}
