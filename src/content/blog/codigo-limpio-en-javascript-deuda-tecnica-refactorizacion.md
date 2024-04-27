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
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1697643034/John%20Serrano/Blog%20Post/codigo-limpio-en-javascript-deuda-tecnica-refactorizacion/k69ul2yssn9t83xwirqm.webp"
---

## ¿Qué es Clean Code (Código Limpio)?

El **código limpio** es aquel que se ha escrito con la intensión de que otra persona lo **entienda**, es un concepto en el desarrollo de software que se refiere a escribir código fuente de programación que sea **fácil de leer**, **entender** y **mantener**. Un código limpio es un código que sigue **buenas prácticas** de programación y está escrito de manera que sea **eficiente**, **legible** y **libre de ambigüedades**. 

El término fue popularizado por el autor Robert C. Martin en su libro "Clean Code: A Handbook of Agile Software Craftsmanship.", de hecho el fue el que acuño el termino SOLID (el no invento estos principios, solo dio el nombre), para las reglas "universales" que se tienen que seguir al escribir una buena arquitectura de software. Sin embargo, la mayoría de sus libros están enfocados en POO.

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
Las reglas del diseño simple son un conjunto de **principios** y **pautas** que los desarrolladores de software siguen para crear sistemas y programas informáticos que sean **efectivos**, **mantenibles** y **fáciles de entender**. Estas reglas ayudan a mantener la simplicidad en el diseño, lo que a su vez **mejora la calidad y la eficiencia del código**.

4 reglas del diseño simple:

1. **El código pasa correctamente los test.**
2. **Revela la intención del diseño.** El código debe autoexplicarse.
3. **Respeta el principio DRY: “don’t repeat yourself”**, no repitas código.
4. **Tiene el menor número posible de elementos.** 1 función = 1 acción.

## Reglas para la nomenclatura
Las reglas para la nomenclatura, también conocidas como **convenciones** de nomenclatura, son pautas que los desarrolladores siguen al nombrar variables, funciones, clases y otros elementos en su código. Estas reglas se utilizan para hacer que el código sea más **legible** y **comprensible**, lo que facilita la colaboración y el mantenimiento del software.

1. **Nombres pronunciables y expresivos.** Preferentemente en inglés usando camelCase🐫, evitando guiones - o _ y abreviaturas.
2. **Nombres sin información técnica.** Evitar nombres con relación a la tecnología (tipo de datos, clases, etc). Ej. “arrayNames” --> “namesList”
3. **Usar lenguaje ubicuo** (*ubiqueé???*): aquel que se construye a partir del lenguaje que usan los expertos, es decir: **crear un lenguaje en común para desarrolladores e interesados, determinando palabras de uso común**.

```js
// No recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Recomendado
const currentDate = moment().format("YYYY/MM/DD");

// No recomendado
let arrayNames = ["Alex", " Mariana", "Cande"];

// Recomendado
let namesList = ["Alex", " Mariana", "Cande"];


// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser();
```

## Cómo nombrar según el tipo de dato
- **Arrays**: Plural.
- **Booleanos**: Con prefijos “is”, “has” y “can”. (“es verdadero”, “tiene/contiene x”, “puede hacer x”).
- **Números**: Con prefijos “min”, “max” y “total”.
- **Funciones**: Verbo + sustantivo/s (ya que son acciones).
    - …de Acceso: get + sustantivo
    - …de Modificación: set + sustantivo;
    - …de Predicado: is + sustantivo;
- **Clases**: Sustantivos (no genéricos).

```js
// No recomendado arrys:
const user = ["Alex", "Mariana", "Jessica"];

// Recomendado Arrays: 
const users = ["Alex", "Mariana", "Jessica"];
const userNames = ["Alex", "Mariana", "Jessica"]; // La más recomendada

// No recomendado booleans:
const valid = true;
const color = true;
const read = false;

// Recomendado Booleanos:
const isValid = true;
const hasColor = true;
const canRead = false;

// No recomendado numbers:
const users = 15;

// Recomedado Números:
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

// No recomendado functions:
createUserIfNotExist();

// Recomendado Funciones:
createUser();
updateUser();
sendEmail();

// Acceso:
getUser();
// Modificación:
setUser()
// Predicado:
isValidUser();

// No recomendado class:
class Data {}
class Manager {}
class Info {}

// Recomendado Clases:
class User {}
class UserProfile {}
class Account {}
```

