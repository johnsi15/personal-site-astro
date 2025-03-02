---
title: "Husky y Lint-Staged: Cómo configurar y automatizar pre-commit hooks para test, lint y formateo"
publishedDate: "2025-02-08T10:29:10.000Z"
updatedDate: "2025-02-08T17:09:31.000Z"
pubDate: "2025-02-08T10:29:10.000Z"
description: "Optimiza la calidad de tu código y agiliza tu flujo de trabajo integrando Husky y Lint-Staged. Aprende a configurar pre-commit hooks que ejecuten test, lint y formateo, garantizando altos estándares de desarrollo en cada commit."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "formateo", "frontend", "front-end", "lint", "software", "web", "johnserrano.co", "johnserrano", "pre-commit", "test", "hooks", "husky"]
primaryTag: { name: 'Husky', slug: 'husky' }
excerpt: "Optimiza la calidad de tu código y agiliza tu flujo de trabajo integrando Husky y Lint-Staged. Aprende a configurar pre-commit hooks que ejecuten test, lint y formateo, garantizando altos estándares de desarrollo en cada commit."
canonicalURL: "https://johnserrano.co/blog/husky-y-lint-staged-como-configurar-y-automatizar-pre-commit-hooks"
draft: false
featureImage: "https://download.johnserrano.co/husky.webp"
---

En el desarrollo de proyectos JavaScript, **mantener la consistencia del código y garantizar altos estándares** de calidad puede resultar un reto, especialmente en equipos con múltiples colaboradores. 

La integración de **herramientas de automatización** en el flujo de trabajo permite ejecutar de forma automática tareas esenciales como el **formateo**, el análisis de código **(lint)** y la ejecución de test antes de que se realicen **commits** o **push**. 

Este artículo explora en detalle cómo configurar **Husky** y **Lint-Staged** para reforzar la calidad del código en tus proyectos JavaScript.

## ¿Qué es Husky y Lint-Staged?

Husky es una solución nativa para gestionar **Git hooks**, es decir, scripts que se ejecutan automáticamente en determinados eventos de Git **(como antes de un commit o un push)**. Gracias a **Husky**, es posible asegurarse de que se cumplan una serie de comprobaciones y tareas esenciales antes de que los cambios se integren al repositorio.

Por otro lado, **Lint-Staged** es una herramienta que permite ejecutar comandos únicamente **sobre los archivos que han sido modificados** y se encuentran en estado **“staged”**. Esto resulta en un proceso mucho más eficiente, ya que se aplican los formateos y las validaciones únicamente en el conjunto reducido de archivos afectados, en lugar de analizar toda la base de código.

## ¿Por qué usar Husky y Lint-Staged?

Utilizar Husky y Lint-Staged aporta múltiples beneficios en el desarrollo de aplicaciones JavaScript:

- **Aseguramiento de la calidad**: Garantizan que el código cumpla con las normas de estilo y calidad mediante la ejecución automática de **linters**, **formateadores** y **pruebas unitarias**.

- **Prevención de errores**: Al interceptar el proceso de **commit** o **push**, se detectan y corrigen errores antes de que estos se integren a la base de código, evitando problemas en producción.

- **Optimización del flujo de trabajo**: Lint-Staged analiza únicamente los **archivos modificados**, lo que reduce considerablemente el tiempo de ejecución de las tareas de validación.

- **Uniformidad en el equipo**: Permiten que todos los colaboradores **sigan los mismos estándares**, asegurando la coherencia y mantenibilidad del código.

### Configurando Husky y Lint-Staged

A continuación, se detalla el proceso de configuración de **Husky** y **Lint-Staged** en un entorno **JavaScript**, integrando herramientas fundamentales como **Prettier**, **ESLint** y **Vitest**.

## Configurando el entorno

Imaginemos que estamos trabajando en un proyecto JavaScript en el que es imprescindible mantener un código limpio y sin errores. Para ello, configuraremos los siguientes scripts en el archivo `package.json`:

**Prettier como formateador**:
Se encargará de aplicar un formato consistente en todo el código.

`npm run format`

**ESLint como linter**:
Detecta errores y aplica buenas prácticas de codificación.

`npm run lint`

**Vitest como framework de pruebas**:
Valida que el código funcione según lo esperado mediante pruebas unitarias.

`npm run test`

Estos comandos se integrarán en nuestros **Git hooks** para que, antes de cada commit, se asegure que el código se formatea, se analiza y se prueba.

## Instalar Husky y configuración

Ejecuta el siguiente comando para instalar Husky como dependencia de desarrollo:

`npm install --save-dev husky`

Inicializa Husky en tu repositorio (recuerda que debes haber inicializado previamente Git en el proyecto):

`npx husky init`

Este comando añade automáticamente un script de preparación en el `package.json` y crea una carpeta `.husky` en la raíz del proyecto que contendrá, entre otros, el hook pre-commit.

**Configuración del hook pre-commit**:
Edita el archivo `.husky/pre-commit` para incluir los comandos necesarios. Por ejemplo:

