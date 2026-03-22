// Pagination component stories for Storybook
// Showcases pagination patterns and navigation controls following Helsinki Design System patterns

import './pagination.scss';

export default {
  title: 'Core/Pagination',
  decorators: [(storyFn) => `<div style="padding: 1rem;">${storyFn()}</div>`],
  parameters: {
    docs: {
      description: {
        component: 'CSS-only pagination component using IVDS design tokens with orange primary color. Provides accessible navigation controls for paginated content with proper ARIA attributes and keyboard support, following Helsinki Design System patterns.'
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
          }
        ]
      }
    }
  }
};

// Primary pagination
export const Primary = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page" aria-label="Current page, page 2">2</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// Size variants
export const Sizes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Small</h4>
      <nav class="ivds-pagination ivds-pagination--small" aria-label="Small pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default</h4>
      <nav class="ivds-pagination" aria-label="Default pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Large</h4>
      <nav class="ivds-pagination ivds-pagination--large" aria-label="Large pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

// Layout variants
export const Layouts = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default (Spaced)</h4>
      <nav class="ivds-pagination" aria-label="Default layout pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Compact (Connected)</h4>
      <nav class="ivds-pagination ivds-pagination--compact" aria-label="Compact layout pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Rounded</h4>
      <nav class="ivds-pagination ivds-pagination--rounded" aria-label="Rounded pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

// Theme variants
export const Themes = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default Theme</h4>
      <nav class="ivds-pagination" aria-label="Default theme pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div style="background-color: #1e293b; padding: 1rem; border-radius: 0.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #e2e8f0;">Dark Theme</h4>
      <nav class="ivds-pagination ivds-pagination--theme-dark" aria-label="Dark theme pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Minimal Theme</h4>
      <nav class="ivds-pagination ivds-pagination--theme-minimal" aria-label="Minimal theme pagination">
        <ul class="ivds-pagination__list">
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
          </li>
          <li class="ivds-pagination__item">
            <span class="ivds-pagination__link ivds-pagination__link--active" aria-current="page">2</span>
          </li>
          <li class="ivds-pagination__item">
            <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

// Pagination with ellipsis
export const WithEllipsis = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__ellipsis" aria-hidden="true">…</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 8">8</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 9">9</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 10">10</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 11">11</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 12">12</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__ellipsis" aria-hidden="true">…</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 20">20</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// Simple pagination (just prev/next)
export const Simple = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__info">Page 5 of 20</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// Compact pagination
export const Compact = () => `
  <nav class="ivds-pagination ivds-pagination--compact" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 2">2</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 5">5</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// First page state
export const FirstPage = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--disabled" aria-label="Previous page (disabled)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </span>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 1">1</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 2">2</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// Last page state
export const LastPage = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 8">8</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 9">9</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 10">10</span>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--disabled" aria-label="Next page (disabled)">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </li>
    </ul>
  </nav>
`;

// Pagination with jump to first/last
export const WithFirstLast = () => `
  <nav class="ivds-pagination" aria-label="Pagination navigation">
    <ul class="ivds-pagination__list">
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--first" aria-label="Go to first page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="11,17 6,12 11,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="18,17 13,12 18,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          First
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
      </li>
      <li class="ivds-pagination__item">
        <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 5">5</span>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link" aria-label="Go to page 6">6</a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
      <li class="ivds-pagination__item">
        <a href="#" class="ivds-pagination__link ivds-pagination__link--last" aria-label="Go to last page">
          Last
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="13,17 18,12 13,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="6,17 11,12 6,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
`;

// Pagination with page size selector
export const WithPageSize = () => `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="page-size" style="font-size: 0.875rem;">Items per page:</label>
        <select id="page-size" style="padding: 0.25rem 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem;">
          <option value="10">10</option>
          <option value="25" selected>25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      
      <div style="font-size: 0.875rem; color: #6b7280;">
        Showing 26-50 of 247 results
      </div>
    </div>
    
    <nav class="ivds-pagination" aria-label="Pagination navigation">
      <ul class="ivds-pagination__list">
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Previous
          </a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
        </li>
        <li class="ivds-pagination__item">
          <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 2">2</span>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
        </li>
        <li class="ivds-pagination__item">
          <span class="ivds-pagination__ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 10">10</a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;

// Mobile responsive pagination
export const MobileResponsive = () => `
  <div style="max-width: 320px; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 0.5rem;">
    <h4 style="margin-bottom: 1rem; font-size: 0.875rem;">Mobile View (320px)</h4>
    
    <nav class="ivds-pagination ivds-pagination--mobile" aria-label="Pagination navigation">
      <ul class="ivds-pagination__list">
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </li>
        <li class="ivds-pagination__item">
          <span class="ivds-pagination__info">3 / 15</span>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;

