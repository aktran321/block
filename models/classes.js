module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Classes;
  };
  