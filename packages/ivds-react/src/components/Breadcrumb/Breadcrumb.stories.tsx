import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: "React/Fil d'Ariane",
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Accueil', href: '/' },
  { label: 'Gouvernement', href: '/gouvernement' },
  { label: 'Institutions', isCurrent: true },
];

export const ParDefaut: Story = {
  args: {
    items,
  },
};

export const SeparateurPersonnalise: Story = {
  args: {
    items,
    separator: '>',
  },
};
