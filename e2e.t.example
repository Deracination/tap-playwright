#!/bin/sh
# wrapper to run playwright tests so they can be invoked
# from prove
#
# Find::Bin for bash!
readonly Bin=$(cd -- "$(dirname "$0")" && pwd)

# must run from the dir containing the source, etc!
cd $Bin 

exec yarn playwright test --reporter=tap-reporter $@
