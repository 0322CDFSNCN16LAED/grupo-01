const express = require("express");
const  listarCategorias = require("../../controller/apis/apiCategoriasProducts");
const router = express.Router();

router.get("/", listarCategorias.listarCategorias);




module.exports = router