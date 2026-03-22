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
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Demande de passeport"
        >
          Cette action ouvre le parcours de demande de passeport officiel.
        </Modal>
      </>
    );
  },
};

export const Grande: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Informations" size="lg">
        Contenu detaille pour les instructions ministerielles.
      </Modal>
    );
  },
};
