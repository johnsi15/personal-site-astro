---
title: "HTML: ¿Para qué sirve y qué son sus etiquetas?"
publishedDate: "2025-02-23T09:29:10.000Z"
updatedDate: "2025-02-23T09:29:10.000Z"
pubDate: "2025-02-23T09:29:10.000Z"
description: "Aprende HTML: Descubre cómo funciona y las etiquetas clave para estructurar sitios web. Conocer HTML es fundamental para el desarrollo web moderno, ya que permite crear páginas atractivas y bien organizadas."
tags: ["HTML", "programación", "development", "webdeveloment", "desarrollo-web", "TypeScript", "frontend", "front-end", "SEO", "software", "web", "johnserrano.co", "johnserrano", "etiqueta", "estructura"]
primaryTag: { name: 'HTML', slug: 'html' }
excerpt: "Aprende HTML: Descubre cómo funciona y las etiquetas clave para estructurar sitios web. Conocer HTML es fundamental para el desarrollo web moderno, ya que permite crear páginas atractivas y bien organizadas."
canonicalURL: "https://johnserrano.co/blog/html-para-que-sirve-y-que-son-sus-etiquetas"
draft: false
featureImage: "https://download.johnserrano.co/html-5-etiquetas.webp"
---

En este artículo, exploraremos las funciones principales de HTML y cómo sus etiquetas te ayudan a diseñar contenido eficazmente.

## ¿Qué es HTML?

HTML, siglas de **HyperText Markup Language (Lenguaje de Marcado de Hipertexto)**, es el lenguaje utilizado para estructurar y organizar el contenido de las páginas web. A través de una serie de elementos y etiquetas, **HTML define la estructura básica de una página**, permitiendo la inclusión de textos, imágenes, enlaces, videos y otros elementos multimedia.

Aunque no es un lenguaje de programación propiamente dicho, HTML es **fundamental para el desarrollo web**, ya que establece la base sobre la cual se aplican estilos con CSS y se agrega interactividad con JavaScript.

## ¿Para qué sirve HTML?

La principal función de HTML es proporcionar la estructura de una página web. Gracias a HTML, los desarrolladores pueden:

- **Definir encabezados y párrafos**: Organizar el texto en secciones.

- **Incorporar imágenes y videos**: Enriquecer el contenido con elementos multimedia.

- **Crear enlaces**: Conectar diferentes páginas o recursos.

- **Construir listas y tablas**: Presentar información de manera ordenada.

- **Formularios y botones**: Permitir la interacción con los usuarios.

Además, HTML se integra con CSS para mejorar el diseño y con JavaScript para agregar funcionalidades dinámicas.

## ¿Qué es una etiqueta HTML?

Las etiquetas HTML son fragmentos de código que se utilizan para estructurar y definir el contenido en un documento web. Estas etiquetas, también conocidas como **"tags"**, proporcionan instrucciones al navegador sobre cómo mostrar el texto y otros elementos en una página web, permitiendo dar formato, funcionalidad y estructura al contenido visual

## Anatomía de un elemento HTML

Un elemento HTML se compone de varias partes importantes:

**Etiqueta de apertura**: Es el nombre del elemento, encerrado entre corchetes angulares `< >` (por ejemplo, `<p>` para un párrafo).

**Contenido**: El texto o los datos que aparecerán en la página.

**Etiqueta de cierre**: Indica el final del elemento y se parece a la etiqueta de apertura, pero con una barra `/` (por ejemplo, `</p>`).

**Atributos (opcional)**: Proporcionan información adicional sobre el elemento y se colocan dentro de la etiqueta de apertura, como **class** o **id**.

Ejemplo con un atributo:

```html
<p class="important">Este es un párrafo importante.</p>
```

En este caso, `class="important"` es un atributo que puede utilizarse para aplicar estilos específicos a este párrafo.

## Etiquetas principales de HTML

`<!DOCTYPE html>`: Declara el tipo de documento y es indispensable en HTML5, garantizando que el navegador interprete correctamente el código.

`<html>`: Elemento raíz que contiene todo el contenido de la página web.

`<head>`: Sección que incluye metadatos, como el conjunto de caracteres y el título de la página.

`<meta charset="UTF-8">`: Establece la codificación de caracteres utilizada en el documento, siendo `UTF-8` la opción más común para soportar una amplia gama de caracteres.

`<title>`: Define el título que aparecerá en la pestaña del navegador, proporcionando una referencia clara sobre el contenido de la página.

`<body>`: Contiene todos los elementos y contenido visible que se presentará al usuario en la página web.

## Estructura básica de un documento HTML

Un documento HTML sigue una estructura jerárquica que facilita su interpretación por parte de los navegadores web. A continuación, se presenta un ejemplo básico:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Mi Primera Página Web</title>
  </head>
  <body>
    <h1>¡Bienvenido a mi sitio web!</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>
```

## ¿Cuáles son las etiquetas y elementos de HTML más usados?

Existen diversas etiquetas en HTML, pero algunas de las más utilizadas incluyen:

`<h1>` a `<h6>`: Encabezados.

```html
  <h1>Título Principal</h1>
  <h2>Subtítulo</h2>
