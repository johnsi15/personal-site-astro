---
title: "Tailwind CSS 4: Todas las novedades y cómo configurarlo paso a paso"
publishedDate: "2025-02-04T16:29:10.000Z"
updatedDate: "2025-02-04T17:09:31.000Z"
pubDate: "2025-02-04T16:29:10.000Z"
description: "Tailwind CSS 4 ha llegado con mejoras significativas en rendimiento, nuevas utilidades y cambios en su configuración. En este artículo, exploraremos las novedades más destacadas y cómo configurar esta nueva versión en tus proyectos."
tags: ["Programación", "development", "webdeveloment", "desarrollo-web", "pagina-web", "sitio-web", "johnserranodev", "tailwind", "css", "novedades"]
primaryTag: { name: 'TailwindCSS', slug: 'tailwind' }
excerpt: "Tailwind CSS 4 ha llegado con mejoras significativas en rendimiento, nuevas utilidades y cambios en su configuración. En este artículo, exploraremos las novedades más destacadas y cómo configurar esta nueva versión en tus proyectos."
canonicalURL: "https://johnserrano.co/blog/tailwind-css-4-novedades-y-configuracion"
draft: false
featureImage: "https://download.johnserrano.co/tailwindcss-4.0.png"
---

Tailwind CSS 4 ha llegado con mejoras significativas en rendimiento, nuevas utilidades y cambios en su configuración. En este artículo, exploraremos las novedades más destacadas y cómo configurar esta nueva versión en tus proyectos.

## Instalación y configuración simplificada

La instalación ahora es más sencilla que nunca. Puedes instalar Tailwind CSS 4 con:

**Instalación de Tailwind CSS como un Plugin de PostCSS**

Instalar Tailwind CSS como un plugin de PostCSS es la forma más fluida de integrarlo con frameworks como Next.js y Angular.

**1. Instalar Tailwind CSS**

Instala `tailwindcss`, `@tailwindcss/postcss` y `postcss` a través de npm.

`npm install tailwindcss @tailwindcss/postcss postcss`

**2. Agregar Tailwind a la configuración de PostCSS**

Añade `@tailwindcss/postcss` en tu archivo `postcss.config.mjs` o donde tengas configurado PostCSS en tu proyecto.

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

**3. Importar Tailwind CSS**

Agrega una directiva @import en tu archivo CSS para importar Tailwind CSS.

`@import "tailwindcss";`

**4. Iniciar el proceso de construcción**

Ejecuta el proceso de construcción con `npm run dev` o el comando que tengas configurado en tu `package.json`.

`npm run dev`

**5. Comenzar a usar Tailwind en tu HTML**

Asegúrate de que tu CSS compilado esté incluido en el `<head>` (tu framework podría encargarse de esto automáticamente), y luego empieza a utilizar las clases de utilidad de Tailwind para dar estilo a tu contenido.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    ¡Hola mundo!
  </h1>
