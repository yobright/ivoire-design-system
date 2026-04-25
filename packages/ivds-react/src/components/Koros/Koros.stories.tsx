import type { Meta, StoryObj } from '@storybook/react';
import { Koros } from './Koros';

const meta: Meta<typeof Koros> = {
  title: 'React/Koros',
  component: Koros,
  parameters: { docs: { description: { component: 'Bordure decorative ondulante pour separateur de sections.' } } },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['basic', 'beat', 'pulse', 'wave', 'vibration', 'calm'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { args: { type: 'basic' } };
export const Beat: Story = { args: { type: 'beat' } };
export const Wave: Story = { args: { type: 'wave' } };
export const Dense: Story = { args: { type: 'basic', dense: true } };
export const Retournee: Story = { args: { type: 'pulse', flipVertical: true } };
