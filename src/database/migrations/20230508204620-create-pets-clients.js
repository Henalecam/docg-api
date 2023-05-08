'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('clients', 'pet_id', {
      type: Sequelize.INTEGER,
      defaultValue: null,
      allowNull: true,
      references: {
        model: 'pets',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('clients', 'pet_id');
  },
};
