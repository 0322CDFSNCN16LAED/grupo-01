const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../../database/db.js");
const dbp = require("../../database/models");

module.exports = {
    listarProductos : (req,res) => {
        dbp.Productos.findAll({
          attributes: [
            "nombre",
            "precio",
            "descripcion",
            "descuento",
            "presentacion",
            "relevancia",
            "imagen",
          ],
        }).then((productos) => {
          res.status(200).json({
            meta: {
              status: 200,
              url: req.originalUrl,
              total: productos.length,
            },
            data: productos,
          });
        });
    },
    detalleProducto : (req,res) => {
            dbp.Productos.findByPk(req.params.id, {
              include: [{ association: "reemplaza" }],
            })
            .then((productoDetalle) => {
              res.status(200).json({
                meta: {
                  status: 200,
                },
                data: productoDetalle
              })
            })
    },
    createProducto : (req,res) => {
        if (req.file) {
          dbp.Productos.create({
            ...req.body,
            imagen: req.file.filename,
          }).then((producto) => {
            res.status(201).json({
                meta: {
                    status: 201,
                },
                data: producto
            })
          });
        } else {
          dbp.Productos.create({
            ...req.body,
            imagen: "nugget.jpg",
          }).then((producto) => {
            res.status(201).json({
              meta: {
                status: 201,
              },
              data: producto
            });
          });
        }

    },
    productEdited : (req,res) => {
        dbp.Productos.findByPk(req.params.id)
        .then((producto) => {
          producto.set(req.body);
          if (req.file) {
            producto.imagen = req.file.filename;
          }
          else {
            producto.imagen = "nugget.jpg"
          }
          producto.save()
          .then((productEdited) => {
            res.status(200).json({
              meta: {
                status: 200,
              },
              data: productEdited,
            });
          });
        });


    },
    eliminarProducto : (req,res) => {
        dbp.Productos.findByPk(req.params.id)
        .then((producto) => {
          producto.destroy()
          .then(() => {
            res.status(200).json({
              meta: {
                status: 200,
              },
              data: "producto eliminado correctamente",
            });
          });
        });

    }
}
