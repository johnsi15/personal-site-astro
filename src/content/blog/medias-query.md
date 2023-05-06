---
title: Medias Query
publishedDate: 2016-08-15T20:42:24.000Z
updatedDate: 2017-02-05T19:22:20.000Z
pubDate: 2016-08-15T20:42:24.000Z
tags: 
- responsive
- css
- Html5
- media
- design
- query
excerpt: El día de hoy voy a explicar cómo funcionan los media query lo veremos con ejemplo muy simple, primero que todo que es un media query...
description: El día de hoy voy a explicar cómo funcionan los media query lo veremos con ejemplo muy simple, primero que todo que es un media query...
primaryTag: { name: 'responsive', slug: 'responsive' }
canonicalURL: "https://johnserrano.co/blog/medias-query"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683383976/John%20Serrano/Blog%20Post/medias-query/responsive_dh1yzn.jpg"
---

Hola amigos el día de hoy voy a explicar cómo funcionan los media query lo veremos con un ejemplo muy simple, primero que todo que es un media query.

Una media query consiste en un tipo de medio y al menos una consulta que limita las hojas de estilo utilizando características del medio como ancho, alto y color. Se entiende como un módulo CSS3 que permite adaptar la representación del contenido a características del dispositivo. Añadido en CSS3, las media query dejan que la presentación del contenido se adapte a un rango específico de dispositivos de salida sin tener que cambiar el contenido en sí.

Sabiendo ya un poco que es un media query lo que pasa cuando declaramos un media query es devolver un falso o verdadero si la pantalla del dispositivo en el cual estamos cumple con esa condición de media query.

Así se ve una declaración de media query.

```css
@media screen and (max-width: 600px) {
    .facet_sidebar {
        display: none;
    }
}
```
    

Como podemos ver con **@media** declaramos el media query seguido le indicamos en que va ser usado el media query osea en este caso **screen pantalla** seguido de un and con la medida que necesitemos para nuestro media query, vamos a ver un ejemplo muy básico como se pueden usar los media query con diferente tipos de medidas, para eso tenemos una estructura html y un archivo css.

Tenemos el siguiente archivo html con una estructura básica.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>	</title>
<link rel="stylesheet" href="estilos.css">
</head>
<body>
<header class="encabezado"></header>
<section class="contenido">
    <article class="post"></article>
    <article class="post"></article>
</section>
<aside class="contenido-lateral"></aside>
<footer class="pie-pagina"></footer>
</body>
</html>
```
    

Como podemos apreciar solo tenemos un header una section con dos contenidos un aside y un footer, ahora vamos a ver el css.

```css
body{
    margin: 0;
}

.encabezado, .contenido, .contenido-lateral, .pie-pagina{
    padding: 1em 2em;
}

.contenido, .contenido-lateral, .pie-pagina{
    float: left;
    box-sizing: border-box;
}

.encabezado{
    background-color: rgb(247, 220, 22);
    height: 100px;
}

.contenido{
    width: 60%; 
}

.contenido-lateral{
    width: 40%;
    background-color: rgb(163, 163, 113);
    height: 500px;
}

.post{
    background-color: rgba(117, 255, 26, 0.46);
    height: 100px;
    margin-bottom: 1em;
}

.pie-pagina{
    width: 100%;
    background-color: #000;
    height: 50px;
    margin-top: 100px;
    padding: 50px 0;
}
```
    

Tenemos un css normal como cualquier otro con unos colores de fondos para ver la diferencia cuando comencemos a reajustar la pantalla, ahora vamos a declarar nuestro primer media query, pueden ir probando para que vean los cambios.

   ```css
@media screen and(max-width: 1024px){
    .encabezado{
        background-color: rgb(246, 246, 243);
    }
    .contenido, .contenido-lateral{
        width: 50%;
    }
}
```
    

Tenemos un media query de 1024px donde cambiamos el color de fondo del encabezado y cambiamos el ancho del contenido.

**Nota: cabe resaltar que los media query la forma correcta de declararlos es al final del css normal para que el navegador los pueda tomar sin ningún problema.**

```css
@media screen and (max-width: 768px){
    .encabezado{
        background-color: peru;
    }
    .contenido, .contenido-lateral{
        width: 100%;
    }
}
```
    

Tenemos otro **media query** con max-width de 678px ya es una medida de Tablet donde cambiamos el fondo de color y el ancho de los contenidos.

```css
@media screen and (max-width: 480px) {
    .encabezado{
        height: 80px;
    }
    .contenido{
        background-color: rgb(250, 250, 168);
    }
    .contenido, .contenido-lateral{
        width: 100%;
    }
}
```
    

Por ultimo ya tenemos un media query para móviles donde cambie el alto del encabezado el color del contenido para ver los cambios y el ancho de los contenidos.

Bueno amigos eso ha sido todos fue un poco corto y muy básico pero espero que sea de su ayuda hasta la próxima.
