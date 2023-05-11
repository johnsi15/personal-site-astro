---
title: Angular js Scroll infinito
publishedDate: "2017-02-05T19:22:39.000Z"
updatedDate: "2020-02-13T21:47:34.000Z"
pubDate: "2017-02-05T19:22:39.000Z"
tags:
- JavaScript
- Front-End
- Angular
- scroll
- scroll-infinito
excerpt: como cargar notas, artículos o lo que sea de una forma infinita usando angular js con ayuda de una librería.
description: como cargar notas, artículos o lo que sea de una forma infinita usando angular js con ayuda de una librería.
primaryTag: { name: 'JavaScript', slug: 'javascript' }
canonicalURL: "https://johnserrano.co/blog/angular-js-scroll-infinito"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683320075/John%20Serrano/Blog%20Post/angular-js-scroll-infinito/scroll_nbbkjr.jpg"
---

Hola que tal gente como están, espero que bien  el día de hoy traigo un artículo donde veremos como cargar notas, artículos o lo que sea de una forma infinita usando angular js con ayuda de una librería.

Para comenzar debemos tener un pequeño server corriendo para traer la información que deseamos mostrar, en este ejemplo use node.js con express para crear el server desde cero lo puedes ver en el siguiente artículo [http://blog.johnserrano.co/servidor-basico-con-node-js/](http://blog.johnserrano.co/servidor-basico-con-node-js/), ya que en este post no tocare esa parte solo explicare como crear el cargue de notas infinitas con angular js.

Para comenzar creamos un archivo script.js o como gusten llamarlo pero que tenga la extensión .js también creamos un archivo html el cual nombre index.html, agregamos una simple estructura en html, enlazamos las librerías necesarias para hacer que funcione nuestro ejemplo.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="infinite-scroll.js"></script>
<script src="script.js"></script>
```

La librería de angular la llamo desde una cdn de google como se puede apreciar y el modulo infinite-scroll.js lo pueden descargar del siguiente link [https://sroze.github.io/ngInfiniteScroll/#download](https://sroze.github.io/ngInfiniteScroll/#download), descargar el código lo guardan en la misma carpeta donde este el script.js y el index.html quedando de la siguiente manera.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683320180/John%20Serrano/Blog%20Post/angular-js-scroll-infinito/infinite-1_wsrn0i.jpg)

**Nota: si prefieren pueden usar la librería de angular con otro cdn desde esta página [https://cdnjs.com/](https://cdnjs.com/), o descargar el código desde la página oficial de angular [https://angularjs.org/](https://angularjs.org/)  y guardarlo en un archivo para poder enlazarlo con nuestro ejemplo, en este ejemplo yo use la versión 1.5.8.**

Voy a mostrar el código del index.html y luego lo explico.

```html
<!DOCTYPE html>
<html ng-app="app">

<head>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="infinite-scroll.js"></script>
<script src="script.js"></script>
<style>
#contenido{
  width: 800px;
  margin: 0 auto;
  height: 100vh;
  padding: 25px;
  box-sizing: border-box;
  margin-bottom: 150px;
}
</style>
</head>

<body>


<section id="contenido">
    <div ng-controller='controlador'>
      <div infinite-scroll='article.nextPage()' infinite-scroll-disabled='article.busy' infinite-scroll-distance='1'>
      <div ng-repeat='dato in article.items'>
      <!-- {{dato}} -->
      <h2 class='title'>{{dato.title}}</h2>
      <span class='title'>
        <p>{{dato.body}}</p>
      </span>
    </div>
    </div>
  </div>
</section>
</body>

</html>
```
    

Bueno como se puede apreciar en el código tenemos una estructura muy básica en la primera etiqueta la cual es html agregamos un ng-app=”app” donde le estamos indicando al index.html que vamos a usar un módulo con ese nombre “app”, seguidamente los llamados de la librerías que necesitamos para este ejemplo agregue unos estilos con el fin de que se nos muestre el scroll vertical para poder hacer scroll y de esa manera aplicar el scroll infinito con angular.

Ahora seguido de ese párrafo tenemos un div con un controlador donde indicamos que en esa parte del html vamos a ejecutar código desde el script.js donde estamos usando las funcionalidades de angular.js, seguido de eso tenemos otro div donde hacemos un llamado a una de las funcionalidades del módulo infinite-scroll.js, después de eso un ng-repeat que es otra funcionalidad de angular.js donde vamos hacer el recorrido por cada nota o artículo que nos devuelva la funcionalidad del módulo infinite-scroll.js, dentro de él tenemos otras etiquetas html donde hacemos el llamado de los datos con {{dato.title}} esto gracias a angular.js.

Ahora si vamos a ver la parte del script.js que es donde está toda la magia de angular.js y también gracias al módulo infinite-scroll.js, primero el código y luego una explicación breve.

```js
// script.js

var app = angular.module('app', ['infinite-scroll', 'ngSanitize']);

app.controller('controlador', function ($scope, Article) {
  $scope.article = new Article();
});

app.factory('Article', function ($http) {

  var Article = function() {
  this.items = [];
  this.busy = false;
  this.page = 0;
};

Article.prototype.nextPage = function() {
  //this.items = ['1', '2', '3', '4'];
  if(this.busy) return;
  this.busy = true;

  var url = 'http://localhost:3000/api/notas/'+this.page;

  $http.get(url).success(function(data){
    console.log(data.length);
    // this.items.push(data);
    for (var i = 0; i < data.length; i++){
      this.items.push(data[i]);
    }

    this.page++;
    this.busy = false;
  }.bind(this));

};

  return Article;
});
```
    

Primero que todo creamos un módulo ‘app’ que ya definimos en el html seguido agregamos el módulo infinite-scroll, creamos un controlador creando un scope con el factory que definimos como Article, ahora si llegamos al factory creamos un pequeño constructor donde definimos algunas variables como lo son un array llamado ítems donde van a ir nuestras notas, un busy que es para que pare la cargar del scroll o la vuelva  a iniciar y por ultimo un page para saber en qué página va la carga de notas o artículos.

Creamos un prototype donde comenzamos con un if donde preguntamos que si busy es true si es así que siga si no que lo cambie a true, definimos una url de donde vamos a obtener los datos,  hacemos un http.get donde recibimos esa data y usamos length para medir la cantidad de data que nos devuelve en este caso solo será una nota por cada scroll al final, lo que hacemos es un for para agregar esa data en un array con push al terminar aumentamos la page y cambiamos el estado de busy, por ultimo devolvemos Article que fue el prototype.

Con eso terminamos espero que sea de su ayuda fue algo sencillo pero que les puede servir saludos.
