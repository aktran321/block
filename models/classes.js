module.exports = function(sequelize, DataTypes) {
  var Classes = sequelize.define("Classes", {
    // Giving the Students model a name of type STRING
    subject: DataTypes.STRING,
    course_number: DataTypes.INTEGER,
    title: DataTypes.STRING    
  });  
  return Classes;
};