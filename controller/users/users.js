const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');


module.exports = router.get('/', async (req, res)=> {
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
