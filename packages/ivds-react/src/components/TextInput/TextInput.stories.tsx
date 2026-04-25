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
    placeholder: 'nom@example.com…',
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
        placeholder="Saisissez du texte…"
        helperText={`Nombre de caractères: ${value.length}`}
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
        placeholder="Champ requis…" 
        error 
        errorMessage="Ce champ est requis" 
      />
      <TextInput 
        label="Warning" 
        placeholder="Format recommandé…" 
        warning
        helperText="Utilisez le format international si possible."
      />
      <TextInput 
        label="Avec aide" 
        placeholder="Renseignez une valeur…" 
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
        placeholder="nom@example.com…" 
        icon="@" 
        iconPosition="left"
      />
      <TextInput 
        label="Search" 
        type="search"
        placeholder="Rechercher…" 
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
      <TextInput label="Email" type="email" placeholder="nom@example.com…" />
      <TextInput label="Password" type="password" placeholder="Votre mot de passe…" />
      <TextInput label="Number" type="number" placeholder="123…" />
      <TextInput label="Tel" type="tel" placeholder="+225 01 23 45 67 89…" />
      <TextInput label="URL" type="url" placeholder="https://example.com…" />
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
        placeholder="Décrivez votre besoin…"
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