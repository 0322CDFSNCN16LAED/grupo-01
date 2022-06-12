const express = require("express");
const fs = require ("fs");
const path = require ("path");
const db = require ("../database/db.js")
const productos = db.getAll() ;
const users = db.getAllUsers() ;


const controller = {

    home : (req,res)=>{
        res.render("home")
    },

    login : (req,res)=> {
        res.render("login")
    },

   

    listarProductos : (req,res)=>{
        res.render("listaProductos", {productos : productos})
    },

    detalleproducto : (req,res)=>{
        let id = req.params.id ;
        let productoDetalle= db.getOne(id); 
        
        res.render("detalleproducto", {productoDetalle : productoDetalle})
    },

    carrito : (req,res)=>{
        res.render("carrito")
    },
    busqueda : (req,res) => {
        
    },
    createProducto : (req,res) => {
        res.render("create-form-products")
    },

    guardarProducto : (req,res) => {
        const nuevoProducto = req.body ;
        nuevoProducto.id = db.creacionId() ;
        productos.push(nuevoProducto) ;
        db.writeAndSave(productos);
    
        res.redirect("/listaProductos") ;
    },


    editarProducto: (req,res) => {
        let id = req.params.id ;
        let productToEdit= db.getOne(id);
        res.render("editarProducto", {productToEdit : productToEdit});
    },
    uploadProducto: (req,res) => {
       let id = req.params.id ;
        let productoEdited= productos.find(product => product.id == id);
        
        productoEdited.nombre = req.body.nombre ;
        productoEdited.descripcion = req.body.descripcion ;
        productoEdited.reemplaza = req.body.reemplaza ;
        productoEdited.precio = req.body.precio ;
        productoEdited.presentacion = req.body.presentacion ;
         
        db.writeAndSave(productos); 

        res.redirect("/listaProductos");
    },

    eliminarProducto: (req,res) => {
        const id = req.params.id ;
        const filtrados = productos.filter((product) => product.id != id) ;
        db.writeAndSave(filtrados); 
        res.redirect("/listaProductos");
        
    },

    listarUsuario : (req,res)=>{
        res.render("usersList", {users : users})
    },

    detalleUsuario : (req,res)=>{
        let id = req.params.id ;
        let usuarioDetalle= db.getOneUser(id); 
        
        res.render("detalleusuario", {usuarioDetalle : usuarioDetalle})
    },



    createUsuario : (req,res) => {
        res.render("register")
    },

    guardarUsuario : (req,res) => {
        const nuevoUsuario = req.body ;
        nuevoUsuario.id = db.creacionIdUser() ;
        users.push(nuevoUsuario) ;
        db.writeAndSaveUser(users); 
    
        res.redirect("/userList") ;       

} ,



}
    
   





module.exports = controller


