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

Astro es un framework todo en uno. Incluye todo lo que necesitas para crear un sitio web, incorporado. También cuenta con cientos de integraciones y hooks de API disponibles para personalizar un proyecto según tus necesidades y casos de uso.

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
2. Tener instalado **Node.js** (recomiendo la versión igual o superior a la **v18**)
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

