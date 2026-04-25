import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'React/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: () => (
    <Fieldset legend="Préférences" description="Choisissez au moins une option." helperText="Vous pourrez modifier ce choix plus tard.">
      <Checkbox label="Newsletter produit" />
      <Checkbox label="Alertes de maintenance" />
    </Fieldset>
  ),
};
