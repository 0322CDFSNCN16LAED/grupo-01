const express = require("express");
const { listarUsuario, detalleUsuario, createUsuario, userEdited, eliminarUsuario} = require("../../controller/apis/usuariosController");
const router = express.Router();

router.get("/", listarUsuario);
router.get("/detalleUsuario/:id", detalleUsuario);
router.post("/", createUsuario);
router.put("/detalleUsuario/:id", userEdited);
router.delete("/detalleUsuario/:id", eliminarUsuario);



module.exports = router