// Card component stories for Storybook
// Showcases all card variants, sections, layouts, and features

export default {
  title: 'Core/Card',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only card component using IVDS design tokens. Provides flexible layouts with header, body, footer, media sections, and multiple variants for different use cases.'
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          }
        ]
      }
    }
  }
};

// Basic card
export const Default = () => `
  <div class="ivds-card" style="max-width: 400px;">
    <div class="ivds-card__header">
      <h3 class="ivds-card__title">Card Title</h3>
      <p class="ivds-card__subtitle">Card subtitle with additional information</p>
    </div>
    <div class="ivds-card__body">
      <p class="ivds-card__content">
        This is the main content area of the card. It can contain any type of content including text, images, or other components.
      </p>
    </div>
  </div>
`;

// Card with all sections
export const WithAllSections = () => `
  <div class="ivds-card" style="max-width: 400px;">
    <div class="ivds-card__header">
      <h3 class="ivds-card__title">Complete Card</h3>
      <p class="ivds-card__subtitle">With header, body, and footer</p>
    </div>
    <div class="ivds-card__body">
      <p class="ivds-card__content">
        This card demonstrates all available sections including header, body, and footer areas.
      </p>
      <div class="ivds-card__actions">
        <button class="ivds-button ivds-button--primary">Primary Action</button>
        <button class="ivds-button ivds-button--secondary">Secondary</button>
      </div>
    </div>
    <div class="ivds-card__footer">
      <small>Footer information or metadata</small>
    </div>
  </div>
`;

// Card with media
export const WithMedia = () => `
  <div class="ivds-card" style="max-width: 400px;">
    <div class="ivds-card__media" style="height: 200px; background: linear-gradient(45deg, #0ea5e9, #3b82f6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">
      Media Area (Image/Video)
    </div>
    <div class="ivds-card__header">
      <h3 class="ivds-card__title">Media Card</h3>
      <p class="ivds-card__subtitle">Card with media section</p>
    </div>
    <div class="ivds-card__body">
      <p class="ivds-card__content">
        This card includes a media section at the top, perfect for images or videos.
      </p>
    </div>
  </div>
`;

// Card variants
export const Variants = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    <div class="ivds-card">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Default Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">Default card with subtle shadow and border.</p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--flat">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Flat Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">Flat card with no shadow or border.</p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--bordered">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Bordered Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">Card with prominent border and no shadow.</p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--elevated">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Elevated Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">Card with medium shadow for elevation.</p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--floating">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Floating Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">Card with large shadow for floating effect.</p>
      </div>
    </div>
  </div>
`;

// Interactive card
export const Interactive = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    <div class="ivds-card ivds-card--interactive" tabindex="0" role="button" aria-label="Interactive card example">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Interactive Card</h3>
        <p class="ivds-card__subtitle">Hover and click me!</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          This card responds to hover and focus states with smooth animations.
        </p>
      </div>
    </div>
    
    <a href="#" class="ivds-card ivds-card--interactive" style="text-decoration: none; color: inherit;">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Clickable Card</h3>
        <p class="ivds-card__subtitle">I'm a link!</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          This entire card is clickable and accessible as a link.
        </p>
      </div>
    </a>
  </div>
`;

// Card sizes
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div class="ivds-card ivds-card--compact" style="max-width: 400px;">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Compact Card</h3>
        <p class="ivds-card__subtitle">Reduced padding for tight spaces</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">This card uses compact spacing.</p>
      </div>
      <div class="ivds-card__footer">
        <small>Compact footer</small>
      </div>
    </div>
    
    <div class="ivds-card" style="max-width: 400px;">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Default Card</h3>
        <p class="ivds-card__subtitle">Standard padding for most use cases</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">This card uses default spacing.</p>
      </div>
      <div class="ivds-card__footer">
        <small>Default footer</small>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--spacious" style="max-width: 400px;">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Spacious Card</h3>
        <p class="ivds-card__subtitle">Generous padding for important content</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">This card uses spacious padding.</p>
      </div>
      <div class="ivds-card__footer">
        <small>Spacious footer</small>
      </div>
    </div>
  </div>
