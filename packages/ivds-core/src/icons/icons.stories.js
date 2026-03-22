/**
 * IVDS Icon System
 * Flexible, colorable icons using CSS mask-image
 */

export default {
  title: 'Foundation/Icons',
  parameters: {
    docs: {
      description: {
        component: 'IVDS icons use CSS mask-image for flexible, colorable icons that inherit color from their parent element.',
      },
    },
  },
};

// Common icons for quick reference
const commonIcons = [
  'check', 'cross', 'info-circle', 'alert-circle', 'question-circle',
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
  'plus', 'minus', 'search', 'menu-hamburger', 'menu-dots',
  'home', 'user', 'envelope', 'phone', 'calendar',
  'heart', 'star', 'trash', 'pen', 'download'
];

// All available icons
const allIcons = [
  'alert-circle', 'alert-circle-fill', 'angle-down', 'angle-left', 'angle-right', 'angle-up',
  'arrow-bottom-left', 'arrow-bottom-right', 'arrow-down', 'arrow-left', 'arrow-redo',
  'arrow-right', 'arrow-right-dashed', 'arrow-top-left', 'arrow-top-right', 'arrow-undo', 'arrow-up',
  'at-sign', 'bag-cogwheel', 'bell', 'bell-crossed', 'binoculars', 'box', 'cake',
  'calendar', 'calendar-clock', 'calendar-cross', 'calendar-event', 'calendar-plus', 'calendar-recurring',
  'camera', 'check', 'check-circle', 'check-circle-fill', 'children',
  'clock', 'clock-cross', 'clock-plus', 'coffee-cup-saucer', 'cogwheel', 'cogwheels',
  'collapse', 'company', 'copy', 'cross', 'cross-circle', 'cross-circle-fill',
  'customer-bot-negative', 'customer-bot-neutral', 'customer-bot-positive',
  'discord', 'display', 'document', 'document-blank', 'document-blank-group', 'document-group',
  'download', 'download-cloud', 'drag', 'entrepreneur', 'envelope',
  'error', 'error-fill', 'euro-sign', 'eye', 'eye-crossed',
  'face-neutral', 'face-sad', 'face-smile', 'facebook', 'family',
  'folder', 'folder-group', 'globe', 'google', 'graph-columns', 'group',
  'hammers', 'headphones', 'heart', 'heart-fill', 'history', 'home', 'home-smoke',
  'info-circle', 'info-circle-fill', 'instagram', 'key', 'layers', 'lightbulb',
  'link', 'link-external', 'linkedin', 'locate', 'location', 'lock', 'lock-open',
  'map', 'menu-dots', 'menu-hamburger', 'microphone', 'microphone-crossed',
  'minus', 'minus-circle', 'minus-circle-fill', 'mobile', 'money-bag', 'money-bag-fill',
  'mover', 'occupation', 'paperclip', 'pen', 'pen-line',
  'person-female', 'person-genderless', 'person-male', 'person-wheelchair',
  'phone', 'photo', 'photo-plus',
  'playback-fastforward', 'playback-next', 'playback-pause', 'playback-play',
  'playback-previous', 'playback-record', 'playback-rewind', 'playback-stop',
  'plus', 'plus-circle', 'plus-circle-fill', 'podcast', 'printer',
  'question-circle', 'question-circle-fill', 'refresh', 'restaurant', 'rss',
  'save-diskette', 'save-diskette-fill', 'scroll', 'scroll-cogwheel', 'scroll-content', 'scroll-group',
  'search', 'senior', 'share', 'shield', 'shopping-cart', 'signin', 'signout', 'sitemap', 'sliders',
  'snapchat', 'sort', 'sort-alphabetical-ascending', 'sort-alphabetical-descending',
  'sort-ascending', 'sort-descending', 'speechbubble', 'speechbubble-text',
  'star', 'star-fill', 'swap-user', 'text-bold', 'text-italic', 'text-tool',
  'thumbs-down', 'thumbs-down-fill', 'thumbs-up', 'thumbs-up-fill',
  'ticket', 'tiktok', 'trash', 'traveler', 'twitch', 'twitter',
  'upload', 'upload-cloud', 'user', 'vaccine',
  'videocamera', 'videocamera-crossed', 'vimeo', 'virus',
  'volume-high', 'volume-low', 'volume-minus', 'volume-mute', 'volume-plus',
  'whatsapp', 'wifi', 'wifi-crossed', 'x', 'yle', 'youth', 'youtube',
  'zoom-in', 'zoom-out', 'zoom-text'
];

