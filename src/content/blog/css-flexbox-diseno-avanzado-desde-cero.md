---
title: "CSS FlexBox: Diseño avanzado desde cero"
publishedDate: "2025-03-09T10:29:10.000Z"
updatedDate: "2025-03-09T17:09:31.000Z"
pubDate: "2025-03-09T10:29:10.000Z"
description: "Descubre cómo dominar CSS Flexbox desde cero con esta guía completa. Aprende a crear diseños flexibles, alineaciones precisas y estructuras responsivas de manera sencilla y eficiente."
tags: ["Css", "Programación", "development", "webdeveloment", "desarrollo-web", "bem", "grid", "box", "clases", "class", "frontend", "front-end", "css", "johnserrano", "johnserranodev", "container", "flexbox"]
primaryTag: { name: 'FlexBox', slug: 'flexbox' }
excerpt: "Descubre cómo dominar CSS Flexbox desde cero con esta guía completa. Aprende a crear diseños flexibles, alineaciones precisas y estructuras responsivas de manera sencilla y eficiente."
canonicalURL: "https://johnserrano.co/blog/css-flexbox-diseno-avanzado-desde-cero"
draft: false
featureImage: "https://download.johnserrano.co/FLEXBOX.webp"
---

En el diseño web moderno, la necesidad de crear **interfaces flexibles** y adaptables a **distintos dispositivos** es fundamental. **CSS Flexbox (Flexible Box)** es un módulo diseñado para proporcionar una manera eficiente de distribuir espacio y **alinear elementos** dentro de un contenedor, incluso cuando sus dimensiones son dinámicas o desconocidas.

A diferencia de los modelos de **diseño tradicionales** como el modelo de caja en **bloque (block)** o en línea (inline), **Flexbox** permite modificar el tamaño, orden y alineación de los elementos de manera flexible, adaptándose a diferentes pantallas y orientaciones. 

Su principal ventaja es que no está restringido a una **sola dirección**, lo que lo hace ideal para diseños complejos y aplicaciones con necesidades dinámicas.

