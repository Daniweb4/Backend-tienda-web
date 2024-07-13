const express = require('express');
const routerEmpleado = require('./empleado.router');
const routerProduct = require('./product.router');
const routerProveedor = require('./proveedor.router');


const router = express.Router();

// colocar las rutas aquí
router.use('/empleado', routerEmpleado)
router.use('/product',routerProduct)
router.use('/proveedor',routerProveedor)


module.exports = router;