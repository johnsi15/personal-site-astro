---
title: Manejo de rutas con page.js
publishedDate: "2018-05-28T02:07:38.000Z"
updatedDate: "2020-02-13T21:47:08.000Z"
pubDate: "2018-05-28T02:07:38.000Z"
tags: 
- JavaScript
- Html5
- development
- programación
- library
- pagejs
- middleware
excerpt: Manejo de rutas del lado del front-end gracias a esta librería que está inspirada en express router veremos unos  ejemplos de su implementación.
description: Manejo de rutas del lado del front-end gracias a esta librería que está inspirada en express router veremos unos  ejemplos de su implementación.
primaryTag: { name: 'JavaScript', slug: 'javascript' }
canonicalURL: "https://johnserrano.co/blog/manejo-de-rutas-con-page-js"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683216196/John%20Serrano/Blog%20Post/manejo-de-rutas-con-page-js/pagejs_lqse0j.jpg"
---

Hola amigos el día de hoy les traigo un artículo donde vamos a ver el manejo de rutas del lado del front-end gracias a esta **librería** que está inspirada en express router vamos a ver unos  ejemplos de su implementación pueden ver toda la [documentación](https://github.com/visionmedia/page.js) de esta librería.

Antes de empezar con los ejemplos algunas cosas que esta librería nos permite realizar es manejar las rutas de nuestra app sin recargar la página, mantiene nuestro historial de navegación, podemos pasar datos vía get al igual que podemos usar **middlewares** para encadenar funciones.

Bueno lo primero descargar la librería en mi caso voy a usar un cdn para usar la librería de **pagejs** todo esto mondado en una pequeña app con [nodejs y express](https://blog.johnserrano.co/servidor-basico-con-node-js/).

Tenemos nuestro html.

```html
#index.html
  <p id="message"></p>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/user">User</a></li>
    <li><a href="/user/jandrey15">User Name</a></li>
    <li><a href="/notfound">Not found</a></li>
    <li><a href="/ergtgt">Cualquier cosa</a></li>
  </ul>
  ```
    
    

Una **etiqueta p** y una lista con unos enlaces.

Hacemos nuestro llamado a la librería

```html
<script src="https://cdn.rawgit.com/visionmedia/page.js/master/page.js"></script>
```
    

Dentro del mismo html agregamos un script.

```html
<script type="text/javascript">
  page('/', index)
  page('/user', user)
  page('/user/:username', user)
  page('*', notfound)
  page()

  function index() {
    document.getElementById('message')
      .textContent = 'Viewing home'
  }

  function user(ctx) {
    document.getElementById('message')
      .textContent = `Viewing user 
    ${ctx.params.username || ''}`
  }

  function notfound(ctx) {
    document.getElementById('message')
      .textContent = 'Viewing not found'
  }
</script>
  ```
    
    

Donde tenemos unas funciones y la ejecución de page vamos paso a paso primero que todo se hace referencia a **page** se le indica la ruta seguido de eso le pasamos una función como un **callback** podemos escribir la función hay mismo o pasarla con el nombre dentro de la función.

Lo que hacemos es seleccionar el elemento p con el **id message** y enviar un texto de esa forma sabemos que page está funcionando y si ven la **barra de la ruta** cambia según donde dimos click de los enlaces del html.

Tenemos otro ejemplo pasando el **ctx y next** para trabajar con middlewares veamos cómo se trabaja un ejemplo muy sencillo para ver su funcionamiento y se pueda entender.

```js
<li><a href="/cambio">Cambiar nombre apellido</a></li>
// Se agrega el li al html

page('/cambio', nombre, apellido)
// Se agrega al script


function nombre(ctx, next) {
  document.getElementById('message')
    .textContent = 'Viewing john'
  ctx.nombre = 'John'
  next()
}

function apellido(ctx) {
  setTimeout(() => {
    document.getElementById('message')
      .textContent = `Viewing ${ctx.nombre} Serrano`
  }, 2000)
}
``` 

Agregamos en el html un li mas con una ruta agregamos esa ruta con page y le pasamos dos funciones una nombre y otra apellido, definimos esas funciones la primera como siempre pasamos el ctx y ahora también podemos pasar next agregamos un **textContent** seguido de eso pasamos el **ctx.nombre** para podemos usar ese ctx en la siguiente función y hacemos un **next()** para que siga con la siguiente función.

En la función apellido solo tenemos un setTimeout que se ejecuta pasado 2 segundos y cambia el textContent de elemento p pasando el **ctx.nombre**, como se puede ver podemos pasar funciones como middlewares y también podemos pasar datos con el ctx entre funciones.

Bueno dejo este artículo hasta este punto espero les sea de su ayuda y los invito que sigan practicando en la documentación hay más ejemplos algunos más avanzados, les dejo el [código](https://github.com/johnserrano15/pagejs/tree/prueba/public) que use para este artículo saludos y hasta la próxima.

**Nota:** en el repositorio de github donde esta el código deben ver solo el index.html hay se encuentran los ejemplos que use en este artículo.
