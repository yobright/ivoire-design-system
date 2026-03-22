import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Button } from '../Button';
import {
  Header,
  HeaderActionBar,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  HeaderUniversalBar,
} from './Header';

const meta: Meta<typeof Header> = {
  title: 'React/En-tête',
  component: Header,
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
    sticky: { control: 'boolean' },
    glass: { control: 'boolean' },
    scrolled: { control: 'boolean' },
    dark: { control: 'boolean' },
    maxWidth: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function HeaderTemplate(args: ComponentProps<typeof Header>): JSX.Element {
  return (
    <>
      <HeaderUniversalBar>
        <a href="#">gouv.ci</a>
      </HeaderUniversalBar>

      <HeaderActionBar>
        <Button size="small" variant="secondary">
          Ecrire au Gouvernement
        </Button>
      </HeaderActionBar>

      <Header {...args}>
        <HeaderBrand>
          <strong>IVDS</strong>
        </HeaderBrand>

        <HeaderNav>
          <a href="#">Accueil</a>
          <a href="#">Actualites</a>
          <a href="#">e-Services</a>
        </HeaderNav>

        <HeaderActions>
          <Button size="small">Connexion</Button>
        </HeaderActions>
      </Header>
    </>
  );
}

export const ParDefaut: Story = {
  args: {
    sticky: true,
    glass: true,
    scrolled: false,
    dark: false,
  },
  render: (args) => <HeaderTemplate {...args} />,
};

export const DefileSombre: Story = {
  args: {
    sticky: true,
    glass: false,
    scrolled: true,
    dark: true,
    maxWidth: '1280px',
  },
  render: (args) => <HeaderTemplate {...args} />,
};
