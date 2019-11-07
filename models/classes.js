module.exports = function(sequelize, DataTypes) {
  var Classes = sequelize.define("Classes", {
    subject: DataTypes.STRING,
    number_title: DataTypes.STRING,
  });  
  Classes.associate = function(models) {
    Classes.hasMany(models.AllData, {});
  };
  return Classes;
};