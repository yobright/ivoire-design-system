import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationLink, SideNav, SideNavItem } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'React/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontale: Story = {
  render: () => (
    <Navigation aria-label="Navigation principale">
      <NavigationLink href="#" active>
        Vue d’ensemble
      </NavigationLink>
      <NavigationLink href="#">Composants</NavigationLink>
      <NavigationLink href="#">Tokens</NavigationLink>
      <NavigationLink href="#">Ressources</NavigationLink>
    </Navigation>
  ),
};

export const Laterale: Story = {
  render: () => (
    <div style={{ maxWidth: '260px' }}>
      <SideNav aria-label="Section navigation">
        <SideNavItem href="#" active>
          Fondations
        </SideNavItem>
        <SideNavItem href="#">Composants</SideNavItem>
        <SideNavItem href="#">Guidelines</SideNavItem>
      </SideNav>
    </div>
  ),
};
