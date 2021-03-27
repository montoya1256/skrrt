'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagName = sequelize.define('TagName', {
    title: DataTypes.STRING
  }, {});
  TagName.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'tagNameId',
      through: 'Tags',
      otherKey: 'photoId'
    }
    TagName.belongsToMany(models.Photo, columnMapping)
  };
  return TagName;
};
