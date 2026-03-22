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
    label: 'Mode contraste eleve',
    helperText: 'Active le mode de lisibilite renforcee.',
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
      <Switch
        label={enabled ? 'Notifications actives' : 'Notifications inactives'}
        checked={enabled}
        onChange={(event) => setEnabled(event.target.checked)}
      />
    );
  },
};
