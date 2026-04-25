import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'React/Lien',
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    href: '#',
    children: 'Lire la documentation',
  },
};

export const Externe: Story = {
  args: {
    href: 'https://example.com',
    children: 'Ouvrir le guide externe',
    external: true,
    openInNewTab: true,
  },
};

export const CommeBouton: Story = {
  args: {
    href: '#',
    children: 'Voir les ressources',
    useButtonStyles: true,
  },
};
