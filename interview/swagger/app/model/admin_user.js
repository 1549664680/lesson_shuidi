/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin_user', {
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'admin_user'
  });

  Model.associate = function() {

  }

  return Model;
};
