// Breadcrumb component stories for Storybook
// Showcases breadcrumb navigation patterns and accessibility features following Helsinki Design System patterns

import './breadcrumb.scss';

export default {
  title: 'Core/Breadcrumb',
  decorators: [(storyFn) => `<div style="padding: 1rem;">${storyFn()}</div>`],
  parameters: {
    docs: {
      description: {
        component: 'CSS-only breadcrumb navigation component using IVDS design tokens. Provides accessible navigation hierarchy with proper ARIA attributes, following Helsinki Design System patterns with CSS custom properties for theming.'
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          },
          {
            id: 'focus-order-semantics',
            enabled: true
          },
          {
            id: 'aria-allowed-attr',
            enabled: true
          }
        ]
      }
    }
  }
};

// Basic breadcrumb
export const Primary = () => `
  <nav class="ivds-breadcrumb" aria-label="Breadcrumb">
    <ol class="ivds-breadcrumb__list">
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Home</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Products</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
      </li>
    </ol>
  </nav>
`;

// Size variants
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Small</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--small" aria-label="Small breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default</h4>
      <nav class="ivds-breadcrumb" aria-label="Default breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Large</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--large" aria-label="Large breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
`;

// Separator variants
export const Separators = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default (Slash)</h4>
      <nav class="ivds-breadcrumb" aria-label="Default separator breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Arrow</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--separator-arrow" aria-label="Arrow separator breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Chevron</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--separator-chevron" aria-label="Chevron separator breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Bullet</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--separator-bullet" aria-label="Bullet separator breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
`;

// Theme variants
export const Themes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default Theme</h4>
      <nav class="ivds-breadcrumb" aria-label="Default theme breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div style="background-color: #1e293b; padding: 1rem; border-radius: 0.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #e2e8f0;">Dark Theme</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--theme-dark" aria-label="Dark theme breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Muted Theme</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--theme-muted" aria-label="Muted theme breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
`;

// Long breadcrumb path
export const LongPath = () => `
  <nav class="ivds-breadcrumb" aria-label="Long path breadcrumb">
    <ol class="ivds-breadcrumb__list">
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Home</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Electronics</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Computers</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Laptops</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Gaming Laptops</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <span class="ivds-breadcrumb__current" aria-current="page">High Performance Gaming Laptop</span>
      </li>
    </ol>
  </nav>
`;

// Single level breadcrumb
export const SingleLevel = () => `
  <nav class="ivds-breadcrumb" aria-label="Breadcrumb">
    <ol class="ivds-breadcrumb__list">
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">Home</a>
      </li>
      <li class="ivds-breadcrumb__item">
        <span class="ivds-breadcrumb__current" aria-current="page">About</span>
      </li>
    </ol>
  </nav>
`;

// Breadcrumb with icons
export const WithIcons = () => `
  <nav class="ivds-breadcrumb ivds-breadcrumb--with-icons" aria-label="Breadcrumb with icons">
    <ol class="ivds-breadcrumb__list">
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">
          <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Home
        </a>
      </li>
      <li class="ivds-breadcrumb__item">
        <a href="#" class="ivds-breadcrumb__link">
          <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
          </svg>
          Products
        </a>
      </li>
      <li class="ivds-breadcrumb__item">
        <span class="ivds-breadcrumb__current" aria-current="page">
          <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
          </svg>
          Laptops
        </span>
      </li>
    </ol>
  </nav>
`;

// All variants showcase
export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 3rem;">
    <div>
      <h4 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Small with Arrow Separator</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--small ivds-breadcrumb--separator-arrow" aria-label="Small arrow breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Products</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Laptops</span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Large with Icons and Chevron</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--large ivds-breadcrumb--with-icons ivds-breadcrumb--separator-chevron" aria-label="Large icon chevron breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">
              <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Home
            </a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">
              <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              Products
            </a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">
              <svg class="ivds-breadcrumb__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              Laptops
            </span>
          </li>
        </ol>
      </nav>
    </div>
    
    <div style="background-color: #1e293b; padding: 1.5rem; border-radius: 0.5rem;">
      <h4 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600; color: #e2e8f0;">Dark Theme with Bullet Separator</h4>
      <nav class="ivds-breadcrumb ivds-breadcrumb--theme-dark ivds-breadcrumb--separator-bullet" aria-label="Dark theme bullet breadcrumb">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Dashboard</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Analytics</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Reports</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Monthly Summary</span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 1rem;">Standard Breadcrumb with ARIA</h4>
      <nav class="ivds-breadcrumb" aria-label="Breadcrumb navigation">
        <ol class="ivds-breadcrumb__list">
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link" aria-describedby="breadcrumb-help">Home</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Documentation</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <a href="#" class="ivds-breadcrumb__link">Components</a>
          </li>
          <li class="ivds-breadcrumb__item">
            <span class="ivds-breadcrumb__current" aria-current="page">Breadcrumb</span>
          </li>
        </ol>
      </nav>
      <p id="breadcrumb-help" style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">
        Use breadcrumb navigation to understand your current location within the site hierarchy.
      </p>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem;">Breadcrumb in Container</h4>
      <div style="background-color: #f8fafc; padding: 1rem; border-radius: 0.5rem;">
        <nav class="ivds-breadcrumb" aria-label="Page location">
          <ol class="ivds-breadcrumb__list">
            <li class="ivds-breadcrumb__item">
              <a href="#" class="ivds-breadcrumb__link">Dashboard</a>
            </li>
            <li class="ivds-breadcrumb__item">
              <a href="#" class="ivds-breadcrumb__link">Settings</a>
            </li>
            <li class="ivds-breadcrumb__item">
              <span class="ivds-breadcrumb__current" aria-current="page">Profile</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
`;

// Responsive behavior
export const ResponsiveBehavior = () => `
  <div style="max-width: 300px; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 0.5rem;">
    <h4 style="margin-bottom: 1rem; font-size: 0.875rem;">Responsive (resize to see effect)</h4>
    <nav class="ivds-breadcrumb ivds-breadcrumb--responsive" aria-label="Responsive breadcrumb">
      <ol class="ivds-breadcrumb__list">
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Home</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Very Long Category Name</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Subcategory</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Products</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <span class="ivds-breadcrumb__current" aria-current="page">Current Page with Long Title</span>
        </li>
      </ol>
    </nav>
  </div>
`;

// Truncation behavior
export const Truncation = () => `
  <div style="max-width: 400px; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 0.5rem;">
    <h4 style="margin-bottom: 1rem; font-size: 0.875rem;">Truncated Long Text</h4>
    <nav class="ivds-breadcrumb ivds-breadcrumb--truncate" aria-label="Truncated breadcrumb">
      <ol class="ivds-breadcrumb__list">
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Home</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">This is a very long category name that will be truncated</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <a href="#" class="ivds-breadcrumb__link">Another long subcategory name</a>
        </li>
        <li class="ivds-breadcrumb__item">
          <span class="ivds-breadcrumb__current" aria-current="page">Current page with an extremely long title that exceeds normal length</span>
        </li>
      </ol>
    </nav>
  </div>
`;