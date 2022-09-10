const express = require("express");
const {
  listarUsuario,
  detalleUsuario,
} = require("../../controller/apis/usuariosController");
const router = express.Router();

router.get("/", listarUsuario);
router.get("/detalleUsuario/:id", detalleUsuario);
router.post("/detalleUsuario/:id", detalleUsuario);

module.exports = router;
