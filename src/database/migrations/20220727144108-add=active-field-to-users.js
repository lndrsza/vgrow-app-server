'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'active',{
      type: Sequelize.TINYINT,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'active');
  }
};