'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      authId: {
        type: Sequelize.STRING,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      midName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      secondLastName: {
        type: Sequelize.STRING
      },
      idNumber: {
        type: Sequelize.STRING,
        unique: true
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
