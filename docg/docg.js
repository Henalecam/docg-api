(async () => {
  const database = require('./config/config').development;
  const { Cliente, Pet, Servico } = require('./models/index');
  await database.sequelize.sync({ force: true });
  const cliente = await Cliente.create({
    nome: 'Henrique',
    email: 'Henrique@gmail.com',
    telefone: '999999999',
  });
  const pet = await Pet.create({
    nome: 'Rex',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    clienteId: cliente.id,
  });
  const servico = await Servico.create({
    titulo: 'Banho',
    preco: 79.9,
  });
  await pet.addServico(servico);
  const pets = await Pet.findAll({
    include: [
      {
        model: Cliente,
        as: 'cliente',
      },
      {
        model: Servico,
        as: 'servicos',
      },
    ],
  });
})();
