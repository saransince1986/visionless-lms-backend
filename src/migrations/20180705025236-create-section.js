'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sectionIndex: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sectionTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parentSection: {
        type: Sequelize.INTEGER
      },
      sectionType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sectionContent: {
        type: Sequelize.STRING
      },
      possiblePoints: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('sections');
  }
};
