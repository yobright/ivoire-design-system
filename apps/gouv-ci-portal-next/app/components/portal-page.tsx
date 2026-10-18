'use client';

import {
  Bell,
  Eye,
  Mail,
  Moon,
  Search,
  ShieldCheck,
} from 'lucide-react';
import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Linkbox,
  StatusLabel,
  Stepper,
  Table,
  Tag,
} from '@ivds/react';
import { MegaMenu } from './mega-menu';
import { headlineItems, serviceShortcuts, stats } from '../data/navigation';

const breadcrumbItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Portail officiel', href: '#portail' },
  { label: "Action gouvernementale", isCurrent: true },
];

const serviceSteps = [
  { label: 'Identifier le besoin', state: 'completed' as const },
  { label: 'Préparer le dossier', state: 'completed' as const },
  { label: 'Déposer en ligne', state: 'selected' as const },
  { label: 'Suivre la demande', state: 'available' as const },
];

const policyColumns = [
  { key: 'programme', headerName: 'Programme', isSortable: true },
  { key: 'statut', headerName: 'Statut', isSortable: true },
  { key: 'responsable', headerName: 'Responsable' },
  {
    key: 'priorite',
    headerName: 'Priorité',
    transform: ({ value }: { value: unknown }) => (
      <Badge variant={String(value) === 'Haute' ? 'warning' : 'success'} showDot>
        {String(value)}
      </Badge>
    ),
  },
];

const policyRows = [
  { id: 1, programme: 'Allo 101', statut: 'En déploiement', responsable: 'SIG', priorite: 'Haute' },
  { id: 2, programme: 'Guichets numériques', statut: 'Actif', responsable: 'Administration numérique', priorite: 'Haute' },
  { id: 3, programme: 'CMU', statut: 'Suivi régulier', responsable: 'Santé publique', priorite: 'Structurante' },
];

