const jwt = require('jsonwebtoken');
const moment = require('moment');


//Crear token
function createToken (user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(2, 'days').unix()
    }

    return jwt.sign(payload, process.env.SECRET_KEY)
}


//token es válido y no caducó
function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, process.env.SECRET_KEY);
            if(payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado, vuelva a iniciar sesión'
                })
            }
            resolve(payload.sub)
        
        } catch (error) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

//cmprobar si el token es válido
function checkToken (token) {
    const tokenValidation = new Promise((resolve, reject) => {
        try {
            if(token) {
                jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                    if (err) {
                        reject({
                            status: 401,
                            message: 'El token es inválido'
                        });
                    } else {
                        resolve({
                            status: 200,
                            message: 'El token es correcto',
                            decoded: decoded
                        });
                    }
                });
            }
        } catch (error) {
            reject({
                status: 401,
                message: 'Invalid Token'
            })
        }
    })
        
    return tokenValidation;
}

module.exports = {
    createToken, decodeToken,
    checkToken
}