```

`<p>`: Párrafos.

```html
  <p>Este es un párrafo de ejemplo.</p>
```

`<a>`: Enlaces.

`<img>`: Imágenes, se insertan con la etiqueta `<img>`, utilizando el atributo `src` para especificar la ruta de la imagen y `alt` para proporcionar un texto alternativo.

```html
  <img src="ruta/imagen.jpg" alt="Descripción de la imagen">
```

`<ul>`, `<ol>`, `<li>`: Listas no ordenadas y ordenadas.

No ordenadas: Utilizan <`ul>` para la lista y `<li>` para cada elemento.
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

Ordenadas: Emplean `<ol>` para la lista y `<li>` para cada elemento.

```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
```

`<table>`, `<tr>`, `<td>`: Tablas.

`<div>` y `<span>`: Contenedores genéricos.

`<form>`, `<input>`, `<button>`: Formularios y entradas de datos.

```html
<form action="/procesar_formulario" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  <br>
  
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>
  <br>
  
  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
  <br>
  
  <input type="submit" value="Enviar">
</form>
```


Estas etiquetas son esenciales para construir la estructura y el contenido de una página web de manera efectiva.

## HTML Semántico

El HTML semántico mejora la accesibilidad y optimización para motores de búsqueda al utilizar etiquetas que describen su contenido, como:

`<header>`: Encabezado de la página o sección.

`<article>`: Contenido independiente y reutilizable.

`<section>`: Secciones temáticas.

`<main>`: Contenido principal de la página, único y relevante.

`<footer>`: Pie de página.

`<aside>`: Contenido relacionado o complementario.

## ¿Quieres ir un paso más allá?

Si estás interesado en potenciar tu carrera como **desarrollador frontend** o desarrollador Web, te recomiendo leer este artículo:

**[Cómo iniciar y crecer como desarrollador frontend en 2025](https://johnserrano.co/blog/como-iniciar-y-crecer-como-desarrollador-frontend-en-2025)**

### Etiquetas claves para un buen SEO y redes sociales

Las etiquetas HTML son **fundamentales para mejorar el SEO** de tu sitio web, ya que ayudan a los motores de búsqueda a entender mejor la estructura y contenido de tus páginas. 

Además, algunas **etiquetas también pueden influir** en cómo se presentan tus contenidos en las redes sociales. Aquí te presento las etiquetas clave que debes considerar:

## Etiquetas HTML para SEO:

**Etiqueta de título (`<title>`)**: Es crucial para indicar el tema principal de tu página. Debe ser conciso y contener palabras clave relevantes.

**Etiquetas de encabezado (`<h1>`, `<h2>`, `<h3>`, etc.)**: Ayudan a organizar el contenido jerárquicamente, mejorando la legibilidad y señalizando su estructura.

**Meta descripción (`<meta name="description">`)**: Aunque no afecta directamente las clasificaciones, una buena meta descripción puede aumentar las tasas de clics al ofrecer un resumen claro del contenido.

**Atributo alternativo (`alt`)**: Utilizado en imágenes, ayuda a los motores de búsqueda a comprender su contenido cuando no se pueden cargar visualmente.

**Etiqueta canónica (`rel="canonical"`)**: Resuelve problemas de contenido duplicado especificando la versión preferida de una página. `<link rel="canonical" href="/url-canonical/">`

## Etiquetas relevantes para redes sociales:

Cuando compartes contenidos en redes sociales como **Facebook** o X (Twitter), ciertas **etiquetas Open Graph** pueden influir en cómo se visualizan:

**Open Graph Tags**: Estas etiquetas permiten controlar cómo aparece tu contenido al compartirlo en redes sociales (por ejemplo, título personalizado con `og:title`, imagen destacada con `og:image`).

```html
<meta property="og:title" content="Título personalizado">
<meta property="og:description" content="Descripción breve del artículo">
<meta property="og:image" content="URL imagen destacada">
```

Estas etiquetas aseguran que tus publicaciones tengan un aspecto profesional y sean más visibles.

**Tener en cuenta**:

- Asegúrate siempre que tus títulos sean concisos y contengan palabras clave relevantes.

- Utiliza encabezados jerárquicos (H1-H6) para organizar bien el contenido.

- Las meta descripciones deben ser breves pero descriptivas.

- Optimiza todas las imágenes con atributos alternativos.

Ejemplo:

```html
<head>
  <!-- Título principal -->
  <title>Tu Sitio Web - Palabras Clave</title>

  <!-- Meta descripción -->
  <meta name="description" content="Breve resumen del sitio">

  <!-- Open Graph Tags (para redes sociales) -->
  <meta property='og:title' content='Título Personalizado'>
  <meta property='og:description' content='Descripción Breve'>
  <meta property='og:image' content='/path/to/image.jpg'>

  <!-- Imagen alternativa -->
  <img src="/path/to/image.jpg" alt="Imagen relevante">

  <!-- Enlace canónico -->
  <link rel="canonical" href="/url-canonical/">
</head>
<body>
  <!-- Estructura jerárquica -->
  <h1>Título Principal H1</h1>
  <h2>Título Secundario H2</h2>
  <h3>Título Terciario H3</h3>
