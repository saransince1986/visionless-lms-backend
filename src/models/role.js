'use strict';
module.exports = (sequelize, DataTypes) => {
  var role = sequelize.define('role', {
    roleName: DataTypes.STRING
  });
  role.associate = function(models){
    role.belongsToMany(models.privilege, { through: 'rolesPrivileges' });
  };
  return role;
};
