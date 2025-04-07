---
title: "Lazy Loading en HTML: cómo cargar imágenes de forma eficiente sin usar JavaScript"
publishedDate: "2025-04-07T10:29:10.000Z"
updatedDate: "2025-04-07T17:09:31.000Z"
pubDate: "2025-04-07T10:29:10.000Z"
description: "Descubre cómo implementar el lazy loading de imágenes utilizando solo HTML. Aprende a mejorar la velocidad de carga de tu sitio web y el SEO sin escribir una sola línea de JavaScript."
tags: ["Css", "Programación", "development", "webdeveloment", "desarrollo-web", "git", "loading", "front-end", "lazy", "johnserrano", "johnserranodev", "html", "programadores"]
primaryTag: { name: 'HTML', slug: 'html' }
excerpt: "Descubre cómo implementar el lazy loading de imágenes utilizando solo HTML. Aprende a mejorar la velocidad de carga de tu sitio web y el SEO sin escribir una sola línea de JavaScript."
canonicalURL: "https://johnserrano.co/blog/lazy-loading-en-html-como-cargar-imagenes-de-forma-eficiente-sin-usar-javascript"
draft: false
featureImage: "https://download.johnserrano.co/lazy-loading.webp"
---

## ¿Qué es el lazy loading y cómo funciona?

Cuando visitas un sitio web, el navegador descarga todos los recursos necesarios para mostrar la página correctamente: **imágenes**, scripts, hojas de estilo, **iframes**, etc. Por defecto, estos recursos se cargan incluso si están **fuera del área visible del usuario**, es decir, en la parte de la página que todavía no se ha desplazado **(lo que se conoce como below the fold)**.

Este comportamiento puede **ralentizar la carga inicial del sitio** y afectar negativamente la experiencia del usuario, especialmente en conexiones lentas o dispositivos móviles. Para solucionar este problema, los desarrolladores aplican una técnica llamada **lazy loading** o carga diferida.

El lazy loading **retrasa la carga de ciertos recursos** (como imágenes o iframes) hasta que están a punto de aparecer en la pantalla del usuario. Esto reduce el tiempo de carga inicial, **mejora el rendimiento** y optimiza el uso del ancho de banda.

## Lazy loading con JavaScript (enfoque tradicional)

