import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ErrorSummary } from '../components/ErrorSummary';
import { Header, HeaderActions, HeaderBrand, HeaderNav } from '../components/Header';
import { Navigation, NavigationLink } from '../components/Navigation';
import { Notification } from '../components/Notification';
import { StatusLabel } from '../components/StatusLabel';
import { TextInput } from '../components/TextInput';

const meta: Meta = {
  title: 'Patterns/Parcours documentes',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Parcours de reference relies aux patterns documentes dans le dossier documentation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const FormulaireValidation: Story = {
  render: () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const errors = [
      !name ? { label: 'Le nom complet est obligatoire.', onClick: () => document.getElementById('pattern-name')?.focus() } : null,
      !email ? { label: 'L’adresse email est obligatoire.', onClick: () => document.getElementById('pattern-email')?.focus() } : null,
    ].filter(Boolean) as { label: string; onClick: () => void }[];

    return (
      <Card variant="elevated" header={<h2>Demande de service</h2>} style={{ maxWidth: 560 }}>
          {submitted && errors.length > 0 ? (
            <ErrorSummary
              title="Corrigez le formulaire"
              description="Deux champs bloquent l’envoi de la demande."
              errors={errors}
            />
          ) : null}

          {valid ? (
            <Alert variant="success" title="Formulaire valide">
              La demande peut etre envoyee au service concerne.
            </Alert>
          ) : null}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              setValid(errors.length === 0);
            }}
            noValidate
          >
            <div style={{ display: 'grid', gap: '1rem' }}>
              <TextInput
                id="pattern-name"
                label="Nom complet"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                error={submitted && !name ? 'Renseignez le nom complet.' : false}
                required
              />
              <TextInput
                id="pattern-email"
                label="Adresse email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                error={submitted && !email ? 'Renseignez une adresse email.' : false}
                required
              />
              <Button type="submit">Soumettre la demande</Button>
            </div>
          </form>
      </Card>
    );
  },
};

export const NavigationApplication: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    const labels = {
      dashboard: 'Tableau de bord',
      services: 'Services',
      settings: 'Parametres',
    };

    return (
      <div>
        <Header>
          <HeaderBrand>
            <strong>Ivoire DS</strong>
          </HeaderBrand>
          <HeaderNav aria-label="Navigation principale">
            {Object.entries(labels).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                aria-current={active === key ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setActive(key);
                }}
              >
                {label}
              </a>
            ))}
          </HeaderNav>
          <HeaderActions>
            <Button size="small">Nouvelle demande</Button>
          </HeaderActions>
        </Header>

        <Navigation aria-label="Navigation secondaire">
          {Object.entries(labels).map(([key, label]) => (
            <NavigationLink
              key={key}
              href={`#${key}`}
              active={active === key}
              onClick={(event) => {
                event.preventDefault();
                setActive(key);
              }}
            >
              {label}
            </NavigationLink>
          ))}
        </Navigation>

        <main style={{ padding: '2rem 0' }}>
          <h1>{labels[active as keyof typeof labels]}</h1>
          <p>Section active du parcours applicatif.</p>
        </main>
      </div>
    );
  },
};

export const FeedbackEtats: Story = {
  render: () => {
    const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    return (
      <Card variant="bordered" header={<h2>Traitement de dossier</h2>} style={{ maxWidth: 560 }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <StatusLabel type={state === 'success' ? 'success' : state === 'error' ? 'error' : 'info'}>
              {state === 'idle' && 'Pret a traiter'}
              {state === 'loading' && 'Traitement en cours'}
              {state === 'success' && 'Traitement termine'}
              {state === 'error' && 'Action requise'}
            </StatusLabel>

            {state === 'success' ? (
              <Notification type="success" title="Demande traitee">
                Le dossier est pret pour la prochaine etape.
              </Notification>
            ) : null}

            {state === 'error' ? (
              <Alert variant="error" title="Piece manquante">
                Ajoutez le justificatif demande avant de continuer.
              </Alert>
            ) : null}

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button
                loading={state === 'loading'}
                onClick={() => {
                  setState('loading');
                  window.setTimeout(() => setState('success'), 250);
                }}
              >
                Lancer le traitement
              </Button>
              <Button variant="secondary" onClick={() => setState('error')}>
                Simuler une erreur
              </Button>
            </div>
          </div>
      </Card>
    );
  },
};
