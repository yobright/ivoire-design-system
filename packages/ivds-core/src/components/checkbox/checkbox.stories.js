// Checkbox component stories for Storybook
// Showcases all checkbox variants, sizes, states, and features

export default {
  title: 'Core/Checkbox',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only checkbox component using IVDS design tokens. Provides multiple variants, sizes, states, and features for form selections.'
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

// Basic checkbox
export const Default = () => `
  <label class="ivds-checkbox">
    <input type="checkbox" class="ivds-checkbox__input" />
    <div class="ivds-checkbox__box"></div>
    <span class="ivds-checkbox__label">Default Checkbox</span>
  </label>
`;

// Checkbox with description
export const WithDescription = () => `
  <label class="ivds-checkbox">
    <input type="checkbox" class="ivds-checkbox__input" />
    <div class="ivds-checkbox__box"></div>
    <div>
      <span class="ivds-checkbox__label">Email Notifications</span>
      <div class="ivds-checkbox__description">
        Receive email updates about your account activity and important announcements.
      </div>
    </div>
  </label>
`;

// Checkbox sizes
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-checkbox ivds-checkbox--small">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Small Checkbox</span>
    </label>
    
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Default Checkbox</span>
    </label>
    
    <label class="ivds-checkbox ivds-checkbox--large">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Large Checkbox</span>
    </label>
  </div>
`;

// Checkbox states
export const States = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Unchecked</span>
    </label>
    
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" checked />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Checked</span>
    </label>
    
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Indeterminate</span>
    </label>
    
    <script>
      // Set indeterminate state for demo
      document.addEventListener('DOMContentLoaded', function() {
        const indeterminateCheckbox = document.querySelectorAll('.ivds-checkbox__input')[2];
        if (indeterminateCheckbox) {
          indeterminateCheckbox.indeterminate = true;
        }
      });
    </script>
  </div>
`;

// Disabled states
export const DisabledStates = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-checkbox ivds-checkbox--disabled">
      <input type="checkbox" class="ivds-checkbox__input" disabled />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Disabled Unchecked</span>
    </label>
    
    <label class="ivds-checkbox ivds-checkbox--disabled">
      <input type="checkbox" class="ivds-checkbox__input" checked disabled />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Disabled Checked</span>
    </label>
  </div>
`;

// Validation states
export const ValidationStates = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <label class="ivds-checkbox ivds-checkbox--error">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Error State</span>
    </label>
    
    <label class="ivds-checkbox ivds-checkbox--success">
      <input type="checkbox" class="ivds-checkbox__input" checked />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Success State</span>
    </label>
  </div>
`;

// Checkbox groups
export const CheckboxGroups = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div class="ivds-checkbox-group">
      <div class="ivds-checkbox-group__label">
        Preferred Contact Methods
      </div>
      <div class="ivds-checkbox-group__description">
        Select all the ways you'd like us to contact you.
      </div>
      
      <label class="ivds-checkbox">
        <input type="checkbox" class="ivds-checkbox__input" name="contact" value="email" />
        <div class="ivds-checkbox__box"></div>
        <span class="ivds-checkbox__label">Email</span>
      </label>
      
      <label class="ivds-checkbox">
        <input type="checkbox" class="ivds-checkbox__input" name="contact" value="phone" />
        <div class="ivds-checkbox__box"></div>
        <span class="ivds-checkbox__label">Phone</span>
      </label>
      
      <label class="ivds-checkbox">
        <input type="checkbox" class="ivds-checkbox__input" name="contact" value="sms" />
        <div class="ivds-checkbox__box"></div>
        <span class="ivds-checkbox__label">SMS</span>
      </label>
    </div>
    
    <div class="ivds-checkbox-group ivds-checkbox-group--horizontal">
      <div class="ivds-checkbox-group__label ivds-checkbox-group__label--required">
        Terms and Conditions
      </div>
      
      <label class="ivds-checkbox">
        <input type="checkbox" class="ivds-checkbox__input" required />
        <div class="ivds-checkbox__box"></div>
        <span class="ivds-checkbox__label">I agree to the Terms of Service</span>
      </label>
      
      <label class="ivds-checkbox">
        <input type="checkbox" class="ivds-checkbox__input" />
        <div class="ivds-checkbox__box"></div>
        <span class="ivds-checkbox__label">I agree to receive marketing emails</span>
      </label>
    </div>
  </div>
`;

// Card variant
export const CardVariant = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <div class="ivds-checkbox--card">
        <div class="ivds-checkbox__label" style="font-weight: 500; margin-bottom: 0.25rem;">
          Premium Plan
        </div>
        <div class="ivds-checkbox__description" style="margin-left: 0;">
          Access to all features, priority support, and advanced analytics.
        </div>
      </div>
    </label>
    
    <label class="ivds-checkbox">
      <input type="checkbox" class="ivds-checkbox__input" />
      <div class="ivds-checkbox__box"></div>
      <div class="ivds-checkbox--card">
        <div class="ivds-checkbox__label" style="font-weight: 500; margin-bottom: 0.25rem;">
          Basic Plan
        </div>
        <div class="ivds-checkbox__description" style="margin-left: 0;">
          Essential features for getting started.
        </div>
      </div>
    </label>
  </div>
`;



// Checkbox group with error
export const GroupWithError = () => `
  <div class="ivds-checkbox-group">
    <div class="ivds-checkbox-group__label ivds-checkbox-group__label--required">
      Required Selection
    </div>
    <div class="ivds-checkbox-group__description">
      Please select at least one option to continue.
    </div>
    
    <label class="ivds-checkbox ivds-checkbox--error">
      <input type="checkbox" class="ivds-checkbox__input" name="required-group" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Option 1</span>
    </label>
    
    <label class="ivds-checkbox ivds-checkbox--error">
      <input type="checkbox" class="ivds-checkbox__input" name="required-group" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Option 2</span>
    </label>
    
    <label class="ivds-checkbox ivds-checkbox--error">
      <input type="checkbox" class="ivds-checkbox__input" name="required-group" />
      <div class="ivds-checkbox__box"></div>
      <span class="ivds-checkbox__label">Option 3</span>
    </label>
    
    <div class="ivds-checkbox-group__error">
      Please select at least one option.
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
    <div class="ivds-checkbox-group" role="group" aria-labelledby="preferences-label">
      <div id="preferences-label" class="ivds-checkbox-group__label">
        Privacy Preferences
      </div>
      <div class="ivds-checkbox-group__description">
        Choose your privacy settings. You can change these at any time.
      </div>
      
      <label class="ivds-checkbox">
        <input 
          type="checkbox" 
          class="ivds-checkbox__input" 
          id="analytics-checkbox"
          aria-describedby="analytics-description"
        />
        <div class="ivds-checkbox__box"></div>
        <div>
          <span class="ivds-checkbox__label">Allow Analytics</span>
          <div id="analytics-description" class="ivds-checkbox__description">
            Help us improve our service by sharing anonymous usage data.
          </div>
        </div>
      </label>
      
      <label class="ivds-checkbox">
        <input 
          type="checkbox" 
          class="ivds-checkbox__input" 
          id="marketing-checkbox"
          aria-describedby="marketing-description"
        />
        <div class="ivds-checkbox__box"></div>
        <div>
          <span class="ivds-checkbox__label">Marketing Communications</span>
          <div id="marketing-description" class="ivds-checkbox__description">
            Receive updates about new features and special offers.
          </div>
        </div>
      </label>
    </div>
  </div>
`;
