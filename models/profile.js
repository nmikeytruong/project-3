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
      lookingFor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      interests: {
        type: DataTypes.TEXT
      },
      aboutMe: {
        type: DataTypes.TEXT
      }
    });
    return Profile;
  };
  