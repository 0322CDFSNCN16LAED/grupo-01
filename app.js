const { application } = require("express");
const express = require("express");
const path = require("path");

const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
app.use(express.urlencoded({ extented: false }));
app.use(express.json());
app.set("view engine", "ejs");
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);
app.use((req, res) => {
  res.status(404).render("not-found");
});
