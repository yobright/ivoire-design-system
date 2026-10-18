# Changelog

All notable changes to `@ivds/design-tokens` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.2.0] - 2026-05-16

### Added
- Official theme preset sources for `default`, `dark`, and `high-contrast`
- Dedicated preset outputs from `@ivds/design-tokens` for CSS, SCSS, JS, and JSON generation
- Initial `ivds.preset.*` token layer for surfaces, text, borders, interactive states, focus, motion, and gradients
- Expanded semantic color aliases for `surface`, `text`, `border`, and `interactive` product roles

### Fixed
- Generated JS, CommonJS, and type exports for preset files with reserved or hyphenated names
- Package JSON export entrypoint now points to the generated `all.json` artifact

## [1.0.0] - 2026-03-12

### Added
- Initial release of IVDS design tokens
- Complete color system with brand and semantic colors
- Typography tokens (font sizes, weights, line heights)
- Spacing system based on 4px/8px grid
- Shadow/elevation system with 7 levels
- Border radius tokens
- Breakpoint definitions
- Multi-format exports (CSS, SCSS, JS, JSON)
- TypeScript type definitions
- Dark mode support preparation

### Token Categories
- **Colors**: Brand (primary, secondary) and semantic (success, warning, error, info, neutral)
- **Typography**: 13 font sizes, 9 font weights, 5 line heights
- **Spacing**: 18 spacing values from 0 to 16rem
- **Shadows**: 7 elevation levels plus inner shadow
- **Border Radius**: 9 radius values from none to full
- **Breakpoints**: 6 responsive breakpoints

### Formats
- CSS custom properties
- SCSS variables
- JavaScript/TypeScript objects
- JSON for tooling integration
- Minified CSS versions
