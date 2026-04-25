import type { Meta, StoryObj } from '@storybook/react';
import { Columns } from './Columns';

const meta: Meta<typeof Columns> = {
  title: 'React/Colonnes',
  component: Columns,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const itemStyle: React.CSSProperties = {
  padding: '1rem',
  borderRadius: '0.75rem',
  background: 'var(--ivds-surface-base, #fff)',
  border: '1px solid var(--ivds-border-subtle, #e7e5dd)',
};

export const Responsive: Story = {
  render: () => (
    <Columns minColumnWidth="14rem">
      <div style={itemStyle}>Tokens</div>
      <div style={itemStyle}>Composants</div>
      <div style={itemStyle}>Guidelines</div>
    </Columns>
  ),
};

export const TroisColonnesFixes: Story = {
  render: () => (
    <Columns columns={3} responsive={false} gap="1rem">
      <div style={itemStyle}>Fondations</div>
      <div style={itemStyle}>Patterns</div>
      <div style={itemStyle}>Ressources</div>
    </Columns>
  ),
};
