const services = require('../service/token');
const moment = require('moment')

const hasValidToken = async (req, res, next) => {

    try {
        const tokenJWT = req.headers.authorization
    
        if (typeof tokenJWT  !== 'string' ) {
            res.send({Error: 'Debe ingresar un token'});
            return;
        }
    
        const tokenCheck = tokenJWT.split(" ")[1];
    
        const verifyToken = await services.checkToken(tokenCheck);

        if(verifyToken.decoded.exp <= moment().unix()) {
            res.json({
                message: 'El token ha expirado, vuelva a iniciar sesión'
            })
            return res.status(404)
        }

        if(verifyToken) {
            req.userId = verifyToken.decoded.sub
            next()
        }

        return
    
    } catch (err) {
        console.log(err.message)
        res.status(err.status).send(err.message)
    }

}

module.exports = {
    hasValidToken
}