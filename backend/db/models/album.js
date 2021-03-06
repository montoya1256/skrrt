'use strict';

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 256],
      },
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Album.associate = function(models) {
    Album.hasMany(models.Photo, {foreignKey: 'albumId', onDelete: 'CASCADE'})
    Album.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'CASCADE'})
  };
  return Album;
};
