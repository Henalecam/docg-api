const { Model, DataTypes } = require('sequelize');

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        service_id: DataTypes.INTEGER,
        pet_id: DataTypes.INTEGER,
        client_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Service, { foreignKey: 'service_id', as: 'service' });
    this.belongsTo(models.Pet, { foreignKey: 'pet_id', as: 'pet' });
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}

module.exports = Transaction;
