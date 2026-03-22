import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'React/Grille',
  component: Grid,
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
    <Grid templateColumns="repeat(3, 1fr)" gap="3">
      <div>Bloc 1</div>
      <div>Bloc 2</div>
      <div>Bloc 3</div>
    </Grid>
  ),
};

export const MiseEnPageZones: Story = {
  render: () => (
    <Grid
      templateColumns="220px 1fr"
      templateAreas="'sidebar main'"
      columnGap="4"
      style={{ maxWidth: '720px' }}
    >
      <aside style={{ gridArea: 'sidebar' }}>Menu</aside>
      <main style={{ gridArea: 'main' }}>Contenu</main>
    </Grid>
  ),
};
