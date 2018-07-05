'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    authId: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    idNumber: DataTypes.STRING
  });
  user.associate = function(models) {
    user.belongsTo(models.role);
    user.belongsToMany(models.disability, {
      through: 'usersDisabilities'
    });
    user.belongsToMany(models.course), {
      through: 'enrollments',
    }
  };
  return user;
};
