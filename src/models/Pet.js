const { Model, DataTypes } = require('sequelize');

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        breed: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.hasMany(models.Transaction, {
      foreignKey: 'pet_id',
      as: 'transactions',
    });
  }
}

module.exports = Pet;
