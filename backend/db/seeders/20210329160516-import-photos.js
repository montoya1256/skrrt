'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119159463.jpg',
        title: 'HD PC JDM WALLPAPER',
        description: '',
        userId: 1,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119153146.jpg',
        title: 'Best of JDM 2018',
        description: '',
        userId: 1,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119137282.jpg',
        title: 'Why we love JDM',
        description: 'We spend countless hours every day looking at other people’s car builds, searching for cars we can’t afford, researching the perfect mod that would improve our vehicle even if only by a little bit. A connection with our cars that breeds love, hate, sadness, and anger. That same connection led us to new friendships, it led us to discover a second family, the car community.',
        userId: 1,
        albumId: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
