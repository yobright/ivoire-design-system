// Common TypeScript types and utilities for IVDS React components

import { ReactNode } from 'react';

// Base component props that all IVDS components should extend
export interface BaseComponentProps {
  /** Element ID */
  id?: string;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles — supports CSS custom properties */
  style?: ComponentCSSProperties;
  /** Test ID for testing purposes */
  'data-testid'?: string;
  /** Children elements */
  children?: ReactNode;
}

// CSS properties with support for CSS custom properties (per-component API)
export type ComponentCSSProperties = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

// Common size variants used across components
// Canonical: xs, sm, md, lg, xl — also supports legacy aliases small, medium, large
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large';

// Maps legacy size names to canonical BEM class suffixes
export const SIZE_CLASS_MAP: Record<Size, string> = {
  xs: 'xs',
  sm: 'small',
  md: '',
  lg: 'large',
  xl: 'xl',
  small: 'small',
  medium: '',
  large: 'large',
};

// Common color variants for semantic components (solid)
export type Variant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

// Extended variant types including modern styles
export type ButtonVariant = 
  | Variant
  // Gradient variants
  | 'gradient-primary'
  | 'gradient-secondary'
  | 'gradient-mixed'
  | 'gradient-sunset'
  | 'gradient-ocean'
  // Outline variants
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-neutral'
  // Ghost variants
  | 'ghost'
  | 'ghost-primary'
  | 'ghost-secondary'
  | 'ghost-neutral'
  // Glass variants
  | 'glass'
  | 'glass-dark';

// Shape variants for buttons
export type ButtonShape = 'default' | 'pill' | 'icon-only';

// Theme mode for light/dark theme switching
export type ThemeMode = 'light' | 'dark' | 'auto';

// Notification/alert severity levels
export type Severity = 'info' | 'success' | 'warning' | 'error';

// Status types for various components
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Utility type for making certain props required
export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Utility type for component ref forwarding
export type ComponentWithRef<T, P = Record<string, never>> = React.ForwardRefExoticComponent<
  P & React.RefAttributes<T>
>;

// Utility type for polymorphic components
export type PolymorphicRef<C extends React.ElementType> = 
  React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = Record<string, never>
> = Props & Omit<React.ComponentPropsWithoutRef<C>, keyof Props> & {
  as?: C;
};

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
