// Footer component stories for Storybook
// Showcases footer layouts, multi-column organization, and responsive stacking patterns

export default {
  title: 'Core/Footer',
  parameters: {
    docs: {
      description: {
        component: 'CSS-only footer component using IVDS design tokens. Provides flexible multi-column layout options with responsive stacking, proper semantic structure, and accessibility features. Includes mixins for different column layouts and theming.'
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
            id: 'landmark-one-main',
            enabled: false // Footer is not main content
          }
        ]
      }
    }
  }
};

// Basic footer
export const Basic = () => `
  <footer class="ivds-footer">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Company</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">About Us</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Careers</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Products</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Design System</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Components</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Templates</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Support</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Documentation</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Help Center</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Community</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Comprehensive footer
export const Comprehensive = () => `
  <footer class="ivds-footer">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Company</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">About Us</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Our Team</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Careers</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Press</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Products</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Design Tokens</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Core Styles</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">React Components</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Templates</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Figma Kit</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Resources</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Documentation</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Getting Started</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Examples</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Blog</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Changelog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Support</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Help Center</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Community</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">GitHub</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Report Issues</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Feature Requests</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 Ivoire Design System. All rights reserved. | 
          <a href="#" class="ivds-footer__section-link">Privacy Policy</a> | 
          <a href="#" class="ivds-footer__section-link">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
`;

// Simple footer
export const Simple = () => `
  <footer class="ivds-footer">
    <div class="ivds-footer__content">
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. Built with ❤️ for the community.</p>
      </div>
    </div>
  </footer>
`;

// Footer with social links
export const WithSocialLinks = () => `
  <footer class="ivds-footer">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Company</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">About</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Careers</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Follow Us</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link" aria-label="Follow us on Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem; vertical-align: middle;">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
                Twitter
              </a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link" aria-label="Follow us on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem; vertical-align: middle;">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link" aria-label="Follow us on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem; vertical-align: middle;">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Newsletter</h3>
          <p style="margin-bottom: 1rem; font-size: 0.875rem;">Stay updated with our latest releases and news.</p>
          <div style="display: flex; gap: 0.5rem;">
            <input 
              type="email" 
              placeholder="Enter your email" 
              style="flex: 1; padding: 0.5rem; border: 1px solid #475569; border-radius: 0.25rem; background-color: #1e293b; color: #cbd5e1;"
              aria-label="Email address for newsletter"
            />
            <button 
              style="padding: 0.5rem 1rem; background-color: #0ea5e9; color: white; border: none; border-radius: 0.25rem; cursor: pointer;"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Two column layout
export const TwoColumns = () => `
  <footer class="ivds-footer ivds-footer--two-columns">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <div class="ivds-footer__brand">
            <svg class="ivds-footer__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#e27c10"/>
              <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
            </svg>
            <h3 class="ivds-footer__brand-name">IVDS</h3>
            <p class="ivds-footer__brand-description">
              A comprehensive design system built for modern web applications. 
              Create consistent, accessible, and beautiful user interfaces.
            </p>
          </div>
          
          <div class="ivds-footer__social">
            <a href="#" aria-label="Follow us on Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Follow us on GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="#" aria-label="Follow us on LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Quick Links</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <ul class="ivds-footer__section-list">
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Components</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Design Tokens</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Documentation</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Examples</a>
              </li>
            </ul>
            <ul class="ivds-footer__section-list">
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">About</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Blog</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Support</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Light theme footer
export const LightTheme = () => `
  <footer class="ivds-footer ivds-footer--light">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Company</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">About Us</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Careers</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Press</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Products</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Design System</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Components</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Templates</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Resources</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Support</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Documentation</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Help Center</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Community</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact Support</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Minimal footer
export const Minimal = () => `
  <footer class="ivds-footer ivds-footer--minimal">
    <div class="ivds-footer__content">
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. Built with ❤️ for developers everywhere.</p>
      </div>
    </div>
  </footer>
`;

