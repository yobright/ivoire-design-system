import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../Tooltip';
import { ToggleButton } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'React/ToggleButton',
  component: ToggleButton,
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
    variant: {
      control: 'select',
      options: ['default', 'inline'],
    },
  },
  args: {
    label: 'Autoriser les notifications',
    checked: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: function Render(args) {
    const [checked, setChecked] = React.useState(Boolean(args.checked));

    return <ToggleButton {...args} checked={checked} onChange={setChecked} />;
  },
};

export const AvecTooltip: Story = {
  render: function Render(args) {
    const [checked, setChecked] = React.useState(Boolean(args.checked));

    return (
      <ToggleButton
        {...args}
        checked={checked}
        onChange={setChecked}
        tooltip={
          <Tooltip tooltipLabel="Informations complémentaires" buttonLabel="Ouvrir l’aide">
            Quand cette option est activée, le système peut vous alerter sur les nouveaux événements importants.
          </Tooltip>
        }
      />
    );
  },
};

export const Inline: Story = {
  render: function Render(args) {
    const [checked, setChecked] = React.useState(Boolean(args.checked));

    return <ToggleButton {...args} checked={checked} onChange={setChecked} variant="inline" />;
  },
};
