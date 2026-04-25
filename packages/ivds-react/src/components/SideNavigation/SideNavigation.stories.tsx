import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigation, SideNavigationItem } from './SideNavigation';

const meta: Meta<typeof SideNavigation> = {
  title: 'React/Navigation latérale',
  component: SideNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  render: () => (
    <div style={{ maxWidth: '18rem' }}>
      <SideNavigation aria-label="Navigation secondaire">
        <SideNavigationItem href="#" active>
          Fondations
        </SideNavigationItem>
        <SideNavigationItem href="#">Composants</SideNavigationItem>
        <SideNavigationItem href="#">Guidelines</SideNavigationItem>
      </SideNavigation>
    </div>
  ),
};