export const CommonIcons = () => `
  <style>
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1.5rem;
      padding: 1rem;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      border: 2px solid var(--color-semantic-neutral-200, #e2e8f0);
      border-radius: 4px;
      text-align: center;
      transition: all 0.2s;
    }
    .icon-item:hover {
      border-color: var(--color-brand-primary-600, #e13b1f);
      background-color: var(--color-semantic-neutral-50, #f8fafc);
    }
    .icon-name {
      font-size: 0.75rem;
      color: var(--color-semantic-neutral-600, #475569);
      word-break: break-word;
    }
  </style>
  <div class="icon-grid">
    ${commonIcons.map(icon => `
      <div class="icon-item">
        <span class="ivds-icon ivds-icon--${icon} ivds-icon--size-l"></span>
        <span class="icon-name">${icon}</span>
      </div>
    `).join('')}
  </div>
`;

export const AllIcons = () => `
  <style>
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      border: 1px solid var(--color-semantic-neutral-200, #e2e8f0);
      border-radius: 4px;
      text-align: center;
      transition: all 0.2s;
    }
    .icon-item:hover {
      border-color: var(--color-brand-primary-600, #e13b1f);
      background-color: var(--color-semantic-neutral-50, #f8fafc);
    }
    .icon-name {
      font-size: 0.625rem;
      color: var(--color-semantic-neutral-600, #475569);
      word-break: break-word;
    }
  </style>
  <div class="icon-grid">
    ${allIcons.map(icon => `
      <div class="icon-item">
        <span class="ivds-icon ivds-icon--${icon} ivds-icon--size-m"></span>
        <span class="icon-name">${icon}</span>
      </div>
    `).join('')}
  </div>
`;

export const Sizes = () => `
  <style>
    .size-demo {
      display: flex;
      gap: 2rem;
      align-items: center;
      padding: 2rem;
      flex-wrap: wrap;
    }
    .size-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .size-label {
      font-size: 0.875rem;
      color: var(--color-semantic-neutral-600, #475569);
      font-weight: 600;
    }
  </style>
  <div class="size-demo">
    <div class="size-item">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-xs"></span>
      <span class="size-label">XS (1rem)</span>
    </div>
    <div class="size-item">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-s"></span>
      <span class="size-label">S (1.5rem)</span>
    </div>
    <div class="size-item">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-m"></span>
      <span class="size-label">M (2rem)</span>
    </div>
    <div class="size-item">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-l"></span>
      <span class="size-label">L (2.5rem)</span>
    </div>
    <div class="size-item">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-xl"></span>
      <span class="size-label">XL (3rem)</span>
    </div>
  </div>
`;

export const Colors = () => `
  <style>
    .color-demo {
      display: flex;
      gap: 2rem;
      padding: 2rem;
      flex-wrap: wrap;
    }
    .color-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .color-label {
      font-size: 0.875rem;
      color: var(--color-semantic-neutral-600, #475569);
    }
  </style>
  <div class="color-demo">
    <div class="color-item">
      <span class="ivds-icon ivds-icon--heart-fill ivds-icon--size-l" style="color: #ef4444;"></span>
      <span class="color-label">Red</span>
    </div>
    <div class="color-item">
      <span class="ivds-icon ivds-icon--check-circle-fill ivds-icon--size-l" style="color: #10b981;"></span>
      <span class="color-label">Green</span>
    </div>
    <div class="color-item">
      <span class="ivds-icon ivds-icon--info-circle-fill ivds-icon--size-l" style="color: #3b82f6;"></span>
      <span class="color-label">Blue</span>
    </div>
    <div class="color-item">
      <span class="ivds-icon ivds-icon--alert-circle-fill ivds-icon--size-l" style="color: #f59e0b;"></span>
      <span class="color-label">Orange</span>
    </div>
    <div class="color-item">
      <span class="ivds-icon ivds-icon--star-fill ivds-icon--size-l" style="color: #8b5cf6;"></span>
      <span class="color-label">Purple</span>
    </div>
  </div>
`;

