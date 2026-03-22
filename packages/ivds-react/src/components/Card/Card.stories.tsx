import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'React/Carte',
  component: Card,
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
      options: ['elevated', 'flat', 'bordered'],
    },
    interactive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'Carte simple avec contenu.',
  },
};

export const AvecEntete: Story = {
  args: {
    header: <h3 style={{ margin: 0 }}>Card Title</h3>,
    children: 'Cette carte contient un en-tête avec un titre.',
  },
};

export const AvecPied: Story = {
  args: {
    children: 'Cette carte contient un pied avec des actions.',
    footer: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button size="small" variant="primary">Action</Button>
        <Button size="small" variant="secondary">Cancel</Button>
      </div>
    ),
  },
};

export const Complet: Story = {
  args: {
    header: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Carte complète</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Subtitle text</p>
      </div>
    ),
    children: (
      <div>
        <p>Exemple de carte complète avec en-tête, corps et pied.</p>
        <p>It demonstrates how all sections work together.</p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>Last updated: Today</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="small" variant="secondary">Edit</Button>
          <Button size="small" variant="primary">View</Button>
        </div>
      </div>
    ),
  },
};

export const AvecMedia: Story = {
  args: {
    media: (
      <div style={{ 
        height: '200px', 
        background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        Image Placeholder
      </div>
    ),
    header: <h3 style={{ margin: 0 }}>Carte avec média</h3>,
    children: 'Cette carte inclut une zone média en haut.',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card variant="elevated" style={{ width: '200px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Elevated</h4>
        <p style={{ margin: 0 }}>Carte élevée par défaut avec ombre.</p>
      </Card>
      <Card variant="flat" style={{ width: '200px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Flat</h4>
        <p style={{ margin: 0 }}>Flat card without shadow.</p>
      </Card>
      <Card variant="bordered" style={{ width: '200px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Bordered</h4>
        <p style={{ margin: 0 }}>Carte avec style bordé.</p>
      </Card>
    </div>
  ),
};

export const Interactif: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card 
        interactive 
        onClick={() => alert('Carte cliquée !')}
        style={{ width: '200px' }}
      >
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Carte interactive</h4>
        <p style={{ margin: 0 }}>Cliquez ou utilisez Entrée/Espace lorsque la carte est focalisée.</p>
      </Card>
      <Card 
        interactive 
        disabled
        onClick={() => alert('This should not fire')}
        style={{ width: '200px' }}
      >
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Interaction désactivée</h4>
        <p style={{ margin: 0 }}>Cette carte est désactivée et non cliquable.</p>
      </Card>
    </div>
  ),
};

export const CarteProduit: Story = {
  render: () => (
    <Card style={{ width: '300px' }}>
      <div style={{ 
        height: '200px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.125rem',
        fontWeight: 'bold'
      }}>
        Product Image
      </div>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Product Name</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
          Description d'exemple produit présentant les fonctionnalités principales.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>$99.99</span>
          <Button variant="primary">Ajouter au panier</Button>
        </div>
      </div>
    </Card>
  ),
};