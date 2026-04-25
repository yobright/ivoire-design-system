import type { Meta, StoryObj } from '@storybook/react';
import { TimeInput } from './TimeInput';

const meta: Meta<typeof TimeInput> = {
  title: 'React/Champ heure',
  component: TimeInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Heure de rendez-vous',
    helperText: 'Format local du navigateur.',
  },
};
