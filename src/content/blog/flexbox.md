---
title: FlexBox
slug: flexbox
date_published: 2016-07-11T02:41:11.000Z
date_updated: 2016-07-14T14:10:13.000Z
tags: css, css3, html, Html5, desarrollo, development, flex, flexbox
---

El día de hoy traigo un artículo con algunos ejemplos de cómo usar **flexbox de css3**, como ya lo saben o si no lo saben flexbox es un modo de diseño que permite colocar los elementos de una página para que se comporten de forma predecible cuando el diseño de la página debe acomodarse a diferentes tamaños de pantalla y diferentes dispositivos.

Bueno espero que sea de su ayuda vamos a ver un par de ejemplo y su comportamiento.

Primero que todo tengo 3 div con el modelo de caja vamos a ver como se ven sin tener flex.

![The Ghost Logo](/content/images/2016/07/flex_1.jpg)

Como pueden ver los div se acomodan uno debajo de otro porque por defecto tiene un **display block**, cabe destacar que los 3 div están dentro de un div con una clase container para que flex agregar flex tenemos que agregarle un **display: flex;** al padre de los div con clase caja en este caso en el div con clase container como lo vamos a ver.

![The Ghost Logo](/content/images/2016/07/flex_2.jpg)

Como podemos ver al agregar display flex los div se acomodan al ancho que tiene el padre que es container, si activamos el **justify-content: center;** veamos lo que sucede.

![The Ghost Logo](/content/images/2016/07/flex_3.jpg)

Vemos que los div se centraron al ancho de su padre, las posibles opciones que tenemos para esta propiedad son.

#### Valores de justify-content

    /* Pack flex items from the start */
    justify-content: flex-start;
    
    /* Pack items from the end */
    justify-content: flex-end;
    
    /* Pack items around the center */ 
    justify-content: center;
    
    /* Distribute items evenly
    The first item at the start, the last at the end */
    justify-content: space-between;
    
    /* Distribute items evenly
    Items have equal space around them */
    justify-content: space-around;
    
    /* Global values */
    justify-content: inherit;
    justify-content: initial;
    justify-content: unset;
    

Si activamos **flex-direction: column;** todas las cajas se acomodaran como si fueran de tipo block porque es por columna y la cambiamos a row volverá como lo teníamos anteriormente.

![The Ghost Logo](/content/images/2016/07/flex_4.jpg)

#### Valores de flex-direction

    /* The direction text is laid out in a line */
    flex-direction: row;
    
    /* Like <row>, but reversed */
    flex-direction: row-reverse;
    
    /* The direction in which lines of text are stacked */
    flex-direction: column;
    
    /* Like <column>, but reversed */
    flex-direction: column-reverse;
    
    /* Global values */
    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;
    

Si tenemos un ancho menor como un 40%  o 50% veamos lo que sucede.
![The Ghost Logo](/content/images/2016/07/flex_5.jpg)

Para solucionar esto y se acomoden de una mejor manera agregamos **flex-wrap: wrap;** nos va acomodar los div que pueda en ese ancho respetando el ancho de cada una de las cajas y si no puede acomodar el siguiente saltara hacia otra fila.
![The Ghost Logo](/content/images/2016/07/flex_6.jpg)

#### Valores de flex-wrap

flex-wrap: nowrap;

flex-wrap: wrap;

flex-wrap: wrap-reverse;

/* Global values */

flex-wrap: inherit;

flex-wrap: initial;

flex-wrap: unset;

Por último y no estoy diciendo que sea la última propiedad de flex solo para mí es la última porque es la que he usado hasta el momento pero existen otras como aplicar flex a sus propios hijos, bueno por ultimo le daremos un alto al container y agregaremos align-items: center; que nos sirve para acomodar elementos a lo alto.

![The Ghost Logo](/content/images/2016/07/flex_7.jpg)

#### Valores para align-items:

    /* Align to cross-start */
    align-items: flex-start;
    
    /* Align to cross-end */
    align-items: flex-end;
    
    /* Center items in the cross-axis */
    align-items: center;
    
    /* Align the items' baselines */
    align-items: baseline;
    
    /* Stretch the items to fit */
    align-items: stretch;
    
    /* Global values */
    align-items: inherit;
    align-items: initial;
    align-items: unset;
    

Bueno amigos como se pueden dar cuenta flex tiene un gran potencial para el desarrollo web pero tenemos que saber usarlo, como ya lo había dicho estos son solo unos ejemplos y algunas de sus propiedades existen unas mas y diferentes formas de usar todo su potencial, espero que sea de ayuda hasta la próxima.

Ejemplo:
[http://codepen.io/pen/?editors=0100](http://codepen.io/pen/?editors=0100)
