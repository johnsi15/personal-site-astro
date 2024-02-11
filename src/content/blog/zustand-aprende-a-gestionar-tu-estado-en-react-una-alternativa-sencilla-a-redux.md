---
title: "Zustand: Aprende a gestionar tu estado en React una alternativa sencilla a Redux"
publishedDate: "2023-10-17T16:29:10.000Z"
updatedDate: "2023-10-17T17:09:31.000Z"
pubDate: "2023-10-17T16:29:10.000Z"
description: "Descubre qué es Zustand, sus ventajas y cómo puedes gestionar el estado de tu aplicación en pocas líneas de código. También compatible con TypeScript."
tags: ["JavaScript", "Programación", "development", "webdeveloment", "desarrollo-web", "TypeScript", "frontend", "front-end", "Redux", "Zustand", "software", "web", "johnserrano.co", "johnserrano", "React", "estado"]
primaryTag: { name: 'Zustand', slug: 'zustand' }
excerpt: "Descubre qué es Zustand, sus ventajas y cómo puedes gestionar el estado de tu aplicación en pocas líneas de código. También compatible con TypeScript."
canonicalURL: "https://johnserrano.co/blog/zustand-aprende-a-gestionar-tu-estado-en-react-una-alternativa-sencilla-a-redux"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1697643034/John%20Serrano/Blog%20Post/codigo-limpio-en-javascript-deuda-tecnica-refactorizacion/k69ul2yssn9t83xwirqm.webp"
---

## ¿Qué es Zustand?

Zustand es una biblioteca de gestión de estado para **React** que ofrece una forma sencilla y eficiente de administrar el **estado** en las aplicaciones de React. Se pueden gestionar estados pequeños de una forma rápida y escalable.

Zustand es una **alternativa ligera y flexible** a bibliotecas más complejas como **Redux**, ofreciendo una sintaxis más concisa y una **curva de aprendizaje** más suave para aquellos que no están familiarizados con los **patrones de gestión de estado** tradicionales.

## Porque usar zustand ventajas

Zustand ofrece varias ventajas que lo hacen atractivo para la gestión del estado en aplicaciones React:

* Muy fácil de usar utiliza los hooks de React.
* Api simple y concisa lo que facilita la definición y actualización del estado de la aplicación.
* Diseñado para ser eficiente y optimizado para el rendimiento.
* Estado global accesible desde cualquier componente de la aplicación
* No envuelves la aplicación con un `provider` como se hace con Redux.
* Hace los mínimos renderizados que se necesitan solo cuando hay cambios.
* Se escribe menos código en comparación con otros gestores de estado como Redux.

## Requisitos para continuar con el tutorial

Debes tener instalada algunas herramientas y contar con algunos conocimientos básicos:

1. Tener instalado [Node.js](https://nodejs.org/en/) y **npm** que siempre viene cuando se instalada Node.js, como mínimo la versión 18.4.x.
2. Contar con un editor de código como [VScode](https://code.visualstudio.com/) o el que más te guste 🙌.
3. Algunos conocimientos básicos en [JavaScript](https://johnserrano.co/blog/fundamentos-de-programacion-con-javascript-mi-primer-ebook), [ReactJS](https://johnserrano.co/tags/react), terminal o línea de comando y [TypeScript](https://johnserrano.co/blog/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos).

Una vez que tengas estos requisitos instalados y configurados en tu sistema, estarás listo para continuar con el tutorial.

## Iniciando y creando el proyecto 🚀

Vamos a crear un estado para gestionar un carrito de compras, lo primero es iniciar el proyecto y darle un nombre lo vamos hacer con vite el nombre es de su preferencia. 

`npm create vite@latest`

Nos va hacer varias preguntas como darle un nombre a nuestro proyecto el framework que vamos a utilizar y la variente en este caso vamos a usar **TypeScript** con **SWC** que es una alternativa a babel.

```shell
✔ Project name: … shopping-cart
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

Ahora lo que vamos hacer es entrar a nuestro proyecto y hacer una instalación de todos los paquetes que vienen por defecto.

```shell
cd shopping-cart
npm install
```

## Instalación de Zustand y creando una store

Lo primero es instalar Zustand:

`npm install zustand -E`

Con -E para que instale la versión exacta.


