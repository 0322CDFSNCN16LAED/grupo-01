const express = require("express");

const usuariosRoutes = require("./usuariosApiRoutes")

const router = express.Router();

router.use("/usuarios", usuariosRoutes);





module.exports = router