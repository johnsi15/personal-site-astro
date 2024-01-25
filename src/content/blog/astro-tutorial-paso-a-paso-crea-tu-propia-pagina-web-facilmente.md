---
title: "ASTRO: Tutorial paso a paso crea tu propia página web fácilmente"
publishedDate: "2024-01-24T16:29:10.000Z"
updatedDate: "2024-01-24T17:09:31.000Z"
pubDate: "2024-01-24T16:29:10.000Z"
description: "Descubre lo rápido y sencillo que es construir tu propia página web con ASTRO. Aprende cómo hacerlo con este tutorial detallado y sin complicaciones."
tags: ["astro", "development", "webdeveloment", "desarrollo-web", "pagina-web", "sitio-web", "tutorial", "sencillo", "astro", "frontend", "front-end"]
primaryTag: { name: 'Astro', slug: 'astro' }
excerpt: "Descubre lo rápido y sencillo que es construir tu propia página web con ASTRO. Aprende cómo hacerlo con este tutorial detallado y sin complicaciones."
canonicalURL: "https://johnserrano.co/blog/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1704820530/John%20Serrano/Blog%20Post/desarrollo-web-simplificado-descubre-5-herramientas-para-desarrollar-una-pagina-web/herramientas_zhju9h.jpg"
---

## ¿Qué es Astro?

