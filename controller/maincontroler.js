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

    listarProductos : (req,res)=>{
        res.render("listaProductos", {productos : productos})
    },

    detalleproducto : (req,res)=>{
        let id = req.params.id ;
        let productoDetalle= productos.find((producto) => producto.id == id); 
        
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
        res.send("ruta para guardar")
    },


    editarProducto: (req,res) => {
        let id = req.params.id ;
        let productoToEdit= productos.find((producto) => producto.id == id); 
        res.render("editarProducto", {productoToEdit : productoToEdit});
    },
    uploadProducto: (req,res) => {
        res.send("ruta pa upload")
    },

    eliminarProducto: (req,res) => {
        res.send("ruta pa eliminar")
    },
        
        

} 
    
   





module.exports = controller


