import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LandingPageExample } from './LandingPage';
import { AdvancedFormExample } from './AdvancedForm';

const meta: Meta = {
  title: 'Exemples/Pages complètes',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const PageAccueil: StoryObj = {
  render: () => <LandingPageExample />,
};

export const FormulaireAvance: StoryObj = {
  render: () => <AdvancedFormExample />,
};
