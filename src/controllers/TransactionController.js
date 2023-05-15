const Transaction = require('../models/Transaction');
const Service = require('../models/Service');
const Pet = require('../models/Pet');
const Client = require('../models/Client');

module.exports = {
  async index(req, res) {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id, {
      include: { association: 'transactions' },
    });
    return res.json(client.transactions);
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
    const transaction = await Transaction.create({
      pet_id,
      client_id,
      service_id,
    });
    return res.json(transaction);
  },
  async delete(req, res) {
    const { transaction_id } = req.params;
    const transaction = await Transaction.findByPk(transaction_id);
    if (!transaction) {
      return res.status(400).json({ error: 'Transaction not found' });
    }
    await transaction.destroy();
    return res.status(204).send();
  },
};
