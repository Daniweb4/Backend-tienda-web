const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_vencimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    }
    //proveedorId
});

module.exports = Product;
