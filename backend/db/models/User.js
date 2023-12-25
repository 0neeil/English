const { DataTypes } = require('sequelize');
const sequelize = require('../db_connection');
const UserInforms = require('./UserInform'); 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "USER"
  },
  isbanned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});

User.hasOne(UserInforms, { foreignKey: 'userId', as: 'userinforms' });
UserInforms.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = User;