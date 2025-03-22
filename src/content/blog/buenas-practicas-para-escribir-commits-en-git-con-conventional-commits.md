---
title: "Buenas prácticas para escribir commits en Git con Conventional Commits"
publishedDate: "2025-03-21T10:29:10.000Z"
updatedDate: "2025-03-21T17:09:31.000Z"
pubDate: "2025-03-21T10:29:10.000Z"
description: "Aprende a usar Conventional Commits en Git para escribir mensajes claros, mantener un historial organizado, automatizar versiones y generar un CHANGELOG eficiente."
tags: ["Css", "Programación", "development", "webdeveloment", "desarrollo-web", "git", "commits", "front-end", "commit", "johnserrano", "johnserranodev", "husky"]
primaryTag: { name: 'Git', slug: 'git' }
excerpt: "Aprende a usar Conventional Commits en Git para escribir mensajes claros, mantener un historial organizado, automatizar versiones y generar un CHANGELOG eficiente."
canonicalURL: "https://johnserrano.co/blog/buenas-practicas-para-escribir-commits-en-git-con-conventional-commits"
draft: false
featureImage: "https://download.johnserrano.co/git-commits.webp"
---

Escribir buenos mensajes de commit es fundamental para mantener un **historial de cambios claro**, legible y fácil de entender. Un buen commit no solo documenta qué se cambió en el código, sino también el motivo detrás de ese cambio, lo que facilita la **colaboración** y el **mantenimiento del proyecto** a largo plazo.

Sin embargo, es común **encontrar problemas** cuando los commits se hacen sin una estructura definida. Algunos de estos problemas incluyen:

- **Mensajes ambiguos** o **genéricos**, como _"cambios en el código"_ o _"arreglado bug"_, que no explican qué se modificó ni por qué.

- **Historial difícil de leer**, con commits inconsistentes que dificultan rastrear la evolución del proyecto.

- **Dificultad para trabajar en equipo**, ya que otros desarrolladores no pueden entender rápidamente qué cambios se han hecho y cuál fue su propósito.

Para solucionar estos problemas, surge **Conventional Commits**, una especificación que define una estructura clara y consistente para escribir mensajes de commit. 

Con este estándar, cada commit sigue un **formato predefinido**, lo que mejora la comprensión del historial de cambios y facilita tareas como la generación automática de versiones y changelogs.

## Buenas prácticas al escribir un commit en Git

Para que un commit sea útil, debe ser **claro**, **conciso** y seguir un **formato consistente**. A continuación, algunas buenas prácticas para escribir commits efectivos en Git:

**1. Usa el verbo en imperativo**

Los mensajes de commit deben expresarse como instrucciones, no como descripciones en pasado. En lugar de _**"Added login validation"**_, usa **_"Add login validation"_**. Esto ayuda a mantener consistencia y claridad en el historial de cambios.

✅ Ejemplo correcto:

```shell
git commit -m "Fix login validation issue"
```

❌ Ejemplo incorrecto:

```shell
git commit -m "Fixed login validation issue"
```

**2. No uses punto final ni puntos suspensivos**

El mensaje del commit actúa como un título, por lo que no debe llevar puntuación al final. Los **puntos suspensivos** generan incertidumbre y pueden hacer que el mensaje pierda claridad.

✅ Ejemplo correcto:

```shell
git commit -m "Improve UI responsiveness"
```

❌ Ejemplo incorrecto:

```shell
git commit -m "Improve UI responsiveness..."
```

**3. Sé breve**: usa un máximo de **50 caracteres** en el mensaje principal

Si un commit necesita más contexto, agrégalo en la descripción, pero el título debe ser corto y preciso. Un mensaje largo suele indicar que el commit agrupa demasiados cambios.

✅ Ejemplo correcto:

```shell
git commit -m "Optimize database queries"
```

❌ Ejemplo incorrecto:

```shell
git commit -m "Optimize database queries and refactor caching system to improve performance"
```

**4. Agrega contexto en el cuerpo del commit si es necesario**

Cuando un cambio es complejo o necesita más explicación, es mejor dividir el commit en dos partes:

