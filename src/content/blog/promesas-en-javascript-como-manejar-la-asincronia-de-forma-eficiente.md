---
title: "Promesas en JavaScript: Como manejar la asincronía de forma eficiente"
publishedDate: "2023-07-01T16:29:10.000Z"
updatedDate: "2023-07-01T17:09:31.000Z"
pubDate: "2023-07-01T16:29:10.000Z"
description: "Descubre cómo manejar la asincronía de forma eficiente en JavaScript con promesas. Aprende a optimizar tu código asincrónico y simplifica la complejidad de la asincronía en JavaScript."
tags: ["Promesas-en-JavaScript", "Asincronía-en-JavaScript", "development", "webdeveloment", "desarrollo-web", "JavaScript", "promesas", "asincronía"]
primaryTag: { name: 'Promesas', slug: 'promesas' }
excerpt: "Descubre cómo manejar la asincronía de forma eficiente en JavaScript con promesas. Aprende a optimizar tu código asincrónico y simplifica la complejidad de la asincronía en JavaScript."
canonicalURL: "https://johnserrano.co/blog/promesas-en-javascript-como-manejar-la-asincronia-de-forma-eficiente"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1688242692/John%20Serrano/Blog%20Post/promesas-en-javascript-como-manejar-la-asincronia-de-forma-eficiente/Promesas_en_JavaScript_Como_manejar_la_asincron%C3%ADa_de_forma_eficiente_jy0qpm.png"
---

Las promesas son un patrón de programación en JavaScript que se utiliza para manejar la **asincronía**. Las promesas son objetos que representan valores que podrían estar disponibles ahora, en un futuro cercano o nunca. Las promesas se utilizan comúnmente para manejar llamadas a APIs, operaciones de lectura / escritura de archivos y cualquier operación que pueda tardar algún tiempo en completarse.

En una promesa, hay tres estados posibles: pendiente, resuelto y rechazado. Cuando se crea una promesa, está en estado pendiente hasta que se resuelve o se rechaza. Si se resuelve, la promesa devuelve un valor y cambia su estado a resuelto. Si se rechaza, la promesa devuelve un error y cambia su estado a rechazado.

Las promesas se crean utilizando la clase Promise en JavaScript. La clase Promise tiene un constructor que toma una función como argumento. Esta función toma dos argumentos: **resolve** y **reject**. La función que se pasa al constructor de Promise se llama función ejecutora. La función ejecutora se ejecuta inmediatamente después de crear la promesa.

La función ejecutora debe llamar a la función resolve si la promesa se resuelve satisfactoriamente. La función resolve toma un valor que se utiliza para resolver la promesa. La función ejecutora también puede llamar a la función reject si la promesa se rechaza. La función reject toma un valor que se utiliza para indicar el motivo del rechazo.

Una vez que se crea una promesa, se pueden encadenar promesas utilizando los métodos **then()** y **catch()**. El método then() se utiliza para manejar el caso en el que la promesa se resuelve satisfactoriamente. El método **catch()** se utiliza para manejar el caso en el que la promesa se rechaza.

Aquí hay un ejemplo simple que ilustra el uso de las promesas en JavaScript:

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Hacer algo asíncrono, como una llamada a una API
  const exito = true;
  if (exito) {
    resolve("Éxito!");
  } else {
    reject("Error!");
  }
});

miPromesa
  .then((mensaje) => {
    console.log(mensaje); // Imprime "Éxito!"
  })
  .catch((error) => {
    console.log(error); // Imprime "Error!"
  });
```

En este ejemplo, creamos una promesa que devuelve una cadena de caracteres. Si la promesa se resuelve con éxito, el método then() se ejecuta y se imprime el mensaje "Éxito!". Si la promesa se rechaza, el método catch() se ejecuta y se imprime el mensaje "Error!".

En conclusión, las promesas son una herramienta importante en JavaScript para manejar la asincronía y garantizar que el código se ejecute correctamente en situaciones en las que el tiempo de respuesta puede variar. Con la ayuda de las promesas, podemos crear código más claro y fácil de entender para nuestras aplicaciones web.

## Ejemplo 1: Obtener datos de una API
```javascript
const obtenerDatosDeAPI = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

obtenerDatosDeAPI()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

En este ejemplo, creamos una promesa que envía una solicitud GET a una API. Si la solicitud se completa con éxito, la promesa se resuelve y devuelve la respuesta de la solicitud. Si ocurre algún error, la promesa se rechaza y devuelve el mensaje de error.

