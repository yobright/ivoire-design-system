// Navigation component stories for Storybook
// Showcases navigation patterns and layouts following Helsinki Design System patterns

import './navigation.scss';

export default {
  title: 'Core/Navigation',
  decorators: [(storyFn) => `<div style="padding: 1rem;">${storyFn()}</div>`],
  parameters: {
    docs: {
      description: {
        component: 'CSS-only navigation component using IVDS design tokens with orange primary color. Provides flexible navigation patterns with proper semantic structure and accessibility features, following Helsinki Design System patterns.'
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

// Primary horizontal navigation
export const Primary = () => `
  <nav class="ivds-navigation ivds-navigation--horizontal" aria-label="Main navigation">
    <ul class="ivds-navigation__list">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Products</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Services</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">About</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Contact</a>
      </li>
    </ul>
  </nav>
`;

// Size variants
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Compact</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal ivds-navigation--compact" aria-label="Compact navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal" aria-label="Default navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Spacious</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal ivds-navigation--spacious" aria-label="Spacious navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

// Theme variants
export const Themes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default Theme</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal" aria-label="Default theme navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div style="background-color: #1e293b; padding: 1rem; border-radius: 0.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #e2e8f0;">Dark Theme</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal ivds-navigation--theme-dark" aria-label="Dark theme navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Minimal Theme</h4>
      <nav class="ivds-navigation ivds-navigation--horizontal ivds-navigation--theme-minimal" aria-label="Minimal theme navigation">
        <ul class="ivds-navigation__list">
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Home</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Products</a>
          </li>
          <li class="ivds-navigation__item">
            <a href="#" class="ivds-navigation__link">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

// Vertical navigation
export const Vertical = () => `
  <nav class="ivds-navigation ivds-navigation--vertical" aria-label="Sidebar navigation" style="width: 250px;">
    <ul class="ivds-navigation__list">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">Dashboard</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Projects</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Team Members</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Analytics</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Settings</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">Help & Support</a>
      </li>
    </ul>
  </nav>
`;

// Navigation with icons
export const WithIcons = () => `
  <nav class="ivds-navigation ivds-navigation--vertical ivds-navigation--with-icons" aria-label="Main navigation" style="width: 280px;">
    <ul class="ivds-navigation__list">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">
          <svg class="ivds-navigation__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Dashboard
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <svg class="ivds-navigation__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
            <rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
          Projects
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <svg class="ivds-navigation__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M23 21V19A4 4 0 0 0 16.5 15.91" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.13A4 4 0 0 1 16 11.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Team
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <svg class="ivds-navigation__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Analytics
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <svg class="ivds-navigation__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M19.4 15A1.65 1.65 0 0 0 21 13.09A1.65 1.65 0 0 0 19.4 9M14.5 4.1A1.65 1.65 0 0 0 11.91 3A1.65 1.65 0 0 0 9.5 4.1M9.5 19.9A1.65 1.65 0 0 0 12.09 21A1.65 1.65 0 0 0 14.5 19.9M4.6 15A1.65 1.65 0 0 0 3 13.09A1.65 1.65 0 0 0 4.6 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Settings
        </a>
      </li>
    </ul>
  </nav>
`;

// Compact horizontal navigation
export const CompactHorizontal = () => `
  <nav class="ivds-navigation ivds-navigation--horizontal" aria-label="Secondary navigation">
    <ul class="ivds-navigation__list">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page" style="padding: 0.5rem 0.75rem;">Overview</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem 0.75rem;">Details</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem 0.75rem;">History</a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem 0.75rem;">Settings</a>
      </li>
    </ul>
  </nav>
`;

// Navigation with badges
export const WithBadges = () => `
  <nav class="ivds-navigation ivds-navigation--vertical" aria-label="Main navigation" style="width: 280px;">
    <ul class="ivds-navigation__list">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page">
          <span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;">
                <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Dashboard
            </span>
          </span>
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2"/>
              </svg>
              Notifications
            </span>
            <span style="background-color: #ef4444; color: white; font-size: 0.75rem; padding: 0.125rem 0.375rem; border-radius: 0.75rem; min-width: 1.25rem; text-align: center;">3</span>
          </span>
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;">
                <path d="M21 15A2 2 0 0 1 19 17H7L4 20V4A2 2 0 0 1 6 2H19A2 2 0 0 1 21 4V15Z" stroke="currentColor" stroke-width="2"/>
              </svg>
              Messages
            </span>
            <span style="background-color: #10b981; color: white; font-size: 0.75rem; padding: 0.125rem 0.375rem; border-radius: 0.75rem; min-width: 1.25rem; text-align: center;">12</span>
          </span>
        </a>
      </li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link">
          <span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              Tasks
            </span>
            <span style="background-color: #f59e0b; color: white; font-size: 0.75rem; padding: 0.125rem 0.375rem; border-radius: 0.75rem; min-width: 1.25rem; text-align: center;">5</span>
          </span>
        </a>
      </li>
    </ul>
  </nav>
`;

// Breadcrumb-style navigation
export const BreadcrumbStyle = () => `
  <nav class="ivds-navigation ivds-navigation--horizontal" aria-label="Breadcrumb navigation">
    <ul class="ivds-navigation__list" style="align-items: center;">
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem;">Home</a>
      </li>
      <li style="color: #6b7280; margin: 0 0.5rem;">/</li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem;">Products</a>
      </li>
      <li style="color: #6b7280; margin: 0 0.5rem;">/</li>
      <li class="ivds-navigation__item">
        <a href="#" class="ivds-navigation__link" style="padding: 0.5rem;">Electronics</a>
      </li>
      <li style="color: #6b7280; margin: 0 0.5rem;">/</li>
      <li class="ivds-navigation__item">
        <span class="ivds-navigation__link ivds-navigation__link--active" style="padding: 0.5rem; cursor: default;" aria-current="page">Laptops</span>
      </li>
    </ul>
  </nav>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; gap: 2rem;">
    <nav class="ivds-navigation ivds-navigation--vertical" aria-label="Main navigation" role="navigation" style="width: 280px;">
      <ul class="ivds-navigation__list">
        <li class="ivds-navigation__item">
          <a href="#" class="ivds-navigation__link ivds-navigation__link--active" aria-current="page" aria-describedby="nav-help">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;" aria-hidden="true">
              <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Dashboard
          </a>
        </li>
        <li class="ivds-navigation__item">
          <a href="#" class="ivds-navigation__link" aria-label="View and manage your projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
            Projects
          </a>
        </li>
        <li class="ivds-navigation__item">
          <a href="#" class="ivds-navigation__link" aria-label="Manage team members and permissions">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;" aria-hidden="true">
              <path d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21" stroke="currentColor" stroke-width="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
            Team
          </a>
        </li>
        <li class="ivds-navigation__item">
          <a href="#" class="ivds-navigation__link" aria-label="Configure application settings">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem; vertical-align: middle;" aria-hidden="true">
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M19.4 15A1.65 1.65 0 0 0 21 13.09A1.65 1.65 0 0 0 19.4 9" stroke="currentColor" stroke-width="2"/>
            </svg>
            Settings
          </a>
        </li>
      </ul>
    </nav>
    
    <div style="flex: 1; padding: 1rem; background-color: #f8fafc; border-radius: 0.5rem;">
      <h3>Accessibility Features</h3>
      <ul style="margin-top: 1rem; line-height: 1.6;">
        <li><strong>Semantic HTML:</strong> Uses proper nav, ul, li structure</li>
        <li><strong>ARIA Labels:</strong> Descriptive labels for navigation and links</li>
        <li><strong>Current Page:</strong> aria-current="page" indicates active item</li>
        <li><strong>Focus Management:</strong> Proper focus indicators and keyboard navigation</li>
        <li><strong>Screen Reader Support:</strong> aria-hidden for decorative icons</li>
        <li><strong>Role Attributes:</strong> Explicit navigation role</li>
      </ul>
      <p id="nav-help" style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
        Use arrow keys to navigate between menu items, Enter or Space to activate links.
      </p>
    </div>
  </div>
`;