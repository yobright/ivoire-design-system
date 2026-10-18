'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@ivds/react/theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider mode="default" target="root">
      {children}
    </ThemeProvider>
  );
}
