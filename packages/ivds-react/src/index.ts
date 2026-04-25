// IVDS React Components Library
// Main entry point for all React components

// Core components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { TextInput } from './components/TextInput';
export type { TextInputProps } from './components/TextInput';

export { TextArea, Textarea } from './components/TextArea';
export type { TextAreaProps } from './components/TextArea';

export { NumberInput } from './components/NumberInput';
export type { NumberInputProps } from './components/NumberInput';

export { PasswordInput } from './components/PasswordInput';
export type { PasswordInputProps } from './components/PasswordInput';

export { PhoneInput } from './components/PhoneInput';
export type { PhoneInputProps } from './components/PhoneInput';

export { DateInput } from './components/DateInput';
export type { DateInputProps } from './components/DateInput';

export { TimeInput } from './components/TimeInput';
export type { TimeInputProps } from './components/TimeInput';

export { Fieldset } from './components/Fieldset';
export type { FieldsetProps } from './components/Fieldset';

export { SelectionGroup } from './components/SelectionGroup';
export type { SelectionGroupProps } from './components/SelectionGroup';

export { ErrorSummary } from './components/ErrorSummary';
export type { ErrorSummaryProps, ErrorSummaryItem } from './components/ErrorSummary';

export { FileInput } from './components/FileInput';
export type { FileInputProps } from './components/FileInput';

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

export { Container } from './components/Container';
export type { ContainerProps, ContainerSize } from './components/Container';

export { Columns } from './components/Columns';
export type { ColumnsProps } from './components/Columns';

export { Section } from './components/Section';
export type { SectionProps, SectionVariant } from './components/Section';

export { Notification } from './components/Notification';
export type { NotificationProps } from './components/Notification';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { LoadingSpinner } from './components/LoadingSpinner';
export type { LoadingSpinnerProps } from './components/LoadingSpinner';

export { StatusLabel } from './components/StatusLabel';
export type { StatusLabelProps, StatusLabelType } from './components/StatusLabel';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip';

export { ToggleButton } from './components/ToggleButton';
export type { ToggleButtonProps, ToggleButtonVariant, ToggleButtonTheme } from './components/ToggleButton';

export { Accordion } from './components/Accordion';
export type { AccordionProps, AccordionSize } from './components/Accordion';

export { Hero } from './components/Hero';
export type { HeroProps, HeroVariant } from './components/Hero';

export { Highlight } from './components/Highlight';
export type { HighlightProps, HighlightType, HighlightSize } from './components/Highlight';

export { Linkbox } from './components/Linkbox';
export type { LinkboxProps } from './components/Linkbox';

export { Table } from './components/Table';
export type { TableProps, TableColumn } from './components/Table';

export { Stepper } from './components/Stepper';
export type { StepperProps, StepItem, StepState } from './components/Stepper';

export { StepByStep } from './components/StepByStep';
export type { StepByStepProps, StepByStepItem } from './components/StepByStep';

export { CookieConsent } from './components/CookieConsent';
export type { CookieConsentProps } from './components/CookieConsent';

export { Logo } from './components/Logo';
export type { LogoProps, LogoSize } from './components/Logo';

export { ImageWithCard } from './components/ImageWithCard';
export type { ImageWithCardProps, ImageWithCardLayout, ImageWithCardAlignment, ImageWithCardColor } from './components/ImageWithCard';

export { Login } from './components/Login';
export type { LoginProps } from './components/Login';

export { Koros } from './components/Koros';
export type { KorosProps, KorosType } from './components/Koros';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Tabs } from './components/Tabs';
export type { TabsProps, TabItem } from './components/Tabs';

export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';

export { Link } from './components/Link';
export type { LinkProps, LinkSize } from './components/Link';

export { Pagination } from './components/Pagination';
export type { PaginationProps } from './components/Pagination';

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

export { SideNavigation, SideNavigationItem } from './components/SideNavigation';
export type { SideNavigationProps, SideNavigationItemProps } from './components/SideNavigation';

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
