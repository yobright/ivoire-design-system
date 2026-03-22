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
  { label: 'Choisir un service', value: '' },
  { label: 'Demande de passeport', value: 'passport' },
  { label: 'e-Vaccination', value: 'vaccination' },
  { label: 'CNPS', value: 'cnps' },
];

export const ParDefaut: Story = {
  args: {
    label: 'Service',
    helperText: 'Selectionnez une option',
    options: defaultOptions,
    defaultValue: '',
  },
};

export const EtatErreur: Story = {
  args: {
    label: 'Service',
    options: defaultOptions,
    error: 'Ce champ est obligatoire.',
    required: true,
    defaultValue: '',
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', width: '320px' }}>
      <Select label="Petit" size="small" options={defaultOptions} defaultValue="" />
      <Select label="Moyen" size="medium" options={defaultOptions} defaultValue="" />
      <Select label="Grand" size="large" options={defaultOptions} defaultValue="" />
    </div>
  ),
};
