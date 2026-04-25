# Changelog

All notable changes to the `@ivds/react` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-04-13

### Added
- Form components: TextArea, NumberInput, PasswordInput, PhoneInput, DateInput, TimeInput, Fieldset, SelectionGroup, ErrorSummary, FileInput
- Layout components: Container, Columns, Section, Link, Pagination
- Composite components: LoadingSpinner, StatusLabel, Tooltip, ToggleButton, Accordion, Hero, Highlight, Linkbox, Table, Stepper, StepByStep, CookieConsent, Logo, ImageWithCard, Login, Koros
- SideNavigation component
- Storybook stories for all new components
- 16 new test suites (172 total tests)

### Fixed
- Alert test: corrected role expectation for non-error variants
- Tag test: aligned with inner button rendering for interactive tags
- Card test: aligned with button element for interactive cards and compact class
- TextInput test: corrected BEM class for required label
- Select test: corrected required indicator class selector
- Checkbox test: corrected BEM class for required label

### Changed
- Full test suite now passes: 37 suites, 172 tests, 0 failures

## [1.0.0] - 2026-03-12

### Added
- Initial React component library setup
- TypeScript configuration and build system
- ESLint and Jest configuration
- Storybook setup for React components
- Package structure and documentation
- Initial release of IVDS React components
- Core form components (Button, TextInput, Checkbox, RadioButton)
- Layout components (Card, Notification, Tag)
- Theme provider and customization system
- TypeScript support with comprehensive type definitions
- Accessibility features following WCAG 2.1 AA guidelines
- Storybook documentation and examples
