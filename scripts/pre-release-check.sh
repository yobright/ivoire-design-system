#!/bin/bash

# IVDS Pre-Release Verification Script
# Checks whether the current aligned package version is ready for release.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

success() {
  echo -e "${GREEN}[ok]${NC} $1"
}

error() {
  echo -e "${RED}[error]${NC} $1"
  ERRORS=$((ERRORS + 1))
}

warning() {
  echo -e "${YELLOW}[warn]${NC} $1"
  WARNINGS=$((WARNINGS + 1))
}

info() {
  echo -e "${BLUE}[info]${NC} $1"
}

pkg_version() {
  node -p "require('./$1/package.json').version"
}

pkg_json_value() {
  node -p "require('./$1/package.json')$2"
}

DESIGN_TOKENS_VERSION="$(pkg_version packages/ivds-design-tokens)"
CORE_VERSION="$(pkg_version packages/ivds-core)"
REACT_VERSION="$(pkg_version packages/ivds-react)"
TARGET_VERSION="$DESIGN_TOKENS_VERSION"
TAG_NAME="v$TARGET_VERSION"

echo "IVDS $TAG_NAME Pre-Release Verification"
echo "======================================="
echo ""

echo "Step 1: Checking runtime..."
NODE_VERSION="$(node --version)"
YARN_VERSION="$(yarn --version)"

if [[ "$NODE_VERSION" == v22* ]]; then
  success "Node.js version: $NODE_VERSION"
else
  warning "Node.js version is $NODE_VERSION (expected v22.x)"
fi

success "Yarn version: $YARN_VERSION"
echo ""

echo "Step 2: Checking package version alignment..."
info "Design Tokens: $DESIGN_TOKENS_VERSION"
info "Core: $CORE_VERSION"
info "React: $REACT_VERSION"

if [[ "$DESIGN_TOKENS_VERSION" == "$CORE_VERSION" && "$CORE_VERSION" == "$REACT_VERSION" ]]; then
  success "All packages are aligned on $TARGET_VERSION"
else
  error "Package versions are not aligned"
fi
echo ""

echo "Step 3: Checking package builds..."
if [[ -d "packages/ivds-design-tokens/lib" ]]; then
  success "Design Tokens lib/ exists"
else
  error "Design Tokens not built. Run: yarn build:tokens"
fi

if [[ -d "packages/ivds-core/lib" ]]; then
  success "Core lib/ exists"
else
  error "Core not built. Run: yarn build:core"
fi

if [[ -d "packages/ivds-react/lib" ]]; then
  success "React lib/ exists"
else
  error "React not built. Run: yarn build:react"
fi
echo ""

echo "Step 4: Checking critical build artifacts..."
if [[ -f "packages/ivds-design-tokens/lib/all.css" ]]; then
  success "Design Tokens CSS bundle exists"
else
  error "Design Tokens all.css not found"
fi

if [[ -f "packages/ivds-core/lib/all.css" ]]; then
  success "Core CSS bundle exists"
else
  error "Core all.css not found"
fi

if [[ -f "packages/ivds-core/lib/icons/icons.css" ]]; then
  success "Icons CSS exists"
else
  error "Icons CSS not found"
fi

if [[ -f "packages/ivds-react/lib/index.js" ]]; then
  success "React JS entry exists"
else
  error "React index.js not found"
fi

if [[ -f "packages/ivds-react/lib/index.d.ts" ]]; then
  success "React TypeScript definitions exist"
else
  error "React index.d.ts not found"
fi
echo ""

echo "Step 5: Checking starter-critical React components..."
for component in Header Hero Card Navigation SideNavigation Footer TextInput TextArea Button Fieldset SelectionGroup ErrorSummary Link Pagination Modal Table; do
  if [[ -d "packages/ivds-react/lib/components/$component" ]]; then
    success "$component component built"
  else
    error "$component component not found in lib/components"
  fi
done
echo ""

echo "Step 6: Checking documentation..."
for file in \
  "CHANGELOG.md" \
  "packages/ivds-design-tokens/CHANGELOG.md" \
  "packages/ivds-core/CHANGELOG.md" \
  "packages/ivds-react/CHANGELOG.md" \
  "documentation/CERTIFICATION.md" \
  "documentation/RELEASE-PHASES.md" \
  "bright-studio-team/devops/RELEASE-RUNBOOK.md"; do
  if [[ -f "$file" ]]; then
    success "$file exists"
  else
    warning "$file not found"
  fi
