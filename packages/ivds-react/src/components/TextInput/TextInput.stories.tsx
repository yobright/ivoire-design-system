import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'React/Champ texte',
  component: TextInput,
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    error: { control: 'boolean' },
    multiline: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Controle: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <TextInput
        label="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        helperText={`Character count: ${value.length}`}
      />
    );
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <TextInput label="Petit" size="small" placeholder="Champ petit" />
      <TextInput label="Moyen" size="medium" placeholder="Champ moyen" />
      <TextInput label="Grand" size="large" placeholder="Champ grand" />
    </div>
  ),
};

export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <TextInput label="Normal" placeholder="Normal state" />
      <TextInput label="Désactivé" placeholder="État désactivé" disabled />
      <TextInput label="Read Only" value="Read only value" readOnly />
      <TextInput 
        label="Error" 
        placeholder="Error state" 
        error 
        errorMessage="Ce champ est requis" 
      />
      <TextInput 
        label="Avec aide" 
        placeholder="Avec texte d'aide" 
        helperText="Ceci est un texte d'aide" 
      />
    </div>
  ),
};

export const AvecIcones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <TextInput 
        label="Email" 
        type="email"
        placeholder="Enter email" 
        icon="@" 
        iconPosition="left"
      />
      <TextInput 
        label="Search" 
        type="search"
        placeholder="Search..." 
        icon="🔍" 
        iconPosition="right"
      />
    </div>
  ),
};

export const TypesMessages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <TextInput label="Text" type="text" placeholder="Text input" />
      <TextInput label="Email" type="email" placeholder="email@example.com" />
      <TextInput label="Password" type="password" placeholder="Password" />
      <TextInput label="Number" type="number" placeholder="123" />
      <TextInput label="Tel" type="tel" placeholder="+1 (555) 123-4567" />
      <TextInput label="URL" type="url" placeholder="https://example.com" />
    </div>
  ),
};

export const ZoneTexte: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <TextInput
        label="Message"
        multiline
        rows={4}
        placeholder="Enter your message here..."
        helperText="Maximum 500 characters"
        maxLength={500}
      />
    </div>
  ),
};

export const Obligatoire: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'Ce champ est requis',
    required: true,
    helperText: 'Ce champ doit être renseigné',
  },
};