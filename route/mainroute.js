const express = require("express");
const { append } = require("express/lib/response");
const { home } = require("../controller/controler");

const router = express.Router();

const controler = require("../controller/controler");





router.get("/", controler.home);
router.get("/login", controler.login);
router.get("/register", controler.register);
router.get("/detalleproducto", controler.detalleproducto);
router.get("/carrito", controler.carrito);
router.get("/producto", controler.productos);
router.get("/cargaproducto", controler.cargaproducto);



module.exports = router
