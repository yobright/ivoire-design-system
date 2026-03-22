import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'React/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: () => (
    <Flex gap="4" alignItems="center">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  ),
};

export const Colonne: Story = {
  render: () => (
    <Flex direction="column" gap="2" style={{ maxWidth: '240px' }}>
      <div>Premier bloc</div>
      <div>Second bloc</div>
      <div>Troisieme bloc</div>
    </Flex>
  ),
};
