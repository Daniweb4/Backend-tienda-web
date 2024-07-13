const { getAll, create, getOne, remove, update } = require('../controllers/proveedor.controller');
const express = require('express');

const routerProveedor = express.Router();

routerProveedor.route('/')
    .get(getAll)
    .post(create);

routerProveedor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerProveedor;