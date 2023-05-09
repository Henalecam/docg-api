const { Model, DataTypes } = require('sequelize');

class Client_services extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: DataTypes.INTEGER,
        pet_id: DataTypes.INTEGER,
        service_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'clients' });
    this.belongsTo(models.Pet, { foreignKey: 'pet_id', as: 'pets' });
    this.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'services',
    });
  }
}

module.exports = Client_services;
