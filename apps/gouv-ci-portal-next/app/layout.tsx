import '@ivds/design-tokens/css';
import '@ivds/design-tokens/css/default.css';
import '@ivds/core';
import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Portail officiel du Gouvernement de Côte d'Ivoire",
  description: "Prototype Next.js modernisé du portail officiel du Gouvernement de Côte d'Ivoire avec IVDS.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" data-ivds-theme="default">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
