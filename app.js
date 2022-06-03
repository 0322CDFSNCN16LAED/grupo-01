const { application } = require("express");
const express = require("express");
const path = require("path");


const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set("view engine", "ejs")



app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

const mainroute = require("./route/mainroute");



app.use("/",mainroute)







