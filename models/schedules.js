module.exports = function(sequelize, DataTypes) {
  var Schedules = sequelize.define("Schedules", {
    // Giving the Students model a name of type STRING
    section_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER  
  });  
  return Schedules;
};