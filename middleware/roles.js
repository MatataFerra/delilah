const { User, role } = require('../models/Usuario');


const authUserRole = async (req, res, next) => {
    
    try {
        const user = await User.findOne({ where: {email: req.body.email}})

        if(!user) {
            return res.status(403).send({message: 'Usuario no registrado'})
        }
    
        if (user.role == role.regular) {
            return res.status(401).send('No puede acceder a este sitio')
        }

        if (!req.body) {
            return res.json({
                Error: 'No ha proporcionado ningún dato'
            })
        }

        next()

    } catch (err) {
        res.json({message: err})
    }
}


module.exports = {
    authUserRole,
}