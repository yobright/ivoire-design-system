// Radio Button component stories for Storybook
// Showcases all radio button variants, sizes, states, and features

export default {
  title: 'Core/Radio Button',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only radio button component using IVDS design tokens. Provides multiple variants, sizes, states, and features for form selections where only one option can be chosen.'
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
            id: 'label-title-only',
            enabled: true
          }
        ]
      }
    }
  }
};

// Basic radio button
export const Default = () => `
  <label class="ivds-radio-button">
    <input type="radio" class="ivds-radio-button__input" name="default-example" />
    <div class="ivds-radio-button__circle"></div>
    <span class="ivds-radio-button__label">Default Radio Button</span>
  </label>
`;

// Radio button with description
export const WithDescription = () => `
  <label class="ivds-radio-button">
    <input type="radio" class="ivds-radio-button__input" name="description-example" />
    <div class="ivds-radio-button__circle"></div>
    <div>
      <span class="ivds-radio-button__label">Premium Shipping</span>
      <div class="ivds-radio-button__description">
        Delivery within 1-2 business days. Additional charges may apply.
      </div>
    </div>
  </label>
`;

// Radio button sizes
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-radio-button ivds-radio-button--small">
      <input type="radio" class="ivds-radio-button__input" name="size-example" />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Small Radio Button</span>
    </label>
    
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="size-example" />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Default Radio Button</span>
    </label>
    
    <label class="ivds-radio-button ivds-radio-button--large">
      <input type="radio" class="ivds-radio-button__input" name="size-example" checked />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Large Radio Button</span>
    </label>
  </div>
`;

// Radio button states
export const States = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="state-example" />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Unselected</span>
    </label>
    
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="state-example" checked />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Selected</span>
    </label>
  </div>
`;

// Disabled states
export const DisabledStates = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-radio-button ivds-radio-button--disabled">
      <input type="radio" class="ivds-radio-button__input" name="disabled-example" disabled />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Disabled Unselected</span>
    </label>
    
    <label class="ivds-radio-button ivds-radio-button--disabled">
      <input type="radio" class="ivds-radio-button__input" name="disabled-example" checked disabled />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Disabled Selected</span>
    </label>
  </div>
`;

// Validation states
export const ValidationStates = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-radio-button ivds-radio-button--error">
      <input type="radio" class="ivds-radio-button__input" name="validation-example" />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Error State</span>
    </label>
    
    <label class="ivds-radio-button ivds-radio-button--success">
      <input type="radio" class="ivds-radio-button__input" name="validation-example" checked />
      <div class="ivds-radio-button__circle"></div>
      <span class="ivds-radio-button__label">Success State</span>
    </label>
  </div>
`;

// Radio button groups
export const RadioButtonGroups = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div class="ivds-radio-button-group">
      <div class="ivds-radio-button-group__label">
        Preferred Contact Method
      </div>
      <div class="ivds-radio-button-group__description">
        Choose how you'd like us to contact you.
      </div>
      
      <label class="ivds-radio-button">
        <input type="radio" class="ivds-radio-button__input" name="contact-method" value="email" />
        <div class="ivds-radio-button__circle"></div>
        <span class="ivds-radio-button__label">Email</span>
      </label>
      
      <label class="ivds-radio-button">
        <input type="radio" class="ivds-radio-button__input" name="contact-method" value="phone" />
        <div class="ivds-radio-button__circle"></div>
        <span class="ivds-radio-button__label">Phone</span>
      </label>
      
      <label class="ivds-radio-button">
        <input type="radio" class="ivds-radio-button__input" name="contact-method" value="sms" />
        <div class="ivds-radio-button__circle"></div>
        <span class="ivds-radio-button__label">SMS</span>
      </label>
    </div>
    
    <div class="ivds-radio-button-group ivds-radio-button-group--horizontal">
      <div class="ivds-radio-button-group__label ivds-radio-button-group__label--required">
        Account Type
      </div>
      
      <label class="ivds-radio-button">
        <input type="radio" class="ivds-radio-button__input" name="account-type" value="personal" required />
        <div class="ivds-radio-button__circle"></div>
        <span class="ivds-radio-button__label">Personal</span>
      </label>
      
      <label class="ivds-radio-button">
        <input type="radio" class="ivds-radio-button__input" name="account-type" value="business" />
        <div class="ivds-radio-button__circle"></div>
        <span class="ivds-radio-button__label">Business</span>
      </label>
    </div>
  </div>
`;

// Card variant
export const CardVariant = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="plan-selection" value="premium" />
      <div class="ivds-radio-button__circle"></div>
      <div class="ivds-radio-button--card">
        <div class="ivds-radio-button__label" style="font-weight: 500; margin-bottom: 0.25rem;">
          Premium Plan - $29/month
        </div>
        <div class="ivds-radio-button__description" style="margin-left: 0;">
          Access to all features, priority support, and advanced analytics.
        </div>
      </div>
    </label>
    
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="plan-selection" value="basic" />
      <div class="ivds-radio-button__circle"></div>
      <div class="ivds-radio-button--card">
        <div class="ivds-radio-button__label" style="font-weight: 500; margin-bottom: 0.25rem;">
          Basic Plan - $9/month
        </div>
        <div class="ivds-radio-button__description" style="margin-left: 0;">
          Essential features for getting started.
        </div>
      </div>
    </label>
    
    <label class="ivds-radio-button">
      <input type="radio" class="ivds-radio-button__input" name="plan-selection" value="free" checked />
      <div class="ivds-radio-button__circle"></div>
      <div class="ivds-radio-button--card">
        <div class="ivds-radio-button__label" style="font-weight: 500; margin-bottom: 0.25rem;">
          Free Plan - $0/month
        </div>
        <div class="ivds-radio-button__description" style="margin-left: 0;">
          Limited features with basic functionality.
        </div>
      </div>
    </label>
  </div>
`;

