# Proyecto III de ACAMICA orientado al Back-end

## La finalidad de este proyecto es desarrollar una API que pueda ser consumida. La aplicación tiene como objetivo desarrollar usuarios administradores y regulares, productos y pedidos

#### Las teconologías usadas son: NodeJS, SQL, Express y Sequelize como ORM

#### Principales Características

- Iniciar sesión con token JWT
- Asignación de Roles
- CRUD de: Usuarios, Ordenes y Productos
- Permite reconocer al usuario por medio del token
- Productos favoritos del usuario

## Como iniciar ?
### 1. Inicio del servidor

1. Instale [nodejs](https://nodejs.org) o verifique si ya lo tiene instalado en el terminal ingresando el comando
```bash
node --version
```

2. Clone el repositorio! Para este paso es muy importante instalar git [Git](https://git-scm.com/). Luego abra la consola, clone el repositorio e instale las dependencias

```bash
git clone https://github.com/MatataFerra/delilah.git
cd delilah
npm install
```

3. Ingrese a la carpeta donde está clonado el repositorio y cree un archivo .env (literalmente así, no le agregue nombres, solo la extensión). Esto le permitirá configurar la base de datos y el token. Dentro del archivo agregue estos campos:

```bash
DB_NAME=**nombre de la base de datos**
DB_USER=**usuario de la base de datos**
DB_PASS=**Contraseña para conectarse**
DB_HOST=**127.0.0.1 (si es localhost) o dirección del host**
DB_DIALECT=**'mysql' | 'mariadb' | 'postgres' | 'mssql'**
DB_PORT=**Por defecto: 3306**
SECRET_KEY=**Su Clave secreta para encriptar los token**
```
