const Client = require('../models/Client');
const Pet = require('../models/Pet');
module.exports = {
  async index(req, res) {
    const clients = await Client.findAll({
      include: { association: 'pets' },
    });
    return res.json(clients);
  },
  async store(req, res) {
    const { name, email, phone } = req.body;
    const client = await Client.create({ name, email, phone });
    return res.json(client);
  },
  async delete(req, res) {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }
    await client.destroy();
    return res.status(204).send();
  },
};
