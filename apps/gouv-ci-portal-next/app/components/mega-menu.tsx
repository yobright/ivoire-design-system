'use client';

import { MegaMenu as IvdsMegaMenu } from '@ivds/react';
import { megaMenuAction, megaMenuSections } from '../data/navigation';

export function MegaMenu() {
  return (
    <IvdsMegaMenu
      sections={megaMenuSections}
      action={megaMenuAction}
      ariaLabel="Navigation principale du portail gouvernemental"
      menuButtonLabel="Menu"
      closeLabel="Fermer"
    />
  );
}
