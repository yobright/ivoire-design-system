import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'React/Bouton radio',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
  },
};

export const Controle: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option2');
    
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            name="controlled-example"
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
        ))}
        <p>Selected: {selectedValue}</p>
      </div>
    );
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <RadioButton label="Petit radio" value="small" name="size-example" size="small" />
      <RadioButton label="Moyen radio" value="medium" name="size-example" size="medium" />
      <RadioButton label="Grand radio" value="large" name="size-example" size="large" />
    </div>
  ),
};

export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <RadioButton label="Unselected" value="unselected" name="state-example" />
      <RadioButton label="Selected" value="selected" name="state-example" checked />
      <RadioButton label="Désactivé unselected" value="disabled1" name="disabled-example" disabled />
      <RadioButton label="Désactivé selected" value="disabled2" name="disabled-example" disabled checked />
      <RadioButton label="Required field" value="required" name="required-example" required />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState('basic');
    
    const plans = [
      { value: 'free', label: 'Forfait gratuit', description: 'Fonctionnalités de base pour un usage personnel' },
      { value: 'basic', label: 'Forfait standard', description: 'Fonctionnalités avancées pour les petites équipes' },
      { value: 'premium', label: 'Forfait premium', description: 'Fonctionnalités avancées pour les grandes organisations' },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Choose your plan:</h3>
        {plans.map((plan) => (
          <div key={plan.value} style={{ display: 'flex', flexDirection: 'column' }}>
            <RadioButton
              label={plan.label}
              value={plan.value}
              name="plan-selection"
              checked={selectedPlan === plan.value}
              onChange={(e) => setSelectedPlan(e.target.value)}
            />
            <p style={{ marginLeft: '2rem', fontSize: '0.875rem', color: '#666', margin: '0.25rem 0 0 2rem' }}>
              {plan.description}
            </p>
          </div>
        ))}
        <p>Selected plan: {selectedPlan}</p>
      </div>
    );
  },
};

export const SansLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <RadioButton value="option1" name="no-label-example" />
      <span>Radio button without built-in label</span>
    </div>
  ),
};