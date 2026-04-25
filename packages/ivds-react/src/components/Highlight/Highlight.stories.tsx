import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from './Highlight';

const meta: Meta<typeof Highlight> = {
  title: 'React/Highlight',
  component: Highlight,
  parameters: { docs: { description: { component: 'Mise en avant de texte ou citation.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: { text: 'Le design system est la base de toutes nos interfaces.' },
};

export const Citation: Story = {
  args: {
    text: 'La simplicite est la sophistication supreme.',
    type: 'quote',
    reference: 'Leonard de Vinci',
  },
};
