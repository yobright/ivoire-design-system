const fs = require("fs")
const path = require("path")

console.log("🧪 on test ...")

const libDir = path.join(__dirname, "../lib")

if (!fs.existsSync(libDir)) {
  console.error('❌ lib directory not found, run "yarn build" first.')
  process.exit(1)
}

const requiredFiles = ["all.css", "all.scss", "all.json", "default.css", "dark.css", "high-contrast.css", "index.cjs"]

let allFilesExist = true

requiredFiles.forEach((file) => {
  const filePath = path.join(libDir, file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`)
  } else {
    console.error(`❌ ${file} missing`)
    allFilesExist = false
  }
})

const cssFile = path.join(libDir, "all.css")
if (fs.existsSync(cssFile)) {
  const cssContent = fs.readFileSync(cssFile, "utf8")
  const variableCount = (cssContent.match(/--[\w-]+:/g) || []).length
  console.log(`✅ CSS contains ${variableCount} custom properties`)

  const essentialVars = [
    "--color-brand-primary-500",
    "--color-semantic-success-500",
    "--spacing-4",
    "--fontSize-base",
    "--shadow-md",
    "--borderRadius-md",
    "--fontWeight-medium",
  ]

  let foundVars = 0
  essentialVars.forEach((varName) => {
    if (cssContent.includes(varName)) {
      console.log(`✅ ${varName} found in CSS`)
      foundVars++
    } else {
      console.error(`❌ ${varName} missing from CSS`)
    }
  })

  console.log("\n📋 Sample of generated CSS variables:")
  const allVariables = cssContent.match(/--[\w-]+:/g) || []
  allVariables.slice(0, 10).forEach((varName) => {
    console.log(`   ${varName}`)
  })

  if (allVariables.length > 10) {
    console.log(`   ... and ${allVariables.length - 10} more`)
  }

  if (foundVars < essentialVars.length / 2) {
    allFilesExist = false
  }
}

const defaultPresetFile = path.join(libDir, "default.css")
if (fs.existsSync(defaultPresetFile)) {
  const presetContent = fs.readFileSync(defaultPresetFile, "utf8")
  const presetVars = ["--ivds-preset-surface-base", "--ivds-preset-text-primary", "--ivds-preset-interactive-primary-bg"]

  presetVars.forEach((varName) => {
    if (presetContent.includes(varName)) {
      console.log(`✅ ${varName} found in default preset`)
    } else {
      console.error(`❌ ${varName} missing from default preset`)
      allFilesExist = false
    }
  })
}

// testing CommonJS exports (using .cjs instead of .js)
const cjsFile = path.join(libDir, "index.cjs")
if (fs.existsSync(cjsFile)) {
  try {
    delete require.cache[require.resolve(cjsFile)]
    const tokens = require(cjsFile)
    console.log(`✅ CommonJS exports loaded successfully`)

    const tokenObj = tokens.default || tokens
    if (tokenObj && typeof tokenObj === "object") {
      const categories = Object.keys(tokenObj)
      console.log(`✅ Found ${categories.length} token categories`)

      console.log("\n📋 Token categories found:")
      categories.slice(0, 5).forEach((category) => {
        const subCategories = Object.keys(tokenObj[category] || {})
        console.log(`   ${category}: ${subCategories.slice(0, 3).join(", ")}${subCategories.length > 3 ? "..." : ""}`)
      })
    } else {
      console.error(`❌ Invalid token structure`)
      allFilesExist = false
    }
  } catch (error) {
    console.error(`❌ Error loading CommonJS exports: ${error.message}`)
    allFilesExist = false
  }
}

const jsonFile = path.join(libDir, "all.json")
if (fs.existsSync(jsonFile)) {
  try {
    const jsonContent = fs.readFileSync(jsonFile, "utf8")
    const tokens = JSON.parse(jsonContent)
    console.log(`✅ JSON tokens loaded successfully`)

    const categories = Object.keys(tokens)
    console.log(`✅ JSON contains ${categories.length} categories`)
  } catch (error) {
    console.error(`❌ Error parsing JSON: ${error.message}`)
    allFilesExist = false
  }
}

if (allFilesExist) {
  console.log("\n🎉 All tests passed! Design tokens are ready for publishing.")
  process.exit(0)
} else {
  console.error("\n💥 Some tests failed. Please fix the issues before publishing.")
  process.exit(1)
}
