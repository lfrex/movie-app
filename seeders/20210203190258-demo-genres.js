'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Genres', [
        {
        name: 'Comedy',
      },
      {
        name: 'Horror',
      },
      {
        name: 'Action',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Science Fiction',
      },
      {
        name: 'Thriller',
      },
      {
        name: 'Western',
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Genres', null, {});
     
  }
};
