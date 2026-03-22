import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'React/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'outline'],
    },
    showDot: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'Nouveau',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Principal</Badge>
      <Badge variant="success">Succès</Badge>
      <Badge variant="warning">Avertissement</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  args: {
    variant: 'primary',
    showDot: true,
    children: 'En ligne',
  },
};
