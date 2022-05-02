const sequelize = require("../database/database");
const { DataTypes } = require('sequelize');
const Project = require("./Project");


const Session = sequelize.define('sessions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fechaSesion: {
        type: DataTypes.DATE,
    },
    horaIinicio: {
        type: DataTypes.DATE,
    },
    horaFin: {
        type: DataTypes.DATE,
    }
})


Project.hasMany(Session, {
    foreignKey: 'projectId',
    sourceKey: 'id'
});

Session.belongsTo(Project, {
    foreignKey: 'projectId',
    targetKey: 'id'
})

module.exports = Session;