const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

require('./database/connectionDB');
require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Constantes
const UsersRoute = require('./routes/users');
const ProductsRoute = require('./routes/products')

//Routes
app.use('/users', UsersRoute);
app.use('/products', ProductsRoute)

app.listen(PORT, ()=>{
    console.log('servidor escuchando')
    
})