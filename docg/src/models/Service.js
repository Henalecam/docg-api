const { Model, Datatypes } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        value: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Service;
