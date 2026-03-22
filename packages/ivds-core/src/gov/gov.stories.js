import './gov.scss';

export default {
  title: 'Core/Gov/Patterns',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Government page patterns for IVDS. Includes FR/EN examples and HTML snippets for CSS-first integration.',
      },
    },
  },
};

const nav = `
  <ul class="ivds-gov-primary-nav__list">
    <li class="ivds-gov-primary-nav__item ivds-gov-primary-nav__item--active"><a href="#">Accueil</a></li>
    <li class="ivds-gov-primary-nav__item"><a href="#">Gouvernement</a></li>
    <li class="ivds-gov-primary-nav__item"><a href="#">e-Services</a></li>
    <li class="ivds-gov-primary-nav__item"><a href="#">Actualités</a></li>
    <li class="ivds-gov-primary-nav__item"><a href="#">Publications</a></li>
    <li class="ivds-gov-primary-nav__item"><a href="#">Agenda</a></li>
  </ul>
`;

export const LandingFR = () => `
  <main class="ivds-gov-shell" lang="fr">
    <div class="ivds-gov-shell__container">
      <section class="ivds-gov-top-promo" aria-labelledby="promo-title">
        <div>
          <h1 id="promo-title" class="ivds-gov-top-promo__title">Portail officiel du Gouvernement de Côte d'Ivoire</h1>
          <p class="ivds-gov-top-promo__subtitle">Base IVDS V1 - modèle landing gouvernementale</p>
        </div>
        <button class="ivds-button ivds-button--primary">Écrire au Gouvernement</button>
      </section>

      <section class="ivds-gov-flash-ticker" aria-label="Flash infos">
        <span class="ivds-gov-flash-ticker__label">Flash Infos</span>
        <ul class="ivds-gov-flash-ticker__list">
          <li class="ivds-gov-flash-ticker__item"><a href="#">Coopération internationale: nouvelle convention signée.</a></li>
          <li class="ivds-gov-flash-ticker__item"><a href="#">Sécurité routière: campagne nationale renforcée.</a></li>
        </ul>
      </section>

      <header class="ivds-gov-header">
        <div class="ivds-gov-header__row">
          <div class="ivds-gov-header__brand">
            <p class="ivds-gov-header__brand-title">Portail officiel</p>
            <p class="ivds-gov-header__brand-subtitle">République de Côte d'Ivoire</p>
          </div>
          <div class="ivds-gov-language-switcher" aria-label="Choix de langue">
            <button class="ivds-gov-language-switcher__button ivds-gov-language-switcher__button--active" type="button">FR</button>
            <button class="ivds-gov-language-switcher__button" type="button">EN</button>
          </div>
        </div>
        <nav class="ivds-gov-primary-nav" aria-label="Navigation principale">${nav}</nav>
      </header>

      <section class="ivds-gov-main-grid" aria-label="Contenu principal">
        <article class="ivds-gov-news-panel">
          <h2 class="ivds-gov-news-panel__title">Actualités</h2>
          <ul class="ivds-gov-news-panel__list">
            <li class="ivds-gov-news-panel__item">
              <a href="#">Renforcement de la sécurité routière : nouvelles mesures</a>
              <span class="ivds-gov-news-panel__meta">Politique - 2026-02-19</span>
            </li>
            <li class="ivds-gov-news-panel__item">
              <a href="#">Ouverture du portail e-services unifié</a>
              <span class="ivds-gov-news-panel__meta">e-Services - 2026-02-18</span>
            </li>
          </ul>
        </article>

        <aside class="ivds-gov-agenda-panel">
          <h2 class="ivds-gov-agenda-panel__title">Agenda</h2>
          <ul class="ivds-gov-agenda-panel__list">
            <li class="ivds-gov-agenda-panel__item">
              <a href="#">Conseil des ministres</a>
              <span class="ivds-gov-agenda-panel__meta">2026-02-21 - Abidjan</span>
            </li>
            <li class="ivds-gov-agenda-panel__item">
              <a href="#">Forum transformation numérique</a>
              <span class="ivds-gov-agenda-panel__meta">2026-02-25 - Yamoussoukro</span>
            </li>
          </ul>
        </aside>
      </section>

      <section class="ivds-gov-service-directory">
        <h2 class="ivds-gov-service-directory__title">Annuaire e-Services</h2>
        <ul class="ivds-gov-service-directory__list">
          <li class="ivds-gov-service-directory__item">
            <span aria-hidden="true">🛂</span>
            <a href="#">Demande de passeport officiel</a>
            <span class="ivds-gov-service-directory__status ivds-gov-service-directory__status--available">available</span>
          </li>
          <li class="ivds-gov-service-directory__item">
            <span aria-hidden="true">💉</span>
            <a href="#">Carnet de vaccination électronique</a>
            <span class="ivds-gov-service-directory__status ivds-gov-service-directory__status--maintenance">maintenance</span>
          </li>
        </ul>
      </section>

      <footer class="ivds-gov-mega-footer">
        <h2 class="ivds-gov-mega-footer__title">Navigation institutionnelle</h2>
        <div class="ivds-gov-mega-footer__grid">
          <section class="ivds-gov-mega-footer__section"><h3>Primature</h3><ul><li><a href="#">Premier Ministre</a></li><li><a href="#">Discours</a></li></ul></section>
          <section class="ivds-gov-mega-footer__section"><h3>Gouvernement</h3><ul><li><a href="#">Institutions</a></li><li><a href="#">Agenda</a></li></ul></section>
          <section class="ivds-gov-mega-footer__section"><h3>Actualités</h3><ul><li><a href="#">Politique</a></li><li><a href="#">Économie</a></li></ul></section>
          <section class="ivds-gov-mega-footer__section"><h3>Publications</h3><ul><li><a href="#">Documents</a></li><li><a href="#">Communiqués</a></li></ul></section>
        </div>
      </footer>
    </div>
  </main>
`;

export const LandingEN = () =>
  LandingFR()
    .replace('lang="fr"', 'lang="en"')
    .replace('Accueil', 'Home')
    .replace('Gouvernement', 'Government')
    .replace('Actualités', 'News')
    .replace('Annuaire e-Services', 'e-Services Directory')
    .replace('Navigation institutionnelle', 'Institutional navigation')
    .replace('Écrire au Gouvernement', 'Write to Government');
