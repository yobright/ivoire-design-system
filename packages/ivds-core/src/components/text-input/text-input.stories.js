// Text Input component stories for Storybook
// Showcases all text input variants, sizes, states, and features

export default {
  title: 'Core/Text Input',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only text input component using IVDS design tokens. Provides multiple variants, sizes, states, and features for form inputs.'
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

// Basic text input
export const Default = () => `
  <div class="ivds-text-input-wrapper">
    <label class="ivds-text-input__label" for="default-input">
      Default Input
    </label>
    <input 
      type="text" 
      id="default-input"
      class="ivds-text-input" 
      placeholder="Enter text here..."
    />
  </div>
`;

// Text input with helper text
export const WithHelperText = () => `
  <div class="ivds-text-input-wrapper">
    <label class="ivds-text-input__label" for="helper-input">
      Email Address
    </label>
    <input 
      type="email" 
      id="helper-input"
      class="ivds-text-input" 
      placeholder="you@example.com"
    />
    <div class="ivds-text-input__helper">
      We'll never share your email with anyone else.
    </div>
  </div>
`;

// Required field
export const Required = () => `
  <div class="ivds-text-input-wrapper">
    <label class="ivds-text-input__label ivds-text-input__label--required" for="required-input">
      Full Name
    </label>
    <input 
      type="text" 
      id="required-input"
      class="ivds-text-input" 
      placeholder="John Doe"
      required
    />
    <div class="ivds-text-input__helper">
      This field is required.
    </div>
  </div>
`;

// Input sizes
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="small-input">
        Small Input
      </label>
      <input 
        type="text" 
        id="small-input"
        class="ivds-text-input ivds-text-input--small" 
        placeholder="Small size"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="default-size-input">
        Default Input
      </label>
      <input 
        type="text" 
        id="default-size-input"
        class="ivds-text-input" 
        placeholder="Default size"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="large-input">
        Large Input
      </label>
      <input 
        type="text" 
        id="large-input"
        class="ivds-text-input ivds-text-input--large" 
        placeholder="Large size"
      />
    </div>
  </div>
`;

// Input states
export const States = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="error-input">
        Error State
      </label>
      <input 
        type="text" 
        id="error-input"
        class="ivds-text-input ivds-text-input--error" 
        placeholder="Invalid input"
        value="invalid@email"
      />
      <div class="ivds-text-input__error">
        Please enter a valid email address.
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="success-input">
        Success State
      </label>
      <input 
        type="text" 
        id="success-input"
        class="ivds-text-input ivds-text-input--success" 
        placeholder="Valid input"
        value="user@example.com"
      />
      <div class="ivds-text-input__helper" style="color: var(--color-semantic-success-600, #059669);">
        Email address is valid.
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="warning-input">
        Warning State
      </label>
      <input 
        type="text" 
        id="warning-input"
        class="ivds-text-input ivds-text-input--warning" 
        placeholder="Warning input"
        value="user@tempmail.com"
      />
      <div class="ivds-text-input__helper" style="color: var(--color-semantic-warning-600, #d97706);">
        This email domain might be temporary.
      </div>
    </div>
  </div>
`;

// Disabled and readonly states
export const DisabledAndReadonly = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="disabled-input">
        Disabled Input
      </label>
      <input 
        type="text" 
        id="disabled-input"
        class="ivds-text-input" 
        placeholder="This input is disabled"
        disabled
      />
      <div class="ivds-text-input__helper">
        This field is currently disabled.
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="readonly-input">
        Readonly Input
      </label>
      <input 
        type="text" 
        id="readonly-input"
        class="ivds-text-input" 
        value="This value cannot be changed"
        readonly
      />
      <div class="ivds-text-input__helper">
        This field is read-only.
      </div>
    </div>
  </div>
`;

// Input with icons
export const WithIcons = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper ivds-text-input-wrapper--icon-left">
      <label class="ivds-text-input__label" for="icon-left-input">
        Search
      </label>
      <div style="position: relative;">
        <input 
          type="text" 
          id="icon-left-input"
          class="ivds-text-input" 
          placeholder="Search for anything..."
        />
        <div class="ivds-text-input__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506M19 10.5A8.5 8.5 0 1 1 10.5 2A8.5 8.5 0 0 1 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper ivds-text-input-wrapper--icon-right">
      <label class="ivds-text-input__label" for="icon-right-input">
        Password
      </label>
      <div style="position: relative;">
        <input 
          type="password" 
          id="icon-right-input"
          class="ivds-text-input" 
          placeholder="Enter your password"
        />
        <div class="ivds-text-input__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12S7 5 12 5S22 12 22 12S17 19 12 19S2 12 2 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
`;

// Input variants
export const Variants = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="default-variant">
        Default Variant
      </label>
      <input 
        type="text" 
        id="default-variant"
        class="ivds-text-input" 
        placeholder="Default input style"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="filled-variant">
        Filled Variant
      </label>
      <input 
        type="text" 
        id="filled-variant"
        class="ivds-text-input ivds-text-input--filled" 
        placeholder="Filled input style"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="borderless-variant">
        Borderless Variant
      </label>
      <input 
        type="text" 
        id="borderless-variant"
        class="ivds-text-input ivds-text-input--borderless" 
        placeholder="Borderless input style"
      />
    </div>
  </div>
`;

// Textarea
export const Textarea = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="textarea-default">
        Message
      </label>
      <textarea 
        id="textarea-default"
        class="ivds-text-input ivds-text-input--textarea" 
        placeholder="Enter your message here..."
        rows="4"
      ></textarea>
      <div class="ivds-text-input__helper">
        Maximum 500 characters.
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="textarea-no-resize">
        Fixed Size Textarea
      </label>
      <textarea 
        id="textarea-no-resize"
        class="ivds-text-input ivds-text-input--textarea ivds-text-input--textarea--no-resize" 
        placeholder="This textarea cannot be resized..."
        rows="3"
      ></textarea>
    </div>
  </div>
`;

// Input groups with addons
export const InputGroups = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="url-input">
        Website URL
      </label>
      <div class="ivds-text-input-group">
        <div class="ivds-text-input__addon">https://</div>
        <input 
          type="text" 
          id="url-input"
          class="ivds-text-input" 
          placeholder="example.com"
        />
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="price-input">
        Price
      </label>
      <div class="ivds-text-input-group">
        <div class="ivds-text-input__addon">$</div>
        <input 
          type="number" 
          id="price-input"
          class="ivds-text-input" 
          placeholder="0.00"
        />
        <div class="ivds-text-input__addon">USD</div>
      </div>
    </div>
  </div>
`;

// Different input types
export const InputTypes = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="text-type">
        Text
      </label>
      <input 
        type="text" 
        id="text-type"
        class="ivds-text-input" 
        placeholder="Enter text"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="email-type">
        Email
      </label>
      <input 
        type="email" 
        id="email-type"
        class="ivds-text-input" 
        placeholder="you@example.com"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="password-type">
        Password
      </label>
      <input 
        type="password" 
        id="password-type"
        class="ivds-text-input" 
        placeholder="Enter password"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="number-type">
        Number
      </label>
      <input 
        type="number" 
        id="number-type"
        class="ivds-text-input" 
        placeholder="123"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="tel-type">
        Phone
      </label>
      <input 
        type="tel" 
        id="tel-type"
        class="ivds-text-input" 
        placeholder="+1 (555) 123-4567"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="url-type">
        URL
      </label>
      <input 
        type="url" 
        id="url-type"
        class="ivds-text-input" 
        placeholder="https://example.com"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="date-type">
        Date
      </label>
      <input 
        type="date" 
        id="date-type"
        class="ivds-text-input"
      />
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="time-type">
        Time
      </label>
      <input 
        type="time" 
        id="time-type"
        class="ivds-text-input"
      />
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label ivds-text-input__label--required" for="accessible-input">
        Full Name
      </label>
      <input 
        type="text" 
        id="accessible-input"
        class="ivds-text-input" 
        placeholder="John Doe"
        aria-describedby="name-help name-error"
        aria-required="true"
        aria-invalid="false"
      />
      <div id="name-help" class="ivds-text-input__helper">
        Enter your first and last name as they appear on official documents.
      </div>
    </div>
    
    <div class="ivds-text-input-wrapper">
      <label class="ivds-text-input__label" for="error-accessible">
        Email Address
      </label>
      <input 
        type="email" 
        id="error-accessible"
        class="ivds-text-input ivds-text-input--error" 
        placeholder="you@example.com"
        value="invalid-email"
        aria-describedby="email-error"
        aria-invalid="true"
      />
      <div id="email-error" class="ivds-text-input__error" role="alert">
        Please enter a valid email address.
      </div>
    </div>
  </div>
`;

// HTML code examples
export const HTMLCodeExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px;">
    <div>
      <h3 style="margin-bottom: 1rem;">Basic Text Input HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label" for="example-basic">
            Email Address
          </label>
          <input 
            type="email" 
            id="example-basic"
            class="ivds-text-input" 
            placeholder="you@example.com"
          />
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-text-input-wrapper"&gt;
  &lt;label class="ivds-text-input__label" for="email"&gt;
    Email Address
  &lt;/label&gt;
  &lt;input 
    type="email" 
    id="email"
    class="ivds-text-input" 
    placeholder="you@example.com"
  /&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Input with Helper Text HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label" for="example-helper">
            Password
          </label>
          <input 
            type="password" 
            id="example-helper"
            class="ivds-text-input" 
            placeholder="Enter your password"
          />
          <div class="ivds-text-input__helper">
            Must be at least 8 characters long.
          </div>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-text-input-wrapper"&gt;
  &lt;label class="ivds-text-input__label" for="password"&gt;
    Password
  &lt;/label&gt;
  &lt;input 
    type="password" 
    id="password"
    class="ivds-text-input" 
    placeholder="Enter your password"
  /&gt;
  &lt;div class="ivds-text-input__helper"&gt;
    Must be at least 8 characters long.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Input with Error State HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label" for="example-error">
            Email Address
          </label>
          <input 
            type="email" 
            id="example-error"
            class="ivds-text-input ivds-text-input--error" 
            value="invalid-email"
            aria-invalid="true"
            aria-describedby="email-error"
          />
          <div id="email-error" class="ivds-text-input__error" role="alert">
            Please enter a valid email address.
          </div>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-text-input-wrapper"&gt;
  &lt;label class="ivds-text-input__label" for="email"&gt;
    Email Address
  &lt;/label&gt;
  &lt;input 
    type="email" 
    id="email"
    class="ivds-text-input ivds-text-input--error" 
    value="invalid-email"
    aria-invalid="true"
    aria-describedby="email-error"
  /&gt;
  &lt;div id="email-error" class="ivds-text-input__error" role="alert"&gt;
    Please enter a valid email address.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Textarea HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-text-input-wrapper">
          <label class="ivds-text-input__label" for="example-textarea">
            Message
          </label>
          <textarea 
            id="example-textarea"
            class="ivds-text-input ivds-text-input--textarea" 
            placeholder="Enter your message here..."
            rows="4"
          ></textarea>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-text-input-wrapper"&gt;
  &lt;label class="ivds-text-input__label" for="message"&gt;
    Message
  &lt;/label&gt;
  &lt;textarea 
    id="message"
    class="ivds-text-input ivds-text-input--textarea" 
    placeholder="Enter your message here..."
    rows="4"
  &gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
`;

// Form validation examples
export const FormValidationExamples = () => `
  <div style="max-width: 600px; display: flex; flex-direction: column; gap: 2rem;">
    <div class="ivds-card">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Form Validation Example</h3>
      </div>
      <div class="ivds-card__body">
        <form style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label ivds-text-input__label--required" for="validation-name">
              Full Name
            </label>
            <input 
              type="text" 
              id="validation-name"
              class="ivds-text-input" 
              placeholder="Enter your full name"
              required
              aria-describedby="name-help"
            />
            <div id="name-help" class="ivds-text-input__helper">
              Enter your first and last name.
            </div>
          </div>
          
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label ivds-text-input__label--required" for="validation-email">
              Email Address
            </label>
            <input 
              type="email" 
              id="validation-email"
              class="ivds-text-input ivds-text-input--error" 
              value="invalid@"
              required
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <div id="email-error" class="ivds-text-input__error" role="alert">
              Please enter a valid email address.
            </div>
          </div>
          
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label" for="validation-phone">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="validation-phone"
              class="ivds-text-input ivds-text-input--success" 
              value="+1 (555) 123-4567"
              aria-describedby="phone-success"
            />
            <div id="phone-success" class="ivds-text-input__helper" style="color: var(--color-semantic-success-600, #059669);">
              Phone number format is valid.
            </div>
          </div>
          
          <div class="ivds-text-input-wrapper">
            <label class="ivds-text-input__label" for="validation-message">
              Additional Comments
            </label>
            <textarea 
              id="validation-message"
              class="ivds-text-input ivds-text-input--textarea" 
              placeholder="Any additional information..."
              rows="3"
              maxlength="500"
              aria-describedby="message-count"
            ></textarea>
            <div id="message-count" class="ivds-text-input__helper">
              0 / 500 characters
            </div>
          </div>
          
          <div style="display: flex; gap: 1rem;">
            <button type="submit" class="ivds-button ivds-button--primary">Submit</button>
            <button type="reset" class="ivds-button ivds-button--secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;