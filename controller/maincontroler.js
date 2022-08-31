const express = require("express");
const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response.js");
const fs = require ("fs");
const path = require ("path");
const db = require ("../database/db.js");
const bcryptjs = require ('bcryptjs');
const dbp = require("../database/models")
const { v4 } = require("uuid")
const uuid = v4



const productos = db.getAll() ;
const users = db.getAllUsers() ;


const controller = {

   
    home : (req,res)=>{
        dbp.Productos.findAll()
        .then(function(productos){
            res.render("home", {productos : productos})
        })
    },
    
    login : (req,res)=> {
        
        res.render("login")
    },
    processlogin : (req,res)=>{

        
        const users = db.getAllUsers()

        const email = req.body.email;
        const password = req.body.Password;

        userFind = users.find(user =>user.correo == email);

        let errors = validationResult(req)

        if(errors.isEmpty){

        if(userFind) {
            if (bcryptjs.compareSync(password ,userFind.contrasena)){

                req.session.usuarioLogueado = userFind;


                if (req.body.recordame != undefined) {
                    res.cookie('recordame', req.body.email, { maxAge: 60000 })
                }

                res.redirect("/")
            }else {
                res.render("login", { errors : { password : { msg : "credenciales invalidas"}}})
            }
            }else {
                res.render("login", { errors : { email : { msg : "usuario inexistente"}}})
            }
    }



    },
      
                
        
        //if (usuarioALoguearse == undefined){
          //  return res.render ('login', {errors: [
            //    {msg: 'credenciales incorrectas'}
           // ]});
       
    

      //      req.session.usuarioLogueado = usuarioALoguearse;
        //    res.render ('exitoso');
            

    
   
    listarProductos : (req,res)=>{
        dbp.Productos.findAll({include : [{association : "reemplaza"}]})
        .then(function(productos){ 
            res.render("listaProductos", {productos : productos})
        })
    
    },

    detalleproducto : (req,res)=>{
        let id = req.params.id ;
        dbp.Productos.findByPk(id)
        .then((productoDetalle)=>{
            res.render("detalleproducto", {productoDetalle : productoDetalle})
        })
        
        
    },

    carrito : (req,res)=>{
        
        res.render("carrito", {productoDetalle : productoDetalle})
    },

    addCarrito : (req,res)=>{
        let id = req.params.id ;
        let productoDetalle= db.getOne(id); 
        
        res.render("carrito", {productoDetalle : productoDetalle})
    },
    busqueda : (req,res) => {
        
    },
    createProducto : (req,res) => {
        dbp.Reemplaza.findAll()
        .then((reemplaza)=>{
            res.render("create-form-products", {reemplaza : reemplaza})
        })
        
    },

 
   guardarProducto : (req,res) => {
  
    
    if(req.file){
    dbp.Productos.create({
        ...req.body,
        imagen : req.file.filename,
        
    })
    .then((producto)=>{
        res.redirect("/listaProductos") ;
})   

}else{
    res.render("create-form-products")
}
}
,
   


    editarProducto: (req,res) => {
        let id = req.params.id ;
        dbp.Productos.findByPk(id)
        .then((productToEdit)=>{
            res.render("editarProducto", {productToEdit : productToEdit});
        })
        
    },
    editProducto: (req,res) => {
        
        
        dbp.Productos.update({
            ...req.body
        }, {
            where : {idProducto : req.params.id}
        })
        .then((productoEdited)=>{
            res.redirect("/listaProductos");
        })
        
       
    },


    eliminarProducto: (req,res) => {
        const productos = db.getAll() ;
        const id = req.params.id ;
        const filtrados = productos.filter((product) => product.id != id) ;
        db.writeAndSave(filtrados); 
        res.redirect("/listaProductos");
        
    },

    listarUsuario : (req,res)=>{
        dbp.Usuarios.findAll()
        .then((users)=>{
            res.render("usersList", {users : users})
        })
       
    },

    detalleUsuario : (req,res)=>{
        let id = req.params.id ;
        dbp.Usuarios.findByPk(id)
        .then((usuarioDetalle)=>{
            res.render("detalleusuario", {usuarioDetalle : usuarioDetalle})
        })
        
        
    },



    createUsuario : (req,res) => {

        
        res.render("register")

    },

    guardarUsuario : (req,res) => {
        
        let errors = validationResult(req);
        if (errors.isEmpty()){
            if(req.file){
                
                dbp.Usuarios.create({
                    ...req.body,
                    imagen : req.file.filename,
                    contraseña : req.body.contrasena
                   

                })
                

                res.redirect("/") ;
            }

        }else{

            res.render('register', {errors : errors.mapped(0)});
        }
} ,

eliminarUsuario : (req,res)=>{
    const users = db.getAllUsers()
    const id = req.params.id
    usersFilter = users.filter((user)=> user.id != id);
    db.writeAndSaveUser(usersFilter); 
    res.redirect("/userList");
    


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
        ...req.body   
    }, {
        where : {idUsuario : req.params.id}
    })
    .then((usuarioEdited)=>{
        res.redirect("/userList");
    })
    


     
}


}


   





module.exports = controller


