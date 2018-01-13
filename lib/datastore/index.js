const mysql  = require('promise-mysql');
const config = require('config');
const log    = require('metalogger')();

class Datastore {
  constructor() {
    this.acquirePool();
  }

  acquirePool() {
    // Prevent error-outs on server initialization
    try {
      this.pool = mysql.createPool(
        config.db
      );
    } catch(err) {
      log.error(`Database couldn't be initialized. Config: `, config.db.host);
      this.pool = null;
    }
  }

  /**
   * get database connection
   *
   * @return a Promise representing a connection
   * @memberOf DataStore
   */
  conn() {
    // Retry connecting
    if (!this.pool) {
      this.acquirePool();
    }
    return this.pool;
  }

}

module.exports = new Datastore();
