---
title: "TypeScript, Types vs interfaces"
publishedDate: "2024-04-27T16:29:10.000Z"
updatedDate: "2024-04-27T17:09:31.000Z"
pubDate: "2024-04-27T16:29:10.000Z"
description: "Cuando se trata de TypeScript, hay dos formas de definir tipos: "types" e "interfaces". Vamos a explorar las diferencias y similitudes entre tipos e interfaces, así como cuándo es apropiado usar cada uno."
tags: ["JavaScript", "Programación", "development", "webdeveloment", "desarrollo-web", "JavaScript", "TypeScript"]
primaryTag: { name: 'TypeScript', slug: 'typescript' }
excerpt: "Cuando se trata de TypeScript, hay dos formas de definir tipos: "types" e "interfaces". Vamos a explorar las diferencias y similitudes entre tipos e interfaces, así como cuándo es apropiado usar cada uno."
canonicalURL: "https://johnserrano.co/blog/typescript-types-vs-interfaces"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1714237227/John%20Serrano/Blog%20Post/types-vs-interface/Dise%C3%B1o_sin_t%C3%ADtulo_fciqsh.png"
---

Cuando se trata de TypeScript, hay dos formas de definir tipos: "types" e "interfaces".

Vamos a explorar las diferencias y similitudes entre tipos e interfaces, así como cuándo es apropiado usar cada uno.

## Types y type aliases

En TypeScript, contamos con esta característica genial llamada "types", que nos ayuda a describir el tipo de datos con el que estamos trabajando. Es como proporcionar un plano para nuestra información.

Existen algunos tipos básicos como cadenas de texto, booleanos, números, arreglos, tuplas y enumeraciones.

¡Pero espera, hay más! También tenemos "type aliases". Piensa en ellos como apodos para tipos. No estamos creando nuevos tipos; simplemente les estamos dando nombres más amigables. Esto hace que nuestro código sea más fácil de leer y entender.

```ts
type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}
```

Cuando la gente habla sobre "types versus interfaces", en realidad están hablando sobre "type aliases versus interfaces". Es como dar diferentes nombres al mismo grupo de cosas.

## Interfaces en TypeScript

En TypeScript, piensa en una interfaz como un conjunto de reglas o requisitos que un objeto debe cumplir. Es como un contrato que dice: "Oye, si quieres ser un 'Cliente', debes tener un 'nombre' y una 'dirección'".

```ts
interface Client { 
    name: string; 
    address: string;
}
```

## Diferencias entre tipos e interfaces
Los tipos e interfaces se utilizan para definir estructuras de datos personalizadas y formas, pero tienen algunas diferencias en su comportamiento y uso.

### Tipos Primitivos
Usando Tipos:

`type MyNumber = number;`

En este caso, creamos un alias de tipo `MyNumber` que es un alias para el tipo primitivo number.

Usando Interfaces:

No puedes usar interfaces para definir tipos primitivos como number directamente. Están predefinidos en TypeScript.

### Tipos Unión
Usando Tipos:

`type MyUnionType = number | string;`

Aquí, definimos un tipo `MyUnionType`, que puede contener valores de tipo number o string.

Usando Interfaces:

Normalmente no se usan interfaces para representar tipos de unión directamente. Usarías alias de tipo para este propósito.

### Tipos de Función
Usando Tipos:

`type MyFunctionType = (arg1: number, arg2: string) => boolean;`

Esto define un tipo `MyFunctionType` para una función que toma dos argumentos, un número y una cadena, y devuelve un booleano.

Usando Interfaces:

```ts
interface MyFunctionInterface {
  (arg1: number, arg2: string): boolean;
}
```
Esta interfaz `MyFunctionInterface` representa el mismo tipo de función.

### Unión de Declaraciones
Usando Interfaces:

```ts
interface Person {
  name: string;
}
```

```ts
interface Person {
  age: number;
}
```

TypeScript fusionará automáticamente estas dos interfaces Person en una sola con propiedades tanto para name como para age.

Usando Tipos:

Los alias de tipo no admiten la fusión de declaraciones. Si defines el mismo alias de tipo varias veces, resultará en un error.

## Extiende vs. Intersección
Usando Extiende:

```ts
interface A { propA: number; }
interface B extends A { propB: string; }
```

La interfaz B extiende la interfaz A, heredando la propiedad propA y agregando una nueva propiedad propB.

Usando Intersección:

`type AB = A & { propB: string; }`

Aquí, usamos una intersección para combinar las propiedades de A con una nueva propiedad propB para crear un tipo AB.

### Manejo de Conflictos al Extender

TypeScript exige que los tipos de propiedades con el mismo nombre coincidan al extender:

```ts
interface A { commonProp: number; }
interface B { commonProp: string; }
interface AB extends A, B { }
```
// Error: La propiedad 'commonProp' debe tener el mismo tipo en A y B
Para resolver conflictos, debes asegurarte de que los tipos coincidan o utilizar sobrecargas de métodos para funciones.

## Trabajando con Tipos Tupla
Usando Tipos:

```ts
type MyTupleType = [number, string];
const tuple: MyTupleType = [42, "hello"];
```

Aquí, definimos un tipo tupla usando type, y luego podemos crear variables de ese tipo tupla.

Usando Interfaces:

```
interface MyTupleInterface {
  0: number;
  1: string;
}
```

`const tuple: MyTupleInterface = [42, "hello"];`

También puedes definir tipos tupla usando interfaces, y el uso sigue siendo el mismo.


## Cuándo usar tipos vs. interfaces

Utiliza interfaces cuando necesites combinar o modificar estructuras existentes. Si estás trabajando con bibliotecas, objetos, las interfaces son tu elección predeterminada.

Te permiten fusionar o extender declaraciones, facilitando el trabajo con código existente. Las interfaces también son más legibles cuando estás pensando en términos de programación orientada a objetos.

Los tipos son tu elección cuando necesitas características más potentes. El sistema de tipos de TypeScript ofrece herramientas avanzadas como tipos condicionales, genéricos, guardias de tipo y más.

Estas características te brindan un mayor control sobre tus tipos, ayudándote a crear aplicaciones robustas y fuertemente tipadas. Las interfaces no pueden proporcionar estas capacidades.

A menudo puedes usar tipos o interfaces, según tu preferencia personal. Sin embargo, utiliza alias de tipo en las siguientes situaciones:

Cuando quieras crear un nuevo nombre para un tipo de datos básico (como 'string' o 'number').

Cuando definas tipos más complejos como uniones, tuplas o funciones.

Cuando sobrecargues funciones.

Cuando trabajes con características avanzadas como tipos mapeados, tipos condicionales o guardias de tipo.

Los tipos suelen ser más flexibles y expresivos. Ofrecen un rango más amplio de características avanzadas que las interfaces no pueden igualar.

Si te gusto y te fue útil te invito a que lo compartas y me sigas en las diferentes redes sociales.
