const users = require('../models/users');

//Welcome page
const index = (req, res) => {
    res.render('users/index.ejs')
};  
//render signup page
const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
};   


module.exports = {
    index,
    renderSignup,        
};