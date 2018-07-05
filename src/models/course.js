'use strict';
module.exports = (sequelize, DataTypes) => {
  var course = sequelize.define('course', {
    className: DataTypes.STRING
  }, {});
  course.associate = function(models) {
    course.belongsToMany(models.user, {
      through: 'enrollments'
    })
  };
  return course;
};
