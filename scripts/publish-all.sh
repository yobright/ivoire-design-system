#!/bin/bash

# IVDS Publish All Packages Script
# Publishes all packages to npm in dependency order.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

success() {
  echo -e "${GREEN}[ok]${NC} $1"
}

error() {
  echo -e "${RED}[error]${NC} $1"
  exit 1
}

warning() {
  echo -e "${YELLOW}[warn]${NC} $1"
}

info() {
  echo -e "${BLUE}[info]${NC} $1"
}

pkg_version() {
  node -p "require('./$1/package.json').version"
}

DESIGN_TOKENS_VERSION="$(pkg_version packages/ivds-design-tokens)"
CORE_VERSION="$(pkg_version packages/ivds-core)"
REACT_VERSION="$(pkg_version packages/ivds-react)"
TARGET_VERSION="$DESIGN_TOKENS_VERSION"
TAG_NAME="v$TARGET_VERSION"

if [[ "$DESIGN_TOKENS_VERSION" != "$CORE_VERSION" || "$CORE_VERSION" != "$REACT_VERSION" ]]; then
  error "Package versions are not aligned: design-tokens=$DESIGN_TOKENS_VERSION core=$CORE_VERSION react=$REACT_VERSION"
fi

if [[ "${ALLOW_DIRTY_RELEASE:-0}" != "1" ]] && ! git diff-index --quiet HEAD --; then
  error "Git worktree has uncommitted changes. Commit before publishing or set ALLOW_DIRTY_RELEASE=1 intentionally."
fi

if git tag --list "$TAG_NAME" | grep -q "$TAG_NAME"; then
  error "Git tag $TAG_NAME already exists. Bump versions before publishing."
fi

echo "Publishing IVDS $TAG_NAME to npm"
echo "==============================="
echo ""

if ! npm whoami &> /dev/null; then
  error "Not logged in to npm. Run: npm login"
fi

NPM_USER="$(npm whoami)"
info "Publishing as: $NPM_USER"
echo ""

info "Checking that $TARGET_VERSION is not already published..."
for package_name in "@ivds/design-tokens" "@ivds/core" "@ivds/react"; do
  if npm view "$package_name@$TARGET_VERSION" version &> /dev/null; then
    error "$package_name@$TARGET_VERSION already exists on npm. Bump versions before publishing."
  fi
  success "$package_name@$TARGET_VERSION is available"
done
echo ""

info "Running strict pre-release verification..."
if ./scripts/pre-release-check.sh; then
  success "Pre-release verification passed"
else
  error "Pre-release verification failed"
fi
echo ""

read -r -p "Publish IVDS $TAG_NAME to npm? Type 'yes' to continue: " CONFIRM
if [[ "$CONFIRM" != "yes" ]]; then
  warning "Publish cancelled"
  exit 0
fi
echo ""

publish_package() {
  local package_name="$1"
  local package_dir="$2"

  info "Publishing $package_name@$TARGET_VERSION..."
  (
    cd "$package_dir"
    npm publish --access public
  )
  success "$package_name@$TARGET_VERSION published"
}

verify_package() {
  local package_name="$1"

  info "Checking $package_name@$TARGET_VERSION..."
  if npm view "$package_name@$TARGET_VERSION" version &> /dev/null; then
    success "$package_name@$TARGET_VERSION is live on npm"
  else
    warning "$package_name@$TARGET_VERSION is not visible yet. npm propagation may take a few minutes."
  fi
}

publish_package "@ivds/design-tokens" "packages/ivds-design-tokens"
info "Waiting 10 seconds for npm propagation..."
sleep 10

publish_package "@ivds/core" "packages/ivds-core"
info "Waiting 10 seconds for npm propagation..."
sleep 10

publish_package "@ivds/react" "packages/ivds-react"
echo ""

echo "==============================="
echo "Verifying npm publications"
echo "==============================="
sleep 5

verify_package "@ivds/design-tokens"
verify_package "@ivds/core"
verify_package "@ivds/react"

echo ""
echo "==============================="
echo -e "${GREEN}[ok] All packages published for $TAG_NAME${NC}"
echo "==============================="
echo ""
echo "Next steps:"
echo "1. Create tag: git tag -a $TAG_NAME -m 'Release $TAG_NAME'"
echo "2. Push tag: git push origin $TAG_NAME"
echo "3. Create GitHub release: https://github.com/yobright/ivoire-design-system/releases/new"
echo "4. Smoke test install: npm install @ivds/react@$TARGET_VERSION"
echo "5. Validate starter institutional demo"
echo ""
echo "Package URLs:"
echo "- https://www.npmjs.com/package/@ivds/design-tokens"
echo "- https://www.npmjs.com/package/@ivds/core"
echo "- https://www.npmjs.com/package/@ivds/react"
