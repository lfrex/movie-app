const User = require('../models').User;
const Movie = require('../models').Movie;
                       
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
    });
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
    User.findByPk(req.params.index, {
        include : [
            {
            model: Movie,
            attributes: [ 'id', 'name', 'director', 'year', 'seenAlready']
            }
        ]
    })
    .then(userProfile => {
        Movie.findAll()
        .then(allMovies => {
            res.render('users/profile.ejs', {
                user: userProfile,
                movies: allMovies
            });
        });
    });        
};
//Edit user profile
const editProfile = (req, res) => {
    User.update(req.body, {
        where: { id: req.params.index },
        returning: true
    })
    .then(updatedUser => {
        Movie.findByPk(req.body.movie)
        .then(foundMovie => {
            User.findByPk(req.params.index)
            .then(foundUser => {
                foundUser.addMovie(foundMovie);
                res.redirect(`/users/profile/${req.params.index}`);
            });
        });    
    });
};

//delete user
const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    }).then(() => {
        res.redirect('/users');
    });
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


