'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Levels.hasMany(models.Classes, {
        foreignKey: 'levelId'
      })
    }
  }
  Levels.init({
    level_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Levels',
  });
  return Levels;
};