
const User = require('../models').User;
//const movies = require('../movies');
                       
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
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
    //users.push(req.body);
    //res.redirect(`/users/profile/${users.length-1}`);
};
//existing user login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}; 
//verify user login credentials
const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
};
//profile for user
const renderProfile = (req, res) => {
    User.findByPk(req.params.index)
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user: userProfile
        });
    });    
    //res.render('users/profile.ejs', {
    //    user: users[req.params.index],
    //    index: req.params.index
    //})
};
//Edit user profile
const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    });
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


