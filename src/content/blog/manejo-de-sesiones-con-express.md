---
title: Manejo de sesiones con express
publishedDate: 2018-08-05T16:39:56.000Z
updatedDate: 2019-09-03T16:15:54.000Z
pubDate: 2018-08-05T16:39:56.000Z
tags:
- express
- mongodb
- mongo
- nodejs
- framework
- JavaScript
- express-session
- mongoose
- connect-mongo
- webdeveloper
- webdeveloment
excerpt: Vamos a ver cómo manejar las sesiones con express un framework de nodejs y como persistir esas sesiones con ayuda de connect-mongo.
description: Vamos a ver cómo manejar las sesiones con express un framework de nodejs y como persistir esas sesiones con ayuda de connect-mongo.
primaryTag: { name: 'express', slug: 'express' }
canonicalURL: "https://johnserrano.co/blog/manejo-de-sesiones-con-express"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683207808/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/sessions-express_nxoqoe.jpg"
---

El día de hoy vamos a ver cómo manejar las sesiones con **express** un framework de **[nodejs](https://nodejs.org/en/)** y como persistir esas sesiones con ayuda de **[connect-mongo](https://www.npmjs.com/package/connect-mongo)**.

Gracias a las sesiones podemos mantener una sesión iniciada sin necesidad de que se tenga que volver a iniciar sesión valga la redundancia, también se pueden guardar datos extras ya que las sesiones en express son un objeto json, ya veremos cómo se puede guardar datos.

Algunas de las diferencias con las cookies es que las sesiones se mantienen en memoria es decir si se apaga el server se pierde esa sesión ya que no persiste en el client, en cambio las cookies se guardan en el client del navegador, pero entonces para mantener las sesiones podemos usar una base de datos como mongodb.

Bueno lo primero tener instalado **nodejs**, **[mongodb](https://www.mongodb.com/)**, pudes ver este pequeño post donde explico **[cómo instalar mongo](https://blog.johnserrano.co/instalacion-de-mongodb/)** seguido de eso iniciar un proyecto con npm.

`npm init -y`

Vamos a necesitar algunas dependencias vamos a la terminal, si no sabes como usar la terminal o consola le recomiendo este artículo **[manejo básico de la terminal](https://blog.johnserrano.co/manejo-basico-de-la-terminal/)**.

`npm i express connect-mongo mongoose express-session –S`

Damos enter al final para iniciar la instalación de las dependencias.

Entonces con express ya sabemos que es el **framework** que nos permite montar un server de una forma más fácil, **connect-mongo** es el package que nos ayudara a persistir las sesiones, **mongoose** es un **ORM de mongodb** donde vamos a guardar las sesiones, y **express-session** es el package que nos permite generar las sesiones ya que solo express no puede hacer esta tarea.

Instalamos una dependencia para desarrollo la cual se llama **nodemon** que nos ayudara en el desarrollo de nuestra app.

`npm i nodemon -D`

Con nodemon lo que hace es recargar el server de nodejs cada vez que guardemos y exista algún cambio el **server** recarga automáticamente.

Ahora en el package.js agregamos donde dice scripts un script llamado start con el valor **nodemon server.js**.

```json
"scripts": { 
  "start": "nodemon server.js" 
}
```
    

En la terminal donde tenemos nuestro proyecto escribimos **npm start**, con esto iniciamos nuestro **server.js** y ya comienza a escuchar los cambios.

Server.js es el archivo donde estará nuestro server en el cual nos vamos a conectar con mongodb y a crear las sesiones.

```js
const express = require('express'); 
const session = require('express-session'); 
const MongoStore = require('connect-mongo')(session); // Se usa par aguardar las sessiones en mongodb 

const conn = require('./conecction');
// server.js
```
    

Este es el código de nuestro ***server.js*** lo primero que hacemos es importar los package que vamos a necesitar en este caso express, express-session, y connect-mongo, a connect-mongo le pasamos la variable session ya que es necesaria para poder iniciar **MongoStore**.

Lo otro que se puede ver es que requerimos un archivo llamado **conecction.js** el cual contiene el código de nuestra conexión con mongodb veamos cual es el código de conecction.js.

```js
const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 

const uri = 'mongodb://192.168.99.100:27017/express-sessions'; 
// 'mongodb://localhost/test' 

mongoose.connect(uri, { useNewUrlParser: true })
  .then(function () { 
    console.log('Success to establish connection with mongodb :)'); 
  }).catch(function (err) { 
    console.log('Failed to establish connection with mongodb :('); 
    console.log(err.message); 
  }); 

module.exports = mongoose.connection;
// conecction.js
```

Bueno lo que tenemos en primera parte es la importación del package mongoose declaramos un objecto **mongoose.promise** el cual nos va permitir hacer peticiones asíncronas a mongodb en este caso la conexión, declaramos la uri donde nos vamos a conectar es decir donde está corriendo mongodb en mi caso estoy usando docker si lo están corriendo localmente deben indicarle localhost,  seguido de eso como se puede ver le pasamos la **uri** al objecto connect y resolvemos la promesa si fue exitosa la conexión o no y por ultimo devolvemos la conexión.

```js
const port = 8080;
const app = express(); 

// Esto es un middleware -> La función se ejecuta cada vez que la aplicación recibe una solicitud. 
app.use(session({ 
  secret: process.env.SESSION_SECRET || 'some-secret', 
  resave: false, // investigar mas -> https://www.npmjs.com/package/express-session 
  saveUninitialized: false, 
  store: new MongoStore({ 
    mongooseConnection: conn, 
  }) 
}));
// server.js
```
    

Siguiendo con el código del archivo server.js declaramos una variable port y app, seguido de eso declaramos un **middleware** el cual le pasamos la variable session esta vez como una función la cual se le pasa un objeto donde pasamos un **secret** el cual debemos tener cuidado a la hora de manejarlo lo ideal es que este como una variable de entorno, lo otro que pasamos en resave y saveUninitialized en mi caso los pase como false puede ver más en la [documentación](https://www.npmjs.com/package/express-session) sobre esta opciones y finalmente pasamos la opción store en la cual pasamos **MongoStore** donde debemos pasar la conexión de mongodb.

```js
app.get('/', (req, res) => { 
  // console.log(req.session) 
  // Cuenta es el nombre que le damos y lo agregamos al object session 
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1 
  res.status(200).send(`Hola has visto esta página ${req.session.cuenta}`); 
}); 

app.listen(port, () => { 
  console.log(`Escuchando en el port ${port}`); 
});
//server.js
```
    

Bien ahora declaramos una ruta de tipo get en `/` donde pasamos el **request** y el **response** ya en este punto tenemos un objeto session en el request donde podemos pasarle nuevos datos en el ejemplo validamos si en el objeto session existe una key llamada cuenta, si existe le sumamos 1 si no existe la iniciamos en 1, respondemos al navegador con un status y un mensaje.

Lo último es establecer la conexión del servidor para que escuche nuestras solicitudes en el **port 8080** en este caso las de tipo get.

Si vamos al navegador a [http://localhost:8080](http://localhost:8080) debemos ver lo siguiente.

![localhost](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_1_ssfa7q.png)

Ahora bien si vamos a nuestro **mongodb** debemos ver la sesión guardada.

![mongodb](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_2_dzlusc.png)

Como podemos ver nuestra sesión se está guardando que no los confunda los números ya que cuando tome los pantallazos los tome sin tener un orden.

Ahora bien pero como funciona las sesiones en el navegador, lo primero es abrir el inspector de elemento de nuestro navegador y nos ubicamos en la parte de **application** en la parte izquierda existe una opción cookies ahí es donde esta nuestra sesión veamos.

![inspector](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_3_gmqa5w.png)

La sesion lleva por nombre **connect.sid** la cual esta encriptada de esta forma cada vez que solicitamos nuestra página él va saber que es el mismo usuario gracias a esa variable de sesión y a su valor, veamos qué pasa si elimino la sesión.

![inspector](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_4_slvqja.png)

Si elimino esa variable de sesión del navegador se pierde y comienza nuevamente con una nueva sesión veamos algo más en la parte de **network** podemos ver que cuando es la primera vez que se solicitad la pagina el servidor nos devuelve la variable de sesión con valor encriptado.

![inspector](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_5_e406dc.png)

Si vuelvo a cargar la página ya el response no me va devolver la variable de sesión porque ya existe en el navegador y por el contrario el navegador se la envía al servidor eso lo podemos ver en la parte de **request headers**.

![inspector](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_6_yuzwle.png)

Ahora bien si vamos a **mongodb** nuevamente y consultamos nuestras sesiones podemos ver que existe una nueva sesión.

![mongodb](https://res.cloudinary.com/john-serrano/image/upload/v1683208131/John%20Serrano/Blog%20Post/manejo-de-sesiones-con-express/express_7_j7haux.png)

Bueno esto pasa ya que se eliminó la primera sesión y express me crea una nueva sesión, si apagamos el server no vamos a perder la sesión ya que está siendo guardada en mongodb.

Espero que este articulo sea de su ayuda, el código completo del ejemplo esta en este repo  [https://github.com/blog-johnserrano/express-sessions](https://github.com/blog-johnserrano/express-sessions) no siendo más hasta la próxima.
