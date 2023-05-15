const express = require('express');

const ClientController = require('./controllers/ClientController');
const PetController = require('./controllers/PetController');
const ServiceController = require('./controllers/ServiceController');
const TransactionController = require('./controllers/TransactionController');

const routes = express.Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.delete('/clients/:client_id', ClientController.delete);

routes.get('/clients/:client_id/pets', PetController.index);
routes.post('/clients/:client_id/pets', PetController.store);
routes.delete('/pets/:pet_id', PetController.delete);

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.store);
routes.delete('/services', ServiceController.delete);

routes.get('/clients/:client_id/transactions', TransactionController.index);
routes.post('/clients/:client_id/transactions', TransactionController.store);

module.exports = routes;
