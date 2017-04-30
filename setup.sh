#!/usr/bin/env sh
sed -i '' 's/ms-node-new/ms-demo-node/g' docker-compose.yml 
sed -i '' 's/ms-node-new/ms-demo-node/g' package.json