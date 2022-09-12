const express = require("express");

const usuariosRoutes = require("./usuariosApiRoutes");
const productosRoutes = require("./apiProductosRoutes")

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/productos", productosRoutes);





module.exports = router
