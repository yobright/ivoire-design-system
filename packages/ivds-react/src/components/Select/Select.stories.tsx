import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'React/Sélecteur',
  component: Select,
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
    required: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'Audit Design System', value: 'audit' },
  { label: 'Refonte Expérience Produit', value: 'revamp' },
  { label: 'Sprint de Marque', value: 'brand-sprint' },
];

export const ParDefaut: Story = {
  args: {
    label: 'Parcours',
    helperText: 'Choisissez le parcours adapté à votre équipe.',
    placeholder: 'Sélectionnez un parcours…',
    options: defaultOptions,
    defaultValue: '',
  },
};

export const EtatErreur: Story = {
  args: {
    label: 'Parcours',
    placeholder: 'Sélectionnez un parcours…',
    options: defaultOptions,
    error: 'Sélectionnez un parcours pour continuer.',
    required: true,
    defaultValue: '',
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', width: '320px' }}>
      <Select label="Petit" size="small" placeholder="Choisissez…" options={defaultOptions} defaultValue="" />
      <Select label="Moyen" size="medium" placeholder="Choisissez…" options={defaultOptions} defaultValue="" />
      <Select label="Grand" size="large" placeholder="Choisissez…" options={defaultOptions} defaultValue="" />
    </div>
  ),
};
