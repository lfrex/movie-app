const express = require('express');
const app = express();
const movies = require('./models/movies.js');

//Middleware:
app.use(express.urlencoded({extended: true}));


//Temporal get route to test show display
app.get('/movies/:index', function(req, res){
    res.render('show.ejs');
});


app.listen(3000, () => {
    console.log("Movie-App listening");
});