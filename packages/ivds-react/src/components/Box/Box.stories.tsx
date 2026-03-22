import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Utilitaires/Boîte',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const ParDefaut: Story = {
  render: () => (
    <Box style={{ padding: '20px', background: 'var(--color-brand-orange-light)', borderRadius: '8px' }}>
      Ceci est un composant Box avec styles personnalisés
    </Box>
  ),
};

export const EnSection: Story = {
  render: () => (
    <Box as="section" style={{ padding: '40px', background: 'var(--color-brand-green-light)', borderRadius: '8px' }}>
      <h2 style={{ margin: '0 0 16px 0' }}>Box en section</h2>
      <p style={{ margin: 0 }}>Le composant Box peut être rendu avec n'importe quel élément HTML via la prop `as`.</p>
    </Box>
  ),
};

export const ThemeCoteDIvoire: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Box style={{
        padding: '24px',
        background: 'var(--color-brand-orange)',
        color: 'white',
        borderRadius: '8px',
        minWidth: '200px',
      }}>
        <strong>Orange</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>Couleur de marque principale</p>
      </Box>
      
      <Box style={{
        padding: '24px',
        background: 'var(--color-brand-green)',
        color: 'white',
        borderRadius: '8px',
        minWidth: '200px',
      }}>
        <strong>Green</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>Couleur de marque secondaire</p>
      </Box>
      
      <Box style={{
        padding: '24px',
        background: 'var(--color-brand-cocoa)',
        color: 'white',
        borderRadius: '8px',
        minWidth: '200px',
      }}>
        <strong>Cocoa</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>Accent chaud</p>
      </Box>
      
      <Box style={{
        padding: '24px',
        background: 'var(--color-brand-gold)',
        color: 'white',
        borderRadius: '8px',
        minWidth: '200px',
      }}>
        <strong>Gold</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>Accent premium</p>
      </Box>
      
      <Box style={{
        padding: '24px',
        background: 'var(--color-brand-lagoon)',
        color: 'white',
        borderRadius: '8px',
        minWidth: '200px',
      }}>
        <strong>Lagoon</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>Accent froid</p>
      </Box>
    </div>
  ),
};

export const BoitesImbriquees: Story = {
  render: () => (
    <Box style={{ padding: '32px', background: 'var(--color-brand-orange-light)', borderRadius: '12px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Boîte externe</h3>
      <Box style={{ padding: '24px', background: 'white', borderRadius: '8px', marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Boîte interne 1</h4>
        <p style={{ margin: 0 }}>Les boîtes peuvent être imbriquées pour créer des layouts complexes.</p>
      </Box>
      <Box style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Boîte interne 2</h4>
        <p style={{ margin: 0 }}>Chaque boîte peut avoir son propre style.</p>
      </Box>
    </Box>
  ),
};

export const CarteResponsive: Story = {
  render: () => (
    <Box style={{
      padding: '24px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      border: '1px solid var(--color-brand-orange-light)',
    }}>
      <Box as="header" style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-brand-orange)' }}>Titre de carte</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Sous-titre de carte</p>
      </Box>
      <Box as="main" style={{ marginBottom: '16px' }}>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Cette carte est construite entièrement avec des composants Box, montrant leur flexibilité.
        </p>
      </Box>
      <Box as="footer" style={{ display: 'flex', gap: '8px' }}>
        <button style={{
          padding: '8px 16px',
          background: 'var(--color-brand-orange)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Principal
        </button>
        <button style={{
          padding: '8px 16px',
          background: 'transparent',
          color: 'var(--color-brand-orange)',
          border: '1px solid var(--color-brand-orange)',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Secondaire
        </button>
      </Box>
    </Box>
  ),
};