`;

// Horizontal card layout
export const HorizontalLayout = () => `
  <div class="ivds-card ivds-card--horizontal" style="max-width: 600px;">
    <div class="ivds-card__media" style="background: linear-gradient(45deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">
      Media
    </div>
    <div class="ivds-card__content-wrapper">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Horizontal Card</h3>
        <p class="ivds-card__subtitle">Side-by-side layout</p>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          This card uses a horizontal layout with media on the left and content on the right.
        </p>
        <div class="ivds-card__actions">
          <button class="ivds-button ivds-button--primary">Action</button>
        </div>
      </div>
    </div>
  </div>
`;

// Overlay card
export const OverlayCard = () => `
  <div class="ivds-card ivds-card--overlay" style="max-width: 400px; height: 300px;">
    <div class="ivds-card__media" style="height: 100%; background: linear-gradient(45deg, #f59e0b, #d97706); position: relative;">
      <div class="ivds-card__overlay">
        <h3 class="ivds-card__title">Overlay Card</h3>
        <p class="ivds-card__subtitle">Content over media</p>
        <p class="ivds-card__content">
          This card overlays content on top of media with a gradient background.
        </p>
        <div class="ivds-card__actions">
          <button class="ivds-button ivds-button--primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
`;

// Semantic variants
export const SemanticVariants = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    <div class="ivds-card ivds-card--success">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Success Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          Used for positive messages, confirmations, or successful operations.
        </p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--warning">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Warning Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          Used for cautionary messages or important notices that need attention.
        </p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--error">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Error Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          Used for error messages, failed operations, or critical issues.
        </p>
      </div>
    </div>
    
    <div class="ivds-card ivds-card--info">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Info Card</h3>
      </div>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          Used for informational messages, tips, or neutral notifications.
        </p>
      </div>
    </div>
  </div>
`;

// Card with complex content
export const ComplexContent = () => `
  <div class="ivds-card ivds-card--elevated" style="max-width: 500px;">
    <div class="ivds-card__media" style="height: 200px; background: linear-gradient(45deg, #3b82f6, #1d4ed8); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">
      Product Image
    </div>
    <div class="ivds-card__header">
      <h3 class="ivds-card__title">Premium Product</h3>
      <p class="ivds-card__subtitle">High-quality solution for professionals</p>
    </div>
    <div class="ivds-card__body">
      <p class="ivds-card__content">
        This premium product offers advanced features and exceptional performance for professional users who demand the best.
      </p>
      
      <div style="margin: 1rem 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>Features:</span>
          <span style="font-weight: 500;">★★★★★</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>Performance:</span>
          <span style="font-weight: 500;">★★★★☆</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Value:</span>
          <span style="font-weight: 500;">★★★★★</span>
        </div>
      </div>
      
      <div class="ivds-card__actions">
        <button class="ivds-button ivds-button--primary">Buy Now - $299</button>
        <button class="ivds-button ivds-button--secondary">Learn More</button>
      </div>
    </div>
    <div class="ivds-card__footer">
      <small>Free shipping • 30-day return policy • 2-year warranty</small>
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
    <article class="ivds-card" role="article" aria-labelledby="article-title">
      <header class="ivds-card__header">
        <h3 id="article-title" class="ivds-card__title">Accessible Article Card</h3>
        <p class="ivds-card__subtitle">Published on March 15, 2024</p>
      </header>
      <div class="ivds-card__body">
        <p class="ivds-card__content">
          This card uses proper semantic HTML with article, header, and other elements for better accessibility.
        </p>
        <div class="ivds-card__actions">
          <a href="#" class="ivds-button ivds-button--primary" aria-describedby="article-title">
            Read Full Article
          </a>
        </div>
      </div>
    </article>
    
    <div class="ivds-card ivds-card--interactive" tabindex="0" role="button" aria-label="Interactive notification card" aria-describedby="notification-content">
      <div class="ivds-card__header">
        <h3 class="ivds-card__title">Interactive Notification</h3>
      </div>
      <div class="ivds-card__body">
        <p id="notification-content" class="ivds-card__content">
          This card is keyboard accessible and includes proper ARIA labels for screen readers.
        </p>
      </div>
    </div>
  </div>
`;

