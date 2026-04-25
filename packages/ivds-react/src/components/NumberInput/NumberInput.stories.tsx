import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'React/Champ numérique',
  component: NumberInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: () => {
    const [value, setValue] = useState<number | ''>(3);

    return (
      <NumberInput
        label="Nombre de licences"
        value={value}
        min={0}
        max={20}
        onValueChange={setValue}
        helperText="Utilisez les boutons ou saisissez directement une valeur."
      />
    );
  },
};
