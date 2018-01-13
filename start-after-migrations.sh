#!/bin/sh

# @see: https://docs.docker.com/compose/startup-order/
node_modules/db-migrate/bin/db-migrate up && nodemon -L -e js,coffee,jade,handlebars server.js