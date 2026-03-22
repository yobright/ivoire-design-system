import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'React/Étiquette',
  component: Tag,
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
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    removable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'Étiquette par défaut',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag variant="primary">Principal</Tag>
      <Tag variant="secondary">Secondaire</Tag>
      <Tag variant="tertiary">Tertiaire</Tag>
      <Tag variant="success">Succès</Tag>
      <Tag variant="warning">Avertissement</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="neutral">Neutral</Tag>
    </div>
  ),
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Tag size="small">Petit</Tag>
      <Tag size="medium">Moyen</Tag>
      <Tag size="large">Grand</Tag>
    </div>
  ),
};

export const Supprimable: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: 1, label: 'React', variant: 'primary' as const },
      { id: 2, label: 'TypeScript', variant: 'info' as const },
      { id: 3, label: 'Système de design', variant: 'success' as const },
      { id: 4, label: 'Storybook', variant: 'warning' as const },
    ]);
    
    const removeTag = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };
    
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            variant={tag.variant}
            removable
            onRemove={() => removeTag(tag.id)}
          >
            {tag.label}
          </Tag>
        ))}
        {tags.length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>Toutes les étiquettes ont été supprimées !</p>
        )}
      </div>
    );
  },
};

export const Cliquable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag variant="primary" onClick={() => alert('Étiquette principale cliquée !')}>
        Principal cliquable
      </Tag>
      <Tag variant="secondary" onClick={() => alert('Étiquette secondaire cliquée !')}>
        Secondaire cliquable
      </Tag>
      <Tag variant="success" disabled onClick={() => alert('Cette action ne doit pas se déclencher')}>
        Cliquable désactivé
      </Tag>
    </div>
  ),
};

export const AvecIcones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag variant="primary" icon="⭐">
        Favori
      </Tag>
      <Tag variant="success" icon="✅">
        Terminé
      </Tag>
      <Tag variant="warning" icon="⚠️">
        Warning
      </Tag>
      <Tag variant="danger" icon="🔥" removable onRemove={() => alert('Supprimé !')}>
        Sujet chaud
      </Tag>
    </div>
  ),
};

export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Tag>Normal</Tag>
        <Tag disabled>Désactivé</Tag>
        <Tag removable onRemove={() => alert('Supprimé !')}>Supprimable</Tag>
        <Tag removable disabled onRemove={() => alert('Should not fire')}>Disabled Removable</Tag>
      </div>
      
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Tag onClick={() => alert('Clicked!')}>Cliquable</Tag>
        <Tag onClick={() => alert('Should not fire')} disabled>Cliquable désactivé</Tag>
        <Tag 
          onClick={() => alert('Étiquette cliquée !')} 
          removable 
          onRemove={() => alert('Étiquette supprimée !')}
        >
          Clickable & Removable
        </Tag>
      </div>
    </div>
  ),
};

export const ListeEtiquettes: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(['react']);
    
    const availableTags = [
      'react', 'typescript', 'javascript', 'css', 'html',
      'node.js', 'express', 'mongodb', 'postgresql', 'docker'
    ];
    
    const toggleTag = (tag: string) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter(t => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    };
    
    return (
      <div style={{ width: '400px' }}>
        <h4 style={{ margin: '0 0 1rem 0' }}>Sélectionner les technologies :</h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {availableTags.map((tag) => (
            <Tag
              key={tag}
              variant={selectedTags.includes(tag) ? 'primary' : 'neutral'}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
        
        <h4 style={{ margin: '1rem 0 0.5rem 0' }}>Selected ({selectedTags.length}):</h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {selectedTags.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic', margin: 0 }}>Aucune étiquette sélectionnée</p>
          ) : (
            selectedTags.map((tag) => (
              <Tag
                key={tag}
                variant="success"
                removable
                onRemove={() => toggleTag(tag)}
              >
                {tag}
              </Tag>
            ))
          )}
        </div>
      </div>
    );
  },
};