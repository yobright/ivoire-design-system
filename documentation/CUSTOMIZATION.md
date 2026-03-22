# Style Customization Guide

> **Complete guide for customizing the Ivoire Design System to match your brand**

## 🎨 Overview

The Ivoire Design System is built with customization in mind. You can easily modify colors, typography, spacing, and component styles to match your brand identity.

## 🎯 Customization Levels

### 1. **Token Level** (Recommended)
Modify design tokens for consistent changes across all components.

### 2. **Component Level** 
Override specific component styles while maintaining the design system structure.

### 3. **CSS Custom Properties**
Runtime customization using CSS variables.

## 🔧 Design Token Customization

### Colors

**File**: `packages/ivds-design-tokens/tokens/colors.json`

```json
{
  "color": {
    "brand": {
      "primary": {
        "50": { "value": "#fef7ff" },
        "100": { "value": "#fce7ff" },
        "200": { "value": "#f8d0fe" },
        "300": { "value": "#f2a8fc" },
        "400": { "value": "#e879f9" },
        "500": { "value": "#d946ef" },  // Main brand color
        "600": { "value": "#c026d3" },
        "700": { "value": "#a21caf" },
        "800": { "value": "#86198f" },
        "900": { "value": "#701a75" }
      },
      "secondary": {
        "500": { "value": "#06b6d4" }  // Secondary brand color
      }
    },
    "semantic": {
      "success": {
        "500": { "value": "#10b981" }  // Custom success color
      },
      "warning": {
        "500": { "value": "#f59e0b" }  // Custom warning color
      },
      "error": {
        "500": { "value": "#ef4444" }   // Custom error color
      }
    }
  }
}
```

### Typography

**File**: `packages/ivds-design-tokens/tokens/typography.json`

```json
{
  "fontFamily": {
    "sans": { 
      "value": "'Inter', 'Helvetica Neue', Arial, sans-serif" 
    },
    "serif": { 
      "value": "'Playfair Display', Georgia, serif" 
    },
    "mono": { 
      "value": "'JetBrains Mono', 'Fira Code', monospace" 
    }
  },
  "fontSize": {
    "xs": { "value": "0.75rem" },
    "sm": { "value": "0.875rem" },
    "base": { "value": "1rem" },
    "lg": { "value": "1.125rem" },
    "xl": { "value": "1.25rem" },
    "2xl": { "value": "1.5rem" },
    "3xl": { "value": "1.875rem" },
    "4xl": { "value": "2.25rem" }
  },
  "fontWeight": {
    "light": { "value": "300" },
    "normal": { "value": "400" },
    "medium": { "value": "500" },
    "semibold": { "value": "600" },
    "bold": { "value": "700" }
  }
}
```

### Spacing

**File**: `packages/ivds-design-tokens/tokens/spacing.json`

```json
{
  "spacing": {
    "1": { "value": "0.25rem" },
    "2": { "value": "0.5rem" },
    "3": { "value": "0.75rem" },
    "4": { "value": "1rem" },
    "5": { "value": "1.25rem" },
    "6": { "value": "1.5rem" },
    "8": { "value": "2rem" },
    "10": { "value": "2.5rem" },
    "12": { "value": "3rem" },
    "16": { "value": "4rem" },
    "20": { "value": "5rem" }
  }
}
```

### Borders & Shadows

**File**: `packages/ivds-design-tokens/tokens/borders.json`

```json
{
  "borderRadius": {
    "none": { "value": "0" },
    "sm": { "value": "0.125rem" },
    "base": { "value": "0.25rem" },
    "md": { "value": "0.375rem" },
    "lg": { "value": "0.5rem" },
    "xl": { "value": "0.75rem" },
    "2xl": { "value": "1rem" },
    "full": { "value": "9999px" }
  },
  "borderWidth": {
    "0": { "value": "0" },
    "1": { "value": "1px" },
    "2": { "value": "2px" },
    "4": { "value": "4px" }
  }
}
```

**File**: `packages/ivds-design-tokens/tokens/shadows.json`

```json
{
  "boxShadow": {
    "sm": { "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
    "base": { "value": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" },
    "md": { "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    "lg": { "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
    "xl": { "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
  }
}
```

## 🎨 Component-Level Customization

### Button Customization

**File**: `packages/ivds-core/src/components/button/_button-mixin.scss`

```scss
// Custom button variants
@mixin button-variant($bg, $color, $border, $hover-bg, $hover-border) {
  background-color: $bg;
  color: $color;
  border: 2px solid $border;
  border-radius: var(--borderRadius-lg, 0.5rem); // Custom radius
  font-weight: var(--fontWeight-semibold, 600);
  text-transform: uppercase; // Custom styling
  letter-spacing: 0.025em;
  
  // Custom hover effects
  &:hover {
    background-color: $hover-bg;
    border-color: $hover-border;
    transform: translateY(-2px);
    box-shadow: var(--boxShadow-lg);
  }
  
  // Custom focus styles
  &:focus {
    outline: 2px solid var(--color-brand-primary-500);
    outline-offset: 2px;
  }
}

// Custom button sizes
@mixin button-size($padding-y, $padding-x, $font-size, $min-height) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
  min-height: $min-height;
  border-radius: calc($min-height / 4); // Proportional radius
}
```

### Card Customization

**File**: `packages/ivds-core/src/components/card/_card-mixin.scss`

