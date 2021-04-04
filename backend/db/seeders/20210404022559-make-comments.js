'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 3,
        userId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 4,
        userId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 7,
        userId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 9,
        userId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 10,
        userId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        photoId: 5,
        userId: 1,
      },
      {
        description: 'Cool car',
        photoId: 1,
        userId: 1,
      },
      {
        description: 'Love the miata',
        photoId: 1,
        userId: 2,
      },
      {
        description: 'Wow thats a great picture',
        photoId: 1,
        userId: 2,
      },
      {
        description: 'Cool car',
        photoId: 2,
        userId: 1,
      },
      {
        description: 'Wow thats a great picture',
        photoId: 2,
        userId: 2,
      },
      {
        description: 'Wow thats a great picture',
        photoId: 3,
        userId: 2,
      },
      {
        description: 'Howd you get that shot',
        photoId: 3,
        userId: 2,
      },
      {
        description: 'looks great',
        photoId: 3,
        userId: 2,
      },
      {
        description: 'Best color on that car',
        photoId: 3,
        userId: 2,
      },
      {
        description: 'nothing better than this',
        photoId: 4,
        userId: 2,
      },
      {
        description: 'Speechless',
        photoId: 5,
        userId: 2,
      },
      {
        description: 'A picture can mean 1000 words',
        photoId: 5,
        userId: 2,
      },
      {
        description: 'Wow, just wow',
        photoId: 6,
        userId: 2,
      },
      {
        description: 'Duis aute irure dolor in reprehenderit in voluptate',
        photoId: 4,
        userId: 2,
      },
      {
        description: 'Duis aute irure dolor in reprehenderit in voluptate',
        photoId: 9,
        userId: 2,
      },
      {
        description: 'Duis aute irure dolor in reprehenderit in voluptate',
        photoId: 13,
        userId: 2,
      },
      {
        description: 'You took that yourself',
        photoId: 9,
        userId: 2,
      },
      {
        description: 'This is a gret shot',
        photoId: 10,
        userId: 2,
      },
      {
        description: 'Unbelievable',
        photoId: 13,
        userId: 2,
      },
      {
        description: 'I wish this was my car',
        photoId: 10,
        userId: 2,
      },
      {
        description: 'Another great picture',
        photoId: 5,
        userId: 2,
      },
      {
        description: 'Please subscibe to my youtube channel',
        photoId: 14,
        userId: 2,
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
