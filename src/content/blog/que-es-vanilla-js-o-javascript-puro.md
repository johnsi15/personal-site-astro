---
title: ¿Que es Vanilla js  o JavaScript puro?
publishedDate: "2017-10-17T01:33:29.000Z"
updatedDate: "2018-07-27T21:17:38.000Z"
pubDate: "2017-10-17T01:33:29.000Z"
tags: 
- JavaScript
- Jquery
- programación
- Windows
- Linux
- Vanillajs
- framework
excerpt: Vanilla JS es una iniciativa, en forma de framework que intenta enseñar las grandes ventajas de no usar frameworks o librerias y es solo JavaScript puro
description: Vanilla JS es una iniciativa, en forma de framework que intenta enseñar las grandes ventajas de no usar frameworks o librerias y es solo JavaScript puro
primaryTag: { name: 'JavaScript', slug: 'javascript' }
canonicalURL: "https://johnserrano.co/blog/que-es-vanilla-js-o-javascript-puro"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683238564/John%20Serrano/Blog%20Post/que-es-vanilla-js-o-javascript-puro/vanillajs_gbyba0.jpg"
---

Hola que tal amigos como vamos el día de hoy voy a explicarles un poco de cómo usar **vanilla js** que no es más que otra cosa que **JavaScript** puro , muchas veces comenzamos a usar JavaScript sin saber escribir JavaScript realmente y de la mejor forma, casi siempre aprendemos JavaScript es usando librerías como **Jquery** pero realmente terminamos aprendiendo más de la propia librería que del propio lenguaje de programación.

Vanilla JS es una iniciativa, en forma de framework que intenta enseñar las grandes ventajas de no usar frameworks y potenciar nuestras aplicaciones sin necesidad de añadir grandes archivos extra.

Antes de entrar en materia un poco de teoría de que es JavaScript,  JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, 3 basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas4 aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.

Es este artículo voy a mostrar unos ejemplos básicos del uso de vanilla js tomando como ejemplo base ejercicios con jquery pasándolos a javascript puro, bueno sin más que decir vamos a comenzar con los ejemplos tambien encontré este sitio web donde comienza desde lo más básico [aprendiendo JavaScript](https://www.javascript.com).

El primer ejemplo es la selección de texto o de un elemento primero lo voy hacer con jquery y después con vanilla para que vean la diferencia.

Para seleccionar un texto y pasarlo en otro lado con jquery hacemos lo siguiente.

## Jquery

```js
const mensaje = $('#container #title').text();
$('#container #salida').text(mensaje);
```
    

Con vanilla js seria de la siguiente manera.

## Vanilla JS

```js
const mensajeVanilla = document.getElementById('title').textContent;
document.getElementById('salida').textContent = mensajeVanilla;
``` 

Como podemos ver usamos **document.getElementById()** para seleccionar un elemento del **DOM**, existen otras forma de hacer selecciones veamos un ejemplo de esto.

Con jquery podemos seleccionar html de la siguiente manera.

## Jquery

```js
const texto = $('#container #texto').html();
$('#container #salida').html(texto);
```

Con vanilla js lo podemos hacer de la siguiente manera.

## Vanilla JS

```js
const textVanilla = document.querySelector('#container #texto').innerHTML ;
document.querySelector('#container #salida').innerHTML  = textVanilla;
```
    

Como podemos ver hacemos lo mismo que con jquery y además estamos usando otro selector de vanilla que es querySelector(), también existe un selector más el cual es **querySelectorAll** y lo que hace es seleccionar todos los elementos de una clase o un id que le indiquemos veamos un ejemplo.

## Vanilla JS

```js
const element = document.querySelectorAll(".opt");
document.querySelector('#container #salida').innerHTML  = element[0].innerHTML;
```
    

La selección de todos los elementos nos devuelve una lista de elementos y seleccionamos la posición para obtener el html de esa selección, también podemos usar un **forEach** para recorrer esa lista mas adelante vamos a ver un ejemplo de como hacerlo.

Tenemos dos forma de escribir en vanilla js con comillas simples o comillas dobles, tenemos algunas funciones para manejar texto veamos algunas.

Contamos con length que nos permite contar, nos cuenta cuantos caracteres existen.

```js
const length = 'John Serrano'.length;
console.log(length)
```
    

Esta toLowerCase la cual convierte un texto en minúsculas.

```js
const minusculas = "THE KIDS".toLowerCase();
console.log(minusculas);
```
    

Por el contrario también tenemos una función que convierte el texto en mayúscula.

```js
const mayusculas = "I wish I were big.".toUpperCase();
console.log(mayusculas)
```
    
Como se puede notar son funcionalidades propias de JavaScript que en ocasiones no sabemos y terminamos usando con Jquery.

Algo más que normalmente usamos en jquery es agregar clases veamos cómo se hace con vanilla js.

## Vanilla JS

```js
const el = document.querySelector('#container');
el.classList.add('newClass');
el.classList.remove('otherClass');

/*  Revisamo si existen esas clases */
// alert(el.classList.contains("newClass")); 
// alert(el.classList.contains("otherClass"));
```
    

Como último ejemplo voy a mostrar una función que es muy usado en la librería de Jquery la cual es recorrer una lista de elementos, entonces con Jquery normalmente se hace de la siguiente manera.

## Jquery

```js
$('#lista li').each(function(indice, valor){
        console.log('Hola soy el índice -> '+ indice + " hay este valor: " + valor);
});
```
    

Es bastante sencillo con JavaScript es un poco más extenso pero obtenemos el mismo resultado veamos cómo se hace.

## Vanilla JS

```js
const list = document.querySelectorAll('#lista li');
list.forEach(function(currentValue, indice, array) {
    console.log("En el índice " + indice + " hay este 
    valor: " + currentValue);
});
```
    

Como puedes ver es el mismo resultado solo un poco más extenso a la hora de escribir el código, podemos obtener el valor, índice que son los dos valores que más usamos a la hora de iterar un array en este caso un array de elementos.

Bueno espero que haya sido de su ayuda este artículo y los ánimo a que sigan aprendiendo más funcionalidades de JavaScript como escribir JavaScript puro, logrando entender más el funcionamiento del lenguaje de programación JavaScript.

Mas información y ejemplos en [http://vanilla-js.com](http://vanilla-js.com).

Todos los ejemplos que vimos los pueden encontrar en [codepen](https://codepen.io/Jandrey15/pen/wrmdXJ?editors=1012) saludos y hasta la próxima.