Astro es el framework web para construir **sitios web orientados al contenido**, como blogs, marketing y comercio electrónico. Astro es conocido por ser pionero en una nueva arquitectura frontend para reducir la sobrecarga y complejidad de JavaScript en comparación con otros frameworks. Si necesitas un sitio web que cargue rápidamente y tenga un excelente SEO, entonces Astro es para ti. [Fuente](https://docs.astro.build/es/concepts/why-astro)

Astro también es bastante personalizable al ofrecerte **plugins** o **integraciones** que sirven para poder añadir rápidamente **módulos** o **frameworks**. Por ejemplo, puedes añadir **React.js, tailwindcss, Vue**, etc.

## Características

Astro es un **framework** todo en uno. Incluye todo lo que necesitas para **crear un sitio web**, incorporado. También cuenta con cientos de **integraciones** y hooks de API disponibles para personalizar un proyecto según tus necesidades y casos de uso.

Algunos aspectos destacados incluyen:

* **Islas:** Una arquitectura web basada en componentes optimizada para sitios web orientados al contenido.
* **Agnostico a la UI:** Compatible con React, Preact, Svelte, Vue, Solid, Lit, HTMX, web components y más.
* **Servidor primero:** Mueve la renderización costosa fuera de los dispositivos de tus visitantes.
* **Cero JS por defecto:** Menos JavaScript del lado del cliente para no ralentizar tu sitio.
* **Colecciones de contenido:** Organiza, valida y proporciona seguridad de tipos de TypeScript para tu contenido en Markdown.
* **Personalizable:** Tailwind, MDX y cientos de integraciones entre las que elegir.

[Fuente](https://docs.astro.build/es/concepts/why-astro/#caracter%C3%ADsticas)

## Requisitos para seguir el tutorial
1. Conocimientos básicos de **HTML, CSS y JavaScript**
2. Tener instalado **Node.js** (recomiendo la versión igual o superior a la **v18.14.1**)
3. Un editor de texto como **VScode** y la [extensión](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) Oficial de Astro.
4. Terminal o línea de comando para ejecutar todos los comandos.
5. Muchas ganas de aprender

## Instalación de ASTRO

Para iniciar un nuevo proyecto con **ASTRO**, utiliza el siguiente comando en tu terminal: `npm create astro@latest` este comando iniciará el proceso de creación del proyecto y te guiará a través de varias configuraciones iniciales. Al ejecutarlo, se te presentarán algunas preguntas importantes, tales como:

* **Ubicación del Proyecto:** Selecciona la ubicación en la que deseas crear tu proyecto ASTRO. Por default es `./` donde estes ubicado en la terminal, en mi caso coloque `./astro-website`.
* **¿Cómo te gustaría comenzar tu nuevo proyecto?**: Puedes elegir entre varias opciones para iniciar el proyecto, incluso comenzarlo totalmente vacío. En mi caso, seleccioné que incluyera los archivos de muestra.
* **Tipo de Proyecto (TypeScript, JavaScript, etc.):** Decide si deseas utilizar TypeScript u otro tipo de configuración para tu proyecto. Puedes escoger **TypeScript** para seguir el tutorial.
* **Inicialización con Git:** Opta por inicializar tu proyecto con Git si planeas gestionar el control de versiones. Yo lo inicialice le di yes.

Ejemplo:
![Ejemplo de instalación](https://res.cloudinary.com/john-serrano/image/upload/v1706134076/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-24_170655_hogxkh.jpg)

Una vez completada la instalación, accedemos a nuestro proyecto y ejecutamos `npm run dev` para iniciar el modo de desarrollo. Esto nos proporcionará una URL para acceder al sitio web, que será `http://localhost:4321/`.

**Resultado:**
![WebSite](https://res.cloudinary.com/john-serrano/image/upload/v1706134566/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-24_171549_jopsxh.jpg)

## Estructura básica de una página

Antes de explorar la estructura básica de una página en ASTRO, es importante mencionar algunos archivos y carpetas clave. Una vez que tengamos abierto el proyecto en nuestro editor de código, encontraremos los siguientes archivos y carpetas:

* **astro.config.mjs:** Este archivo contiene toda la configuración necesaria para ASTRO, incluyendo la adición de nuevas dependencias, herramientas, y más.
* **tsconfig.json:** Aquí se encuentra toda la configuración relacionada con TypeScript.
* **Carpeta src/:** En esta carpeta se encuentra todo nuestro código fuente, donde desarrollaremos la lógica y diseño de nuestra página.
* **Carpeta public/:** Esta carpeta contiene archivos públicos como logos, iconos, y otros recursos accesibles para nuestra página web.

Estos archivos y carpetas proporcionan la base sobre la cual construiremos **nuestro proyecto en ASTRO**, permitiéndonos personalizar y estructurar nuestro sitio web de manera efectiva.

Dentro de la carpeta `src/`, encontramos tres carpetas, pero la más importante es la de `pages/`. Cada archivo dentro de esta carpeta hace referencia a una ruta de nuestro sitio web. Por defecto, dentro de `pages/` está `index.astro`, que representa la página principal.

Para crear una **ruta** como, por ejemplo, `about/`, podemos seguir dos enfoques:

Crear un archivo about.astro directamente en la carpeta `pages/`.
Crear una carpeta `about/` dentro de `pages/` y dentro de esta carpeta, colocar un archivo `index.astro`.

Ambos métodos producirán la misma ruta `about/` en nuestro sitio web. Este enfoque de estructura de carpetas nos permite organizar nuestras páginas de manera clara y lógica dentro del proyecto ASTRO.

![Estructura de carpetas](https://res.cloudinary.com/john-serrano/image/upload/v1706190554/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-25_084854_ajgemf.jpg)

En la imagen anterior, podemos observar la estructura completa de nuestro proyecto. Vamos a detallar cada parte:

* **Archivo index.astro:** Este archivo es la página principal de nuestro sitio web. Aquí, tenemos una importación de un Layout que define la estructura general de la página.
* **Carpeta components/:** Esta carpeta contiene componentes reutilizables que se utilizan en varias partes del proyecto.
* **Carpeta pages/:** Aquí es donde se encuentran todos los archivos que representan páginas individuales de nuestro sitio web. Cada archivo dentro de esta carpeta define una ruta específica en nuestro sitio.
* **Archivo Layout.astro:** Este archivo define el diseño y la estructura común que se aplicará a todas las páginas de nuestro sitio web. Es importado y utilizado en `index.astro`.
* **Carpeta public/:** Esta carpeta contiene archivos estáticos como imágenes, íconos y otros recursos que serán accesibles públicamente desde nuestro sitio web.

Esta estructura proporciona una organización clara y modular para nuestro **proyecto ASTRO**, lo que facilita el desarrollo y la gestión de nuestro sitio web. Revisemos el archivo `index.astro`.

```js
---
import Layout from '../layouts/Layout.astro'
---
```

con los --- podemos ejecutar JS hacer importaciones de archivos, librerias, props de Astro. En nuestro caso estamos importando el Layout que representa una parte común de nuestro sitio web que se replicara en cada página que lo importemos y usemos.

