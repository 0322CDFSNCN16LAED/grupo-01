const express = require("express");
const multer = require("multer");
const path = require("path");
const { append } = require("express/lib/response");
const { home } = require("../controller/maincontroler");

const router = express.Router();

const controller = require("../controller/maincontroler");
const { check, body, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const masterMiddleware = require("../middlewares/masterMiddleware");

const validateRegister = [
  body("nombre")
    .notEmpty()
    .withMessage("Debes completar el campo nombre")
    .isLength({ min: 2 })
    .withMessage("Debe tener al menos dos caracteres"),
  body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
  body("nacimiento")
    .notEmpty()
    .withMessage("Debe completar el campo nacimiento"),
  body("sexo").notEmpty().withMessage("Debes completar el campo sexo"),
  body("celular").notEmpty().withMessage("Debes completar el campo celular"),

  body("email").isEmail().withMessage("Debes completar un correo válido"),
  body("contrasena")
    .notEmpty()
    .withMessage("Debes completar el campo contraseña ")
    .isLength({ min: 8 })
    .withMessage("Debe tener al menos ocho caracteres"),
  //.matches(/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/).withMessage('Debe contener ciertos caracteres')
  body("categoriaInteres")
    .notEmpty()
    .withMessage("Debes seleccionar al menos una opción"),
  //body("password").custom((value, { req }) => {
  //  if (value !== req.body.password) {
  //    throw new Error("Las contraseñas no coincidennnnn");
  // } else {
  //   return true;
  // }
  //}),
];
const validateLogin = [
  check("email").isEmail().withMessage("El email no es válido"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 carácteres"),
];

const validaterProducter = [
  body("nombre")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .isLength({ min: 5 })
    .withMessage("Debe tener al menos 5 caracteres"),
  body("descrpcion")
    .isLength()
    .withMessage("Debe tener al menos 20 caracteres"),
];

const userStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../public/images/imageUsers"));
  },
  filename: (req, file, callback) => {
    const newName = Date.now() + path.extname(file.originalname);
    callback(null, newName);
  },
});

const upload = multer({ storage: userStorage });

const productStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, callback) => {
    const newName = Date.now() + path.extname(file.originalname);
    callback(null, newName);
  },
});

const productupload = multer({ storage: productStorage });

router.get("/", controller.home);
router.get("/help", controller.help);
router.get("/contacto", controller.help);
//proceso de login
router.get("/login", guestMiddleware, controller.login);
router.post("/login", validateLogin, controller.processlogin);

router.get("/detalleproducto/:id", controller.detalleproducto);
router.get("/carrito", controller.carrito);

router.get("/listaProductos", controller.listarProductos);
router.get("/busqueda", controller.busqueda);

router.get("/editarProducto/:id", masterMiddleware, controller.editarProducto);
router.put(
  "/editarProducto/:id",
  productupload.single("imagen"),
  controller.editProducto
);

router.get("/crearProducto", masterMiddleware, controller.createProducto);
router.post(
  "/crearProducto",
  productupload.single("imagen"),
  validaterProducter,
  controller.guardarProducto
);
router.post("/carrito", controller.carrito);
router.post("/carrito/:id", controller.addCarrito);
router.delete("/eliminarProducto/:id", controller.eliminarProducto);

router.get("/userList", masterMiddleware, controller.listarUsuario);

//perfil de usuario
router.get("/detalleUser/:id", authMiddleware, controller.detalleUsuario);

router.get("/crearUsuario", guestMiddleware, controller.createUsuario);
router.post(
  "/crearUsuario",
  upload.single("imagenusuario"),
  validateRegister,
  controller.guardarUsuario
);
router.get("/editUser/:id", authMiddleware, controller.editUser);
router.put("/editUser/:id", upload.single("imagen"), controller.userEdited);
router.delete("/eliminarUsuario/:id", controller.eliminarUsuario);

router.get("/", controller.login);

module.exports = router;
