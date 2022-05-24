const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.get("/producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/product.html"));
});