</body>
</html>
```

**Instalación de Tailwind CSS como un Plugin de Vite**

Si usas Vite, puedes instalar Tailwind CSS como un plugin de forma sencilla, ideal para frameworks como Laravel, SvelteKit, React Router, Nuxt y SolidJS.

**1. Instalar Tailwind CSS**

Instala `tailwindcss` y `@tailwindcss/vite` con npm:

`npm install tailwindcss @tailwindcss/vite`

**2. Configurar el plugin en Vite**

Agrega `@tailwindcss/vite` en tu archivo `vite.config.ts`:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

**3. Importar Tailwind CSS**

Como en la configuración con PostCSS, importa Tailwind en tu archivo CSS:

`@import "tailwindcss";`

**4. Iniciar el proceso de construcción**

Ejecuta el servidor de desarrollo con:

`npm run dev`

Con esto, Tailwind CSS quedará integrado en tu proyecto con Vite de manera eficiente.

## Migración desde versiones anteriores

Si ya tienes un proyecto con Tailwind CSS y deseas actualizar a la versión 4, puedes utilizar el asistente de migración oficial ejecutando:

`npx @tailwindcss/upgrade@next`

Este comando te ayudará a actualizar automáticamente tu configuración y clases a la nueva versión, asegurando compatibilidad con los cambios recientes.

## Configuración basada en CSS

Uno de los mayores cambios en Tailwind CSS v4.0 es la transición de la configuración en JavaScript a una configuración directamente en CSS.

En lugar de usar un archivo `tailwind.config.js`, ahora puedes definir todas tus personalizaciones directamente en el archivo CSS donde importas Tailwind, eliminando la necesidad de un archivo adicional en tu proyecto:

```css
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  /* ... */
}
```

Esta nueva configuración basada en CSS te permite hacer prácticamente todo lo que antes hacías en `tailwind.config.js`, incluyendo la definición de tokens de diseño, utilidades personalizadas, variantes y más.


## Clases utilitarias renombradas

Algunas clases han sido renombradas para mayor coherencia y facilidad de uso. Por ejemplo:

![Clases deprecadas](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ilbv02qc6nfeq74xe4ed.png)

Se renombraron las siguientes utilidades para hacerlas más consistentes y predecibles:


![Clases renombradas](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ofw2oy0lizeveuurdfu.png)

**Actualización de escalas para `shadow`, `radius` y `blur`**

Hemos renombrado las escalas predeterminadas de sombras, radios y desenfoques para garantizar que cada utilidad tenga un valor nombrado. Las versiones sin sufijo aún funcionan por compatibilidad con versiones anteriores, pero las utilidades `<utility>-sm` se verán diferentes a menos que se actualicen a sus respectivas versiones `<utility>-xs`.

Para actualizar tu proyecto con estos cambios, reemplaza las utilidades de la versión 3 por las de la versión 4:

```html
<!-- Versión 3 -->
<input class="shadow-sm" />

<!-- Versión 4 -->
<input class="shadow-xs" />

<!-- Versión 3 -->
<input class="shadow" />

<!-- Versión 4 -->
<input class="shadow-sm" />
```

**Color de borde predeterminado**

En la versión 3, las utilidades `border-*` y `divide-*` usaban por defecto el color `gray-200` configurado en tu proyecto. En la versión 4, esto ha cambiado a `currentColor` para hacer que Tailwind sea menos restrictivo y se alinee con los valores predeterminados del navegador.

Para actualizar tu proyecto, asegúrate de especificar un color en cualquier lugar donde utilices `border-*` o `divide-*`:

```html
<div class="border border-gray-200 px-2 py-3 ...">
  <!-- ... -->
</div>
```

Alternativamente, puedes agregar estos estilos base a tu proyecto para mantener el comportamiento de la versión 3:

```css
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}
```

## Agregar utilidades personalizadas

En la versión 3, cualquier clase personalizada que definieras dentro de `@layer utilities` se consideraba una verdadera clase de utilidad en Tailwind y funcionaba automáticamente con variantes como `hover`, `focus` o `lg`.

En la versión 4, ahora usamos **capas nativas de CSS** y ya no modificamos la regla `@layer`. Como reemplazo, hemos introducido la API @utility:

```css
/* Versión 3 */
@layer utilities {
  .tab-4 {
    tab-size: 4;
  }
}

/* Versión 4 */
@utility tab-4 {
  tab-size: 4;
}
```

Este cambio permite que las utilidades personalizadas sigan funcionando sin interferir con las capas nativas de CSS.

## ¿Quieres ir un paso más allá?

Si estás interesado en potenciar tu carrera como **desarrollador frontend** o desarrollador Web, te recomiendo leer este artículo:

**[Cómo iniciar y crecer como desarrollador frontend en 2025](https://johnserrano.co/blog/como-iniciar-y-crecer-como-desarrollador-frontend-en-2025)**

En él encontrarás **consejos prácticos**, **recursos** y estrategias para comenzar y avanzar en el mundo del desarrollo frontend.


## Nueva paleta de colores

Se han añadido colores más vibrantes y equilibrados en la nueva versión, 
actualizando toda la paleta de colores predeterminada de RGB a OKLCH, aprovechando el gama de colores más amplia para hacer que los colores sean más vivos en comparación con las limitaciones previas del espacio de color sRGB.


![Nueva paleta de colores OKLCH](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0o4q3dwrdurj7m4bsfis.png)

## Container Queries

Tailwind CSS 4 incorpora soporte para container queries, lo que permite diseñar componentes más flexibles basados en el tamaño de su contenedor y no solo en el viewport.

```html
<div class="@container">
  <div class="grid grid-cols-1 @sm:grid-cols-3 @lg:grid-cols-4">
    <!-- ... -->
  </div>