```bash
npm run format
npm run lint
npm run test
```

Con esta configuración, cada vez que realices un **commit**, Husky ejecutará estos comandos. Si alguno de ellos falla, se detendrá el proceso de commit, permitiéndote corregir los errores antes de proceder.

## Instalar Lint-Staged y configuración

Añade Lint-Staged como dependencia de desarrollo:

`npm install --save-dev lint-staged`

Agrega el siguiente script en tu archivo `package.json` para facilitar la ejecución de Lint-Staged:

```json
"scripts": {
  "lint-staged": "lint-staged"
}
```

Crea un archivo llamado `.lintstagedrc.json` en la raíz del proyecto y define los comandos a ejecutar para los archivos modificados. Por ejemplo:

```json
{
  "*.{css,scss}": ["npx prettier . --write"],
  "*.{js,jsx,ts,tsx}": [
    "npx prettier . --write",
    "eslint --fix",
    "vitest run --environment=jsdom"
  ]
}
```

Con esta configuración, **Lint-Staged** aplicará **Prettier**, **ESLint** y **Vitest** únicamente en los archivos JavaScript (y sus variantes) que hayan sido modificados y añadidos al **área de staging**.

Para aprovechar Lint-Staged en el **hook pre-commit**, modifica el archivo `.husky/pre-commit` para que ejecute el script de Lint-Staged en lugar de correr los comandos de forma individual:

```
npm run lint-staged
```

De esta forma, el proceso de validación se optimiza al centrarse únicamente en los cambios realizados, ahorrando tiempo y recursos.

## ¿Quieres ir un paso más allá?

Si estás interesado en potenciar tu carrera como **desarrollador frontend** o desarrollador Web, te recomiendo leer este artículo:

**[Cómo iniciar y crecer como desarrollador frontend en 2025](https://johnserrano.co/blog/como-iniciar-y-crecer-como-desarrollador-frontend-en-2025)**

En él encontrarás **consejos prácticos**, **recursos** y estrategias para comenzar y avanzar en el mundo del desarrollo frontend.

## Ejemplo práctico con la configuración lista

A continuación, te dejo un ejemplo en el que se añade un cambio al área de staging, permitiéndonos observar de manera detallada la ejecución paso a paso de cada una de las reglas configuradas.

```bash
git add -A && git commit -am "Add test tutorial"

> catalitico-one-page@0.0.0 lint-staged
> lint-staged

✔ Preparing lint-staged...
⚠ Running tasks for staged files...
  ❯ .lintstagedrc.json — 1 file
    ↓ *.{css,scss} — no files
    ❯ *.{js,ts,tsx,vue} — 1 file
      ✔ npx prettier . --write
      ✖ eslint --fix [FAILED]
↓ Skipped because of errors from tasks.
✔ Reverting to original state because of errors...
✔ Cleaning up temporary files...

✖ eslint --fix:

/home/andrey/Xuma/catalitico-one-page/src/components/utils/Reveal.tsx
  10:7  error  'a' is assigned a value but never used  @typescript-eslint/no-unused-vars

✖ 1 problem (1 error, 0 warnings)

husky - pre-commit script failed (code 1)
```

Al ejecutar `git add -A && git commit -am "Add test tutorial"`, Husky activa el **hook pre-commit**.

**Lint-Staged** inicia y procesa únicamente los archivos que han sido modificados. En este caso, el proceso intenta:

Formatear el archivo con Prettier `(npx prettier . --write)`, lo cual se realiza correctamente.

Ejecutar **ESLint** con la opción de corrección automática `(eslint --fix)`, pero se detecta un error en el archivo Reveal.tsx _(una variable asignada que no se utiliza)_.

Debido a este error, se detiene la ejecución de las tareas, se **revierte el estado de los archivos modificados** y se cancela el commit.

## Conclusiones

La integración de **Husky** y **Lint-Staged** en un proyecto JavaScript es una estrategia altamente eficaz para garantizar la calidad y consistencia del código. 

Al automatizar tareas fundamentales como el **formateo**, el **análisis estático** y la ejecución de **pruebas**, estas herramientas permiten detectar errores de manera temprana y aseguran que el código que se integra al repositorio **cumpla con los estándares** establecidos.

Aunque la configuración inicial pueda parecer compleja, los beneficios a largo plazo como **la reducción de errores**, un proceso de desarrollo **más ágil** y una **mayor uniformidad** en el equipo justifican ampliamente la inversión de tiempo y esfuerzo. 

La implementación de Husky y Lint-Staged no solo **mejora la calidad del producto final**, sino que también fomenta las **buenas prácticas** y **optimiza el flujo de trabajo**, permitiéndote concentrar esfuerzos en la creación de soluciones robustas y escalables en JavaScript.

Espero que esta guía te resulte de utilidad y te anime a incorporar estas prácticas en tus proyectos. ¡Éxito en tus desarrollos!

Gracias por leer. ❤️