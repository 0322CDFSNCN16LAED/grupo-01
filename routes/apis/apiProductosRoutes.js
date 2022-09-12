const express = require("express");
const {
  listarProductos,
  detalleProducto,
  createProducto,
  productToEdit,
  productEdited,
  eliminarProducto,
} = require("../../controller/apis/apiProductosController");
const router = express.Router();

router.get("/", listarProductos);
router.get("/detalleProducto/:id", detalleProducto);
router.post("/", createProducto);
router.put("/detalleProducto/:id", productEdited);
router.delete("/detalleProducto/:id", eliminarProducto);

module.exports = router;
