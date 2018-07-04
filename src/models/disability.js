'use strict';
module.exports = (sequelize, DataTypes) => {
  var disability = sequelize.define('disability', {
    disabilityType: DataTypes.STRING
  }, {});
  disability.associate = function(models) {
    disability.belongsToMany(models.user, {
      through: 'usersDisabilities'
    });
  };
  return disability;
};
