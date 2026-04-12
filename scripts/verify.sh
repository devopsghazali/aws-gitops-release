#!/usr/bin/env sh
set -eu

curl -fsS http://localhost:3000/healthz
echo
