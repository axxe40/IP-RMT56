'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recommendation.belongsTo(models.User, { foreignKey: 'userId' });
      Recommendation.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Recommendation.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recommendation',
  });
  return Recommendation;
};