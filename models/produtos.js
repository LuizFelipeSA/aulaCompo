'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produtos.belongsTo(models.categorias, {
        foreignKey: 'categoriaId',
        as: 'categorias'
      })
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};