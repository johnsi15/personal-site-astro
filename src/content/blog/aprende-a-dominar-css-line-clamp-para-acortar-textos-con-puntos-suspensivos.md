---
title: "Aprende a Dominar CSS Line-Clamp para Acortar Textos con Puntos Suspensivos"
publishedDate: "2023-11-19T16:29:10.000Z"
updatedDate: "2023-11-19T17:09:31.000Z"
pubDate: "2023-11-19T16:29:10.000Z"
description: "Descubre cómo agregar puntos suspensivos al final de tus textos con la propiedad CSS Line-Clamp. Este tutorial te guiará paso a paso, enseñándote a acortar tus contenidos, mejorando así la experiencia del usuario y la estética de tu diseño web."
tags: ["Css", "Programación", "development", "webdeveloment", "desarrollo-web", "line-clamp", "line", "clamp", "clases", "class", "frontend", "front-end", "css"]
primaryTag: { name: 'Css', slug: 'css' }
excerpt: "Descubre cómo agregar puntos suspensivos al final de tus textos con la propiedad CSS Line-Clamp. Este tutorial te guiará paso a paso, enseñándote a acortar tus contenidos, mejorando así la experiencia del usuario y la estética de tu diseño web."
canonicalURL: "https://johnserrano.co/blog/aprende-a-dominar-css-line-clamp-para-acortar-textos-con-puntos-suspensivos"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1700429793/John%20Serrano/Blog%20Post/aprende-a-dominar-css-line-clamp-para-acortar-textos-con-puntos-suspensivos/line-clamp-css_ujrjyv.jpg"
---

La propiedad **line-clamp** proporciona una solución elegante para **acortar o recortar el texto con puntos suspensivos** al final de cada línea. Al pasarle la cantidad de líneas deseadas, brinda flexibilidad en la presentación del contenido. Este enfoque permite controlar de manera precisa el **número de líneas antes de aplicar el recorte**, lo que contribuye a mejorar la legibilidad y la estética de tus textos.

Es esencial destacar que la propiedad line-clamp **acepta dos valores** principales: `"none"`, que desactiva el recorte y muestra el texto completo, y un **entero** que determina el **número máximo de líneas** antes de aplicar el recorte con puntos suspensivos.

Además, existe **otra técnica** que podemos utilizar para acortar y agregar puntos suspensivos en **una sola línea**. Ambas opciones proporcionan herramientas versátiles para mejorar la presentación y legibilidad de tus textos.

## Utilizando la propiedad text-overflow

Comencemos explorando la otra técnica que nos permite acortar el texto en una sola línea, agregando puntos suspensivos al final con la propiedad `text-overflow: ellipsis;`, veamos un ejemplo.

```html
<p class="text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quaerat cupiditate nesciunt explicabo repellat, sequi odit provident qui obcaecati fuga? Beatae atque temporibus quas. Accusamus consectetur, consequatur ratione aut perspiciatis.
</p>
```

Tenemos un elemento de texto `(<p>)` con la **clase 'text'** a está clase le vamos aplicar las propiedades necesarias para acortar el texto.

```css
.text {
  background-color: #fff;
  box-shadow: 0px 0px 10px #E5E5E5;
  padding: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
}
```
Las propiedades que me permiten obtener el acorte del texto son: **`overflow: hidden;`, `text-overflow: ellipsis;`, `white-space: nowrap;`, `width: 300px;`**, para ocultar cualquier contenido que exceda sus límites establecidos `(overflow: hidden)`. Además, se utiliza `text-overflow: ellipsis` para agregar puntos suspensivos al final del texto cortado, proporcionando una indicación visual de que hay más contenido oculto. 

La propiedad `white-space: nowrap` asegura que el texto no se divida en varias líneas, y se define un ancho fijo de 300 píxeles `(width: 300px)` para limitar la extensión horizontal del área del texto.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="BaMYmvw" data-user="Jandrey15" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Jandrey15/pen/BaMYmvw">
  text-overflow: ellipsis</a> by John Serrano (<a href="https://codepen.io/Jandrey15">@Jandrey15</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Utilizando la propiedad Line-Clamp

Ahora, para gestionar la presentación de un texto en varias líneas con la **propiedad line-clamp**, empleamos un contenedor de tipo `-webkit-box` usando la propiedad `display`. También le indicamos la **orientación** con la propiedad ` -webkit-box-orient: vertical;` y finalmente aplicamos la propiedad `-webkit-line-clamp` para definir el **número de líneas** deseadas, veamos un ejemplo:

```html
<p class="line-clamp">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quidem iusto suscipit, earum natus ab cumque laudantium, reiciendis similique expedita at repellat odit rerum odio placeat nemo esse? Obcaecati, dolor?
</p>
```

Perfecto ya tenemos el **html** y ya entendemos cómo aplicar la propiedad **line-clamp en CSS** para controlar la visualización de texto en múltiples líneas. Utilizamos una clase llamada **`.line-clamp`** que configura el contenedor de texto de la siguiente manera:

```css
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

```

Mediante el uso de `-webkit-box`, `-webkit-line-clamp`, `-webkit-box-orient` y `overflow: hidden`, logramos que el texto se muestre en **tres líneas y se recorte con puntos suspensivos** si excede este límite. Esto proporciona un control preciso sobre la presentación del contenido, **mejorando la estética** y la **legibilidad** en situaciones donde el espacio es **limitado**.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="KKJQyOG" data-user="Jandrey15" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Jandrey15/pen/KKJQyOG">
  line-clamp</a> by John Serrano (<a href="https://codepen.io/Jandrey15">@Jandrey15</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

La propiedad **line-clamp** es ampliamente compatible con la mayoría de los navegadores, con un **soporte** que abarca aproximadamente el **99.5%**. Sin embargo, es importante destacar que, para garantizar su **correcto funcionamiento** en la mayoría de los casos, se debe utilizar el prefijo `-webkit-`.

El uso de `-webkit-` es una práctica común para asegurar la consistencia en la presentación del texto con **line-clamp**. Aunque la propiedad en sí misma tiene un alto nivel de **adopción**, la inclusión del prefijo **webkit** garantiza una experiencia uniforme en una gama más amplia de **navegadores**.

| Navegador       | Soporte | Prefijo WebKit |
| --------------- | ------- | -------------- |
| Google Chrome   | 86+     | Sí             |
| Mozilla Firefox | 68+     | Sí             |
| Safari          | 6.1+    | Sí             |
| Microsoft Edge  | 79+     | Sí             |
| Opera           | 73+     | Sí             |

*Nota: El soporte puede variar según las versiones específicas del navegador.*

## Conclusiones

En conclusión, la **propiedad line-clamp** es una herramienta valiosa para gestionar la presentación del texto en el desarrollo web. Permite acortar o recortar y agregar **puntos suspensivos a bloques de texto multilínea o de una sola línea**, proporcionando un control preciso sobre la longitud visual del contenido.
