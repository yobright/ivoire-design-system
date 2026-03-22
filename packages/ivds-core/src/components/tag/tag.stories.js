// Tag component stories for Storybook
// Showcases all tag variants, sizes, removable functionality, and different styles

export default {
  title: 'Core/Tag',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only tag component using IVDS design tokens. Provides multiple color variants, sizes, and removable functionality for labeling and categorization.'
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

// Basic tag variants
export const Default = () => `
  <span class="ivds-tag">
    <span class="ivds-tag__text">Default Tag</span>
  </span>
`;

export const Primary = () => `
  <span class="ivds-tag ivds-tag--primary">
    <span class="ivds-tag__text">Primary Tag</span>
  </span>
`;

export const Success = () => `
  <span class="ivds-tag ivds-tag--success">
    <span class="ivds-tag__text">Success Tag</span>
  </span>
`;

export const Warning = () => `
  <span class="ivds-tag ivds-tag--warning">
    <span class="ivds-tag__text">Warning Tag</span>
  </span>
`;

export const Error = () => `
  <span class="ivds-tag ivds-tag--error">
    <span class="ivds-tag__text">Error Tag</span>
  </span>
`;

export const Info = () => `
  <span class="ivds-tag ivds-tag--info">
    <span class="ivds-tag__text">Info Tag</span>
  </span>
`;

// Tag sizes
export const Sizes = () => `
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <span class="ivds-tag ivds-tag--primary ivds-tag--small">
      <span class="ivds-tag__text">Small Tag</span>
    </span>
    <span class="ivds-tag ivds-tag--primary">
      <span class="ivds-tag__text">Default Tag</span>
    </span>
    <span class="ivds-tag ivds-tag--primary ivds-tag--large">
      <span class="ivds-tag__text">Large Tag</span>
    </span>
  </div>
`;

// Tag style variants
export const StyleVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem;">Default (Filled)</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="ivds-tag">Default</span>
        <span class="ivds-tag ivds-tag--primary">Primary</span>
        <span class="ivds-tag ivds-tag--success">Success</span>
        <span class="ivds-tag ivds-tag--warning">Warning</span>
        <span class="ivds-tag ivds-tag--error">Error</span>
        <span class="ivds-tag ivds-tag--info">Info</span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Outlined</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="ivds-tag ivds-tag--outlined">Default</span>
        <span class="ivds-tag ivds-tag--primary ivds-tag--outlined">Primary</span>
        <span class="ivds-tag ivds-tag--success ivds-tag--outlined">Success</span>
        <span class="ivds-tag ivds-tag--warning ivds-tag--outlined">Warning</span>
        <span class="ivds-tag ivds-tag--error ivds-tag--outlined">Error</span>
        <span class="ivds-tag ivds-tag--info ivds-tag--outlined">Info</span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Solid</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="ivds-tag ivds-tag--solid">Default</span>
        <span class="ivds-tag ivds-tag--primary ivds-tag--solid">Primary</span>
        <span class="ivds-tag ivds-tag--success ivds-tag--solid">Success</span>
        <span class="ivds-tag ivds-tag--warning ivds-tag--solid">Warning</span>
        <span class="ivds-tag ivds-tag--error ivds-tag--solid">Error</span>
        <span class="ivds-tag ivds-tag--info ivds-tag--solid">Info</span>
      </div>
    </div>
  </div>
`;

// Tags with icons
export const WithIcons = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <span class="ivds-tag ivds-tag--success">
      <span class="ivds-tag__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-tag__text">Verified</span>
    </span>
    
    <span class="ivds-tag ivds-tag--warning">
      <span class="ivds-tag__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-tag__text">Pending</span>
    </span>
    
    <span class="ivds-tag ivds-tag--info">
      <span class="ivds-tag__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V5A2 2 0 0 0 14 3H10A2 2 0 0 0 8 5V21L12 19L16 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-tag__text">Bookmarked</span>
    </span>
    
    <span class="ivds-tag ivds-tag--primary">
      <span class="ivds-tag__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18A2 2 0 0 1 20 6V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V6A2 2 0 0 1 6 4H8M9 1H15A1 1 0 0 1 16 2V5A1 1 0 0 1 15 6H9A1 1 0 0 1 8 5V2A1 1 0 0 1 9 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ivds-tag__text">Draft</span>
    </span>
  </div>
`;

// Removable tags
export const RemovableTags = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem;">Removable Tags</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="ivds-tag ivds-tag--primary ivds-tag--removable">
          <span class="ivds-tag__text">JavaScript</span>
          <button class="ivds-tag__remove" aria-label="Remove JavaScript tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        
        <span class="ivds-tag ivds-tag--success ivds-tag--removable">
          <span class="ivds-tag__text">React</span>
          <button class="ivds-tag__remove" aria-label="Remove React tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        
        <span class="ivds-tag ivds-tag--info ivds-tag--removable">
          <span class="ivds-tag__text">TypeScript</span>
          <button class="ivds-tag__remove" aria-label="Remove TypeScript tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Removable Tags with Icons</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="ivds-tag ivds-tag--warning ivds-tag--removable">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19C-2 12 2 6 9 12C16 6 20 12 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">Favorite</span>
          <button class="ivds-tag__remove" aria-label="Remove Favorite tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        
        <span class="ivds-tag ivds-tag--error ivds-tag--removable">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">Critical</span>
          <button class="ivds-tag__remove" aria-label="Remove Critical tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
  </div>
`;

// Clickable tags (links)
export const ClickableTags = () => `
  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <a href="#" class="ivds-tag ivds-tag--primary ivds-tag--link">
      <span class="ivds-tag__text">Frontend</span>
    </a>
    
    <a href="#" class="ivds-tag ivds-tag--success ivds-tag--link">
      <span class="ivds-tag__text">Backend</span>
    </a>
    
    <a href="#" class="ivds-tag ivds-tag--info ivds-tag--link">
      <span class="ivds-tag__text">Full Stack</span>
    </a>
    
    <button class="ivds-tag ivds-tag--warning ivds-tag--interactive">
      <span class="ivds-tag__text">Interactive</span>
    </button>
  </div>
`;

// Tag status indicators
export const StatusTags = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <span class="ivds-tag ivds-tag--success ivds-tag--new">
      <span class="ivds-tag__text">New Feature</span>
    </span>
    
    <span class="ivds-tag ivds-tag--info ivds-tag--updated">
      <span class="ivds-tag__text">Updated</span>
    </span>
    
    <span class="ivds-tag ivds-tag--primary">
      <span class="ivds-tag__text">Stable</span>
    </span>
    
    <span class="ivds-tag ivds-tag--warning">
      <span class="ivds-tag__text">Beta</span>
    </span>
  </div>
`;

// Tag groups
export const TagGroups = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem;">Default Spacing</h4>
      <div class="ivds-tag-group">
        <span class="ivds-tag ivds-tag--primary">React</span>
        <span class="ivds-tag ivds-tag--success">JavaScript</span>
        <span class="ivds-tag ivds-tag--info">TypeScript</span>
        <span class="ivds-tag ivds-tag--warning">CSS</span>
        <span class="ivds-tag ivds-tag--error">HTML</span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Compact Spacing</h4>
      <div class="ivds-tag-group ivds-tag-group--compact">
        <span class="ivds-tag ivds-tag--small">Frontend</span>
        <span class="ivds-tag ivds-tag--small">Backend</span>
        <span class="ivds-tag ivds-tag--small">DevOps</span>
        <span class="ivds-tag ivds-tag--small">Design</span>
        <span class="ivds-tag ivds-tag--small">Testing</span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Spacious Layout</h4>
      <div class="ivds-tag-group ivds-tag-group--spacious">
        <span class="ivds-tag ivds-tag--large ivds-tag--primary">Architecture</span>
        <span class="ivds-tag ivds-tag--large ivds-tag--success">Performance</span>
        <span class="ivds-tag ivds-tag--large ivds-tag--info">Security</span>
      </div>
    </div>
  </div>
`;

// Disabled tags
export const DisabledTags = () => `
  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <span class="ivds-tag ivds-tag--disabled">
      <span class="ivds-tag__text">Disabled Tag</span>
    </span>
    
    <span class="ivds-tag ivds-tag--primary ivds-tag--disabled">
      <span class="ivds-tag__text">Disabled Primary</span>
    </span>
    
    <span class="ivds-tag ivds-tag--success ivds-tag--removable ivds-tag--disabled">
      <span class="ivds-tag__text">Disabled Removable</span>
      <button class="ivds-tag__remove" aria-label="Remove tag" disabled>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </span>
  </div>
`;

// All variants showcase
export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div class="ivds-tag-group">
      <span class="ivds-tag">Default</span>
      <span class="ivds-tag ivds-tag--primary">Primary</span>
      <span class="ivds-tag ivds-tag--success">Success</span>
      <span class="ivds-tag ivds-tag--warning">Warning</span>
      <span class="ivds-tag ivds-tag--error">Error</span>
      <span class="ivds-tag ivds-tag--info">Info</span>
    </div>
    
    <div class="ivds-tag-group">
      <span class="ivds-tag ivds-tag--outlined">Outlined</span>
      <span class="ivds-tag ivds-tag--primary ivds-tag--outlined">Primary</span>
      <span class="ivds-tag ivds-tag--success ivds-tag--outlined">Success</span>
      <span class="ivds-tag ivds-tag--warning ivds-tag--outlined">Warning</span>
      <span class="ivds-tag ivds-tag--error ivds-tag--outlined">Error</span>
      <span class="ivds-tag ivds-tag--info ivds-tag--outlined">Info</span>
    </div>
    
    <div class="ivds-tag-group">
      <span class="ivds-tag ivds-tag--solid">Solid</span>
      <span class="ivds-tag ivds-tag--primary ivds-tag--solid">Primary</span>
      <span class="ivds-tag ivds-tag--success ivds-tag--solid">Success</span>
      <span class="ivds-tag ivds-tag--warning ivds-tag--solid">Warning</span>
      <span class="ivds-tag ivds-tag--error ivds-tag--solid">Error</span>
      <span class="ivds-tag ivds-tag--info ivds-tag--solid">Info</span>
    </div>
  </div>
`;

// Real-world usage examples
export const UsageExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem;">Skills & Technologies</h4>
      <div class="ivds-tag-group">
        <span class="ivds-tag ivds-tag--primary ivds-tag--removable">
          <span class="ivds-tag__text">React</span>
          <button class="ivds-tag__remove" aria-label="Remove React tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        <span class="ivds-tag ivds-tag--success ivds-tag--removable">
          <span class="ivds-tag__text">Node.js</span>
          <button class="ivds-tag__remove" aria-label="Remove Node.js tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        <span class="ivds-tag ivds-tag--info ivds-tag--removable">
          <span class="ivds-tag__text">TypeScript</span>
          <button class="ivds-tag__remove" aria-label="Remove TypeScript tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
        <span class="ivds-tag ivds-tag--warning">
          <span class="ivds-tag__text">Learning</span>
        </span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Project Status</h4>
      <div class="ivds-tag-group">
        <span class="ivds-tag ivds-tag--success ivds-tag--new">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">Completed</span>
        </span>
        <span class="ivds-tag ivds-tag--warning">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">In Progress</span>
        </span>
        <span class="ivds-tag ivds-tag--error">
          <span class="ivds-tag__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ivds-tag__text">Blocked</span>
        </span>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem;">Categories</h4>
      <div class="ivds-tag-group">
        <a href="#" class="ivds-tag ivds-tag--outlined ivds-tag--link">
          <span class="ivds-tag__text">Frontend</span>
        </a>
        <a href="#" class="ivds-tag ivds-tag--outlined ivds-tag--link">
          <span class="ivds-tag__text">Backend</span>
        </a>
        <a href="#" class="ivds-tag ivds-tag--outlined ivds-tag--link">
          <span class="ivds-tag__text">DevOps</span>
        </a>
        <a href="#" class="ivds-tag ivds-tag--outlined ivds-tag--link">
          <span class="ivds-tag__text">Design</span>
        </a>
      </div>
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
    <div class="ivds-tag-group">
      <span class="ivds-tag ivds-tag--primary ivds-tag--removable" role="listitem">
        <span class="ivds-tag__text">Accessible Tag</span>
        <button class="ivds-tag__remove" aria-label="Remove Accessible Tag from list">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </span>
      
      <a href="#" class="ivds-tag ivds-tag--success ivds-tag--link" aria-describedby="tag-help">
        <span class="ivds-tag__text">Clickable Tag</span>
      </a>
      
      <span class="ivds-tag ivds-tag--info" title="This tag provides additional context">
        <span class="ivds-tag__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="ivds-tag__text">With Tooltip</span>
      </span>
    </div>
    
    <p id="tag-help" style="font-size: 0.875rem; color: #6b7280;">
      Tags can be interactive elements with proper ARIA labels and keyboard navigation support.
    </p>
  </div>
`;