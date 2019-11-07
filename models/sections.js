module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
      // Giving the Students model a name of type STRING
      subject: DataTypes.STRING,
      course_number: DataTypes.INTEGER,
      sec: DataTypes.INTEGER,
      title: DataTypes.STRING,
      cr: DataTypes.INTEGER,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      days: DataTypes.STRING
    });  
    return Classes;
  };