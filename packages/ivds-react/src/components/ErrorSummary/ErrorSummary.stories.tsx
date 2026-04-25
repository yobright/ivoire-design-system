import type { Meta, StoryObj } from '@storybook/react';
import { ErrorSummary } from './ErrorSummary';

const meta: Meta<typeof ErrorSummary> = {
  title: 'React/Résumé des erreurs',
  component: ErrorSummary,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    description: 'Revoyez les champs ci-dessous avant de soumettre le formulaire.',
    errors: [
      { label: 'Le champ email est requis', href: '#email' },
      { label: 'La date de début doit être renseignée', href: '#start-date' },
    ],
  },
};
