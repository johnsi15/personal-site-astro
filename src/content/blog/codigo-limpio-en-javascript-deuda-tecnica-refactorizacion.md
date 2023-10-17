---
title: "Código Limpio en JavaScript, deuda técnica y refactorización"
publishedDate: "2023-10-17T16:29:10.000Z"
updatedDate: "2023-10-17T17:09:31.000Z"
pubDate: "2023-10-17T16:29:10.000Z"
description: "Aprende cómo el Código Limpio en JavaScript puede impulsar la calidad de tu desarrollo web. Explora estrategias para abordar la Deuda Técnica y mejorar la mantenibilidad a través de la Refactorización. Descubre prácticas esenciales para optimizar tu código y garantizar un rendimiento óptimo en proyectos web."
tags: ["JavaScript", "Programación", "development", "webdeveloment", "desarrollo-web", "clean-code", "frontend", "front-end", "deuda-tecnica", "refactorizacion"]
primaryTag: { name: 'JavaScript', slug: 'javascript' }
excerpt: "Aprende cómo el Código Limpio en JavaScript puede impulsar la calidad de tu desarrollo web. Explora estrategias para abordar la Deuda Técnica y mejorar la mantenibilidad a través de la Refactorización. Descubre prácticas esenciales para optimizar tu código y garantizar un rendimiento óptimo en proyectos web."
canonicalURL: "https://johnserrano.co/blog/codigo-limpio-en-javascript-deuda-tecnica-refactorizacion"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1694898177/John%20Serrano/Blog%20Post/bem-una-manera-de-nombrar-clases-en-css-de-forma-inteligente/base-portada_sfn7zg.webp"
---

## ¿Qué es Clean Code (Código Limpio)?

El **código limpio** es aquel que se ha escrito con la intensión de que otra persona lo **entienda**, es un concepto en el desarrollo de software que se refiere a escribir código fuente de programación que sea **fácil de leer**, **entender** y **mantener**. Un código limpio es un código que sigue **buenas prácticas** de programación y está escrito de manera que sea **eficiente**, **legible** y **libre de ambigüedades**. El término fue popularizado por el autor Robert C. Martin en su libro "Clean Code: A Handbook of Agile Software Craftsmanship.", de hecho el fue el que acuño el termino SOLID (el no invento estos principios, solo dio el nombre), para las reglas "universales" que se tienen que seguir al escribir una buena arquitectura de software. Sin embargo, la mayoría de sus libros están enfocados en POO.

En el caso de **JavaScript**, al ser un lenguaje de programación que esta enfocado en funciones y que tiene **"first-class functions"**, muchas veces las autoproclamadas **"reglas universales"** de programación como **SOLID**, no aplican. Ya que JavaScript nos permite ejercer otros patrones de diseño que en la mayoria de los lenguajes no se pueden hacer. Esto es, debido al feature de "first-class functions" **(Funciones de primera clase)** que nos proporciona JavaScript.

Volviendo al código limpio tenemos las principales características:

1. **Legibilidad**: El código limpio utiliza nombres descriptivos para variables, funciones y clases, de modo que cualquier desarrollador pueda entender su propósito sin esfuerzo.

2. **Mantenibilidad**: Un código limpio es fácil de mantener y extender. Cambiar o agregar funcionalidad no debería requerir grandes esfuerzos de reescritura.

3. **Eficiencia**: El código limpio busca la eficiencia en términos de rendimiento y uso de recursos.

4. **Consistencia**: Sigue un estilo de codificación uniforme y coherente en todo el proyecto.

5. **Documentación**: Utiliza comentarios cuando sea necesario para aclarar partes complejas del código, pero no excesivamente.

6. **Testeabilidad**: Se presta a la creación de pruebas unitarias para garantizar la calidad y la corrección del software.

La importancia del código limpio radica en que facilita la **colaboración** entre desarrolladores, permite una **depuración** más sencilla de **errores**, reduce **la deuda técnica** y, en última instancia, mejora la **calidad del software**. Los principios del código limpio son aplicables a múltiples lenguajes de programación, incluido JavaScript, y son esenciales para cualquier desarrollador que busque escribir software de alta calidad y sostenible.

