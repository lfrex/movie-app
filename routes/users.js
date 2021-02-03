const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


//route for welcome page
router.get('/', ctrl.users.index);

//route to render signup page
router.get('/signup', ctrl.users.renderSignup);

//route to add new user
router.post('/signup', ctrl.users.signup);

//route to render profile of user
router.get('/profile/:index', ctrl.users.renderProfile);

//route to render login
router.get('/login', ctrl.users.renderLogin);

//route to verify user login
router.post('/login', ctrl.users.login);

//route to edit profile
router.put('/profile/:index', ctrl.users.editProfile);

//delete user profile
router.delete('/:index', ctrl.users.deleteUser);


module.exports = router;
