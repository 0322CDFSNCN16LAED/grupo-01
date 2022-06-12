const express = require("express");
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");

const router = express.Router();

const controller = require("../controller/maincontroler");





router.get("/", controller.home);
router.get("/login", controller.login);

router.get("/detalleproducto/:id", controller.detalleproducto);
router.get("/carrito", controller.carrito);
router.get("/listaProductos", controller.listarProductos);
router.get("/busqueda", controller.busqueda);

router.get("/editarProducto/:id", controller.editarProducto);
router.put("/editarProducto/:id", controller.uploadProducto);

router.get("/crearProducto", controller.createProducto);
router.post("/crearProducto", controller.guardarProducto);
router.delete("/eliminarProducto/:id", controller.eliminarProducto);



router.get("/userList", controller.listarUsuario);
router.get("/detalleUser/:id", controller.detalleUsuario);
router.get("/crearUsuario", controller.createUsuario);
router.post("/crearUsuario", controller.guardarUsuario);







module.exports = router
