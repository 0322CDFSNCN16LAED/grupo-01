const db = require ("../database/db.js");


function recordameMiddleware (req, res, next){
    
  const emailInCookie = req.cookies.recordame ;
    const userFromCookie = db.getAllUsers().find(user => emailInCookie == user.correo);

    console.log(userFromCookie)
    
     if (userFromCookie && req.session.usuarioLogueado == undefined){
        req.session.usuarioLogueado = userFromCookie
    }

   next();

}

module.exports = recordameMiddleware;
