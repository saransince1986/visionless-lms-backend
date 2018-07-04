'use strict';
module.exports = (sequelize, DataTypes) => {
  var privilege = sequelize.define('privilege', {
    privilegeName: DataTypes.STRING
  }, {});
  privilege.associate = function (models) {
    privilege.belongsToMany(models.role, { through: 'rolesPrivileges'});
  }
  return privilege;
};
