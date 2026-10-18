const fs = require("fs")
const path = require("path")

const libDir = path.join(__dirname, "../lib")
const outputFile = path.join(libDir, "index.js")
const outputDtsFile = path.join(libDir, "index.d.ts")
const outputCjsFile = path.join(libDir, "index.cjs")

const jsonFiles = fs
  .readdirSync(libDir)
  .filter((file) => file.endsWith(".json"))
  .filter((file) => file !== "tokens.json")

let allTokens = {}

jsonFiles.forEach((file) => {
  const filePath = path.join(libDir, file)
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"))
  const fileName = path.basename(file, ".json")
  allTokens[fileName] = content
})

const mainTokensFile = path.join(libDir, "all.json")
if (fs.existsSync(mainTokensFile)) {
  const mainTokens = JSON.parse(fs.readFileSync(mainTokensFile, "utf8"))
  allTokens = { ...allTokens, ...mainTokens }
}

const reservedIdentifiers = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
])

const exportNameOverrides = {
  default: "defaultPreset",
}

const toIdentifier = (key) => {
  const normalized = key
    .replace(/[^a-zA-Z0-9_$]+(.)/g, (_, character) => (character ? character.toUpperCase() : ""))
    .replace(/[^a-zA-Z0-9_$]/g, "")

  const baseIdentifier = normalized || "tokens"
  const prefixedIdentifier = /^\d/.test(baseIdentifier) ? `_${baseIdentifier}` : baseIdentifier

  if (reservedIdentifiers.has(prefixedIdentifier)) {
    return `${prefixedIdentifier}Tokens`
  }

  return prefixedIdentifier
}

const toTypePropertyKey = (key) => {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) && !reservedIdentifiers.has(key)) {
    return key
  }

  return JSON.stringify(key)
}

const usedExportNames = new Set(["tokens"])
const namedExports = Object.keys(allTokens).map((key) => {
  const preferredName = exportNameOverrides[key] || toIdentifier(key)
  let exportName = preferredName
  let counter = 2

  while (usedExportNames.has(exportName)) {
    exportName = `${preferredName}${counter}`
    counter += 1
  }

  usedExportNames.add(exportName)
  return { key, exportName }
})

const jsContent = `// Auto-generated design tokens
export const tokens = ${JSON.stringify(allTokens, null, 2)};

// Individual token exports
${namedExports
    .map(({ key, exportName }) => `export const ${exportName} = tokens[${JSON.stringify(key)}];`)
    .join("\n")}

export default tokens;
`

// Generate CommonJS file
const cjsContent = `// Auto-generated design tokens (CommonJS)
const tokens = ${JSON.stringify(allTokens, null, 2)};

module.exports = tokens;
module.exports.tokens = tokens;
module.exports.default = tokens;

// Individual token exports
${namedExports
    .map(({ key, exportName }) => `module.exports[${JSON.stringify(key)}] = tokens[${JSON.stringify(key)}];\nmodule.exports.${exportName} = tokens[${JSON.stringify(key)}];`)
    .join("\n")}
`

const generateInterface = (obj, name = "TokenValue", depth = 0) => {
  if (depth > 10) return "any"

  if (typeof obj === "string" || typeof obj === "number") {
    return "string | number"
  }

  if (Array.isArray(obj)) {
    return "any[]"
  }

  if (typeof obj === "object" && obj !== null) {
    const entries = Object.entries(obj)
    if (entries.length === 0) return "{}"

    const properties = entries
      .map(([key, value]) => {
        const type = generateInterface(value, `${name}${key.charAt(0).toUpperCase() + key.slice(1)}`, depth + 1)
        return `  ${toTypePropertyKey(key)}: ${type};`
      })
      .join("\n")

    return `{\n${properties}\n}`
  }

  return "any"
}

const dtsContent = `// Auto-generated design tokens type definitions
export interface Tokens ${generateInterface(allTokens, "Tokens")}

export declare const tokens: Tokens;

${namedExports
    .map(({ key, exportName }) => `export declare const ${exportName}: Tokens[${JSON.stringify(key)}];`)
    .join("\n")}

export default tokens;
`

// Write files
fs.writeFileSync(outputFile, jsContent)
fs.writeFileSync(outputCjsFile, cjsContent)
fs.writeFileSync(outputDtsFile, dtsContent)

console.log("✅ JavaScript/TypeScript exports generated successfully!")
console.log(`   - ES6 modules: ${path.relative(process.cwd(), outputFile)}`)
console.log(`   - CommonJS: ${path.relative(process.cwd(), outputCjsFile)}`)
console.log(`   - TypeScript: ${path.relative(process.cwd(), outputDtsFile)}`)