done
echo ""

echo "Step 7: Checking publishConfig..."
DESIGN_TOKENS_ACCESS="$(pkg_json_value packages/ivds-design-tokens ".publishConfig.access")"
CORE_ACCESS="$(pkg_json_value packages/ivds-core ".publishConfig.access")"
REACT_ACCESS="$(pkg_json_value packages/ivds-react ".publishConfig.access")"

if [[ "$DESIGN_TOKENS_ACCESS" == "public" && "$CORE_ACCESS" == "public" && "$REACT_ACCESS" == "public" ]]; then
  success "All packages are configured for public npm access"
else
  error "Not all packages have publishConfig.access=public"
fi
echo ""

echo "Step 8: Checking inter-package dependencies..."
CORE_DEP="$(pkg_json_value packages/ivds-core ".peerDependencies['@ivds/design-tokens']")"
REACT_CORE_DEP="$(pkg_json_value packages/ivds-react ".peerDependencies['@ivds/core']")"
REACT_TOKENS_DEP="$(pkg_json_value packages/ivds-react ".peerDependencies['@ivds/design-tokens']")"
EXPECTED_RANGE="^$TARGET_VERSION"

info "Core depends on Design Tokens: $CORE_DEP"
info "React depends on Core: $REACT_CORE_DEP"
info "React depends on Design Tokens: $REACT_TOKENS_DEP"

if [[ "$CORE_DEP" == "$EXPECTED_RANGE" ]]; then
  success "Core peer dependency is aligned"
else
  error "Core peer dependency should be $EXPECTED_RANGE"
fi

if [[ "$REACT_CORE_DEP" == "$EXPECTED_RANGE" && "$REACT_TOKENS_DEP" == "$EXPECTED_RANGE" ]]; then
  success "React peer dependencies are aligned"
else
  error "React peer dependencies should be $EXPECTED_RANGE"
fi
echo ""

echo "Step 9: Checking npm authentication and version availability..."
if [[ "${SKIP_NPM_CHECKS:-0}" == "1" ]]; then
  warning "Skipping npm checks because SKIP_NPM_CHECKS=1"
else
  if npm whoami &> /dev/null; then
    NPM_USER="$(npm whoami)"
    success "Logged in to npm as: $NPM_USER"
  else
    error "Not logged in to npm. Run: npm login"
  fi

  for package_name in "@ivds/design-tokens" "@ivds/core" "@ivds/react"; do
    if npm view "$package_name@$TARGET_VERSION" version &> /dev/null; then
      error "$package_name@$TARGET_VERSION already exists on npm"
    else
      success "$package_name@$TARGET_VERSION is not published yet"
    fi
  done
fi
echo ""

echo "Step 10: Checking git status and release tag..."
if git diff-index --quiet HEAD --; then
  success "No uncommitted changes"
else
  warning "You have uncommitted changes. Commit before final release."
fi

if git tag --list "$TAG_NAME" | grep -q "$TAG_NAME"; then
  warning "Tag $TAG_NAME already exists"
else
  success "Tag $TAG_NAME not yet created"
fi
echo ""

echo "Step 11: Checking institutional certification report..."
if yarn certify:institutional:strict; then
  success "Institutional certification strict gate passed"
else
  error "Institutional certification strict gate failed"
fi
echo ""

echo "======================================="
echo "Summary"
echo "======================================="

if [[ "$ERRORS" -eq 0 && "$WARNINGS" -eq 0 ]]; then
  echo -e "${GREEN}[ok] Ready to release $TAG_NAME${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Review CHANGELOG.md"
  echo "2. Commit changes: git add . && git commit -m 'chore: release $TAG_NAME'"
  echo "3. Publish packages: ./scripts/publish-all.sh"
  echo "4. Create tag: git tag -a $TAG_NAME -m 'Release $TAG_NAME'"
  echo "5. Push tag: git push origin $TAG_NAME"
  exit 0
elif [[ "$ERRORS" -eq 0 ]]; then
  echo -e "${YELLOW}[warn] $WARNINGS warning(s) found. Review before releasing.${NC}"
  exit 0
else
  echo -e "${RED}[error] $ERRORS error(s) and $WARNINGS warning(s) found. Fix before releasing.${NC}"
  exit 1
fi
