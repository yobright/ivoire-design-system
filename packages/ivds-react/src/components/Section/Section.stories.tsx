import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  title: 'React/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  render: () => (
    <Section variant="accent">
      <div style={{ display: 'grid', gap: '1rem' }}>
        <h2 style={{ margin: 0 }}>Une section structurée pour les contenus clés</h2>
        <p style={{ margin: 0 }}>
          Utilisez ce composant pour poser un rythme vertical clair entre les zones de contenu.
        </p>
        <div>
          <Button>Découvrir</Button>
        </div>
      </div>
    </Section>
  ),
};

export const Sombre: Story = {
  render: () => (
    <Section variant="strong">
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <h2 style={{ margin: 0 }}>Une section contrastée pour les temps forts</h2>
        <p style={{ margin: 0 }}>
          La variante forte aide à faire émerger une bannière, un appel à l’action ou une zone de synthèse.
        </p>
      </div>
    </Section>
  ),
};
