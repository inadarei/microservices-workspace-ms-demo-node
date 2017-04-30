// eslint-disable global-require
var path = require('path');
var log = require('metalogger')();
require('app-module-path').addPath(path.join(__dirname,'/lib'));

exports.setup = function(app, callback) {
  // Nothing ever comes from "x-powered-by", but a security hole
  app.disable("x-powered-by");

  // Choose your favorite view engine(s)
  app.set('view engine', 'handlebars');
  app.engine('handlebars', require('hbs').__express);

  //---- Mounting well-encapsulated application modules (so-called: "mini-apps")
  //---- See: http://expressjs.com/guide/routing.html and http://vimeo.com/56166857

  // API endpoint attached to root route:
  app.use('/', require('homedoc')); // attach to root route
  app.use('/users', require('users')); // attach to root route

   // Custom formatting for error responses. 
   // Among other things reformats Celebrate's (joi middleware) default output
  app.use((err, req, res, next) => { 
    if (err) {
      var out = {};
      if (err.isJoi) { // Joi-based validation error. No need to log these
        out.errors = err.details;
        res.status(400).json(out); 
        return;
      } else {
        log.error(err);
        if (process.env.NODE_ENV === "production") {
          out.errors = ["Internal server error"];
        } else {
          out.errors = [err.toString()];
        }
        
        res.status(500).json(out);
        return; 
      }
    }
    return next();
  });

  // If you need websockets:
  // var socketio = require('socket.io')(runningApp.http);
  // require('fauxchatapp')(socketio);

  if(typeof callback === 'function') {
    callback(app);
    return;
  }
};
