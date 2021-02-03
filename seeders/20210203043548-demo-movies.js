'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Movies', [
      {
        name: "The Godfather",
        director:"Francis Ford Coppola",
        year: 1972,
        seenAlready: false
    },
    {
        name: "Platoon",
        director: "Oliver Stone",
        year: 1986,
        seenAlready: false
    },
    {
        name: "The exorcist",
        director: "William Friedkin",
        year: 1973,
        seenAlready: false
    },
    {
        name: "Life of Brian",
        director: "Terry Jones",
        year: 1979,
        seenAlready: false
    }
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Movies', null, {});
    
  }
};