export const InButtons = () => `
  <style>
    .button-demo {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
    }
  </style>
  <div class="button-demo">
    <button class="ivds-button ivds-button--primary ivds-icon-start--check">
      Save Changes
    </button>
    <button class="ivds-button ivds-button--primary ivds-icon-end--arrow-right">
      Next Step
    </button>
    <button class="ivds-button ivds-button--secondary ivds-icon-start--download">
      Download File
    </button>
    <button class="ivds-button ivds-button--secondary ivds-icon-end--link-external">
      Open External Link
    </button>
  </div>
`;

export const InText = () => `
  <style>
    .text-demo {
      padding: 2rem;
      max-width: 600px;
    }
    .text-demo p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  </style>
  <div class="text-demo">
    <p>
      Icons inherit the text color automatically. 
      <span class="ivds-icon ivds-icon--check" style="color: green;"></span>
      This makes them perfect for inline use.
    </p>
    <p style="color: #3b82f6;">
      When you change the text color, 
      <span class="ivds-icon ivds-icon--info-circle"></span>
      the icon color changes too!
    </p>
    <p style="font-size: 1.5rem;">
      Icons also scale with font size 
      <span class="ivds-icon ivds-icon--heart"></span>
      automatically.
    </p>
  </div>
`;

export const UsageExample = () => `
  <style>
    .usage-demo {
      padding: 2rem;
      max-width: 800px;
    }
    .code-block {
      background: var(--color-semantic-neutral-900, #0f172a);
      color: var(--color-semantic-neutral-50, #f8fafc);
      padding: 1rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      margin: 1rem 0;
      overflow-x: auto;
    }
    .example-output {
      padding: 1rem;
      border: 2px solid var(--color-semantic-neutral-200, #e2e8f0);
      border-radius: 4px;
      margin: 1rem 0;
    }
  </style>
  <div class="usage-demo">
    <h3>Basic Icon</h3>
    <div class="code-block">
&lt;span class="ivds-icon ivds-icon--check ivds-icon--size-m"&gt;&lt;/span&gt;
    </div>
    <div class="example-output">
      <span class="ivds-icon ivds-icon--check ivds-icon--size-m"></span>
    </div>

    <h3>Colored Icon</h3>
    <div class="code-block">
&lt;span class="ivds-icon ivds-icon--heart-fill ivds-icon--size-l" style="color: red;"&gt;&lt;/span&gt;
    </div>
    <div class="example-output">
      <span class="ivds-icon ivds-icon--heart-fill ivds-icon--size-l" style="color: red;"></span>
    </div>

    <h3>Icon in Button (Prefix)</h3>
    <div class="code-block">
&lt;button class="ivds-button ivds-icon-start--check"&gt;
  Save Changes
&lt;/button&gt;
    </div>
    <div class="example-output">
      <button class="ivds-button ivds-button--primary ivds-icon-start--check">
        Save Changes
      </button>
    </div>

    <h3>Icon in Button (Suffix)</h3>
    <div class="code-block">
&lt;button class="ivds-button ivds-icon-end--arrow-right"&gt;
  Next Step
&lt;/button&gt;
    </div>
    <div class="example-output">
      <button class="ivds-button ivds-button--primary ivds-icon-end--arrow-right">
        Next Step
      </button>
    </div>
  </div>
`;
