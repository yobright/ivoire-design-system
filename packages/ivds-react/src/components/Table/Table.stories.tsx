import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'React/Table',
  component: Table,
  parameters: { docs: { description: { component: 'Tableau de donnees avec tri optionnel.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const cols = [
  { key: 'name', headerName: 'Nom', isSortable: true },
  { key: 'role', headerName: 'Role' },
  { key: 'city', headerName: 'Ville', isSortable: true },
];

const rows = [
  { id: 1, name: 'Kouame Yao', role: 'Designer', city: 'Abidjan' },
  { id: 2, name: 'Awa Traore', role: 'Developpeur', city: 'Bouake' },
  { id: 3, name: 'Jean Koffi', role: 'Chef de projet', city: 'Yamoussoukro' },
];

export const ParDefaut: Story = {
  args: { cols, rows, heading: 'Equipe projet' },
};

export const Dense: Story = {
  args: { cols, rows, dense: true, heading: 'Equipe projet (dense)' },
};

export const Rayee: Story = {
  args: { cols, rows, striped: true, heading: 'Equipe projet (rayee)' },
};
