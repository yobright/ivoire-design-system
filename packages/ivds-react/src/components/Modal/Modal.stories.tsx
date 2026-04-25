import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'React/Fenêtre modale',
  component: Modal,
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
    isOpen: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    showCloseButton: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Ouvrir la modale</Button>
        <Modal
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Planifier un atelier"
          description="Validez le prochain sprint design avec votre équipe."
          footer={(
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
              <Button onClick={() => setOpen(false)}>Confirmer</Button>
            </>
          )}
        >
          Votre équipe recevra l’ordre du jour, les objectifs et le lien de participation.
        </Modal>
      </>
    );
  },
};

export const Grande: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Détails du parcours"
        description="Passez en revue les livrables attendus avant validation."
        size="lg"
      >
        Cette modale large accueille un contenu éditorial plus dense, des points de décision et des éléments de suivi produit.
      </Modal>
    );
  },
};
