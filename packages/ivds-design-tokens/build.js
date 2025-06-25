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

  // Colors only
  {
    source: ["tokens/color/*.json"],
    platforms: getPlatformConfig("colors", "color"),
  },

  // Typography only
  {
    source: ["tokens/typography/*.json"],
    platforms: getPlatformConfig("typography", "typography"),
  },

  // Spacing only
  {
    source: ["tokens/spacing/*.json"],
    platforms: getPlatformConfig("spacing", "spacing"),
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

  // Breakpoints only
  {
    source: ["tokens/breakpoints/*.json"],
    platforms: getPlatformConfig("breakpoints", "breakpoint"),
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
