---
title: Primeros pasos con Python 03
publishedDate: "2016-07-20T21:24:55.000Z"
updatedDate: "2020-05-05T21:30:22.000Z"
pubDate: "2016-07-20T21:24:55.000Z"
tags: 
- Python
- Developer
- desarrollo
- development
- funciones
- clases
- def
- function
- class
- metodo
- objetos
excerpt: Hola amigos el día de hoy vamos a seguir con los primeros pasos en python, hoy vamos a ver lo que son las funciones y las clases como instancia de objetos..
description: Hola amigos el día de hoy vamos a seguir con los primeros pasos en python, hoy vamos a ver lo que son las funciones y las clases como instancia de objetos..
primaryTag: { name: 'python', slug: 'python' }
canonicalURL: "https://johnserrano.co/blog/primeros-pasos-con-python-03"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683384577/John%20Serrano/Blog%20Post/primeros-pasos-con-python-03/primerosPasos03_teq55c.jpg"
---

Hola amigos el día de hoy vamos a seguir con los primeros pasos en **python**, hoy vamos a ver lo que son las funciones y las clases como instancia de objetos. Las funciones son pequeños fragmentos de códigos que nos facilitan a la hora de escribir código haciendo más fácil el manejo y eso de este.

Hay tres formas de usar una función, la primera es declarar y ejecutar una función, la segunda en declarar una función y devolver un dato o ciertos datos, la tercera es declarar una función y pasar datos por parámetros, ya vamos a ver cómo es su funcionamiento y unos ejemplos.

#### Funciones

```py
def mi_funcion():
    # aquí el algoritmo
funcion()
```
    

Como podemos ver en el ejemplo primero se usa la palabra reservada **def** seguido del nombre que le queremos dar a esa función y después dos paréntesis dos puntos, con indentación hay va nuestro código y más abajo colocando el nombre con dos paréntesis se ejecuta la función.

```py
def funcion():
    return "Hola Mundo"
frase = funcion()
print frase
```
    

De la siguiente forma se usan las funciones para devolver algún valor usan la palabra **return** ejecutando la función y pasándole a una variable lo que nos devuelve la función y por ultimo hacemos un print, también podemos devolver varios datos realizando una lista de datos o un diccionario.

```py
def saludar(nombre, mensaje='Hola'):
    print mensaje, nombre
saludar('Pepe Grillo') # Imprime: Hola Pepe Grillo
```
    

Por ultimo tenemos las funciones con parámetros de esta forma podemos pasar valores a las funciones para que se ejecuten con nuestro código que está dentro del código, cabe destacar que todo el código que escribamos dentro de una función queda hay ejemplo si escribimos una variable dentro de una función y queremos usarla fuera de ella no funcionara porque esa variable queda dentro de la función  en local, si queremos que se vea fuera de ella tendríamos que declarar esa variable de tipo global.

#### Clases

Ahora tenemos lo que son las clases que tiene un parecido a una función pero a diferencia de las funciones en una clase podemos tener código y funciones declaradas pero cuando usamos clases ya no se llaman funciones si no métodos que veremos un ejemplo más delante de esto ahora veamos cómo se define una clase.

```py
class Objeto:
    pass
class Antena:
    pass
```
    

Usamos la palabra reservada del lenguaje **class** seguido del nombre que le queremos dar a nuestra clase seguido de eso va nuestro código ya veremos cómo definir un método.

Nota: Cuando hablamos de objetos nos referimos a las clases con una clase podemos definir un objeto o en otras palabras un objeto es una instancia de una clase.

#### Metodos

```py
class Objeto():
    color = "verde"
    tamanio = "grande"
    aspecto = "feo"
    antenas = Antena()
    ojos = Ojo()
    pelos = Pelo()
    def flotar(self):
        pass
```
    

En este ejemplo podemos ver variables declaradas llamados de otras funciones que están por fuera de la clase y podemos ver como se declara un método con **def** nombre paréntesis y pasando por parámetro **self** que es obligatorio y sus dos punto adentro de ese método podemos usar código como si fuera una función.

```py
nombredemiobjeto = Objeto()
print objeto.color
print objeto.flotar()
```
    

De esta forma podemos instanciar un objeto con la clase Objeto en este caso y podemos usar ese objeto para ejecutar método o llamar variables.

Bueno espero que sea de su ayuda trate de explicarlo lo más fácil posible todo se trata de practicar y ser constantes para aprender, dejare algunos ejemplos más claros de funciones y de objetos y clases con métodos, hasta la próxima saludos.
