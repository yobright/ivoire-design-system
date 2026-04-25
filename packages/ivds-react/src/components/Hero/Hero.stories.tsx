import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'React/Hero',
  component: Hero,
  parameters: { docs: { description: { component: 'Banniere hero pour les pages d\u2019accueil ou de section.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvecImage: Story = {
  args: {
    title: 'Bienvenue sur le Design System',
    text: 'Construisez des interfaces accessibles, coherentes et modernes.',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  },
};

export const SansImage: Story = {
  args: {
    title: 'Section importante',
    text: 'Un hero sans image de fond avec le fond de marque.',
    centeredContent: true,
  },
};
