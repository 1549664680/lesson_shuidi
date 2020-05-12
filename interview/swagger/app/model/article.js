/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('article', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    article_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    introduce: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addTime: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    view_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'article'
  });

  Model.associate = function() {

  }

  return Model;
};
