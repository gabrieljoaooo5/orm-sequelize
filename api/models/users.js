'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Classes, {
        foreignKey: 'teacherId'
      })
      Users.hasMany(models.Enrollments, {
        foreignKey: 'studentId'
      })
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateFunction: function(data) {
          if (data.length < 3) throw new Error('name field must be more than 3 characters.')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email type data.'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      all: {
        where: {}
      }
    }
  });
  return Users;
};