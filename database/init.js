const {User, role} = require('../models/Usuario');
const Product = require('../models/Product');


async function init() {

    await User.bulkCreate([
        {
            _id: 4,
            username: 'Mirko',
            name: 'Carlos',
            lastname: 'Riveiro',
            password: '$2y$10$6hVd99LtM8QpjcCUuSMTLOkK90LlZqZuqBkBrqfDABE/r5RupX0tG',
            email: 'ladoceyriquelme@gmail.com',
            phone: '117894595',
            adress: 'Av. Corrientes 4512, 7mo A',
            role: role.regular
        },
        {
            _id: 5,
            username: 'Big Yuyo',
            name: 'Matata',
            lastname: 'Ferra',
            password: '$2y$10$33RnPIxU9ym4N5qq5v0mDudia8bH02xbog0dxhRwWg0E8/7xlAPC6',
            email: 'matataferra@gmail.com',
            phone: '15316892',
            adress: 'ceretti 3200 2do A',
            role: role.admin
        }
    ]);

    await Product.bulkCreate([
        {   
            _id: 1,
            productname: 'Hamburguesas',
            description: 'Con queso y de carne vacuna',
            price: 150,
            instock: true,
            companyname: 'Deniro',
            companyadress: 'Humahuaca 3670',
            img: 'https://cutt.ly/Xh70G6m',
        },
        {
            _id: 2,
            productname: 'Pizza',
            description: 'Jamon, queso y morrones',
            price: 350,
            instock: true,
            companyname: 'Pin Pun',
            companyadress: 'Av. Corrientes 3872',
            img: 'https://cutt.ly/Wh70A31',
        },
        {
            _id: 3,
            productname: 'Nachos',
            description: 'Con cheddar y panceta, ideal para compartir',
            price: 290,
            instock: true,
            companyname: 'Mexico Co.',
            companyadress: 'Lavalle 150',
            img: 'https://cutt.ly/Ph70BMS',
        }
    ]);

    console.log('Succefully created data. If you are the admin user please enter with the user: matataferra@gmail.com and password 1234');

}

module.exports = {
    init
}