- El título (máximo 50 caracteres, como vimos antes).
- El cuerpo con una descripción más detallada del cambio y su motivo.

✅ Ejemplo correcto:

```shell
git commit -m "Refactor authentication logic"

Improves the security of the authentication module by replacing
deprecated methods and adding token expiration checks.
```

Esto facilita que otros desarrolladores entiendan el **"por qué"** del cambio.

Estas prácticas mejoran la legibilidad y organización del historial de cambios, facilitando el mantenimiento y la colaboración en el proyecto. Siguiendo estas reglas, escribir commits efectivos será mucho más fácil.

## Te invito a leer este artículo donde te explico las últimas novedades de Tailwind CSS 👇

[Tailwind CSS 4: Todas las novedades y cómo configurarlo paso a paso](https://johnserrano.co/blog/tailwind-css-4-novedades-y-configuracion)

## ¿Qué es Conventional Commits?

**Conventional Commits** es una especificación que establece una convención clara y estructurada para escribir mensajes de commit en Git. Su objetivo es hacer que el historial del repositorio **sea más legible**, tanto para los desarrolladores como para herramientas automatizadas.

Esta convención define un **conjunto de reglas que facilitan la comprensión de los cambios** en el código y permiten automatizar procesos como el versionado del proyecto, la generación de changelogs y la integración continua.

Conventional Commits está estrechamente relacionado con **Semantic Versioning (SemVer)**, un sistema que asigna versiones en función del impacto de los cambios en el código. 

Siguiendo esta convención, los commits pueden indicar si una modificación es una **nueva funcionalidad**, una corrección de errores o un cambio que rompe la compatibilidad con versiones anteriores.

> En resumen, adoptar **Conventional Commits** ayuda a mejorar la colaboración en equipos de desarrollo, optimiza la trazabilidad de cambios y permite que herramientas automatizadas gestionen mejor el ciclo de vida del software.

## ¿Qué es Semantic Versioning (SemVer)?

Semantic Versioning (SemVer) es un estándar utilizado para **asignar versiones a proyectos** de software de manera clara y predecible. Se basa en tres números separados por puntos:

```text
MAJOR.MINOR.PATCH

1.4.2
// 1 -> MAJOR
// 4 -> MINOR
// 2 -> PATCH
```

Por ejemplo, en la versión `2.12.7`:

- **MAJOR (2)**: Se incrementa cuando hay cambios que rompen la compatibilidad con versiones anteriores.

- **MINOR (12)**: Se incrementa cuando se agregan nuevas funcionalidades sin romper compatibilidad.

- **PATCH (7)**: Se incrementa cuando se corrigen errores sin afectar funcionalidades existentes.

También es común agregar etiquetas como alpha, beta, rc o next para indicar versiones en desarrollo.

**Ejemplo**:
Si una librería pasa de `1.4.2` a `2.0.0`, significa que ha habido un cambio importante que rompe compatibilidad.

## Estructura de un commit con Conventional Commits

Conventional Commits es un estándar que define cómo escribir mensajes de commit de forma estructurada. Su formato es:

```text
<tipo>(<scope opcional>): <descripción>

[cuerpo opcional]

[footer opcional]
```

## Tipos de commit más comunes:

**feat**: Se ha agregado una nueva funcionalidad (correlaciona con MINOR en SemVer).

**fix**: Se ha corregido un error (correlaciona con PATCH en SemVer).

**BREAKING CHANGE**: Indica un cambio que rompe compatibilidad (correlaciona con MAJOR en SemVer).

Otros tipos incluyen:

**docs**: Cambios en la documentación.

**style**: Cambios de formato o legibilidad sin afectar el código.

**refactor**: Modificaciones sin cambios en la funcionalidad.

**test**: Agrega o corrige pruebas.

**chore**: Tareas de mantenimiento sin cambios en la funcionalidad.

**build**: Cambios en la configuración de compilación.

## Scope en Conventional Commits

El scope es un campo opcional dentro del mensaje de commit que permite **indicar el área específica del proyecto** donde se realizaron los cambios. Su propósito es dar mayor claridad sobre el alcance de la modificación.

Este es especialmente útil en **monorepositorios** o en proyectos con múltiples módulos, ya que facilita la identificación rápida de qué parte del código se ha visto afectada.

```text
feat(backend): Add filter payments
fix(web): Fix space between element nav
```

## Descripción, cuerpo y nota al pie en Conventional Commits

La descripción debe ser breve, en imperativo y en tiempo presente, **sin mayúscula inicial** ni punto final.

El cuerpo es opcional y se usa para **agregar detalles adicionales** sobre el cambio. Debe seguir el mismo tono imperativo.

La nota al pie también es opcional y se usa principalmente para indicar **Breaking Changes**, aunque puede incluir otra información relevante.

Ejemplos en un monorepositorio multipaquete:

```text
feat(api): add endpoint to get statistics
fix(ui): fix margin in navigation button
```

Si bien lo mínimo recomendable es diferenciar entre **fix** y **feat**, seguir convenciones como las de Angular ayuda a estandarizar los commits y mejorar la colaboración dentro de los equipos.

## Ejemplo de commits con Conventional Commits:

Agregar una nueva funcionalidad:

```text
feat(auth): Add auth with JWT
```

Corregir un error:

```text
fix(login): Fix error valid user
```

Cambio que rompe compatibilidad:

```text
feat(api)!: change the response payload structure

BREAKING CHANGE: The API now returns a JSON object with a new format.
```
Ruptura de compatibilidad con `!`

Commit con cuerpo y notas al pie:

```text
fix(api): correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: John Serrano
Fixes #215
```

## ¿Por qué usar Conventional Commits?

- Establece un estándar en el formato de los commits para todo el equipo, facilitando la colaboración.

- Mantiene un historial del repositorio claro y estructurado.

- Permite la generación automática del CHANGELOG.

- Facilita el versionado automático del proyecto según SemVer.

- Mejora la comunicación de los cambios dentro del equipo y con colaboradores externos.

- Automatiza procesos de build, despliegue y publicación.

- Facilita la contribución de nuevos desarrolladores al proporcionar un historial de commits organizado.

## Herramientas para utilizar Conventional Commits

Existen diversas herramientas que facilitan la adopción de Conventional Commits en los proyectos, desde linters hasta automatización del versionado. A continuación, te presento algunas de las más útiles y populares:

**1. Commitlint + Husky**
Commitlint permite validar los mensajes de commit asegurando que sigan una convención establecida.

Husky ejecuta scripts antes de realizar ciertas acciones en el repositorio, como **verificar el formato del commit** o ejecutar pruebas antes de un push.

Instalación y configuración básica:

```shell
npm install --save-dev husky @commitlint/{config-conventional,cli}
npx husky install
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

(Puedes leer más detalles en [mi artículo sobre Husky](https://johnserrano.co/blog/husky-y-lint-staged-como-configurar-y-automatizar-pre-commit-hooks)).

**2. Conventional Changelog**
Automatiza la generación del CHANGELOG a partir del historial de commits semánticos.

Permite versionado automático siguiendo SemVer.

Instalación:

```sh
npm install --save-dev conventional-changelog-cli
```

Generar un changelog:

```sh
npx conventional-changelog -p angular -i CHANGELOG.md -s
```

**3. Semantic Release**
Automatiza completamente el flujo de publicación de versiones.

Analiza los commits y determina si se debe hacer un patch, minor o major release.

```sh
npm install --save-dev semantic-release
```

**4. Gitemoji**
Permite agregar emojis a los commits para hacerlos más visuales.

Estas herramientas te ayudarán a mantener un historial de commits claro y estructurado, facilitando la colaboración en el equipo y la automatización del versionado del proyecto.

## Conclusiones

Adoptar Conventional Commits mejora la claridad y consistencia del **historial del repositorio**, facilita la **automatización del versionado** y la generación de **changelogs**, y optimiza la colaboración en equipos de desarrollo. 

Con herramientas como **Commitlint**, **Husky**, Semantic Release y Conventional Changelog, es posible integrar esta convención de manera eficiente en cualquier proyecto. 

Implementarlas no solo mejora la documentación del código, sino que también agiliza los procesos de despliegue y mantenimiento. 

Gracias por leer. ❤️
