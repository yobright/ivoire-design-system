import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'React/LoadingSpinner',
  component: LoadingSpinner,
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
    small: { control: 'boolean' },
    multicolor: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {};

export const Petit: Story = {
  args: {
    small: true,
  },
};

export const Multicolore: Story = {
  args: {
    multicolor: true,
    loadingText: 'Chargement…',
  },
};
