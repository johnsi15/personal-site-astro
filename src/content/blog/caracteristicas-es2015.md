---
title: Características ECMAScript 2015 'ES2015'
publishedDate: "2018-01-08T16:19:53.000Z"
updatedDate: "2020-04-16T16:54:25.000Z"
pubDate: "2018-01-08T16:19:53.000Z"
tags: 
- JavaScript
- development
- programación
- Windows
- Linux
- ES2015
- ECMAScript
- browser
excerpt: ECMAScript 2015 es un estándar que fue ratificado en junio de 2015, ES2015 es una actualización importante del idioma, y la primera actualización importante del lenguaje.
description: ECMAScript 2015 es un estándar que fue ratificado en junio de 2015, ES2015 es una actualización importante del idioma, y la primera actualización importante del lenguaje.
primaryTag: { name: 'ES2015', slug: 'es2015' }
canonicalURL: "https://johnserrano.co/blog/caracteristicas-es2015"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683233456/John%20Serrano/Blog%20Post/caracteristicas-es2015/ES2015Final_kb1rvi.jpg"
---

Que tal amigos el día hoy voy a explicar algunas de las características del **estándar de ES2015** pero que es ES2015 comencemos por definir y entender que es y que son esas siglas.

ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar ISO 16262.

ECMAScript 2015 es un estándar que fue ratificado en junio de 2015, ES2015 es una actualización importante del idioma, y la primera actualización importante del lenguaje desde ES5 se estandarizó en 2009. La implementación de estas características en los principales motores de JavaScript ya está en marcha. Cabe recalcar que **ECMAScript 2015** es lo mismo que **ES2015**.

Comencemos con unas de las características de este estándar.

##### Arrows function

Las arrows function se usan especialmente con este símbolo => veamos cómo se hace de la forma normal y con ES2015.

```js
// Forma normal
function suma(a, b) {
return a + b;
}
console.log(suma(5, 8))

// Con las arrows function
const sumaArrow = (a, b) => {
return a + b
}
console.log(sumaArrow(5, 8))

const holaMundo = () => {
console.log('Hola mundo')
}
holaMundo()
```
    

Para todo se puede usar las arrow function para funciones anónimas por ejemplo.

```js
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0)
  fives.push(v);
});
```
    

##### Template Strings

Los Template strings es una mejor forma de escribir string y se usan con otro tipo de comillas veamos algunos ejemplos.

```js
const fecha = '07/01/2018';
const number = 2018;

// Concatenamos variables con texto de una forma muy fácil 
let message = `Como se usan los template strings ${fecha} mas texto, ${number}`;

console.log(message);
```
    

Este tipo de strings son muy útiles a la hora de concatenar texto con variables.

##### Valores por defecto en las funciones

Podemos dejar un valor por defecto en una función sin necesidad de pasarlo.

```js
// Definimos un parámetro con un valor por defecto.
function f(x, y=12) {
  return x + y;
}

f(3) 
console.log(f(3))

// Los tres puntos indican que todo lo que venga por argumentos los va a recibir la función
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}

f(3, "hello", true)
console.log(f(3, "hello", true))

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3])
```
    

En el último ejemplo cada uno  delos elementos del array pasa como un argumento para la función.

##### Let y Const

Let y const son dos nuevos formas de definir variables ya lo hemos estado usando en los ejemplos anteriores pero veamos todo el uso como tal de cada una de ellas.

###### Const

```js
const hola = 'Hola mundo';
function helloWorld() {
  const hola = 'Hola mundo desde una function';
  return hola;
}

console.log(hola)
console.log(helloWorld())
```   

Como podemos ver la variable hola está definida con const en dos ámbitos uno global y otro en una función nunca se puede tener dos variables con el **mismo nombre** estando en el mismo ámbito cuando se declara con const y tampoco se le puede cambiar el valor que tenga esa variable es decir la primera vez que se declare con const no se le puede pasar otro valor con let paso algo parecido ya vamos a ver.

###### Let

```js
let holaLet = 'Hola mundo con let';
function helloWorldLet() {
  let hola = 'Hola mundo desde una function con let';
  return hola;
}

holaLet = 'Nuevo texto para let.';
console.log(holaLet)
console.log(helloWorldLet())
```
    

Se puede ver que podemos asignarle un nuevo valor a la variable declarada con let con const no se puede hacer esto, otra cosa es que cuando definimos variables con let y const solo viven en el ámbito donde se fueron definidas ejemplo si en la **function helloWorldLet** se definió let hola y yo intento llamar esa variable por fuera de la función no va dar un hola **is not defined**.

Bueno creo que voy a dejar este post hasta este punto existen otras características que no vimos pero los invito a profundizar e investigar más sobre estas,  para mucha más información puede visitar [Babel](https://babeljs.io/learn-es2015/) o puedes ver este artículo [¿Que es babel y como funciona?](https://johnserrano.co/blog/que-es-babel-y-como-funciona).

También hay que tener en cuenta que hoy en día no todas estas características son compatibles con los navegadores por esta razón usamos **babel** como un transpilador para que escriba nuestro código de la forma normal de javascript y no exista problemas para usar estas características de ES2015.

Todos los ejemplos también los pueden encontrar en el siguiente link [ejemplos](https://codepen.io/Jandrey15/pen/RxjOaB?editors=1012) espero les ayude estos pequeños ejemplos y hasta la próxima saludos.
