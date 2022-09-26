'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [{
      name: 'John Bon Voyage',
      genre: 'Rock',
      available_start_time: '2000-02-10 17:00:00',
      end_time: '2000-02-10 19:00:00',
      recommendation: 'they r great'
    },
    {
      name: 'Cookie Monsters',
      genre: 'Punk Rock',
      available_start_time: '2000-02-10 18:30:00',
      end_time: '2000-02-10 20:30:00',
      recommendation: 'more cookies!'
    },
    
    {
      name: 'Fishy pond',
      genre: 'Alternative Rock',
      available_start_time: '2000-02-12 17:30:00',
      end_time: '2000-02-11 20:30:00',
      recommendation: 'its not fishy enough'
    },
    {
      name: 'The Imposters',
      genre: 'Heavy metal',
      available_start_time: '2000-02-13 17:30:00',
      end_time: '2000-02-13 20:30:00',
      recommendation: 'needs some Iron!!'
    }, 
    

    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};