## Deuda técnica y refactorización de código

Deuda Técnica es un término en el desarrollo de software que se refiere a la acumulación de **problemas técnicos** o áreas de código que requieren mejoras. Estos problemas a menudo surgen cuando los desarrolladores toman **atajos** o toman **decisiones subóptimas** durante el desarrollo para cumplir con plazos ajustados.

Nuestro código debe ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito.

Tipos de deuda técnica:

- **Imprudente y deliberada**:
  En este caso, la deuda técnica se acumula de manera intencional y consciente. Los desarrolladores y el equipo de desarrollo toman decisiones arriesgadas, como saltarse las mejores prácticas o evitar la refactorización para cumplir con plazos ajustados. Aunque puede ser una estrategia temporal para cumplir con los plazos, puede resultar en problemas técnicos significativos a largo plazo. Es una deuda técnica generada de manera deliberada y consciente.
- **Imprudente e inadvertida**:
  Esta es la forma más peligrosa de deuda técnica. Se acumula cuando los desarrolladores toman decisiones arriesgadas o escriben código de baja calidad debido a la falta de conocimiento o comprensión de las mejores prácticas. A menudo, los desarrolladores pueden no ser conscientes de que están generando deuda técnica.
- **Prudente y deliberada**:
  En este escenario, el equipo de desarrollo toma decisiones conscientes de generar deuda técnica, pero lo hace de manera cuidadosa y con pleno conocimiento de las implicaciones. Puede ocurrir cuando se necesita lanzar rápidamente una característica para obtener retroalimentación del usuario o cumplir con un plazo inminente. 
- **Prudente e inadvertida**:
  En este caso, la deuda técnica se acumula de manera inadvertida a pesar de que el equipo de desarrollo sigue las mejores prácticas y es diligente en su trabajo. Puede ocurrir debido a cambios inesperados en los requisitos del proyecto, problemas no anticipados o cambios en la tecnología.

## ¿Cómo pagar las deudas?
**Refactorizando el código**, esto es mejorar el código sin alterar su comportamiento para que sea mas entendible y tolerante a cambios. Y es importante que el código tenga **tests** (units o integration tests) automáticos que validen el comportamiento del código.

Refactorización es la práctica de **mejorar la estructura** y el diseño del código sin cambiar su comportamiento externo. Se trata de **reescribir el código existente** para hacerlo más **limpio**, **legible** y **mantenible**. La refactorización se utiliza para abordar **la deuda técnica** y mejorar la calidad del software. Algunos objetivos comunes de la refactorización incluyen eliminar **duplicación** de código, **simplificar funciones** complejas, mejorar la nomenclatura y reducir la **complejidad** del código.

La refactorización puede ayudar a reducir la deuda técnica al abordar problemas en el código existente de manera gradual. Algunos beneficios de la refactorización incluyen:

1. **Mantenibilidad**: El código refactorizado es más fácil de mantener y extender.

1. **Claridad**: Hace que el código sea más claro y legible.

1. **Rendimiento**: Puede mejorar el rendimiento del software al eliminar ineficiencias.

1. **Calidad**: Ayuda a garantizar que el código cumple con estándares de calidad y buenas prácticas.

1. **Reducción de errores**: La refactorización puede ayudar a eliminar errores y vulnerabilidades de seguridad.

1. **Facilita el trabajo en equipo**: Un código limpio y bien refactorizado es más fácil de comprender y colaborar en equipos de desarrollo.

## ¿Cuándo refactorizar?
Cuando hay código de **baja calidad** (duplicación de código, funciones con mas de una acción) o se detecta cualquier otro tipo de code smell (**código duplicado**, métodos o **clases demasiado grandes** y complejos, falta de cohesión entre diferentes partes del código, **uso excesivo de condicionales** y **bucles anidados**, por ej.)

## Reglas del diseño simple