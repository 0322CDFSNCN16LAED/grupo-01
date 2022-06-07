const express = require("express");
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");

const router = express.Router();

const controller = require("../controller/maincontroler");





router.get("/", controller.home);
router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/detalleproducto/:id", controller.detalleproducto);
router.get("/carrito", controller.carrito);
router.get("/producto", controller.productos);
router.get("/listaProductos", controller.listarProductos);
router.get("/busqueda", controller.busqueda);
router.get("/editarProducto/:id", controller.editarProducto);



module.exports = router
