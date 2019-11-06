module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
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
      },
      // will need to run JSON methods to get the specific schedule that they want to see back out
      savedSchedules: {
        type: DataTypes.JSON
      }
    });
  
    Students.associate = function(models) {
      // We're saying that students should belong to a Class
      // A Student can't be created without a Class due to the foreign key constraint
      Students.belongsTo(models.Classes, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Students;
  };