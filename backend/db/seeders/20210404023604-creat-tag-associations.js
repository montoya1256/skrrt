'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tags', [
    {
      photoId: 1,
      tagNameId: 27,
    },
    {
      photoId: 2,
      tagNameId:15 ,
    },
    {
      photoId: 3,
      tagNameId:3 ,
    },
    {
      photoId: 4,
      tagNameId:2 ,
    },
    {
      photoId: 5,
      tagNameId:17 ,
    },
    {
      photoId: 6,
      tagNameId:4 ,
    },
    {
      photoId: 7,
      tagNameId:7 ,
    },
    {
      photoId: 8,
      tagNameId:2 ,
    },
    {
      photoId: 9,
      tagNameId:2 ,
    },
    {
      photoId: 10,
      tagNameId:41 ,
    },
    {
      photoId: 11,
      tagNameId:2 ,
    },
    {
      photoId: 12,
      tagNameId:4 ,
    },
    {
      photoId: 13,
      tagNameId:17 ,
    },
    {
      photoId: 14,
      tagNameId:4 ,
    },
    {
      photoId: 15,
      tagNameId:41 ,
    },
    {
      photoId: 16,
      tagNameId:25 ,
    },
    {
      photoId: 17,
      tagNameId:2 ,
    },
    {
      photoId: 18,
      tagNameId: 6,
    },
    {
      photoId: 19,
      tagNameId:3 ,
    },
    {
      photoId: 20,
      tagNameId:16 ,
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
