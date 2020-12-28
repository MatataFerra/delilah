# Proyecto III de ACAMICA orientado al Back-end

## La finalidad de este proyecto es desarrollar una API que pueda ser consumida. La aplicación tiene como objetivo desarrollar usuarios administradores y regulares, productos y pedidos

#### Las teconologías usadas son: NodeJS, SQL, Express y Sequelize como ORM

#### Principales Características

- Iniciar sesión con token JWT
- Asignación de Roles
- CRUD de: Usuarios, Ordenes y Productos
- Permite reconocer al usuario por medio del token
- Productos favoritos del usuario
- Si el producto no está en stock se elimina de la órden

## Como iniciar ?
### 1. Inicio del servidor

1. Instale [nodejs](https://nodejs.org) o verifique si ya lo tiene instalado en el terminal ingresando el comando
```bash
node --version
```

2. Clone el repositorio! Para este paso es muy importante instalar [Git](https://git-scm.com/). Luego abra la consola, clone el repositorio e instale las dependencias

```bash
git clone https://github.com/MatataFerra/delilah.git
cd delilah
npm install
```

3. Ingrese a la carpeta donde está clonado el repositorio y cree un archivo .env (literalmente así, no le agregue nombres, solo la extensión). Esto le permitirá configurar la base de datos y el token. Dentro del archivo agregue estos campos:

```bash
DB_NAME= **nombre de la base de datos**
DB_USER= **usuario de la base de datos**
DB_PASS= **Contraseña para conectarse**
DB_HOST= **127.0.0.1 (si es localhost) o dirección del host **
DB_DIALECT= **'mysql' | 'mariadb' | 'postgres' | 'mssql'**
DB_PORT= **Por defecto: 3306**
SECRET_KEY= **Su Clave secreta para encriptar los token**
PORT= **Por defecto 3000, puerto que se conecta el servidor**
```

*RECUERDE*: Los nombres de los campos (ej: DB_NAME, etc) NO DEBEN ALTERARSE, ya que configuran la conexión a la Base de datos

### 2. Base de Datos

1. Puede instalar la base de datos que desea XAMPP, MariaDB, Worbench MySQL de ORACLE o bien en un servidor externo.

Una vez instalada la base de datos y configurado el archivo *.env*, La aplicación creará automáticamente tanto la Base de Datos, las tablas y las relaciones.

En caso de ejecutar las Querys del archivo **seed** también se crearán las tablas y las relaciones, además de los datos necesarios para comenzar a usar la base de datos

*IMPORTANTE*
Es necesario que usted ingrese datos a la base de datos, puede hacerlo a través de [POSTMAN](https://www.postman.com/downloads/) con los métodos que figuran más abajo
También puede crear datos de manera masiva ingresando el comando *npm run initData*, automaticamente se crearán datos para comenzar a usar la app

2. Los campos de las tablas son:

**Usuarios**: 
- username
- name
- lastname
- password
- email
- phone
- adress
- role (admin o regular)

**Productos**:
- productname
- description
- price
- instock
- companyname
- companyadress
- img

**Ordenes**:

- total
- state (new, confirm, making, sending, delivered, cancel)
- payment (cash, debit, credit, ewallet)
- time

*debe asignar los valores a través del req.body o con Postman en el Body*

### 3. Inicie el servidor

Abra la terminal y corra el siguiente comando. No cierre la terminal. Si modifica el archivo y lo guarda el servidor se reinicia automáticamente

```bash
npm start
```

### 4. La base de datos ya está lista para ser usada.

Empecemos probando la aplicación

## Endpoints


*Base URL*: localhost:3000/api/v1
*el {id} es un número*
| Method |       Enpoint        |                  Descripcion                  |
|--------|----------------------|-----------------------------------------------|
|   POST | /users/login         | Da un Token Bearer (con email y pass)         |
|   GET  | /users               | Obtener todos los usuarios(solo admin)        |
|  POST  | /users//singup       | Crear un usario                               |
|   GET  |/users/userById/{id}  | Obtener info del user                         |
|   PUT  | /users/update/{id}   | Editar user info                              |
| DELETE | /users/{id}          | Eliminar user(solo admin)                     |
|  GET   | /users/favs          | Obtener fav products del usuario registrado   |
|  POST  | /users/favs          | agregar fav products al usuario registrado    |
|   GET  | /products            | Mostrar todos los productos                   |
|  POST  | /products/create     | Crear nuevo producto                          |
|   GET  | /products/id/{id}    | Obtener info de un producto                   |
|   PUT  |/products/update/{id} | Editar un producto                            |
| DELETE |/products/delete/{id} | Borrar un producto                            |
|   GET  | /orders              | Ver todas las ordenes (solo admin)            |
|  POST  | /orders/create       | crear nueva orden                             |
|   GET  | /orders/id/{id}      | Ver info de una orden                         |
|   PUT  | /orders/update/{id}  | Actualizar Orden                              |
|DELETE  | /orders/delete/{id}  | Borrar orden                                  |
|   PUT  | /orders/state/{id}   | Actualizar estado de orden (solo admin)       |
|   GET  |/orders/userorder/id  | Las nuevas ordenes aparecen primero           |


## NPM Packages
- [Express](http://expressjs.com) : Framework that provides an easy-way to handle request and managing routes.
- [nodemon](https://www.npmjs.com/package/nodemon) : Used in dev instance for fast server reloading.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) : Creation and validation of [JWT](https://jwt.io) authorization method.
- [dotenv](https://www.npmjs.com/package/dotenv) : Used to protect JWT passphrase. 
- [Sequelize](https://www.npmjs.com/package/sequelize) : ORM for MySQL connection and querying.
- [mysql2](https://www.npmjs.com/package/mysql2) : MySQL client for nodejs. Integrated in Sequelize.
- [moment](https://www.npmjs.com/package/moment) : For easily parsing and formatting dates.