## Ejemplo 2: Cargar una imagen
```javascript
const cargarImagen = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject('No se pudo cargar la imagen');
    img.src = url;
  });
};

cargarImagen('https://via.placeholder.com/150')
  .then((img) => document.body.appendChild(img))
  .catch((error) => console.log(error));
```

En este ejemplo, creamos una promesa que carga una imagen desde una URL y la agrega al cuerpo del documento. Si la imagen se carga con éxito, la promesa se resuelve y devuelve el elemento de imagen. Si ocurre algún error, la promesa se rechaza y devuelve el mensaje de error.

## Ejemplo 3: Leer un archivo
```javascript
const leerArchivo = (archivo) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(archivo);
  });
};

const archivoInput = document.querySelector('input[type="file"]');
archivoInput.addEventListener('change', () => {
  const archivo = archivoInput.files[0];
  leerArchivo(archivo)
    .then((contenido) => console.log(contenido))
    .catch((error) => console.log(error));
});
```
En este ejemplo, creamos una promesa que lee un archivo de entrada y devuelve su contenido como una cadena de caracteres. Si el archivo se lee con éxito, la promesa se resuelve y devuelve su contenido. Si ocurre algún error, la promesa se rechaza y devuelve el mensaje de error.

## Cuando usar promesas:
Deberías usar promesas en JavaScript cuando necesites realizar operaciones asíncronas y quieras trabajar con el resultado de esas operaciones de manera más fácil y legible.

Aquí hay algunas situaciones comunes en las que las promesas son útiles:

1. Realización de solicitudes de red: Cuando realizas solicitudes HTTP a un servidor para obtener o enviar datos, generalmente necesitas esperar a que se complete la solicitud antes de continuar con otras tareas en tu aplicación. Las promesas pueden ayudarte a trabajar con los datos que se devuelven de una solicitud HTTP de manera más fácil y organizada.

2. Operaciones de E / S de archivos: Cuando necesitas leer o escribir archivos en tu sistema de archivos local, es posible que necesites esperar a que se complete la operación antes de continuar con otras tareas en tu aplicación. Las promesas pueden ayudarte a trabajar con el contenido de los archivos de manera más fácil y legible.

3. Operaciones de animación: Cuando necesitas realizar animaciones en tu aplicación, es posible que necesites esperar a que se complete una animación antes de continuar con otras tareas en tu aplicación. Las promesas pueden ayudarte a realizar animaciones de manera más fácil y organizada.

En general, deberías usar promesas cuando necesites realizar operaciones asíncronas en JavaScript y quieras trabajar con el resultado de esas operaciones de manera más fácil y legible.

## Diferencias entre promesas y callbacks:

Las promesas y los **callbacks** son dos formas diferentes de manejar operaciones asíncronas en JavaScript. Aquí te muestro algunas de las principales diferencias entre promesas y callbacks:

1. Manejo de errores: Con las promesas, puedes manejar los errores de manera más fácil y legible mediante el uso del método catch(). Con los callbacks, el manejo de errores a menudo se realiza mediante el paso de un objeto de error como argumento al callback.

2. Encadenamiento de operaciones: Con las promesas, puedes encadenar varias operaciones asíncronas juntas utilizando el método then(). Esto hace que sea más fácil leer y escribir código que involucre múltiples operaciones asíncronas. Con los callbacks, esto a menudo implica anidar múltiples funciones de callback juntas, lo que puede ser más difícil de leer y escribir.

3. Legibilidad del código: En general, el uso de promesas puede hacer que el código sea más legible y fácil de entender que el uso de callbacks. Las promesas se asemejan más a un flujo lineal de código, mientras que los callbacks a menudo involucran funciones anidadas que pueden ser más difíciles de entender.

4. Soporte nativo: Las promesas son una característica nativa del lenguaje JavaScript, lo que significa que están disponibles en todos los navegadores modernos. Los callbacks, por otro lado, son simplemente funciones que se pasan como argumentos a otras funciones, por lo que su uso y compatibilidad depende del entorno en el que se ejecuta el código.

## Conclusiones

En resumen, las promesas ofrecen una forma más fácil y legible de manejar operaciones **asíncronas** en **JavaScript** en comparación con los **callbacks**. Además, las promesas ofrecen ventajas adicionales, como el **encadenamiento** de operaciones y el manejo de errores más fácil.
