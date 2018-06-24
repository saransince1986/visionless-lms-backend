'use strict';
module.exports = (sequelize, DataTypes) => {
  var role = sequelize.define('role', {
    roleName: DataTypes.STRING
  }, {});
  role.associate = function(models){
    role.hasMany(models.user);
  };
  return role;
};