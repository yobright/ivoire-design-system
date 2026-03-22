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
    id: 'politique',
    label: 'Politique',
    content: 'Dernieres decisions institutionnelles et comptes rendus.',
  },
  {
    id: 'economie',
    label: 'Economie',
    content: 'Indicateurs macroeconomiques et chantiers prioritaires.',
  },
  {
    id: 'sante',
    label: 'Sante',
    content: 'Programmes de prevention et d acces aux soins.',
    disabled: true,
  },
];

export const ParDefaut: Story = {
  args: {
    items,
    ariaLabel: 'Navigation des sections',
  },
};

export const PleineLargeur: Story = {
  args: {
    items,
    fullWidth: true,
    defaultActiveId: 'economie',
    ariaLabel: 'Navigation des sections',
  },
};
