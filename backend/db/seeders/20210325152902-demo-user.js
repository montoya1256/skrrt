'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.com',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'test@test.com',
        username: 'test',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'test2@test.com',
        username: 'test2',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'test3@test.com',
        username: 'test3',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
