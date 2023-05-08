const Client = require('../models/Client');
const Pet = require('../models/Pet');
module.exports = {
  async index(req, res) {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id, {
      include: { association: 'pets' },
    });
    return res.json(client.pets);
  },
  async store(req, res) {
    const { client_id } = req.params;
    const { name, type, breed } = req.body;
    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }
    const pet = await Pet.create({
      name,
      type,
      breed,
      client_id,
    });
    return res.json(pet);
  },
};
