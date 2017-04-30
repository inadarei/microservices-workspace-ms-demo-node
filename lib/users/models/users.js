var db = require("datastore");
var log = require('metalogger')();
var Promise = require('bluebird');

class Users {

  getUsers() {
    var conn = db.conn();
    return conn.query('select `email`, `uuid`, `last_updated` from users');
  }

}

module.exports = Users;