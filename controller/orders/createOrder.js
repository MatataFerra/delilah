const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const { User } = require('../../models/Usuario');
const Product = require('../../models/Product');

module.exports = router.post('/', async (req, res)=> {
    try {
        //Comprobar que la orden tenga productos **OK**
        //No se pueden agregar 2 productos con el mismo ID **OK**
        //agregar contador de cantidades **OK**
        //Resolver cuando solo se quiere llevar un producto **OK**
        const {payment, productId} = req.body 
        const userReq = await req.userId;
        const user = await User.findByPk(userReq);
        const oneUser = user._id
        

        if(oneUser !== userReq){
            return res.status(404).send({Error: 'Hubo un error a la hora de identificar al usuario que está haciendo la operación. Vuelva a loggearse'})
        }

        if(!productId){
            return res.status(400).send({Error: '¿Seguro querés que te llevemos nada?, ingresá 1 o más artículos y disfrutá'})
        }

        //detect repeat values and sum the equal values, then we created a new array
        const arrayProducts = [];
        let total = 0;
        let repetedOrders = {}
        let productToCarry = []
        productToCarry.push(productId)

        productToCarry.forEach(function(i){
            repetedOrders[i] = (repetedOrders[i] || 0) + 1;
        });
        

        const AllProductsId = productTest.reduce((accumulator, current) => {
            if (!accumulator) return [current];

            const dish = accumulator.find(d => d === current);
            if (!dish) {
                accumulator.push(current);
                console.log(accumulator);
                return accumulator;
            } else {
                return accumulator;
            }
        }, undefined);

        for(let i = 0; i < AllProductsId.length; i++){
            const product = await Product.findByPk(AllProductsId[i]);
            const oneProduct = product._id;
            const productPrice = await Product.findOne({attributes: ['price'], where: {_id: oneProduct}});
            const productStock = await Product.findOne({attributes: ['instock'], where: {_id: oneProduct}});
            const productName = await Product.findOne({attributes: ['productname'], where: {_id: oneProduct}});

            let idObject = JSON.stringify(oneProduct)
            const quantity = repetedOrders[idObject]
            
            const subTotal = productPrice.dataValues.price * quantity;

            total += subTotal

            product.ProductOrder = {
                quantity: quantity,
                subTotal
            };

            arrayProducts.push(product);

            if(productStock.dataValues.instock == false) {
                arrayProducts.pop(product)
                return res.json(`Orden creada con éxito! Una cosa ${user.name}: El producto que elegiste, ${productName.dataValues.productname}, no estaba disponible`)
            }

        }   


        const newOrder = await Order.create(
            {
                total, payment,
                orderByUserId: oneUser,
            }
        ).catch((err)=>{
            console.log('----------------');
            console.log(err);
            console.log('----------------');
        })

        await newOrder.addProducts(arrayProducts)
        .catch((err)=>{
            console.log('----------------');
            console.log(err);
            console.log('----------------');
        })
        
        

        res.send({message: `Orden creada con éxito para ${user.name}`});

        return res.status(200)
    } catch (err) {
        console.log(err);
        res.send({Error: err.message})
        return res.status(404)
    }
});

