// Navigation Icons
import React from 'react';
import { createIcon } from './createIcon';

export const IconArrowLeft = createIcon('ArrowLeft', (
  <path d="M19 12H5M12 19l-7-7 7-7" />
));

export const IconArrowRight = createIcon('ArrowRight', (
  <path d="M5 12h14M12 5l7 7-7 7" />
));

export const IconArrowUp = createIcon('ArrowUp', (
  <path d="M12 19V5M5 12l7-7 7 7" />
));

export const IconArrowDown = createIcon('ArrowDown', (
  <path d="M12 5v14M19 12l-7 7-7-7" />
));

export const IconArrowUpRight = createIcon('ArrowUpRight', (
  <path d="M7 17L17 7M7 7h10v10" />
));

export const IconArrowDownLeft = createIcon('ArrowDownLeft', (
  <path d="M17 7L7 17M17 17H7V7" />
));

export const IconChevronLeft = createIcon('ChevronLeft', (
  <path d="M15 18l-6-6 6-6" />
));

export const IconChevronRight = createIcon('ChevronRight', (
  <path d="M9 18l6-6-6-6" />
));

export const IconChevronUp = createIcon('ChevronUp', (
  <path d="M18 15l-6-6-6 6" />
));

export const IconChevronDown = createIcon('ChevronDown', (
  <path d="M6 9l6 6 6-6" />
));

export const IconChevronsLeft = createIcon('ChevronsLeft', (
  <>
    <path d="M11 17l-5-5 5-5" />
    <path d="M18 17l-5-5 5-5" />
  </>
));

export const IconChevronsRight = createIcon('ChevronsRight', (
  <>
    <path d="M13 17l5-5-5-5" />
    <path d="M6 17l5-5-5-5" />
  </>
));

export const IconHome = createIcon('Home', (
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </>
));

export const IconMenu = createIcon('Menu', (
  <>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </>
));

export const IconMenuAlt = createIcon('MenuAlt', (
  <>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="16" y2="12" />
    <line x1="4" y1="18" x2="12" y2="18" />
  </>
));

export const IconMoreHorizontal = createIcon('MoreHorizontal', (
  <>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </>
));

export const IconMoreVertical = createIcon('MoreVertical', (
  <>
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </>
));

export const IconExternalLink = createIcon('ExternalLink', (
  <>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
));

export const IconCornerDownRight = createIcon('CornerDownRight', (
  <>
    <polyline points="15,10 20,15 15,20" />
    <path d="M4 4v7a4 4 0 004 4h12" />
  </>
));

export const IconRefresh = createIcon('Refresh', (
  <>
    <polyline points="23,4 23,10 17,10" />
    <polyline points="1,20 1,14 7,14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </>
));

export const IconRotateCw = createIcon('RotateCw', (
  <>
    <polyline points="23,4 23,10 17,10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </>
));

export const IconRotateCcw = createIcon('RotateCcw', (
  <>
    <polyline points="1,4 1,10 7,10" />
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
  </>
));
