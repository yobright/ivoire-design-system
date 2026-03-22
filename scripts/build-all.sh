#!/bin/bash

# IVDS Build All Packages Script
# Builds all packages in the correct order

set -e

echo "🔨 Building all IVDS packages"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

success() {
    echo -e "${GREEN}✓${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1"
    exit 1
}

# Step 1: Build Design Tokens
info "Building @ivds/design-tokens..."
cd packages/ivds-design-tokens
if yarn build; then
    success "@ivds/design-tokens built successfully"
else
    error "Failed to build @ivds/design-tokens"
fi
cd ../..
echo ""

# Step 2: Build Core
info "Building @ivds/core..."
cd packages/ivds-core
if yarn build; then
    success "@ivds/core built successfully"
else
    error "Failed to build @ivds/core"
fi
cd ../..
echo ""

# Step 3: Build React
info "Building @ivds/react..."
cd packages/ivds-react
if yarn build; then
    success "@ivds/react built successfully"
else
    error "Failed to build @ivds/react"
fi
cd ../..
echo ""

# Verify builds
echo "=============================="
echo "Verifying builds..."
echo "=============================="
echo ""

if [ -d "packages/ivds-design-tokens/lib" ]; then
    success "Design Tokens lib/ exists"
    info "  Files: $(find packages/ivds-design-tokens/lib -type f | wc -l)"
else
    error "Design Tokens lib/ not found"
fi

if [ -d "packages/ivds-core/lib" ]; then
    success "Core lib/ exists"
    info "  Files: $(find packages/ivds-core/lib -type f | wc -l)"
else
    error "Core lib/ not found"
fi

if [ -d "packages/ivds-react/lib" ]; then
    success "React lib/ exists"
    info "  Files: $(find packages/ivds-react/lib -type f | wc -l)"
else
    error "React lib/ not found"
fi

echo ""
echo "=============================="
echo -e "${GREEN}✓ All packages built successfully!${NC}"
echo "=============================="
echo ""
echo "Next steps:"
echo "1. Run pre-release check: ./scripts/pre-release-check.sh"
echo "2. Test packages locally"
echo "3. Commit and tag: git commit -m 'chore: release v1.0.0' && git tag v1.0.0"
echo ""
