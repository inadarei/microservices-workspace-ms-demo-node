/* jshint -W079 */
const Promise = require('bluebird')
    , config = require('config')
    , log = require('metalogger')()
    , representor = require('representor-serializer')
    , _ = require('lodash');

const Users   = require("users/models/users");
const actions = {}
    , model   = new Users();

const responseMediaType = 'application/hal+json';

actions.getUsers = function(req, res, next) {

  model.getUsers().then(function(userRows){

    let response = {};
    response.data = {};
    response.data.users = userRows;
    response.actions = [];
    response.actions[0] = {
      "href": "/users",
      "name": "self"
    };

    // Render internal representation into proper HAL+JSON
    response = representor(response, responseMediaType);

    res.set('Content-Type', responseMediaType)
       .status(200)
       .send(response);

  }).catch(function(err) {
    next(err);
  });

};

module.exports = actions;
