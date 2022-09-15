const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../../database/db.js");
const dbp = require("../../database/models");

module.exports = {
  listarCategorias: (req, res) => {
    dbp.Reemplaza.findAll({
      attributes: ["nombre"],
      include: ["productos"],
    }).then((categorias) => {
      res.status(200).json({
        meta: {
          status: 200,
          url: req.originalUrl,
          total: categorias.length,
        },
        data: categorias,
      });
    });
  },
  categoriaProductos: (req, res) => {
    db.Reemplaza.findByPk(req.params.id, {
      include: ["productos"],
    }).then((categoria) => {
      let respuesta = {
        meta: {
          status: 200,
          total: categoria.length,
          url: "/api/categorias/:id/productos",
        },
        data: categoria,
      };
      res.json(respuesta);
    });
  },
};
