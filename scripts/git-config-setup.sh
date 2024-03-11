#!/bin/bash

# Configure the custom merge driver 'keepMine'
git config merge.keepMine.name "always keep mine during merge"
git config merge.keepMine.driver './scripts/keepMine.sh %O %A %B'

echo "Git configuration updated to include custom merge driver 'keepMine'."
