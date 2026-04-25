import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'React/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Documentation du composant React IVDS avec exemples d’utilisation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['auto', 'top', 'right', 'bottom', 'left'],
    },
    small: { control: 'boolean' },
    boxShadow: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children:
      'Les tooltips affichent une information utile mais secondaire. Pour un contenu plus long, privilégiez une page dédiée.',
  },
};

export const Petit: Story = {
  args: {
    small: true,
    children: 'Moins de 5 mots.',
  },
};

export const AvecOmbre: Story = {
  args: {
    boxShadow: true,
    children:
      'Utilisez cette variante quand le tooltip doit se distinguer clairement au-dessus d’un contenu dense.',
  },
};
