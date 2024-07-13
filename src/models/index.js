const Product = require("./Product");
const Proveedor = require("./Proveedor");

Product.belongsTo(Proveedor)
Proveedor.hasMany(Product )