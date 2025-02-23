#!/bin/bash
# This script creates the folder structure inside the "src" folder
# Run this script from the root of your project (where the "src" folder is located).

SRC_DIR="src"

# List of directories to create inside src
DIRS=(
  "$SRC_DIR/assets"
  "$SRC_DIR/components/shared"
  "$SRC_DIR/components/ui"
  "$SRC_DIR/components/desktop"
  "$SRC_DIR/components/mobile"
  "$SRC_DIR/screens/common"
  "$SRC_DIR/screens/persona1/desktop"
  "$SRC_DIR/screens/persona1/mobile"
  "$SRC_DIR/screens/persona2/desktop"
  "$SRC_DIR/screens/persona2/mobile"
  "$SRC_DIR/screens/persona3"
  "$SRC_DIR/screens/persona4"
  "$SRC_DIR/screens/persona5"
  "$SRC_DIR/hooks"
  "$SRC_DIR/context"
  "$SRC_DIR/lib"
  "$SRC_DIR/schemas/persona1"
  "$SRC_DIR/schemas/persona2"
  "$SRC_DIR/theme"
  "$SRC_DIR/styles"
  "$SRC_DIR/types"
)

echo "Creating directory structure under $SRC_DIR..."

for dir in "${DIRS[@]}"; do
  mkdir -p "$dir"
  echo "Created: $dir"
done

# List of empty files to create (placeholders)
FILES=(
  "$SRC_DIR/theme/base.ts"
  "$SRC_DIR/theme/default.ts"
  "$SRC_DIR/theme/persona1.ts"
  "$SRC_DIR/theme/persona2.ts"
  "$SRC_DIR/theme/index.ts"
  "$SRC_DIR/styles/global.css"
  "$SRC_DIR/styles/variables.css"
  "$SRC_DIR/App.tsx"
  "$SRC_DIR/main.tsx"
)

echo "Creating empty files..."
for file in "${FILES[@]}"; do
  if [ ! -f "$file" ]; then
    touch "$file"
    echo "Created file: $file"
  else
    echo "File already exists: $file"
  fi
done

echo "Folder structure creation complete."