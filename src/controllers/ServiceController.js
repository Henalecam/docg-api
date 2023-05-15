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
  async delete(req, res) {
    const { service_id } = req.params;
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(400).json({ error: 'Service not found' });
    }
    await service.destroy();
    return res.status(204).send();
  },
};
