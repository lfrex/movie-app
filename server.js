const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { ppid } = require('process');
const movies = require('./models/movies.js');

const routes = require('./routes');

//Middleware:
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.use('/movies', routes.movies);
app.use('/users', routes.users);


//Temporal route to new movies:
app.get('/movies/new', (req, res) => {
    res.render('new.ejs');
});


//Temporal route to index movies
app.get('/movies/', (req, res) => {
    res.send(movies);
});



//Temporal get route to test show display
app.get('/movies/:index', function(req, res) {
    res.render('show.ejs', {
        movie: movies[req.params.index]
    });
});


app.listen(3000, () => {
    console.log("Movie-App listening");
});