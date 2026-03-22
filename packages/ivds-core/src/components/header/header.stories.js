// Header component stories for Storybook
// Showcases header layouts, navigation patterns, and responsive behavior

export default {
  title: 'Core/Header',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only header component using IVDS design tokens. Provides flexible layout options for site navigation with proper semantic structure, accessibility features, and responsive behavior. Includes mixins for branding, layout, and theming.'
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
            id: 'landmark-one-main',
            enabled: false // Header is not main content
          }
        ]
      }
    }
  }
};

// Basic header
export const Basic = () => `
  <header class="ivds-header">
    <div class="ivds-header__brand">
      <a href="#" class="ivds-header__brand-text">IVDS</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Home</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">About</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Services</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Contact</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--secondary ivds-button--small">Sign In</button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Sign Up</button>
    </div>
  </header>
`;

// Header with logo
export const WithLogo = () => `
  <header class="ivds-header">
    <div class="ivds-header__brand">
      <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
        <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
      </svg>
      <a href="#" class="ivds-header__brand-text">Design System</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Components</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Tokens</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Documentation</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Examples</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Get Started</button>
    </div>
  </header>
`;

// Sticky header
export const Sticky = () => `
  <div style="height: 200vh; background: linear-gradient(to bottom, #f8fafc, #e2e8f0);">
    <header class="ivds-header ivds-header--sticky">
      <div class="ivds-header__brand">
        <a href="#" class="ivds-header__brand-text">Sticky Header</a>
      </div>
      
      <nav class="ivds-header__nav" aria-label="Main navigation">
        <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Home</a>
        <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Products</a>
        <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">About</a>
        <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Contact</a>
      </nav>
      
      <div class="ivds-header__actions">
        <button class="ivds-button ivds-button--secondary ivds-button--small">Login</button>
      </div>
    </header>
    
    <div style="padding: 2rem; text-align: center;">
      <h1 style="margin-bottom: 1rem;">Scroll down to see sticky behavior</h1>
      <p>This header will stick to the top of the viewport when scrolling.</p>
      <div style="margin-top: 4rem; padding: 2rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h2>Content Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style="margin-top: 2rem; padding: 2rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h2>Content Section 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
`;

// Header with search
export const WithSearch = () => `
  <header class="ivds-header">
    <div class="ivds-header__brand">
      <a href="#" class="ivds-header__brand-text">IVDS</a>
    </div>
    
    <div style="flex: 1; max-width: 400px; margin: 0 2rem;">
      <div style="position: relative;">
        <input 
          type="search" 
          placeholder="Search components, tokens, docs..." 
          style="width: 100%; padding: 0.5rem 0.75rem 0.5rem 2.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem;"
          aria-label="Search"
        />
        <svg 
          style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #6b7280;" 
          width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Docs</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Components</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">GitHub</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small" aria-label="Toggle theme">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Get Started</button>
    </div>
  </header>
`;

// Simple header
export const Simple = () => `
  <header class="ivds-header">
    <div class="ivds-header__brand">
      <a href="#" class="ivds-header__brand-text">Simple Site</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Home</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">About</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Contact</a>
    </nav>
  </header>
`;

// Header with user menu
export const WithUserMenu = () => `
  <header class="ivds-header">
    <div class="ivds-header__brand">
      <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
        <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
      </svg>
      <a href="#" class="ivds-header__brand-text">Dashboard</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Overview</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Projects</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Team</a>
      <a href="#" style="color: #334155; text-decoration: none; font-weight: 500;">Settings</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small" aria-label="Notifications">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='16' fill='%23e2e8f0'/%3E%3Ctext x='16' y='20' text-anchor='middle' font-family='system-ui' font-size='14' fill='%23475569'%3EJD%3C/text%3E%3C/svg%3E"
          alt="User avatar"
          style="width: 2rem; height: 2rem; border-radius: 50%;"
        />
        <button 
          style="background: none; border: none; color: #334155; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.25rem;"
          aria-label="User menu"
        >
          John Doe
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
`;

// Responsive header with mobile menu
export const ResponsiveMobile = () => `
  <div style="max-width: 375px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
    <header class="ivds-header ivds-header--mobile-nav-open">
      <div class="ivds-header__brand">
        <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
          <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
        </svg>
        <a href="#" class="ivds-header__brand-text">IVDS</a>
      </div>
      
      <button class="ivds-header__mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      
      <div class="ivds-header__actions">
        <button class="ivds-button ivds-button--primary ivds-button--small">Sign Up</button>
      </div>
      
      <div class="ivds-header__search ivds-header__search--mobile-visible">
        <input 
          type="search" 
          placeholder="Search..." 
          style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem;"
          aria-label="Search"
        />
      </div>
      
      <nav class="ivds-header__nav" aria-label="Main navigation">
        <a href="#" aria-current="page">Home</a>
        <a href="#">Components</a>
        <a href="#">Documentation</a>
        <a href="#">Support</a>
      </nav>
    </header>
    
    <div style="padding: 1rem; background-color: #f8fafc; text-align: center;">
      <p style="font-size: 0.875rem; color: #6b7280;">Mobile view (375px width)</p>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">Navigation expands below on mobile</p>
    </div>
  </div>
`;

