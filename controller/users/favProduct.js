const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const Product = require('../../models/Product');
const Fav = require('../../models/favProduct');

const addFav = router.post('/', async (req, res)=> {
    try {
        const {productId} = req.body 
        const userReq = await req.userId;
        const user = await User.findByPk(userReq);
        const oneUser = user._id
        
    
        if(oneUser !== userReq){
            return res.status(404).send({Error: 'Hubo un error a la hora de identificar al usuario que está haciendo la operación. Vuelva a loggearse'})
        }
    
        if(!productId){
            return res.status(400).send({Error: '¿Seguro querés que te llevemos nada?, ingresá 1 o más artículos y disfrutá'})
        }
        const userFavProducts = []
        let favProducts = [];
    
        if(productId.length == 1) {
            favProducts.push(productId)
        } else {
            productId.forEach(elem => {
                favProducts.push(elem)
            })
        }
    
        const AllProductsId = favProducts.reduce((accumulator, current) => {
            if (!accumulator) return [current];
    
            const userFavProduct = accumulator.find(d => d === current);
            if (!userFavProduct) {
                accumulator.push(current);
                return accumulator;
            } else {
                return accumulator;
            }
        }, undefined);
    
        for(let i = 0; i < AllProductsId.length; i++) {
            const product = await Product.findByPk(AllProductsId[i]);
            userFavProducts.push(product._id);

            await user.addProducts(userFavProducts)
            console.log(product._id);
        }


    
        res.send({
            message: 'Producto agregado a favoritos',
            FavouriteProduct: userFavProducts
        
        });
        
            return res.status(200)
    } catch (error) {
        console.log(error);
        res.status(403).send({Error: error})
    }
})

module.exports = {
    addFav
}