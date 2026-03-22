#!/usr/bin/env node

/**
 * Converts CSS files to importable TypeScript/JavaScript strings.
 * This is useful for components that need to inject styles dynamically.
 * 
 * Args:
 *  - "-d" or "--directory" glob pattern to find CSS files
 *  - "-t" or "--targetFiles" comma-separated list of specific files to process
 *  - "-v" verbose output
 */

const { glob } = require('glob');
const fs = require('fs/promises');
const path = require('path');

/**
 * Convert CSS content to a JavaScript/TypeScript exportable string
 */
function cssToJsString(cssContent, filename) {
  const escapedCss = cssContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
  
  const baseName = path.basename(filename, path.extname(filename));
  
  return `/**
 * Auto-generated CSS string for ${filename}
 * Do not edit manually
 */
export const ${baseName.replace(/[.-]/g, '_')}Css = \`${escapedCss}\`;
`;
}

/**
 * Process CSS files and create .ts files with exported strings
 */
async function processFiles(args) {
  const { directory, targetFiles, verbose } = args;
  
  if (!directory) {
    console.error('Error: --directory argument is required');
    process.exit(1);
  }

  const targetFileList = targetFiles ? targetFiles.split(',').map(f => f.trim()) : [];
  const files = await glob(directory);
  
  let processedCount = 0;
  
  for (const filePath of files) {
    const fileName = path.basename(filePath);
    
    // If targetFiles specified, only process those
    if (targetFileList.length > 0 && !targetFileList.includes(fileName)) {
      continue;
    }
    
    try {
      const cssContent = await fs.readFile(filePath, 'utf-8');
      const jsContent = cssToJsString(cssContent, fileName);
      const outputPath = filePath.replace(/\.css$/, '.css.ts');
      
      await fs.writeFile(outputPath, jsContent, 'utf-8');
      
      if (verbose) {
        console.log(`✓ Converted ${filePath} → ${outputPath}`);
      }
      
      processedCount++;
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\n✓ Processed ${processedCount} CSS file(s) to importable strings`);
}

/**
 * Parse command line arguments
 */
function parseArgs(argv) {
  let pendingArg = '';
  const argNameMap = {
    v: 'verbose',
    d: 'directory',
    directory: 'directory',
    t: 'targetFiles',
    targetFiles: 'targetFiles',
  };
  
  const result = argv.slice(2).reduce((obj, value) => {
    if (value.startsWith('-')) {
      pendingArg = value.replace(/^-+/, '');
    } else if (pendingArg) {
      const mappedKey = argNameMap[pendingArg] || pendingArg;
      obj[mappedKey] = value;
      pendingArg = '';
    }
    return obj;
  }, {});
  
  if (pendingArg) {
    const mappedKey = argNameMap[pendingArg] || pendingArg;
    result[mappedKey] = true;
  }
  
  return result;
}

// Run the script
processFiles(parseArgs(process.argv)).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
