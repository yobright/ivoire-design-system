import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Notification } from './Notification';
import { Button } from '../Button';

const meta: Meta<typeof Notification> = {
  title: 'React/Notification',
  component: Notification,
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
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: { control: 'boolean' },
    visible: { control: 'boolean' },
    onDismiss: { action: 'dismissed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    children: 'Ceci est un message de notification par défaut.',
  },
};

export const AvecTitre: Story = {
  args: {
    title: 'Titre de la notification',
    children: 'Cette notification contient un titre et un message.',
  },
};

export const TypesMessages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Notification type="info" title="Information">
        Ceci est un message d'information.
      </Notification>
      <Notification type="success" title="Succès">
        Opération terminée avec succès !
      </Notification>
      <Notification type="warning" title="Avertissement">
        Veuillez vérifier vos informations avant de continuer.
      </Notification>
      <Notification type="error" title="Error">
        Une erreur est survenue lors du traitement de votre demande.
      </Notification>
    </div>
  ),
};

export const Fermable: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    
    return (
      <div style={{ width: '400px' }}>
        {visible ? (
          <Notification
            type="success"
            title="Notification fermable"
            dismissible
            onDismiss={() => setVisible(false)}
          >
            Vous pouvez fermer cette notification en cliquant sur le bouton ×.
          </Notification>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p>Notification fermée !</p>
            <Button onClick={() => setVisible(true)}>Afficher à nouveau</Button>
          </div>
        )}
      </div>
    );
  },
};

export const AvecActions: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Notification
        type="warning"
        title="Confirmerer l'action"
        actions={
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Button size="small" variant="primary">
              Confirmer
            </Button>
            <Button size="small" variant="secondary">
              Annuler
            </Button>
          </div>
        }
      >
        Confirmerez-vous la suppression de cet élément ? Cette action est irréversible.
      </Notification>
    </div>
  ),
};

export const IconePersonnalisee: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Notification type="info" icon="🔔" title="Custom Icon">
        Cette notification utilise une icône personnalisée.
      </Notification>
      <Notification type="success" icon={null} title="No Icon">
        Cette notification n'a pas d'icône.
      </Notification>
    </div>
  ),
};

export const Controle: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<Array<{
      id: number;
      type: 'info' | 'success' | 'warning' | 'error';
      message: string;
    }>>([
      { id: 1, type: 'info' as const, message: 'Première notification' },
      { id: 2, type: 'success' as const, message: 'Deuxième notification' },
      { id: 3, type: 'warning' as const, message: 'Troisième notification' },
    ]);
    
    const removeNotification = (id: number) => {
      setNotifications(notifications.filter(n => n.id !== id));
    };
    
    const addNotification = () => {
      const types = ['info', 'success', 'warning', 'error'] as const;
      const randomType = types[Math.floor(Math.random() * types.length)];
      const newId = Math.max(...notifications.map(n => n.id), 0) + 1;
      
      setNotifications([
        ...notifications,
        {
          id: newId,
          type: randomType,
          message: `Notification ${newId}`,
        },
      ]);
    };
    
    return (
      <div style={{ width: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={addNotification}>Ajouter une notification</Button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {notifications.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
              Aucune notification
            </p>
          ) : (
            notifications.map((notification) => (
              <Notification
                key={notification.id}
                type={notification.type}
                dismissible
                onDismiss={() => removeNotification(notification.id)}
              >
                {notification.message}
              </Notification>
            ))
          )}
        </div>
      </div>
    );
  },
};