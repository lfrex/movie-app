'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
      {
        name:'Movie-Fan-A',
        username: 'moviefana',
        password: 'fana'
    },
    {
        name:'Movie-Fan-B',
        username: 'moviefanb',
        password: `fanb`
    },
    {
        name:'Movie-Fan-C',
        username: 'moviefanc',
        password: 'fanc'
    }      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
    }
};
