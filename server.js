// @see: https://gist.github.com/branneman/8048520
require('app-module-path').addPath(__dirname + '/lib');

var server = require('nodebootstrap-server')
  , appConfig = require('./appConfig')
  , app    = require('express')();



server.setup(app, appConfig.setup);
