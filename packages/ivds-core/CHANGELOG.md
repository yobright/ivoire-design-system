# Changelog

All notable changes to the `@ivds/core` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-04-13

### Added
- SCSS styles for form components: textarea, number-input, password-input, phone-input, date-input, time-input, fieldset, selection-group, error-summary, file-input
- SCSS styles for layout components: container, columns, section, link, pagination
- SCSS styles for composite components: loading-spinner, status-label, tooltip, toggle-button, accordion, hero, highlight, linkbox, table, stepper, step-by-step, cookie-consent, logo, image-with-card, login, koros
- All new components registered in `all.scss` bundle

### Changed
- Removed legacy references from story descriptions and SCSS comments

## [1.0.0] - 2026-03-12

### Added
- Initial project structure and build system
- Base styles (reset, typography, layout)
- Utility classes (spacing, typography, layout, grid, flexbox)
- Icon system with base styling
- Design token integration structure
- PostCSS build pipeline with SCSS support
- Stylelint configuration with BEM methodology
- Jest testing setup for SCSS
- Storybook configuration for component documentation
- Production-ready build scripts and size monitoring
