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
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1706223118/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/astro_zmclou.jpg"
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

## Instalación de Astro

Para iniciar un nuevo proyecto con **Astro**, utiliza el siguiente comando en tu terminal: `npm create astro@latest` este comando iniciará el proceso de creación del proyecto y te guiará a través de varias configuraciones iniciales. Al ejecutarlo, se te presentarán algunas preguntas importantes, tales como:

* **Ubicación del Proyecto:** Selecciona la ubicación en la que deseas crear tu proyecto Astro. Por default es `./` donde estes ubicado en la terminal, en mi caso coloque `./astro-website`.
* **¿Cómo te gustaría comenzar tu nuevo proyecto?**: Puedes elegir entre varias opciones para iniciar el proyecto, incluso comenzarlo totalmente vacío. En mi caso, seleccioné que incluyera los archivos de muestra.
* **Tipo de Proyecto (TypeScript, JavaScript, etc.):** Decide si deseas utilizar TypeScript u otro tipo de configuración para tu proyecto. Puedes escoger **TypeScript** para seguir el tutorial.
* **Inicialización con Git:** Opta por inicializar tu proyecto con Git si planeas gestionar el control de versiones. Yo lo inicialice le di yes.

**Ejemplo:**
![Ejemplo de instalación](https://res.cloudinary.com/john-serrano/image/upload/v1706134076/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-24_170655_hogxkh.jpg)

Una vez completada la instalación, accedemos a nuestro proyecto y ejecutamos `npm run dev` para iniciar el modo de desarrollo. Esto nos proporcionará una URL para acceder al sitio web, que será `http://localhost:4321/`.

**Resultado:**
![WebSite](https://res.cloudinary.com/john-serrano/image/upload/v1706134566/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-24_171549_jopsxh.jpg)

## Estructura básica de una página

Antes de explorar la estructura básica de una página en Astro, es importante mencionar algunos archivos y carpetas clave. Una vez que tengamos abierto el proyecto en nuestro editor de código, encontraremos los siguientes archivos y carpetas:

* **astro.config.mjs:** Este archivo contiene toda la configuración necesaria para Astro, incluyendo la adición de nuevas dependencias, herramientas, y más.
* **tsconfig.json:** Aquí se encuentra toda la configuración relacionada con TypeScript.
* **Carpeta src/:** En esta carpeta se encuentra todo nuestro código fuente, donde desarrollaremos la lógica y diseño de nuestra página.
* **Carpeta public/:** Esta carpeta contiene archivos públicos como logos, iconos, y otros recursos accesibles para nuestra página web.

Estos archivos y carpetas proporcionan la base sobre la cual construiremos **nuestro proyecto en Astro**, permitiéndonos personalizar y estructurar nuestro sitio web de manera efectiva.

Dentro de la carpeta `src/`, encontramos tres carpetas, pero la más importante es la de `pages/`. Cada archivo dentro de esta carpeta hace referencia a una ruta de nuestro sitio web. Por defecto, dentro de `pages/` está `index.astro`, que representa la página principal.

Para crear una **ruta** como, por ejemplo, `about/`, podemos seguir dos enfoques:

Crear un archivo about.astro directamente en la carpeta `pages/`.
Crear una carpeta `about/` dentro de `pages/` y dentro de esta carpeta, colocar un archivo `index.astro`.

Ambos métodos producirán la misma ruta `about/` en nuestro sitio web. Este enfoque de estructura de carpetas nos permite organizar nuestras páginas de manera clara y lógica dentro del proyecto Astro.

![Estructura de carpetas](https://res.cloudinary.com/john-serrano/image/upload/v1706190554/John%20Serrano/Blog%20Post/astro-tutorial-paso-a-paso-crea-tu-propia-pagina-web-facilmente/Captura_de_pantalla_2024-01-25_084854_ajgemf.jpg)

En la imagen anterior, podemos observar la estructura completa de nuestro proyecto. Vamos a detallar cada parte:

* **Archivo index.astro:** Este archivo es la página principal de nuestro sitio web. Aquí, tenemos una importación de un Layout que define la estructura general de la página.
* **Carpeta components/:** Esta carpeta contiene componentes reutilizables que se utilizan en varias partes del proyecto. Es decir pequeños fragmentos de HTML que podemos reutilizar.
* **Carpeta pages/:** Aquí es donde se encuentran todos los archivos que representan páginas individuales de nuestro sitio web. Cada archivo dentro de esta carpeta define una ruta específica en nuestro sitio.
* **Archivo Layout.astro:** Este archivo define el diseño y la estructura común que se aplicará a todas las páginas de nuestro sitio web. Es importado y utilizado en `index.astro`.
* **Carpeta public/:** Esta carpeta contiene archivos estáticos como imágenes, íconos y otros recursos que serán accesibles públicamente desde nuestro sitio web.

Esta estructura proporciona una organización clara y modular para nuestro **proyecto Astro**, lo que facilita el desarrollo y la gestión de nuestro sitio web. Revisemos el archivo `index.astro`.

```js
---
import Layout from '../layouts/Layout.astro'
---
```

con los --- podemos ejecutar JS hacer importaciones de archivos, librerias, **props de Astro**. En nuestro caso estamos importando el Layout que representa una parte común de nuestro sitio web que se replicara en cada página que lo importemos y usemos.

Seguido de eso tenemos todo el html de nuestra página principal en este caso esta envuelto por un `<Layout />`. Si podemos ver el Layout resive unos props esto es algo muy parecido a React.js, luego revisaremos el Layout más a profundidad.

```jsx
<Layout title='Página principal'>
  <main>
    <h1>Hello World</h1>
  </main>
</Layout>
```

Tenemos un tag `main` y un `h1` con el `texto Hello World` y por último tenemos los styles.

```css
<style>
  main {
    margin: auto;
    padding: 1rem;
    width: 800px;
    max-width: calc(100% - 2rem);
    color: white;
    font-size: 20px;
    line-height: 1.6;
  }
</style>
```

Utilizando la etiqueta `<style>`, podemos agregar todos los estilos que afectarán a nuestra página en el archivo `index.astro`. Es importante destacar que estos estilos no son **globales**; es decir, solo afectarán a **los elementos** dentro de la página específica donde se definen.

En caso de que necesitemos aplicar **estilos globales** que afecten a todo el sitio web, Astro proporciona **directivas** que nos permiten agregar estilos globales de manera sencilla y efectiva, más adelante veremos como se aplican.

Ahora vamos a crear el archivo `about.astro` y agreguemos el `Layout` el `html` necesario y los `styles`.

**about.astro**

```html
---
import Layout from '../layouts/Layout.astro'
---

<Layout title='Sobre mi'>
  <main>
    <a href='/'>Inicio</a>
    <a href='/about/'>Sobre mi</a>
    <h1>Sobre mi</h1>
  </main>
</Layout>

<style>
  main {
    margin: auto;
    padding: 1rem;
    width: 800px;
    max-width: calc(100% - 2rem);
    color: white;
    font-size: 20px;
    line-height: 1.6;
  }
</style>
```

El código para la página **"about"** es muy similar al archivo `index.astro`, con algunos cambios y adiciones específicas. Algunas de las modificaciones incluyen:

1. **Cambio en el título de la propiedad en el Layout:** Dado que estamos en otra página, el título de la propiedad en el **Layout** se ha actualizado para reflejar el contenido de la página "about".
2. **Agregado de etiquetas `<a>` para navegación entre páginas:** Se han añadido etiquetas `<a>` para permitir la navegación entre páginas, proporcionando enlaces a otras páginas del sitio web desde la página "about".

Estos cambios y adiciones ayudan a personalizar la **página "about"** y la diferencian del archivo `index.astro`, asegurando una experiencia de usuario buena y navegación fluida en el sitio web.

## Archivo Layout.astro

Revisemos el archivo **Layout.astro**, donde encontraremos algunas partes fundamentales para la estructura y funcionamiento de nuestro sitio web:

```html
---
interface Props {
  title: string
}

const { title } = Astro.props
---

<!doctype html>
<html lang='es'>
  <head>
    <meta charset='UTF-8' />
    <meta name='description' content='Astro description' />
    <meta name='viewport' content='width=device-width' />
    <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
    <meta name='generator' content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  :root {
    --accent: 136, 58, 234;
    --accent-light: 224, 204, 250;
    --accent-dark: 49, 10, 101;
    --accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);
  }
  html {
    font-family: system-ui, sans-serif;
    background: #13151a;
    background-size: 224px;
  }
  code {
    font-family:
      Menlo,
      Monaco,
      Lucida Console,
      Liberation Mono,
      DejaVu Sans Mono,
      Bitstream Vera Sans Mono,
      Courier New,
      monospace;
  }
</style>
```

Lo primero que podemos notar son las **Props de Astro** y una interface esto ya es cosa de TypeScript.

```js
---
interface Props {
  title: string
}

const { title } = Astro.props
---
```

La interface como mencione es algo de **TypeScript** no lo voy a explicar en este punto pero tengo un [artículo](https://johnserrano.co/blog/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos) donde hablo sobre los `types` y que es TypeScript.

Con la palabra `Astro.props` podemos acceder a todas la props que nos pasen al componente Layout, también podemos acceder a otros valores desde `Astro` como `cookies`, `params`, `site`, `url`, `redirect`, `generator`, etc.

Después de revisar la parte del JS en el archivo `Layout.astro`, nos adentramos en el HTML que define la estructura básica de cada página en nuestro sitio web. Este HTML comúnmente incluye: head, body, title, metas y algo en particular es que tenemos algo nuevo llamado `<slot />`

Una característica importante a destacar es el uso de la etiqueta `<slot />`, que es parte de la especificación de **Web Components**. Esta etiqueta se utiliza para definir puntos de **inserción dentro del HTML** donde los componentes secundarios pueden insertar su contenido. Es especialmente útil para la **composición de componentes y la creación de diseños flexibles y reutilizables**.

Esto es muy parecido a los `children` en **React.js**, es importante tener en cuenta que en **Astro** también se pueden utilizar **slots nombrados**, una característica **avanzada** que permite una mayor **flexibilidad en la composición de componentes**. Sin embargo, dado que este tutorial se centra en los conceptos básicos de Astro y la creación de una **página web simple**, no exploraremos en detalle esta funcionalidad más avanzada en este momento.

Gracias al **slot**, podemos visualizar todo el HTML que hemos colocado en las páginas `index.astro` y `about.astro`. Esto se logra al envolver dicho **HTML** con el **componente Layout**, lo que nos permite obtener toda la estructura HTML necesaria para nuestro sitio.

```html
<style is:global>
  :root {
    --accent: 136, 58, 234;
    --accent-light: 224, 204, 250;
    --accent-dark: 49, 10, 101;
    --accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);
  }

  html {
    font-family: system-ui, sans-serif;
    background: #13151a;
    background-size: 224px;
  }

  code {
    font-family:
      Menlo,
      Monaco,
      Lucida Console,
      Liberation Mono,
      DejaVu Sans Mono,
      Bitstream Vera Sans Mono,
      Courier New,
      monospace;
  }
</style>
```

Ya por último tenemos los **styles** con una **directiva**, te acuerdas que mencione las directivas bueno acá estamos usando la directiva `is:global` con esta directiva le indicamos que todos los styles son de tipo globales y afectara todas las páginas de nuestro sitio web.

## Carpeta components

En la carpeta components podemos agregar todos los componentes que necesitemos no necesariamente tienen que ir en esta carpeta pero por convención se agregan en está carpeta, y tenemos un componente llamado Card.astro donde tenemos lo mismo que ya se menciono anteiormente los props de que le paso al componente accedemos con Astro.props el HTML y los styles para ese componente.

En la carpeta **components**, podemos agregar todos los componentes que necesitemos. Aunque no es estrictamente necesario que los componentes vayan en esta carpeta, por convención se suelen colocar aquí. Un ejemplo de componente que podemos encontrar es `Card.astro`, donde se definen los **props** y su respectivo acceso mediante `Astro.props`, el **HTML** específico del componente, y los **estilos asociados**.

```html
---
interface Props {
	title: string;
	body: string;
	href: string;
}

const { href, title, body } = Astro.props;
---

<li class="link-card">
	<a href={href} target="_blank">
		<h2>
			{title}
			<span>&rarr;</span>
		</h2>
		<p>
			{body}
		</p>
	</a>
</li>

<style>
	.link-card {
		list-style: none;
		display: flex;
		padding: 1px;
		background-color: #23262d;
		background-image: none;
		background-size: 400%;
		border-radius: 7px;
		background-position: 100%;
		transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	}
	.link-card > a {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: calc(1.5rem - 1px);
		border-radius: 8px;
		color: white;
		background-color: #23262d;
		opacity: 0.8;
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
	}
	.link-card:is(:hover, :focus-within) {
		background-position: 0;
		background-image: var(--accent-gradient);
	}
	.link-card:is(:hover, :focus-within) h2 {
		color: rgb(var(--accent-light));
	}
</style>
```
El llamado de este componente lo hacemos en about.astro.

```html
<Card
  title='John Serrano'
  body='Ejemplo de como desarrollar un sitio web con Astro'
  href='https://johnserrano.co'
/>
```

Algo que no mencione antes es que podemos acceder a los valores que obtenemos de las props desde el **HTML** con las llaves `{ }` esto es muy parecido a como escribimos **JSX** pero no es lo mismo. Más información sobre el tema visita la [doc](https://docs.astro.build/es/core-concepts/astro-syntax/) oficial.

```jsx
<p>
  {body}
</p>
```

Otro ejemplo es usar atributos dinámicos:

```html
---
const nombre = "Astro";
---
<h1 class={nombre}>Se admiten expresiones de atributos</h1>

<MyComponent templateLiteralNameAttribute={`MiNombreEs${nombre}`} />
```

**HTML Dinamico:**

Astro puede mostrar HTML condicionalmente utilizando operadores lógicos JSX y expresiones ternarias.

```html
---
const visible = true;
---
{visible && <p>¡Muéstramelo!</p>}

{visible ? <p>¡Muéstramelo!</p> : <p>¡Si no, muéstramelo!</p>}
```

## Manejo de eventos

¿Qué pasaría si quisiéramos agregar un evento para escuchar los clics en un botón utilizando Astro? Veamos un ejemplo de cómo podríamos hacerlo.

```html
<button id='button'>Haz clic</button>

<script>
  function handleClick() {
    console.log('¡click here...!')
  }

  const button = document.getElementById('button')

  button?.addEventListener('click', handleClick)
</script>
```

Tenes un elemento de tipo `button` y ahora tenemos algo nuevo también podemos usar la etiqueta **script** para agregar **JavaScript** del lado del cliente, en este caso para agregar el **evento click del botón**. Así de fácil podemos agregar eventos con **astro** y el código no hay mucho que explicar es el mismo JS de siempre.


## Agregar Tailwind CSS en Astro

Quiero cambiar los styles de los anchor `<a>` y también del botón que agregue por cierto me falto mencionar el botón lo llame en la página principal `index.astro`. Volviendo al tema voy agregar **tailwind**.

Ejecutamos el comando en la terminal `npx astro add tailwind` y le damos `yes`  a todo con esto lo que hace es instalar tailwind agregar la config que necesita astro para que funcione tailwind y listo.

Una vez instalado nos crea un archivo llamado `tailwind.config.mjs` para toda la config de tailwind y en la config de `astro.config.mjs` agrega lo necesario para que todo funcione bien.

```js
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});
```

Con todo esto ya tenemos **tailwind instalado** y **funcionando**, voy aplicar algunas clases y podremos observar algunos cambios de los estilos.

**index.astro**
```html
<main class='flex flex-col gap-4 items-start'>
  <h1 class='text-4xl text-center'>Hello World</h1>
  <a href='/about' class='text-rose-600 text-xl hover:underline'>About here</a>

  <Button />
</main>
```

Aunque no voy a entrar en detalles sobre el propósito de cada clase, observamos cambios en los estilos, como colores de texto, tamaños de fuentes y espacios entre elementos.


**about.astro**
```html
---
const styleAnchor = 'text-rose-600 text-xl hover:underline'
---

 <nav class='flex gap-4 mb-12'>
  <a href='/' class={styleAnchor}>Inicio</a>
  <a href='/about' class={styleAnchor}>Sobre mi</a>
</nav>

<h1 class='text-4xl text-center mb-16'>Sobre mi</h1>
```

Algo interesante en este código es que definimos un conjunto de **clases CSS** mediante una **variable** de **JavaScript**, lo que nos permite reutilizar estas clases fácilmente en varios elementos del HTML.

```html
<button id='button' class='px-4 py-2 rounded bg-rose-500 text-slate-200 hover:opacity-90 my-14 mx-auto'>
  Haz clic
</button>
```

Por último el componente `Button` con estilos de color tamaño y bordes.


## Instalación de un framework UI

Para instalar @astrojs/preact, vamos a ejecutar el siguiente comando: `npx astro add preact` muy parecido con tailwind le damos a todo que yes, esto lo que va hacer es instalar y agregar la configuración necesaria para que todo funcione correctamente.

**astro.config.mjs**
```js
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()]
});
```

Ahora, vamos a crear un simple contador de números para explorar cómo se integra Preact con Astro.

Lo primero es el componente del contador lo creamos dentro de la carpeta components:

```tsx
import { useState } from 'preact/hooks'

export function Counter() {
  const [count, setCount] = useState(0)

  const styleButton = 'text-4xl rounded border-2 border-slate-200 w-10 h-16 active:scale-95 hover:opacity-70'

  return (
    <div className='flex gap-2 flex-col items-center justify-center'>
      <h3 className='text-3xl m-5 tracking-widest'>Contador: {count}</h3>

      <div className='flex gap-5'>
        <button onClick={() => setCount(count + 1)} className={styleButton}>
          +
        </button>
        <button onClick={() => setCount((currentCount: number) => currentCount - 1)} className={styleButton}>
          -
        </button>
      </div>
    </div>
  )
}
```

Un componente con un estado muy sencillo es prácticamente como escribirlo con React.js, pero Preact es un poco más liviano y para este ejemplo viene bien. Lo único a destacar es la parte de las clases que las reutilizamos.

Ahora viene lo que para mi es lo más importante que es la integración del componente con Astro:

**index.astro**
```html
---
import { Counter } from '../components/Counter'
---

<section class='my-5 w-full'>
  <Counter client:visible />
</section>
```

En nuestra página principal lo primero es importar el componente como lo veniamos haciendo con **Astro**, y lo segundo es llamar el componente `<Counter />` pero acá viene lo diferente para que funcione el componente debemos pasarle una directiva `client:visible` donde le indicamos a **Astro** que ese componente es **interactivo** que necesita de JavaScript, en Astro lo llaman `Islas`. 

Existen otras directivas que podemos utilizar, las cuales varían según el momento o la acción con laASTRO que queremos que el componente haga render. `client:load`, `client:visible`, `client:idle`, `client:media`, etc.


## Desplegar la página web con Netlify

1. Crea una cuenta gratuita en **Netlify** si aún no tienes una.  Anota tu nombre de usuario. Verás tu panel de control y cualquiera de los sitios que crees en https://app.netlify.com/teams/username.

2. Haz clic en **Add new site** > **Import an existing project**. Se te pedirá que te conectes a un proveedor de **Git**. Elige GitHub y sigue los pasos que aparecen en pantalla para autenticar tu cuenta de GitHub. A continuación, elige el repositorio **GitHub** de tu proyecto de Astro de la lista proporcionada.

3. En el último paso, **Netlify** te mostrará la configuración del sitio de tu aplicación. Los valores predeterminados deben ser correctos para tu proyecto **Astro**, así que puedes desplazarte hacia abajo y **hacer clic en Deploy site**.

Y listo **felicitaciones** ya tienes un sitio web con astro desplegado.

Te dejo el link de mi ejemplo: https://extraordinary-horse-d6cbd9.netlify.app/

Dejo el link del repositorio, [código completo](https://github.com/johnsi15/astro-website). Si te fue útil te invito a darle una estrilla al repositorio, muchas gracias.

## Conclusiones

En conclusión, **Astro** es una opción atractiva para desarrolladores que buscan una forma moderna y eficiente de construir aplicaciones web, ofreciendo simplicidad, rendimiento y flexibilidad en un paquete integrado. En resumen estás son algunas de sus características y ventajas:

1. **Simplicidad y Flexibilidad:** Astro ofrece una sintaxis familiar de HTML y JavaScript para crear aplicaciones web de forma sencilla y flexible.

2. **Optimizaciones de Rendimiento:** Genera código HTML estático y optimizado para mejorar la velocidad de carga y la experiencia del usuario.

3. **Compatibilidad con React y Preact:** Permite utilizar React o Preact para aprovechar sus bibliotecas de componentes mientras se optimiza el rendimiento. Y muchas más herramientas son compatibles con Astro.

4. **Directivas Avanzadas:** Ofrece directivas avanzadas para controlar el renderizado de componentes de manera eficiente.

5. **Crecimiento del Ecosistema:** Aunque es una herramienta relativamente nueva, **Astro** está ganando popularidad rápidamente y cuenta con una comunidad activa de desarrolladores.
