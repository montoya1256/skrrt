'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501185440.jpg',
        title: 'Sleepy Miata',
        description: 'Taken in my backyard',
        userId: 1,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501400063.jpg',
        title: 'Blue Ferrari',
        description: 'On the road enjoying the speed',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501453220.jpg',
        title: 'Ready to be taken out',
        description: 'Show room car. unbeliveable',
        userId: 3,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501540986.jpg',
        title: 'Autumn',
        description: 'Fall pictures with a car are always the best',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501600245.jpg',
        title: 'Half cut',
        description: 'Loving the red on this car',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501646850.jpg',
        title: 'Is that a Supra?',
        description: 'Yes it is a Supra :)',
        userId: 3,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501689641.jpg',
        title: 'Im feeling Blue',
        description: 'Just another parking lot picture :P',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501767966.jpg',
        title: 'Nissan GTR',
        description: 'Will never get tired of looking at this picture',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501813363.jpg',
        title: 'Flexing the Morimoto',
        description: 'Yellow has never looked better ',
        userId: 3,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501864260.jpg',
        title: 'Night life',
        description: '',
        userId: 3,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501907149.jpg',
        title: 'Its ALIVE',
        description: 'Clean car is a happy car',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617501962880.jpg',
        title: 'The start of the Supra',
        description: 'Nothing will ever beat the feeling of owning a supra',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502015990.jpg',
        title: 'My little Hyundai',
        description: '',
        userId: 4,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502058968.jpg',
        title: 'Drifting the streets',
        description: '',
        userId: 3,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502210747.jpg',
        title: 'The one you should be worried about ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502255925.jpg',
        title: 'Reminds me of the snow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502301445.jpg',
        title: 'The perfect background',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502351193.jpg',
        title: 'The Audi we all want',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502398931.jpg',
        title: 'Who said I cant have all white ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId: 2,
        albumId: 1
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617502437005.jpg',
        title: 'What a car XOXO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId: 2,
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
