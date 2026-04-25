import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'React/Logo',
  component: Logo,
  parameters: { docs: { description: { component: 'Composant logo avec variantes de taille.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    src: 'https://placehold.co/200x60?text=IVDS',
    alt: 'Ivoire Design System',
    size: 'medium',
  },
};
