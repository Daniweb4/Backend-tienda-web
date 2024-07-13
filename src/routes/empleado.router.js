const { getAll, create, getOne, remove, update } = require('../controllers/empleado.controller');
const express = require('express');

const routerEmpleado  = express.Router();

routerEmpleado.route('/')
    .get(getAll)
    .post(create);

routerEmpleado.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerEmpleado;