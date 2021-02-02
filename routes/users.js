const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//route for welcome page
router.get('/', ctrl.users.index);

//route for signup page
router.get('/signup', ctrl.users.renderSignup);


module.exports = router;