</body>
```

## Favicons y comentarios en HTML

**Favicons**:

Un favicon es una **pequeña imagen que aparece en la pestaña del navegador** junto al título de tu sitio web. Aunque puede parecer un detalle insignificante, juega un papel importante tanto en el branding como en el SEO.

Para incluir un favicon en tu página web, debes colocar el siguiente código dentro de la etiqueta <head> del documento HTML:

```html
<head>
  <link rel="icon" type="image/png" href="images/myicon.png">
</head>
```

En este ejemplo:

`rel="icon"` indica que el archivo enlazado es el favicon del sitio.

`type="image/png"` especifica que el archivo es una imagen PNG. Puedes cambiar esto según el formato de tu favicon (por ejemplo, image/x-icon para archivos .ico).

`href="images/myicon.png"` especifica la ubicación del archivo favicon. Asegúrate de reemplazar `"images/myicon.png"` con la ruta correcta y nombre del archivo donde está guardado tu favicon.

**Tamaños Recomendados**
Los tamaños más comunes para favicons son **16x16 píxeles** y **32x32 píxeles**. Algunos navegadores también admiten tamaños mayores como 48x48 píxeles. 

**Comentarios en HTML**

Los comentarios son fragmentos de código que **no se ejecutan ni se muestran por los navegadores**. Sirven para explicar o documentar partes del código.

Ejemplo:

```html
<!-- Este es un comentario -->
```

Estos elementos pueden mejorar indirectamente tu posición SEO al mejorar la experiencia del usuario y mantener un código organizado.

## Errores comunes

Al escribir HTML, es importante evitar errores comunes como:

**Olvidar cerrar etiquetas**: Algunas etiquetas necesitan cierre obligatorio, como `<p>`, `<div>`, `<section>`.

**Anidar incorrectamente elementos**: Por ejemplo, colocar una etiqueta `<div>` dentro de un `<p>`.

**No utilizar HTML semántico**: Sufrir de divitis, usar demasiados `<div>` en lugar de etiquetas específicas.

**No incluir atributos esenciales**: Como `alt` en las imágenes para accesibilidad.

## Combinación de HTML con CSS

Para mejorar la presentación de una página web, HTML se combina con CSS. Mientras HTML estructura el contenido, CSS permite darle estilo. Ejemplo básico:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <p>Este es un párrafo estilizado con CSS.</p>
</body>
</html>
```

## Combinando HTML, CSS y JavaScript

A continuación, te muestro un **ejemplo de un documento HTML** que incluye un archivo CSS externo mediante la etiqueta `<link>` y que incorpora **JavaScript** en línea mediante la etiqueta `<script>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de integración de CSS y JavaScript</title>
  <!-- Vinculamos el archivo CSS externo -->
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Bienvenido a mi sitio web</h1>

  <p>
    Este es un ejemplo que demuestra cómo incluir CSS con el elemento
    <code>link</code> y JavaScript usando <code>script</code> 
    en el mismo documento HTML.
  </p>
  
  <button id="miBoton">Haz clic aquí</button>
  
  <!-- Script en línea para manejar el clic en el botón -->
  <script>
    // Seleccionamos el botón por su id y asignamos un evento de clic
    document.getElementById('miBoton').addEventListener('click', function() {
      alert('¡Has hecho clic en el botón!');
    });
  </script>
</body>
</html>
```

Cómo funciona la etiqueta `<link>` para nuestro ejemplo:

Dentro de la sección `<head>`, se utiliza `<link rel="stylesheet" href="estilos.css">` para vincular un archivo externo de estilos (en este caso, **"estilos.css"**). Esto permite separar la presentación **(CSS)** de la estructura **(HTML)**.

Y para el JavaScript usamos la etiqueta `<script>`:

Al final del documento, antes del cierre de la etiqueta `<body>`, se incluye un bloque `<script>` que contiene código **JavaScript**. En este ejemplo, se añade un manejador de eventos para el botón **con el id "miBoton"** que muestra un mensaje de **alerta** cuando se hace clic.

## Conclusiones

HTML es el pilar fundamental para la creación y estructuración de contenido en la web. Su simplicidad y accesibilidad lo convierten en una herramienta esencial tanto para principiantes como para desarrolladores experimentados. 

Aunque por sí solo genera **páginas estáticas**, su verdadero potencial se manifiesta al combinarse con **CSS** y **JavaScript**, permitiendo el desarrollo de sitios web **dinámicos e interactivos**.

Dominar HTML no solo es el primer paso en el camino del desarrollo web, sino que también sienta **las bases para comprender** y manejar tecnologías web más avanzadas.

Gracias por leer. ❤️

## 🎥 Aprende con ejemplos prácticos
Si quieres ver HTML en acción, te dejo este video donde explico paso a paso cómo usar sus etiquetas y aplicar buenas prácticas. ¡No te lo pierdas! 👇

<iframe width="560" height="315" src="https://www.youtube.com/embed/mI_RDbjMfVQ?si=AddTBJ1KMOhIZQ8M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen loading="lazy"></iframe>
