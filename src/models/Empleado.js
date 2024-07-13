const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Empleado = sequelize.define('empleado', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = Empleado;
