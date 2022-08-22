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
        dbp.Productos.findAll()
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
        res.render("create-form-products")
    },

 
   guardarProducto : (req,res) => {
  
    
    if(req.file){
   dbp.Productos.create({
        ...req.body,
        imagen : req.file.filename,
        
        idProducto : 55 ,
        idReemplaza : 1,
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
        const users = db.getAllUsers()
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
        const users = db.getAllUsers()
       let errors = validationResult(req);
        if (errors.isEmpty()){
            if(req.file){
                const nuevoUsuario = req.body ;
                nuevoUsuario.imagenusuario = req.file.filename
                nuevoUsuario.id = db.creacionIdUser();
                nuevoUsuario.contrasena = bcryptjs.hashSync(req.body.contrasena ,10)
                users.push(nuevoUsuario) ;
                db.writeAndSaveUser(users); 

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
    let userToEdit= db.getOneUser(id);
    res.render("editUser", {userToEdit : userToEdit});
    
},
userEdited : (req,res) => {
    const users = db.getAllUsers()
    let id = req.params.id ;
     let userEdited= users.find(user => user.id == id);
     
     userEdited.nombre = req.body.nombre ;
     userEdited.apellido = req.body.apellido ;
     userEdited.nacimiento = req.body.nacimiento ;
     userEdited.sexo = req.body.sexo ;
     userEdited.celular = req.body.celular ;
     userEdited.correo = req.body.correo ;
     userEdited.categoriaInteres = req.body.categoriaInteres ;
     if(req.file){
     userEdited.imagenusuario = req.file.filename
     }

      
     db.writeAndSaveUser(users); 

     res.redirect("/userList");
 },


}


   





module.exports = controller


