const express = require("express");
const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response.js");
const fs = require ("fs");
const path = require ("path");
const db = require ("../../database/db.js");
const bcryptjs = require ('bcryptjs');
const dbp = require("../../database/models")
const { v4 } = require("uuid");
const { generateKeySync } = require("crypto");
const uuid = v4






const controller = {


    listarUsuario : (req,res)=>{
       dbp.Usuarios.findAll({
        attributes : ["nombre", "apellido", "email", "sexo"],
       }).then((usuarios)=>{
        res.status(200).json({
            meta : {
                status : 200,
                url : req.originalUrl,
                total : usuarios.length,
                
            },
            data : usuarios
        });
       });
       
    },

    detalleUsuario : (req,res)=>{
        
        dbp.Usuarios.findByPk(req.params.id,{
            attributes : ["idUsuario","nombre", "apellido", "email", "sexo"],
        })
        .then((usuarioDetalle)=>{
            res.status(200).json({
                meta : {
                    status : 200,
                   
                },
                data : usuarioDetalle
            })
        })
        
        
    },



    createUsuario : (req,res) => {

        
        dbp.Usuarios.create({
            ...req.body,
            
            contraseña : req.body.contrasena
           

        }).then((usuario)=>{
            res.status(200).json({
                meta : {
                    status : 200,
                   
                },
                data : usuario
            })
        })

    },

    

eliminarUsuario : (req,res)=>{
    dbp.Usuarios.destroy( {
        where : {
            idUsuario : req.params.id
        }
    } 
        
    )
    .then(response=>{
        res.json(response)
        })
    
    


},

    

userEdited : (req,res) => {
    dbp.Usuarios.update({
        ...req.body  ,
        contraseña : req.body.contrasena 
    }, {
        where : {idUsuario : req.params.id}
    })
    .then((usuarioEdited)=>{
        res.status(200).json({
            meta : {
                status : 200,
               
            },
            data : usuarioEdited
        })
    })
    


     
}


}


   





module.exports = controller