const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Transaction, {
      foreignKey: 'service_id',
      as: 'transactions',
    });
  }
}

module.exports = Service;
