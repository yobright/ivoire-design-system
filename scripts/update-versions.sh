#!/bin/bash

# IVDS Update Versions Script
# Updates all package versions to 1.0.0

set -e

echo "📝 Updating IVDS packages to v1.0.0"
echo "===================================="
echo ""

NEW_VERSION="1.0.0"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Update Design Tokens
info "Updating @ivds/design-tokens to $NEW_VERSION..."
cd packages/ivds-design-tokens
npm version $NEW_VERSION --no-git-tag-version
success "Updated @ivds/design-tokens"
cd ../..

# Update Core
info "Updating @ivds/core to $NEW_VERSION..."
cd packages/ivds-core
npm version $NEW_VERSION --no-git-tag-version
# Update peerDependency
node -e "
const fs = require('fs');
const pkg = require('./package.json');
pkg.peerDependencies['@ivds/design-tokens'] = '^$NEW_VERSION';
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
"
success "Updated @ivds/core"
cd ../..

# Update React
info "Updating @ivds/react to $NEW_VERSION..."
cd packages/ivds-react
npm version $NEW_VERSION --no-git-tag-version
# Update peerDependencies
node -e "
const fs = require('fs');
const pkg = require('./package.json');
pkg.peerDependencies['@ivds/core'] = '^$NEW_VERSION';
pkg.peerDependencies['@ivds/design-tokens'] = '^$NEW_VERSION';
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
"
success "Updated @ivds/react"
cd ../..

# Update root package.json
info "Updating root package.json..."
npm version $NEW_VERSION --no-git-tag-version
success "Updated root package.json"

echo ""
echo "===================================="
echo -e "${GREEN}✓ All packages updated to v$NEW_VERSION${NC}"
echo "===================================="
echo ""
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Build all packages: ./scripts/build-all.sh"
echo "3. Run pre-release check: ./scripts/pre-release-check.sh"
echo ""
