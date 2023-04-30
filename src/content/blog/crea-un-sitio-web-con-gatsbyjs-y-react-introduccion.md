---
title: Crea un sitio web con GatsbyJS y React - Introducción
publishedDate: 2020-05-28T16:29:16.000Z
updatedDate: 2020-10-02T20:56:26.000Z
pubDate: 2020-05-28T16:29:16.000Z
tags: 
- react
- gatsby
- JavaScript
- nodejs
- vscode
- desarrollo-web
- netlify
- graphql
- deploy
excerpt: Rápido en todo lo que importa, así se define GatsbyJS, cuando trabajamos con React o estamos comenzando a trabajar con React necesitamos configurar muchas cosas...
description: Rápido en todo lo que importa, así se define GatsbyJS, cuando trabajamos con React o estamos comenzando a trabajar con React necesitamos configurar muchas cosas...
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682886680/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/Gatsby2_n55yfy.jpg"
---

Rápido en todo lo que importa, así se define [**GatsbyJS**](https://www.gatsbyjs.org/), cuando trabajamos con [React](https://es.reactjs.org/) o estamos comenzando a trabajar con React necesitamos configurar muchas cosas antes de comenzar algún proyecto o sitio web. Gracias a **GatsbyJS **nos hace la vida un poco más fácil, sin necesidad de configurar tantas cosas para comenzar a programar.

### ¿Qué es GatsbyJS?

**GatsbyJS** es un framework de código abierto basado en **React **que ayuda a los desarrolladores a construir sitios web y aplicaciones increíblemente rápido. La verdad que es muy fácil comenzar con GatsbyJS y divertido.

GatsbyJS está basado en [JAMStack](https://jamstack.org/), puede ser que ya haya trabajado en un sitio **JAMStack **porque **JAMStack** es una pila de herramientas, JavaScript, API y marcado precostruido.

Como vemos esto da mucho que decir de **GatsbyJS **ya que usa esta arquitectura **JAMStack **la cual es una nueva forma de crear sitios web y aplicaciones que ofrece un mejor rendimiento, mayor seguridad, menor costo de escala y una mejor experiencia para el desarrollo.

### ¿Cómo funciona GatsbyJS?

Obtenemos los datos de cualquier parte como puede ser **CMS**, **Markdown** o data desde **apis**, **JSON**, **databases**, etc. Pasamos a la parte de construcción donde usamos **GraphQL** para gestionar la data que obtuvimos en el paso anterior usamos los templates de **React** y finalmente generar un sitio web estático. 

Por ultimo podemos hacer **deploy** de forma sencilla a cualquier web hosting. Veamos una imagen para dejarlo más claro.

![Gatsby como funciona](https://res.cloudinary.com/john-serrano/image/upload/v1682886848/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image_1_rubcjj.png)

> **GatsbyJS** solo usa **node.js** para el desarrollo y al momento de hacer el **build** de nuestro proyecto, recuerda que al final obtenemos una carpeta con los archivos estáticos.

### Requisitos

Tener instalado [node.js](https://nodejs.org/en/) puede usar [nvm](https://github.com/nvm-sh/nvm) para gestionar varias versiones de node.js, yo voy a usar la versión v10.15.3, npm o [yarn](https://yarnpkg.com/) manejo básico de la terminal, un editor de código como [VScode](https://code.visualstudio.com/), tener conocimiento básico de [React](https://johnserrano.co/blog/primeros-pasos-con-react).

### Iniciar un nuevo sitio web

Lo primero que tenemos que hacer es instalar Gatsby eso lo hacemos con el siguiente comando en la terminal:

`npm install -g gatsby-cli`

Cuando tengamos gatsby-cli instalado vamos a poder crear nuestro primer proyecto con el siguiente comando:

`gatsby new my-website`

Este proceso tomara algo de tiempo, luego de eso vamos al nuevo sitio que se creó:

`cd my-website`

Ya **Gatsby** tiene todo listo para correr nuestro sitio ya cuenta con toda la configuración de **webpack** y además de eso usa **hot-reloading **lo cual nos permite ver los cambios cada vez que guardemos el archivo donde estemos trabajando. Vamos a ejecutar nuestro proyecto de forma local con el siguiente comando:

`gatsby develop`

> Si llega a tener algún problema con el comando ***gatsby develop*** puede probar lo siguiente:

```shell
rm -rf node_modules/ .cache/
npm install
gatsby develop
```

El primer comando elimina la carpeta node_modules/ y .cache/, el segundo instala nuevamente todas las dependencias de nuestro proyecto y nuevamente el comando para correr Gatsby en modo desarrollo.

![Gatsby develop](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-1_dsnvns.png)

Abrimos la página que nos dice [http://localhost:8000/](http://localhost:8000/) y podemos ver en nuestro navegador como ya está funcionando nuestro primer sitio web con **GatsbyJS**.

![Mi primer sitio con GatsbyJS](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-2_lsjbh9.png)

Si damos click en Goto to page 2 podemos ver que ya tenemos rutas propias definidas, veamos que pasa al dar click.

![Página número 2](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-3_zzrv6v.png)

Si notas en la barra del navegador tenemos [http://localhost:8000/page-2/](http://localhost:8000/page-2/) ya **Gatsby** nos define unas rutas leyendo los archivos que están en *src/pages *es decir por cada archivo que tenemos en *src/pages ***Gatsby** define una ruta para nuestro proyecto fantástico.

### Agregando una nueva página

Creamos el archivo ***hola.js*** dentro de la carpeta pages con el siguiente código:

```javascript
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const Hola = () => (
  <Layout>
    <section id='Hola'>
      <h1>Hola Bienvenido a GatsbyJS</h1>
      <p>Bienvenido a la página de Hola</p>
      <Link to="/">Regresa al inicio</Link>
    </section>
  </Layout>
)

export default Hola
```
    
Podemos ver que es un componente sin estado y sin props lo único diferente es ***Link ***lo cual lo importamos de ***gatsby-link*** y el resto ya lo sabemos importamos un componente **Layout **y agregamos nuestro *jsx* y exportamos nuestro componente **Hola**.

Podemos ir al navegador directamente [http://localhost:8000/hola](http://localhost:8000/hola) y cargara la nueva página.
![Página Hola](/content/images/2020/05/image-4.png)
Podemos dar click en *Regresar al inicio* y volver a la página principal. También podemos agregar un ***Link ***desde la página principal para ir a nuestra nueva página veamos cómo queda el código.

```javascript
// index.js
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div className='hola'>
      <Link to='/hola'>Ir a la página hola</Link>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
```

Agregue un ***div*** con un Link que nos lleva a la página hola, de esa forma podemos crear páginas y navegar por el sitio gracias a ***Link***.

### Graphql

Algo más que podemos ver antes de terminar este artículo es como funciona graphql abriendo el navegador en [http://localhost:8000/___graphql](http://localhost:8000/___graphql) vamos a trabajar con **GraphiQL**, con esta herramienta podemos probar nuestra data haciendo consultas y pidiendo los datos que necesitamos veamos un ejemplo.

> GraphQL es un lenguaje de manipulación y consulta de datos de código abierto para API, y un tiempo de ejecución para completar consultas con datos existentes. Fuente: [wikipedia](https://en.wikipedia.org/wiki/GraphQL).

![GraphiQL](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-5_qupr4w.png)

```graphiql
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

En este caso estamos haciendo una consulta a la data interna de nuestro sitio web donde obtenemos los datos **title** y **description** de nuestro **metadata** pero de donde viene esa información, muy bien esa información la encontramos en el archivo ***gatsby-config.js.***

Este archivo es muy importante porque acá es donde configuramos nuevos [plugins ](https://www.gatsbyjs.org/plugins) los cuales nos ayudan a mejorar nuestro proyecto, por ejemplo necesito un [plugin](https://www.gatsbyjs.org/packages/gatsby-source-drupal/) para conectarme con la **API** de un **CMS** bueno eso lo podemos hacer agregando la config a ese archivo.

> Los **plugins **hay que instalarlos como una dependencia más de nuestro proyecto y dependiendo de lo que necesites puede que ya exista, algunos son oficiales otros creados por la misma comunidad.

![gatsby-config.js](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-6_jhxun2.png)

### Deploy

Existen muchas herramientas que nos ayudan hacer deploy de un sitio web con **Gatsby**,AWS Amplify, GiHub Pages, [Vercel](https://vercel.com/), Surge.sh, etc. Yo en este caso voy a usar [**Netlify**](https://www.netlify.com/)si no tienes una cuenta puedes crear una y hacer el proceso que voy a enseñar a continuación.

En **Netlify** existen dos maneras de hacer **deploy**, la primera conectando nuestro repositorio desde cualquier proveedor ya se **GitHub**, GitLab o Bitbucket y cada vez que realicemos un* git push***Netlify** correra un deploy nuevo de nuestro sitio web.

La segunda es arrastras la carpeta de nuestro sitio web y soltarla en Netlify y automáticamente comenzara con el **deploy**, en este artículo vamos por la segunda.

Lo primero que tenemos que hacer es correr el siguiente comando para preparar los archivos finales de nuestro sitio web:

`gatsby build`

Al terminar el proceso debemos ver una carpeta llamada **public**, esa carpeta la arrastramos a Netlify y comenzara el proceso de **deployment **por defecto se le asignara un nombre random y terminamos con una URL para nuestro sitio web.

![Netlify Drag and Drop](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-7_le5kxh.png)

> En nuestra cuenta de **Netlify **debemos ver algo como esto ahí es donde debemos arrastrar la carpeta **public**.

![Deployment new site](https://res.cloudinary.com/john-serrano/image/upload/v1682886849/John%20Serrano/Blog%20Post/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion/image-8_atyht0.png)

Resultado final del **deployment**, ya con esto tenemos nuestro sitio web corriendo en internet, puede agregar su propio dominio en la parte de **domain settings**.

### Conclusiones

Como vimos **GatsbyJS **es una gran herramienta que nos facilita un poco la vida a la hora de comenzar o trabajar un proyecto o sitio web, sin duda existen otras alternativas como [**Next.js**](https://johnserrano.co/blog/introduccion-a-next-js-el-framework-de-react) o **create**-**react**-**app**, ya depende de cuál de estas herramientas se adapte mejor a nuestro proyecto.

Diferencias con otras herramientas o frameworks, **GatsbyJS** usa una arquitectura **JAMStack**, usa herramientas como Graphql para consumir la data, al final de hacer un **build** obtenemos un sitio estático pero con buenas practicas de desarrollo y totalmente listo para hacer deploy.

Buen SEO y velocidades increíbles, gracias a **GatsbyJS **obtenemos un sitio con todas las buenas practicas que un sitio debe tener para obtener un buen **SEO **fundamental si necesitamos estar bien posicionados en los buscadores. Si haces **deploy **de tu sitio y lo pasas por [google speed](https://developers.google.com/speed/pagespeed/insights/?hl=es) podrás notar que te va dar una puntuación casi de 100 en todo.

Puede encontrar el código en el siguiente repositorio [gatsby-website](https://github.com/blog-johnserrano/gatsby-website).

Para terminar sin duda alguna **GatsbyJS **está cambiando la forma de construir sitios web, espero que haya sido de su agrado este articulo y hasta la próxima.
