#!/bin/bash

# IVDS Publish All Packages Script
# Publishes all packages to NPM in the correct order

set -e

echo "🚀 Publishing IVDS v1.0.0 to NPM"
echo "================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
success() {
    echo -e "${GREEN}✓${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1"
    exit 1
}

info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if logged in to NPM
if ! npm whoami &> /dev/null; then
    error "Not logged in to NPM. Run: npm login"
fi

NPM_USER=$(npm whoami)
info "Publishing as: $NPM_USER"
echo ""

# Confirm before publishing
read -p "Are you sure you want to publish v1.0.0 to NPM? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    warning "Publish cancelled"
    exit 0
fi
echo ""

# Step 1: Publish Design Tokens (no dependencies)
echo "Step 1/3: Publishing @ivds/design-tokens..."
cd packages/ivds-design-tokens

if npm publish --access public; then
    success "@ivds/design-tokens@1.0.0 published"
else
    error "Failed to publish @ivds/design-tokens"
fi

cd ../..
echo ""

# Wait a bit for NPM to propagate
info "Waiting 10 seconds for NPM to propagate..."
sleep 10
echo ""

# Step 2: Publish Core (depends on design-tokens)
echo "Step 2/3: Publishing @ivds/core..."
cd packages/ivds-core

if npm publish --access public; then
    success "@ivds/core@1.0.0 published"
else
    error "Failed to publish @ivds/core"
fi

cd ../..
echo ""

# Wait a bit for NPM to propagate
info "Waiting 10 seconds for NPM to propagate..."
sleep 10
echo ""

# Step 3: Publish React (depends on both)
echo "Step 3/3: Publishing @ivds/react..."
cd packages/ivds-react

if npm publish --access public; then
    success "@ivds/react@1.0.0 published"
else
    error "Failed to publish @ivds/react"
fi

cd ../..
echo ""

# Verify publications
echo "================================="
echo "Verifying publications..."
echo "================================="
echo ""

sleep 5

info "Checking @ivds/design-tokens..."
if npm view @ivds/design-tokens@1.0.0 version &> /dev/null; then
    success "@ivds/design-tokens@1.0.0 is live on NPM"
else
    warning "@ivds/design-tokens@1.0.0 not yet visible (may take a few minutes)"
fi

info "Checking @ivds/core..."
if npm view @ivds/core@1.0.0 version &> /dev/null; then
    success "@ivds/core@1.0.0 is live on NPM"
else
    warning "@ivds/core@1.0.0 not yet visible (may take a few minutes)"
fi

info "Checking @ivds/react..."
if npm view @ivds/react@1.0.0 version &> /dev/null; then
    success "@ivds/react@1.0.0 is live on NPM"
else
    warning "@ivds/react@1.0.0 not yet visible (may take a few minutes)"
fi

echo ""
echo "================================="
echo -e "${GREEN}🎉 All packages published successfully!${NC}"
echo "================================="
echo ""
echo "Next steps:"
echo "1. Create GitHub release: https://github.com/babiverse/ivoire-design-system/releases/new"
echo "2. Test installation: npm install @ivds/react"
echo "3. Deploy Storybook"
echo "4. Announce on social media"
echo ""
echo "Package URLs:"
echo "- https://www.npmjs.com/package/@ivds/design-tokens"
echo "- https://www.npmjs.com/package/@ivds/core"
echo "- https://www.npmjs.com/package/@ivds/react"
echo ""
