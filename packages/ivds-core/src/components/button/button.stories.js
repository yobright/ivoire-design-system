// Button component stories for Storybook
// Showcases all button variants, sizes, and states

export default {
  title: 'Core/Button',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only button component using IVDS design tokens. Provides multiple variants, sizes, and states for different use cases.'
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
          }
        ]
      }
    }
  }
};

// Basic button variants
export const Primary = () => `
  <button class="ivds-button ivds-button--primary">
    Primary Button
  </button>
`;

export const Secondary = () => `
  <button class="ivds-button ivds-button--secondary">
    Secondary Button
  </button>
`;

export const Tertiary = () => `
  <button class="ivds-button ivds-button--tertiary">
    Tertiary Button
  </button>
`;

// Semantic variants
export const Success = () => `
  <button class="ivds-button ivds-button--success">
    Success Button
  </button>
`;

export const Warning = () => `
  <button class="ivds-button ivds-button--warning">
    Warning Button
  </button>
`;

export const Danger = () => `
  <button class="ivds-button ivds-button--danger">
    Danger Button
  </button>
`;

export const Info = () => `
  <button class="ivds-button ivds-button--info">
    Info Button
  </button>
`;

// Button sizes
export const Sizes = () => `
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <button class="ivds-button ivds-button--primary ivds-button--small">
      Small Button
    </button>
    <button class="ivds-button ivds-button--primary">
      Default Button
    </button>
    <button class="ivds-button ivds-button--primary ivds-button--large">
      Large Button
    </button>
  </div>
`;

// Button with icons
export const WithIcons = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button class="ivds-button ivds-button--primary">
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-button__text">Add Item</span>
    </button>
    
    <button class="ivds-button ivds-button--secondary">
      <span class="ivds-button__text">Download</span>
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </div>
`;

// Icon-only buttons
export const IconOnly = () => `
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <button class="ivds-button ivds-button--primary ivds-button--icon-only ivds-button--small" aria-label="Add item">
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    
    <button class="ivds-button ivds-button--primary ivds-button--icon-only" aria-label="Edit item">
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4H4A2 2 0 0 0 2 6V20A2 2 0 0 0 4 22H18A2 2 0 0 0 20 20V13M18.5 2.5A2.121 2.121 0 0 1 21 5L12 14L8 15L9 11L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    
    <button class="ivds-button ivds-button--danger ivds-button--icon-only ivds-button--large" aria-label="Delete item">
      <span class="ivds-button__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H5H21M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6H19ZM10 11V17M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </div>
`;

// Loading states
export const LoadingStates = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button class="ivds-button ivds-button--primary ivds-button--loading">
      Loading...
    </button>
    
    <button class="ivds-button ivds-button--secondary ivds-button--loading">
      Processing
    </button>
    
    <button class="ivds-button ivds-button--success ivds-button--loading ivds-button--small">
      Saving
    </button>
  </div>
`;

// Disabled states
export const DisabledStates = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button class="ivds-button ivds-button--primary" disabled>
      Disabled Primary
    </button>
    
    <button class="ivds-button ivds-button--secondary" disabled>
      Disabled Secondary
    </button>
    
    <button class="ivds-button ivds-button--tertiary" aria-disabled="true">
      Aria Disabled
    </button>
  </div>
`;

// Full width button
export const FullWidth = () => `
  <div style="max-width: 400px;">
    <button class="ivds-button ivds-button--primary ivds-button--full-width">
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V5A2 2 0 0 0 14 3H10A2 2 0 0 0 8 5V21L12 19L16 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-button__text">Save to Bookmarks</span>
    </button>
  </div>
`;

// Button groups - simplified layout containers
export const ButtonGroups = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 1rem;">Horizontal Button Layout</h4>
      <div class="ivds-button-group" style="gap: 0.5rem;">
        <button class="ivds-button ivds-button--secondary">Left</button>
        <button class="ivds-button ivds-button--secondary">Center</button>
        <button class="ivds-button ivds-button--secondary">Right</button>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem;">Vertical Button Layout</h4>
      <div class="ivds-button-group ivds-button-group--vertical" style="gap: 0.5rem;">
        <button class="ivds-button ivds-button--secondary">Top</button>
        <button class="ivds-button ivds-button--secondary">Middle</button>
        <button class="ivds-button ivds-button--secondary">Bottom</button>
      </div>
    </div>
  </div>
`;

