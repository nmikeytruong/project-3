module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      age: {
        type: DataTypes.STRING
      },
      interests: {
        type: DataTypes.TEXT
      }
    });
    return Profile;
  };
  