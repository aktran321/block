module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
      // Giving the Students model a name of type STRING
      course: DataTypes.STRING,
      sec: DataTypes.INTEGER,
      title: DataTypes.STRING,
      cr: DataTypes.INTEGER,
      time: DataTypes.STRING,
      days: DataTypes.STRING
    });
  
    // Classes.associate = function(models) {
    //   // Associating Students with Classes
    //   // When a Student is deleted, also delete any associated Classes
    //   Classes.belongsTo(models.Students, {
    //   });
    // };
  
    return Classes;
  };