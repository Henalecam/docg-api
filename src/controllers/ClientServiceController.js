const ClientService = require('../models/ClientService');
const Client = require('../models/Client');
const Pet = require('../models/Pet');
const Service = require('../models/Service');

module.exports = {
  async index(req, res) {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id, {
      include: { association: 'services' },
    });
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }
    return res.json(client.services);
  },
  async store(req, res) {
    const { client_id } = req.params;
    const { pet_id, service_id } = req.body;

    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }
    const pet = await Pet.findByPk(pet_id);
    if (!pet) {
      return res.status(400).json({ error: 'Pet not found' });
    }
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(400).json({ error: 'Service not found' });
    }
    const clientService = await ClientService.create({
      client_id,
      pet_id,
      service_id,
    });
    return res.json(clientService);
  },
  async delete(req, res) {
    const { client_id } = req.params;
    const { pet_id, service_id } = req.body;

    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }
    const pet = await Pet.findByPk(pet_id);
    if (!pet) {
      return res.status(400).json({ error: 'Pet not found' });
    }
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(400).json({ error: 'Service not found' });
    }
    await ClientService.destroy({
      where: {
        client_id,
        pet_id,
        service_id,
      },
    });
    return res.status(204).send();
  },
};