// HTML code examples
export const HTMLCodeExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px;">
    <div>
      <h3 style="margin-bottom: 1rem;">Basic Card HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-card" style="max-width: 400px;">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Card Title</h3>
            <p class="ivds-card__subtitle">Card subtitle</p>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">This is the card content area.</p>
          </div>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-card"&gt;
  &lt;div class="ivds-card__header"&gt;
    &lt;h3 class="ivds-card__title"&gt;Card Title&lt;/h3&gt;
    &lt;p class="ivds-card__subtitle"&gt;Card subtitle&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="ivds-card__body"&gt;
    &lt;p class="ivds-card__content"&gt;This is the card content area.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Card with Actions HTML</h3>
      <div style="margin-bottom: 1rem;">
        <div class="ivds-card" style="max-width: 400px;">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Product Card</h3>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">Product description goes here.</p>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--primary">Buy Now</button>
              <button class="ivds-button ivds-button--secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;div class="ivds-card"&gt;
  &lt;div class="ivds-card__header"&gt;
    &lt;h3 class="ivds-card__title"&gt;Product Card&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="ivds-card__body"&gt;
    &lt;p class="ivds-card__content"&gt;Product description goes here.&lt;/p&gt;
    &lt;div class="ivds-card__actions"&gt;
      &lt;button class="ivds-button ivds-button--primary"&gt;Buy Now&lt;/button&gt;
      &lt;button class="ivds-button ivds-button--secondary"&gt;Learn More&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div>
      <h3 style="margin-bottom: 1rem;">Interactive Card HTML</h3>
      <div style="margin-bottom: 1rem;">
        <a href="#" class="ivds-card ivds-card--interactive" style="max-width: 400px; text-decoration: none; color: inherit;">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Clickable Card</h3>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">This entire card is clickable.</p>
          </div>
        </a>
      </div>
      <pre style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;"><code>&lt;a href="#" class="ivds-card ivds-card--interactive"&gt;
  &lt;div class="ivds-card__header"&gt;
    &lt;h3 class="ivds-card__title"&gt;Clickable Card&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="ivds-card__body"&gt;
    &lt;p class="ivds-card__content"&gt;This entire card is clickable.&lt;/p&gt;
  &lt;/div&gt;
&lt;/a&gt;</code></pre>
    </div>
  </div>
