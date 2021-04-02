'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: DataTypes.STRING,
    photoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Photo, {foreignKey: 'photoId', onDelete: 'CASCADE'})
    Comment.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'CASCADE'})
  };
  return Comment;
};
