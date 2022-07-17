const db = require ("../database/db.js");


function recordameMiddleware (req, res, next){
    
    const emailInCookie = req.cookies.recordame ;
    
    

    const userFromCookie = db.getAllUsers().find(user => emailInCookie == user.correo);
    
     if (userFromCookie){
        req.session.usuarioLogueado = userFind = userFromCookie
    }


   next();

}

module.exports = recordameMiddleware;
