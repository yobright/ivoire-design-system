// IVDS Core Accessibility Features
// Comprehensive showcase of accessibility features across all components

export default {
  title: 'Core/Accessibility',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive accessibility showcase demonstrating WCAG compliance, proper ARIA usage, keyboard navigation, and color contrast validation across all IVDS Core components.'
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
          },
          {
            id: 'aria-required-attr',
            enabled: true
          },
          {
            id: 'button-name',
            enabled: true
          },
          {
            id: 'form-field-multiple-labels',
            enabled: true
          },
          {
            id: 'label',
            enabled: true
          },
          {
            id: 'keyboard-navigation',
            enabled: true
          }
        ]
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa']
        }
      }
    }
  }
};

// Comprehensive accessibility demonstration
export const AccessibilityShowcase = () => `
  <div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h1 style="margin-bottom: 2rem; font-size: 2rem; font-weight: 700;">IVDS Core Accessibility Features</h1>
    
    <!-- Keyboard Navigation -->
    <section style="margin-bottom: 3rem;">
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">Keyboard Navigation</h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-semantic-neutral-700, #374151);">
        All interactive elements support keyboard navigation with proper focus management and visual indicators.
      </p>
      
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <button class="ivds-button ivds-button--primary">Tab to me (1)</button>
        <button class="ivds-button ivds-button--secondary">Then to me (2)</button>
        <button class="ivds-button ivds-button--tertiary">Finally here (3)</button>
      </div>
      
      <div class="ivds-card">
        <div class="ivds-card__body">
          <p style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280);">
            <strong>Try this:</strong> Use Tab to navigate between buttons, Enter/Space to activate them, and Shift+Tab to go backwards.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Form Accessibility -->
    <section style="margin-bottom: 3rem;">
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">Form Accessibility</h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-semantic-neutral-700, #374151);">
        Forms include proper labeling, error handling, and assistive technology support.
      </p>
      
      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label ivds-text-input__label--required" for="a11y-name">
            Full Name
          </label>
          <input 
            type="text" 
            id="a11y-name"
            class="ivds-text-input" 
            placeholder="Enter your full name"
            aria-describedby="name-help"
            aria-required="true"
            required
          />
          <div id="name-help" class="ivds-text-input__helper">
            Enter your first and last name as they appear on official documents.
          </div>
        </div>
        
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label" for="a11y-email-error">
            Email Address
          </label>
          <input 
            type="email" 
            id="a11y-email-error"
            class="ivds-text-input ivds-text-input--error" 
            value="invalid-email"
            aria-describedby="email-error"
            aria-invalid="true"
          />
          <div id="email-error" class="ivds-text-input__error" role="alert">
            Please enter a valid email address.
          </div>
        </div>
        
        <fieldset class="ivds-radio-button-group" style="border: none; padding: 0; margin: 0;">
          <legend class="ivds-radio-button-group__label">
            Preferred Contact Method
          </legend>
          <div class="ivds-radio-button-group__description">
            Choose how you'd like us to contact you.
          </div>
          
          <label class="ivds-radio-button">
            <input 
              type="radio" 
              class="ivds-radio-button__input" 
              name="a11y-contact"
              value="email"
              id="contact-email"
              aria-describedby="contact-email-desc"
            />
            <div class="ivds-radio-button__circle"></div>
            <div>
              <span class="ivds-radio-button__label">Email</span>
              <div id="contact-email-desc" class="ivds-radio-button__description">
                Receive updates via email notifications.
              </div>
            </div>
          </label>
          
          <label class="ivds-radio-button">
            <input 
              type="radio" 
              class="ivds-radio-button__input" 
              name="a11y-contact"
              value="phone"
              id="contact-phone"
              aria-describedby="contact-phone-desc"
              checked
            />
            <div class="ivds-radio-button__circle"></div>
            <div>
              <span class="ivds-radio-button__label">Phone</span>
              <div id="contact-phone-desc" class="ivds-radio-button__description">
                Receive updates via phone calls.
              </div>
            </div>
          </label>
        </fieldset>
        
        <div class="ivds-checkbox-group" role="group" aria-labelledby="preferences-legend">
          <div id="preferences-legend" class="ivds-checkbox-group__label">
            Communication Preferences
          </div>
          
          <label class="ivds-checkbox">
            <input 
              type="checkbox" 
              class="ivds-checkbox__input" 
              id="newsletter-checkbox"
              aria-describedby="newsletter-desc"
            />
            <div class="ivds-checkbox__box"></div>
            <div>
              <span class="ivds-checkbox__label">Newsletter Subscription</span>
              <div id="newsletter-desc" class="ivds-checkbox__description">
                Receive our monthly newsletter with updates and tips.
              </div>
            </div>
          </label>
          
          <label class="ivds-checkbox">
            <input 
              type="checkbox" 
              class="ivds-checkbox__input" 
              id="terms-checkbox"
              aria-describedby="terms-desc"
              required
            />
            <div class="ivds-checkbox__box"></div>
            <div>
              <span class="ivds-checkbox__label">Terms and Conditions</span>
              <div id="terms-desc" class="ivds-checkbox__description">
                I agree to the terms of service and privacy policy.
              </div>
            </div>
          </label>
        </div>
      </form>
    </section>    
    <
!-- ARIA and Screen Reader Support -->
    <section style="margin-bottom: 3rem;">
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">ARIA and Screen Reader Support</h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-semantic-neutral-700, #374151);">
        Components include proper ARIA attributes, roles, and live regions for screen reader compatibility.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="ivds-notification ivds-notification--success" role="alert" aria-live="polite">
          <div class="ivds-notification__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="ivds-notification__content">
            <div class="ivds-notification__title">Success Notification</div>
            <div class="ivds-notification__message">This notification uses role="alert" and aria-live="polite" for screen readers.</div>
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
            <div class="ivds-notification__message">This error uses aria-live="assertive" for immediate attention.</div>
          </div>
          <button class="ivds-notification__dismiss" aria-label="Dismiss critical error notification">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Interactive Elements -->
    <section style="margin-bottom: 3rem;">
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">Interactive Elements</h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-semantic-neutral-700, #374151);">
        All interactive elements provide clear focus indicators and appropriate labels.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 0.5rem; font-weight: 500;">Buttons with Descriptive Labels</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="ivds-button ivds-button--primary" aria-describedby="save-help">
              Save Changes
            </button>
            <button class="ivds-button ivds-button--danger" aria-label="Delete user account permanently">
              <span class="ivds-button__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6H19ZM10 11V17M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="ivds-button__text">Delete</span>
            </button>
          </div>
          <p id="save-help" style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280); margin-top: 0.5rem;">
            This will save all your changes and redirect you to the dashboard.
          </p>
        </div>
        
        <div>
          <h3 style="margin-bottom: 0.5rem; font-weight: 500;">Tags with Proper Roles</h3>
          <div class="ivds-tag-group" role="list">
            <span class="ivds-tag ivds-tag--primary ivds-tag--removable" role="listitem">
              <span class="ivds-tag__text">React</span>
              <button class="ivds-tag__remove" aria-label="Remove React tag from list">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </span>
            
            <a href="#" class="ivds-tag ivds-tag--success ivds-tag--link" role="listitem" aria-describedby="tag-help">
              <span class="ivds-tag__text">JavaScript</span>
            </a>
            
            <span class="ivds-tag ivds-tag--info" role="listitem" title="This tag provides additional context">
              <span class="ivds-tag__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="ivds-tag__text">TypeScript</span>
            </span>
          </div>
          <p id="tag-help" style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280); margin-top: 0.5rem;">
            Tags can be interactive elements with proper ARIA labels and keyboard navigation support.
          </p>
        </div>
        
        <div>
          <h3 style="margin-bottom: 0.5rem; font-weight: 500;">Interactive Cards</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <article class="ivds-card" role="article" aria-labelledby="article-title">
              <header class="ivds-card__header">
                <h4 id="article-title" class="ivds-card__title">Accessible Article</h4>
                <p class="ivds-card__subtitle">Published March 15, 2024</p>
              </header>
              <div class="ivds-card__body">
                <p class="ivds-card__content">
                  This card uses proper semantic HTML with article and header elements.
                </p>
                <div class="ivds-card__actions">
                  <a href="#" class="ivds-button ivds-button--primary ivds-button--small" aria-describedby="article-title">
                    Read Article
                  </a>
                </div>
              </div>
            </article>
            
            <div class="ivds-card ivds-card--interactive" tabindex="0" role="button" aria-label="Interactive card with keyboard support" aria-describedby="card-content">
              <div class="ivds-card__header">
                <h4 class="ivds-card__title">Interactive Card</h4>
              </div>
              <div class="ivds-card__body">
                <p id="card-content" class="ivds-card__content">
                  This card is keyboard accessible with proper focus management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Color Contrast -->
    <section style="margin-bottom: 3rem;">
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">Color Contrast Compliance</h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-semantic-neutral-700, #374151);">
        All color combinations meet WCAG AA standards for color contrast ratios.
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="ivds-card">
          <div class="ivds-card__body" style="text-align: center;">
            <h4 style="margin-bottom: 0.5rem;">Primary Colors</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <button class="ivds-button ivds-button--primary ivds-button--small">Primary Button</button>
              <span class="ivds-tag ivds-tag--primary">Primary Tag</span>
            </div>
          </div>
        </div>
        
        <div class="ivds-card">
          <div class="ivds-card__body" style="text-align: center;">
            <h4 style="margin-bottom: 0.5rem;">Success Colors</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <button class="ivds-button ivds-button--success ivds-button--small">Success Button</button>
              <span class="ivds-tag ivds-tag--success">Success Tag</span>
            </div>
          </div>
        </div>
        
        <div class="ivds-card">
          <div class="ivds-card__body" style="text-align: center;">
            <h4 style="margin-bottom: 0.5rem;">Warning Colors</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <button class="ivds-button ivds-button--warning ivds-button--small">Warning Button</button>
              <span class="ivds-tag ivds-tag--warning">Warning Tag</span>
            </div>
          </div>
        </div>
        
        <div class="ivds-card">
          <div class="ivds-card__body" style="text-align: center;">
            <h4 style="margin-bottom: 0.5rem;">Error Colors</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <button class="ivds-button ivds-button--danger ivds-button--small">Error Button</button>
              <span class="ivds-tag ivds-tag--error">Error Tag</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Best Practices -->
    <section>
      <h2 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600;">Accessibility Best Practices</h2>
      <div class="ivds-card">
        <div class="ivds-card__body">
          <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
            <li><strong>Keyboard Navigation:</strong> All interactive elements are keyboard accessible with visible focus indicators</li>
            <li><strong>Screen Readers:</strong> Proper ARIA labels, roles, and live regions provide context for assistive technologies</li>
            <li><strong>Color Contrast:</strong> All text and interactive elements meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)</li>
            <li><strong>Form Labels:</strong> All form inputs have associated labels and helpful descriptions</li>
            <li><strong>Error Handling:</strong> Error messages are announced to screen readers and clearly associated with form fields</li>
            <li><strong>Semantic HTML:</strong> Components use appropriate HTML elements and landmarks for better structure</li>
            <li><strong>Focus Management:</strong> Focus is properly managed in interactive components and modal dialogs</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
`;