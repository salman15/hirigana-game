#!/bin/sh

# Remove build dir
rm /BUILD/*

# Create new build
yarn build

# Move new build files
cp -a /dist/. /BUILD/

# create new release commit
git add ./BUILD
git commit -m '[RELEASE] Created new automated release'