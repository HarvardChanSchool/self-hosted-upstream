#!/bin/sh
# keepMine.sh
# Keeps the current branch's version of the file during a merge.

# The arguments passed to the script are:
# %O - The file's common ancestor
# %A - The file in the current branch
# #B - The file in the branch being merged

# We only care about keeping %A (current branch's version).
cp -f $2 $1
