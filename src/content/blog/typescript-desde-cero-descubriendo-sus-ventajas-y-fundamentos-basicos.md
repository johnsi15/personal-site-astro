---
title: "TypeScript desde Cero Descubriendo sus Ventajas y Fundamentos Básicos"
publishedDate: "2023-08-18T16:29:10.000Z"
updatedDate: "2023-08-18T17:09:31.000Z"
pubDate: "2023-08-18T16:29:10.000Z"
description: "Explora los fundamentos y ventajas de TypeScript, un lenguaje de programación que potencia el desarrollo con tipos estáticos. Aprende cómo usarlo para un código más sólido y mejora tus habilidades."
tags: ["TypeScript", "Programación", "development", "webdeveloment", "desarrollo-web", "Tipos-estaticos", "Ventajas-de-TypeScript", "Inferencia-de-tipos"]
primaryTag: { name: 'TypeScript', slug: 'typescript' }
excerpt: "Explora los fundamentos y ventajas de TypeScript, un lenguaje de programación que potencia el desarrollo con tipos estáticos. Aprende cómo usarlo para un código más sólido y mejora tus habilidades."
canonicalURL: "https://johnserrano.co/blog/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1692387795/John%20Serrano/Blog%20Post/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos/typescript_mort2b.webp"
---

## ¿Qué es TypeScript?
TypeScript es un lenguaje de programación desarrollado por Microsoft que es un **superset** de JavaScript. Significa que **TypeScript** extiende y mejora JavaScript al agregar características adicionales, siendo la más destacada la **tipificación estática**. En TypeScript, puedes definir **tipos** de datos para variables, parámetros de función, propiedades de objetos, entre otros elementos del código.

## ¿Por qué aprenderlo?

Aprender TypeScript es beneficioso por varias razones. En primer lugar, TypeScript proporciona un sistema de **tipos estático** que ayuda a detectar errores en el código durante la fase de desarrollo. Esto permite encontrar y corregir errores más temprano, lo que resulta en un **código más robusto** y menos propenso a errores en tiempo de ejecución.

## 🎥 TypeScript desde CERO 👇

<iframe width="560" height="315" src="https://www.youtube.com/embed/1DWtpeW68dU?si=Mi0hBtVciyN--WOF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen loading="lazy"></iframe>

## Ventajas de aprender TypeScript

Una de las ventajas de TypeScript es que mejora la capacidad de mantenimiento del código a medida que el proyecto crece en tamaño y complejidad. Al tener **tipos definidos** de manera explícita, el código se vuelve más legible y comprensible, lo que facilita la colaboración en equipos de desarrollo y la comprensión del código existente.

Además, TypeScript ofrece características adicionales, como la **inferencia de tipos**, que permite que el **compilador infiera** los tipos en función del contexto. Esto reduce la necesidad de escribir tipos de manera explícita en todas partes y agiliza el desarrollo.

Otra ventaja de TypeScript es su compatibilidad con el ecosistema de JavaScript. Puedes utilizar **bibliotecas y frameworks de JavaScript** existentes en un proyecto de TypeScript sin problemas. Además, TypeScript se compila a JavaScript estándar, lo que significa que puede ejecutarse en cualquier entorno que admita JavaScript.

En resumen, aprender **TypeScript** te brinda la ventaja de tener un código más seguro y robusto, una mejor capacidad de mantenimiento, una mayor **legibilidad y compatibilidad** con el ecosistema de JavaScript. Estas ventajas hacen de TypeScript una opción popular para el desarrollo de aplicaciones web y proyectos de gran escala.

## Tipos de datos primitivos en TypeScript

```ts
// Números
let edad: number = 25;
let distancia: number = 10.5;

// Cadenas de texto
let nombre: string = "Juan";
let mensaje: string = "Hola, TypeScript";

// Booleanos
let esActivo: boolean = true;
let estaInactivo: boolean = false;

// Valores nulos y indefinidos
let nulo: null = null;
let indefinido: undefined = undefined;

// Símbolo
let simbolo: symbol = Symbol("clave-unica");

// Tipo any (cualquier tipo)
let cualquierDato: any = 42;
cualquierDato = "Hola";

// Tipo void (sin valor de retorno)
function saludar(): void {
  console.log("¡Hola, mundo!");
}
```

