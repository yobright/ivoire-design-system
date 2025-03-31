const dictionary = require('style-dictionary');
const PLATFORMS = ['css', 'scss'];

/**
 * Helper function that prepends the given path with the destination directory
 * and ensures that the path has a trailing slash
 */
const getPath = (path = '') => {
  const fullPath = `lib/${path}`;
  const hasTrailingSlash = fullPath.slice(-1) === '/';
  return hasTrailingSlash ? fullPath : `${fullPath}/`;
};

const getPlatformConfig = (output, buildPath) =>
  PLATFORMS.reduce(
    (acc, platform) => ({
      ...acc,
      [platform]: {
        transformGroup: `${platform}`,
        buildPath: getPath(buildPath),
        files: [{
          destination: `${output}.${platform}`,
          format: `${platform}/variables`,
          options: {
            showFileHeader: false,
          },
        }],
      },
    }),
    {}
  );

// Build the token files
Object.values({
  // All tokens
  all: dictionary.extend({
    source: ['tokens/**/*.json'],
    platforms: getPlatformConfig('all'),
  }),

  /* COLORS */

  // All colors
  allColors: dictionary.extend({
    source: ['tokens/color/*.json'],
    platforms: getPlatformConfig('all', 'color'),
  }),

  // Brand colors
  brandColors: dictionary.extend({
    source: ['tokens/color/brand.json'],
    platforms: getPlatformConfig('brand', 'color'),
  }),

  // Semantic colors
  semanticColors: dictionary.extend({
    source: ['tokens/color/semantic.json'],
    platforms: getPlatformConfig('semantic', 'color'),
  }),

  /* SPACING */

  allSpacing: dictionary.extend({
    source: ['tokens/spacing/*.json'],
    platforms: getPlatformConfig('all', 'spacing'),
  }),

  spacing: dictionary.extend({
    source: ['tokens/spacing/spacing.json'],
    platforms: getPlatformConfig('spacing', 'spacing'),
  }),

  /* TYPOGRAPHY */

  allTypography: dictionary.extend({
    source: ['tokens/typography/*.json'],
    platforms: getPlatformConfig('all', 'typography'),
  }),

  fontFamilies: dictionary.extend({
    source: ['tokens/typography/font-families.json'],
    platforms: getPlatformConfig('font-families', 'typography'),
  }),

  fontSizes: dictionary.extend({
    source: ['tokens/typography/font-sizes.json'],
    platforms: getPlatformConfig('font-sizes', 'typography'),
  }),

  /* BREAKPOINTS */

  allBreakpoints: dictionary.extend({
    source: ['tokens/breakpoints/*.json'],
    platforms: getPlatformConfig('all', 'breakpoint'),
  }),

  breakpoints: dictionary.extend({
    source: ['tokens/breakpoints/breakpoints.json'],
    platforms: getPlatformConfig('breakpoints', 'breakpoint'),
  }),

}).forEach((item) => item.buildAllPlatforms());