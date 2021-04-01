'use strict';

module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
      },
    },
    description: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    albumId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {foreignKey: 'userId'})
    Photo.belongsTo(models.Album, {foreignKey: 'albumId'})
    Photo.hasMany(models.Comment, {foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})

    const columnMapping = {
      foreignKey: 'photoId',
      through: 'Tags',
      otherKey: 'tagNameId'
    }
    Photo.belongsToMany(models.TagName, columnMapping)
  };
  return Photo;
};