## Parámetros y argumentos
- **Argumentos:** Se utilizan en las **llamadas** de la función para ejecutarla.
    - Se recomiendan max. 3 argumentos por función.
- **Parámetros:** Se utilizan en la **función** para trabajar con elementos externos.

```js
// Parámetro: number
function getDouble (number) {
  return number * 2;
}

// Argumento: 10
getDouble(10);
```

Se pueden establecer **parámetros default** que ayudan a mantener la integridad del código. Aunque no hay que abusar de su uso! **podemos definir como máximo 3 parámetros** como buena practica.

```js
// Parámetro por default:
function greet(person = 'extraño') {
  console.log("Hola " + person);
}

greet("John"); // "Hola John"
greet(); // "Hola extraño"

// Rest Operator:
function add(x, y, ...args) {
  console.log(args);
}
```
Hay que tener cuidado con los parámetros default ya que solo tienen en cuenta si el valor es `undefined` se asigna el value default, ejemplo:

```js
function greet (name = 'Andrey') {
  console.log(`Hello ${name}`)
}

greet() // "Hello Andrey"
greet('John') // "Hello John"
greet(undefined) // "Hello Andrey"
greet('') // "Hello "
greet(false) // "Hello false"
greet(null) // "Hello null"

// Posible solución
function greet (name = 'Andrey') {
  if (name) {
    console.log(`Hello ${name}`)
  }
}

greet() // "Hello Andrey"
greet('John') // "Hello John"
greet(undefined) // "Hello Andrey"

// como el valor es "false" no se ejecuta el console.log()
greet('')
greet(false)
greet(null)
```

- **Rest Operator:**
  - Si se usa como parámetro, permite tener en cuenta parámetros adicionales y poder utilizarlos (y debe ser el último parámetro!)
  - Si se usa como argumento, expande los elementos de un array/objeto.

```js
// Operador Rest como Parámetro de Función
function sumar(...numeros) {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

console.log(sumar(2, 4, 6, 8)); // Salida: 20

// Operador Rest como Argumento para Expandir Elementos
const numbersA = [1, 2, 3];
const clonedNumbers = [...numbersA];
console.log(clonedNumbers) // [1, 2, 3]

const numbersB = [4, 6, 8]
const totalNumbers = [...numbersA, ...numbersB];
console.log(totalNumbers);

```

## Herencia en JavaScript
La herencia en JavaScript es un concepto fundamental en la **programación orientada a objetos (POO)**. Permite que los objetos compartan **propiedades** y **métodos de otros objetos**, lo que facilita la reutilización de código y la creación de relaciones entre las clases. En JavaScript, la herencia se implementa a través del **sistema de prototipos** en lugar de clases, como se ve en lenguajes orientados a objetos más tradicionales.

## Sintaxis a partir de ES6, para herencia:

- constructor
- extends
- super()

```js
// Clase padre
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}

// Clase hija
class Developer extends Person {
  constructor(name) {
    super(name);
  }

  writeCode(coffee) {
    coffee ? console.log("Estoy desarrollando una nueva feature") : console.log("Necesito más café...")
  }
}

const developer = new Developer('Alex');
developer.greet(); // <-- método heredado.
developer.writeCode();
developer.writeCode(true);
```
- Recuerda que al usar Clases tenemos la habilidad de generar herencia
- Desde el EMAC6 podemos usar la palabra reservada `extends` para crear herencias
- Anteriormente se usaba `prototype` para generar herencia

El principio de "tamaño reducido" y el principio de "responsabilidad única" son dos conceptos importantes en el desarrollo de software que se relacionan entre sí. Juntos, fomentan la creación de **componentes de software que sean pequeños**, enfocados y cumplan **una sola responsabilidad**. Aquí te explico en qué consisten ambos conceptos:

