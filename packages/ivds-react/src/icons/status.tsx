// Status & Feedback Icons
import React from 'react';
import { createIcon, createFilledIcon } from './createIcon';

// Alert & Status
export const IconAlertCircle = createIcon('AlertCircle', (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </>
));

export const IconAlertTriangle = createIcon('AlertTriangle', (
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
));

export const IconCheckCircle = createIcon('CheckCircle', (
  <>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </>
));

export const IconCheckCircle2 = createIcon('CheckCircle2', (
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="9,12 12,15 16,9" />
  </>
));

export const IconXCircle = createIcon('XCircle', (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </>
));

export const IconInfo = createIcon('Info', (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>
));

export const IconHelpCircle = createIcon('HelpCircle', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
));

// Filled versions
export const IconAlertCircleFill = createFilledIcon('AlertCircleFill', (
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
));

export const IconCheckCircleFill = createFilledIcon('CheckCircleFill', (
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
));

export const IconXCircleFill = createFilledIcon('XCircleFill', (
  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
));

export const IconInfoFill = createFilledIcon('InfoFill', (
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
));

// Loading & Progress
export const IconLoader = createIcon('Loader', (
  <>
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </>
));

export const IconLoader2 = createIcon('Loader2', (
  <path d="M21 12a9 9 0 11-6.219-8.56" />
));

export const IconCircle = createIcon('Circle', (
  <circle cx="12" cy="12" r="10" />
));

export const IconCircleDot = createIcon('CircleDot', (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="1" />
  </>
));

// Thumbs
export const IconThumbsUp = createIcon('ThumbsUp', (
  <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
));

export const IconThumbsDown = createIcon('ThumbsDown', (
  <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
));

// Stars & Rating
export const IconStar = createIcon('Star', (
  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
));

export const IconStarFill = createFilledIcon('StarFill', (
  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
));

export const IconStarHalf = createIcon('StarHalf', (
  <>
    <path d="M12 17.77l-5.82 3.25 1.18-6.88L2 9.27l8.91-1.01L12 2" />
    <path d="M12 2v15.77" />
  </>
));

export const IconHeart = createIcon('Heart', (
  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
));

export const IconHeartFill = createFilledIcon('HeartFill', (
  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
));

// Bell / Notification
export const IconBell = createIcon('Bell', (
  <>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </>
));

export const IconBellOff = createIcon('BellOff', (
  <>
    <path d="M13.73 21a2 2 0 01-3.46 0" />
    <path d="M18.63 13A17.89 17.89 0 0118 8" />
    <path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14" />
    <path d="M18 8a6 6 0 00-9.33-5" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </>
));

export const IconBellRing = createIcon('BellRing', (
  <>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
    <path d="M2 8c0-2.21.895-4.21 2.34-5.66" />
    <path d="M22 8a10 10 0 00-2.34-5.66" />
  </>
));
