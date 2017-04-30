var fixtures = require('path').join(__dirname, '../fixtures');

var fs = require('fs');
var path = require('path');

var exports = module.exports = {};

exports.loadFixture = function(name, cb) {
  var pathToFixture = path.join(fixtures, "/", name);

  return new Promise (function(resolve, reject) {
    fs.readFile(pathToFixture, "utf8", function (err, data) {
      if (err) { 
        reject(err); 
      } else {
        resolve(data);
      }
    });
  });
};
