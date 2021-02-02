const users = require('../models/users');

//Welcome page
const index = (req, res) => {
    res.render('users/index.ejs')
};  
//render signup page
const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
};   
//adds new user 
const signup = (req, res) => {
    users.push(req.body);
    res.redirect(`/users/profile/${users.length-1}`);
};



module.exports = {
    index,
    renderSignup,
    signup,        
};