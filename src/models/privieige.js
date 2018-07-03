'use strict';
module.exports = (sequelize, DataTypes) => {
  var privilige = sequelize.define('privilege', {
    priviligeName: DataTypes.STRING
  }, {});
  privilige.associate = function (models) {
    privilige.belongsToMany(models.role, { through: 'rolesPrivileges'});
  }
  return privilige;
};
