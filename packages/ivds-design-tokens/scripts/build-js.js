const fs = require("fs")
const path = require("path")

const libDir = path.join(__dirname, "../lib")
const outputFile = path.join(libDir, "index.js")
const outputDtsFile = path.join(libDir, "index.d.ts")

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

const jsContent = `// auto-gen design tokens
export const tokens = ${JSON.stringify(allTokens, null, 2)};

// Individual token exports
${Object.keys(allTokens)
    .map((key) => `export const ${key} = tokens.${key};`)
    .join("\n")}

export default tokens;
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
        return `  ${key}: ${type};`
      })
      .join("\n")

    return `{\n${properties}\n}`
  }

  return "any"
}

const dtsContent = `// auto-gen design tokens type definitions
export interface Tokens ${generateInterface(allTokens, "Tokens")}

export declare const tokens: Tokens;

${Object.keys(allTokens)
    .map((key) => `export declare const ${key}: Tokens['${key}'];`)
    .join("\n")}

export default tokens;
`

fs.writeFileSync(outputFile, jsContent)
fs.writeFileSync(outputDtsFile, dtsContent)

const cjsContent = `// auto-gen design tokens (CommonJS)
const tokens = ${JSON.stringify(allTokens, null, 2)};

// individual token exports
${Object.keys(allTokens)
    .map((key) => `module.exports.${key} = tokens.${key};`)
    .join("\n")}

module.exports.tokens = tokens;
module.exports.default = tokens;
`

fs.writeFileSync(path.join(libDir, "index.cjs"), cjsContent)

console.log("✅ JavaScript/TypeScript exports successfully generated bruh!")
