#!/usr/bin/env bash

set -e

throw() {
  echo "Error: $*"
  exit 1
}

[ -z "$API_KEY" ] && throw "API_KEY required"
[ -z "$SERVER_URL" ] && throw "SERVER_URL required"
[ -z "$COMMIT_SHA" ] && throw "COMMIT_SHA required"

RETRY_COUNT=${RETRY_COUNT:-10}

echo "Attempting to get status for commit $COMMIT_SHA from $SERVER_URL with $RETRY_COUNT retries"

curl \
  --fail \
  --silent \
  --show-error \
  --retry "$RETRY_COUNT" \
  --retry-all-errors \
  --header "X-API-Key: $API_KEY" \
  --header "Accept: application/json" \
  --url "$SERVER_URL/api-pub/v1/axe-watcher/gh/$COMMIT_SHA" > accessibility-result.json

npx ts-node bitbucket/results.ts accessibility-result.json