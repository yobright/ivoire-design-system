// IVDS React Components Library
// Main entry point for all React components

// Core components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { TextInput } from './components/TextInput';
export type { TextInputProps } from './components/TextInput';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { RadioButton } from './components/RadioButton';
export type { RadioButtonProps } from './components/RadioButton';

export { Select } from './components/Select';
export type { SelectProps, SelectOption } from './components/Select';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

// Layout components
export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Notification } from './components/Notification';
export type { NotificationProps } from './components/Notification';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Tabs } from './components/Tabs';
export type { TabsProps, TabItem } from './components/Tabs';

export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';

// Structural components
export { 
  Header, 
  HeaderBrand, 
  HeaderNav, 
  HeaderActions, 
  HeaderUniversalBar, 
  HeaderActionBar 
} from './components/Header';
export type { HeaderProps } from './components/Header';

export { Footer, FooterBrand, FooterSection, FooterSocial, FooterBottom } from './components/Footer';
export type { FooterProps } from './components/Footer';

export { 
  Navigation, 
  NavigationLink, 
  SideNav, 
  SideNavItem
} from './components/Navigation';
export type { NavigationLinkProps } from './components/Navigation';

// Utility components
export { Box } from './components/Box';
export type { BoxProps } from './components/Box';

export { Flex } from './components/Flex';
export type { FlexProps } from './components/Flex';

export { Grid } from './components/Grid';
export type { GridProps } from './components/Grid';

// Theme APIs
export { ThemeProvider, useTheme } from './theme';
export type {
  IvdsThemeMode,
  IvdsThemeTarget,
  IvdsThemeTokens,
  ThemeContextValue,
  ThemeProviderProps,
} from './theme';

// Utilities
export * from './utils/types';

// Icons
export * from './icons';
export type { IconProps } from './icons';

// Government patterns
export * from './gov';
