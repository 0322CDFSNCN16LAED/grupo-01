const productos = require("../productos")

const controller = {

    home : (req,res)=>{
        res.render("home")
    },

    login : (req,res)=> {
        res.render("login")
    },

    register : (req,res)=> {
        res.render("register")
    },

    productos : (req,res)=>{
       
        res.render("productos", {productos : productos})
    },

    cargaproducto : (req,res)=>{
       
        res.render("cargaproducto", {productos : productos})
    },

    detalleproducto : (req,res)=>{
        res.render("detalleproducto")
    },

    carrito : (req,res)=>{
        res.render("carrito")
    },
    busqueda : (req,res) => {
        
    }
    
   


}


module.exports = controller


