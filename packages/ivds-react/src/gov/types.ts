import type React from 'react';

export type GovLocale = 'fr' | 'en';
export type GovServiceStatus = 'available' | 'maintenance' | 'coming-soon';

export interface GovLocalizedText {
  fr: string;
  en: string;
}

export interface GovNavItem {
  id: string;
  label: Record<GovLocale, string>;
  href: string;
  children?: GovNavItem[];
}

export interface GovFlashItem {
  id: string;
  category: 'flash' | 'urgent' | 'info';
  title: Record<GovLocale, string>;
  href?: string;
  publishedAt: string;
}

export interface GovNewsItem {
  id: string;
  category: string;
  title: Record<GovLocale, string>;
  excerpt?: Record<GovLocale, string>;
  href: string;
  image?: string;
  publishedAt: string;
}

export interface GovAgendaItem {
  id: string;
  title: Record<GovLocale, string>;
  href: string;
  location?: Record<GovLocale, string>;
  startAt: string;
}

export interface GovServiceItem {
  id: string;
  code: string;
  title: Record<GovLocale, string>;
  href: string;
  icon?: string;
  status?: GovServiceStatus;
}

export interface GovFooterSection {
  id: string;
  title: Record<GovLocale, string>;
  links: Array<{
    id: string;
    label: Record<GovLocale, string>;
    href: string;
  }>;
}

export interface GovLandingPromo {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface GovLandingContent {
  locale: GovLocale;
  promo: GovLandingPromo;
  navigation: GovNavItem[];
  flash: GovFlashItem[];
  news: GovNewsItem[];
  services: GovServiceItem[];
  agenda?: GovAgendaItem[];
  footerSections?: GovFooterSection[];
}

export interface GovRenderMetaProps {
  locale: GovLocale;
  className?: string;
  children?: React.ReactNode;
}
