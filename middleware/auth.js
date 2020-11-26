const services = require('../service/token');

const tokenExpires = (req, res, next) => {

    if(!req.headers.authorization) {
        return res.status(403).send({message: 'No tienes autorización'})
    }

    const tokenJWT = req.headers.authorization.split(" ")[1];

    services.decodeToken(tokenJWT)
    .then((response) => {
        req.user = response;
        next()
    })
    .catch(err => {
        res.send(err.message)
    })
}

const hasValidToken = (req, res, next) => {

    if (typeof req.headers.authorization  !== 'string' ) {
        res.send({Error: 'Debe ingresar un token'});
        return;
    }

    const tokenJWT = req.headers.authorization.split(" ")[1];

    services.checkToken(tokenJWT)
    .then((response) => {
        console.log(response.message);
        next()
    })
    .catch(err => {
        res.send(err.message)
    })
}

module.exports = {
    tokenExpires,
    hasValidToken
}