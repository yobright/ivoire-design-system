import type { Meta, StoryObj } from '@storybook/react';
import { ImageWithCard } from './ImageWithCard';

const meta: Meta<typeof ImageWithCard> = {
  title: 'React/ImageWithCard',
  component: ImageWithCard,
  parameters: { docs: { description: { component: 'Image avec carte superposee ou en split.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    children: 'Texte affiche au-dessus de l\u2019image dans une carte.',
  },
};

export const Split: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    cardLayout: 'split',
    children: 'Texte cote a cote avec l\u2019image.',
  },
};
