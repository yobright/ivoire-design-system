import { loadLanding } from '../adapters/json-adapter.js';

const app = document.getElementById('app');
const localeSwitch = document.getElementById('locale-switch');

const SUPPORTED_LOCALES = ['fr', 'en'];

const UI_LABELS = {
  fr: {
    portalTitle: 'Portail officiel',
    portalSubtitle: "Republique de Cote d'Ivoire",
    newsTitle: 'Actualites',
    agendaTitle: 'Agenda',
    servicesTitle: 'Annuaire e-Services',
    footerTitle: 'Navigation institutionnelle',
    flashLabel: 'Flash Infos',
  },
  en: {
    portalTitle: 'Official portal',
    portalSubtitle: "Republic of Cote d'Ivoire",
    newsTitle: 'News',
    agendaTitle: 'Agenda',
    servicesTitle: 'e-Services directory',
    footerTitle: 'Institutional navigation',
    flashLabel: 'Flash News',
  },
};

const STATUS_LABELS = {
  available: { fr: 'Disponible', en: 'Available' },
  maintenance: { fr: 'Maintenance', en: 'Maintenance' },
  'coming-soon': { fr: 'Bientot', en: 'Coming soon' },
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const text = (value, locale) => value?.[locale] ?? value?.fr ?? value?.en ?? '';

const formatDate = (value, locale) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return escapeHtml(value ?? '');
  }

  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'long',
  }).format(date);
};

const renderNavItems = (items, locale) =>
  items
    .map((item) => {
      const children = item.children?.length
        ? `
          <ul class="ivds-gov-primary-nav__sublist">
            ${item.children
              .map(
                (child) =>
                  `<li class="ivds-gov-primary-nav__subitem"><a href="${escapeHtml(child.href || '#')}">${escapeHtml(
                    text(child.label, locale),
                  )}</a></li>`,
              )
              .join('')}
          </ul>
        `
        : '';

      return `
        <li class="ivds-gov-primary-nav__item">
          <a href="${escapeHtml(item.href || '#')}">${escapeHtml(text(item.label, locale))}</a>
          ${children}
        </li>
      `;
    })
    .join('');

const renderFooterSections = (sections, locale) =>
  sections
    .map(
      (section) => `
        <section class="ivds-gov-mega-footer__section">
          <h3>${escapeHtml(text(section.title, locale))}</h3>
          <ul>
            ${section.links
              .map(
                (link) =>
                  `<li><a href="${escapeHtml(link.href || '#')}">${escapeHtml(text(link.label, locale))}</a></li>`,
              )
              .join('')}
          </ul>
        </section>
      `,
    )
    .join('');

