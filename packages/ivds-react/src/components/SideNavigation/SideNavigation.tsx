import React from 'react';
import { SideNav, SideNavItem, type NavigationLinkProps } from '../Navigation';

export type SideNavigationProps = React.ComponentProps<typeof SideNav>;
export type SideNavigationItemProps = NavigationLinkProps;

export const SideNavigation: React.FC<SideNavigationProps> = (props) => <SideNav {...props} />;

export const SideNavigationItem: React.FC<SideNavigationItemProps> = (props) => <SideNavItem {...props} />;

SideNavigation.displayName = 'SideNavigation';
SideNavigationItem.displayName = 'SideNavigationItem';
