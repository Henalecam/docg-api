const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const Cliente = sequelize.define(
  'cliente',
  {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const Pet = sequelize.define(
  'pet',
  {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    especie: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    raca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const Servico = sequelize.define(
  'servico',
  {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Pet.belongsTo(Cliente);
Cliente.hasMany(Pet);

Pet.belongsTo(Servico);
Servico.hasMany(Pet);

module.exports = {
  Cliente,
  Pet,
  Servico,
};
