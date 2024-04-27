---
title: ¿Que es babel y como funciona?
publishedDate: "2018-07-27T21:12:00.000Z"
updatedDate: "2019-09-03T16:27:27.000Z"
pubDate: "2018-07-27T21:12:00.000Z"
tags: 
- react
- react.js
- JavaScript
- Front-End
- webpack
- terminal
- jsx
- babel
- presets
- plugins
- ES2015
- nodejs
- desarrollo-web
excerpt: Babel es una herramienta que nos permite transformar nuestro código JS de última generación a JS que cualquier navegador o versión de node.js entienda.
description: Babel es una herramienta que nos permite transformar nuestro código JS de última generación a JS que cualquier navegador o versión de node.js entienda.
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/que-es-babel-y-como-funciona"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683210447/John%20Serrano/Blog%20Post/que-es-babel-y-como-funciona/Babel_f9ipm1.jpg"
---

Vamos a ver el día de hoy un artículo algo sencillo sobre que es babel para que sirve y como funciona. **[Babel ](https://babeljs.io/)** es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de **node.js** entienda.

Babel funciona mediante **plugins** para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin [babel-plugin-transform-es2015-arrow-functions](https://www.npmjs.com/package/babel-plugin-transform-es2015-arrow-functions) podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) podemos hacer que entienda código de **JSX** y lo convierta a código JS normal.

**Requisitos** para seguir el artículo y realizar los ejemplos, tener instalado **node.js** con **npm** y manejo básico de la terminal si no sabes cómo usar la terminal puedes ver el siguiente artículo donde explico el **[manejo básico de la terminal](http://bit.ly/2A5KgH5)**.

Veamos como instalar **babel** en un proyecto desde la terminal para iniciar un proyecto de node.js usamos `npm init -y` eso nos crea un package.json con los datos básicos de nuestro proyecto y ahora vamos a instalar dos package.

`npm i -D babel-core babel-cli`

Listo con eso ya tenemos instalado babel el cual fue el package ***babel-core*** y el ***package babel-cli*** nos permite ejecutar babel desde la terminal, con esto instalado ya podemos ejecutar **babel** con el siguiente comando.

`babel script.js -o script-compiled.js`

Si les devuelve algún error pueden ejecutarlo de la siguiente manera.

`node_modules/.bin/babel script.js -o script-compiled.js`

Otra forma de hacerlo es crear un script en el package ya que me parece una forma mucho más fácil y cómoda.

```json
"scripts": {
  "build": "babel script.js -o script-compiled.js"
}
```    

Después de agregar ese script podemos ejecutar desde la terminal **`npm run build`**.

**Nota:** babel script.js hace referencia a nuestro código con las últimas características de [***JavaScript***](http://bit.ly/2NUwB7J) y la bandera –o script-compiled.js es la salida de nuestro código transformado a código que los navegadores puedan entender.

Sin embargo con la configuración por defecto Babel no hace absolutamente nada, así que necesitamos configurar babel. Para eso vamos a crear en la raíz de nuestro proyecto un archivo llamado **.babelrc** que es donde vamos a colocar la configuración en formato JSON.

Lo primero que necesitamos que haga Babel es transformar nuestro código de ECMAScript 6 a ECMAScript 5, para esto hay muchos plugins, uno por cada característica nueva, y para no bajar uno por uno existen los **presets**.

Un preset es un conjunto de plugins, hay varios presets que los desarrolladores de Babel ofrecen y otros creados por la comunidad, para ECMAScript 6 vamos a bajar el **[preset ES2015](https://babeljs.io/docs/en/babel-preset-es2015/)**.

**Nota:** si no sabes nada sobre ES2015 te invito a que leas el siguiente ***[artículo](http://bit.ly/2qJMTd8)*** donde explico las características más importantes.

Ahora vamos a instalar el preset ES2015 en la terminal escribimos lo siguiente.

`npm i -D babel-preset-es2015`

Luego vamos a agregarlo a la configuración de Babel en el archivo *.babelrc*.

```js
{
  "presets": ["es2015"]
}
```

Ahora cuando volvamos a usar Babel este va a transformar todo el código de ES6 a ES5. Como se puede ver no necesitamos agregar babel-preset- al nombre del preset ya que Babel asume por defecto que tiene ese prefijo.

Un ejemplo usando JS de última generación.

```js
const array = [1, 2, 3];
    
const newArray = array.map((item) => {
  return item ** 2;
})

console.log(newArray)

const [a, ,b] = ['hola', 2, 'mundo']

console.log(`${a} - ${b}`)

const { hola, num } = { 
  hola: 'hola mundo :)', 
  num: 2018 
}

console.log(`${hola} -> número ${num}`)

// script.js
```
    

Corremos `npm run build` para que babel haga su trabajo de transformar el código.

```js
'use strict';
    
var array = [1, 2, 3];

var newArray = array.map(function (item) {
  return item ** 2;
});

console.log(newArray);

var _ref = ['hola', 2, 'mundo'],
    a = _ref[0],
    b = _ref[2];

console.log(a + ' - ' + b);

var _hola$num = {
  hola: 'hola mundo :)',
  num: 2018
},
    hola = _hola$num.hola,
    num = _hola$num.num;

console.log(hola + ' -> n\xFAmero ' + num);

// script-compiled.js
```
    

Ahora bien si estamos usando React.js  al crear nuestros componentes, sin embargo los navegadores y Node.js no entienden JSX, así que para que funcionen nuestro components necesitamos transformar nuestro código, para eso usamos Babel.

Babel tiene plugins para soportar JSX y **[FlowType](https://flow.org/)**, sí deciden usarlo, y posee un preset con estos plugins llamado react así que vamos a cargarlo, para esto lo bajamos con npm.

`npm i -D babel-preset-react`

Ya instalado el preset de react lo agregamos a la configuración.

```json
{
  "presets": ["es2015", "react"]
}
```   

Con esto ya podemos usar **JSX** en nuestro código y Babel se va a encargar de que funcione en todos los navegadores realizando las transformaciones necesarias.

Un ejemplo usando react.js con JSX.

```js
// Component react
const HelloWorld = (props) => {
  return (
    <div>
      <h4>Hello world! :)</h4>
      <p>{props.name}</p>
    </div>
  )
}

const app = document.getElementById('app');

ReactDOM.render(<HelloWorld name='John Serrano' />, app);

// script.js
```
    

Corremos `npm run build` para que babel haga su trabajo de transformar el código.

```js
// Component react
var HelloWorld = function HelloWorld(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h4',
      null,
      'Hello world! :)'
    ),
    React.createElement(
      'p',
      null,
      props.name
    )
  );
};

var app = document.getElementById('app');

ReactDOM.render(React.createElement(HelloWorld, { name: 'John Serrano' }), app);

// script-compiled.js
```
    

###### Nuevas funcionalidades

Hay algunas funciones de ES2016 y superiores como **Async/Await**, etc. que son muy útiles al desarrollar y ya podemos usarlas mediante plugins de Babel.

Tenemos un preset que incorpora los preset ES2015, ES2016 y ES2017 llamado **latest** con ese preset instalado no necesitamos tener los otros preset instalados.

Existen 4 preset que nos permiten usar características que aún no son estándar, stage-3, stage-2, stage-1 y stage-0  activan funciones experimentales. Cada preset soporte algunas las características del preset superior más nuevas, así stage-3 soporta ciertas features y stage-2 soporta todas las de stage-3 más nuevas, el último [**preset stage-0**](https://babeljs.io/docs/en/babel-preset-stage-0) por tanto soporta todas estas características.

Para usar esos preset solo tenemos que instalarlos con npm.

`npm i -D babel-preset-stage-0 babel-preset-latest`

La configuración quedaría de la siguiente manera.

```json
{
  "presets": ["latest", "react", "stage-0"]
}
```
    
Con esto ya tenemos todo ECMAScript **2015/2016/2017**, React (JSX) y las funciones experimentales del Stage 0.

Un ejemplo usando async await.

```js
// Async/Await
const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

const asyncCall = async () => {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// script.js
```
    

Corremos `npm run build` para que babel haga su trabajo de transformar el código.

###### Plugins para mejorar el rendimiento en producción

Algunos plugins que tiene babel para producción y que no hacen parte de ningún preset son los siguientes.

- 
[transform-minify-booleans](https://babeljs.io/docs/en/babel-plugin-transform-minify-booleans) – Convierte false a !1 y true a !0 para reducir caracteres.

- 
[transform-remove-console](https://babeljs.io/docs/en/babel-plugin-transform-remove-console) – Remueve console.log, console.error, etc.

- 
[transform-remove-debugger](https://babeljs.io/docs/en/babel-plugin-transform-remove-debugger) – Remueve debuggers

- 
[transform-simplify-comparison-operators](https://babeljs.io/docs/en/babel-plugin-transform-simplify-comparison-operators) – Simplifica comparadores si es posible (convierte === a == en casos donde el tipo sea siempre el mismo)

- 
[transform-member-expression-literals](https://babeljs.io/docs/en/babel-plugin-transform-member-expression-literals) – Transformar `foo[‘bar’] a foo.bar`

- 
[transform-merge-sibling-variables](https://babeljs.io/docs/en/babel-plugin-transform-merge-sibling-variables) – Transformar `var a=1;var b=2; a var a=1,b=2;`

- 
[transform-property-literals](https://babeljs.io/docs/en/babel-plugin-transform-property-literals) – Transforma `var foo = { "bar": function () {} }; a var foo = { bar: function () {} };`

Más ejemplos en [babel](https://babeljs.io/docs/en/plugins#minification).

Para react tenemos estos plugins.

- 
[transform-react-constant-elements](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements) – Hace que elementos constantes de React se definan una vez para mejorar el rendimiento.

- 
[transform-react-inline-elements](https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements) – Convierte funciones de React.createElements al objeto que devuelve para evitar ejecutar una función.

Para usar los plugins tenemos que instalarlos desde la terminal con npm.

`npm i -D babel-plugin-transform-react-constant-elements babel-plugin-transform-remove-console`

Ahora en la configuración de babel debemos agregar estos plugins.

```json
{
  "presets": ["latest", "react", "stage-0"],
  "plugins": ["transform-react-constant-elements"],
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

Como podemos ver se agregar una llave con plugins la cual es un array hay normalmente van nuestros plugins, también vemos una llave con **env** donde podemos separar los plugins que solo queremos para producción.

Por defecto Babel usa el entorno development, así podemos definir ciertos plugins o presets solo para desarrollo, luego podemos mediante la variable de entorno **NODE_ENV** definir que usemos **production**, test o cualquier otro entorno y con eso agregar algunos plugins solo para estos entornos.

La clave env se tomará de **process.env.BABEL_ENV**, cuando esto no está disponible, utiliza process.env.NODE_ENV si incluso eso no está disponible, entonces se predetermina a "desarrollo".

En unix podemos crear un script en el package.json

`"build": "BABEL_ENV=production babel script.js -o script-compiled.js"`

También podemos solo exportar la variable y luego ejecutar el comando.

`export BABEL_ENV=production`

`npm run build`

En **windows** podemos hacerlo de la siguiente forma en el package.json agregamos un script.

`"build_win": "SET BABEL_ENV=production&&babel script.js -o script-compiled.js"`

Más información en **[babelrc ](https://babeljs.io/docs/en/babelrc)**.

La gran ventaja de esto es que ciertos plugins hacen más difícil el desarrollo o más lento a Babel, pero ayudan mucho en nuestra aplicación en producción, para eso entonces podemos solo activarlos en production y obtener todas sus ventajas cuando es necesario.

###### Babel con webpack

Si usas **webpack** para construir el build de sus archivos de *front-end* podemos usar babel con webpack gracias a un loader con esto podemos hacer más fácil la construcción del build, les recomiendo el artículo donde explico cómo usar **[webpack desde cero](http://bit.ly/2Or1jXd)** y sin la necesidad de crear un archivo .babelrc.

Instalamos el package **babel-loader**.

`npm i -D babel-loader`

Ahora en la configuración de nuestro webpack agregamos lo siguiente.

```js
const path = require('path');
    
const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

module.exports = config;

// webpack.config.js
```  

Con esto y teniendo el archivo de configuración ***.babelrc*** en la raíz del proyecto podemos hacer que Webpack se encargue de usar Babel para transformar todo nuestro código JS y JSX a JS que todos los navegadores entiendan.

Bueno bien cómo podemos ver usar babel no es tan complicado solo hay que tener en cuenta a la hora de la configuración y saber que package necesitamos, de esta manera podemos usar la nueva generación de JavaScript y divertirnos a la hora de crear nuestros proyectos.

Espero que el articulo sea de su ayuda y todo haya quedado claro, el código completo se encuentra en **[https://github.com/blog-johnserrano/babel](https://github.com/blog-johnserrano/babel)** no siendo más hasta la próxima.
