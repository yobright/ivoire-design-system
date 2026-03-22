import type { Metadata } from 'next';
import '@ivds/core';
import '@ivds/core/gov';
import './globals.css';

export const metadata: Metadata = {
  title: 'IVDS Gov Next Starter',
  description: 'Government starter based on IVDS patterns (landing + transactional templates)',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params?: { locale?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps): JSX.Element {
  const locale = params?.locale === 'en' ? 'en' : 'fr';

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