1. **Tamaño Reducido (Small)**: Este principio sugiere que los componentes de software, como funciones, clases o módulos, deben ser pequeños y hacer una sola cosa de manera efectiva. No deben ser abrumadoramente largos ni abarcar múltiples responsabilidades. Esto hace que el código sea más legible, mantenible y fácil de entender. Los componentes pequeños también son más fáciles de probar y reutilizar.

2. **Responsabilidad Única (Single Responsibility)**: Este principio, parte del conjunto de principios SOLID de diseño de software, establece que una clase o módulo debe tener una única razón para cambiar. En otras palabras, una clase o función debe cumplir una sola responsabilidad bien definida. Esto promueve la cohesión en el código, lo que significa que las partes relacionadas del código deben estar juntas y no mezcladas con funcionalidades no relacionadas.
   

**1 clase = 1 funcionalidad**

```js
// Sín princiopio de responsabilidad única
class UserSetting {
  constructor(user, settings) {
    this.user = user;
    this.settings = settings;
  }

  changeSetting(settings) {
    if (this.verifyCredencials()) {

    }
  }

  verifyCredencials() { }
}

// Con princiopio de responsabilidad única
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredencials() {
    return true;
  }
}

class UserSetting extends UserAuth {
  constructor(user, settings) {
    super(user)
    this.settings = settings;
  }

  changeSetting(settings) {
    if (this.verifyCredencials()) {
      console.log(`Puede modificar su configuración`);
    } else {
      console.log(`No tiene acceso.`);
    }
  }
}

const newAccess = new UserSetting('Alex', 'Dark Mode');
newAccess.changeSetting();
```

## Cuándo usar comentarios
- El comentario no debe explicar:
    - ❌ El ¿Qué? ⇒ porque el código debe ser Autodescriptivo
    - ❌ El ¿Cómo? ⇒ el código debe ser Autoexplicativo
    - ✅ Sino el ¿Por qué? // Comentar explicando los Criterios, aportando valor

> “No comentes código mal escrito, reescríbelo.”Brian Kernighan

- Si bien, al usar correctamente la nomenclatura, el ordenamiento de nuestras variables, funciones y clases y **respetar el principio de responsabilidad única**, va a hacer que nuestro código sea mucho más fácil de entender, no significa que se deba dejar de añadir comentarios. Por ejemplo, añadir un **comentario sobre alguna librería externa** que se haya utilizado.

Comentarios Válidos:
```js
// Calculamos el promedio de los elementos en el array.
let promedio = suma / cantidadElementos;

// Usamos un bucle for en lugar de forEach debido a la necesidad de un índice.
for (let i = 0; i < array.length; i++) {
  // Código de bucle aquí...
}

```

Comentarios no válidos:
```js
// Incrementamos la variable en 1.
contador++;

// Aquí estamos declarando una variable.
let x = 10;

// Esta función aún no funciona correctamente.
function funcionIncompleta() {
  // Código inacabado...
}
```

## Formato coherente (codear en equipos)
El formato coherente es esencial cuando se trabaja en equipos de desarrollo de software. Un formato coherente facilita la colaboración y garantiza que todos los miembros del equipo puedan entender y trabajar en el código de manera eficiente. Aquí hay algunas prácticas y pautas para lograr un formato coherente cuando se programa en equipo:

1. **Adherirse a las Convenciones de Codificación**: Define y establece convenciones de codificación para tu equipo. Esto incluye reglas sobre la nomenclatura (como CamelCase o snake_case), el estilo de sangrado, el uso de espacios o tabulaciones, y otros aspectos del formato del código. Asegúrate de que todos los miembros del equipo sigan estas convenciones.

1. **Utilizar un Linter**: Un linter es una herramienta que puede automatizar la revisión del código en busca de problemas de formato y estilo. Configura un linter como ESLint para que verifique automáticamente el código en busca de errores y estilo. Personaliza las reglas del linter para que coincidan con las convenciones de tu equipo.

