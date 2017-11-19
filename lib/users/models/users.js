const db = require("datastore");
const log = require('metalogger')();
const Promise = require('bluebird');

class Users {

  getUsers() {
    const conn = db.conn();
    return conn.query('select `email`, `uuid`, `last_updated` from users');
  }

}

module.exports = Users;