// Footer with newsletter signup
export const WithNewsletter = () => `
  <footer class="ivds-footer">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Company</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">About</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Careers</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Resources</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Documentation</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Examples</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Stay Updated</h3>
          <div class="ivds-footer__newsletter">
            <p class="ivds-footer__newsletter-description">
              Get the latest updates on new components, design tokens, and best practices.
            </p>
            <form class="ivds-footer__newsletter-form" aria-label="Newsletter signup">
              <input 
                type="email" 
                class="ivds-footer__newsletter-input"
                placeholder="Enter your email" 
                aria-label="Email address for newsletter"
                required
              />
              <button 
                type="submit"
                class="ivds-footer__newsletter-button"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Five column layout
export const FiveColumns = () => `
  <footer class="ivds-footer ivds-footer--five-columns">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Products</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Design Tokens</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Core Styles</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">React Components</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Resources</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Documentation</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Getting Started</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Examples</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Community</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">GitHub</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Discord</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Discussions</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Support</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Help Center</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Contact</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Bug Reports</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Legal</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Privacy</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Terms</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">License</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Mobile responsive view
export const MobileView = () => `
  <div style="max-width: 375px; margin: 0 auto; border: 1px solid #374151; border-radius: 0.5rem; overflow: hidden;">
    <footer class="ivds-footer">
      <div class="ivds-footer__content">
        <div class="ivds-footer__grid">
          <div>
            <div class="ivds-footer__brand">
              <svg class="ivds-footer__brand-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#e27c10"/>
                <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h10v2H8v-2z" fill="white"/>
              </svg>
              <h3 class="ivds-footer__brand-name">IVDS</h3>
              <p class="ivds-footer__brand-description">
                A comprehensive design system for modern applications.
              </p>
            </div>
          </div>
          
          <div>
            <h3 class="ivds-footer__section-title">Quick Links</h3>
            <ul class="ivds-footer__section-list">
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Components</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Documentation</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="ivds-footer__section-title">Connect</h3>
            <div class="ivds-footer__social">
              <a href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="ivds-footer__bottom">
          <p>&copy; 2024 IVDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <div style="padding: 1rem; background-color: #1e293b; color: #cbd5e1; text-align: center; font-size: 0.875rem;">
      Mobile view (375px width) - Columns stack vertically
    </div>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <footer class="ivds-footer" role="contentinfo">
    <div class="ivds-footer__content">
      <div class="ivds-footer__grid">
        <div>
          <h3 class="ivds-footer__section-title">Navigation</h3>
          <nav aria-label="Footer navigation">
            <ul class="ivds-footer__section-list">
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Home</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">About</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Services</a>
              </li>
              <li class="ivds-footer__section-item">
                <a href="#" class="ivds-footer__section-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Legal</h3>
          <ul class="ivds-footer__section-list">
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Privacy Policy</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Terms of Service</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Cookie Policy</a>
            </li>
            <li class="ivds-footer__section-item">
              <a href="#" class="ivds-footer__section-link">Accessibility Statement</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="ivds-footer__section-title">Contact Information</h3>
          <address>
            <p>
              <strong>Email:</strong> 
              <a href="mailto:hello@ivds.com" class="ivds-footer__section-link">hello@ivds.com</a>
            </p>
            <p>
              <strong>Phone:</strong> 
              <a href="tel:+1234567890" class="ivds-footer__section-link">+1 (234) 567-890</a>
            </p>
            <p>
              <strong>Address:</strong><br>
              123 Design Street<br>
              UI City, UX 12345
            </p>
          </address>
        </div>
      </div>
      
      <div class="ivds-footer__bottom">
        <p>&copy; 2024 IVDS. All rights reserved. This site follows WCAG 2.1 AA accessibility guidelines.</p>
      </div>
    </div>
  </footer>
  
  <div style="padding: 2rem; background-color: #1e293b; color: #cbd5e1;">
    <h2 style="color: #f1f5f9; margin-bottom: 1rem;">Accessibility Features</h2>
    <ul style="line-height: 1.6;">
      <li><strong>Semantic HTML:</strong> Uses proper footer, nav, and address elements</li>
      <li><strong>ARIA Labels:</strong> Navigation sections have descriptive labels</li>
      <li><strong>Focus Management:</strong> All interactive elements have visible focus indicators</li>
      <li><strong>Color Contrast:</strong> Meets WCAG AA standards for text contrast</li>
      <li><strong>Responsive Design:</strong> Content reflows properly on mobile devices</li>
      <li><strong>Screen Reader Support:</strong> Proper heading hierarchy and semantic structure</li>
      <li><strong>Keyboard Navigation:</strong> All links and buttons are keyboard accessible</li>
    </ul>
  </div>
`;