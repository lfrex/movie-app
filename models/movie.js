'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.User, {
        through: "UserMovie",
        foreignKey: "movieId",
        otherKey: "userId",
      });
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    director: DataTypes.STRING,
    year: DataTypes.INTEGER,
    seenAlready: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};