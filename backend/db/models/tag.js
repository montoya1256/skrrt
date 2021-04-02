'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    photoId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagNameId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.Photo, {foreignKey: 'photoId', onDelete: 'CASCADE'})
    Tag.belongsTo(models.TagName, {foreignKey: 'tagNameId', onDelete: 'CASCADE'})
  };
  return Tag;
};
