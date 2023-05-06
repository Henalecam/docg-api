const { Model, Datatypes } = require('sequelize');

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Datatypes.STRING,
        type: Datatypes.STRING,
        breed: Datatypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Pet;
