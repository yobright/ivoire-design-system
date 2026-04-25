import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'React/Champ téléphone',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Téléphone',
    placeholder: '+225 07 00 00 00 00',
    helperText: 'Incluez l’indicatif si nécessaire.',
  },
};
