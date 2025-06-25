const fs = require("fs")
const path = require("path")

console.log("🧪 on test ...")

const libDir = path.join(__dirname, "../lib")

if (!fs.existsSync(libDir)) {
  console.error('❌ lib directory not found, run "yarn build" first.')
  process.exit(1)
}

// Check required files
const requiredFiles = ["all.css", "all.scss", "all.json", "index.js", "index.d.ts", "index.cjs"]

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

// Testing CSS variables
const cssFile = path.join(libDir, "all.css")
if (fs.existsSync(cssFile)) {
  const cssContent = fs.readFileSync(cssFile, "utf8")
  const variableCount = (cssContent.match(/--[\w-]+:/g) || []).length
  console.log(`✅ CSS contains ${variableCount} custom properties`)

  // Check for essential variables based on the actual token structure
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

      const category = varName.split("-")[1] // getting categ like 'color', 'spacing', etc..
      const pattern = new RegExp(`--${category}-[\\w-]+:`, "g")
      const similarVars = cssContent.match(pattern) || []

      if (similarVars.length > 0) {
        console.log(
          `   💡 Similar ${category} vars found: ${similarVars.slice(0, 5).join(", ")}${similarVars.length > 5 ? "..." : ""}`,
        )
      }
    }
  })

  // for debugging purpose
  console.log("\n📋 Sample of generated CSS variables:")
  const allVariables = cssContent.match(/--[\w-]+:/g) || []
  allVariables.slice(0, 15).forEach((varName) => {
    console.log(`   ${varName}`)
  })

  if (allVariables.length > 15) {
    console.log(`   ... and ${allVariables.length - 15} more`)
  }

  if (foundVars < essentialVars.length / 2) {
    allFilesExist = false
  }
}

// Test JavaScript exports
const jsFile = path.join(libDir, "index.js")
if (fs.existsSync(jsFile)) {
  try {
    const tokens = require(jsFile)
    console.log(`✅ JavaScript exports loaded successfully`)

    const tokenObj = tokens.default || tokens
    const categories = Object.keys(tokenObj)
    console.log(`✅ Found ${categories.length} token categories`)

    console.log("\n📋 Token categories found:")
    categories.forEach((category) => {
      const subCategories = Object.keys(tokenObj[category] || {})
      console.log(`   ${category}: ${subCategories.slice(0, 3).join(", ")}${subCategories.length > 3 ? "..." : ""}`)
    })
  } catch (error) {
    console.error(`❌ Error loading JavaScript exports: ${error.message}`)
    allFilesExist = false
  }
}

if (allFilesExist) {
  console.log("\n🎉 tests passed! IVDS Design tokens are ready for publishing.")
  process.exit(0)
} else {
  console.error("\n💥 Some tests failed. fix issues before publishing !")
  process.exit(1)
}
