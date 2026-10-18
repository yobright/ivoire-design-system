#!/bin/bash

# IVDS Update Versions Script
# Usage: ./scripts/update-versions.sh 1.2.1

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ $# -ne 1 ]]; then
  echo "Usage: ./scripts/update-versions.sh <new-version>"
  echo "Example: ./scripts/update-versions.sh 1.2.1"
  exit 1
fi

NEW_VERSION="$1"

if [[ ! "$NEW_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$ ]]; then
  echo "Invalid semver version: $NEW_VERSION"
  exit 1
fi

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

info() {
  echo -e "${BLUE}[info]${NC} $1"
}

success() {
  echo -e "${GREEN}[ok]${NC} $1"
}

update_package_version() {
  local package_dir="$1"
  local package_name="$2"

  info "Updating $package_name to $NEW_VERSION..."
  (
    cd "$package_dir"
    npm version "$NEW_VERSION" --no-git-tag-version
  )
  success "Updated $package_name"
}

update_json_peer_dependencies() {
  local package_file="$1"

  node - "$package_file" "$NEW_VERSION" <<'NODE'
const fs = require('fs');

const [packageFile, version] = process.argv.slice(2);
const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));

if (pkg.peerDependencies?.['@ivds/design-tokens']) {
  pkg.peerDependencies['@ivds/design-tokens'] = `^${version}`;
}

if (pkg.peerDependencies?.['@ivds/core']) {
  pkg.peerDependencies['@ivds/core'] = `^${version}`;
}

fs.writeFileSync(packageFile, `${JSON.stringify(pkg, null, 2)}\n`);
NODE
}

echo "Updating IVDS packages to v$NEW_VERSION"
echo "======================================="
echo ""

update_package_version "packages/ivds-design-tokens" "@ivds/design-tokens"

update_package_version "packages/ivds-core" "@ivds/core"
update_json_peer_dependencies "packages/ivds-core/package.json"

update_package_version "packages/ivds-react" "@ivds/react"
update_json_peer_dependencies "packages/ivds-react/package.json"

echo ""
echo "======================================="
echo -e "${GREEN}[ok] All packages updated to v$NEW_VERSION${NC}"
echo "======================================="
echo ""
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Build all packages: ./scripts/build-all.sh"
echo "3. Run pre-release check: ./scripts/pre-release-check.sh"
