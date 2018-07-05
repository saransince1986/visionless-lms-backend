'use strict';
module.exports = (sequelize, DataTypes) => {
  var enrollment = sequelize.define('enrollment', {
    courseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  enrollment.associate = function(models) {
    // associations can be defined here
  };
  return enrollment;
};