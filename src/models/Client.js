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
    this.belongsToMany(models.Service, {
      foreignKey: 'client_id',
      through: 'client_services',
      as: 'services',
    });
  }
}

module.exports = Client;
