const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Proveedor = sequelize.define('proveedor', {
    nme: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Proveedor;