// IVDS Core Overview - Complete Design System Showcase
// Demonstrates all available components and their usage

export default {
  title: 'Core/Overview',
  parameters: {
    docs: {
      description: {
        component: 'Complete overview of the IVDS Core design system components. This showcase demonstrates all available components, their variants, and how they work together to create cohesive user interfaces.'
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
            id: 'button-name',
            enabled: true
          },
          {
            id: 'label',
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

// Complete component showcase
export const AllComponents = () => `
  <div style="display: flex; flex-direction: column; gap: 3rem; max-width: 1200px; margin: 0 auto; padding: 2rem;">
    
    <!-- Header Section -->
    <section>
      <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 600;">Form Components</h2>
      
      <!-- Buttons -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button class="ivds-button ivds-button--primary">Primary</button>
          <button class="ivds-button ivds-button--secondary">Secondary</button>
          <button class="ivds-button ivds-button--tertiary">Tertiary</button>
          <button class="ivds-button ivds-button--success">Success</button>
          <button class="ivds-button ivds-button--warning">Warning</button>
          <button class="ivds-button ivds-button--danger">Danger</button>
        </div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="ivds-button ivds-button--primary ivds-button--small">Small</button>
          <button class="ivds-button ivds-button--primary">Default</button>
          <button class="ivds-button ivds-button--primary ivds-button--large">Large</button>
        </div>
      </div>    
  
      <!-- Text Inputs -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Text Inputs</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label" for="overview-name">Full Name</label>
            <input type="text" id="overview-name" class="ivds-text-input" placeholder="Enter your name" />
          </div>
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label" for="overview-email">Email Address</label>
            <input type="email" id="overview-email" class="ivds-text-input" placeholder="you@example.com" />
            <div class="ivds-text-input__helper">We'll never share your email.</div>
          </div>
        </div>
      </div>
      
      <!-- Checkboxes and Radio Buttons -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Selection Controls</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div>
            <h4 style="margin-bottom: 0.5rem; font-weight: 500;">Checkboxes</h4>
            <label class="ivds-checkbox">
              <input type="checkbox" class="ivds-checkbox__input" />
              <div class="ivds-checkbox__box"></div>
              <span class="ivds-checkbox__label">Email notifications</span>
            </label>
            <label class="ivds-checkbox">
              <input type="checkbox" class="ivds-checkbox__input" checked />
              <div class="ivds-checkbox__box"></div>
              <span class="ivds-checkbox__label">SMS notifications</span>
            </label>
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem; font-weight: 500;">Radio Buttons</h4>
            <label class="ivds-radio-button">
              <input type="radio" class="ivds-radio-button__input" name="overview-plan" value="basic" />
              <div class="ivds-radio-button__circle"></div>
              <span class="ivds-radio-button__label">Basic Plan</span>
            </label>
            <label class="ivds-radio-button">
              <input type="radio" class="ivds-radio-button__input" name="overview-plan" value="premium" checked />
              <div class="ivds-radio-button__circle"></div>
              <span class="ivds-radio-button__label">Premium Plan</span>
            </label>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Content Components -->
    <section>
      <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 600;">Content Components</h2>
      
      <!-- Cards -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Cards</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <div class="ivds-card">
            <div class="ivds-card__header">
              <h4 class="ivds-card__title">Default Card</h4>
              <p class="ivds-card__subtitle">Card subtitle</p>
            </div>
            <div class="ivds-card__body">
              <p class="ivds-card__content">This is a default card with header, body, and actions.</p>
              <div class="ivds-card__actions">
                <button class="ivds-button ivds-button--primary ivds-button--small">Action</button>
              </div>
            </div>
          </div>
          
          <div class="ivds-card ivds-card--elevated">
            <div class="ivds-card__header">
              <h4 class="ivds-card__title">Elevated Card</h4>
            </div>
            <div class="ivds-card__body">
              <p class="ivds-card__content">This card has elevated styling with more prominent shadow.</p>
            </div>
          </div>
        </div>
      </div>      
   
   <!-- Notifications -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Notifications</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="ivds-notification ivds-notification--success">
            <div class="ivds-notification__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="ivds-notification__content">
              <div class="ivds-notification__title">Success</div>
              <div class="ivds-notification__message">Your changes have been saved successfully.</div>
            </div>
          </div>
          
          <div class="ivds-notification ivds-notification--warning ivds-notification--dismissible">
            <div class="ivds-notification__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="ivds-notification__content">
              <div class="ivds-notification__title">Warning</div>
              <div class="ivds-notification__message">Please review your input before proceeding.</div>
            </div>
            <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Tags -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 500;">Tags</h3>
        <div class="ivds-tag-group">
          <span class="ivds-tag ivds-tag--primary">
            <span class="ivds-tag__text">React</span>
          </span>
          <span class="ivds-tag ivds-tag--success">
            <span class="ivds-tag__text">JavaScript</span>
          </span>
          <span class="ivds-tag ivds-tag--info">
            <span class="ivds-tag__text">TypeScript</span>
          </span>
          <span class="ivds-tag ivds-tag--warning ivds-tag--removable">
            <span class="ivds-tag__text">CSS</span>
            <button class="ivds-tag__remove" aria-label="Remove CSS tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </section>
    
    <!-- Usage Guidelines -->
    <section>
      <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 600;">Usage Guidelines</h2>
      <div class="ivds-card">
        <div class="ivds-card__body">
          <h3 class="ivds-card__title">Getting Started</h3>
          <p class="ivds-card__content" style="margin-bottom: 1rem;">
            IVDS Core provides CSS-only components that can be used in any web project. Simply include the CSS files and apply the appropriate classes to your HTML elements.
          </p>
          <h4 style="font-weight: 500; margin-bottom: 0.5rem;">Installation:</h4>
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.375rem; overflow-x: auto; margin-bottom: 1rem;"><code>npm install @ivds/core</code></pre>
          <h4 style="font-weight: 500; margin-bottom: 0.5rem;">Usage:</h4>
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.375rem; overflow-x: auto;"><code>@import '@ivds/core/all.css';</code></pre>
        </div>
      </div>
    </section>
  </div>
`;

// Form example showcasing multiple components working together
export const FormExample = () => `
  <div style="max-width: 600px; margin: 0 auto; padding: 2rem;">
    <div class="ivds-card">
      <div class="ivds-card__header">
        <h2 class="ivds-card__title">User Registration</h2>
        <p class="ivds-card__subtitle">Create your account to get started</p>
      </div>
      <div class="ivds-card__body">
        <form style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- Personal Information -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="ivds-text-input-wrapper">
              <label class="ivds-text-input__label ivds-text-input__label--required" for="form-first-name">
                First Name
              </label>
              <input 
                type="text" 
                id="form-first-name"
                class="ivds-text-input" 
                placeholder="John"
                required
              />
            </div>
            <div class="ivds-text-input-wrapper">
              <label class="ivds-text-input__label ivds-text-input__label--required" for="form-last-name">
                Last Name
              </label>
              <input 
                type="text" 
                id="form-last-name"
                class="ivds-text-input" 
                placeholder="Doe"
                required
              />
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label ivds-text-input__label--required" for="form-email">
              Email Address
            </label>
            <input 
              type="email" 
              id="form-email"
              class="ivds-text-input" 
              placeholder="john.doe@example.com"
              required
            />
            <div class="ivds-text-input__helper">
              We'll use this email for account verification and important updates.
            </div>
          </div>
          
          <!-- Account Type -->
          <div class="ivds-radio-button-group">
            <div class="ivds-radio-button-group__label ivds-radio-button-group__label--required">
              Account Type
            </div>
            <label class="ivds-radio-button">
              <input type="radio" class="ivds-radio-button__input" name="account-type" value="personal" checked />
              <div class="ivds-radio-button__circle"></div>
              <div>
                <span class="ivds-radio-button__label">Personal</span>
                <div class="ivds-radio-button__description">For individual use</div>
              </div>
            </label>
            <label class="ivds-radio-button">
              <input type="radio" class="ivds-radio-button__input" name="account-type" value="business" />
              <div class="ivds-radio-button__circle"></div>
              <div>
                <span class="ivds-radio-button__label">Business</span>
                <div class="ivds-radio-button__description">For teams and organizations</div>
              </div>
            </label>
          </div>
          
          <!-- Preferences -->
          <div class="ivds-checkbox-group">
            <div class="ivds-checkbox-group__label">
              Communication Preferences
            </div>
            <label class="ivds-checkbox">
              <input type="checkbox" class="ivds-checkbox__input" />
              <div class="ivds-checkbox__box"></div>
              <span class="ivds-checkbox__label">Email newsletters</span>
            </label>
            <label class="ivds-checkbox">
              <input type="checkbox" class="ivds-checkbox__input" />
              <div class="ivds-checkbox__box"></div>
              <span class="ivds-checkbox__label">Product updates</span>
            </label>
            <label class="ivds-checkbox">
              <input type="checkbox" class="ivds-checkbox__input" required />
              <div class="ivds-checkbox__box"></div>
              <span class="ivds-checkbox__label">I agree to the Terms of Service</span>
            </label>
          </div>
          
          <!-- Actions -->
          <div class="ivds-card__actions">
            <button type="submit" class="ivds-button ivds-button--primary">
              Create Account
            </button>
            <button type="button" class="ivds-button ivds-button--secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Success notification (hidden by default) -->
    <div class="ivds-notification ivds-notification--success" style="margin-top: 1rem; display: none;">
      <div class="ivds-notification__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="ivds-notification__content">
        <div class="ivds-notification__title">Account Created!</div>
        <div class="ivds-notification__message">Welcome to IVDS! Please check your email to verify your account.</div>
      </div>
    </div>
  </div>
`;

// Dashboard example showing complex layout
export const DashboardExample = () => `
  <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
    <!-- Header with tags -->
    <div style="margin-bottom: 2rem;">
      <h1 style="margin-bottom: 0.5rem; font-size: 2rem; font-weight: 700;">Project Dashboard</h1>
      <div class="ivds-tag-group">
        <span class="ivds-tag ivds-tag--success">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">Active</span>
        </span>
        <span class="ivds-tag ivds-tag--info">
          <span class="ivds-tag__text">Frontend</span>
        </span>
        <span class="ivds-tag ivds-tag--warning">
          <span class="ivds-tag__text">High Priority</span>
        </span>
      </div>
    </div>
    
    <!-- Notifications -->
    <div style="margin-bottom: 2rem;">
      <div class="ivds-notification ivds-notification--info ivds-notification--dismissible">
        <div class="ivds-notification__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="ivds-notification__content">
          <div class="ivds-notification__title">System Maintenance</div>
          <div class="ivds-notification__message">Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST.</div>
        </div>
        <button class="ivds-notification__dismiss" aria-label="Dismiss notification">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Dashboard Cards -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
      <div class="ivds-card">
        <div class="ivds-card__header">
          <h3 class="ivds-card__title">Project Statistics</h3>
        </div>
        <div class="ivds-card__body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center;">
            <div>
              <div style="font-size: 2rem; font-weight: 700; color: var(--color-semantic-success-600, #059669);">24</div>
              <div style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280);">Completed</div>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 700; color: var(--color-semantic-warning-600, #d97706);">8</div>
              <div style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280);">In Progress</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ivds-card ivds-card--elevated">
        <div class="ivds-card__header">
          <h3 class="ivds-card__title">Quick Actions</h3>
        </div>
        <div class="ivds-card__body">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="ivds-button ivds-button--primary ivds-button--small" style="width: 100%;">
              Create New Task
            </button>
            <button class="ivds-button ivds-button--secondary ivds-button--small" style="width: 100%;">
              Generate Report
            </button>
            <button class="ivds-button ivds-button--tertiary ivds-button--small" style="width: 100%;">
              View Analytics
            </button>
          </div>
        </div>
      </div>
      
      <div class="ivds-card">
        <div class="ivds-card__header">
          <h3 class="ivds-card__title">Team Members</h3>
        </div>
        <div class="ivds-card__body">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-brand-primary-500, #0ea5e9); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; font-size: 0.875rem;">JD</div>
              <div>
                <div style="font-weight: 500;">John Doe</div>
                <div style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280);">Frontend Developer</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-semantic-success-500, #10b981); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; font-size: 0.875rem;">JS</div>
              <div>
                <div style="font-weight: 500;">Jane Smith</div>
                <div style="font-size: 0.875rem; color: var(--color-semantic-neutral-600, #6b7280);">UI Designer</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ivds-card__footer">
          <button class="ivds-button ivds-button--tertiary ivds-button--small">View All Members</button>
        </div>
      </div>
    </div>
  </div>
`;