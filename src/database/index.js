const { Sequelize } = require('sequelize');

const databaseConfig = require('../config/database');

const Client = require('../models/Client');

const Pet = require('../models/Pet');

const Service = require('../models/Service');

const connection = new Sequelize(databaseConfig);

Client.init(connection);

Pet.init(connection);

Service.init(connection);

Client.associate(connection.models);

Pet.associate(connection.models);

Service.associate(connection.models);

module.exports = connection;