## Tipo any

En TypeScript, el **tipo any** es un tipo especial que se utiliza cuando no se conoce o no se desea especificar el tipo de una variable en el momento de la declaración. Se llama **"any"** porque esta variable puede tomar cualquier tipo de valor, similar a cómo las variables en JavaScript pueden contener cualquier tipo de dato.

El tipo any es una forma de optar por no realizar comprobaciones de tipo en una variable y permitir que se le asigne cualquier tipo de valor sin restricciones. Esto puede ser útil en situaciones donde la estructura del código es más dinámica o cuando estás migrando código JavaScript existente a **TypeScript** y aún no tienes la información completa sobre los tipos de datos.

Sin embargo, el uso excesivo de any puede contrarrestar las ventajas de seguridad de tipos que ofrece TypeScript, ya que elimina gran parte de la verificación de tipos en tiempo de compilación. Esto puede resultar en errores difíciles de detectar y depurar en tiempo de ejecución.

```ts
let variableDinamica: any = "Hola";
variableDinamica = 42;
variableDinamica = true;
variableDinamica = [1, 2, 3];
```

## Tipo void

El **tipo void** en TypeScript se utiliza para indicar que una función no devuelve **ningún valor**. En otras palabras, cuando declaras una función con tipo void, estás diciendo que la función realiza una acción pero no produce ningún resultado que deba ser utilizado en el resto del programa.

En muchos casos, las funciones se utilizan para realizar ciertas tareas o acciones, como imprimir un mensaje en la consola, actualizar una base de datos, etc. Estas funciones pueden no necesitar devolver un valor concreto para su uso posterior, y aquí es donde el tipo void es útil.

Ejemplo de una función con tipo void:
```ts
function saludar(nombre: string): void {
  console.log(`¡Hola, ${nombre}!`);
}

saludar("Juan"); // Imprime: ¡Hola, Juan!
```
En este ejemplo, la función saludar no devuelve ningún valor específico, simplemente imprime un saludo en la consola. Por lo tanto, se declara con el tipo void.

## Inferencia de tipos

La inferencia de **tipos** es una característica poderosa en **TypeScript** que permite al compilador deducir automáticamente el tipo de una variable en función del valor que se le asigna. Esto significa que no es necesario especificar explícitamente el **tipo de una variable**; en su lugar, TypeScript puede determinar el tipo basándose en cómo se usa la variable en el código.

La inferencia de **tipos** se realiza en el momento de la declaración de la variable o cuando se le asigna un valor. TypeScript analiza el valor asignado y deduce el **tipo correspondiente**. Esto puede simplificar el proceso de escritura de código, ya que no es necesario especificar tipos redundantes y el compilador puede realizar verificaciones de tipo más precisas.

Ejemplo de inferencia de tipos:
```ts
let edad = 25; // TypeScript infiere que "edad" es de tipo number
let nombre = "Juan"; // TypeScript infiere que "nombre" es de tipo string

function duplicar(numero) {
  return numero * 2; // TypeScript infiere que "numero" es de tipo number
}
```
En este ejemplo, TypeScript deduce automáticamente los tipos de las variables "edad", "nombre" y "numero" en función de los valores a los que se les asigna o cómo se usan en la función.

Es importante destacar que, si bien la inferencia de tipos dinámicos puede ser conveniente, es recomendable usarla con precaución. A veces, especificar tipos explícitamente puede mejorar la claridad del código y evitar posibles errores.

## Union Types

Los "Union Types" (Tipos de Unión) son una característica en **TypeScript** que te permite declarar una variable con más de un tipo posible. Esto es útil cuando una variable puede contener valores de diferentes tipos y deseas indicar esa flexibilidad en la declaración de tipos. Los **"Union Types"** permiten trabajar con valores más variados en una sola variable, lo que puede mejorar la expresividad y la flexibilidad del código.

