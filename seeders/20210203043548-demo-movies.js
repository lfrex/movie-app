'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Movies', [
      {
        name: "The Godfather",
        director:"Francis Ford Coppola",
        genreId: 4,
        year: 1972,
        seenAlready: false
    },
    {
        name: "Platoon",
        director: "Oliver Stone",
        genreId: 3,
        year: 1986,
        seenAlready: false
    },
    {
        name: "The exorcist",
        director: "William Friedkin",
        genreId: 2,
        year: 1973,
        seenAlready: false
    },
    {
        name: "Life of Brian",
        director: "Terry Jones",
        genreId: 1,
        year: 1979,
        seenAlready: false
    },
    {
      name: "Unforgiven",
      director: "Clint Eastwood",
      genreId: 7,
      year: 1992,
      seenAlready: false
  },
  {
    name: "3:10 to Yuma",
    director: "James Mangold",
    genreId: 7,
    year: 2007,
    seenAlready: false
},
{
  name: "Kramer vs Kramer",
  director: "Robert Benton",
  genreId: 4,
  year: 1979,
  seenAlready: false
},
{
  name: "No way out",
  director: "Roger Donaldson",
  genreId: 6,
  year: 1987,
  seenAlready: false
},
{
  name: "The last of the Mohicans",
  director: "Michael Mann",
  genreId: 3,
  year: 1992,
  seenAlready: false
},
{
  name: "Ferris Bueller's day off",
  director: "John Hughes",
  genreId: 1,
  year: 1986,
  seenAlready: false
},
{
  name: "The Bourne Identity",
  director: "Doug Liman",
  genreId: 3,
  year: 2002,
  seenAlready: false
},
{
  name: "Se7en",
  director: "David Fincher",
  genreId: 6,
  year: 1995,
  seenAlready: false
},
{
  name: "The Ball in the Groin",
  director: "Hans Moleman",
  genreId: 4,
  year: 1995,
  seenAlready: false
},
{
  name: "The New York Ripper",
  director: "Lucio Fulci",
  genreId: 2,
  year: 1982,
  seenAlready: false
},
{
  name: "Young Frankenstein",
  director: "Mel Brooks",
  genreId: 5,
  year: 1974,
  seenAlready: false
}, 
{
  name: "High Life",
  director: "Claire Denis",
  genreId: 5,
  year: 2018,
  seenAlready: false
},
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Movies', null, {});
    
  }
};