1. **EditorConfig**: Utiliza un archivo .editorconfig para definir y compartir las configuraciones del editor de código entre los miembros del equipo. Esto garantiza que todos utilicen la misma configuración de sangrado, tabulación y codificación.

1. **Revisión de Código**: Realiza revisiones de código regulares en equipo. Durante estas revisiones, asegúrate de que el código siga las convenciones y pautas del equipo. Discute cualquier problema de formato o estilo y proporciona retroalimentación constructiva.

1. **Automatización**: Utiliza herramientas de automatización como sistemas de integración continua (CI) para ejecutar pruebas y análisis de código automáticamente. Esto garantiza que el código cumple con los estándares establecidos antes de que se fusionen los cambios en el repositorio.

## Principio DRY - Don’t repeat yourself
El principio DRY, que significa "Don't Repeat Yourself" **(en español, "No te repitas")**, es uno de los principios fundamentales en el desarrollo de software. Fue formulado por Andy Hunt y Dave Thomas en su libro "The Pragmatic Programmer" y aboga por la eliminación de la duplicación de código en un sistema de software. El principio DRY se puede resumir de la siguiente manera:

**"Cada pieza de conocimiento o lógica debe tener una representación única, no redundante y autoritativa en el sistema."**

```js
// Obtener un promedio
// Ejemplo de código que se repite
const juanAverage = (90 + 50 + 70) / 3;
const alexAverage = (80 + 90 + 70 + 80) / 4;
const candeAverage = (40 + 100) / 2;

console.log(juanAverage, alexAverage, candeAverage);

// Solución del código anterior para ser reutilizado
function getAverage(...grades) {
	return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const juanAverage2 = getAverage(90,50, 70);
const alexAverage2 = getAverage(80, 90, 70, 80);
const candeAverage2 = getAverage(40, 100);

console.log(juanAverage2, alexAverage2, candeAverage2);
```

En resumen, el concepto de "Clean Code" (Código Limpio) es esencial en el desarrollo de software, ya que promueve la escritura de código de alta calidad, legible y mantenible.

1. **Legibilidad es Fundamental**: El código limpio es legible, lo que significa que otros desarrolladores pueden entenderlo fácilmente. Esto es esencial para la colaboración en equipos y para facilitar el mantenimiento del software.

1. **Menos Es Más**: El código limpio se centra en la simplicidad y en hacer lo mínimo necesario para lograr una funcionalidad. Evita la complejidad innecesaria y la duplicación de código.

1. **Nomenclatura Significativa**: El uso de nombres descriptivos para variables, funciones, clases y otros elementos del código es esencial. La nomenclatura debe reflejar claramente su propósito y función.

1. **Siga las Convenciones**: Es importante seguir convenciones de codificación y mantener un formato coherente. Utiliza un linter y un formateador de código para ayudar a mantener el estilo del código.

1. **Comentarios Estratégicos**: Los comentarios deben utilizarse con moderación y proporcionar información útil, como explicar el "porqué" de una decisión en lugar del "qué" hace el código.

1. **Refactorización Constante**: Mantener el código limpio implica la refactorización continua para eliminar duplicación, mejorar la estructura y eliminar código innecesario.

1. **Cumplir Principios Sólidos**: Los principios SOLID, como el principio de responsabilidad única y el principio de no repetición, son fundamentales para mantener el código limpio y modular.

1. **Testeo Riguroso**: Las pruebas unitarias son esenciales para garantizar que el código funcione como se espera y para mantener la integridad del software.

1. **Documentación de Estilo**: Proporcionar guías de estilo de código y documentación de buenas prácticas de desarrollo es útil para asegurar que todos los miembros del equipo sigan las mismas normas.

1. **Cultura de Mejora Continua**: Fomentar una cultura de mejora continua en el equipo de desarrollo es fundamental para mantener el código limpio. Esto implica la educación constante sobre las mejores prácticas y la búsqueda de formas de mejorar el código existente.

En última instancia, el código limpio no solo beneficia a los desarrolladores, sino que también mejora la eficiencia, la calidad y la confiabilidad del software en general. Además, facilita la colaboración y la gestión del ciclo de vida del software. 