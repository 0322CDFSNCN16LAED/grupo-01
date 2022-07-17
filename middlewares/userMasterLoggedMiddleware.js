function userMasterLoggedMiddleware(req,res,next){
    res.locals.masterLogged = false;
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.id == 12){
        
        res.locals.masterLogged = true
    }
    next()
}
module.exports = userMasterLoggedMiddleware