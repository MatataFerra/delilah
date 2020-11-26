//crear CRUD de usuarios
const express = require('express');
const router = express.Router();
const { User } = require('../models/Usuario');
const bcrypt = require('bcrypt');
const service = require('../service/token');

// const body = {
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     telefono: req.body.telefono,
//     direccion: req.body.direccion,
// }


const logginUser = router.post('/', async (req, res) => {
    try {     

        const user = await User.findOne({ where: {email: req.body.email}})

        if(user) {
            const comparedPassword = bcrypt.compareSync(req.body.password, user.password);
            if(comparedPassword) {
                console.log('comparando contraseñas');
                const token = service.createToken(user);
                req.headers.authorization = token
                return res.status(201).send({ message: 'Usuario loggeado correctamente'});
            } else {
                return res.status(403).send({ message: 'Contraseña incorrecta'});
            }
        } else { 
            res.json({message: 'El usuario no existe o es incorrecto'})
        }

        return token
    } catch (error) {
        
        res.send(error);
    }
});



const allUsers = router.get('/', async (req, res)=> {
    try {

        console.log('ingresando a allusers')

        const usuarios = await User.findAll();
        res.send({usuarios: usuarios});

    } catch (err) {
        res.json(err)
    }
});



const updateUser = router.put('/:_id', async (req, res)=> {

    console.log('ingresando a update')

    try {
        await User.update(req.body, {
            where: { _id: req.params._id }
        });
    
        res.json({success: 'Se ha modificado el usuario'})
    } catch (error) {
        console.log(error);
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

module.exports = { allUsers , logginUser, updateUser, deleteUser }