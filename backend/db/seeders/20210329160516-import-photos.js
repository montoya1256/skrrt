'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        photo_url: 'https://s3.console.aws.amazon.com/s3/object/skrrt-project-flickr-clone?region=us-east-2&prefix=roberto-nickson-zu95jkyrGtw-unsplash.jpg',
        title: 'Red Hyundai',
        description: 'Picture of my car on this beautiful sunset',
        userId: 1,
      },
      {
        photo_url: 'https://s3.console.aws.amazon.com/s3/object/skrrt-project-flickr-clone?region=us-east-2&prefix=peter-broomfield-m3m-lnR90uM-unsplash.jpg',
        title: 'Orange BMW in california',
        description: 'If you find my photos useful, please consider subscribing to me on YouTube for the occasional photography tutorial and much more - https://bit.ly/3smVlKp',
        userId: 1,
      },
      {
        photo_url: 'https://s3.console.aws.amazon.com/s3/object/skrrt-project-flickr-clone?region=us-east-2&prefix=mathieu-renier-4WBvCqeMaDE-unsplash.jpg',
        title: 'Baltimore, United States',
        description: 'I shot this while doing a job for a luxury automotive storage facility in Baltimore, MD. I wanted to create an ominous sense of intrigue, giving the feeling of a space that was both expansive and enclosed. I enjoy the journey my eyes take from the focal point of the headlamps to the contours of the Camero’s body, and then to the backdrop of stacked automobiles.',
        userId: 1,
      },
      {
        photo_url: 'https://s3.console.aws.amazon.com/s3/object/skrrt-project-flickr-clone?region=us-east-2&prefix=adam-stefanca-hdMSxGizchk-unsplash.jpg',
        title: 'Photo: @alanking CAR: @mtm-usa',
        description: '',
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
