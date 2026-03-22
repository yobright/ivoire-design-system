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

const OPISMS_PAGE_COPY = {
  fr: {
    title: 'Carnet de vaccination electronique',
    subtitle: 'Template d authentification et inscription pour services de sante',
    subscribeTitle: "Vous n'avez pas encore de carnet electronique ?",
    subscribeCta: 'Abonnez-vous',
    loginTitle: 'Espace abonne',
    identifierLabel: 'Identifiant',
    passwordLabel: 'Mot de passe',
    loginCta: 'Connexion',
    forgotPassword: 'Mot de passe oublie ?',
    note: "Formule standard: consultation des actes de vaccination selon droits d'acces.",
    modalTitle: 'Action rapide',
    modalDescription:
      "Besoin d'aide pour votre premiere connexion ? Activez le parcours assiste et contactez le support IVDS.",
    modalPrimary: 'Demarrer le parcours assiste',
    modalSecondary: 'Contacter le support',
    toolbarLabel: 'Navigation des templates starter',
  },
  en: {
    title: 'Electronic vaccination record',
    subtitle: 'Authentication and subscription template for health services',
    subscribeTitle: "Don't have an electronic record yet?",
    subscribeCta: 'Subscribe now',
    loginTitle: 'Subscriber area',
    identifierLabel: 'Identifier',
    passwordLabel: 'Password',
    loginCta: 'Sign in',
    forgotPassword: 'Forgot password?',
    note: 'Standard plan: vaccination events visibility depends on granted rights.',
    modalTitle: 'Quick action',
    modalDescription:
      'Need help for first-time access? Trigger the assisted onboarding flow and contact IVDS support.',
    modalPrimary: 'Start assisted flow',
    modalSecondary: 'Contact support',
    toolbarLabel: 'Starter template navigation',
  },
} as const;

export function generateStaticParams(): Array<{ locale: StarterLocale }> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface PageProps {
  params: { locale: string };
}

export default async function OpismsPage({ params }: PageProps): Promise<JSX.Element> {
  const rawLocale = params.locale.toLowerCase();

  if (!isStarterLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const labels = STARTER_LABELS[locale];
  const copy = OPISMS_PAGE_COPY[locale];
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

      <section className="ivds-gov-auth-layout" aria-label={copy.title}>
        <article className="ivds-gov-auth-card">
          <span className="ivds-gov-auth-card__eyebrow">OPISMS</span>
          <h2 className="ivds-gov-auth-card__title">{copy.subscribeTitle}</h2>
          <p>
            {locale === 'fr'
              ? 'Accedez a un suivi vaccine harmonise pour vous et votre famille.'
              : 'Access harmonized vaccination tracking for you and your household.'}
          </p>
          <div className="ivds-gov-auth-card__actions">
            <button type="button" className="ivds-button ivds-button--primary">
              {copy.subscribeCta}
            </button>
          </div>
        </article>

        <article className="ivds-gov-auth-card">
          <h2 className="ivds-gov-auth-card__title">{copy.loginTitle}</h2>
          <form>
            <div className="ivds-gov-form-field">
              <label htmlFor="opisms-identifier">{copy.identifierLabel}</label>
              <input id="opisms-identifier" name="identifier" type="text" autoComplete="username" />
            </div>

            <div className="ivds-gov-form-field">
              <label htmlFor="opisms-password">{copy.passwordLabel}</label>
              <input id="opisms-password" name="password" type="password" autoComplete="current-password" />
            </div>

            <div className="ivds-gov-auth-card__actions">
              <button type="submit" className="ivds-button ivds-button--primary">
                {copy.loginCta}
              </button>
              <a href="#">{copy.forgotPassword}</a>
            </div>
          </form>
          <p>{copy.note}</p>
        </article>
      </section>

      <aside className="ivds-gov-action-modal" aria-label={copy.modalTitle}>
        <h2 className="ivds-gov-form-section__title">{copy.modalTitle}</h2>
        <p>{copy.modalDescription}</p>
        <div className="ivds-gov-action-modal__actions">
          <button type="button" className="ivds-button ivds-button--primary">
            {copy.modalPrimary}
          </button>
          <button type="button" className="ivds-button ivds-button--secondary">
            {copy.modalSecondary}
          </button>
        </div>
      </aside>

      <GovMegaFooter locale={locale} title={labels.footerTitle} sections={footerSections} />
    </GovShell>
  );
}
