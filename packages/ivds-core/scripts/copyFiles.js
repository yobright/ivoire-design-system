#!/usr/bin/env node

/**
 * Copy SCSS partial files to lib directory
 * This script copies SCSS partials (files starting with _) to the lib directory
 * for distribution, allowing consumers to import mixins and variables.
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Parse command line arguments
const args = process.argv.slice(2);
let sourcePattern = '';
let targetDir = '';
let verbose = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '-source' && i + 1 < args.length) {
    sourcePattern = args[i + 1];
    i++;
  } else if (args[i] === '-target' && i + 1 < args.length) {
    targetDir = args[i + 1];
    i++;
  } else if (args[i] === '-v' || args[i] === '--verbose') {
    verbose = true;
  }
}

if (!sourcePattern || !targetDir) {
  console.error('Usage: node copyFiles.js -source <pattern> -target <directory> [-v]');
  process.exit(1);
}

async function copyFiles() {
  try {
    // Find all files matching the pattern
    const files = await glob(sourcePattern, { cwd: process.cwd() });
    
    if (verbose) {
      console.log(`Found ${files.length} files matching pattern: ${sourcePattern}`);
    }

    // Ensure target directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      if (verbose) {
        console.log(`Created directory: ${targetDir}`);
      }
    }

    // Copy each file
    for (const file of files) {
      const fileName = path.basename(file);
      const targetPath = path.join(targetDir, fileName);
      
      // Create subdirectories if needed
      const targetSubDir = path.dirname(targetPath);
      if (!fs.existsSync(targetSubDir)) {
        fs.mkdirSync(targetSubDir, { recursive: true });
      }

      fs.copyFileSync(file, targetPath);
      
      if (verbose) {
        console.log(`Copied: ${file} -> ${targetPath}`);
      }
    }

    console.log(`Successfully copied ${files.length} files to ${targetDir}`);
  } catch (error) {
    console.error('Error copying files:', error.message);
    process.exit(1);
  }
}

copyFiles();