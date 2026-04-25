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
      options: ['primary', 'secondary', 'accent', 'tertiary', 'success', 'warning', 'danger', 'info', 'neutral'],
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
      <Tag variant="accent">Accent</Tag>
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
      { id: 1, label: 'Audit', variant: 'primary' as const },
      { id: 2, label: 'Prototype', variant: 'info' as const },
      { id: 3, label: 'Lancement', variant: 'success' as const },
      { id: 4, label: 'À valider', variant: 'warning' as const },
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
          <p style={{ color: '#666', fontStyle: 'italic' }}>Toutes les étiquettes ont été supprimées.</p>
        )}
      </div>
    );
  },
};

export const Cliquable: Story = {
  render: () => {
    const [active, setActive] = useState('principal');

    return (
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Tag variant={active === 'principal' ? 'primary' : 'neutral'} onClick={() => setActive('principal')}>
            Parcours Principal
          </Tag>
          <Tag variant={active === 'secondaire' ? 'secondary' : 'neutral'} onClick={() => setActive('secondaire')}>
            Parcours Secondaire
          </Tag>
          <Tag variant="success" disabled onClick={() => setActive('disabled')}>
            Désactivé
          </Tag>
        </div>
        <span>Filtre actif: {active}</span>
      </div>
    );
  },
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
        Attention
      </Tag>
      <Tag variant="danger" icon="🔥" removable onRemove={() => undefined}>
        Sujet chaud
      </Tag>
    </div>
  ),
};

export const Etats: Story = {
  render: () => {
    const [items, setItems] = useState(['Normal', 'Supprimable', 'Cliquable & Supprimable']);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Tag>Normal</Tag>
          <Tag disabled>Désactivé</Tag>
          {items.includes('Supprimable') && (
            <Tag removable onRemove={() => setItems((current) => current.filter((item) => item !== 'Supprimable'))}>
              Supprimable
            </Tag>
          )}
          <Tag removable disabled onRemove={() => undefined}>Suppression désactivée</Tag>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Tag onClick={() => undefined}>Cliquable</Tag>
          <Tag onClick={() => undefined} disabled>Cliquable désactivé</Tag>
          {items.includes('Cliquable & Supprimable') && (
            <Tag
              onClick={() => undefined}
              removable
              onRemove={() => setItems((current) => current.filter((item) => item !== 'Cliquable & Supprimable'))}
            >
              Cliquable & Supprimable
            </Tag>
          )}
        </div>
      </div>
    );
  },
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