const { application } = require("express");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")


const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.use(cookieParser());
const bcryptjs = require ('bcryptjs')
const sesion = require('express-session')
app.use(sesion({secret:'shh, es un secreto'}));
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
app.use(userLoggedMiddleware);
const userMasterLoggedMiddleware = require("./middlewares/userMasterLoggedMiddleware");
app.use(userMasterLoggedMiddleware);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
app.use(express.urlencoded({ extented: false }));
app.use(express.json());
app.set("view engine", "ejs");
const mainRoutes = require("./routes/main");
const { cookie } = require("express/lib/response");
app.use("/", mainRoutes);
app.use((req, res) => {
  res.status(404).render("not-found");
});