La sintaxis para definir un "Union Type" es bastante sencilla. Se utiliza el símbolo de tubería | entre los tipos que se están uniendo. Por ejemplo:

```ts
let resultado: string | number;

resultado = "Hola"; // Válido
resultado = 42; // Válido
resultado = true; // Error, no es string ni number
```
En este ejemplo, resultado puede contener un valor de **tipo string o number**, lo que significa que puede ser asignado a cualquiera de esos tipos.

Los "Union Types" son especialmente útiles en situaciones donde una variable puede aceptar más de un tipo de valor, como cuando se manejan datos provenientes de fuentes externas, como formularios en línea o APIs.

Ejemplo de "Union Type" en una función:

```ts
function imprimirId(id: number | string) {
  console.log(`El ID es: ${id}`);
}

imprimirId(123); // Válido
imprimirId("ABC"); // Válido
imprimirId(true); // Error, no es ni number ni string
```
Aquí, la función imprimirId acepta un parámetro que puede ser de tipo **number o string**.

## Type Guards

Los "Type Guards" (Guardias de Tipos) son técnicas en TypeScript que te permiten verificar y restringir el tipo de una variable en tiempo de ejecución. Estos guards son útiles cuando se trabaja con **"Union Types"** u otros tipos que podrían ser más amplios y se necesita realizar operaciones específicas basadas en el tipo real de la variable.

Los **"Type Guards"** son esenciales para mejorar la seguridad y la confiabilidad del código al asegurarte de que estás tratando con el tipo correcto antes de realizar ciertas operaciones o acciones.

**typeof:** Utilizado para verificar el tipo de variables primitivas como string, number, boolean, etc.

```ts
function imprimirResultado(valor: string | number) {
  if (typeof valor === "string") {
    console.log(`El valor es una cadena: ${valor}`);
  } else {
    console.log(`El valor es un número: ${valor}`);
  }
}
```

## Type Aliases

En TypeScript, los **"Type Aliases"** (Alias de Tipos) son una característica que te permite crear nombres alternativos para tipos existentes. Esto es especialmente útil cuando deseas referirte a un tipo complejo o largo mediante un nombre más corto y descriptivo.

Los alias de tipos son útiles para mejorar la legibilidad del código y para hacerlo más claro y comprensible, especialmente cuando se trabajan con tipos complejos o anidados.

Para crear un alias de tipo, utilizas la **palabra clave `type`**, seguida del nuevo nombre que deseas asignar al tipo y la definición del tipo que deseas "renombrar".

Ejemplo de alias de tipo:

```ts
type UserId = string | number;
let userId: UserId;
userId = '123';
userId = 123;

type Coordenada = { x: number, y: number };

let punto: Coordenada = { x: 10, y: 20 };
```

En este ejemplo, hemos creado un alias de tipo llamado Coordenada para el objeto con propiedades x e y. Luego, utilizamos este alias para declarar una variable punto.

Otro ejemplo:
````ts
type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: string
  createdAt: Date
  stock: number
  size?: Sizes // size? le indicamos que es un campo optional
}

const products: Product[] = []; // Definimos un array de type Product

const createProduct = (data: Product) => {
  products.push(data)
}

createProduct({ title: 'P1', createdAt: new Date(), stock: 12 })
````
Creamos dos **"Type Aliases"** uno Size y otro Product que tiene una estructura parecida a un objecto, luego definimos un array con ese type Product creamos la function y ejecutamos la function pasando el objecto con sus claves y valores.

Los alias de tipos también pueden utilizarse en combinación con otros tipos, **"Union Types"** o cualquier otro tipo complejo.

Ejemplo de alias de tipo con "Union Type" y "Literal Type":

