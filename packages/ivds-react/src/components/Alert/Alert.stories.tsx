import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'React/Alerte',
  component: Alert,
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
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'orange'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'Les services numeriques seront en maintenance de 22h a 23h.',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '640px' }}>
      <Alert variant="info">Etat du service normal.</Alert>
      <Alert variant="success">Demande enregistree avec succes.</Alert>
      <Alert variant="warning">Pensez a verifier vos pieces justificatives.</Alert>
      <Alert variant="error">Une erreur est survenue pendant la soumission.</Alert>
    </div>
  ),
};
