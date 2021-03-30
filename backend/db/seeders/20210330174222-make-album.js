'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Albums', [
    {
      title: 'Beautiful Cars',
      description: 'picture of all the cars I own in their natural habitat',
      userId: 1,
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
