const express = require("express");
const multer = require("multer")
const path = require("path")
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");

const router = express.Router();

const controller = require("../controller/maincontroler");

const userStorage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, path.join(__dirname, "../public/images/imageUsers") );

    },
    filename : (req, file, callback)=> {
        const newName = Date.now () + path.extname(file.originalname);
        callback(null, newName );

    }
});

const upload = multer({storage : userStorage });

const productStorage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, path.join(__dirname, "../public/images") );

    },
    filename : (req, file, callback)=> {
        const newName = Date.now () + path.extname(file.originalname);
        callback(null, newName );

    }
});

const productupload = multer({storage : productStorage });





router.get("/", controller.home);
router.get("/login", controller.login);

router.get("/detalleproducto/:id", controller.detalleproducto);
router.get("/carrito", controller.carrito);
router.get("/listaProductos", controller.listarProductos);
router.get("/busqueda", controller.busqueda);

router.get("/editarProducto/:id", controller.editarProducto);
router.put("/editarProducto/:id", controller.uploadProducto);

router.get("/crearProducto", controller.createProducto);
router.post("/crearProducto", productupload.single("imagen"), controller.guardarProducto);
router.delete("/eliminarProducto/:id", controller.eliminarProducto);



router.get("/userList", controller.listarUsuario);
router.get("/detalleUser/:id", controller.detalleUsuario);
router.get("/crearUsuario", controller.createUsuario);
router.post("/crearUsuario", upload.single("imagenusuario"), controller.guardarUsuario);
router.delete("/eliminarUsuario/:id", controller.eliminarUsuario);







module.exports = router
