'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TagNames', [
      {title: 'Honda'},
      {title: 'Nissan'},
      {title: 'Chevrolet'},
      {title: 'Toyota'},
      {title: 'Acura'},
      {title: 'Audi'},
      {title: 'BMW'},
      {title: 'Aston Martin'},
      {title: 'Avanti'},
      {title: 'Bugatti'},
      {title: 'Buick'},
      {title: 'Cadillac'},
      {title: 'Chrysler'},
      {title: 'Dodge'},
      {title: 'Ferrari'},
      {title: 'Ford'},
      {title: 'Hyundai'},
      {title: 'Infiniti'},
      {title: 'Jaguar'},
      {title: 'Kia'},
      {title: 'Lamborghini'},
      {title: 'Lexus'},
      {title: 'Lincoln'},
      {title: 'Lotus'},
      {title: 'Masarati'},
      {title: 'Maybach'},
      {title: 'Mazda'},
      {title: 'Mercedes-enz'},
      {title: 'Mercuri'},
      {title: 'Mini'},
      {title: 'Mitsurbishi'},
      {title: 'Morgan'},
      {title: 'Panoz'},
      {title: 'Pontiac'},
      {title: 'Porsche'},
      {title: 'Rolls-Royce'},
      {title: 'Saab'},
      {title: 'Saleen'},
      {title: 'Saturn'},
      {title: 'Scion'},
      {title: 'Subaru'},
      {title: 'Suzuki'},
      {title: 'Volkswagon'},
      {title: 'Volvo'},
    ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('TagNames', null, {});
  }
};