// All variants showcase
export const AllVariants = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
    <button class="ivds-button ivds-button--primary">Primary</button>
    <button class="ivds-button ivds-button--secondary">Secondary</button>
    <button class="ivds-button ivds-button--tertiary">Tertiary</button>
    <button class="ivds-button ivds-button--success">Success</button>
    <button class="ivds-button ivds-button--warning">Warning</button>
    <button class="ivds-button ivds-button--danger">Danger</button>
    <button class="ivds-button ivds-button--info">Info</button>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
    <button class="ivds-button ivds-button--primary" aria-describedby="button-help">
      Submit Form
    </button>
    <p id="button-help" style="font-size: 0.875rem; color: #6b7280;">
      This button will submit the form and redirect you to the confirmation page.
    </p>
    
    <button class="ivds-button ivds-button--danger" aria-label="Delete user account permanently">
      <span class="ivds-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H5H21M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6H19ZM10 11V17M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-button__text">Delete Account</span>
    </button>
  </div>
`;

// HTML code examples
export const HTMLCodeExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px;">
    <div>
      <h3 style="margin-bottom: 1rem;">Basic Button HTML</h3>
      <div style="margin-bottom: 1rem;">
        <button class="ivds-button ivds-button--primary">Primary Button</button>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;button class="ivds-button ivds-button--primary"&gt;
  Primary Button
&lt;/button&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Button with Icon HTML</h3>
      <div style="margin-bottom: 1rem;">
        <button class="ivds-button ivds-button--secondary">
          <span class="ivds-button__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-button__text">Add Item</span>
        </button>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;button class="ivds-button ivds-button--secondary"&gt;
  &lt;span class="ivds-button__icon"&gt;
    &lt;svg width="16" height="16" viewBox="0 0 24 24" fill="none"&gt;
      &lt;path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2"/&gt;
    &lt;/svg&gt;
  &lt;/span&gt;
  &lt;span class="ivds-button__text"&gt;Add Item&lt;/span&gt;
&lt;/button&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Loading Button HTML</h3>
      <div style="margin-bottom: 1rem;">
        <button class="ivds-button ivds-button--primary ivds-button--loading">
          Loading...
        </button>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;button class="ivds-button ivds-button--primary ivds-button--loading"&gt;
  Loading...
&lt;/button&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Button Group HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-button-group" style="gap: 0.5rem;">
          <button class="ivds-button ivds-button--secondary">Cancel</button>
          <button class="ivds-button ivds-button--primary">Save</button>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-button-group" style="gap: 0.5rem;"&gt;
  &lt;button class="ivds-button ivds-button--secondary"&gt;Cancel&lt;/button&gt;
  &lt;button class="ivds-button ivds-button--primary"&gt;Save&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
`;

// Usage guidelines
export const UsageGuidelines = () => `
  <div style="max-width: 800px; display: flex; flex-direction: column; gap: 2rem;">
    <div class="ivds-card">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Button Usage Guidelines</h3>
      </div>
      <div class="ivds-card__body">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <h4 style="margin-bottom: 0.5rem; color: #059669;">✓ Do</h4>
            <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
              <li>Use primary buttons for the main action on a page</li>
              <li>Use secondary buttons for secondary actions</li>
              <li>Provide clear, action-oriented button text</li>
              <li>Use loading states for async operations</li>
              <li>Include proper ARIA labels for icon-only buttons</li>
            </ul>
          </div>
          
          <div>
            <h4 style="margin-bottom: 0.5rem; color: #dc2626;">✗ Don't</h4>
            <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
              <li>Use multiple primary buttons in the same context</li>
              <li>Use vague button text like "Click here" or "Submit"</li>
              <li>Make buttons too small for touch targets (minimum 44px)</li>
              <li>Use disabled buttons without explanation</li>
              <li>Overuse danger buttons - reserve for destructive actions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="ivds-card">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Button Hierarchy</h3>
      </div>
      <div class="ivds-card__body">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button class="ivds-button ivds-button--primary">Primary</button>
            <span>Main call-to-action, use sparingly (1 per page/section)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button class="ivds-button ivds-button--secondary">Secondary</button>
            <span>Secondary actions, can be used multiple times</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button class="ivds-button ivds-button--tertiary">Tertiary</button>
            <span>Subtle actions, minimal visual weight</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;