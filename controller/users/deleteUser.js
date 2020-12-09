const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');

module.exports = router.delete('/:_id', async (req, res)=>{
    try {
        const user = await User.findOne({
            where: { _id: req.params._id }
        });

        if(user._id == req.userId) {
            await user.destroy();
            res.json({
                message: 'Usuario borrado con éxito'
            })
            return res.status(200)
        } else if (user._id !== req.userId){
            res.json({Error: 'Lo siento no podés borrar a este usuario'});
            return res.status(403)
        }

    } catch (error) {
        res.status(403).send({Error: error});
    }
})