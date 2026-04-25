import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'React/Accordion',
  component: Accordion,
  parameters: { docs: { description: { component: 'Panneau accordeon repliable/depliable.' } } },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    heading: 'Comment utiliser le design system ?',
    children: 'Installez le package, importez les composants et suivez la documentation.',
  },
};

export const Carte: Story = {
  args: {
    heading: 'Variante carte',
    card: true,
    children: 'Le contenu apparait dans une carte avec bordure.',
  },
};

export const OuvertParDefaut: Story = {
  args: {
    heading: 'Ouvert par defaut',
    initiallyOpen: true,
    closeButton: true,
    children: 'Ce panneau est ouvert au chargement et dispose d\u2019un bouton de fermeture.',
  },
};
