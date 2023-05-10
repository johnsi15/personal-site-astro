---
title: Responsive slides JS
publishedDate: 2016-05-23T14:48:21.000Z
updatedDate: 2016-05-26T03:35:38.000Z
pubDate: 2016-05-23T14:48:21.000Z
tags: 
- JavaScript
- html
- Html5
- css3
- Jquery
- css
- responsive
- Js
excerpt: Hoy les traigo un pequeño artículo para manejar slides con una librería llamada responsive slides que nos permite mostrar varias imágenes como un carrousel.
description: Hoy les traigo un pequeño artículo para manejar slides con una librería llamada responsive slides que nos permite mostrar varias imágenes como un carrousel.
primaryTag: { name: 'JavaScript', slug: 'javascript' }
canonicalURL: "https://johnserrano.co/blog/responsive-slides-js"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683731729/John%20Serrano/Blog%20Post/responsive-slides-js/responsiveslide_jiyrdt.jpg"
---

Hoy les traigo un pequeño artículo para manejar slides con una librería llamada **[responsive slides ](http://responsiveslides.com/)** que nos permite mostrar varias imágenes como un carrousel e ir cambiándolas automáticamente o manualmente.

Lo primero es ir a esta página para buscar el cdn de la librería **[https://cdnjs.com/#q=ResponsiveSlides](https://cdnjs.com/#q=ResponsiveSlides)** buscamos la librería y copiamos el cdn.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683732076/John%20Serrano/Blog%20Post/responsive-slides-js/respon_1_cr4cpk.jpg)

Ahora creamos un archivo html y agregamos el cdn pero antes de eso también necesitamos el **cdn de jquery**, agregamos esos cnd de la siguiente manera.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ResponsiveSlides.js/1.53/responsiveslides.min.js"></script>
```
    

Agregamos una etiqueta ul de la siguiente forma.

```html
<ul class="rslides">

<li><img src="1.jpg" alt=""></li>

<li><img src="2.jpg" alt=""></li>

<li><img src="3.jpg" alt=""></li>

</ul>
```
    

**Nota: las imágenes deben estar en la misma posición del archivo html.**

Ahora agregamos un script para el funcionamiento de la librería.

```html
<script>

$(function() {

    $(".rslides").responsiveSlides();

});

</script>
```
    

Seguido de eso agregamos unos estilos puede ser en un archivo externo o en el mismo html con style.

```css
.rslides {

position: relative;

list-style: none;

overflow: hidden;

width: 100%;

padding: 0;

margin: 0;

}

.rslides li {

-webkit-backface-visibility: hidden;

position: absolute;

display: none;

width: 100%;

left: 0;

top: 0;

}

.rslides li:first-child {

position: relative;

display: block;

float: left;

}

.rslides img {

display: block;

height: auto;

float: left;

width: 100%;

border: 0;

}
```
    

El archivo final quedaría de la siguiente forma.

```html
<!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

    <title>responsiveslides</title>

<style>

.rslides {

position: relative;

list-style: none;

overflow: hidden;

width: 100%;

padding: 0;

margin: 0;

}

.rslides li {

-webkit-backface-visibility: hidden;

position: absolute;

display: none;

width: 100%;

left: 0;

top: 0;

}

.rslides li:first-child {

position: relative;

display: block;

float: left;

}

.rslides img {

display: block;

height: auto;

float: left;

width: 100%;

border: 0;

}

</style>

</head>

<body>

<ul class="rslides">

    <li><img src="1.jpg" alt=""></li>

    <li><img src="2.jpg" alt=""></li>

    <li><img src="3.jpg" alt=""></li>

</ul>

<!-- scripts -->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ResponsiveSlides.js/1.53/responsiveslides.min.js"></script>

<script>

$(function() {

    $(".rslides").responsiveSlides();

});

</script>

</body>

</html>
```
    

Hasta el momento las imágenes cambian solas es responsive pero no tenemos los controles vamos a mostrarlos ahora, para eso vamos agregar unos atributos al script que agregamos y estamos apuntando con la clase llamada rslides quedando de la siguiente forma.

```html
<script>

$(function() {

    $(".rslides").responsiveSlides({

    auto: true, // Boolean: Animate automatically, true or false

    speed: 500, // Integer: Speed of the        transition, in milliseconds

    timeout: 4000, // Integer: Time between slide transitions, in milliseconds

    pager: false, // Boolean: Show pager, true or false

    nav: false, // Boolean: Show navigation, true or false

    random: false, // Boolean: Randomize the order of the slides, true or false

    pause: false, // Boolean: Pause on hover, true or false

    pauseControls: true, // Boolean: Pause when hovering controls, true or false

    prevText: "Previous", // String: Text for the "previous" button

    nextText: "Next", // String: Text for the "next" button

    maxwidth: "", // Integer: Max-width of the slideshow, in pixels

    navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'

    manualControls: "", // Selector: Declare custom pager navigation

    namespace: "rslides", // String: Change the default namespace used

    before: function(){}, // Function: Before callback

    after: function(){} // Function: After callback

    });

});

</script>
```
    

Para mostrar los controles cambiamos donde dice **auto: false y pager: true y nav: true** guardamos recargamos y listo ya tenemos los controles, podemos cambiar otras cosas como la velocidad el hover del pause etc, el resto seria agregarle estilos a los controles.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683732076/John%20Serrano/Blog%20Post/responsive-slides-js/respon_2_repu0o.jpg)

Cabe destacar que toda las imágenes son responsive como lo dice el mismo nombre de la librería, pero eso lo logramos con el estilo que de la damos en .rslides img del 100% podría ser menos y seguiría siendo responsive mientras tenga el signo porcentaje "%".

Bueno espero que sea de su ayuda hasta la próxima.
