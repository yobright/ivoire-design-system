import {
  BadgeCheck,
  Building2,
  CalendarDays,
  CircleHelp,
  FileCheck2,
  FileText,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  Siren,
  UsersRound,
} from 'lucide-react';
import type { MegaMenuSection } from '@ivds/react';

export type MenuLink = {
  label: string;
  href: string;
  description?: string;
  tag?: string;
};

export type MenuColumn = {
  title: string;
  links: MenuLink[];
};

export const megaMenuSections: MegaMenuSection[] = [
  {
    id: 'a-la-une',
    label: 'À la une',
    columns: [
      {
        title: "L'actualité",
        links: [
          { label: 'Ce qui change', href: '#changements' },
          { label: 'Vos questions, nos réponses', href: '#questions' },
          { label: "Toute l'actualité", href: '#actualites' },
          { label: 'Flash infos', href: '#flash' },
        ],
      },
      {
        title: 'Médias',
        links: [
          { label: 'Gouv’Vidéo', href: '#video' },
          { label: 'Gouv’Audio', href: '#audio' },
          { label: 'Revue de presse', href: '#presse' },
          { label: 'Photothèque', href: '#photos' },
        ],
      },
      {
        title: 'Thématiques',
        links: [
          { label: 'Économie', href: '#economie' },
          { label: 'Santé', href: '#sante' },
          { label: 'Éducation', href: '#education' },
          { label: 'Sécurité', href: '#securite' },
          { label: 'Société', href: '#societe' },
        ],
      },
      {
        title: 'Grands dossiers',
        links: [
          { label: 'PND 2026-2030', href: '#pnd' },
          { label: 'Allo 101', href: '#allo101' },
          { label: 'Aides carburant', href: '#carburant' },
          { label: "Bilan de l'action gouvernementale", href: '#bilan' },
        ],
      },
    ],
  },
  {
    id: 'decryptages',
    label: 'Décryptages',
    columns: [
      {
        title: 'Comprendre',
        links: [
          { label: 'Explications des mesures', href: '#mesures' },
          { label: 'Questions fréquentes', href: '#faq' },
          { label: 'Données clés', href: '#donnees' },
        ],
      },
      {
        title: 'Formats',
        links: [
          { label: 'Articles explicatifs', href: '#articles' },
          { label: 'Infographies', href: '#infographies' },
          { label: 'Vidéos pédagogiques', href: '#videos-pedagogiques' },
        ],
      },
      {
        title: 'Dossiers',
        links: [
          { label: 'Services publics', href: '#services-publics' },
          { label: 'Budget et fiscalité', href: '#budget' },
          { label: 'Transformation numérique', href: '#numerique' },
        ],
      },
    ],
  },
  {
    id: 'politiques',
    label: 'Politiques prioritaires',
    columns: [
      {
        title: 'Social',
        links: [
          { label: 'Santé et CMU', href: '#cmu' },
          { label: 'Éducation et formation', href: '#formation' },
          { label: 'Emploi jeunes', href: '#emploi' },
          { label: 'Solidarité nationale', href: '#solidarite' },
        ],
      },
      {
        title: 'Économie',
        links: [
          { label: 'Agriculture et vivrier', href: '#agriculture' },
          { label: 'PME et entrepreneuriat', href: '#pme' },
          { label: 'Fiscalité et douanes', href: '#fiscalite' },
          { label: 'Infrastructures', href: '#infrastructures' },
        ],
      },
      {
        title: 'Territoires',
        links: [
          { label: 'Programmes par région', href: '#regions' },
          { label: 'Collectivités locales', href: '#collectivites' },
          { label: 'Chantiers structurants', href: '#chantiers' },
        ],
      },
    ],
  },
  {
    id: 'risques',
    label: 'Prévention des risques',
    columns: [
      {
        title: 'Se préparer',
        links: [
          { label: "Situation d'urgence", href: '#urgence' },
          { label: 'Risques sanitaires', href: '#risques-sanitaires' },
          { label: 'Protection civile', href: '#protection-civile' },
        ],
      },
      {
        title: 'Signaler',
        links: [
          { label: 'Allo 101', href: '#allo101' },
          { label: 'Incident de service public', href: '#incident' },
          { label: 'Cybercriminalité', href: '#cyber' },
        ],
      },
    ],
  },
  {
    id: 'gouvernement',
    label: 'Le Gouvernement',
    columns: [
      {
        title: 'Institutions',
        links: [
          { label: 'Présidence de la République', href: '#presidence' },
          { label: 'Primature', href: '#primature' },
          { label: 'Membres du Gouvernement', href: '#membres' },
          { label: 'Conseil des ministres', href: '#conseil' },
        ],
      },
      {
        title: 'Administration',
        links: [
          { label: 'Ministères', href: '#ministeres' },
          { label: 'Districts et régions', href: '#regions' },
          { label: 'Ambassades', href: '#ambassades' },
          { label: 'Annuaire des sites publics', href: '#annuaire' },
        ],
      },
      {
        title: 'Transparence',
        links: [
          { label: 'Communiqués officiels', href: '#communiques' },
          { label: 'Textes officiels', href: '#textes' },
          { label: 'Open data', href: '#open-data' },
          { label: 'Marchés publics', href: '#marches' },
        ],
      },
    ],
  },
  {
    id: 'liens',
    label: 'Liens utiles',
    columns: [
      {
        title: 'Démarches',
        links: [
          { label: 'Passeport', href: '#passeport' },
          { label: 'CMU', href: '#cmu' },
          { label: 'Impôts', href: '#impots' },
          { label: 'Concours administratifs', href: '#concours' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          { label: 'Portail des services publics', href: '#services' },
          { label: 'Portail fiscal officiel', href: '#fiscal' },
          { label: 'Open data Côte d’Ivoire', href: '#data' },
          { label: 'Espace presse', href: '#presse' },
        ],
      },
    ],
  },
];

export const megaMenuAction = {
  label: 'Aides carburant',
  href: '#aides-carburant',
};

export const headlineItems = [
  {
    title: 'Le Gouvernement accélère la mise en œuvre du PND 2026-2030',
    kicker: 'Développement',
    summary: 'Investissements prioritaires, emploi et services publics structurent la nouvelle feuille de route.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1300&q=80',
  },
  {
    title: 'Allo 101: un accès simplifié aux services publics',
    kicker: 'Service public',
    summary: 'Un point de contact clair pour s’informer, signaler un incident et être orienté.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1300&q=80',
  },
  {
    title: 'Démarches administratives: priorité aux guichets numériques',
    kicker: 'e-Services',
    summary: 'Les plateformes publiques sont regroupées pour réduire les délais et fluidifier le suivi.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=80',
  },
];

export const stats = [
  { value: '21 M+', label: 'personnes enrôlées à la CMU', icon: HeartPulse },
  { value: '94%', label: "taux d'électrification national", icon: BadgeCheck },
  { value: '86 178', label: "offres d'emploi et stages mobilisés", icon: UsersRound },
  { value: '52 000+', label: 'entreprises inscrites à la facture normalisée', icon: Building2 },
];

export const serviceShortcuts = [
  { label: 'Passeport', href: '#passeport', icon: FileText },
  { label: 'CMU', href: '#cmu', icon: HeartPulse },
  { label: 'Impôts', href: '#impots', icon: FileCheck2 },
  { label: 'Concours', href: '#concours', icon: GraduationCap },
  { label: 'Risques', href: '#risques', icon: ShieldAlert },
  { label: 'Urgence', href: '#urgence', icon: Siren },
  { label: 'Agenda', href: '#agenda', icon: CalendarDays },
  { label: 'Aide', href: '#aide', icon: CircleHelp },
];
