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
    this.belongsToMany(models.Client, {
      foreignKey: 'service_id',
      through: 'client_services',
      as: 'clients',
    });
  }
}

module.exports = Service;