Aunque **Flexbox** es una herramienta poderosa para diseños a pequeña escala, como la distribución de elementos dentro de un componente, es **importante mencionar** que para diseños de mayor escala, [CSS Grid](https://johnserrano.co/blog/css-grid-la-guia-completa-para-principiantes-y-avanzados) suele ser una mejor opción.

## 🎥 Aprende Flexbox con ejemplos prácticos

Si quieres ver Flexbox en acción y descubrir cómo alinear y distribuir elementos de forma eficiente, aquí tienes un video donde explico paso a paso su funcionamiento y mejores prácticas. 👇

<iframe width="560" height="315" src="https://www.youtube.com/embed/xMdTBbXwAzY?si=U8IAgWL5tHSid-e-" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen loading="lazy"></iframe>


## ¿Quieres dominar CSS Grid y mejorar tus diseños?

Si aún te cuesta organizar elementos en CSS, **Grid** es la clave para crear estructuras flexibles y ordenadas sin complicaciones. 

[CSS Grid: La guía completa para principiantes y avanzados](https://johnserrano.co/blog/css-grid-la-guia-completa-para-principiantes-y-avanzados)

## ¿Qué es Flexbox?

**Flexbox** es un módulo de diseño en CSS que **permite distribuir** el espacio entre los elementos de un contenedor de manera eficiente, permitiendo que estos se expandan o contraigan según sea necesario. 

Su funcionamiento se basa en la definición de un **"contenedor flexible"** que administra la colocación y el tamaño de los elementos hijos.

El modelo de Flexbox **facilita tareas comunes** en diseño web, como:

- Centrando elementos vertical y horizontalmente.

- Creando diseños responsivos sin necesidad de utilizar float o position.

- Ajustando el orden de los elementos sin modificar el código HTML.

- Distribuyendo espacio de manera equitativa o priorizando ciertos elementos dentro de un contenedor.

Este módulo introduce **conceptos clave** como el eje principal y el eje transversal, que definen la **dirección** en la que los elementos se distribuyen dentro del contenedor, permitiendo una **mayor flexibilidad** en el diseño.


### Conceptos básicos y terminología

Flexbox no es solo una propiedad, sino un módulo completo con múltiples **características** y **propiedades**. Algunas de estas propiedades se aplican al **contenedor principal** (llamado "contenedor flexible"), mientras que otras afectan a los **elementos hijos** (llamados "elementos flexibles").

A diferencia de los **diseños tradicionales** basados en los flujos de bloque y en línea, **Flexbox introduce** un sistema basado en "direcciones de flujo flexible" **(flex-flow directions)**, lo que permite una disposición más versátil de los elementos dentro del contenedor. 

Para comprender cómo funciona, es clave conocer los siguientes conceptos:

## Eje principal y eje transversal

- **Eje principal (main axis)**: Es la dirección en la que los elementos flexibles se distribuyen dentro del contenedor. Su orientación depende de la propiedad `flex-direction`, por lo que puede ser horizontal o vertical.

- **Inicio y fin del eje principal (main-start | main-end)**: Los elementos se posicionan en el contenedor comenzando desde el `main-start` y extendiéndose hacia `main-end`.

- **Tamaño principal (main size)**: Hace referencia al ancho o alto de un elemento, dependiendo de la orientación del eje principal. Este tamaño es determinado por las propiedades `width` o `height` según corresponda.

## Eje transversal

- **Eje transversal (cross axis)**: Es el eje perpendicular al eje principal y su dirección se define según la orientación del eje principal.

- **Inicio y fin del eje transversal (cross-start | cross-end)**: Los elementos se organizan en líneas dentro del contenedor comenzando en cross-start y extendiéndose hacia cross-end.

- **Tamaño transversal (cross size)**: Hace referencia al ancho o alto de un elemento en la dimensión transversal. Se determina por las propiedades `width` o `height` según la orientación del eje.

Para ilustrar mejor estos conceptos, aquí tienes una imagen explicativa:

![Conceptos básicos y terminología FlexBox](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55bh6njbem94ttsnfwzp.png)
> _Imagen tomada de css-tricks.com._

Comprender estos conceptos es clave para **dominar Flexbox**, ya que permiten una mejor organización y control del diseño adaptable.


### Propiedades del contenedor Flexible (Flex Container)

![Flex container](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cnvajika0jadysh74k0g.png)
> Imagen tomada de css-tricks.com

En Flexbox, el contenedor flexible es **el elemento padre** que define el contexto en el que los **elementos hijos** se distribuyen y alinean. 

A continuación, te explico las principales propiedades aplicables al contenedor:

## display

Define un contenedor flexible, permitiendo que todos sus elementos directos se conviertan en elementos flexibles. Puede adoptar los valores:

```css
.container {
  display: flex; /* Contenedor de bloque flexible */
  display: inline-flex; /* Contenedor de línea flexible */
}
```

Es importante destacar que las columnas de CSS (column-count, column-width) no afectan a un contenedor flexible.

## flex-direction

Establece el eje principal y la dirección en la que se organizan los elementos flexibles dentro del **contenedor**. Flexbox es un modelo de diseño unidireccional, por lo que los elementos pueden distribuirse en **filas** o **columnas**.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

Los valores posibles son:

- **row (por defecto)**: Organiza los elementos de izquierda a derecha en idiomas con escritura de izquierda a derecha (ltr) y de derecha a izquierda en idiomas con escritura de derecha a izquierda (rtl).

- **row-reverse**: Invierte la dirección de row.

- **column**: Organiza los elementos en una columna de arriba hacia abajo.

- **column-reverse**: Invierte la dirección de column, de abajo hacia arriba.

**Ejemplo**:

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-direction" src="https://codepen.io/johnserranodev/embed/JojyJOg?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/JojyJOg">
  flex-direction</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## flex-wrap

Determina si los elementos flexibles deben ajustarse dentro del contenedor o si pueden desbordarse a una nueva línea.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- **nowrap (por defecto)**: Todos los elementos se mantienen en una sola línea.

- **wrap**: Los elementos se ajustan a múltiples líneas si es necesario.

- **wrap-reverse**: Similar a wrap, pero invierte el orden de las líneas.

**Ejemplo**:

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-wrap" src="https://codepen.io/johnserranodev/embed/XJWaaYd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/XJWaaYd">
  flex-wrap</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## flex-flow

Es una propiedad abreviada para flex-direction y flex-wrap, que define el eje principal y el ajuste de los elementos.

```css
.container {
  flex-flow: row nowrap;
}
```

## justify-content

Controla la alineación de los elementos a lo largo del eje principal.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- **flex-start (por defecto)**: Alinea los elementos al inicio del contenedor.

- **flex-end**: Alinea los elementos al final del contenedor.

- **center**: Centra los elementos dentro del contenedor.

- **space-between**: Distribuye los elementos con espacio igual entre ellos.

- **space-around**: Agrega espacio antes y después de cada elemento.

- **space-evenly**: Distribuye el espacio de manera uniforme entre los elementos.

**Ejemplo**:

<iframe height="300" style="width: 100%;" scrolling="no" title="justify-content" src="https://codepen.io/johnserranodev/embed/xbxLLaq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/xbxLLaq">
  justify-content</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Cambiar el zoom 0.5x para ver el ejemplo correctamente.

## align-items

Define cómo se alinean los elementos en el eje transversal.

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- **flex-start**: Alinea los elementos al inicio del eje transversal.

- **flex-end**: Alinea los elementos al final del eje transversal.

- **center**: Centra los elementos en el eje transversal.

- **baseline**: Alinea los elementos según su línea base de texto.

- **stretch (por defecto)**: Hace que los elementos ocupen todo el espacio disponible en el eje transversal.

**Ejemplo**:

<iframe height="300" style="width: 100%;" scrolling="no" title="align-items" src="https://codepen.io/johnserranodev/embed/WbNEEYq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/WbNEEYq">
  align-items</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Cambiar el zoom 0.5x para ver el ejemplo correctamente.

## gap, row-gap, column-gap

Define el espacio entre los elementos flexibles dentro del contenedor.

```css
.container {
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 15px;
}
```

Funciona como un margen mínimo entre elementos, sin afectar los bordes externos.

**Ejemplo**:

<iframe height="300" style="width: 100%;" scrolling="no" title="gap, row-gap, column-gap" src="https://codepen.io/johnserranodev/embed/bNGrrZy?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/bNGrrZy">
  gap, row-gap, column-gap</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Te invito a leer este artículo donde te explico las últimas novedades de Tailwind CSS 👇

[Tailwind CSS 4: Todas las novedades y cómo configurarlo paso a paso](https://johnserrano.co/blog/tailwind-css-4-novedades-y-configuracion)

### Propiedades de los elementos Flexibles (Flex Items)

![Flex items](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5jp13le8sw1v70xo9ly.png)
> Imagen tomada de css-tricks.com

## order

De forma predeterminada, los elementos flexibles se disponen en el orden de origen. Sin embargo, la propiedad de `order` controla el orden en el que aparecen en el contenedor flexible.

```css
.item {
  order: 5; /* valor por defecto es 0 */
}
```

## flex-grow

Esta propiedad define la capacidad de un elemento flexible para **expandirse dentro del contenedor** cuando hay espacio disponible. Se expresa con un valor numérico sin unidad, que funciona como un factor de proporción.

El valor indica qué parte del espacio libre debe ocupar el elemento en relación con los demás. Si todos los elementos tienen `flex-grow: 1;`, el espacio sobrante se distribuirá de manera equitativa entre ellos. Sin embargo, si un elemento tiene `flex-grow: 2;`, intentará ocupar el doble de espacio en comparación con los demás.

```css
.item {
  flex-grow: 4; /* Valor por defecto: 0 */
}
```

Es importante destacar que los valores negativos no son válidos.

**Ejemplo, order y flex-grow**:

<iframe height="300" style="width: 100%;" scrolling="no" title="order and flex-grow" src="https://codepen.io/johnserranodev/embed/VYwzzNX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/VYwzzNX">
  order and flex-grow</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## flex-shrink

Esta propiedad determina la capacidad de un elemento flexible para **reducir su tamaño** si es necesario. Funciona con un valor numérico sin unidad que indica la proporción en la que el elemento puede encogerse en comparación con los demás.

Si todos los elementos tienen `flex-shrink: 1;`, se reducirán de manera uniforme cuando el espacio sea insuficiente. Si un elemento tiene un valor mayor, se encogerá más rápido que los demás.

```css
.item {
  flex-shrink: 3; /* Valor por defecto: 1 */
}
```

Es importante destacar que los valores negativos no son válidos.

## flex-basis

Define el tamaño inicial de un elemento flexible antes de distribuir el espacio restante en el contenedor. Puede establecerse con una unidad de longitud **(como px, rem, %, etc.)** o mediante palabras clave.

- `auto`: Usa el valor de las propiedades width o height del elemento. (Antes se usaba main-size, pero esta palabra clave fue descontinuada.)

- `content`: Adapta el tamaño según el contenido del elemento. (Esta opción tiene soporte limitado en navegadores.)

Si `flex-basis` se establece en 0, el tamaño del contenido no se toma en cuenta y la distribución del espacio dependerá exclusivamente de `flex-grow`. Si se deja en `auto`, el espacio adicional se asignará de acuerdo con el valor de `flex-grow`.

```css
.item {
  flex-basis: auto; /* Valor por defecto */
}
```

## flex

Esta propiedad es una abreviatura de `flex-grow`, `flex-shrink` y `flex-basis`, combinándolas en una sola declaración. Los valores de `flex-shrink` y `flex-basis` son opcionales.

Por defecto, la propiedad tiene el valor 0 1 auto, lo que significa que el elemento no crecerá **(flex-grow: 0)**, podrá encogerse si es necesario **(flex-shrink: 1)**, y su tamaño inicial se basará en su contenido **(flex-basis: auto)**.

Si se establece un único valor numérico, como `flex: 5;`, se interpreta como `flex-grow: 5; flex-shrink: 1; flex-basis: 0%;`, lo que hace que el elemento tenga cinco veces más prioridad para crecer en comparación con otros elementos, pero sin un tamaño base definido.

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

Se **recomienda utilizar esta propiedad** abreviada en lugar de configurar las propiedades individuales. La abreviatura configura los demás valores de forma inteligente.

## align-self

La propiedad `align-self` permite modificar la alineación de un elemento flexible de forma individual dentro del contenedor, anulando la alineación establecida por `align-items`. 

Esto significa que un elemento puede posicionarse de manera diferente a los demás dentro del mismo contenedor `flex`.

**Por ejemplo**, si todos los elementos están alineados en la parte superior (flex-start), pero un solo elemento tiene `align-self: flex-end;`, este se alineará en la parte inferior.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

Valores:
- **auto**: Usa el valor de align-items definido en el contenedor.
- **flex-start**: Alinea el elemento al inicio del eje transversal.
- **flex-end**: Alinea el elemento al final del eje transversal.
- **center**: Centra el elemento en el eje transversal.
- **baseline**: Alinea el elemento según la línea base del texto.
- **stretch (predeterminado)**: Estira el elemento para ocupar todo el espacio disponible en el eje transversal.

**Nota**: Propiedades como float, clear y vertical-align no tienen efecto en elementos flexibles.

Te dejo una colección con todos los ejemplos:
https://codepen.io/collection/kkkdGZ

## Ejemplos

Comencemos con un ejemplo sencillo y común en el desarrollo web: crear un **header** con un **menú de navegación**. Veremos cómo resolverlo de manera eficiente utilizando Flexbox. 

```html
<header>
  <nav>
    <ul class="navigation">
      <li><a href="#">Home</a></li>
      <li><a href="#">Acerca de nosotros</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
```

Definimos un header que contiene un menú de navegación dentro de un elemento `<nav>`. La lista `<ul>` con la clase **"navigation"** agrupa los elementos `<li>`, cada uno con un enlace `<a>` a diferentes secciones del sitio: Home, Acerca de nosotros, Productos y Contacto.

```css
.navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}
```

Aplicamos Flexbox a la lista de navegación **(.navigation)**, permitiendo que los elementos se distribuyan de manera flexible:

- `display: flex;` → Convierte la lista en un contenedor flexible.

- `flex-flow: row wrap;` → Los elementos se alinean en fila y se ajustan a la siguiente línea si no caben.

- `justify-content: flex-end;` → Los elementos se alinean a la derecha dentro del contenedor.

Esto crea un menú de navegación alineado a la derecha, permitiendo que los elementos se ajusten si el espacio es insuficiente.

Puedes ver todo el ejemplo completo acá:

<iframe height="300" style="width: 100%;" scrolling="no" title="Ejemplo menú" src="https://codepen.io/johnserranodev/embed/jEOLGNE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/johnserranodev/pen/jEOLGNE">
  Ejemplo menú</a> by John Serrano (<a href="https://codepen.io/johnserranodev">@johnserranodev</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Conclusiones

Flexbox es una herramienta poderosa y esencial en el **diseño web moderno**, ya que permite distribuir y alinear elementos de manera eficiente dentro de un **contenedor flexible**. 

Su versatilidad lo convierte en una excelente opción para crear **interfaces responsivas** sin necesidad de recurrir a técnicas más complejas como float o position.

Algunos puntos clave que podemos destacar sobre Flexbox son:

1. **Control total sobre el diseño**: Permite organizar los elementos en una dirección específica (horizontal o vertical), definir el tamaño de cada uno y ajustar su alineación con facilidad.

2. **Distribución eficiente del espacio**: Gracias a propiedades como justify-content, align-items y gap, es posible lograr diseños equilibrados y bien estructurados sin necesidad de hacks o márgenes negativos.

3. **Orden dinámico de los elementos**: Con la propiedad order, podemos cambiar la posición visual de los elementos sin modificar el HTML, lo que facilita la flexibilidad en la disposición de los componentes.

4. **Adaptabilidad y responsividad**: Al permitir que los elementos crezcan (flex-grow), se encojan (flex-shrink) o tengan un tamaño base (flex-basis), Flexbox ayuda a crear interfaces que se ajustan a distintos tamaños de pantalla de forma fluida.

5. **Combinación con otras herramientas**: Aunque Flexbox es ideal para la disposición de elementos en una dimensión (fila o columna), en diseños más complejos puede complementarse con CSS Grid para obtener un control total sobre la disposición del contenido.

En conclusión, Flexbox es una técnica fundamental para cualquier desarrollador web, ya que simplifica la creación de diseños flexibles, adaptables y modernos con menos código y mayor eficiencia.


Gracias por leer. ❤️