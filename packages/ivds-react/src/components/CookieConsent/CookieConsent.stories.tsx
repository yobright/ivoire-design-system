import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CookieConsent } from './CookieConsent';

const meta: Meta<typeof CookieConsent> = {
  title: 'React/CookieConsent',
  component: CookieConsent,
  parameters: { docs: { description: { component: 'Bandeau de consentement aux cookies.' } } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    title: 'Ce site utilise des cookies',
    description: 'Nous utilisons des cookies pour ameliorer votre experience. Vous pouvez accepter ou refuser.',
    actions: (
      <>
        <button type="button" className="ivds-button ivds-button--primary">Accepter</button>
        <button type="button" className="ivds-button ivds-button--secondary">Refuser</button>
      </>
    ),
  },
};
