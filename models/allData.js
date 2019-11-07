module.exports = function(sequelize, DataTypes) {
  var AllData = sequelize.define("AllData", {
    subject: DataTypes.STRING,
    number_title: DataTypes.STRING,
    sec: DataTypes.INTEGER,
    cr: DataTypes.INTEGER,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    days: DataTypes.STRING,
    inSchedule: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });  

  AllData.associate = function(models) {
    AllData.belongsTo(models.Classes, {
      foreignKey: {
        allowNull: false
      }
    });
    AllData.hasMany(models.Students, {});
  };
  return AllData;
};