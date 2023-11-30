---
title: "Descubriendo Codember y sus Desafíos de Programación"
publishedDate: "2023-11-06T16:29:10.000Z"
updatedDate: "2023-11-29T17:09:31.000Z"
pubDate: "2023-11-29T16:29:10.000Z"
description: "Descubre Codember y su emocionante mundo de desafíos de programación. Resuelve retos en tu lenguaje favorito, ya sea Python, PHP, JavaScript, Go, TypeScript y más. Además, desbloquea pistas secretas para descubrir misterios ocultos en el camino."
tags: ["JavaScript", "Programación", "development", "webdeveloment", "desarrollo-web", "Python", "PHP", "JavaScript", "TypeScript", "Codember", "Desafios", "retos", "pruebas", "secretos"]
primaryTag: { name: 'Desarrollo-web', slug: 'desarrollo-web' }
excerpt: "Descubre Codember y su emocionante mundo de desafíos de programación. Resuelve retos en tu lenguaje favorito, ya sea Python, PHP, JavaScript, Go, TypeScript y más. Además, desbloquea pistas secretas para descubrir misterios ocultos en el camino."
canonicalURL: "https://johnserrano.co/blog/descubriendo-codember-y-sus-desafios-de-programacion"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1699289192/John%20Serrano/Blog%20Post/descubriendo-codember-y-sus-desafios-de-programacion/base-portada_ozpsyf.jpg"
---
<!-- omit from toc -->
## ¿Qué es codember y sus desafíos de programación?

Codember es un emocionante sitio web que presenta desafíos semanales de programación. Cada semana, puedes sumergirte en la resolución de estos **desafíos** utilizando tu **lenguaje de programación favorito**. Pero eso no es todo, también puedes descubrir **secretos ocultos** y acumular valiosos puntos.
<!-- omit from toc -->
## La dinámica de los desafíos y sus secretos:

* **Resuelve Rápido, Gana Más**: La dinámica es sencilla; cuanto **más rápido** resuelvas un desafío, más **puntos acumulas**. La velocidad es la clave para ascender en el **ranking**.

* **Secretos por Descubrir**: No solo se trata de los desafíos, también hay **secretos** esperando ser descubiertos. Cada secreto desvelado te recompensa con **una cantidad de puntos**, lo que agrega un giro emocionante a la experiencia.

* **Premios**: Existe la **posibilidad** que se den **algunos** premios a los primeros puestos del ranking.

<!-- omit from toc -->
## Codember fue creado por Miguel Ángel Durán [(midudev)](https://www.linkedin.com/in/midudev/):

Codember fue creado por Miguel Angel Duran, también conocido como midudev. Su pasión por la programación y su deseo de ofrecer una plataforma desafiante para la comunidad de desarrolladores han dado vida a este emocionante proyecto.
<!-- omit from toc -->
## Como funciona Codember

