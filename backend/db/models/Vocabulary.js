const {DataTypes} = require('sequelize')
const sequelize = require('../db_connection')
const UserVocabularies = require('./UserVocabulary')

const Vocabularies = sequelize.define('Vocabularies',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    wordId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false
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

// Vocabularies.hasOne(UserVocabularies, {foreignKey: 'wordId', as: 'uservocabularies'})
// UserVocabularies.belongsTo(Vocabularies, {foreignKey: 'wordId', as: 'vocabularies'})

module.exports = Vocabularies