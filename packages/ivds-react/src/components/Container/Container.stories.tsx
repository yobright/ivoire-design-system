import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'React/Conteneur',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: () => (
    <div style={{ background: 'var(--ivds-surface-muted, #f5f5f0)', paddingBlock: '2rem' }}>
      <Container>
        <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--ivds-surface-base, #fff)' }}>
          Un conteneur centralise les largeurs de lecture et garde des marges cohérentes.
        </div>
      </Container>
    </div>
  ),
};

export const Etroit: Story = {
  render: () => (
    <Container size="narrow">
      <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--color-brand-primary-50, #fff7ed)' }}>
        Cette variante convient aux pages éditoriales et aux formulaires.
      </div>
    </Container>
  ),
};
