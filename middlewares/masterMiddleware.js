function masterMiddleware(req,res,next) {
    if (req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.id == 12) {
        next();
    }
    else {
        res.send("Esta pagina es solo para el usuario Master")
    }
}
module.exports = masterMiddleware