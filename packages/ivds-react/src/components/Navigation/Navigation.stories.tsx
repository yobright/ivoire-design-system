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
        Accueil
      </NavigationLink>
      <NavigationLink href="#">Gouvernement</NavigationLink>
      <NavigationLink href="#">Publications</NavigationLink>
      <NavigationLink href="#">Agenda</NavigationLink>
    </Navigation>
  ),
};

export const Laterale: Story = {
  render: () => (
    <div style={{ maxWidth: '260px' }}>
      <SideNav aria-label="Section navigation">
        <SideNavItem href="#" active>
          e-Services
        </SideNavItem>
        <SideNavItem href="#">Passeport</SideNavItem>
        <SideNavItem href="#">Vaccination</SideNavItem>
      </SideNav>
    </div>
  ),
};
