'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('band', [{
        name: 'John Bon Voyage',
        genre: 'Rock',
        available_start_time: '2000-02-10 17:00:00',
        end_time: '22:00:00',
      },
      {
        name: 'Cookie Monsters',
        genre: 'Punk Rock',
        available_start_time: '2000-02-10 18:30:00',
        end_time: '21:00:00',
      }  
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};
