const { User, role } = require('../models/Usuario')

const authUserRole = async (req, res, next) => {
    
    try {
        const user = await User.findOne({ where: {email: req.body.email}})

        if(!user) {
            return res.status(403).send({message: 'Usuario no registrado'})
        }
    
        if ( user.role == role.regular) {
            return res.status(401).send('No puede acceder a este sitio')
        }

        next()

    } catch (err) {
        res.send({message: err})
    }
}

const sameUser = async (req, res, next) => {
    console.log('ingresando a midd')
    const user = await User.findOne({ where: {id: req.params._id}});

    if(!user) {
        return res.status(403).send({message: 'Usuario no registrado'})
    }

    if (user){
        next()
    } 
    
    
}

module.exports = {
    authUserRole,
    sameUser
}