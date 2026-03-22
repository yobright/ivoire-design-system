import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'React/Bouton',
  component: Button,
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
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'Bouton',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Principal</Button>
      <Button variant="secondary">Secondaire</Button>
      <Button variant="tertiary">Tertiaire</Button>
      <Button variant="success">Succès</Button>
      <Button variant="warning">Avertissement</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
    </div>
  ),
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small">Petit</Button>
      <Button size="medium">Moyen</Button>
      <Button size="large">Grand</Button>
    </div>
  ),
};

export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Désactivé</Button>
      <Button loading>Chargement</Button>
    </div>
  ),
};

export const AvecIcone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button icon="→">Icône à gauche</Button>
      <Button icon="←" iconPosition="right">Icône à droite</Button>
      <Button icon="✓" iconOnly />
    </div>
  ),
};

export const PleineLargeur: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Button fullWidth>Bouton pleine largeur</Button>
    </div>
  ),
};

export const Interactif: Story = {
  args: {
    children: 'Cliquez ici !',
    variant: 'primary',
  },
};