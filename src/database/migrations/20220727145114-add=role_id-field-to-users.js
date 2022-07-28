'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'role_id',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'users', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'role_id');
  }
};