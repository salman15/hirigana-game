#!/bin/sh

# Remove build dir
rm -rf BUILD

# Create new build
yarn build

# Create new build dir
mkdir BUILD

# Move new build files
cp -a /dist/. /BUILD/

# create new release commit
git add ./BUILD
git commit -m '[RELEASE] Created new automated release'
git push