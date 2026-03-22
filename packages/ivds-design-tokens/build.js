const StyleDictionary = require("style-dictionary")

StyleDictionary.registerTransform({
  name: "name/cti/kebab",
  type: "name",
  transformer: (token, options) => {
    return token.path.join("-")
  },
})

StyleDictionary.registerTransform({
  name: "size/rem",
  type: "value",
  matcher: (token) => {
    return token.path.includes("spacing") || token.path.includes("fontSize") || token.path.includes("borderRadius")
  },
  transformer: (token) => {
    const value = token.original.value
    if (typeof value === "string") {
      return value
    }
    return value + "rem"
  },
})

StyleDictionary.registerFormat({
  name: "css/variables-with-references",
  formatter: (dictionary) => {
    const header = `/**
 * IVDS Design Tokens
 * Generated on ${new Date().toISOString()}
 */

:root {`

    const variables = dictionary.allTokens.map((token) => `  --${token.name}: ${token.value};`).join("\n")

    const footer = "\n}"

    return header + "\n" + variables + footer
  },
})

StyleDictionary.registerFormat({
  name: "javascript/es6",
  formatter: (dictionary) => {
    const tokens = dictionary.allTokens.reduce((acc, token) => {
      const keys = token.path
      let current = acc

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {}
        }
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = token.value
      return acc
    }, {})

    return `// Auto-generated design tokens
export const tokens = ${JSON.stringify(tokens, null, 2)};
export default tokens;`
  },
})

StyleDictionary.registerTransformGroup({
  name: "css/custom",
  transforms: ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/css"],
})

StyleDictionary.registerTransformGroup({
  name: "scss/custom",
  transforms: ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/css"],
})

/**
 * Helper function, ajoute le rep de dest au chemin d'acc
 */
const getPath = (path = "") => {
  const fullPath = `lib/${path}`
  const hasTrailingSlash = fullPath.slice(-1) === "/"
  return hasTrailingSlash ? fullPath : `${fullPath}/`
}

const getPlatformConfig = (output, buildPath = "") => ({
  css: {
    transformGroup: "css/custom",
    buildPath: getPath(buildPath),
    files: [
      {
        destination: `${output}.css`,
        format: "css/variables-with-references",
        options: {
          showFileHeader: true,
        },
      },
    ],
  },
  scss: {
    transformGroup: "scss/custom",
    buildPath: getPath(buildPath),
    files: [
      {
        destination: `${output}.scss`,
        format: "scss/variables",
        options: {
          showFileHeader: true,
        },
      },
    ],
  },
  js: {
    transformGroup: "js",
    buildPath: getPath(buildPath),
    files: [
      {
        destination: `${output}.js`,
        format: "javascript/es6",
      },
    ],
  },
  json: {
    transformGroup: "js",
    buildPath: getPath(buildPath),
    files: [
      {
        destination: `${output}.json`,
        format: "json/nested",
      },
    ],
  },
})

// Build configurations
const configs = [
  // All tokens
  {
    source: ["tokens/**/*.json"],
    platforms: getPlatformConfig("all"),
  },

  // Spacing - component level
  {
    source: ["tokens/spacing/component.json"],
    platforms: getPlatformConfig("component", "spacing"),
  },

  // Spacing - layout level
  {
    source: ["tokens/spacing/layout.json"],
    platforms: getPlatformConfig("layout", "spacing"),
  },

  // Spacing - legacy (for backwards compatibility)
  {
    source: ["tokens/spacing/spacing.json"],
    platforms: getPlatformConfig("spacing", "spacing"),
  },

  // Colors - brand orange (primary)
  {
    source: ["tokens/color/brand/orange.json"],
    platforms: getPlatformConfig("orange", "color/brand"),
  },

  // Colors - brand green (secondary)
  {
    source: ["tokens/color/brand/green.json"],
    platforms: getPlatformConfig("green", "color/brand"),
  },

  // Colors - brand cocoa
  {
    source: ["tokens/color/brand/cocoa.json"],
    platforms: getPlatformConfig("cocoa", "color/brand"),
  },

  // Colors - brand gold
  {
    source: ["tokens/color/brand/gold.json"],
    platforms: getPlatformConfig("gold", "color/brand"),
  },

  // Colors - brand lagoon
  {
    source: ["tokens/color/brand/lagoon.json"],
    platforms: getPlatformConfig("lagoon", "color/brand"),
  },

  // Colors - brand all
  {
    source: ["tokens/color/brand/**/*.json"],
    platforms: getPlatformConfig("brand", "color"),
  },

  // Colors - UI base
  {
    source: ["tokens/color/ui/base.json"],
    platforms: getPlatformConfig("base", "color/ui"),
  },

  // Colors - UI feedback
  {
    source: ["tokens/color/ui/feedback.json"],
    platforms: getPlatformConfig("feedback", "color/ui"),
  },

  // Colors - UI all
  {
    source: ["tokens/color/ui/**/*.json"],
    platforms: getPlatformConfig("ui", "color"),
  },

  // Colors - all (legacy)
  {
    source: ["tokens/color/**/*.json"],
    platforms: getPlatformConfig("colors", "color"),
  },

  // Typography only
  {
    source: ["tokens/typography/*.json"],
    platforms: getPlatformConfig("typography", "typography"),
  },

  // Elevation only
  {
    source: ["tokens/elevation/*.json"],
    platforms: getPlatformConfig("elevation", "elevation"),
  },

  // Border only
  {
    source: ["tokens/border/*.json"],
    platforms: getPlatformConfig("border", "border"),
  },

  // Breakpoints
  {
    source: ["tokens/breakpoint/breakpoint.json"],
    platforms: getPlatformConfig("breakpoint", "breakpoint"),
  },

  // Container widths (NEW!)
  {
    source: ["tokens/breakpoint/container-width.json"],
    platforms: getPlatformConfig("container-width", "breakpoint"),
  },

  // Animation only
  {
    source: ["tokens/animation/*.json"],
    platforms: getPlatformConfig("animation", "animation"),
  },

  // Opacity
  {
    source: ["tokens/opacity/*.json"],
    platforms: getPlatformConfig("opacity", "opacity"),
  },

  // Z-index
  {
    source: ["tokens/zindex/*.json"],
    platforms: getPlatformConfig("zindex", "zindex"),
  },
]

// Build all configurations
console.log("🔨 Building design tokens...")

configs.forEach((config, index) => {
  console.log(`Building configuration ${index + 1}/${configs.length}...`)
  const sd = StyleDictionary.extend(config)
  sd.buildAllPlatforms()
})

console.log("✅ Design tokens built successfully!")
