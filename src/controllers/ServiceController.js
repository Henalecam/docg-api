const Service = require('../models/Service');
module.exports = {
  async index(req, res) {
    const services = await Service.findAll();
    return res.json(services);
  },
  async store(req, res) {
    const { title, description, price } = req.body;
    const service = await Service.create({ title, description, price });
    return res.json(service);
  },
};