// Dark theme header
export const DarkTheme = () => `
  <header class="ivds-header ivds-header--dark">
    <div class="ivds-header__brand">
      <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
        <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
      </svg>
      <a href="#" class="ivds-header__brand-text">Dark Theme</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" aria-current="page">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small" style="color: #f8fafc; border-color: #475569;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Get Started</button>
    </div>
  </header>
`;

// Compact header variant
export const Compact = () => `
  <header class="ivds-header ivds-header--compact">
    <div class="ivds-header__brand">
      <svg class="ivds-header__brand-logo" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
        <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
      </svg>
      <a href="#" class="ivds-header__brand-text">Compact</a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation">
      <a href="#" aria-current="page">Dashboard</a>
      <a href="#">Analytics</a>
      <a href="#">Reports</a>
      <a href="#">Settings</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Profile</button>
    </div>
  </header>
  
  <div style="padding: 1rem; background-color: #f8fafc; text-align: center;">
    <p style="font-size: 0.875rem; color: #6b7280;">Compact header variant with reduced height and spacing</p>
  </div>
`;

// Transparent header
export const Transparent = () => `
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
    <header class="ivds-header ivds-header--transparent">
      <div class="ivds-header__brand">
        <a href="#" class="ivds-header__brand-text" style="color: white;">Transparent</a>
      </div>
      
      <nav class="ivds-header__nav" aria-label="Main navigation">
        <a href="#" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500;" aria-current="page">Home</a>
        <a href="#" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500;">Features</a>
        <a href="#" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500;">Pricing</a>
        <a href="#" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500;">Contact</a>
      </nav>
      
      <div class="ivds-header__actions">
        <button class="ivds-button ivds-button--secondary ivds-button--small" style="background: rgba(255,255,255,0.2); color: white; border-color: rgba(255,255,255,0.3);">Login</button>
        <button class="ivds-button ivds-button--primary ivds-button--small">Sign Up</button>
      </div>
    </header>
    
    <div style="padding: 4rem 2rem; text-align: center; color: white;">
      <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 700;">Hero Section</h1>
      <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto;">Transparent header overlays content beautifully. Scroll to see sticky behavior with backdrop blur.</p>
      <div style="margin-top: 8rem; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 1rem; backdrop-filter: blur(10px);">
        <h2 style="margin-bottom: 1rem;">Content Section</h2>
        <p>This demonstrates how the transparent header works with content below.</p>
      </div>
    </div>
  </div>
`;

// Header with container wrapper
export const WithContainer = () => `
  <header class="ivds-header">
    <div class="ivds-header__container">
      <div class="ivds-header__brand">
        <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
          <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
        </svg>
        <a href="#" class="ivds-header__brand-text">Contained</a>
      </div>
      
      <nav class="ivds-header__nav" aria-label="Main navigation">
        <a href="#" aria-current="page">Home</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      
      <div class="ivds-header__actions">
        <button class="ivds-button ivds-button--secondary ivds-button--small">Login</button>
        <button class="ivds-button ivds-button--primary ivds-button--small">Sign Up</button>
      </div>
    </div>
  </header>
  
  <div style="padding: 2rem; background-color: #f8fafc; text-align: center;">
    <p style="font-size: 0.875rem; color: #6b7280;">Header content is contained within a max-width container (1200px)</p>
    <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">Useful for full-width header backgrounds with contained content</p>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <header class="ivds-header" role="banner">
    <div class="ivds-header__brand">
      <a href="#" class="ivds-header__brand-text" aria-label="IVDS Design System home">
        <svg class="ivds-header__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
          <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
        </svg>
        IVDS
      </a>
    </div>
    
    <nav class="ivds-header__nav" aria-label="Main navigation" role="navigation">
      <a href="#" aria-current="page">Home</a>
      <a href="#">Components</a>
      <a href="#">Documentation</a>
      <a href="#">Support</a>
    </nav>
    
    <div class="ivds-header__actions">
      <button class="ivds-button ivds-button--tertiary ivds-button--small" aria-label="Search components and documentation">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="ivds-button ivds-button--secondary ivds-button--small">Sign In</button>
      <button class="ivds-button ivds-button--primary ivds-button--small">Get Started</button>
    </div>
  </header>
  
  <div style="padding: 2rem; background-color: #f8fafc;">
    <h1>Accessibility Features</h1>
    <ul style="margin-top: 1rem; line-height: 1.6;">
      <li><strong>Semantic HTML:</strong> Uses proper header, nav, and role attributes</li>
      <li><strong>ARIA Labels:</strong> Descriptive labels for interactive elements</li>
      <li><strong>Current Page:</strong> aria-current="page" indicates active navigation item</li>
      <li><strong>Focus Management:</strong> Proper focus indicators and keyboard navigation</li>
      <li><strong>Screen Reader Support:</strong> aria-hidden for decorative icons</li>
      <li><strong>Responsive Design:</strong> Mobile-friendly navigation patterns</li>
      <li><strong>Color Contrast:</strong> Meets WCAG AA standards for text contrast</li>
    </ul>
  </div>
`;