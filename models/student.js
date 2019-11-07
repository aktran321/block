module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Students.associate = function(models) {
    Students.belongsTo(models.AllData, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Students;
};