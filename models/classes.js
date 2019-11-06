module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
      // Giving the Students model a name of type STRING
      course: DataTypes.STRING
    });
  
    Classes.associate = function(models) {
      // Associating Students with Classes
      // When an Students is deleted, also delete any associated Classes
      Classes.hasMany(models.Students, {
        onDelete: "cascade"
      });
    };
  
    return Classes;
  };