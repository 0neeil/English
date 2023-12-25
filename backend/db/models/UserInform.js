const {DataTypes} = require("sequelize")
const sequelize = require("../db_connection")

const UserInforms = sequelize.define('UserInforms',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    biography:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING
    },
    link1:{
        type: DataTypes.STRING
    },
    link2:{
        type: DataTypes.STRING
    },
    link3:{
        type: DataTypes.STRING
    },

})

module.exports = UserInforms