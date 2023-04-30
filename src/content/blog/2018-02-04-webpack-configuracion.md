---
title: Webpack configuración
slug: webpack-configuracion
date_published: 2018-02-04T20:34:32.000Z
date_updated: 2019-09-03T16:53:25.000Z
tags: JavaScript, ES2015, ECMAScript, Web, development, nodejs, Js, webpack, module
excerpt: Cómo hacer una configuración muy básica con webpack para comenzar nuestros proyectos y hacernos el proceso de desarrollo más fácil y feliz.
---

El día de hoy vamos a ver cómo hacer una configuración muy básica con webpack para comenzar nuestros proyectos y hacernos el proceso de desarrollo más fácil y feliz.

Lo primero que hay que saber es que es webpack en que nos ayuda para que sirve, ***webpack es un Module Bundler for Modern JS Applications,*** es decir un empaquetador de módulos para el desarrollo de aplicaciones modernas en JavaScript.

Aunque hay otras alternativas webpack es un la forma más sofisticada para cargar y transformar módulos. Webpack trae todas las formas de importación de módulos, en resumen trae lo mejor de todos los mundos.

Entrypoints - múltiples puntos de entrada a tus aplicaciones - archivos iniciales, tienes uno por cada página que vayas a usar.

Puedes tener multiples entrypoints.

Output: si bien le decimos cual es el archivo fuente, debemos decirle que hacer con eso y donde ponerlo, porque no queremos mezclar los archivos finales que lee el navegador con los archivos fuente.

Loaders: nos ayudan a cargar todo tipo de formato de archivos.

Plugins: nos ayudan a extender las caracteristicas de webpack, por ejemplo comprimir archivos, dividir nuestros modulos en chunks, etc.

Webpack es developer experience.

Requisitos para implementar webpack, tener instalado node.js y npm si no saben cómo instalar node.js pueden visitar otro [post](https://blog.johnserrano.co/servidor-basico-con-node-js/) donde explico cómo hacerlo.

Teniendo en cuenta estos requisitos lo siguiente es crear un folder o carpeta donde estará nuestra app, mediante la terminal nos ubicamos en esa carpeta y damos un **npm init –y** el cual nos creara un archivo package.json donde estará toda la información de nuestra app como nuestras dependencias de desarrollo y de producción.

![](/content/images/2018/02/1-webpack.jpg)

Lo siguiente es instalar webpack como dependencia de desarrollo con el comando **npm install –save-dev webpack o npm i –D webpack,** después de instalar webpack creamos un archivo con el nombre webpack.config.js este archivo contendrá toda la configuración de nuestro webpack.

Tenemos la siguiente configuración de nuestro webpack lo voy explicando.

    const path = require('path'); // necesitamos path para configurar nuestras rutas de archivos
    
    const ExtractTextPlugin = require('extract-text-webpack-plugin'); // esto es un plugin para extraer css y crear un archivo ya lo veremos más adelante por ahora tendremos que instalarlo con npm i –D extract-text-webpack-plugin
    
    module.exports = {
      entry: path.resolve(__dirname, 'src/js/index.js'), // Este es nuestro archivo de entrada donde va estar todo nuestro código de nuestra app, tener en cuenta que se pueden tener varios entry.
      output: {
    path: path.resolve(__dirname, 'dist'), // El output es donde queremos que nuestro código se generado y listo para ser usado ya pasando plugins como el que vimos anteriormente al igual que todos los loaders que necesitemos para nuestro desarrollo.
    filename: 'bundle.js'
    },
     module: { // acá comienzas todos nuestros loaders como el de babel que nos permite usar es2015 react y todo lo último de javascript y webpack lo transforma en código que el navegador pueda entender, todos estos loader tienen presets y esos presets hay que instalarlos ya veremos cómo instalarlos.
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      { // Loader para archivos con extensión .css
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.(sass|scss)$/, // Lo mismo pero para sass
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
    },
     plugins: [ // este el plugin para extra el css de nuestro bundle.js que es el archivos final que genera webpack y nos crear un nuevo archivo con todo nuestro css.
    new ExtractTextPlugin('css/styles.css') //name permite uusar el nombre original del entrypoint
      ]
    }
    

Entonces todos los presets y loaders que necesitamos son los siguientes:

**npm i -D babel-loader babel-core babel-preset-es2015 css-loader extract-text-webpack-plugin node-sass sass-loader style-loader**

Lo siguiente es crear la estructura de nuestra app la cual contendrá una carpeta src/ donde está todo nuestro código de desarrollo veamos la siguiente imagen.

![](/content/images/2018/02/2-webpack.jpg)

Seguido de eso vamos a nuestro package.json y creamos un script para correr webpack como se puede ver en la siguiente imagen.

![](/content/images/2018/02/3-webpack.jpg)

Lo único importante es el comando webpack y la bandera –w que permite escuchar todos los cambios que hagamos en nuestro index.js, corremos el comando en la terminal.

![](/content/images/2018/02/4-webpack.jpg)

Nos genera un archivo con el nombre bundle.js ahora en nuestro index.html hacemos un link  ese archivo para ver nuestro código de index.js el cual tendrá un hola mundo.

![](/content/images/2018/02/6-webpack.jpg)

Este index.js es el que está en src/js/index.js

![](/content/images/2018/02/5-webpack.jpg)

![](/content/images/2018/02/7-webpack.jpg)

Abrimos nuestro **index.html** y miramos el inspector de elementos de nuestro navegador.

Ahora veamos como cargar nuestros styles.

![](/content/images/2018/02/8-webpack.jpg)

Creamos nuestros estilos en src/css/style.css.

En nuestro index.js importamos el archivo style.css con

import styles from '../css/style.css';

Ahora veamos el dist/ se generó una carpeta con nuestro css.

![](/content/images/2018/02/9-webpack.jpg)

Ahora vamos a nuestro index.html y agregamos los styles.

    <link rel="stylesheet" href="dist/css/styles.css">
    

Con esto bastara para que cargue nuestros styles.

![](/content/images/2018/02/10-webpack.jpg)

Bueno se pueden hacer muchas más cosas ya eso les queda de tarea como por ejemplo usar **webpack-dev-server** y acomodar todo nuestro código para el desarrollo de nuestra app, espero sea de su ayuda y hasta la próxima.

Código del ejemplo completo: [https://github.com/johnserrano15/webpackApp](https://github.com/johnserrano15/webpackApp)
