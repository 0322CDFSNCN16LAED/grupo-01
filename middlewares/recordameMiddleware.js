function recordameMiddleware (req, res, next){
    next();

    if(req.cookies.recordame != undefined && req.session.userFind == undefined ){
    
    }

}

module.exports = recordameMiddleware;
