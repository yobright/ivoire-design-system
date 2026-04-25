import type { Meta, StoryObj } from '@storybook/react';
import { StatusLabel } from './StatusLabel';

const meta: Meta<typeof StatusLabel> = {
  title: 'React/StatusLabel',
  component: StatusLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Documentation du composant React IVDS avec exemples d’utilisation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'alert', 'error'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'En attente',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <StatusLabel type="neutral">Brouillon</StatusLabel>
      <StatusLabel type="info">En cours</StatusLabel>
      <StatusLabel type="success">Validé</StatusLabel>
      <StatusLabel type="alert">À vérifier</StatusLabel>
      <StatusLabel type="error">Rejeté</StatusLabel>
    </div>
  ),
};

export const AvecIcone: Story = {
  args: {
    type: 'success',
    iconStart: <span>✓</span>,
    children: 'Disponible',
  },
};
