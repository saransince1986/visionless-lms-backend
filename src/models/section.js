'use strict';
module.exports = (sequelize, DataTypes) => {
  var section = sequelize.define('section', {
    sectionIndex: DataTypes.INTEGER,
    sectionTitle: DataTypes.STRING,
    parentSection: DataTypes.INTEGER,
    sectionType: DataTypes.STRING,
    sectionContent: DataTypes.STRING,
    possiblePoints: DataTypes.INTEGER
  }, {});
  section.associate = function(models) {
    section.belongsToMany(models.course, {
      through: 'coursesSections'
    })
  };
  return section;
};
