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
        <strong>Ivoire Design System</strong>
      </FooterBrand>

      <FooterSection title="Fondations">
        <li>
          <a href="#">Couleurs</a>
        </li>
        <li>
          <a href="#">Typographie</a>
        </li>
      </FooterSection>

      <FooterSection title="Ressources">
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Storybook</a>
        </li>
      </FooterSection>

      <FooterSocial>
        <a href="#" aria-label="GitHub">
          GH
        </a>
        <a href="#" aria-label="LinkedIn">
          in
        </a>
      </FooterSocial>

      <FooterBottom>© 2026 Ivoire Design System</FooterBottom>
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
      <FooterBrand>Ivoire DS</FooterBrand>
      <FooterSection title="Contenu">
        <li>
          <a href="#">Articles</a>
        </li>
      </FooterSection>
      <FooterBottom>Mentions légales</FooterBottom>
    </Footer>
  ),
};
