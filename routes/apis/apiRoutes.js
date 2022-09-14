const express = require("express");

const usuariosRoutes = require("./usuariosApiRoutes");
const productosRoutes = require("./apiProductosRoutes")
const categoriasRoutes = require("./apiCategoriasRoutes")

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/productos", productosRoutes);
router.use("/categorias", categoriasRoutes);





module.exports = router
