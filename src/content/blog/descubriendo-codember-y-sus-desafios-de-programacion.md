---
title: "Descubriendo Codember y sus Desafíos de Programación"
publishedDate: "2023-11-06T16:29:10.000Z"
updatedDate: "2023-11-06T17:09:31.000Z"
pubDate: "2023-11-06T16:29:10.000Z"
description: "Descubre Codember y su emocionante mundo de desafíos de programación. Resuelve retos en tu lenguaje favorito, ya sea Python, PHP, JavaScript, Go, TypeScript y más. Además, desbloquea pistas secretas para descubrir misterios ocultos en el camino."
tags: ["JavaScript", "Programación", "development", "webdeveloment", "desarrollo-web", "Python", "PHP", "JavaScript", "TypeScript", "Codember", "Desafios", "retos", "pruebas", "secretos"]
primaryTag: { name: 'Desarrollo-web', slug: 'desarrollo-web' }
excerpt: "Descubre Codember y su emocionante mundo de desafíos de programación. Resuelve retos en tu lenguaje favorito, ya sea Python, PHP, JavaScript, Go, TypeScript y más. Además, desbloquea pistas secretas para descubrir misterios ocultos en el camino."
canonicalURL: "https://johnserrano.co/blog/descubriendo-codember-y-sus-desafios-de-programacion"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1699289192/John%20Serrano/Blog%20Post/descubriendo-codember-y-sus-desafios-de-programacion/base-portada_ozpsyf.webp"
---

## ¿Qué es codember y sus desafíos de programación?

Codember es un emocionante sitio web que presenta desafíos semanales de programación. Cada semana, puedes sumergirte en la resolución de estos **desafíos** utilizando tu **lenguaje de programación favorito**. Pero eso no es todo, también puedes descubrir **secretos ocultos** y acumular valiosos puntos.

## La dinámica de los desafíos y sus secretos:

* **Resuelve Rápido, Gana Más**: La dinámica es sencilla; cuanto **más rápido** resuelvas un desafío, más **puntos acumulas**. La velocidad es la clave para ascender en el **ranking**.

* **Secretos por Descubrir**: No solo se trata de los desafíos, también hay **secretos** esperando ser descubiertos. Cada secreto desvelado te recompensa con **una cantidad de puntos**, lo que agrega un giro emocionante a la experiencia.

* **Premios**: Existe la **posibilidad** que se den **algunos** premios a los primeros puestos del ranking.


## Codember fue creado por Miguel Ángel Durán [(midudev)](https://www.linkedin.com/in/midudev/):

Codember fue creado por Miguel Angel Duran, también conocido como midudev. Su pasión por la programación y su deseo de ofrecer una plataforma desafiante para la comunidad de desarrolladores han dado vida a este emocionante proyecto.

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

## Solución del primer desafío

El primer desafío lo resolví con TypeScript, pero ten en cuenta que puedes abordarlos con tu lenguaje de programación favorito. Estoy emocionado por seguir actualizando en la medida de lo posible esta publicación con los próximos desafíos y sus respectivas explicaciones.


¡Hablemos sobre la solución! Si ya has explorado el primer desafío, es posible que hayas descubierto algunos secretos, solo por mencionar ya encontre los 3 primeros secretos, actualmente esta es mi posición y mi cantidad de puntos:

```bash
Tu puntuación actual::
Posición: 367 (9201017 puntos)
Retos: 1/1 － Secretos: 3/3
```

Para el primer desafío debemos devolver el texto con la cantidad de veces que se repite ese texto todo pegado, ejemplos:

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

## Conclusiones
Codember es el lugar perfecto para poner a prueba tus habilidades de programación, aprender nuevos conceptos y competir con otros entusiastas de la programación. ¡Únete a la comunidad de Codember y acepta el desafío!

Quiero expresar mi sincero agradecimiento a Miguel Ángel Durán [(midudev)](https://www.linkedin.com/in/midudev/) por ser una fuente constante de inspiración que nos impulsa a seguir aprendiendo y a mejorar como desarrolladores web. Su dedicación y pasión nos motivan a nunca dejar de aprender y a alcanzar nuevos niveles de excelencia en nuestra carrera. ¡Gracias, midudev, por ser un faro en nuestro viaje de desarrollo web!


