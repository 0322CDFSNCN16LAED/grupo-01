const express = require("express");
const multer = require("multer")
const path = require("path")
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");


const router = express.Router();

const controller = require("../controller/maincontroler");
const {check, body, validationResult} = require('express-validator');



const validateRegister = [
    body('nombre').notEmpty() .withMessage('Debes completar este campo'),
    body('apellido').notEmpty() .withMessage('Debes completar este campo'),
    body('sexo').notEmpty().withMessage('Debes completar este campo'),
    body('celular').notEmpty() .withMessage('Debes completar este campo')
]
router.post('/crearUsuario', validateRegister, controller.createUsuario);



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
router.put("/editarProducto/:id",productupload.single("imagen"), controller.editProducto);

router.get("/crearProducto", controller.createProducto);
router.post("/crearProducto", productupload.single("imagen"), controller.guardarProducto);
router.delete("/eliminarProducto/:id", controller.eliminarProducto);



router.get("/userList", controller.listarUsuario);
router.get("/detalleUser/:id", controller.detalleUsuario);
router.get("/crearUsuario", controller.createUsuario);
router.post("/crearUsuario", upload.single("imagenusuario"), controller.guardarUsuario);
router.get("/editUser/:id", controller.editUser);
router.put("/editUser/:id",upload.single("imagen"), controller.userEdited);
router.delete("/eliminarUsuario/:id", controller.eliminarUsuario);







module.exports = router
