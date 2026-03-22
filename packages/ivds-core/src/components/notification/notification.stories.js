// Notification component stories for Storybook
// Showcases all notification variants, dismissible functionality, and states

export default {
  title: 'Core/Notification',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only notification component using IVDS design tokens. Provides success, warning, error, and info variants with dismissible functionality and icon support.'
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

// Basic notification variants
export const Success = () => `
  <div class="ivds-notification ivds-notification--success">
    <div class="ivds-notification__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="ivds-notification__content">
      <div class="ivds-notification__title">Success!</div>
      <div class="ivds-notification__message">Your changes have been saved successfully.</div>
    </div>
  </div>
`;

export const Warning = () => `
  <div class="ivds-notification ivds-notification--warning">
    <div class="ivds-notification__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="ivds-notification__content">
      <div class="ivds-notification__title">Warning</div>
      <div class="ivds-notification__message">Please review your input before proceeding.</div>
    </div>
  </div>
`;

export const Error = () => `
  <div class="ivds-notification ivds-notification--error">
    <div class="ivds-notification__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="ivds-notification__content">
      <div class="ivds-notification__title">Error</div>
      <div class="ivds-notification__message">Something went wrong. Please try again later.</div>
    </div>
  </div>
`;

export const Info = () => `
  <div class="ivds-notification ivds-notification--info">
    <div class="ivds-notification__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="ivds-notification__content">
      <div class="ivds-notification__title">Information</div>
      <div class="ivds-notification__message">Here's some helpful information for you to know.</div>
    </div>
  </div>
`;

// Dismissible notifications
export const Dismissible = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--success ivds-notification--dismissible">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Success!</div>
        <div class="ivds-notification__message">This notification can be dismissed by clicking the X button.</div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div class="ivds-notification ivds-notification--warning ivds-notification--dismissible">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Warning</div>
        <div class="ivds-notification__message">This warning can be dismissed when you're ready.</div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
`;

// Size variants
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--info ivds-notification--compact">
      <div class="ivds-notification__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Compact Size</div>
        <div class="ivds-notification__message">This is a compact notification with smaller padding and text.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--info">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Default Size</div>
        <div class="ivds-notification__message">This is the default notification size with standard padding and text.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--info ivds-notification--spacious">
      <div class="ivds-notification__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Spacious Size</div>
        <div class="ivds-notification__message">This is a spacious notification with larger padding, bigger text, and more breathing room.</div>
      </div>
    </div>
  </div>
`;

// Notifications with actions
export const WithActions = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--warning ivds-notification--with-actions">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Update Available</div>
        <div class="ivds-notification__message">A new version of the application is available. Would you like to update now?</div>
        <div class="ivds-notification__actions">
          <button class="ivds-button ivds-button--warning ivds-button--small">Update Now</button>
          <button class="ivds-button ivds-button--tertiary ivds-button--small">Later</button>
        </div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--error ivds-notification--with-actions ivds-notification--dismissible">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Connection Failed</div>
        <div class="ivds-notification__message">Unable to connect to the server. Please check your internet connection.</div>
        <div class="ivds-notification__actions">
          <button class="ivds-button ivds-button--danger ivds-button--small">Retry</button>
          <button class="ivds-button ivds-button--tertiary ivds-button--small">Go Offline</button>
        </div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
`;

// Without icons
export const WithoutIcons = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--success">
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Success!</div>
        <div class="ivds-notification__message">Your changes have been saved successfully.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--info ivds-notification--dismissible">
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Information</div>
        <div class="ivds-notification__message">This notification doesn't have an icon but still maintains proper spacing.</div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
`;

// Message only (no title)
export const MessageOnly = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--success">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__message">File uploaded successfully.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--error ivds-notification--dismissible">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__message">Unable to save changes. Please try again.</div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
`;

// All variants showcase
export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--success">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Success</div>
        <div class="ivds-notification__message">Operation completed successfully.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--warning">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Warning</div>
        <div class="ivds-notification__message">Please review before proceeding.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--error">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12 2C6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Error</div>
        <div class="ivds-notification__message">Something went wrong.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--info">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Information</div>
        <div class="ivds-notification__message">Here's some helpful information.</div>
      </div>
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--success" role="alert" aria-live="polite">
      <div class="ivds-notification__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Success</div>
        <div class="ivds-notification__message">This notification uses proper ARIA attributes for screen readers.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--error ivds-notification--dismissible" role="alert" aria-live="assertive">
      <div class="ivds-notification__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Critical Error</div>
        <div class="ivds-notification__message">This error notification uses aria-live="assertive" for immediate attention.</div>
      </div>
      <button class="ivds-notification__dismiss" aria-label="Dismiss critical error notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
`;

// Animation examples (for demonstration)
export const AnimationExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-notification ivds-notification--info ivds-notification--fade-in">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Fade In Animation</div>
        <div class="ivds-notification__message">This notification fades in with a subtle scale effect.</div>
      </div>
    </div>
    
    <div class="ivds-notification ivds-notification--success ivds-notification--slide-in">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Slide In Animation</div>
        <div class="ivds-notification__message">This notification slides in from the right side.</div>
      </div>
    </div>
  </div>
`;