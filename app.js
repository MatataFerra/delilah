const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

require('./database/connectionDB');
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Constantes
const UsersRoute = require('./routes/users');
const ProductsRoute = require('./routes/products');
const OrderRoute = require('./routes/orders');

//Asocioation & Migrations
require('./database/migrations');
require('./database/asociations');


//Routes
const apiRoute = "/api/v1";
app.use(apiRoute + '/users', UsersRoute);
app.use(apiRoute+ '/products', ProductsRoute);
app.use(apiRoute + '/orders', OrderRoute);



app.listen(PORT, ()=>{
    console.log('servidor escuchando')
    
})