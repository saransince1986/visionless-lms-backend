'use strict';
module.exports = (sequelize, DataTypes) => {
  var course = sequelize.define('course', {
    courseName: DataTypes.STRING
  }, {});
  course.associate = function(models) {
    course.belongsToMany(models.user, {
      through: 'enrollments'
    });
    course.belongsToMany(models.section, {
      through: 'coursesSections'
    });
  };
  return course;
};
