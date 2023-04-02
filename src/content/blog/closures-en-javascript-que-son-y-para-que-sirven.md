---
title: "Closures en JavaScript que son y para qué sirven"
publishDate: "2022-02-20T16:29:10.000Z"
updatedDate: "2022-03-06T17:09:31.000Z"
description: "Cuando definimos una función y adentro otra función precisamente de eso se trata los closures pero veamos cómo funcionan y para qué sirven."
tags: ["JavaScript", "closures", "development", "webdeveloment", "desarrollo-web"]
excerpt: "Cuando definimos una función y adentro otra función precisamente de eso se trata los closures pero veamos cómo funcionan y para qué sirven."
canonicalURL: "https://johnserrano.co/blog/closures-en-javascript-que-son-y-para-que-sirven"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1680391473/John%20Serrano/Blog%20Post/closures-en-javascript-que-son-y-para-que-sirven/closures_nq1bkk.jpg"
---

Cuando definimos una función y adentro otra función precisamente de eso se trata los **closures** pero veamos cómo funcionan y para qué sirven. Una clausura o closure en pocas palabras me permite acceder al ámbito de una función exterior desde una función interior. Veamos algunos ejemplos.

    function home() {
      const nombre = 'Aprendiendo JavaScript'
        
      function muestraNombre() {
        console.log(nombre)
      }
      return muestraNombre
    }
    
    const init = home()
    init()

Este ejemplo lo que tenemos es una función en la cual devolvemos una función ***muestraNombre()*** la cual retornamos y en la parte exterior ejecutamos ***creaFunc()*** y guardamos en ***miFunc***el resultado de la función interna ***muestrNombre()*** en este caso nuestro closure seria ***miFunc()*** la cual ejecutamos en la última línea de código.

Una cosa especial para dejarlo más claro es que cuando definimos nuestro **closure*miFunc()***lo que sucede con esta función es que guarda el entorno donde fue creada por esta razón la variable ***nombre*** todavía existe al final cuando ejecutamos ***miFunc()***. Un ejemplo más.

    function creaSumador(x) {
      return function (y) {
        return x + y
      }
    }
    
    const suma5 = creaSumador(5)
    const suma10 = creaSumador(10)
    
    console.log(suma5(2))
    // muestra 7
    console.log(suma10(3))
    // muestra 13

Lo que tenemos acá son dos **closures** suma5 y suma10 lo cual comparten el mismo cuerpo de la función ***creaSumador()***, pero almacenas diferentes entornos. En el entorno de suma5 (x = 5) y suma10 (x = 10).

### Expresión de Función Inmediatamente invocada - Immediately-invoked Function Expression (IIFE)

Esta técnica se usa para ejecutar inmediatamente nuestro programa o script, esto también es un tipo de closures ya que podemos tener funciones internas el cual nos permite tener un estilo de variables privadas el cual no podemos acceder desde afuera.

    (function(){
      function metodoPrivado () {
        console.log('Metodo privado')
      }
      const nombre = "John Serrano"
      console.log(nombre)
    })()

### Conclusiones

Bueno como vimos al principio el concepto de los closures puede ser algo complejo, pero aprendiendo los conceptos y de que se tratan podemos ver que no es tan complejo como se piensa al principio, teniendo este conocimiento presente nos puede ayudar a la hora de plantear soluciones a problemas que se nos presente cuando estamos desarrollando. También es verdad que puedes desarrollar sin necesidad de usar los closures pero no esa de más tenerlos presente y conocerlos.
