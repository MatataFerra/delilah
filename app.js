const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const { updateUser } = require('./controller/users');
const {sameUser} = require('./middleware/roles')

require('./database/connectionDB');
require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Constantes
const UsersRoute = require('./routes/users');
const singUpNewUserRoute = require('./routes/singup')

//Routes
app.use('/users', UsersRoute);
app.use('/singup', singUpNewUserRoute);
app.use('/update', sameUser, updateUser)

app.listen(PORT, ()=>{
    console.log('servidor escuchando')
    
})