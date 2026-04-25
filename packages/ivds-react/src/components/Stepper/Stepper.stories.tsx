import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'React/Stepper',
  component: Stepper,
  parameters: { docs: { description: { component: 'Indicateur de progression par etapes.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    selectedStep: 1,
    steps: [
      { label: 'Informations', state: 'completed' },
      { label: 'Adresse', state: 'selected' },
      { label: 'Paiement', state: 'available' },
      { label: 'Confirmation', state: 'disabled' },
    ],
  },
};
