import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../RadioButton';
import { SelectionGroup } from './SelectionGroup';

const meta: Meta<typeof SelectionGroup> = {
  title: 'React/Groupe de sélection',
  component: SelectionGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <SelectionGroup legend="Canal préféré" helperText="Choisissez une seule réponse.">
      <RadioButton label="Email" name="channel" defaultChecked />
      <RadioButton label="Téléphone" name="channel" />
      <RadioButton label="WhatsApp" name="channel" />
    </SelectionGroup>
  ),
};
