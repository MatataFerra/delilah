const { User } = require('../models/Usuario');

const userExits = async (req, res, next) => {

    try {
        const user = await User.findOne({
            where: { _id: req.userId }
        });
    
        if (user._id !== req.userId){
            res.json({Error: 'Lo siento no podés realizar esta operación'});
            return res.status(403)
        }
    
        if (user) {
            next()
        }
    } catch (error) {
        res.status(404).send({Error: error})
    }
    
}

module.exports = {
    userExits
}