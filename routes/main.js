const express = require("express");
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");

const router = express.Router();

const controller = require("../controller/maincontroler");





router.get("/", controller.home);
router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/detalleproducto", controller.detalleproducto);
router.get("/carrito", controller.carrito);
router.get("/producto", controller.productos);
router.get("/cargaproducto", controller.cargaproducto);
router.get("/busqueda", controller.busqueda);



module.exports = router