Al acceder al siguiente [enlace](https://codember.dev/), puedes iniciar sesión con tu cuenta de **GitHub**. Una vez que hayas iniciado sesión, tendrás acceso a una serie de comandos, como `help`, `ls`, `cd`, `submit`, `hint`, `clear`, y más.

Para empezar con el **primer desafío**, simplemente ejecuta el comando ls. Luego, utiliza `cat CHALLENGE_01.txt` para ver el primer desafío y obtener una **explicación detallada de la dinámica** y las instrucciones para completarlo.

Este entorno interactivo te permite sumergirte en **emocionantes desafíos y desbloquear tu creatividad**. ¡No dudes en comenzar tu aventura y demostrar tus habilidades!

```bash
** El reto **
Un espía está enviando mensajes encriptados.

Tu misión es crear un programa que nos ayude a buscar patrones...

Los mensajes son palabras separadas por espacios como este:
gato perro perro coche Gato peRRo sol

Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas.

El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1

¡Las palabras son ordenadas por su primera aparición en el mensaje!

** Más ejemplos: **
llaveS casa CASA casa llaves -> llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casas1

** Cómo resolverlo **
1. Resuelve el mensaje que encontrarás en este archivo: https://codember.dev/data/message_01.txt

2. Envía tu solución con el comando "submit" en la terminal, por ejemplo así:
submit perro3gato3coche1sol1
```
<!-- omit from toc -->
## Soluciones

- [Solución del primer desafío](#solución-del-primer-desafío)
- [Solución del segundo desafío](#solución-del-segundo-desafío)
- [Solución del tercer desafío](#solución-del-tercer-desafío)
- [Solución del cuarto desafío](#solución-del-cuarto-desafío)


## Solución del primer desafío

El primer desafío lo resolví con **TypeScript**, pero ten en cuenta que puedes abordarlos con tu **lenguaje de programación favorito**. Estoy emocionado por seguir actualizando en la medida de lo posible esta publicación con los **próximos desafíos** y sus respectivas explicaciones.


¡Hablemos sobre la solución! Si ya has explorado el primer desafío, es posible que hayas descubierto algunos **secretos**, solo por mencionar ya encontre los **3 primeros secretos**, actualmente esta es **mi posición** y **mi cantidad de puntos**:

```bash
Tu puntuación actual::
Posición: 367 (9201017 puntos)
Retos: 1/1 － Secretos: 3/3
```

Para el primer desafío debemos devolver el **texto** con la **cantidad de veces que se repite** ese texto todo pegado, ejemplos:

```text
llaveS casa CASA casa llaves -> llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casas1
```

**Mi solución:**
```ts
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export type WordCount = {
  [word: string]: number
}

async function messages() {
  try {
    const filePath = resolve('./message_01.txt')
    const wordList = await readFile(filePath, { encoding: 'utf8' })

    let wordsCount: WordCount = {}
    let resultMessage = ''

    wordList.split(' ').forEach(word => {
      const wordSanitized = word.toLowerCase()
      wordsCount[wordSanitized] !== undefined ? (wordsCount[wordSanitized] += 1) : (wordsCount[wordSanitized] = 1)
    })

    const words = Object.keys(wordsCount)

    for (const word of words) {
      resultMessage += `${word}${wordsCount[word]}`
    }

    console.log(resultMessage)
  } catch (error) {
    console.log('This is error -> ', error)
  }
}

;(async () => {
  await messages()
  // resultado: murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7
})()
```

**Importación de Módulos:**
```ts
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
```
En esta sección, se importan dos módulos de **Node.js**. **readFile** se utiliza para leer archivos de forma asíncrona, y resolve se usa para resolver rutas de archivos.

**Definición de un Tipo:**
```ts
export type WordCount = {
  [word: string]: number
}
```
Se define un tipo llamado **WordCount**, que es un objeto donde las claves son palabras (cadena) y los valores son números que representan la cantidad de veces que aparece esa palabra.

**Función Asíncrona messages():**
```ts
const filePath = resolve('./message_01.txt')
const wordList = await readFile(filePath, { encoding: 'utf8' })

let wordsCount: WordCount = {}
let resultMessage = ''

wordList.split(' ').forEach(word => {
  const wordSanitized = word.toLowerCase()
  wordsCount[wordSanitized] !== undefined ? (wordsCount[wordSanitized] += 1) : (wordsCount[wordSanitized] = 1)
})
```

La función resolve se utiliza para obtener la ruta absoluta del archivo `message_01.txt`. Luego, readFile se usa para leer el contenido del archivo en formato `UTF-8` y se almacena en la variable **wordList**.

Se inicializan dos variables: wordsCount, que será un objeto de tipo **WordCount** para contar las palabras, y **resultMessage**, que contendrá el resultado de la operación.

Se divide el contenido del archivo en palabras individuales utilizando `split(' ')`. Luego, se recorre cada palabra y se realiza un conteo de la frecuencia de cada palabra en wordsCount. Se convierten las palabras a minúsculas para que el conteo no sea sensible a mayúsculas y minúsculas.

**Generación del Resultado:**
```ts
const words = Object.keys(wordsCount)
for (const word of words) {
  resultMessage += `${word}${wordsCount[word]}`
}

console.log(resultMessage)
```

Se obtienen todas las palabras únicas del objeto wordsCount y se genera un resultado que combina la palabra y su frecuencia.

Finalmente, se imprime el resultado en la consola.

```ts
;(async () => {
  await messages()
})()
```

Al final del código, se define una función autoejecutable que llama a `messages()` para iniciar el proceso. Esto asegura que la función se ejecute inmediatamente al cargar el script.

Puedes encontrar el código completo en el siguiente enlace [código desafío 01](https://github.com/johnsi15/codember) si gustas puedes **darle estrellita** al repositorio.

## Solución del segundo desafío

Para el segundo desafío debemos desarrollar un **mini compilador** que tome una cadena de **texto** y devuelva **otra cadena de texto** con el resultado cumpliendo unas condiciones, ejemplos:

```text
- Entrada: "##*&"
- Salida esperada: "4"
- Explicación: Incrementa (1), incrementa (2), multiplica (4), imprime (4).

- Entrada: "&##&*&@&"
- Salida esperada: "0243"
- Explicación: Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).
```

El defafío completo lo pueden encontrar en el siguiente [link](https://github.com/johnsi15/codember/tree/main/challenges/challenge-02).

**Mi solución:**

```ts
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function miniCompiler() {
  let text = ''

  try {
    const filePath = resolve('./message_02.txt')
    text = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error -> ', error)
  }

  const listSymbols = text.split('')

  const operations: Record<string, (count: number) => number> = {
    '&': (count: number) => count,
    '#': (count: number) => count + 1,
    '@': (count: number) => count - 1,
    '*': (count: number) => count * count,
  }

  let count = 0
  let result = ''

  listSymbols.forEach(symbol => {
    count = operations[symbol](count)

    result += symbol === '&' ? count : ''
  })

  console.log(result)
}

;(async () => {
  await miniCompiler() // result -> 024899455
})()

```

**Explicación del código**, la primera parte del código es lo mismo que hicimos con el desafío anterior así que no voy a entrar al detalle de eso. Revisemos el resto de la solución.

`const listSymbols = text.split('');`

Se convierte el contenido del archivo en una lista de símbolos utilizando el método `split('')`.

```ts
const operations: Record<string, (count: number) => number> = {
  '&': (count: number) => count,
  '#': (count: number) => count + 1,
  '@': (count: number) => count - 1,
  '*': (count: number) => count * count,
};
```

Se define un **objeto `operations`** que asigna símbolos a funciones que realizan operaciones en un contador, se podría haber resuelto con condicionales `if` pero creo que de esta manera queda más escalable el código y menos largo.

```ts
let count = 0;
let result = '';
```
Se inicializan las variables `count` y `result`.

```ts
listSymbols.forEach(symbol => {
  count = operations[symbol](count);
  result += symbol === '&' ? count : '';
});
```

Se itera sobre cada símbolo en `listSymbols`.
Se aplica la operación correspondiente al símbolo utilizando el objeto `operations`.
Se construye el resultado concatenando el valor actual de `count` solo si el símbolo es `&`.

```ts
(async () => {
  await miniCompiler(); // result -> 024899455
})();
```

Al final se imprime el resultado final en la consola.

En resumen, el código lee el contenido de un archivo, realiza **operaciones** basadas en **símbolos en un contador** y luego imprime el resultado en la consola. La lógica de las operaciones está definida en el **objeto operations**. 

Puedes encontrar el código completo en el siguiente enlace [código desafío 02](https://github.com/johnsi15/codember) si gustas puedes **darle estrellita** al repositorio.

## Solución del tercer desafío

En el tercer desafío nos encontramos con un **desafío del Cifrado Espía** debemos analizar una lista de políticas y claves de cifrado que se encuentran en un archivo y crear un programa que devuelva la clave inválida número 42 (de todas las claves inválidas, la 42ª en orden de aparición). Ejemplo.

```text
2-4 f: fgff
4-5 z: zzzsg
1-6 h: hhhhhh

Cada línea indica, separado por :, la política de la clave y la clave misma.

La política de la clave especifica el número mínimo y máximo de veces que un carácter dado debe aparecer para que la clave sea válida. Por ejemplo, 2-4 f significa que la clave debe contener f al menos 2 veces y como máximo 4 veces.

Sabiendo esto, en el ejemplo anterior, hay 2 claves válidas:

La segunda clave, zzzsg, no lo es; contiene 3 veces la letra z, pero necesita al menos 4. Las primeras y terceras claves son válidas: contienen la cantidad adecuada de f y h, respectivamente, según sus políticas.
```
El defafío completo lo pueden encontrar en el siguiente [link](https://github.com/johnsi15/codember/tree/main/challenges/challenge-03).

**Mi solución:**

```ts
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function encryptionPolicies() {
  let passwords = ''

  try {
    const filePath = resolve('./encryption_policies.txt')
    passwords = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error read file -> ', error)
  }

  const listPasswords = passwords.split('\n')

  const INDEXPASSWORD = 42 // or 13
  let invalidCountPassword = 0

  listPasswords.forEach(text => {
    const mainText = text.split(' ')
    const [minWord, maxWord] = mainText[0].split('-')
    const word = mainText[1].slice(0, 1)
    const passwordValue = mainText[2]

    const occurrences = passwordValue.match(new RegExp(word, 'g'))?.length ?? 0

    if (!(occurrences >= Number(minWord) && occurrences <= Number(maxWord))) {
      invalidCountPassword++
      if (invalidCountPassword === INDEXPASSWORD) {
        console.log('invalid password is -> ' + passwordValue)
      }
    }
  })
}

;(async () => {
  await encryptionPolicies() // result -> bgamidqewtbus
})()
```

**Explicación del código**, la primera parte del código es lo mismo que hacemos en los desafíos anteriores así que no voy a entrar al detalle de eso. Revisemos el resto de la solución.

```ts
const listPasswords = passwords.split('\n')

const INDEXPASSWORD = 42 // or 13
let invalidCountPassword = 0
```
Dividimos el contenido del archivo en líneas y creamos un array llamado `listPasswords` con las contraseñas. Definimos la posición de la contraseña que se imprimirá en caso de ser inválida, y se inicializa el contador de contraseñas inválidas.

```ts
listPasswords.forEach(text => {
  const mainText = text.split(' ')
  const [minWord, maxWord] = mainText[0].split('-')
  const word = mainText[1].slice(0, 1)
  const passwordValue = mainText[2]

  const occurrences = passwordValue.match(new RegExp(word, 'g'))?.length ?? 0

  if (!(occurrences >= Number(minWord) && occurrences <= Number(maxWord))) {
    invalidCountPassword++
    if (invalidCountPassword === INDEXPASSWORD) {
      console.log('invalid password is -> ' + passwordValue)
    }
  }
})
```

Iteramos sobre cada línea de contraseñas y realizamos la verificación, dividimos la línea de texto en componentes, como la **cantidad mínima y máxima de ocurrencias** de una letra (`minWord` y `maxWord`), la letra objetivo (`word`), y la contraseña misma (`passwordValue`). Utilizamos una expresión regular para contar las ocurrencias de la letra en la contraseña.

Al final verificamos si el número de ocurrencias de la letra en la **contraseña está fuera del rango permitido**. Si es así, incrementa el contador de contraseñas inválidas y, si el índice de contraseña inválida coincide con `INDEXPASSWORD`, imprime la contraseña en la consola.

Entrando en detalle que hacemos con la expresión regular:
`new RegExp(word, 'g')`:

`new RegExp`: Creamos una instancia de un objeto RegExp, que representa una expresión regular.

`word`: La variable que contiene la letra objetivo.

`'g'`: La bandera de la expresión regular que significa **"global"**. Esto indica que la búsqueda de coincidencias debe realizarse en toda la cadena, no solo en la primera ocurrencia.

En resumen, esta parte crea una expresión regular que busca globalmente la letra específica en la cadena.

`passwordValue.match(...)`:

`passwordValue`: La cadena de texto que se va a analizar en busca de coincidencias.

`match(...)`: Una función de las cadenas de **JavaScript** que busca coincidencias en la cadena con la expresión regular especificada. **La función match devuelve un array** de todas las coincidencias encontradas o `null` si no se encuentra ninguna coincidencia.

Es importante destacar que cuando usamos una **cadena como argumento para match**, solo encuentra la **primera ocurrencia de la cadena** en el texto. Para buscar **todas las ocurrencias**, especialmente si la cadena contiene caracteres especiales, es más común y útil utilizar una **expresión regular con la bandera `'g'`** para indicar búsqueda global.

Puedes encontrar el código completo en el siguiente enlace [código desafío 03](https://github.com/johnsi15/codember) si gustas puedes **darle estrellita** al repositorio.

## Solución del cuarto desafío

En el cuarto desafío nos dicen los siguiente "Hackers dañan sistema de archivos" debemos analiza la lista de nombres de archivos y sus checksums donde debemos buscar en el archivo real número 33 (de todos los archivos reales, el 33º en orden de apareción) y envía su checksum con submit. Ejemplos:

```txt
+ Nombre del archivo: xyzz33-xy
+ Resultado: ✅ Real (El checksum es válido)

+ Nombre del archivo: abcca1-ab1
+ Resultado: ❌ Falso (El checksum debería ser b1, es incorrecto)

+ Nombre del archivo: abbc11-ca
+ Resultado: ❌ Falso (El checksum debería ser ac, el orden es incorrecto)
```

El defafío completo lo pueden encontrar en el siguiente [link](https://github.com/johnsi15/codember/tree/main/challenges/challenge-04).

**Mi solución:**

```ts
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function filesQuarantine() {
  let readFilesQuarantine = ''

  try {
    const filePath = resolve('./files_quarantine.txt')
    readFilesQuarantine = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error read file -> ', error)
  }

  const listFileNames = readFilesQuarantine.split('\n')

  const INDEXFILENAME = 33
  let validUnchecksumCount = 0

  for (const fileName of listFileNames) {
    const [text, unchecksum] = fileName.split('-')

    const notRepeatWord = text.split('').filter((character, _, self) => self.indexOf(character) === self.lastIndexOf(character)).join('')

    if (unchecksum === notRepeatWord) {
      validUnchecksumCount++
      if (validUnchecksumCount === INDEXFILENAME) {
        console.log('valid unchecksum -> ' + unchecksum)
        break
      }
    }
  }
}

;(async () => {
  await filesQuarantine() // result -> O2hrQ
})()
```

**Explicación del código**, la primera parte del código es lo mismo que hacemos en los desafíos anteriores así que no voy a entrar al detalle de eso. Revisemos el resto de la solución.

```ts
const listFileNames = readFilesQuarantine.split('\n');

const INDEXFILENAME = 33;
let validUnchecksumCount = 0;
```

Lo primero que hacemos es dividir la cadena `readFilesQuarantine` en un array de nombres de archivo, donde cada nombre de archivo está separado por un carácter de nueva línea `(\n)`.

Declaramos dos variables `INDEXFILENAME` y `validUnchecksumCount`. La variable `INDEXFILENAME` se usa para almacenar el índice del nombre de archivo que estamos buscando. La variable `validUnchecksumCount` se usa para realizar un seguimiento de la **cantidad de unchecksums válidos** que hemos encontrado.

```ts
const [text, unchecksum] = fileName.split('-');

const notRepeatWord = text.split('').filter((character, _, self) => self.indexOf(character) === self.lastIndexOf(character)).join('')
```

Iteramos sobre el array `listFilesNames`, donde cada iteración asigna el nombre de archivo actual a la variable `fileName`. dividimos el nombre de archivo actual en dos partes: **la parte de texto y la parte de unchecksum**. La parte de texto es todo lo anterior al guion `(-)`, y la parte de `unchecksum` es todo lo que está después del guion `(-)`.

Creamos una nueva cadena llamada `notRepeatWord` eliminando todos los caracteres duplicados de la parte de texto. El método `split('')` divide la parte de texto en un array de caracteres. El método `filter()` filtra el array de caracteres para que solo incluya **caracteres que no estén repetidos** y esto lo logramos gracias a `indexOf` y `lastIndexOf`. El método `join('')` une el array de caracteres filtrado nuevamente en una cadena.

```ts
if (unchecksum === notRepeatWord) {
  validUnchecksumCount++;
  if (validUnchecksumCount === INDEXFILENAME) {
    console.log('valid unchecksum -> ' + unchecksum);
    break;
  }
}
```

Por último verificamos si la parte de `unchecksum` es igual a la cadena `notRepeatWord`. Si son iguales, entonces el `unchecksum` es válido, y la variable `validUnchecksumCount` se incrementa. Si la variable `validUnchecksumCount` es igual a la variable `INDEXFILENAME`, entonces el bucle se termina y el `unchecksum` válido se imprime en la consola.

Puedes encontrar el código completo en el siguiente enlace [código desafío 04](https://github.com/johnsi15/codember) si gustas puedes **darle estrellita** al repositorio.

<!-- omit from toc -->
## Conclusiones
Codember es el lugar perfecto para poner a prueba tus habilidades de programación, aprender nuevos conceptos y competir con otros entusiastas de la programación. ¡Únete a la comunidad de Codember y acepta el desafío!

Quiero expresar mi **sincero agradecimiento** a Miguel Ángel Durán [(midudev)](https://www.linkedin.com/in/midudev/) por ser una fuente constante de **inspiración** que nos impulsa a **seguir aprendiendo y a mejorar como desarrolladores web**. Su dedicación y pasión nos **motivan** a **nunca dejar de aprender** y a alcanzar nuevos niveles de excelencia en nuestra carrera. ¡Gracias, **midudev**, por ser un faro en nuestro viaje de desarrollo web!


