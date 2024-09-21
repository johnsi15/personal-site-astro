---
title: Servidor básico con node js
publishedDate: "2017-02-05T21:37:48.000Z"
updatedDate: "2017-02-06T20:03:12.000Z"
pubDate: "2017-02-05T21:37:48.000Z"
tags: 
- nodejs
- express
- JavaScript
- Front-End
- Windows
- programación
excerpt: Instalar node js express para montar un server básico gracias a estas dos tecnologías es algo corto este articulo.
description: Instalar node js express para montar un server básico gracias a estas dos tecnologías es algo corto este articulo.
primaryTag: { name: 'nodejs', slug: 'nodejs' }
canonicalURL: "https://johnserrano.co/blog/servidor-basico-con-node-js"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683316703/John%20Serrano/Blog%20Post/servidor-basico-con-node-js/serverBasic_hjwpvf.jpg"
---

El día de hoy vamos a ver como instalar node js express para montar un server básico gracias a estas dos tecnologías es algo corto este articulo pero espero que sea de ayuda para los que comienzan en este mundo de node js.

Primero que todo debemos instalar node js y npm, npm es el gestor de descargar de librerías o módulos para node js, para eso vamos a la página oficial [https://nodejs.org/en/](https://nodejs.org/en/)  y escogemos la recomendada la pagina detecta el sistema operativo en mi caso detecto un Windows de 64, al descargar y ejecutar el archivo comenzara la instalación de node js y a su vez la de npm.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683319553/John%20Serrano/Blog%20Post/servidor-basico-con-node-js/node_1_huagnl.jpg)

En windows es todo siguiente hasta finalizar para verificar si quedo instalado correctamente node js y npm vamos a la terminal y escribimos node –v y npm –v, si tenemos problemas en Windows solo tenemos que agregar la ruta de donde quedo instalado nuestro node a las variables de entorno y listo.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683319553/John%20Serrano/Blog%20Post/servidor-basico-con-node-js/node_2_xjv5g6.jpg)

Lo siguiente es crear un folder o carpeta de nuestro proyecto ubicarnos con la terminal en esa carpeta seguidamente escribir npm init y comenzara un proceso de crear un package.json que es la información general de nuestro proyecto.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683319553/John%20Serrano/Blog%20Post/servidor-basico-con-node-js/node_3_btfo2i.jpg)

Tenemos el nombre del proyecto, versión, descripción, nuestro archivo principal de ejecución, autor licencia etc. Con esto ya podemos crear nuestro archivo index.js o server.js, es importante que nombre el archivo como lo nombraron en el package.json.

Primero vamos a instalar express desde la terminal escribimos npm install express –save con esto se descargar express para verificar que se instaló correctamente revisamos el package.json.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683319553/John%20Serrano/Blog%20Post/servidor-basico-con-node-js/node_4_vxw4zt.jpg)

Ahora si muestro el código del server y lo explico al final.

```js
var express = require('express');
var app = express();
app.use('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});
app.get('/api/notas/:page', function(req, res){

const dataJson = [{
            'title': 'Hola soy el titulo numero'+req.params.page,
            'body': 'Hola soy el body numero'+req.params.page
            }
         ]
   res.send(dataJson);
});

app.listen(3000, function (err){
   if (err) return console.log('Hubo un error'),     process.exit(1);//Devolvemos un mensaje si existe algun error

   console.log('Escuchando en el puerto 3000');
});
```
    

Lo primero que se hace es importar o requerir la librería de express, lo siguiente es crear una instancia de express para manejarlo y seguido usamos un use para crear unos header que se necesitan para devolver un array con objeto de javascript, hacemos un get donde se pueden devolver datos este server está construido para el uso del scroll infinito que se explicó en otro artículo [https://johnserrano.co/blog/angular-js-scroll-infinito/](https://johnserrano.co/blog/angular-js-scroll-infinito/), lo que hago es crear una ruta donde voy a estar devolviendo datos y a su vez pasamos por parámetros un valor que es un consecutivo de las pages de cada artículo o nota. Al final levantamos el server con app.listen escuchando en un puerto y recibiendo un err si ocurre un error mostramos un mensaje en la terminal si todo sale bien igual mente un mensaje.

Bueno eso ha sido todo por este artículo espero que sea de su ayuda fue algo muy sencillo pero muy básico para comenzar con nodejs saludos hasta la próxima.
