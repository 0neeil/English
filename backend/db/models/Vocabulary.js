const {DataTypes} = require('sequelize')
const sequelize = require('../db_connection')

const Vocabulary = sequelize.define('Vocabulary',{
    id:{
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    word:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    transcription:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    translate:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usingExample:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Vocabulary