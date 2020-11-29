const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');


const allUsers = router.get('/', async (req, res)=> {
    try {

        const usuarios = await User.findAll({
            attributes: {
                exclude: ['password', 'role']
            }
        });
        res.send({usuarios: usuarios});

    } catch (err) {
        res.json(err)
    }
});


const deleteUser = router.delete('/:_id', async (req, res)=>{
    try {
        await User.destroy({
            where: {_id: req.params._id}
        });
        res.json({success: 'se ha borrado el usuario'});
    } catch (error) {
        console.log(error);
    }
})

module.exports = { allUsers }