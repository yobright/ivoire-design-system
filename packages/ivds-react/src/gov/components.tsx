import React from 'react';
import { useStableId } from '../utils/useStableId';
import type {
  GovAgendaItem,
  GovFlashItem,
  GovFooterSection,
  GovLocalizedText,
  GovLocale,
  GovNavItem,
  GovNewsItem,
  GovServiceItem,
  GovServiceStatus,
} from './types';

const LOCALES: GovLocale[] = ['fr', 'en'];

const DATE_FORMATTERS: Record<GovLocale, Intl.DateTimeFormat> = {
  fr: new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }),
  en: new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }),
};

const DEFAULT_LABELS: Record<string, GovLocalizedText> = {
  flashTicker: { fr: 'Flash Infos', en: 'Flash News' },
  languageSwitcher: { fr: 'Choix de langue', en: 'Language switcher' },
  primaryNavigation: { fr: 'Navigation principale', en: 'Primary navigation' },
};

const DEFAULT_STATUS_LABELS: Record<GovServiceStatus, GovLocalizedText> = {
  available: { fr: 'Disponible', en: 'Available' },
  maintenance: { fr: 'Maintenance', en: 'Maintenance' },
  'coming-soon': { fr: 'Bientot', en: 'Coming soon' },
};

const getLabel = (text: Record<GovLocale, string>, locale: GovLocale): string => text[locale] ?? text.fr ?? text.en;

const formatDate = (value: string, locale: GovLocale): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return DATE_FORMATTERS[locale].format(date);
};

export interface GovLanguageSwitcherProps {
  locale: GovLocale;
  onChange?: (locale: GovLocale) => void;
  ariaLabel?: Record<GovLocale, string>;
  className?: string;
}

