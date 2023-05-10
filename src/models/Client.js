const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Pet, { foreignKey: 'client_id', as: 'pets' });
    this.hasMany(models.Transaction, {
      foreignKey: 'client_id',
      as: 'transactions',
    });
  }
}

module.exports = Client;
