#!/bin/bash

# IVDS Pre-Release Verification Script
# This script checks if everything is ready for v1.0.0 release

set -e

echo "🔍 IVDS v1.0.0 Pre-Release Verification"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track errors
ERRORS=0
WARNINGS=0

# Function to print success
success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Function to print error
error() {
    echo -e "${RED}✗${NC} $1"
    ((ERRORS++))
}

# Function to print warning
warning() {
    echo -e "${YELLOW}⚠${NC} $1"
    ((WARNINGS++))
}

# Function to print info
info() {
    echo -e "ℹ $1"
}

echo "Step 1: Checking Node.js version..."
NODE_VERSION=$(node --version)
if [[ $NODE_VERSION == v22* ]]; then
    success "Node.js version: $NODE_VERSION"
else
    warning "Node.js version is $NODE_VERSION (expected v22.x)"
fi
echo ""

echo "Step 2: Checking package versions..."
DESIGN_TOKENS_VERSION=$(node -p "require('./packages/ivds-design-tokens/package.json').version")
CORE_VERSION=$(node -p "require('./packages/ivds-core/package.json').version")
REACT_VERSION=$(node -p "require('./packages/ivds-react/package.json').version")

info "Design Tokens: $DESIGN_TOKENS_VERSION"
info "Core: $CORE_VERSION"
info "React: $REACT_VERSION"

if [[ "$DESIGN_TOKENS_VERSION" == "1.0.0" ]] && [[ "$CORE_VERSION" == "1.0.0" ]] && [[ "$REACT_VERSION" == "1.0.0" ]]; then
    success "All packages are at v1.0.0"
else
    error "Not all packages are at v1.0.0. Please update versions."
fi
echo ""

echo "Step 3: Checking if packages are built..."
if [ -d "packages/ivds-design-tokens/lib" ]; then
    success "Design Tokens built"
else
    error "Design Tokens not built. Run: cd packages/ivds-design-tokens && yarn build"
fi

if [ -d "packages/ivds-core/lib" ]; then
    success "Core built"
else
    error "Core not built. Run: cd packages/ivds-core && yarn build"
fi

if [ -d "packages/ivds-react/lib" ]; then
    success "React built"
else
    error "React not built. Run: cd packages/ivds-react && yarn build"
fi
echo ""

echo "Step 4: Checking critical files..."
# Design Tokens
if [ -f "packages/ivds-design-tokens/lib/color/brand/orange.css" ]; then
    success "Ivory Coast colors generated"
else
    error "Ivory Coast colors not found"
fi

# Core
if [ -f "packages/ivds-core/lib/all.css" ]; then
    success "Core CSS bundle exists"
else
    error "Core CSS bundle not found"
fi

if [ -f "packages/ivds-core/lib/icons/icons.css" ]; then
    success "Icons CSS exists"
else
    error "Icons CSS not found"
fi

# React
if [ -f "packages/ivds-react/lib/index.js" ]; then
    success "React bundle exists"
else
    error "React bundle not found"
fi

if [ -f "packages/ivds-react/lib/index.d.ts" ]; then
    success "React TypeScript definitions exist"
else
    error "React TypeScript definitions not found"
fi
echo ""

echo "Step 5: Checking new utility components..."
if [ -d "packages/ivds-react/lib/components/Box" ]; then
    success "Box component built"
else
    error "Box component not found"
fi

if [ -d "packages/ivds-react/lib/components/Flex" ]; then
    success "Flex component built"
else
    error "Flex component not found"
fi

if [ -d "packages/ivds-react/lib/components/Grid" ]; then
    success "Grid component built"
else
    error "Grid component not found"
fi
echo ""

echo "Step 6: Checking documentation..."
if [ -f "CHANGELOG.md" ]; then
    success "Root CHANGELOG.md exists"
else
    warning "Root CHANGELOG.md not found"
fi

if [ -f "packages/ivds-design-tokens/CHANGELOG.md" ]; then
    success "Design Tokens CHANGELOG.md exists"
else
    warning "Design Tokens CHANGELOG.md not found"
fi

if [ -f "packages/ivds-core/CHANGELOG.md" ]; then
    success "Core CHANGELOG.md exists"
else
    warning "Core CHANGELOG.md not found"
fi

if [ -f "packages/ivds-react/CHANGELOG.md" ]; then
    success "React CHANGELOG.md exists"
else
    warning "React CHANGELOG.md not found"
fi
echo ""

echo "Step 7: Checking publishConfig..."
DESIGN_TOKENS_ACCESS=$(node -p "require('./packages/ivds-design-tokens/package.json').publishConfig.access")
CORE_ACCESS=$(node -p "require('./packages/ivds-core/package.json').publishConfig.access")
REACT_ACCESS=$(node -p "require('./packages/ivds-react/package.json').publishConfig.access")

if [[ "$DESIGN_TOKENS_ACCESS" == "public" ]] && [[ "$CORE_ACCESS" == "public" ]] && [[ "$REACT_ACCESS" == "public" ]]; then
    success "All packages configured for public access"
else
    error "Not all packages have public access configured"
fi
echo ""

echo "Step 8: Checking NPM authentication..."
if npm whoami &> /dev/null; then
    NPM_USER=$(npm whoami)
    success "Logged in to NPM as: $NPM_USER"
else
    error "Not logged in to NPM. Run: npm login"
fi
echo ""

echo "Step 9: Checking Git status..."
if git diff-index --quiet HEAD --; then
    success "No uncommitted changes"
else
    warning "You have uncommitted changes. Commit before release."
fi

if git tag | grep -q "v1.0.0"; then
    warning "Tag v1.0.0 already exists"
else
    success "Tag v1.0.0 not yet created"
fi
echo ""

echo "Step 10: Checking inter-package dependencies..."
CORE_DEP=$(node -p "require('./packages/ivds-core/package.json').peerDependencies['@ivds/design-tokens']")
REACT_CORE_DEP=$(node -p "require('./packages/ivds-react/package.json').peerDependencies['@ivds/core']")
REACT_TOKENS_DEP=$(node -p "require('./packages/ivds-react/package.json').peerDependencies['@ivds/design-tokens']")

info "Core depends on Design Tokens: $CORE_DEP"
info "React depends on Core: $REACT_CORE_DEP"
info "React depends on Design Tokens: $REACT_TOKENS_DEP"

if [[ "$CORE_DEP" == *"1.0.0"* ]] || [[ "$CORE_DEP" == *"^1.0.0"* ]]; then
    success "Core dependency version looks good"
else
    warning "Core dependency might need updating to ^1.0.0"
fi
echo ""

# Summary
echo "========================================"
echo "Summary:"
echo "========================================"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! Ready to release v1.0.0${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Review CHANGELOG.md"
    echo "2. Commit all changes: git add . && git commit -m 'chore: release v1.0.0'"
    echo "3. Create tag: git tag -a v1.0.0 -m 'Release v1.0.0'"
    echo "4. Push: git push origin main && git push origin v1.0.0"
    echo "5. Publish: ./scripts/publish-all.sh"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ $WARNINGS warning(s) found. Review before releasing.${NC}"
    exit 0
else
    echo -e "${RED}✗ $ERRORS error(s) and $WARNINGS warning(s) found. Fix before releasing.${NC}"
    exit 1
fi
