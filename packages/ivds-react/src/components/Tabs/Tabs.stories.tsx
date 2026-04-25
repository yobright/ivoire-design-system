import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'React/Onglets',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  {
    id: 'apercu',
    label: 'Aperçu',
    content: 'Vision produit, objectifs du trimestre et prochaine étape de validation.',
  },
  {
    id: 'livrables',
    label: 'Livrables',
    content: 'Maquettes, spécifications et composants prêts pour l’implémentation.',
  },
  {
    id: 'mesure',
    label: 'Mesure',
    content: 'Indicateurs de performance et suivi d’adoption après lancement.',
    disabled: true,
  },
];

export const ParDefaut: Story = {
  args: {
    items,
    ariaLabel: 'Navigation des sections du projet',
  },
};

export const PleineLargeur: Story = {
  args: {
    items,
    fullWidth: true,
    defaultActiveId: 'livrables',
    ariaLabel: 'Navigation des sections du projet',
  },
};
