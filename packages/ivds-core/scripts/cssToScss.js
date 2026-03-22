#!/usr/bin/env node

/**
 * Core has no scss mixins exported, so importing parts of a CSS file to React cannot be done.
 * This converts .className to @mixin className for better SCSS integration.
 */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const classesToMixins = require('postcss-classes-to-mixins');

// Paths point to the folder the file is run from!
// Which is usually packages/ivds-core if run via package.json
const inputPath = 'src/';
const outputPath = 'lib/scss/';
// Add files here if you need to convert CSS classes to SCSS mixins
const files = [];
// Example: const files = ['utils/helpers.css'];

/**
 * Changes path/to/file.ext to file.ext
 */
function removePaths(file) {
  return file.split('/').pop();
}

/**
 * Changes path/to/file/with.any.ext to path/to/file/with.newExt
 */
function createNewFileExt(file, ext) {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + ext);
}

/**
 * Creates a dir if it does not exist
 */
function createDirIfDoesNotExist(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function cssToScss() {
  const fileLog = ['Converting CSS to SCSS mixins...'];
  
  if (files.length === 0) {
    fileLog.push('ℹ No files configured for conversion. Edit scripts/cssToScss.js to add files.');
    console.log(fileLog.join('\n'));
    return;
  }
  
  createDirIfDoesNotExist(outputPath);
  
  for (const file of files) {
    const inputFilename = `${inputPath}${file}`;
    
    // Skip if file doesn't exist
    if (!fs.existsSync(inputFilename)) {
      fileLog.push(`⚠ Skipped ${inputFilename} (file not found)`);
      continue;
    }
    
    const outputFilename = createNewFileExt(`${outputPath}${removePaths(file)}`, '.scss');
    const css = fs.readFileSync(inputFilename);

    await postcss([
      classesToMixins({
        scss: outputFilename,
        mixinsOnly: true, // Strips all non-classname selectors
      }),
    ])
      .process(css, { from: 'undefined' })
      .then(() => {
        fileLog.push(`✓ Processed ${inputFilename} → ${outputFilename}`);
      })
      .catch((error) => {
        fileLog.push(`✗ Error processing ${inputFilename}: ${error.message}`);
      });
  }
  
  console.log(fileLog.join('\n'));
}

cssToScss();