`;

// Real-world card examples
export const RealWorldExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 3rem;">
    
    <!-- Product Cards -->
    <div>
      <h3 style="margin-bottom: 1.5rem;">Product Cards</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div class="ivds-card">
          <div class="ivds-card__media" style="height: 200px; background: linear-gradient(45deg, #0ea5e9, #3b82f6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">
            Product Image
          </div>
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Premium Headphones</h3>
            <p class="ivds-card__subtitle">$299.99</p>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">
              High-quality wireless headphones with noise cancellation and 30-hour battery life.
            </p>
            <div style="margin: 1rem 0;">
              <div class="ivds-tag-group">
                <span class="ivds-tag ivds-tag--success">
                  <span class="ivds-tag__text">In Stock</span>
                </span>
                <span class="ivds-tag ivds-tag--info">
                  <span class="ivds-tag__text">Free Shipping</span>
                </span>
              </div>
            </div>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--primary" style="flex: 1;">Add to Cart</button>
              <button class="ivds-button ivds-button--secondary">♡</button>
            </div>
          </div>
        </div>
        
        <div class="ivds-card">
          <div class="ivds-card__media" style="height: 200px; background: linear-gradient(45deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">
            Product Image
          </div>
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Smart Watch</h3>
            <p class="ivds-card__subtitle">$199.99</p>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">
              Feature-rich smartwatch with health monitoring and GPS tracking capabilities.
            </p>
            <div style="margin: 1rem 0;">
              <div class="ivds-tag-group">
                <span class="ivds-tag ivds-tag--warning">
                  <span class="ivds-tag__text">Low Stock</span>
                </span>
                <span class="ivds-tag ivds-tag--primary">
                  <span class="ivds-tag__text">Best Seller</span>
                </span>
              </div>
            </div>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--primary" style="flex: 1;">Add to Cart</button>
              <button class="ivds-button ivds-button--secondary">♡</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Profile Cards -->
    <div>
      <h3 style="margin-bottom: 1.5rem;">Team Member Cards</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <div class="ivds-card">
          <div class="ivds-card__header" style="text-align: center;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(45deg, #0ea5e9, #3b82f6); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 600;">
              JD
            </div>
            <h3 class="ivds-card__title">John Doe</h3>
            <p class="ivds-card__subtitle">Senior Frontend Developer</p>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">
              Passionate about creating beautiful and accessible user interfaces. 5+ years of experience with React and TypeScript.
            </p>
            <div style="margin: 1rem 0;">
              <div class="ivds-tag-group">
                <span class="ivds-tag ivds-tag--primary">
                  <span class="ivds-tag__text">React</span>
                </span>
                <span class="ivds-tag ivds-tag--success">
                  <span class="ivds-tag__text">TypeScript</span>
                </span>
                <span class="ivds-tag ivds-tag--info">
                  <span class="ivds-tag__text">Design Systems</span>
                </span>
              </div>
            </div>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--secondary" style="flex: 1;">View Profile</button>
              <button class="ivds-button ivds-button--tertiary">Message</button>
            </div>
          </div>
        </div>
        
        <div class="ivds-card">
          <div class="ivds-card__header" style="text-align: center;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(45deg, #10b981, #059669); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 600;">
              JS
            </div>
            <h3 class="ivds-card__title">Jane Smith</h3>
            <p class="ivds-card__subtitle">UX/UI Designer</p>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">
              Creative designer focused on user-centered design and design systems. Expert in Figma and user research methodologies.
            </p>
            <div style="margin: 1rem 0;">
              <div class="ivds-tag-group">
                <span class="ivds-tag ivds-tag--warning">
                  <span class="ivds-tag__text">Figma</span>
                </span>
                <span class="ivds-tag ivds-tag--error">
                  <span class="ivds-tag__text">User Research</span>
                </span>
                <span class="ivds-tag ivds-tag--info">
                  <span class="ivds-tag__text">Prototyping</span>
                </span>
              </div>
            </div>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--secondary" style="flex: 1;">View Profile</button>
              <button class="ivds-button ivds-button--tertiary">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Status Cards -->
    <div>
      <h3 style="margin-bottom: 1.5rem;">Status Cards</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
        <div class="ivds-card ivds-card--success">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">System Status</h3>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">All systems are operational and running smoothly.</p>
            <div style="margin-top: 1rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Uptime:</span>
                <span style="font-weight: 500;">99.9%</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Last Updated:</span>
                <span style="font-weight: 500;">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="ivds-card ivds-card--warning">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Maintenance Notice</h3>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST.</p>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--warning ivds-button--small">Learn More</button>
            </div>
          </div>
        </div>
        
        <div class="ivds-card ivds-card--error">
          <div class="ivds-card__header">
            <h3 class="ivds-card__title">Service Outage</h3>
          </div>
          <div class="ivds-card__body">
            <p class="ivds-card__content">Email service is currently experiencing issues. We're working on a fix.</p>
            <div class="ivds-card__actions">
              <button class="ivds-button ivds-button--danger ivds-button--small">View Status</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;