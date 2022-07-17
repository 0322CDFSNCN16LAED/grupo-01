function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;
    if(req.session.usuarioLogueado && req.session){
        res.locals.userLogged = req.session.usuarioLogueado;
        res.locals.isLogged = true
    }
    next()
}
module.exports = userLoggedMiddleware