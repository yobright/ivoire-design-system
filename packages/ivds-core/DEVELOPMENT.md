# IVDS Core Development Guide

This guide covers local development setup, contribution guidelines, and the build system for the `@ivds/core` package.

## Prerequisites

- Node.js 22.13.1+ and Yarn
- Basic knowledge of SCSS/CSS and design systems
- Familiarity with BEM methodology

## Local Development Setup

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/ivds/design-system.git
   cd design-system
   yarn install
   ```

2. **Navigate to the core package:**
   ```bash
   cd packages/ivds-core
   ```

3. **Start Storybook for development:**
   ```bash
   yarn storybook
   ```

4. **Run tests:**
   ```bash
   yarn test
   ```

5. **Build the package:**
   ```bash
   yarn build
   ```

## Project Structure

```
packages/ivds-core/
├── src/                    # Source SCSS files
│   ├── base/              # Foundation styles
│   ├── components/        # UI components
│   ├── utils/             # Utility classes
│   ├── icons/             # Icon system
│   ├── variables/         # Design token imports
│   └── all.scss           # Main entry point
├── lib/                   # Built CSS output (generated)
├── scripts/               # Build utilities
├── .storybook/           # Storybook configuration
└── __tests__/            # SCSS unit tests
```

## Component Development

### Creating a New Component

1. **Create component directory:**
   ```bash
   mkdir src/components/my-component
   ```

2. **Create SCSS files:**
   ```scss
   // src/components/my-component/_my-component.scss (mixins)
   @import '../../variables/variables';
   
   @mixin my-component-base {
     // Base component styles
   }
   
   @mixin my-component-variant($color) {
     // Variant styles
   }
   ```

   ```scss
   // src/components/my-component/my-component.scss (public styles)
   @import 'my-component';
   
   .ivds-my-component {
     @include my-component-base;
     
     &--variant {
       @include my-component-variant(var(--color-brand-primary-500));
     }
   }
   ```

3. **Create Storybook story:**
   ```javascript
   // src/components/my-component/my-component.stories.js
   export default {
     title: 'Core/My Component',
     parameters: {
       docs: {
         description: {
           component: 'Description of the component.'
         }
       }
     }
   };
   
   export const Default = () => `
     <div class="ivds-my-component">
       Default component
     </div>
   `;
   ```

4. **Add to component bundle:**
   ```scss
   // src/components/all.scss
   @import 'my-component/my-component';
   ```

### Component Guidelines

- **Follow BEM methodology** with `ivds-` prefix
- **Use design tokens** from `@ivds/design-tokens`
- **Include accessibility features** (focus states, ARIA support)
- **Provide multiple variants** (sizes, colors, states)
- **Write comprehensive Storybook stories**

### SCSS Architecture

```scss
// Component structure
.ivds-component {
  // Base styles using design tokens
  
  &__element {
    // Element styles
  }
  
  &--modifier {
    // Modifier styles
  }
  
  &:hover,
  &:focus,
  &:active {
    // Interactive states
  }
  
  &:disabled,
  &[aria-disabled="true"] {
    // Disabled state
  }
}
```

## Testing

### SCSS Unit Tests

Create tests using Sass True:

```scss
// src/components/button/__tests__/button.test.scss
@import 'sass-true';
@import '../button';

@include test-module('Button Component') {
  @include test('button-variant mixin') {
    @include assert {
      @include output {
        @include button-variant(#0ea5e9, #ffffff);
      }
      @include expect {
        background-color: #0ea5e9;
        color: #ffffff;
        border-color: transparent;
      }
    }
  }
}
```

Run tests:
```bash
yarn test
yarn test --watch  # Watch mode
```

### Visual Testing

Storybook provides visual testing through:
- **Accessibility addon**: Automated a11y testing
- **Measure addon**: Layout measurement tools
- **Outline addon**: Element outline visualization

## Build System

### PostCSS Pipeline

The build system uses PostCSS with these plugins:

1. **postcss-import**: Resolves @import statements
2. **@csstools/postcss-sass**: SCSS syntax support
3. **postcss-preset-env**: Modern CSS features + autoprefixer
4. **postcss-inline-svg**: SVG inlining for icons
5. **cssnano**: Minification (production only)

### Build Commands

```bash
# Full build
yarn build

# Individual steps
yarn lint:styles          # Lint SCSS files
yarn postcss-build        # Compile SCSS to CSS
yarn copy-scss-files       # Copy mixins to lib/
yarn copy-scss-utils       # Copy utility mixins
```

### Output Structure

```
lib/
├── base.css              # Base styles
├── base.min.css          # Minified base
├── components/           # Individual components
│   ├── all.css          # All components bundle
│   ├── button.css       # Individual component
│   └── button.min.css   # Minified component
├── utils/               # Utility classes
├── icons/               # Icon styles
├── variables/           # Token CSS files
├── all.css             # Complete bundle
└── all.min.css         # Minified complete bundle
```

## Code Style

### SCSS Guidelines

- Use **kebab-case** for variables, mixins, and functions
- Follow **BEM methodology** for class names
- Use **design tokens** instead of hardcoded values
- Include **fallback values** for CSS custom properties
- Write **mobile-first** responsive styles

### Example:

```scss
// ✅ Good
.ivds-button {
  background-color: var(--color-brand-primary-500, #0ea5e9);
  padding: var(--spacing-3, 0.75rem) var(--spacing-6, 1.5rem);
  
  @media (min-width: 768px) {
    padding: var(--spacing-4, 1rem) var(--spacing-8, 2rem);
  }
}

// ❌ Bad
.Button {
  background-color: #0ea5e9; // No fallback
  padding: 12px 24px;        // Hardcoded values
}
```

## Linting

Stylelint configuration enforces:
- BEM class naming with `ivds-` prefix
- Kebab-case for variables and mixins
- Consistent formatting and spacing
- SCSS best practices

Run linting:
```bash
yarn lint:styles
yarn lint:styles --fix  # Auto-fix issues
```

## Contributing

### Pull Request Process

1. **Create feature branch** from `main`
2. **Implement changes** following guidelines
3. **Add/update tests** for new functionality
4. **Update Storybook stories** if needed
5. **Run full test suite** and linting
6. **Update documentation** if required
7. **Submit pull request** with clear description

### Commit Guidelines

Use conventional commits:
```
feat(core): add new button variant
fix(core): resolve focus state issue
docs(core): update component documentation
test(core): add button component tests
```

### Review Checklist

- [ ] Follows BEM methodology with `ivds-` prefix
- [ ] Uses design tokens appropriately
- [ ] Includes accessibility features
- [ ] Has comprehensive Storybook stories
- [ ] Passes all tests and linting
- [ ] Includes fallback values for browser compatibility
- [ ] Documentation is updated

## Troubleshooting

### Common Issues

**Build fails with SCSS errors:**
- Check import paths in SCSS files
- Ensure design tokens package is installed
- Verify PostCSS configuration

**Storybook not loading styles:**
- Check that `all.scss` is imported in `.storybook/preview.js`
- Verify Vite configuration for SCSS processing

**Tests failing:**
- Ensure Sass True is properly configured
- Check Jest transformer setup
- Verify test file naming (`.test.scss`)

### Getting Help

- Check existing [GitHub issues](https://github.com/ivds/design-system/issues)
- Review [Storybook documentation](https://ivds.github.io/design-system/core)
- Ask questions in [Discussions](https://github.com/ivds/design-system/discussions)
