

const Movie = require('../models').Movie;

const User = require('../models').User;

const index = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.render('index.ejs', {
            movies: movies
        });
    }) 
};

const show = (req, res) => {
    Movie.findByPk(req.params.index)
    .then(movie => {
        res.render('show.ejs', {
            movie: movie
        });
    })  
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const postMovie = (req, res) => {
    if(req.body.seenAlready === 'on'){
        req.body.seenAlready = true;
    } else {
        req.body.seenAlready = false;
    }
    Movie.create(req.body)
    .then(newMovie => {
        res.redirect('/movies');
    })  
};


const renderEdit = (req, res) => {
    Movie.findByPk(req.params.index)
    .then(movie => {
        res.render('edit.ejs', { 
            movie: movie
        });
    })
}

const editMovie = (req, res) => {
    if(req.body.seenAlready === 'on'){ 
        req.body.seenAlready = true;
    } else { 
        req.body.seenAlready = false;
    }
    Movie.update(req.body, {
          where: { id: req.params.index },
          returning: true,
        }
    )
    .then(movie => {
        res.redirect('/movies');
    })
}

const deleteMovie = (req, res) => {
    Movie.destroy({ where: { id: req.params.index } })
    .then(() => {
        res.redirect('/movies');
    }) 	 
}

module.exports = {
    index,
    renderNew,
    postMovie,
    show,
    renderEdit,
    editMovie,
    deleteMovie
};