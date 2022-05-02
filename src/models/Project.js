const sequelize = require("../database/database");
const { DataTypes } = require('sequelize');
const User = require('./User');


const Project =  sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagramObject : {
        type: DataTypes.JSON,
        allowNull: true

    },
    uid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

/* User.hasMany(Project, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

Project.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
}) */



module.exports = Project;