import type { Meta, StoryObj } from '@storybook/react';
import { StepByStep } from './StepByStep';

const meta: Meta<typeof StepByStep> = {
  title: 'React/StepByStep',
  component: StepByStep,
  parameters: { docs: { description: { component: 'Guide pas-a-pas vertical.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    title: 'Comment ouvrir un compte',
    helpText: 'Suivez les etapes ci-dessous dans l\u2019ordre.',
    steps: [
      { title: 'Creer un identifiant', description: 'Rendez-vous sur le formulaire d\u2019inscription.' },
      { title: 'Verifier votre email', description: 'Cliquez sur le lien envoye dans votre boite de reception.' },
      { title: 'Completer votre profil', description: 'Renseignez vos informations personnelles.' },
    ],
  },
};
