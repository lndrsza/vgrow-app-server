'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('role');
  }
};