```scss
@mixin card-base {
  background-color: var(--color-background-primary, #ffffff);
  border-radius: var(--borderRadius-xl, 0.75rem);
  box-shadow: var(--boxShadow-lg);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  
  // Custom hover effect for interactive cards
  &--interactive:hover {
    transform: translateY(-4px);
    box-shadow: var(--boxShadow-xl);
  }
}

// Custom card variants
@mixin card-variant-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@mixin card-variant-gradient {
  background: linear-gradient(135deg, 
    var(--color-brand-primary-500) 0%, 
    var(--color-brand-secondary-500) 100%);
  color: white;
}
```

## 🌈 CSS Custom Properties (Runtime Customization)

### Global Theme Override

```css
/* In your application's CSS */
:root {
  /* Brand Colors */
  --color-brand-primary-500: #8b5cf6;
  --color-brand-primary-600: #7c3aed;
  --color-brand-secondary-500: #06b6d4;
  
  /* Typography */
  --fontFamily-sans: 'Poppins', system-ui, sans-serif;
  --fontSize-base: 1.125rem;
  --fontWeight-medium: 500;
  
  /* Spacing */
  --spacing-base: 1rem;
  
  /* Border Radius */
  --borderRadius-base: 8px;
  --borderRadius-lg: 12px;
  
  /* Shadows */
  --boxShadow-base: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Component-Specific Overrides

```css
/* Button customization */
.ivds-button {
  --button-border-radius: 12px;
  --button-font-weight: 600;
  --button-text-transform: none;
}

.ivds-button--primary {
  --button-bg: linear-gradient(45deg, #667eea, #764ba2);
  --button-color: white;
  --button-border: transparent;
}

/* Card customization */
.ivds-card {
  --card-border-radius: 16px;
  --card-padding: 2rem;
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* Input customization */
.ivds-text-input {
  --input-border-radius: 8px;
  --input-border-width: 2px;
  --input-focus-border-color: var(--color-brand-primary-500);
}
```

### Dark Mode Support

```css
/* Dark theme */
[data-theme="dark"] {
  --color-background-primary: #0f0f0f;
  --color-background-secondary: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a3a3a3;
  --color-border-primary: #404040;
  
  /* Component adjustments */
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  --button-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Auto dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-primary: #0f0f0f;
    --color-text-primary: #ffffff;
    /* ... other dark mode variables */
  }
}
```

## 🎭 Advanced Customization Examples

### Glassmorphism Theme

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: blur(10px);
}

.ivds-card--glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.ivds-button--glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
}
```

### Neumorphism Theme

```css
:root {
  --neu-bg: #e0e5ec;
  --neu-shadow-light: #ffffff;
  --neu-shadow-dark: #a3b1c6;
}

.ivds-button--neu {
  background: var(--neu-bg);
  border: none;
  box-shadow: 
    9px 9px 16px var(--neu-shadow-dark),
    -9px -9px 16px var(--neu-shadow-light);
  
  &:active {
    box-shadow: 
      inset 9px 9px 16px var(--neu-shadow-dark),
      inset -9px -9px 16px var(--neu-shadow-light);
  }
}
```

### Gradient Theme

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-success: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.ivds-button--gradient {
  background: var(--gradient-primary);
  border: none;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
}
```

## 🔄 Build Process

After making token changes:

```bash
# 1. Build design tokens
cd packages/ivds-design-tokens
yarn build

# 2. Build core styles
cd packages/ivds-core
yarn build

# 3. Test in Storybook
yarn dev:core    # See changes immediately
yarn dev:react   # React components will use updated styles
```

## 📱 Responsive Customization

```css
/* Mobile-first responsive design */
.ivds-button {
  --button-padding-x: 1rem;
  --button-padding-y: 0.5rem;
  --button-font-size: 0.875rem;
}

@media (min-width: 768px) {
  .ivds-button {
    --button-padding-x: 1.5rem;
    --button-padding-y: 0.75rem;
    --button-font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .ivds-button {
    --button-padding-x: 2rem;
    --button-padding-y: 1rem;
    --button-font-size: 1.125rem;
  }
}
```

## 🎨 Brand Integration Examples

### Startup/Tech Brand

```css
:root {
  --color-brand-primary-500: #6366f1;
  --color-brand-secondary-500: #8b5cf6;
  --fontFamily-sans: 'Inter', sans-serif;
  --borderRadius-base: 8px;
  --boxShadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### E-commerce Brand

```css
:root {
  --color-brand-primary-500: #dc2626;
  --color-brand-secondary-500: #ea580c;
  --fontFamily-sans: 'Roboto', sans-serif;
  --borderRadius-base: 4px;
  --button-text-transform: uppercase;
}
```

### Creative/Agency Brand

```css
:root {
  --color-brand-primary-500: #ec4899;
  --color-brand-secondary-500: #8b5cf6;
  --fontFamily-sans: 'Poppins', sans-serif;
  --borderRadius-base: 16px;
  --boxShadow-base: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

## 🚀 Quick Customization Checklist

- [ ] Update brand colors in `colors.json`
- [ ] Set custom fonts in `typography.json`
- [ ] Adjust spacing scale in `spacing.json`
- [ ] Customize border radius in `borders.json`
- [ ] Build design tokens (`yarn build:tokens`)
- [ ] Test in Storybook (`yarn dev:core`)
- [ ] Add component-specific overrides if needed
- [ ] Test dark mode compatibility
- [ ] Verify accessibility (color contrast, focus states)
- [ ] Build and test React components (`yarn dev:react`)

---

**Need help?** Check the [DEVELOPMENT.md](./DEVELOPMENT.md) guide or create an issue for support! 🎨✨