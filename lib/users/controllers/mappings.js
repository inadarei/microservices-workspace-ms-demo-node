var router      = require('express').Router({ mergeParams: true });
var actions     = require('./actions');

router.get('/', actions.getUsers);

module.exports = router;