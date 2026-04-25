import type { Meta, StoryObj } from '@storybook/react';
import { Linkbox } from './Linkbox';

const meta: Meta<typeof Linkbox> = {
  title: 'React/Linkbox',
  component: Linkbox,
  parameters: { docs: { description: { component: 'Carte cliquable renvoyant vers une URL.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    href: '#',
    heading: 'Composants disponibles',
    text: 'Decouvrez la liste complete des composants du design system.',
    linkAriaLabel: 'Voir les composants',
    linkboxAriaLabel: 'Carte liens composants',
    border: true,
  },
};

export const AvecImage: Story = {
  args: {
    href: '#',
    heading: 'Guide de demarrage',
    text: 'Apprenez a integrer IVDS dans votre projet en quelques minutes.',
    imgSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
    linkAriaLabel: 'Lire le guide',
    linkboxAriaLabel: 'Carte guide demarrage',
    border: true,
  },
};
