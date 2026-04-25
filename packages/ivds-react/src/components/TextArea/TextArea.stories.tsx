import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'React/Zone de texte',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Message',
    placeholder: 'Décrivez votre besoin…',
    helperText: 'Soyez aussi précis que nécessaire.',
  },
};