// Radio button group with error
export const GroupWithError = () => `
  <div class="ivds-radio-button-group">
    <div class="ivds-radio-button-group__label ivds-radio-button-group__label--required">
      Shipping Method
    </div>
    <div class="ivds-radio-button-group__description">
      Please select a shipping method to continue.
    </div>
    
    <label class="ivds-radio-button ivds-radio-button--error">
      <input type="radio" class="ivds-radio-button__input" name="shipping-method" value="standard" />
      <div class="ivds-radio-button__circle"></div>
      <div>
        <span class="ivds-radio-button__label">Standard Shipping</span>
        <div class="ivds-radio-button__description">
          5-7 business days - Free
        </div>
      </div>
    </label>
    
    <label class="ivds-radio-button ivds-radio-button--error">
      <input type="radio" class="ivds-radio-button__input" name="shipping-method" value="express" />
      <div class="ivds-radio-button__circle"></div>
      <div>
        <span class="ivds-radio-button__label">Express Shipping</span>
        <div class="ivds-radio-button__description">
          2-3 business days - $9.99
        </div>
      </div>
    </label>
    
    <label class="ivds-radio-button ivds-radio-button--error">
      <input type="radio" class="ivds-radio-button__input" name="shipping-method" value="overnight" />
      <div class="ivds-radio-button__circle"></div>
      <div>
        <span class="ivds-radio-button__label">Overnight Shipping</span>
        <div class="ivds-radio-button__description">
          Next business day - $24.99
        </div>
      </div>
    </label>
    
    <div class="ivds-radio-button-group__error">
      Please select a shipping method.
    </div>
  </div>
`;

// Legacy radio component (for backward compatibility)
export const LegacyRadio = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="font-weight: 500; margin-bottom: 0.5rem;">Legacy Radio Component:</div>
    
    <label class="ivds-radio">
      <input type="radio" class="ivds-radio__input" name="legacy-example" />
      <div class="ivds-radio__button"></div>
      <span class="ivds-radio__label">Option 1</span>
    </label>
    
    <label class="ivds-radio">
      <input type="radio" class="ivds-radio__input" name="legacy-example" checked />
      <div class="ivds-radio__button"></div>
      <span class="ivds-radio__label">Option 2 (Selected)</span>
    </label>
    
    <label class="ivds-radio">
      <input type="radio" class="ivds-radio__input" name="legacy-example" disabled />
      <div class="ivds-radio__button"></div>
      <span class="ivds-radio__label">Option 3 (Disabled)</span>
    </label>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
    <fieldset class="ivds-radio-button-group" style="border: none; padding: 0; margin: 0;">
      <legend class="ivds-radio-button-group__label">
        Notification Preferences
      </legend>
      <div class="ivds-radio-button-group__description">
        Choose how often you'd like to receive notifications.
      </div>
      
      <label class="ivds-radio-button">
        <input 
          type="radio" 
          class="ivds-radio-button__input" 
          name="notifications"
          value="immediate"
          id="immediate-notifications"
          aria-describedby="immediate-description"
        />
        <div class="ivds-radio-button__circle"></div>
        <div>
          <span class="ivds-radio-button__label">Immediate</span>
          <div id="immediate-description" class="ivds-radio-button__description">
            Receive notifications as soon as events occur.
          </div>
        </div>
      </label>
      
      <label class="ivds-radio-button">
        <input 
          type="radio" 
          class="ivds-radio-button__input" 
          name="notifications"
          value="daily"
          id="daily-notifications"
          aria-describedby="daily-description"
        />
        <div class="ivds-radio-button__circle"></div>
        <div>
          <span class="ivds-radio-button__label">Daily Summary</span>
          <div id="daily-description" class="ivds-radio-button__description">
            Receive a daily digest of all notifications.
          </div>
        </div>
      </label>
      
      <label class="ivds-radio-button">
        <input 
          type="radio" 
          class="ivds-radio-button__input" 
          name="notifications"
          value="weekly"
          id="weekly-notifications"
          aria-describedby="weekly-description"
          checked
        />
        <div class="ivds-radio-button__circle"></div>
        <div>
          <span class="ivds-radio-button__label">Weekly Summary</span>
          <div id="weekly-description" class="ivds-radio-button__description">
            Receive a weekly digest of all notifications.
          </div>
        </div>
      </label>
      
      <label class="ivds-radio-button">
        <input 
          type="radio" 
          class="ivds-radio-button__input" 
          name="notifications"
          value="none"
          id="no-notifications"
          aria-describedby="none-description"
        />
        <div class="ivds-radio-button__circle"></div>
        <div>
          <span class="ivds-radio-button__label">No Notifications</span>
          <div id="none-description" class="ivds-radio-button__description">
            Turn off all notifications.
          </div>
        </div>
      </label>
    </fieldset>
  </div>
`;