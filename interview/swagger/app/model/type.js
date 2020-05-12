/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('type', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    orderNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'type'
  });

  Model.associate = function() {

  }

  return Model;
};