// Accessibility example
export const AccessibilityFeatures = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <nav class="ivds-pagination" aria-label="Search results pagination" role="navigation">
      <ul class="ivds-pagination__list">
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--prev" aria-label="Go to previous page, page 2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Previous
          </a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 1">1</a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 2">2</a>
        </li>
        <li class="ivds-pagination__item">
          <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page" aria-label="Current page, page 3">3</span>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 4">4</a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link" aria-label="Go to page 5">5</a>
        </li>
        <li class="ivds-pagination__item">
          <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page, page 4">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    
    <div style="padding: 1rem; background-color: #f8fafc; border-radius: 0.5rem;">
      <h3>Accessibility Features</h3>
      <ul style="margin-top: 1rem; line-height: 1.6;">
        <li><strong>Semantic HTML:</strong> Uses proper nav, ul, li structure with role="navigation"</li>
        <li><strong>ARIA Labels:</strong> Descriptive labels for all navigation links</li>
        <li><strong>Current Page:</strong> aria-current="page" indicates active page</li>
        <li><strong>Focus Management:</strong> Proper focus indicators and keyboard navigation</li>
        <li><strong>Screen Reader Support:</strong> aria-hidden for decorative icons</li>
        <li><strong>Context:</strong> Clear indication of current position and total pages</li>
      </ul>
    </div>
  </div>
`;

// Usage examples
export const UsageExamples = () => `
  <div style="display: flex; flex-direction: column; gap: 3rem;">
    <div>
      <h4 style="margin-bottom: 1rem;">Table Pagination</h4>
      <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead style="background-color: #f8fafc;">
            <tr>
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Name</th>
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Email</th>
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">John Doe</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">john@example.com</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Admin</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Jane Smith</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">jane@example.com</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">User</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem;">Bob Johnson</td>
              <td style="padding: 0.75rem;">bob@example.com</td>
              <td style="padding: 0.75rem;">Editor</td>
            </tr>
          </tbody>
        </table>
        
        <div style="padding: 1rem; background-color: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.875rem; color: #6b7280;">
            Showing 1-3 of 47 users
          </div>
          
          <nav class="ivds-pagination ivds-pagination--compact" aria-label="User table pagination">
            <ul class="ivds-pagination__list">
              <li class="ivds-pagination__item">
                <span class="ivds-pagination__link ivds-pagination__link--disabled" aria-label="Previous page (disabled)">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </li>
              <li class="ivds-pagination__item">
                <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page">1</span>
              </li>
              <li class="ivds-pagination__item">
                <a href="#" class="ivds-pagination__link" aria-label="Go to page 2">2</a>
              </li>
              <li class="ivds-pagination__item">
                <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
              </li>
              <li class="ivds-pagination__item">
                <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem;">Search Results Pagination</h4>
      <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem;">
        <div style="margin-bottom: 1rem;">
          <h5 style="margin-bottom: 0.5rem;">Search Results for "design system"</h5>
          <p style="color: #6b7280; font-size: 0.875rem;">About 1,247 results (0.32 seconds)</p>
        </div>
        
        <div style="space-y: 1rem;">
          <div style="margin-bottom: 1rem;">
            <h6 style="color: #1d4ed8; margin-bottom: 0.25rem;">IVDS Design System Documentation</h6>
            <p style="font-size: 0.875rem; color: #6b7280;">Complete guide to using the Ivoire Design System components and tokens...</p>
          </div>
          <div style="margin-bottom: 1rem;">
            <h6 style="color: #1d4ed8; margin-bottom: 0.25rem;">Getting Started with Design Systems</h6>
            <p style="font-size: 0.875rem; color: #6b7280;">Learn how to implement and maintain a design system in your organization...</p>
          </div>
        </div>
        
        <nav class="ivds-pagination" aria-label="Search results pagination" style="margin-top: 2rem;">
          <ul class="ivds-pagination__list">
            <li class="ivds-pagination__item">
              <span class="ivds-pagination__link ivds-pagination__link--disabled">Previous</span>
            </li>
            <li class="ivds-pagination__item">
              <span class="ivds-pagination__link ivds-pagination__link--current" aria-current="page">1</span>
            </li>
            <li class="ivds-pagination__item">
              <a href="#" class="ivds-pagination__link" aria-label="Go to page 2">2</a>
            </li>
            <li class="ivds-pagination__item">
              <a href="#" class="ivds-pagination__link" aria-label="Go to page 3">3</a>
            </li>
            <li class="ivds-pagination__item">
              <span class="ivds-pagination__ellipsis">…</span>
            </li>
            <li class="ivds-pagination__item">
              <a href="#" class="ivds-pagination__link" aria-label="Go to page 25">25</a>
            </li>
            <li class="ivds-pagination__item">
              <a href="#" class="ivds-pagination__link ivds-pagination__link--next" aria-label="Go to next page">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
`;