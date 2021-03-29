'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        photo_url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
        title: 'Red Hyundai',
        description: 'Picture of my car on this beautiful sunset',
        userId: 1,
      },
      {
        photo_url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Orange BMW in california',
        description: 'If you find my photos useful, please consider subscribing to me on YouTube for the occasional photography tutorial and much more - https://bit.ly/3smVlKp',
        userId: 1,
      },
      {
        photo_url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1147&q=80',
        title: 'Baltimore, United States',
        description: 'I shot this while doing a job for a luxury automotive storage facility in Baltimore, MD. I wanted to create an ominous sense of intrigue, giving the feeling of a space that was both expansive and enclosed. I enjoy the journey my eyes take from the focal point of the headlamps to the contours of the Camero’s body, and then to the backdrop of stacked automobiles.'
      },
      {
        photo_url: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Photo: @alanking CAR: @mtm-usa',
        description: '',
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
