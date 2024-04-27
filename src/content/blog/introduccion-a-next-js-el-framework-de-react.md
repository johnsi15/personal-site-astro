---
title: Introducción a Next.js - El framework de React
publishedDate: "2020-02-18T14:48:32.000Z"
updatedDate: "2020-06-21T23:26:53.000Z"
pubDate: "2020-02-18T14:48:32.000Z"
tags: 
- Next.js
- react
- JavaScript
excerpt: Cuando Trabajamos con React por lo general tenemos que configurar y usar herramientas como webpack, Babel, un linter, servir nuestra aplicación desde el serve.
description: Cuando Trabajamos con React por lo general tenemos que configurar y usar herramientas como webpack, Babel, un linter, servir nuestra aplicación desde el serve.
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/introduccion-a-next-js-el-framework-de-react"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682887560/John%20Serrano/Blog%20Post/introduccion-a-next-js-el-framework-de-react/nextjs_yibklg.jpg"
---

Cuando Trabajamos con **React **por lo general tenemos que configurar y usar herramientas como **webpack**, **Babel**, un **[linter](https://johnserrano.co/blog/configurar-eslint-con-vscode-para-javascript)**, servir nuestra aplicación desde el server etc, llega un momento en que sufres de la fatiga de JavaScript.

**[Next.js](https://nextjs.org/)** es un pequeño **framework **construido sobre React que nos ayuda a construir aplicaciones de una forma más rápida y fácil dejando de un lado la parte de la configuración inicial ya que toda esa configuración viene por defecto y como si fuera poco hace más fácil hacer **deploy **de nuestra aplicación.

### Beneficios de usar Next.js

Como ya lo mencioné anteriormente cero configuraciones, Server Rendering, exportar los archivos estáticos de una forma muy fácil, un sistema de CSS en JS llamado styled-jsx (creado especialmente para Next.js), Completamente extensible teniendo control completo sobre Babel y Webpack, optimizado para un tamaño de compilación más pequeño, una compilación de desarrollo más rápida y docenas de otras mejoras.

### Deploy sencillo

Para llevar nuestra aplicación a producción lo único que tenemos que hacer es correr el comando `next build` que nos da el framework, esto crea una carpeta llamada `.next` con todo el código listo para producción. Solo queda subir esa carpeta a cualquier servidor y correr el comando `next start` y listo.

Con zeit/now es aún más fácil solo tenemos que agregar el comando `build` y `start` al `package.json` y luego corremos `now` desde la terminal, esperamos algunos minutos y vamos a tener nuestra aplicación en producción, con HTTP/2 y auto escalable.

### Requisitos

Tener instalado **[node.js](https://nodejs.org/en/)**, **npm **o **[yarn](https://yarnpkg.com/)** manejo básico de la terminal, un editor de código como **[VScode](https://code.visualstudio.com/)**, tener conocimiento básico de **[React ](https://johnserrano.co/blog/primeros-pasos-con-react)**y Node.js.

### Iniciar una aplicación

Ya que vimos como **Next.js** nos ayuda a crear aplicaciones de una manera más fácil, veamos cómo podemos usarlo. Lo primero es crear una carpeta para nuestro proyecto, yo cree una llamada `hello-next` dentro de esa carpeta iniciar un proyecto con `yarn init -y` en este proyecto voy a usar `yarn` pueden usar `npm init –y`, enseguida instalaremos Next.js.

`yarn add next react react-dom`

> Next.js nos pide que instalemos react y **react-dom** por nuestra cuenta para que podamos cambiarlos de versión sin depender de que Next.js se actualice.

Después que tengamos instalado **Next.js** abrimos el `package.json` de nuestro proyecto y agregamos lo siguientes scripts.

    "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
    }

Ahora vamos a crear el archivo `index.js` dentro de la carpeta `pages` que es necesaria para que next funcione y tener en cuenta que cada archivo que se cree dentro de `pages` va ser una ruta de nuestra aplicación ya veremos un ejemplo.

Agregamos el siguiente código dentro de `index.js`.

    import Link from 'next/link';
     
    function Home() {
      return (
        <section id='Home'>
          <h1>Página principal</h1>
          <Link href='/about'>
            <a>About Page</a>
          </Link>
          <p>Hello Next.js</p>
          <style jsx>{`
            h1 {
              color: blue;
              text-transform: uppercase;
            }  
          `}</style>
        </section>
      )
    }
     
    export default Home
    

Ya teniendo nuestro home corremos el comando `yarn dev`. Esto inicia nuestro servidor http sirviendo una url en [**http://localhost:3000**](http://localhost:3000), entramos y vamos a ver un texto en mayúsculas *PAGINA PRINCIPAL* con color azul y un enlace about page, hacemos click nos va a mostrar una página de error 404.

> Next.js implementa su propia página de error por defecto, pero creando un archivo _error.js dentro de pages podemos personalizarla sin problemas.

Ahora vamos a crear el archivo `about` dentro de `pages` y agregamos el siguiente código.

    import React, { Component } from'react';
    import Link from'next/link';
     
    function About({ page, name }) {
      return (
        <section id="About">
          <h1>About {page}</h1>
          <p>My name is {name}</p>
          <Link href="/">
            <a>Ir a Home</a>
          </Link>
          <style jsx>{`
            h1 {
              color: #27ae60;
            }
            a {
              text-decoration: none;
              color: #2c3e50;
            }
          `}</style>
        </section>
      )
    }
    
    export async function getStaticProps(ctx) {
      return {
        props: {
          page: 'page',
          name: 'John Serrano'
        }
      }
    }
    
    export default About
    

Si vamos a home y volvemos a dar click en about esta vez sí podemos ver nuestra página de about con un título de color verde (gracias a los estilos por componentes) si vemos dice About page, estamos usando la función **getStaticProps **para iniciar nuestros props.

Este método es ejecutado y renderizará previamente esta página en el momento de la compilación, si necesitamos definir una lista de rutas que deben representarse en HTML en el momento de la compilación podemos usar el método **getStaticPaths**.

Estos datos se pueden obtener desde una** API** externa lo cual nos permite tener separado el servidor de render y nuestra API permitiendo que podamos escalar por separado.

Vamos ahora a crear una carpeta en la raíz de nuestro proyecto llamada **components** y dentro de esta carpeta creamos un archivo llamado `Header.js` y agregamos el siguiente código.

    import Link from 'next/link'
     
    const linkStyle = {
      marginRight: 15,
      color: '#2c3e50',
      textDecoration: 'none'
    }
     
    function Header() {
      return (
        <header id="Header">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
        </header>
      )
    }
     
    export default Header
    

Si recargamos nuestro sitio vamos a ver que no pasa nada, lo que tenemos que hacer es ir al home y llamar al componente `Header` modificamos el archivo `index` con el siguiente código.

    import Header from '../components/Header'
     
    function Home() {
      return (
        <section id="Home">
          <h1>Página principal</h1>      
          <Header />
          <p>Hello Next.js</p>
          <style jsx>{`
            h1 {
              color: #2980b9;
              text-transform: uppercase;
            }
          `}</style>
        </section>
      )
    }
     
    export default Home
    

Ahora podemos ver dos enlaces uno a home y otro about todo debe seguir funcionando normalmente, como podemos ver podemos importar y usar componentes en nuestras `/pages`.

### Deploy con zeit/now

Ya para terminar vamos hacer un **deploy **a **now **lo primero es tener instalado [now ](https://zeit.co/download)en nuestro equipo ejecutamos el siguiente comando `npm i –g now` una vez instalado hacemos un `now login` deben abrir una cuenta en [zeit](https://zeit.co/), durante el despliegue vamos a obtener una **URL**, al acceder podemos ver nuestra página inicial.

> Mas comandos de [now](https://zeit.co/docs/now-cli#introduction/now-cli-reference)

Como vemos hacer una aplicación con **Next.js** y **React **es muy fácil, podemos olvidarnos de la configuración y concentrarnos en el código para poder desarrollar y lanzar a producción más rápido, espero que te sea de ayuda artículo y puedas crear aplicaciones con **Next.js** no siendo más nos vemos, hasta la próxima.

Todo el código lo pueden encontrar [aquí](https://github.com/blog-johnserrano/hello-next).
