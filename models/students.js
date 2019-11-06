module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
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