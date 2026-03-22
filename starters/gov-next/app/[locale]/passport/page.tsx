import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GovHeader, GovMegaFooter, GovShell, GovTopPromo } from '@ivds/react/gov';
import { loadLanding } from '../../../adapters/jsonAdapter';
import {
  getFallbackFooterSections,
  getLocaleSwitcherPath,
  isStarterLocale,
  STARTER_LABELS,
  SUPPORTED_LOCALES,
  type StarterLocale,
} from '../_content';

const PASSPORT_PAGE_COPY = {
  fr: {
    title: 'Demande de passeport officiel',
    subtitle: 'Parcours transactionnel IVDS pour les portails ministeriels',
    formTitle: 'Informations de la demande',
    description:
      "Utilisez ce formulaire pour preparer une demande de passeport diplomatique ou de service. Les champs sont adaptes au standard IVDS.",
    submit: 'Continuer',
    draft: 'Enregistrer le brouillon',
    stepsTitle: 'Etapes du service',
    steps: ['Demande de passeport', 'Suivi de dossier', 'Retrait du passeport'],
    toolbarLabel: 'Navigation des templates starter',
  },
  en: {
    title: 'Official passport request',
    subtitle: 'IVDS transactional flow for ministerial portals',
    formTitle: 'Request information',
    description:
      'Use this form to initiate a diplomatic or service passport request. Inputs follow the IVDS government standard.',
    submit: 'Continue',
    draft: 'Save draft',
    stepsTitle: 'Service steps',
    steps: ['Passport request', 'Application tracking', 'Passport delivery'],
    toolbarLabel: 'Starter template navigation',
  },
} as const;

export function generateStaticParams(): Array<{ locale: StarterLocale }> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface PageProps {
  params: { locale: string };
}

export default async function PassportPage({ params }: PageProps): Promise<JSX.Element> {
  const rawLocale = params.locale.toLowerCase();

  if (!isStarterLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const labels = STARTER_LABELS[locale];
  const copy = PASSPORT_PAGE_COPY[locale];
  const content = await loadLanding(locale);
  const footerSections = content.footerSections?.length ? content.footerSections : getFallbackFooterSections();

  return (
    <GovShell locale={locale}>
      <nav className="starter-toolbar" aria-label={copy.toolbarLabel}>
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

      <GovTopPromo title={copy.title} subtitle={copy.subtitle} />
      <GovHeader
        locale={locale}
        title={labels.portalTitle}
        subtitle={labels.portalSubtitle}
        navItems={content.navigation}
        activeNavId="services"
      />

      <section className="ivds-gov-form-page" aria-label={copy.title}>
        <div className="ivds-gov-form-page__grid">
          <article className="ivds-gov-form-section">
            <h2 className="ivds-gov-form-section__title">{copy.formTitle}</h2>
            <p>{copy.description}</p>

            <form>
              <div className="ivds-gov-form-field">
                <label htmlFor="passport-full-name">{locale === 'fr' ? 'Nom complet' : 'Full name'}</label>
                <input id="passport-full-name" name="fullName" type="text" autoComplete="name" />
              </div>

              <div className="ivds-gov-form-field">
                <label htmlFor="passport-document-type">{locale === 'fr' ? 'Type de demande' : 'Request type'}</label>
                <select id="passport-document-type" name="requestType" defaultValue="first-request">
                  <option value="first-request">{locale === 'fr' ? 'Premiere obtention' : 'First request'}</option>
                  <option value="renewal">{locale === 'fr' ? 'Renouvellement' : 'Renewal'}</option>
                </select>
              </div>

              <div className="ivds-gov-form-field">
                <label htmlFor="passport-email">Email</label>
                <input id="passport-email" name="email" type="email" autoComplete="email" />
              </div>

              <div className="ivds-gov-form-field">
                <label htmlFor="passport-details">{locale === 'fr' ? 'Details complementaires' : 'Additional details'}</label>
                <textarea id="passport-details" name="details" />
              </div>

              <div className="ivds-gov-action-modal__actions">
                <button className="ivds-button ivds-button--primary" type="submit">
                  {copy.submit}
                </button>
                <button className="ivds-button ivds-button--secondary" type="button">
                  {copy.draft}
                </button>
              </div>
            </form>
          </article>

          <aside className="ivds-gov-form-section">
            <h2 className="ivds-gov-form-section__title">{copy.stepsTitle}</h2>
            <ul className="ivds-gov-step-list">
              {copy.steps.map((step, index) => (
                <li key={step} className="ivds-gov-step-list__item">
                  <span className="ivds-gov-step-list__index">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <GovMegaFooter locale={locale} title={labels.footerTitle} sections={footerSections} />
    </GovShell>
  );
}
