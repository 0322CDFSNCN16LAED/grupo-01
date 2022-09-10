const express = require("express");
const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response.js");
const fs = require("fs");
const path = require("path");
const db = require("../database/db.js");
const bcryptjs = require("bcryptjs");
const dbp = require("../database/models");
const { v4 } = require("uuid");
const uuid = v4;

const productos = db.getAll();
const users = db.getAllUsers();

const controller = {
  home: (req, res) => {
    dbp.Productos.findAll().then(function (productos) {
      res.render("home", { productos: productos });
    });
  },

  login: (req, res) => {
    res.render("login");
  },
  help: (req, res) => {
    res.render("ayuda");
  },
  processlogin: (req, res) => {
    const users = db.getAllUsers();
    const email = req.body.email;
    const password = req.body.Password;

    userFind = users.find((user) => user.correo == email);

    let errors = validationResult(req);

    if (errors.isEmpty) {
      if (userFind) {
        if (bcryptjs.compareSync(password, userFind.contrasena)) {
          req.session.usuarioLogueado = userFind;

          if (req.body.recordame != undefined) {
            res.cookie("recordame", req.body.email, { maxAge: 60000 });
          }

          res.redirect("/");
        } else {
          res.render("login", {
            errors: { password: { msg: "credenciales invalidas" } },
          });
        }
      } else {
        res.render("login", {
          errors: { email: { msg: "usuario inexistente" } },
        });
      }
    }
  },

eliminarUsuario : (req,res)=>{
    dbp.Usuarios.findByPk(req.params.id).then((usuario)=>{

           

        usuario.destroy().then(()=>{

            res.redirect("/userList");

        })

    

})  

    
    


},
editUser : (req,res) => {
    
    let id = req.params.id ;
    dbp.Usuarios.findByPk(id)
    .then((userToEdit)=>{
        res.render("editUser", {userToEdit : userToEdit});
    })
    
    
    
},
userEdited : (req,res) => {
    dbp.Usuarios.update({
        ...req.body   ,
        contraseña : req.body.contrasena
    }, {
        where : {idUsuario : req.params.id}
    })
    .then((usuarioEdited)=>{
        res.redirect("/userList");
    })
    


     
}


}


   





module.exports = controller


module.exports = controller;
