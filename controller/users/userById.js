const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');


module.exports = router.get('/:_id', async (req, res)=> {
    try {

        const userById = await User.findOne({
            where: {_id: req.params._id},
            attributes: {
                exclude: ['password', 'role']
            }
        });

        if(userById._id === req.userId) {
            return res.status(200).send({user: userById});
        }

        if(userById._id !== req.userId) {
            return res.status(404).send({Error: 'No puede acceder a esta información'})
        }

    } catch (err) {
        res.json(err)
        return res.status(404)
    }
});