'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/roberto-nickson-zu95jkyrGtw-unsplash.jpg',
        title: 'Red Hyundai',
        description: 'Picture of my car on this beautiful sunset',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/peter-broomfield-m3m-lnR90uM-unsplash.jpg',
        title: 'Orange BMW in california',
        description: 'If you find my photos useful, please consider subscribing to me on YouTube for the occasional photography tutorial and much more - https://bit.ly/3smVlKp',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/mathieu-renier-4WBvCqeMaDE-unsplash.jpg',
        title: 'Baltimore, United States',
        description: 'I shot this while doing a job for a luxury automotive storage facility in Baltimore, MD. I wanted to create an ominous sense of intrigue, giving the feeling of a space that was both expansive and enclosed. I enjoy the journey my eyes take from the focal point of the headlamps to the contours of the Camero’s body, and then to the backdrop of stacked automobiles.',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/adam-stefanca-hdMSxGizchk-unsplash.jpg',
        title: 'Photo: @alanking CAR: @mtm-usa',
        description: '',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119159463.jpg',
        title: 'HD PC JDM WALLPAPER',
        description: '',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119153146.jpg',
        title: 'Best of JDM 2018',
        description: '',
        userId: 1,
      },
      {
        photo_url: 'https://skrrt-project-flickr-clone.s3.us-east-2.amazonaws.com/1617119137282.jpg',
        title: 'Why we love JDM',
        description: 'We spend countless hours every day looking at other people’s car builds, searching for cars we can’t afford, researching the perfect mod that would improve our vehicle even if only by a little bit. A connection with our cars that breeds love, hate, sadness, and anger. That same connection led us to new friendships, it led us to discover a second family, the car community.',
        userId: 1,
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
