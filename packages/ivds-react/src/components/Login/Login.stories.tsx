import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';

const meta: Meta<typeof Login> = {
  title: 'React/Login',
  component: Login,
  parameters: { docs: { description: { component: 'Formulaire de connexion.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    title: 'Connexion',
    description: 'Entrez vos identifiants pour acceder a votre espace.',
    children: (
      <>
        <input className="ivds-text-input__input" placeholder="Adresse email\u2026" type="email" autoComplete="email" />
        <input className="ivds-text-input__input" placeholder="Mot de passe\u2026" type="password" autoComplete="current-password" />
      </>
    ),
    actions: <button type="submit" className="ivds-button ivds-button--primary" style={{ width: '100%' }}>Se connecter</button>,
    footer: <span>Pas encore de compte ? <a href="#">Creer un compte</a></span>,
  },
};
