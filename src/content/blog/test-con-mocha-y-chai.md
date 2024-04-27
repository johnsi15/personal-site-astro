---
title: Test con mocha y chai
publishedDate: "2018-07-01T21:31:40.000Z"
updatedDate: "2019-09-03T16:38:55.000Z"
pubDate: "2018-07-01T21:31:40.000Z"
tags: 
- JavaScript
- nodejs
- Developer
- desarrollo
- mocha
- chai
- test
- testing
- npm
- pruebas
excerpt: Testing de nuestras aplicaciones web en este caso con mocha y chai, chai es una librería de aserción que nos facilita el uso de mocha y chai usa interfaces.
description: Testing de nuestras aplicaciones web en este caso con mocha y chai, chai es una librería de aserción que nos facilita el uso de mocha y chai usa interfaces.
primaryTag: { name: 'JavaScript', slug: 'javascript' }
canonicalURL: "https://johnserrano.co/blog/test-con-mocha-y-chai"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683212764/John%20Serrano/Blog%20Post/test-con-mocha-y-chai/mocha_nk82oo.jpg"
---

El día de hoy vengo con un artículo algo básico pero de ayuda para comenzar con el **testing** de nuestras aplicaciones web en este caso con **[mocha](https://mochajs.org/)** y **[chai](http://www.chaijs.com/)**, chai es una librería de aserción que nos facilita el uso de mocha y chai tiene varias interfaces: **assert, expect y should,** en este post vamos usar chai ya que nos permite usar cualquier tipo de interfaz más adelante podemos ver el uso de algunas de ellas.

Ahora que es mocha y que son las pruebas unitarias y para qué sirven, mocha es un **framework** de prueba JavaScript rico en características que se ejecuta en **[Node.js](https://nodejs.org/en/)** y en el navegador, haciendo que las pruebas **asincrónicas** sean simples y divertidas.  También podemos crear pruebas **síncronas**.

Una prueba unitaria es una forma de comprobar el correcto funcionamiento de una unidad de código. Por ejemplo en diseño estructurado o en diseño funcional una función o un **procedimiento**, en diseño orientado a objetos una clase. Esto sirve para asegurar que cada unidad funcione correctamente y eficientemente por separado. Además de verificar que el **código** hace lo que tiene que hacer, verificamos que sea correcto el nombre, los nombres y tipos de los parámetros, el tipo de lo que se devuelve, que si el estado inicial es válido entonces el estado final es válido. *Fuente: Wikipedia*.

Mocha y chai nos permiten crear pruebas unitarias muy completas para nuestro desarrollo de forma simple y divertida en **JavaScript**. Esto nos permite acercarnos a cumplir con la **pirámide de cohn**, la pirámide de pruebas de **[Mike Cohn](https://en.wikipedia.org/wiki/Mike_Cohn)**, descrita en su libro Succeeding with Agile, ha sido un referente en este campo durante mucho tiempo. En ella Cohn establece que hay varios niveles de pruebas, y señala el grado en el que deberíamos automatizarlas.

![Piramide](https://res.cloudinary.com/john-serrano/image/upload/v1683212909/John%20Serrano/Blog%20Post/test-con-mocha-y-chai/piramide_awpqbz.png)

Bueno en este artículo vamos a crear algunos ejemplos para implementar test unitarios con **npm, mocha y chai**. Npm es el gestor de paquetes JavaScript de Node.js en otras palabras nos permite descargar librerías o paquetes tienen que tener **Node.js** instalado ya que npm viene con Node.js, sombre mocha y chai ya les comente que son.

Uso de las diferentes interfaces que nos trae chai.

```js
// Should
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);

// Expect
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);

// Assert
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```
    
    

Como podemos ver todas tienen una forma diferente de implementar las pruebas ahora vamos a un ejemplo desde cero.

Lo primero es como dije tener instalado npm que ya viene con Node.js bien ahora creamos un **packege.json** con **`npm init --yes`** en alguna parque de nuestro equipo desde la terminal veamos paso a paso.

Creamos un folder para nuestros tests.
`mkdir tests_mocha`

Creamos el fichero package.json. Este fichero es utilizado por npm para tener toda la información de nuestro proyecto como son las dependencias de desarrollo y producción entre otras cosas.
`npm init --yes`

Ahora vamos a instalar la librería de mocha con npm y agregamos la bandera `--sabe-dev` para que sea una dependencia de desarrollo.
`npm install mocha --save-dev`

Creamos un folder más llamado **test** donde van a estar todos nuestros tests y creamos un archivo test.js.

    mkdir test
    

Agregamos el siguiente código y usamos la librería de **aserción assert** que viene por defecto con nodejs, en otros ejemplos usaremos chai.

```js
const assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```
    
En nuestro test tenemos la siguiente estructura el **describe** y el **it** que son:

**Describe**

En esta parte definimos bloques de pruebas podemos tener varios bloques de pruebas y relacionarlos entre sí en otras palabras es una descripción general de nuestras pruebas.

**It**

Los it se refiere a cada una de las pruebas es decir dentro de un describe podemos tener varios it que son las pruebas de eses describe.

Esta es una de las **estructuras** más sencillas usando mocha.js, no es la única estructura que existe ya que mocha nos permite tener más tipo de estructuras que no serán mencionadas en este post.

Ahora bien volviendo a nuestro primer test unitario para correrlo vamos a la terminal y nos ubicamos en la raíz y corremos el comando `npm test` para que funcione debemos modificar el **package.json** agregando lo siguiente en la parte de scripts:

`"test": "mocha"`

    pwd
    /c/Users/Andrey/tests_mocha
    npm test
    
    

![Test-1](https://res.cloudinary.com/john-serrano/image/upload/v1683212910/John%20Serrano/Blog%20Post/test-con-mocha-y-chai/test-1_wht4vx.png)

El test pasa porque estamos esperando un -1 ya que el valor 4 no está en el array que le estamos pasando, indexOf es una función de javascript el cual nos devuelve 1 si se encuentra el valor y -1 si no se encuentra.

Ahora vamos a crear un test con un script de algunas operaciones matemáticas, bien lo primero instalar chai con `npm install chai --save` lo siguiente importar el módulo de chai y también importar nuestro script de operaciones.

```js
const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

const Operations = require('../src/app.js');
```

Ahora si vamos a los test los divide en 3 describe donde existen operaciones matemáticas y en cada una de ellas uso un tipo de aserción gracias a chai para ver las diferencia y su manera de aplicarlo.

```js
describe('Mathematical operations', () => {
  const operation = new Operations(10, 5);

  describe('Basic operation: sum with assert', () => {
    it('Sum of 2 numbers equals 15', () => {
      const sum = operation.sum.value;
      assert.equal(sum, 15);
    })

    it('The sum of 10 + 5 equals 15 ', () => {
      const sum = operation.sum.text;
      assert.equal(sum, 'La suma de 10 + 5 = 15');
    })

    it('The result is a string', () => {
      const sum = operation.sum.text;
      assert.typeOf(sum, 'string');
    })

    it('The result is a number', () => {
      const sum = operation.sum.value;
      assert.typeOf(sum, 'number');
    })

  })

  describe('Basic operation: subtraction with expect', () => {
    it('Subtraction of 2 numbers equals 5', () => {
      const res = operation.subtraction.value;
      expect(res).to.equal(5);
    })

    it('The subtraction of 10 - 5 equals 5 ', () => {
      const res = operation.subtraction.text;
      expect(res).to.equal('La resta de 10 - 5 = 5');
    })

    it('The result is a string', () => {
      const res = operation.subtraction.text;
      expect(res).to.be.a('string');
    })

    it('The result is a number', () => {
      const res = operation.subtraction.value;
      expect(res).to.be.a('number');
    })
  })

  describe('Basic operation: area of a triangle with should', () => {
    it('Area of triangle with base 10 x height 5 equal 25', () => {
      const area = operation.area.value;
      area.should.equal(25);
    })

    it('Area of triangle equals 25 ', () => {
      const area = operation.area.text;
      area.should.equal('El área del triángulo es 25');
    })

    it('The result is a string', () => {
      const area = operation.area.text;
      area.should.be.a('string');
    })

    it('The result is a number', () => {
      const area = operation.area.value;
      area.should.be.a('number');
    })
  })
})

```
    
Las operaciones matemáticas están en la carpeta `src/` un file `app.js` es un script basado en clases, el cual llamamos en los test para aplicar los test, Por cuestiones del post no voy a entrar en detalles sobre es script que uso para realizar los test.

Por ultimo solo nos queda ir a la terminal y correr el comando `npm test` y verificar que todos los test pasen, como dije antes mocha tiene otro tipo de estructuras que no se vieron en este post para ampliar toda esa información puedes visitar la documentación de **[mocha](https://mochajs.org/)**.

Todo el código que se usó para este post está en el siguiente **[repositorio](https://github.com/johnserrano15/TestMocha)**, bueno espero que sea de tu ayuda para comenzar con el mundo del testing y hasta la próxima.
