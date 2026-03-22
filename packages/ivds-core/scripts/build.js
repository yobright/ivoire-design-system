#!/usr/bin/env node

/**
 * Build script for IVDS Core
 * Compiles SCSS files to CSS using PostCSS
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const postcss = require('postcss');
const postcssScss = require('postcss-scss');
const postcssConfig = require('../postcss.config.js');

async function buildCSS() {
  try {
    console.log('🏗️  Building IVDS Core CSS...');
    
    const isProduction = process.env.NODE_ENV === 'production';
    console.log(`📦 Environment: ${isProduction ? 'production' : 'development'}`);
    
    // Suppress Sass deprecation warnings in production
    if (isProduction) {
      process.env.SASS_SILENCE_DEPRECATIONS = 'legacy-js-api,import';
    }
    
    // Ensure lib directory exists
    const libDir = path.join(__dirname, '..', 'lib');
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }

    // Find all SCSS and CSS files (excluding partials that start with _)
    const srcDir = path.join(__dirname, '..', 'src');
    const files = await glob('**/*.{css,scss}', { 
      cwd: srcDir,
      ignore: ['**/_*.scss', '**/__tests__/**/*']
    });
    
    console.log(`📁 Found ${files.length} files to process`);
    
    if (files.length === 0) {
      console.warn('⚠️  No files found to process. Check your src directory structure.');
      return;
    }

    let processedCount = 0;
    let totalSize = 0;
    let totalMinSize = 0;

    // Process each file
    for (const file of files) {
      try {
        const inputPath = path.join(srcDir, file);
        const outputPath = path.join(libDir, file.replace(/\.scss$/, '.css'));
        const minOutputPath = path.join(libDir, file.replace(/\.scss$/, '.min.css').replace(/\.css$/, '.min.css').replace(/\.min\.min\.css$/, '.min.css'));
        
        // Ensure output directory exists
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Read source file
        const css = fs.readFileSync(inputPath, 'utf8');
        
        // Process with PostCSS (normal version)
        const config = postcssConfig({ env: 'development' });
        const processor = postcss(config.plugins);
        const result = await processor.process(css, {
          from: inputPath,
          to: outputPath,
          parser: postcssScss
        });
        
        // Write normal CSS
        fs.writeFileSync(outputPath, result.css);
        const normalSize = Buffer.byteLength(result.css, 'utf8');
        totalSize += normalSize;
        
        console.log(`✅ ${file} -> ${path.relative(process.cwd(), outputPath)} (${formatBytes(normalSize)})`);
        
        // Process minified version
        const minConfig = postcssConfig({ env: 'minify' });
        const minProcessor = postcss(minConfig.plugins);
        const minResult = await minProcessor.process(css, {
          from: inputPath,
          to: minOutputPath,
          parser: postcssScss
        });
        
        // Write minified CSS
        fs.writeFileSync(minOutputPath, minResult.css);
        const minSize = Buffer.byteLength(minResult.css, 'utf8');
        totalMinSize += minSize;
        
        console.log(`✅ ${file} -> ${path.relative(process.cwd(), minOutputPath)} (${formatBytes(minSize)})`);
        
        processedCount++;
      } catch (fileError) {
        console.error(`❌ Failed to process ${file}:`, fileError.message);
        if (isProduction) {
          throw fileError; // Fail fast in production
        }
      }
    }
    
    // Generate special distribution bundles
    await generateDistributionBundles(libDir);
    
    console.log('\n📊 Build Summary:');
    console.log(`   Files processed: ${processedCount}/${files.length}`);
    console.log(`   Total CSS size: ${formatBytes(totalSize)}`);
    console.log(`   Total minified size: ${formatBytes(totalMinSize)}`);
    console.log(`   Compression ratio: ${((1 - totalMinSize / totalSize) * 100).toFixed(1)}%`);
    console.log('🎉 Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

async function generateDistributionBundles(libDir) {
  console.log('\n📦 Generating distribution bundles...');
  
  try {
    // Create utility-only bundle
    await createUtilityOnlyBundle(libDir);
    
    // Create components-only bundle (already exists as components/all.css)
    console.log('✅ Components bundle: components/all.css (already generated)');
    
    // Create base-only bundle (already exists as base.css)
    console.log('✅ Base styles bundle: base.css (already generated)');
    
    // Create icons-only bundle (already exists as icons/icons.css)
    console.log('✅ Icons bundle: icons/icons.css (already generated)');
    
    // Create variables-only bundle (already exists as variables/variables.css)
    console.log('✅ Variables bundle: variables/variables.css (already generated)');
    
    // Verify all.css complete bundle exists
    const allCssPath = path.join(libDir, 'all.css');
    const allMinCssPath = path.join(libDir, 'all.min.css');
    
    if (fs.existsSync(allCssPath)) {
      const allSize = Buffer.byteLength(fs.readFileSync(allCssPath, 'utf8'), 'utf8');
      console.log(`✅ Complete bundle: all.css (${formatBytes(allSize)})`);
    }
    
    if (fs.existsSync(allMinCssPath)) {
      const allMinSize = Buffer.byteLength(fs.readFileSync(allMinCssPath, 'utf8'), 'utf8');
      console.log(`✅ Complete minified bundle: all.min.css (${formatBytes(allMinSize)})`);
    }
    
    console.log('📦 Distribution bundles generated successfully!');
  } catch (error) {
    console.error('❌ Failed to generate distribution bundles:', error.message);
    throw error;
  }
}

async function createUtilityOnlyBundle(libDir) {
  const utilsDir = path.join(libDir, 'utils');
  const utilsOnlyPath = path.join(libDir, 'utils-only.css');
  const utilsOnlyMinPath = path.join(libDir, 'utils-only.min.css');
  
  // Create utility-only bundle by combining base styles + utilities (no components)
  const srcDir = path.join(__dirname, '..', 'src');
  
  // Create a temporary SCSS file for utility-only bundle
  const utilityOnlyScss = `
// Utility-only bundle for developers who only need utilities
// Includes design tokens, base styles, and utility classes

// Import design tokens CSS custom properties first
@import '@ivds/design-tokens/lib/all.css';
@import './variables/variables.scss';
@import './base/base.scss';
@import './utils/utils.scss';
`;

  try {
    // Process utility-only bundle (normal version)
    const config = postcssConfig({ env: 'development' });
    const processor = postcss(config.plugins);
    const result = await processor.process(utilityOnlyScss, {
      from: path.join(srcDir, 'utils-only.scss'),
      to: utilsOnlyPath,
      parser: postcssScss
    });
    
    // Write normal CSS
    fs.writeFileSync(utilsOnlyPath, result.css);
    const normalSize = Buffer.byteLength(result.css, 'utf8');
    
    // Process minified version
    const minConfig = postcssConfig({ env: 'minify' });
    const minProcessor = postcss(minConfig.plugins);
    const minResult = await minProcessor.process(utilityOnlyScss, {
      from: path.join(srcDir, 'utils-only.scss'),
      to: utilsOnlyMinPath,
      parser: postcssScss
    });
    
    // Write minified CSS
    fs.writeFileSync(utilsOnlyMinPath, minResult.css);
    const minSize = Buffer.byteLength(minResult.css, 'utf8');
    
    console.log(`✅ Utility-only bundle: utils-only.css (${formatBytes(normalSize)})`);
    console.log(`✅ Utility-only minified bundle: utils-only.min.css (${formatBytes(minSize)})`);
  } catch (error) {
    console.error('❌ Failed to create utility-only bundle:', error.message);
    throw error;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

buildCSS();