export function GovLanguageSwitcher({
  locale,
  onChange,
  ariaLabel = DEFAULT_LABELS.languageSwitcher,
  className,
}: GovLanguageSwitcherProps): JSX.Element {
  return (
    <div
      className={['ivds-gov-language-switcher', className].filter(Boolean).join(' ')}
      aria-label={getLabel(ariaLabel, locale)}
      role="group"
    >
      {LOCALES.map((value) => (
        <button
          key={value}
          type="button"
          className={[
            'ivds-gov-language-switcher__button',
            locale === value && 'ivds-gov-language-switcher__button--active',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-pressed={locale === value}
          onClick={onChange ? () => onChange(value) : undefined}
        >
          {value.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export interface GovTopPromoProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function GovTopPromo({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '#',
  className,
}: GovTopPromoProps): JSX.Element {
  const titleId = useStableId(undefined, 'ivds-gov-top-promo');

  return (
    <section className={['ivds-gov-top-promo', className].filter(Boolean).join(' ')} aria-labelledby={titleId}>
      <div>
        <h1 id={titleId} className="ivds-gov-top-promo__title">
          {title}
        </h1>
        {subtitle ? <p className="ivds-gov-top-promo__subtitle">{subtitle}</p> : null}
      </div>
      {ctaLabel ? (
        <a className="ivds-button ivds-button--primary" href={ctaHref}>
          {ctaLabel}
        </a>
      ) : null}
    </section>
  );
}

export interface GovFlashTickerProps {
  items: GovFlashItem[];
  locale: GovLocale;
  label?: Record<GovLocale, string>;
  className?: string;
}

export function GovFlashTicker({
  items,
  locale,
  label = DEFAULT_LABELS.flashTicker,
  className,
}: GovFlashTickerProps): JSX.Element {
  return (
    <section className={['ivds-gov-flash-ticker', className].filter(Boolean).join(' ')} aria-label={getLabel(label, locale)}>
      <span className="ivds-gov-flash-ticker__label">{getLabel(label, locale)}</span>
      <ul className="ivds-gov-flash-ticker__list">
        {items.map((item) => (
          <li key={item.id} className="ivds-gov-flash-ticker__item">
            <a href={item.href || '#'}>{getLabel(item.title, locale)}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export interface GovPrimaryNavProps {
  items: GovNavItem[];
  locale: GovLocale;
  activeId?: string;
  ariaLabel?: Record<GovLocale, string>;
  className?: string;
}

export function GovPrimaryNav({
  items,
  locale,
  activeId,
  ariaLabel = DEFAULT_LABELS.primaryNavigation,
  className,
}: GovPrimaryNavProps): JSX.Element {
  return (
    <nav className={['ivds-gov-primary-nav', className].filter(Boolean).join(' ')} aria-label={getLabel(ariaLabel, locale)}>
      <ul className="ivds-gov-primary-nav__list">
        {items.map((item) => (
          <li
            key={item.id}
            className={[
              'ivds-gov-primary-nav__item',
              activeId === item.id && 'ivds-gov-primary-nav__item--active',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <a href={item.href} aria-current={activeId === item.id ? 'page' : undefined}>
              {getLabel(item.label, locale)}
            </a>
            {item.children?.length ? (
              <ul className="ivds-gov-primary-nav__sublist">
                {item.children.map((child) => (
                  <li key={child.id} className="ivds-gov-primary-nav__subitem">
                    <a href={child.href} aria-current={activeId === child.id ? 'page' : undefined}>
                      {getLabel(child.label, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export interface GovHeaderProps {
  locale: GovLocale;
  title: string;
  subtitle?: string;
  navItems: GovNavItem[];
  activeNavId?: string;
  primaryNavLabel?: Record<GovLocale, string>;
  languageSwitcherLabel?: Record<GovLocale, string>;
  onLocaleChange?: (locale: GovLocale) => void;
  className?: string;
}

export function GovHeader({
  locale,
  title,
  subtitle,
  navItems,
  activeNavId,
  primaryNavLabel = DEFAULT_LABELS.primaryNavigation,
  languageSwitcherLabel = DEFAULT_LABELS.languageSwitcher,
  onLocaleChange,
  className,
}: GovHeaderProps): JSX.Element {
  return (
    <header className={['ivds-gov-header', className].filter(Boolean).join(' ')}>
      <div className="ivds-gov-header__row">
        <div className="ivds-gov-header__brand">
          <p className="ivds-gov-header__brand-title">{title}</p>
          {subtitle ? <p className="ivds-gov-header__brand-subtitle">{subtitle}</p> : null}
        </div>
        <GovLanguageSwitcher locale={locale} ariaLabel={languageSwitcherLabel} onChange={onLocaleChange} />
      </div>
      <GovPrimaryNav items={navItems} locale={locale} activeId={activeNavId} ariaLabel={primaryNavLabel} />
    </header>
  );
}

export interface GovNewsPanelProps {
  locale: GovLocale;
  title: string;
  items: GovNewsItem[];
  className?: string;
}

export function GovNewsPanel({ locale, title, items, className }: GovNewsPanelProps): JSX.Element {
  return (
    <section className={['ivds-gov-news-panel', className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className="ivds-gov-news-panel__title">{title}</h2>
      <ul className="ivds-gov-news-panel__list">
        {items.map((item) => (
          <li key={item.id} className="ivds-gov-news-panel__item">
            <a href={item.href}>{getLabel(item.title, locale)}</a>
            {item.excerpt ? <p className="ivds-gov-news-panel__excerpt">{getLabel(item.excerpt, locale)}</p> : null}
            <span className="ivds-gov-news-panel__meta">
              {item.category} - {formatDate(item.publishedAt, locale)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export interface GovAgendaPanelProps {
  locale: GovLocale;
  title: string;
  items: GovAgendaItem[];
  className?: string;
}

export function GovAgendaPanel({ locale, title, items, className }: GovAgendaPanelProps): JSX.Element {
  return (
    <aside className={['ivds-gov-agenda-panel', className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className="ivds-gov-agenda-panel__title">{title}</h2>
      <ul className="ivds-gov-agenda-panel__list">
        {items.map((item) => (
          <li key={item.id} className="ivds-gov-agenda-panel__item">
            <a href={item.href}>{getLabel(item.title, locale)}</a>
            <span className="ivds-gov-agenda-panel__meta">
              {formatDate(item.startAt, locale)}
              {item.location ? ` - ${getLabel(item.location, locale)}` : ''}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export interface GovServiceDirectoryProps {
  locale: GovLocale;
  title: string;
  items: GovServiceItem[];
  statusLabels?: Partial<Record<GovServiceStatus, GovLocalizedText>>;
  className?: string;
}

export function GovServiceDirectory({
  locale,
  title,
  items,
  statusLabels,
  className,
}: GovServiceDirectoryProps): JSX.Element {
  const labels: Record<GovServiceStatus, GovLocalizedText> = { ...DEFAULT_STATUS_LABELS, ...statusLabels };

  return (
    <section className={['ivds-gov-service-directory', className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className="ivds-gov-service-directory__title">{title}</h2>
      <ul className="ivds-gov-service-directory__list">
        {items.map((item) => (
          <li key={item.id} className="ivds-gov-service-directory__item">
            <span aria-hidden="true">{item.icon || '•'}</span>
            <a href={item.href}>{getLabel(item.title, locale)}</a>
            {item.status ? (
              <span
                className={[
                  'ivds-gov-service-directory__status',
                  `ivds-gov-service-directory__status--${item.status}`,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {getLabel(labels[item.status], locale)}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export interface GovMegaFooterProps {
  locale: GovLocale;
  title: string;
  sections: GovFooterSection[];
  className?: string;
}

export function GovMegaFooter({ locale, title, sections, className }: GovMegaFooterProps): JSX.Element {
  return (
    <footer className={['ivds-gov-mega-footer', className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className="ivds-gov-mega-footer__title">{title}</h2>
      <div className="ivds-gov-mega-footer__grid">
        {sections.map((section) => (
          <section key={section.id} className="ivds-gov-mega-footer__section">
            <h3>{getLabel(section.title, locale)}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{getLabel(link.label, locale)}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </footer>
  );
}

export interface GovShellProps {
  locale: GovLocale;
  className?: string;
  children: React.ReactNode;
}

export function GovShell({ locale, className, children }: GovShellProps): JSX.Element {
  return (
    <main className={['ivds-gov-shell', className].filter(Boolean).join(' ')} data-ivds-gov-locale={locale} lang={locale}>
      <div className="ivds-gov-shell__container">{children}</div>
    </main>
  );
}
