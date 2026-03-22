import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterBottom, FooterBrand, FooterSection, FooterSocial } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'React/Pied de page',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    light: { control: 'boolean' },
    columns: { control: 'number' },
    maxWidth: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    light: false,
    columns: 4,
  },
  render: (args) => (
    <Footer {...args}>
      <FooterBrand>
        <strong>Portail Officiel</strong>
      </FooterBrand>

      <FooterSection title="Primature">
        <li>
          <a href="#">Premier Ministre</a>
        </li>
        <li>
          <a href="#">Discours</a>
        </li>
      </FooterSection>

      <FooterSection title="Gouvernement">
        <li>
          <a href="#">Institutions</a>
        </li>
        <li>
          <a href="#">Agenda</a>
        </li>
      </FooterSection>

      <FooterSocial>
        <a href="#" aria-label="X">
          X
        </a>
        <a href="#" aria-label="LinkedIn">
          LinkedIn
        </a>
      </FooterSocial>

      <FooterBottom>Copyright 2026 - Portail officiel du Gouvernement de Cote d'Ivoire</FooterBottom>
    </Footer>
  ),
};

export const Clair: Story = {
  args: {
    light: true,
    columns: 3,
    maxWidth: '1240px',
  },
  render: (args) => (
    <Footer {...args}>
      <FooterBrand>IVDS</FooterBrand>
      <FooterSection title="Publications">
        <li>
          <a href="#">Documents</a>
        </li>
      </FooterSection>
      <FooterBottom>Mentions legales</FooterBottom>
    </Footer>
  ),
};
