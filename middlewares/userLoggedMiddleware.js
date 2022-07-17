const db = require ("../database/db.js");

function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.recordame ;
    const userFromCookie = db.getAllUsers().find(user => emailInCookie == user.correo);

    console.log(userFromCookie)
    
     if (userFromCookie && req.session.usuarioLogueado == undefined){
        req.session.usuarioLogueado = userFromCookie
    }




    if(req.session.usuarioLogueado && req.session){
        res.locals.userLogged = req.session.usuarioLogueado;
        res.locals.isLogged = true
    }
    next()
}
module.exports = userLoggedMiddleware