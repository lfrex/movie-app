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
//existing user login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}; 
//verify user login credentials
const login = (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.body.username && users[i].password ===req.body.password){
            res.redirect('/users/profile/'+[i]);
        }; 
        };
};
//profile for user
const renderProfile = (req, res) => {
    res.render('users/profile.ejs', {
        user: users[req.params.index],
        index: req.params.index
    })
};
//Edit user profile
const editProfile = (req, res) => {
    users[req.params.index] = req.body;
    res.redirect(`/users/profile/${req.params.index}`);
};
//delete user
const deleteUser = (req, res) => {
    users.splice(req.params.index, 1);
    res.redirect('/users');
};



module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login,
    renderProfile,
    editProfile,
    deleteUser,            
};