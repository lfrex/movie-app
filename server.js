const express = require('express');
const movies = require('./movies.js');
const methodOverride = require('method-override');
const { ppid } = require('process');
const routes = require('./routes');

const app = express();

//Middleware:
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

app.use('/movies', routes.movies);
app.use('/users', routes.users);





app.listen(3000, () => {
    console.log("Movie-App listening");
});