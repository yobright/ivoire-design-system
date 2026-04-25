import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'React/Interrupteur',
  component: Switch,
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
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Mode contraste élevé',
    helperText: 'Active le mode de lisibilité renforcée.',
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Switch size="small" label="Petit" />
      <Switch size="medium" label="Moyen" defaultChecked />
      <Switch size="large" label="Grand" />
    </div>
  ),
};

export const Controle: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <Switch
          label={enabled ? 'Notifications actives' : 'Notifications inactives'}
          helperText="Choisissez si l’équipe reçoit les alertes produit."
          checked={enabled}
          onChange={(event) => setEnabled(event.target.checked)}
        />
        <span>{enabled ? 'Les alertes sont activées.' : 'Les alertes sont désactivées.'}</span>
      </div>
    );
  },
};

export const SansLabel: Story = {
  args: {
    'aria-label': 'Activer les notifications produit',
    defaultChecked: true,
    helperText: 'Exemple sans libellé visuel.',
  },
};
