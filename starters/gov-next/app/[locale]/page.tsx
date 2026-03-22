import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  GovAgendaPanel,
  GovFlashTicker,
  GovHeader,
  GovMegaFooter,
  GovNewsPanel,
  GovServiceDirectory,
  GovShell,
  GovTopPromo,
} from '@ivds/react/gov';
import { loadLanding } from '../../adapters/jsonAdapter';
import {
  getFallbackFooterSections,
  getLocaleSwitcherPath,
  isStarterLocale,
  STARTER_LABELS,
  SUPPORTED_LOCALES,
  type StarterLocale,
} from './_content';

export function generateStaticParams(): Array<{ locale: StarterLocale }> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface PageProps {
  params: { locale: string };
}

export default async function LandingPage({ params }: PageProps): Promise<JSX.Element> {
  const rawLocale = params.locale.toLowerCase();

  if (!isStarterLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const labels = STARTER_LABELS[locale];
  const content = await loadLanding(locale);
  const footerSections = content.footerSections?.length ? content.footerSections : getFallbackFooterSections();

  return (
    <GovShell locale={locale}>
      <nav className="starter-toolbar" aria-label={labels.starterNavLabel}>
        <Link href={`/${locale}`} prefetch={false}>
          {labels.toolbarLinks.landing}
        </Link>
        <Link href={`/${locale}/passport`} prefetch={false}>
          {labels.toolbarLinks.passport}
        </Link>
        <Link href={`/${locale}/opisms`} prefetch={false}>
          {labels.toolbarLinks.opisms}
        </Link>
        <Link href={getLocaleSwitcherPath(locale)} prefetch={false}>
          {labels.toolbarLinks.switchLocale}
        </Link>
      </nav>

      <GovTopPromo
        title={content.promo.title}
        subtitle={content.promo.subtitle}
        ctaLabel={content.promo.ctaLabel}
        ctaHref={content.promo.ctaHref}
      />
      <GovFlashTicker items={content.flash} locale={locale} />
      <GovHeader
        locale={locale}
        title={labels.portalTitle}
        subtitle={labels.portalSubtitle}
        navItems={content.navigation}
        activeNavId="home"
      />
      <section className="ivds-gov-main-grid">
        <GovNewsPanel locale={locale} title={labels.newsTitle} items={content.news} />
        <GovAgendaPanel locale={locale} title={labels.agendaTitle} items={content.agenda ?? []} />
      </section>
      <GovServiceDirectory locale={locale} title={labels.servicesTitle} items={content.services} />
      <GovMegaFooter locale={locale} title={labels.footerTitle} sections={footerSections} />
    </GovShell>
  );
}
