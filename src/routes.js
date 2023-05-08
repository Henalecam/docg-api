const express = require('express');

const ClientController = require('./controllers/ClientController');
const PetController = require('./controllers/PetController');
const ServiceController = require('./controllers/ServiceController');
const ClientServiceController = require('./controllers/ClientServiceController');

const routes = express.Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);

routes.get('/clients/:client_id/pets', PetController.index);
routes.post('/clients/:client_id/pets', PetController.store);

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.store);

routes.get('/clients/:client_id/services', ClientServiceController.index);
routes.post('/clients/:client_id/services', ClientServiceController.store);

module.exports = routes;
