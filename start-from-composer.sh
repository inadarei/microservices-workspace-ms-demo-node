#!/bin/sh

# @see: https://docs.docker.com/compose/startup-order/
./wait-for.sh ms-demo-node-db:3306 --timeout=240 -- ./start-after-migrations.sh
