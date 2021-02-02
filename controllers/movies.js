const movies = require('../models/movies');
//const User = require('../models').User;

const index = (req, res) => {
    res.render('index.ejs', {
        movies: movies
    });
};

const show = (req, res) => {
    res.render('show.ejs', {
        movie: movies[req.params.index]
    });
};

const renderNew = (req, res) => {
    res.render('new.ejs');
};

const postMovie = (req, res) => {
    if(req.body.seenAlready === 'on'){
        req.body.seenAlready = true;
    } else {
        req.body.seenAlready = false;
    }
    movies.push(req.body);
    res.redirect('/movies');
};


const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        movie: movies[req.params.index],
        index: req.params.index
    });
};

const editMovie = (req, res) => {
    if(req.body.seenAlready === 'on'){
        req.body.seenAlready = true;
    } else {
        req.body.seenAlready = false;
    }
        movies[req.params.index] = req.body;
        res.redirect('/movies');
};

const deleteMovie = (req, res) => {
    movies.splice(req.params.index, 1);
    res.redirect('/movies');
};

module.exports = {
    index,
    renderNew,
    postMovie,
    show,
    renderEdit,
    editMovie,
    deleteMovie
};