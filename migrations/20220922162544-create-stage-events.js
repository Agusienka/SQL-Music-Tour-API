'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stageEvents', {
      
      stage_events_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
         allowNull: false
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StageEvents');
  }
};