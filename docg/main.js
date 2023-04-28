const { Sequelize } = require('sequelize');
const { Cliente, Pet } = require('./models');

const sequelize = new Sequelize('sqlite::memory:');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Cria um novo registro de Cliente
    const novoCliente = await Cliente.create({
      nome: 'Fulano de Tal',
      email: 'fulano@gmail.com',
      telefone: '(11) 9999-9999',
    });

    // Cria um novo registro de Pet, associado ao Cliente criado anteriormente
    const novoPet = await Pet.create({
      nome: 'Rex',
      especie: 'Cachorro',
      raca: 'Golden Retriever',
      clienteId: novoCliente.id,
    });

    console.log(`Cliente criado: ${JSON.stringify(novoCliente)}`);
    console.log(`Pet criado: ${JSON.stringify(novoPet)}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