```ts
// literal types
type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: Sizes;
shirtSize = 'M';
shirtSize = 'L';

// Type aliases with Union type
type Resultado = string | number;

function imprimirResultado(valor: Resultado) {
  console.log(`El resultado es: ${valor}`);
}

```
Los alias de tipos no crean un nuevo tipo; simplemente proporcionan un nombre alternativo para un tipo existente. Esto significa que los alias de tipos no afectan la estructura ni la compatibilidad de tipos. Son herramientas de legibilidad y organización del código.

## Literal Types

Los **"Literal Types"** (Tipos Literales) son una característica en TypeScript que permite declarar tipos que representan **valores específicos y concretos**. En otras palabras, los tipos literales permiten que una variable solo pueda tomar un conjunto específico de **valores**, en lugar de un tipo más amplio.

Los tipos literales son útiles cuando deseas expresar claramente qué valores son válidos para una variable o parámetro en una función. Esto puede aumentar la claridad y la seguridad del código al **limitar las posibles entradas** a un conjunto predefinido.

Para definir un **"Literal Type"**, simplemente usas el valor literal como tipo. Puedes usar **literales numéricos**, **literales de cadena**, **literales booleanos** y **literales de tipo**. Veamos algunos ejemplos:

```ts
let estado: "activo" | "inactivo";
estado = "activo"; // Válido
estado = "pendiente"; // Error, solo se permite "activo" o "inactivo"

function asignarResultado(resultado: 1 | 2 | 3) {
    // ...
}

asignarResultado(2); // Válido
asignarResultado(4); // Error, solo se permite 1, 2 o 3
```

En estos ejemplos, hemos creado "Literal Types" para la variable estado y el parámetro resultado, lo que limita los valores posibles a "activo", "inactivo", 1, 2 o 3.

Los "Literal Types" también son útiles en combinación con "Union Types" y otros conceptos, como **"Type Aliases"** y **"Type Guards"**. Estos tipos pueden mejorar la precisión del código y reducir la posibilidad de errores al garantizar que solo valores específicos sean válidos en determinados contextos.

## Conclusiones

En conclusión, haber explorado los fundamentos básicos de TypeScript te ha proporcionado una sólida base para comprender y aprovechar este lenguaje de programación en tus proyectos de desarrollo. Aquí hay algunas conclusiones clave:

1. **Tipo estático y seguro:** TypeScript te ofrece la ventaja de tipos estáticos, lo que significa que puedes detectar y prevenir errores en tiempo de compilación. Esto resulta en un código más confiable y fácil de mantener.

2. **Inferencia de tipos:** La inferencia de tipos automática en TypeScript simplifica la declaración de variables al tiempo que asegura que los tipos sean coherentes con los valores asignados. Esto mejora la eficiencia y la legibilidad del código.

3. **Union Types y Literal Types:** La capacidad de definir tipos compuestos con Union Types y Literal Types te permite modelar con precisión diferentes escenarios y restringir los valores que una variable puede tomar.

4. **Type Guards:** Los Type Guards son herramientas esenciales para trabajar con Union Types. Ayudan a verificar y garantizar los tipos en tiempo de ejecución, lo que reduce la probabilidad de errores.

5. **Type Aliases:** Los Type Aliases simplifican la declaración y el uso de tipos complejos, mejorando la claridad del código y permitiendo nombrar tipos personalizados de manera significativa.

6. **Ventajas en el Desarrollo:** TypeScript ofrece una transición suave desde JavaScript, un código más sólido para aplicaciones más grandes y una experiencia de desarrollo más segura. Además, su popularidad está en aumento, lo que significa más recursos y apoyo en la comunidad.

7. **Exploración Continua:** Aunque has cubierto los fundamentos, recuerda que el mundo de TypeScript es amplio y sigue en constante evolución. Puedes seguir explorando temas más avanzados y aplicar estos conceptos básicos en proyectos reales.

Al comprender y aplicar estos fundamentos básicos, estarás en una excelente posición para continuar aprendiendo y aprovechando las capacidades de TypeScript en tus futuros desarrollos.

