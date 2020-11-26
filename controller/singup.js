const express = require('express');
const router = express.Router();
const { User } = require('../models/Usuario');
const bcrypt = require('bcrypt');
const service = require('../service/token');


const singUp = router.post('/', async (req, res) => {
    try {

        if(req.body.username == undefined || req.body.password == undefined || req.body.direccion == undefined) {
            console.log(body)
            return res.status(403).send({message: `Falta completar campos obligatorios`})
        }
        

        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
        service.createToken(user) 
        res.json('Usuario creado con éxito');

        return res.status(200);
        
    } catch (error) {
        console.log({message: error});

    }
});

module.exports = {
    singUp
}