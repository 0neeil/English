const { DataTypes } = require("sequelize");
const sequelize =  require("../db_connection");

const UserVocabulary = sequelize.define('UserVocabulary',{
    id:{
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    userId:{
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: false
    },
    wordId:{
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: false
    },
    studyPercentage:{
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = UserVocabulary