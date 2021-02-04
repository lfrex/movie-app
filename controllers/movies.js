const Movie = require('../models').Movie;
const Genre = require('../models').Genres;
//const User = require('../models').User;


const index = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.render('index.ejs', {
            movies: movies
        });
    }) 
};

const show = (req, res) => {
    Movie.findByPk(req.params.index,
        {
            include : [
                {
                    model: Genre,
                    attributes: ['name']
                }
            ]
        })
    .then(movie => {
        res.render('show.ejs', {
            movie: movie
        });
    })  
}

const renderNew = (req, res) => {
    Genre.findAll()
    .then(allGenres => {
        res.render('new.ejs', {
            genre: allGenres
        });
        
    })
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
    .then(foundMovie => {
        Genre.findAll()
        .then(allGenres => {
            res.render('edit.ejs', {
                movie: foundMovie,
                genre: allGenres
            });
        })
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