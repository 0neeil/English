const { DataTypes } = require("sequelize");
const sequelize =  require("../db_connection");

const UserVocabularies = sequelize.define('UserVocabularies',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false
    },
    wordId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false
    },
    studyPercentage:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

module.exports = UserVocabularies