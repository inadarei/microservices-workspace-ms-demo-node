const router      = require('express').Router({ mergeParams: true });
const actions     = require('./actions');

router.get('/', actions.getUsers);

module.exports = router;
