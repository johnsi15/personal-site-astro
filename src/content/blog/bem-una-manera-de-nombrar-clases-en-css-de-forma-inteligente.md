---
title: "BEM Una manera de nombrar clases en CSS de forma inteligente"
publishedDate: "2023-09-16T16:29:10.000Z"
updatedDate: "2023-09-16T17:09:31.000Z"
pubDate: "2023-09-16T16:29:10.000Z"
description: "Descubre cómo BEM, la metodología de nomenclatura de clases en CSS, revoluciona la forma en que organizas y desarrollas tus proyectos web. Aprende a crear código CSS más limpio y mantenible, mejora la colaboración en equipo y evita conflictos de estilos."
tags: ["Css", "Programación", "development", "webdeveloment", "desarrollo-web", "bem", "BEM", "Metodología", "clases", "class", "frontend", "front-end", "css"]
primaryTag: { name: 'Css', slug: 'css' }
excerpt: "Descubre cómo BEM, la metodología de nomenclatura de clases en CSS, revoluciona la forma en que organizas y desarrollas tus proyectos web. Aprende a crear código CSS más limpio y mantenible, mejora la colaboración en equipo y evita conflictos de estilos."
canonicalURL: "https://johnserrano.co/blog/bem-una-manera-de-nombrar-clases-en-css-de-forma-inteligente"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1694898177/John%20Serrano/Blog%20Post/bem-una-manera-de-nombrar-clases-en-css-de-forma-inteligente/base-portada_sfn7zg.webp"
---

## ¿Qué es la metodología de BEM en CSS?

La **metodología BEM** (Block, Element, Modifier) es un enfoque de nomenclatura y estructuración de **clases** en **CSS** que se utiliza para escribir estilos de manera más organizada y modular en aplicaciones web. Esta metodología ayuda a crear un **código CSS** más **claro** y **comprensible**, evitando **conflictos** y facilitando la **reutilización** de estilos.

En la metodología **BEM**, los estilos se dividen en tres partes:

1. Block **(Bloque)**: Representa un componente independiente y autónomo de la interfaz de usuario. Los bloques se nombran en función de su función, como **"boton"** o **"encabezado"**.

2. Element **(Elemento)**: Son partes de un **bloque** que no tienen sentido o uso fuera de ese bloque. Los elementos se nombran utilizando el **nombre del bloque** seguido de dos guiones bajos y el nombre del elemento, como **"boton__icono"** dentro del bloque **"boton"**.

3. Modifier **(Modificador)**: Son variantes o **estados** de un bloque o elemento. Los modificadores se nombran con el nombre del bloque o elemento seguido de **dos guiones bajos** y el nombre del modificador, como **"boton--grande"** para un botón más grande.

## Ventajas

1. **Legibilidad y mantenibilidad**: BEM promueve un enfoque claro y estructurado para nombrar clases, lo que hace que el código CSS sea más legible y más fácil de mantener, especialmente en proyectos grandes.

1. **Modularidad**: BEM fomenta la creación de componentes independientes y reutilizables, lo que facilita la reutilización de estilos en diferentes partes del sitio web.

2. **Escalabilidad**: Esta metodología es escalable y se adapta bien a proyectos de cualquier tamaño. Puedes aplicar BEM a pequeños elementos o componentes y también a grandes elementos.

3. **Evita conflictos de estilos**: Al usar nombres de clases únicos basados en bloques y elementos, se minimiza la posibilidad de conflictos de estilos en el sitio web.

4. **Facilita el trabajo en equipo**: BEM establece una convención clara para nombrar clases, lo que facilita la colaboración entre desarrolladores, ya que todos entienden la estructura de nomenclatura.

## Desventajas

1. **Nombres de clases largos**: Las clases BEM pueden resultar en nombres de clases más largos y verbosos, lo que podría aumentar el tamaño del archivo CSS.

2. **Aprendizaje inicial**: Para aquellos que no están familiarizados con BEM, puede tomar un tiempo aprender y acostumbrarse a esta metodología, lo que podría retrasar el inicio de un proyecto.

3. **Posible exceso de clases**: En algunos casos, especialmente en proyectos pequeños o simples, el uso de BEM puede parecer excesivo y poco práctico, ya que agrega capas de clases a elementos simples.

4. **Complejidad en casos especiales**: Algunas situaciones, como estilos condicionales basados en interacciones de usuario, pueden volverse más complejas de implementar con BEM, lo que podría requerir soluciones adicionales.

En general, la elección de utilizar la metodología BEM depende del **tipo de proyecto**, su **escala** y las **preferencias** del equipo de desarrollo. Puede ser especialmente beneficioso en proyectos **grandes** y **colaborativos**, pero en proyectos más pequeños o simples, se puede optar por enfoques de nomenclatura de clases más sencillos.

## Ejemplos:

## Ejemplo 1: Botón

Supongamos que deseas crear un botón con **BEM**:

* Block **(Bloque)**: `.boton` (representa el componente principal, el botón).
* Element **(Elemento)**: `.boton__texto` (parte del botón que contiene el texto).
* Modifier **(Modificador)**: `.boton--rojo` (un modificador para cambiar el color a rojo).

```html
<button class="boton boton--rojo">
  <span class="boton__texto">Click me</span>
</button>
```

En este ejemplo, hemos creado un botón con un texto y le hemos aplicado un modificador para cambiar su color a rojo. Esto hace que la estructura y los estilos sean más claros y mantenibles.

## Ejemplo 2: Encabezado

Para un encabezado con un logotipo y un menú con unos enlaces:

* Block **(Bloque)**: `.encabezado` (representa el componente del encabezado).
* Element **(Elemento)**: `.encabezado__logo` (el logotipo dentro del encabezado).
* Element **(Elemento)**: `.encabezado__menu` (el menú dentro del encabezado).
* Modifier **(Modificador)**: `.encabezado--fijo` (un modificador para un encabezado fijo en la parte superior de la página).
* Element **(Elemento)**: `encabezado__enlace` (el enlace dentro del menú).
* Modifier **(Modificador)**: `.encabezado__enlace--active` (un modificador para indicar que enlace esta activo)

```html
<header class="encabezado encabezado--fijo">
  <div class="encabezado__logo">
    <img src="logo.png" alt="Logo de la empresa">
  </div>
  <nav class="encabezado__menu">
    <ul>
      <li><a href="#" class="encabezado__enlace encabezado__enlace--active">Inicio</a></li>
      <li><a href="#" class="encabezado__enlace">Acerca de</a></li>
      <li><a href="#" class="encabezado__enlace">Contacto</a></li>
    </ul>
  </nav>
</header>
```

Aquí, hemos estructurado el encabezado con elementos y dos modificadores para indicar que se trata de un encabezado fijo y un enlace activo. Esto facilita la comprensión y el mantenimiento del código CSS.

## Conclusiones

En conclusión, la metodología BEM **(Block, Element, Modifier)** es una técnica efectiva para la organización y nomenclatura de clases en CSS, pero es mucho más que una simple metodología de nomenclatura de clases; es una poderosa herramienta que puede **transformar** la forma en que **desarrollamos** y **mantenemos** proyectos web. 

Al adoptar BEM, te embarcas en un viaje hacia la **organización**, la **reutilización** y la **claridad** en tu código CSS. Proporciona una **estructura sólida** que facilita la **colaboración** entre desarrolladores, **reduce conflictos** de estilos y hace que tus proyectos sean más **escalables**. A medida que te sumerges en el mundo de **BEM**, descubres que nombrar clases de manera **inteligente** es más que una práctica, es una filosofía que mejora la **eficiencia** y la **calidad** de tus desarrollos frontend.
