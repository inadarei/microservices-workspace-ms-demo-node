const db = require("datastore");
const log = require('metalogger')();
const Promise = require('bluebird');

class Users {

  async getUsers() {
    const conn = db.conn();
    if (conn) {
      return conn.query('select `email`, `uuid`, `last_updated` from users');
    } else {
      Promise.resolve({});
    }
  }
}

module.exports = Users;