export function PortalPage() {
  return (
    <main className="portal">
      <section className="topline" aria-label="Liens rapides">
        <div className="page-shell topline__inner">
          <a href="#presse">Espace presse</a>
          <a href="#accessibilite">Accessibilité</a>
          <button type="button">
            <Eye size={16} />
            Paramètres d’affichage
          </button>
          <button type="button" aria-label="Activer le thème sombre">
            <Moon size={16} />
          </button>
        </div>
      </section>

      <header className="site-header">
        <div className="page-shell site-header__inner">
          <a className="brand" href="#" aria-label="Accueil du portail officiel du Gouvernement">
            <span className="brand__crest" aria-hidden="true">CI</span>
            <span>
              <strong>gouv.ci</strong>
              <small>Portail officiel du Gouvernement</small>
            </span>
          </a>

          <form className="global-search" role="search">
            <label htmlFor="site-search">Rechercher sur le portail</label>
            <div>
              <input id="site-search" placeholder="Démarches, actualités, services…" />
              <button type="submit" aria-label="Lancer la recherche">
                <Search size={22} />
              </button>
            </div>
          </form>
        </div>

        <MegaMenu />
      </header>

      <section className="hero-band">
        <div className="page-shell">
          <Breadcrumb items={breadcrumbItems} aria-label="Fil d’Ariane" className="portal-breadcrumb" />

          <div className="flash-strip">
            <strong>Flash infos</strong>
            <span>Objectifs clés PND 2026-2030 : emplois, santé, fiscalité et digitalisation au cœur de l’action publique.</span>
            <a href="#flash">Voir tous les flashs</a>
          </div>

          <Alert variant="brand" title="Prototype institutionnel IVDS" className="system-alert">
            Cette interface combine composants, tokens, états accessibles et patterns de navigation du design system.
          </Alert>

          <div className="hero-grid">
            <article className="lead-story">
              <img src={headlineItems[0].image} alt="Vue moderne d'un espace institutionnel" />
              <div className="lead-story__content">
                <div className="label-row">
                  <StatusLabel type="info">{headlineItems[0].kicker}</StatusLabel>
                  <Tag variant="success" size="small" shape="pill">PND 2026-2030</Tag>
                  <Badge variant="accent" showDot>Mis à jour</Badge>
                </div>
                <h1>{headlineItems[0].title}</h1>
                <p>{headlineItems[0].summary}</p>
                <div className="hero-actions">
                  <Button>Lire le dossier</Button>
                  <Button variant="secondary">Consulter les indicateurs</Button>
                </div>
              </div>
            </article>

            <aside className="priority-panel" aria-label="Actualités prioritaires">
              <div className="panel-heading">
                <span>À la une</span>
                <a href="#actualites">Toute l’actualité</a>
              </div>
              {headlineItems.slice(1).map((item) => (
                <a href="#actualites" className="side-story" key={item.title}>
                  <img src={item.image} alt="" />
                  <span>{item.kicker}</span>
                  <strong>{item.title}</strong>
                </a>
              ))}
              <a href="#allo101" className="help-callout">
                <ShieldCheck size={22} />
                <span>
                  <strong>Allo 101</strong>
                  Assistance et orientation sur les services publics
                </span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-shell service-zone" id="services">
        <div className="section-title">
          <span>Démarches essentielles</span>
          <h2>Accéder rapidement au bon service</h2>
          <p>Une entrée orientée besoin utilisateur, pas organigramme administratif.</p>
        </div>
        <div className="shortcut-grid">
          {serviceShortcuts.map((service) => {
            const Icon = service.icon;
            return (
              <Linkbox
                className="shortcut"
                href={service.href}
                key={service.label}
                heading={service.label}
                headingLevel={3}
                text="Accès guidé et suivi de dossier"
                linkAriaLabel={`Accéder au service ${service.label}`}
                linkboxAriaLabel={`Service ${service.label}`}
                border
              >
                <Icon size={22} />
              </Linkbox>
            );
          })}
        </div>
      </section>

      <section className="page-shell journey-zone">
        <div className="section-title">
          <span>Parcours guidé</span>
          <h2>Une démarche publique lisible de bout en bout</h2>
        </div>
        <Card variant="bordered" className="journey-card">
          <Stepper steps={serviceSteps} selectedStep={2} ariaLabel="Progression d’une démarche administrative" />
          <div className="journey-card__content">
            <Alert variant="success" title="Dossier prêt pour dépôt">
              Le design system expose les états de progression, confirmation, alerte et assistance dans une même expérience.
            </Alert>
            <Accordion heading="Voir les pièces généralement demandées" headingLevel={3} card initiallyOpen>
              <ul className="document-list">
                <li>Pièce d’identité ou numéro national d’identification</li>
                <li>Justificatif selon la démarche sélectionnée</li>
                <li>Coordonnées de contact pour le suivi</li>
              </ul>
            </Accordion>
          </div>
        </Card>
      </section>

      <section className="page-shell data-zone">
        <div className="section-title">
          <span>Chiffres clés</span>
          <h2>Suivre l’action gouvernementale</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} variant="bordered" className="metric-card">
                <Icon size={24} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="page-shell dashboard-zone">
        <div className="section-title">
          <span>Pilotage</span>
          <h2>Des tableaux publics compréhensibles</h2>
        </div>
        <Table
          cols={policyColumns}
          rows={policyRows}
          heading="Suivi des programmes prioritaires"
          caption="Tableau de démonstration des composants IVDS Table et Badge."
          dense
          striped
        />
      </section>

      <section className="page-shell editorial-grid">
        <article className="feature-block">
          <span>Grand dossier</span>
          <h2>PND 2026-2030 : une lecture claire des priorités publiques</h2>
          <p>
            Le portail modernisé transforme les dossiers complexes en parcours lisibles :
            objectifs, actions, indicateurs, documents et services associés.
          </p>
          <Button variant="accent">Explorer le dossier</Button>
        </article>

        <div className="updates-list">
          <h2>Dernières publications</h2>
          {['Documents officiels', 'Communiqués', 'Revues de presse', 'Notes aux rédactions'].map((item) => (
            <a href="#publications" key={item}>
              <FileBadge label={item} />
              <span>Consulter</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="portal-footer">
        <div className="page-shell footer-grid">
          <div>
            <a className="brand brand--footer" href="#">
              <span className="brand__crest" aria-hidden="true">CI</span>
              <span>
                <strong>gouv.ci</strong>
                <small>Portail officiel du Gouvernement</small>
              </span>
            </a>
            <p>Ce prototype Next.js illustre une refonte moderne avec IVDS, centrée sur les démarches et la lisibilité.</p>
          </div>
          <div className="footer-newsletter">
            <h2>Recevoir les informations officielles</h2>
            <form>
              <input placeholder="Votre adresse email" aria-label="Adresse email" />
              <button type="submit">
                <Mail size={17} />
                S’abonner
              </button>
            </form>
          </div>
          <div className="footer-links">
            <a href="#plan">Plan du site</a>
            <a href="#accessibilite">Accessibilité</a>
            <a href="#mentions">Mentions légales</a>
            <a href="#cookies">Gestion des cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FileBadge({ label }: { label: string }) {
  return (
    <span className="file-badge">
      <Bell size={16} />
      {label}
    </span>
  );
}
