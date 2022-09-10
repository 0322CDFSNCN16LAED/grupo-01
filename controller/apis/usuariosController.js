const express = require("express");
const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response.js");
const fs = require("fs");
const path = require("path");
const db = require("../../database/db.js");
const bcryptjs = require("bcryptjs");
const dbp = require("../../database/models");
const { v4 } = require("uuid");
const { generateKeySync } = require("crypto");
const uuid = v4;

const controller = {
  listarUsuario: (req, res) => {
    dbp.Usuarios.findAll({
      attributes: ["nombre", "apellido", "email", "sexo"],
    }).then((usuarios) => {
      res.status(200).json({
        meta: {
          status: 200,
          url: req.originalUrl,
          total: usuarios.length,
        },
        data: usuarios,
      });
    });
  },

  detalleUsuario: (req, res) => {
    dbp.Usuarios.findByPk(req.params.id, {
      attributes: ["idUsuario", "nombre", "apellido", "email", "sexo"],
    }).then((usuarioDetalle) => {
      res.status(200).json({
        meta: {
          status: 200,
        },
        data: usuarioDetalle,
      });
    });
  },

  createUsuario: (req, res) => {
    res.render("register");
  },

  guardarUsuario: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      if (req.file) {
        dbp.Usuarios.create({
          ...req.body,
          imagen: req.file.filename,
          contraseña: req.body.contrasena,
        });

        res.redirect("/");
      }
    } else {
      res.render("register", { errors: errors.mapped(0) });
    }
  },

  eliminarUsuario: (req, res) => {
    const users = db.getAllUsers();
    const id = req.params.id;
    usersFilter = users.filter((user) => user.id != id);
    db.writeAndSaveUser(usersFilter);
    res.redirect("/userList");
  },
  editUser: (req, res) => {
    let id = req.params.id;
    dbp.Usuarios.findByPk(id).then((userToEdit) => {
      res.render("editUser", { userToEdit: userToEdit });
    });
  },
  userEdited: (req, res) => {
    dbp.Usuarios.update(
      {
        ...req.body,
      },
      {
        where: { idUsuario: req.params.id },
      }
    ).then((usuarioEdited) => {
      res.redirect("/userList");
    });
  },
};

module.exports = controller;
