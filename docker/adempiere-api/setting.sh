#!/usr/bin/env sh
yarn ci
yarn cache clean
rm -rf node_modules/sharp
yarn add sharp --ignore-workspace-root-check
yarn cache clean 