Antes de que existiera soporte nativo en [HTML](https://johnserrano.co/blog/html-para-que-sirve-y-que-son-sus-etiquetas), se usaban bibliotecas como `LazyLoad` que requerían modificar el marcado HTML. En lugar de usar el atributo `src` en la etiqueta `<img>`, se utilizaba un atributo `data-src`. Luego, un script detectaba cuándo la imagen entraba en el viewport y reemplazaba dinámicamente `data-src` por src, haciendo que la imagen se cargara justo en ese momento.

```html
<!-- Ejemplo tradicional con JavaScript -->
<img data-src="imagen.jpg" class="lazyload" alt="Ejemplo de carga diferida">
```

Con esta técnica también era común añadir efectos visuales como desvanecimientos o transiciones suaves para mejorar la percepción visual de carga.


## Lazy loading nativo (Recomendado y mejor opción)

El **lazy loading** o carga diferida es una técnica que mejora significativamente el rendimiento de los sitios web al posponer la carga de imágenes y otros recursos no esenciales hasta que realmente se necesiten, es decir, cuando están a punto de entrar en el área visible del usuario.

Desde HTML5, esta funcionalidad se puede aplicar de **forma nativa mediante el atributo loading**, sin necesidad de escribir **JavaScript** ni utilizar bibliotecas externas. Este atributo puede usarse en las etiquetas `<img>` y `<iframe>`, y permite a los navegadores modernos gestionar de forma automática y eficiente cuándo cargar estos elementos.

Internamente, los navegadores utilizan mecanismos como `Intersection Observer` para detectar cuándo un elemento se aproxima al `viewport`. Sin embargo, tú como desarrollador no necesitas preocuparte por ello: basta con añadir `loading="lazy"` a tus imágenes o iframes, y el navegador se encarga del resto.

```html
<img src="imagen.jpg" loading="lazy" alt="Descripción de la imagen">
<iframe src="video.html" loading="lazy"></iframe>
```

Valores disponibles para `loading`:
- `lazy`: Carga diferida del recurso.

- `eager`: Carga inmediata del recurso.

- `auto`: El navegador decide cuándo cargarlo, según su criterio.

Si no se especifica el atributo, el valor por defecto será `auto`.

Esta mejora nativa es **compatible con la mayoría de los navegadores modernos** y representa un paso importante hacia un desarrollo web más rápido, eficiente y centrado en el usuario, además de tener un impacto positivo en el **SEO** y en los **Core Web Vitals**.

## ¿Cómo impacta el Lazy Loading en el SEO?

Más allá de los beneficios en términos de **rendimiento** y **experiencia de usuario**, el lazy loading también puede tener un impacto directo en el posicionamiento **SEO de un sitio web**. Por eso, si estás trabajando en una estrategia de Marketing de Contenidos, vale la pena entender cómo esta técnica puede marcar la diferencia.

Ahora bien, es fundamental tener en cuenta que el uso de la carga diferida debe ser cuidadoso y **bien planificado**. Una implementación incorrecta podría afectar la visibilidad del contenido ante los motores de búsqueda, especialmente si las imágenes o iframes no se cargan correctamente o si el bot de Google no puede acceder a ellos.

Dicho esto, veamos los principales beneficios (y precauciones) que el lazy loading puede generar en el SEO de tu sitio web.

**Optimización de la caché**:

- Aprovecha contenido precargado para acelerar la carga.

- ⚠️ Precaución: un uso excesivo puede provocar errores y afectar la indexación en Google.

**Reducción del peso total de la página**:

- Disminuye el tamaño inicial de carga.

- Mejora el rendimiento en conexiones lentas.

- Favorece el posicionamiento, ya que a Google le gustan los sitios ligeros.

**Mejora del tiempo de permanencia**:

- Aumenta la velocidad de carga.

- Reduce el abandono por frustración del usuario.

- Impacta positivamente en la tasa de conversión y el tiempo promedio de visita.

## Te invito a leer este artículo donde te explico las últimas novedades de Tailwind CSS 👇

[Tailwind CSS 4: Todas las novedades y cómo configurarlo paso a paso](https://johnserrano.co/blog/tailwind-css-4-novedades-y-configuracion)


## ¿Cómo implementar lazy loading nativo en imágenes e iframes?

A continuación te muestro cómo utilizarlo correctamente, incluyendo ejemplos prácticos con imágenes simples, imágenes responsivas y elementos `<picture>`.

**Lazy loading en imágenes `<img>`**

```html
<!-- Carga diferida: la imagen se cargará cuando entre en el viewport -->
<img src="lazy-image.jpg" loading="lazy" alt="Descripción de la imagen" />

<!-- Carga inmediata: ideal para imágenes críticas (como banners o logotipos) -->
<img src="hero-banner.jpg" loading="eager" alt="Banner principal" />

<!-- Modo automático: el navegador decide cuándo cargarla -->
<img src="auto-image.jpg" loading="auto" alt="Imagen automática" />
```

**Lazy loading en `<picture>`**

Cuando usas la etiqueta <picture>, solo necesitas aplicar loading="lazy" en la etiqueta <img> que actúa como fallback. Todos los <source> heredan este comportamiento.

```html
<picture>
  <source media="(min-width: 42em)" srcset="normal.jpg 1x, retina.jpg 2x" />
  <source srcset="optimized.jpg 1x, optimized-retina.jpg 2x" />
  <img src="fallback.jpg" loading="lazy" alt="Imagen optimizada" />
</picture>
```

**Lazy loading con `srcset` y `sizes`**

El atributo `loading="lazy"` también funciona correctamente en imágenes responsivas con `srcset` y `sizes`.

```html
<img
  src="imagen-s.jpg"
  srcset="imagen-l.jpg 1024w, imagen-m.jpg 640w, imagen-s.jpg 320w"
  sizes="(min-width: 36em) 33.3vw, 100vw"
  loading="lazy"
  alt="El lanzamiento más esperado" />
```

**Lazy loading en iframes**

Puedes aplicar lazy loading también en iframes, tanto para contenido local como embebido desde plataformas externas **(como YouTube)**.

```html
<!-- Iframe local -->
<iframe src="video-player.html" loading="lazy"></iframe>

<!-- Iframe externo (YouTube, Vimeo, etc.) -->
<iframe src="https://www.youtube.com/embed/Hw3VqZxFnGI" loading="lazy"></iframe>
```

## ¿Qué soporte tiene el lazy loading nativo en los navegadores?

Actualmente, más del 95% de los navegadores modernos soportan de forma nativa la carga diferida de imágenes e iframes mediante el atributo `loading`. Esto significa que puedes utilizarlo con total confianza en la mayoría de los entornos de navegación, sin necesidad de bibliotecas externas ni código JavaScript adicional.

Puedes ver el soporte completo a día de hoy en la siguiente tabla:

![Soporte loading nativo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pjbtoyy7b7w2k2m3bygw.png)

## ¿Cómo saber si mi navegador soporta el lazy loading nativo?

Puedes verificar si tu navegador es compatible con `loading="lazy"` utilizando una simple comprobación en JavaScript. Basta con verificar si la propiedad `loading` existe en el prototipo de los elementos `HTMLImageElement` o `HTMLIFrameElement`:

```js
const hasNativeLazyLoadSupport = 'loading' in HTMLImageElement.prototype;

if (!hasNativeLazyLoadSupport) {
  // El navegador no soporta lazy loading nativo.
  // Aquí podrías cargar una librería como lazysizes para aplicar una solución alternativa.
}
```

Aunque ha día de hoy no creo que valga la pena validar esto ya que el soporte esta por un 95% según caniuse.

## ¿Qué ocurre si uso loading="lazy" en un navegador no compatible?

Nada grave. Si el navegador no reconoce el atributo `loading`, simplemente lo ignorará y cargará las imágenes o iframes como lo haría normalmente. Esto no genera errores ni afecta negativamente al comportamiento del sitio.

De hecho, esta técnica se considera una mejora progresiva:

- Los navegadores modernos aprovecharán los beneficios de una carga más eficiente.

- Los navegadores más antiguos seguirán funcionando correctamente, aunque sin la optimización de **lazy loading**.

## ¿Debería usar siempre el atributo loading="lazy"?

No. Aunque el atributo `loading="lazy"` es una excelente herramienta para optimizar el rendimiento de un sitio web, no debe aplicarse indiscriminadamente a todas las imágenes.

**¿Por qué?**

Aplicar `loading="lazy"` a imágenes que son visibles inmediatamente al cargar la página (por ejemplo, logotipos, banners principales o imágenes del above the fold) puede perjudicar la experiencia de usuario, ya que introduce una ligera demora en su visualización. 

Esto sucede porque el navegador, en lugar de cargarlas de inmediato, realiza cálculos adicionales (usando Intersection Observer) para determinar cuándo cargarlas, lo cual es innecesario en este caso.

**Recomendación**

Usa `loading="lazy"` únicamente en:

- Imágenes que aparecen más abajo en la página (fuera del viewport inicial).

- Iframes incrustados que no forman parte del contenido principal.

- Elementos multimedia que se cargan bajo demanda conforme el usuario se desplaza.

Evita usarlo en:

- Imágenes críticas que forman parte del contenido inicial visible.

- Elementos visuales claves para el diseño o funcionalidad inmediata.

## ¿Cómo saber si necesitas implementar Lazy Loading?

Si has llegado hasta este punto y aún tienes dudas sobre si tu sitio realmente necesita aplicar la estrategia de **Lazy Loading**, no te preocupes. Aquí te comparto algunas señales claras que pueden ayudarte a tomar una decisión fundamentada:

**🔍 1. Tu sitio es lento**

Utiliza herramientas como **Google PageSpeed Insights**, Lighthouse, **GTmetrix **o WebPageTest. Si los informes muestran que el tiempo de carga es elevado, especialmente por la cantidad de imágenes o iframes, el Lazy Loading puede ayudarte a reducir el peso inicial de la página y mejorar los tiempos de respuesta.

**🛠️ 2. Tienes problemas de optimización general**

Si tu sitio presenta problemas de compresión **(Gzip o Brotli)**, uso excesivo de JavaScript, [CSS](https://johnserrano.co/blog/css-flexbox-diseno-avanzado-desde-cero) sin minificar o HTML pesado, estas son señales de que necesitas optimizar la carga de recursos. Aplicar carga diferida en imágenes e iframes puede ser un paso clave dentro de un enfoque integral de optimización.

**🔁 3. Exceso de redireccionamientos**

Un número elevado de redireccionamientos en tu sitio puede aumentar el tiempo hasta la carga completa. Esto, combinado con recursos que se cargan innecesariamente desde el inicio, **impacta negativamente en el rendimiento general**. Lazy Loading ayuda a aliviar esta carga inicial.

**🖼️ 4. Las herramientas de análisis te recomiendan diferir imágenes**

Cuando PageSpeed Insights o Lighthouse te muestran advertencias como "Defer offscreen images", es una señal directa de que **implementar Lazy Loading** puede tener un impacto positivo. Estas sugerencias son indicadores técnicos concretos de que estás cargando contenido visual antes de que sea necesario.

## Conclusiones

El atributo `loading="lazy"` es una herramienta poderosa, sencilla y ampliamente soportada para **mejorar el rendimiento web**. No hay razones técnicas de peso para no comenzar a utilizarlo de inmediato en todas aquellas **imágenes** e **iframes** que no se encuentren visibles al momento de cargar la página.

✅ Si el navegador soporta Lazy Loading nativo, obtendrás mejoras significativas en la velocidad de carga y en la experiencia del usuario.

❎ Si el navegador no lo soporta, el contenido se cargará normalmente, sin efectos adversos, manteniendo la retrocompatibilidad.

En resumen: implementarlo es **una mejora progresiva segura**, con un excelente balance entre simplicidad de aplicación y beneficios en rendimiento, SEO y usabilidad.

Gracias por leer. ❤️