const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const bcrypt = require('bcrypt');

module.exports = router.put('/:_id', async (req, res)=> {

    try {
        const user = await User.findOne({
            where: { _id: req.params._id }
        });

        if(user._id == req.userId) {    
            if(req.body && !req.body.password && !req.body.username){
                await user.update(req.body)
                res.json({
                    update: req.body,
                    message: 'Se ha actualizado con éxito'
                })
                return res.status(200)

            } else if(req.body.password) {
                req.body.password = bcrypt.hashSync(req.body.password, 10);
                await user.update(req.body.password)
                console.log(req.body.password);
                res.json({
                    message: 'Se ha actualizado la contraseña correctamente',
                })
                return res.status(200)
            } else if (req.body.username){
                return res.status(404).json({Error: 'No se puede modificar el nombre de usuario'})
            }
        } else if (user.id !== req.userId){
            res.json({Error: 'Lo siento no podés actualizar este usuario'});
            return res.status(403)
        }

    } catch (error) {
        return res.json(error.message);
    }
    
});