</div>

<div class="@container">
  <div class="grid grid-cols-3 @max-md:grid-cols-1">
    <!-- ... -->
  </div>
</div>
```

Esto facilita el diseño adaptable sin depender exclusivamente de media queries tradicionales.

## Nueva API de transformaciones 3D

Ahora es más sencillo trabajar con transformaciones 3D gracias a una API más intuitiva. Como `rotate-x-*`, `rotate-y-*`, `scale-z-*`, `translate-z-*`, y muchas más.

```html
<div class="perspective-distant">
  <article class="rotate-x-51 rotate-z-43 transform-3d ...">
    <!-- ... -->
  </article>
</div>
```

Esto facilita la creación de efectos tridimensionales sin necesidad de escribir CSS personalizado.

## APIs de gradientes ampliadas

En Tailwind CSS v4.0, han agregado muchas nuevas funciones para gradientes, permitiéndote crear efectos aún más avanzados sin necesidad de escribir CSS personalizado.

**Ángulos en gradientes lineales**

Ahora puedes definir ángulos en los gradientes lineales, usando clases como bg-linear-45 para aplicar un gradiente en un ángulo de 45 grados:

`<div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500"></div>
`
También han renombrado `bg-gradient-*` a `bg-linear-*` para una mejor organización.

**Modificadores de interpolación en gradientes**

Ahora puedes controlar el modo de interpolación del color en los gradientes con un modificador.

✅ Interpolación usando sRGB:
`<div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400">...</div>`

✅ Interpolación usando OKLCH (colores más vivos):
`<div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400">...</div>`

Los espacios de color como OKLCH o HSL generan gradientes más vibrantes, especialmente cuando los colores de `from-*` y `to-*` están muy separados en el círculo cromático.

👉 Por defecto en v4.0, Tailwind usa **OKLAB**, pero puedes cambiarlo agregando uno de estos modificadores según tu necesidad.


## Soporte para animaciones con `@starting-style`

En Tailwind CSS v4.0, se ha agregado la variante starting, que permite usar la nueva característica de CSS `@starting-style`.

Esta funcionalidad facilita la transición de propiedades cuando un elemento aparece por primera vez en pantalla.

```html
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="transition-discrete starting:open:opacity-0 ...">
    <!-- ... -->
  </div>
</div>
```

Esto proporciona mayor control sobre las animaciones en la web. Con @starting-style, finalmente puedes animar elementos a medida que aparecen en la página sin necesidad de JavaScript.

## Negaciones con `not-*`

Se introduce el soporte para negaciones con not, lo que permite aplicar estilos a todos los elementos excepto los que cumplan una condición.

La nueva variante not-* que finalmente agrega soporte para la pseudoclase CSS :not():

```html
<div class="not-hover:opacity-75">
  <!-- ... -->
</div>
```

```css
.not-hover\:opacity-75:not(*:hover) {
  opacity: 75%;
}
@media not (hover: hover) {
  .not-hover\:opacity-75 {
    opacity: 75%;
  }
}
```

## Uso de Plugins con `@plugin`

En Tailwind CSS 4, la forma de cargar plugins ha cambiado. Ahora se utiliza la directiva `@plugin` para cargar plugins basados en JavaScript:

`@plugin "@tailwindcss/typography";`

La directiva `@plugin` acepta un nombre de paquete o una ruta local, se debe cargar en el archivo base css que se use para la configuración inicial.

Esta nueva forma facilita la integración de funcionalidades adicionales sin modificar la configuración de Tailwind directamente.

## 🎥 Te dejo un vídeo donde te explico todo los detalles:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rk1nXWmzX7s?si=1V64tvWWDCizbQxl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen loading="lazy"></iframe>

## Conclusión

Tailwind CSS 4 trae cambios significativos que mejoran la productividad y la flexibilidad en el desarrollo frontend. Con nuevas utilidades, una API más clara y mejor rendimiento, esta versión es una gran actualización para los desarrolladores que buscan optimizar su flujo de trabajo.

Gracias por leer. ❤️

## Si te interesa aprender cómo instalar Tailwind v4 en React y Vite, te invito a ver el siguiente vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pXxwrCx2SgQ?si=HffwtG1Xqk1ipqMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen loading="lazy"></iframe>