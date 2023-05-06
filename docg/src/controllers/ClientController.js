const Client = require('../models/Client');
module.exports = {
  async index(req, res) {
    const clients = await Client.findAll();
    return res.json(clients);
  },
};