function renderLanding(content) {
  const locale = SUPPORTED_LOCALES.includes(content.locale) ? content.locale : 'fr';
  const labels = UI_LABELS[locale];
  const footerSections = Array.isArray(content.footerSections) ? content.footerSections : [];
  const agenda = Array.isArray(content.agenda) ? content.agenda : [];

  app.innerHTML = `
    <main class="ivds-gov-shell" lang="${locale}">
      <div class="ivds-gov-shell__container">
        <section class="ivds-gov-top-promo" aria-labelledby="promo-title">
          <div>
            <h1 id="promo-title" class="ivds-gov-top-promo__title">${escapeHtml(content.promo.title)}</h1>
            <p class="ivds-gov-top-promo__subtitle">${escapeHtml(content.promo.subtitle)}</p>
          </div>
          <a class="ivds-button ivds-button--primary" href="${escapeHtml(content.promo.ctaHref || '#')}">${escapeHtml(content.promo.ctaLabel || '')}</a>
        </section>

        <section class="ivds-gov-flash-ticker" aria-label="${escapeHtml(labels.flashLabel)}">
          <span class="ivds-gov-flash-ticker__label">${escapeHtml(labels.flashLabel)}</span>
          <ul class="ivds-gov-flash-ticker__list">
            ${content.flash
              .map(
                (item) =>
                  `<li class="ivds-gov-flash-ticker__item"><a href="${escapeHtml(item.href || '#')}">${escapeHtml(
                    text(item.title, locale),
                  )}</a></li>`,
              )
              .join('')}
          </ul>
        </section>

        <header class="ivds-gov-header">
          <div class="ivds-gov-header__row">
            <div class="ivds-gov-header__brand">
              <p class="ivds-gov-header__brand-title">${escapeHtml(labels.portalTitle)}</p>
              <p class="ivds-gov-header__brand-subtitle">${escapeHtml(labels.portalSubtitle)}</p>
            </div>
            <div class="ivds-gov-language-switcher" aria-label="Language switcher" role="group">
              <button type="button" data-locale="fr" class="ivds-gov-language-switcher__button ${
                locale === 'fr' ? 'ivds-gov-language-switcher__button--active' : ''
              }">FR</button>
              <button type="button" data-locale="en" class="ivds-gov-language-switcher__button ${
                locale === 'en' ? 'ivds-gov-language-switcher__button--active' : ''
              }">EN</button>
            </div>
          </div>

          <nav class="ivds-gov-primary-nav" aria-label="${locale === 'fr' ? 'Navigation principale' : 'Primary navigation'}">
            <ul class="ivds-gov-primary-nav__list">
              ${renderNavItems(content.navigation, locale)}
            </ul>
          </nav>
        </header>

        <section class="ivds-gov-main-grid">
          <article class="ivds-gov-news-panel">
            <h2 class="ivds-gov-news-panel__title">${escapeHtml(labels.newsTitle)}</h2>
            <ul class="ivds-gov-news-panel__list">
              ${content.news
                .map(
                  (item) => `
                    <li class="ivds-gov-news-panel__item">
                      <a href="${escapeHtml(item.href || '#')}">${escapeHtml(text(item.title, locale))}</a>
                      ${
                        item.excerpt
                          ? `<p class="ivds-gov-news-panel__excerpt">${escapeHtml(text(item.excerpt, locale))}</p>`
                          : ''
                      }
                      <span class="ivds-gov-news-panel__meta">${escapeHtml(item.category)} - ${formatDate(
                        item.publishedAt,
                        locale,
                      )}</span>
                    </li>
                  `,
                )
                .join('')}
            </ul>
          </article>

          <aside class="ivds-gov-agenda-panel">
            <h2 class="ivds-gov-agenda-panel__title">${escapeHtml(labels.agendaTitle)}</h2>
            <ul class="ivds-gov-agenda-panel__list">
              ${agenda
                .map(
                  (item) => `
                    <li class="ivds-gov-agenda-panel__item">
                      <a href="${escapeHtml(item.href || '#')}">${escapeHtml(text(item.title, locale))}</a>
                      <span class="ivds-gov-agenda-panel__meta">${formatDate(item.startAt, locale)}${
                        item.location ? ` - ${escapeHtml(text(item.location, locale))}` : ''
                      }</span>
                    </li>
                  `,
                )
                .join('')}
            </ul>
          </aside>
        </section>

        <section class="ivds-gov-service-directory">
          <h2 class="ivds-gov-service-directory__title">${escapeHtml(labels.servicesTitle)}</h2>
          <ul class="ivds-gov-service-directory__list">
            ${content.services
              .map((item) => {
                const status = item.status || 'coming-soon';
                const statusLabel = STATUS_LABELS[status]?.[locale] ?? status;
                return `
                  <li class="ivds-gov-service-directory__item">
                    <span aria-hidden="true">${escapeHtml(item.icon || '•')}</span>
                    <a href="${escapeHtml(item.href || '#')}">${escapeHtml(text(item.title, locale))}</a>
                    <span class="ivds-gov-service-directory__status ivds-gov-service-directory__status--${escapeHtml(
                      status,
                    )}">${escapeHtml(statusLabel)}</span>
                  </li>
                `;
              })
              .join('')}
          </ul>
        </section>

        <footer class="ivds-gov-mega-footer">
          <h2 class="ivds-gov-mega-footer__title">${escapeHtml(labels.footerTitle)}</h2>
          <div class="ivds-gov-mega-footer__grid">
            ${renderFooterSections(footerSections, locale)}
          </div>
        </footer>
      </div>
    </main>
  `;
}

async function bootstrap(locale) {
  const normalizedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'fr';
  const content = await loadLanding(normalizedLocale);
  renderLanding(content);
  localeSwitch.value = normalizedLocale;
}

localeSwitch.addEventListener('change', (event) => {
  bootstrap(event.target.value);
});

app.addEventListener('click', (event) => {
  const target = event.target.closest('[data-locale]');
  if (!target) {
    return;
  }

  const { locale } = target.dataset;
  if (!locale) {
    return;
  }

  bootstrap(locale);
});

bootstrap('fr');
