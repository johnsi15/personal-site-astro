---
title: "FormData en JavaScript: Guía definitiva 2025 para manejar formularios"
publishedDate: "2025-01-24T10:29:10.000Z"
updatedDate: "2025-01-24T17:09:31.000Z"
pubDate: "2025-01-24T10:29:10.000Z"
description: "Descubre cómo new FormData() facilita la manipulación y el envío de formularios en JavaScript. Aprende con ejemplos prácticos."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "frontend", "front-end", "2025", "software", "web", "johnserrano.co", "johnserrano", "formdata"]
primaryTag: { name: 'JavaScript', slug: 'javascript' }
excerpt: "Descubre cómo new FormData() facilita la manipulación y el envío de formularios en JavaScript. Aprende con ejemplos prácticos."
canonicalURL: "https://johnserrano.co/blog/formdata-object-en-javascript"
draft: false
featureImage: "https://download.johnserrano.co/ai-generated-9352354_1280.jpg"
---

El método `new FormData()` es una función constructora en JavaScript que permite crear un nuevo objeto de tipo **FormData**. Este objeto es especialmente útil para gestionar datos provenientes de **formularios HTML** y facilita su construcción y envío al servidor mediante solicitudes **AJAX** o **fetch**.

Cuando utilizas `new FormData()`, tienes la opción de pasar **como argumento una referencia** a un elemento de formulario HTML. Si proporcionas un formulario como referencia, el **constructor recopila automáticamente todos los campos de entrada del formulario**, como campos de texto, casillas de verificación, botones de radio e incluso campos para cargar archivos, y los agrega al objeto `FormData`.

## Beneficios de usar FormData

El principal beneficio de `FormData` radica en su capacidad para **simplificar el manejo de datos complejos**, especialmente cuando se trabaja con formularios que contienen **múltiples campos** o archivos.

Además, este objeto se encarga de formatear los datos correctamente como **parte del cuerpo de la solicitud HTTP**, estableciendo automáticamente los encabezados necesarios para enviar información **multipart/form-data** al servidor.

En términos prácticos, `FormData` es ideal para **aplicaciones web modernas que requieren enviar datos de manera dinámica** sin necesidad de recargar la página, ofreciendo una solución eficiente y flexible para el manejo de formularios.

## Ejemplo sin necesidad de pasar un elemento de formulario

Aquí tienes un ejemplo de cómo crear un objeto `FormData` **sin necesidad de pasar un elemento de formulario**:

```js
const formData = new FormData();

// Agregamos los datos manualmente al objeto FormData
formData.append('nombre', 'John Serrano');
formData.append('edad', 30);
formData.append('archivo', fileInput.files[0]);

// Enviamos el objeto FormData al servidor con fetch
fetch('https://ejemplo.com/api', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Respuesta del servidor:', data);
  })
  .catch((error) => {
    console.error('Error al enviar los datos:', error);
  });
```

**Explicación**:
1. Creamos el objeto FormData vacío:
 - Se inicializa un nuevo objeto `FormData` sin pasar un formulario como referencia.

2. Agregamos los datos manualmente:
 - Usando el método `append()`, puedes agregar _**pares clave-valor**_ al objeto `FormData`. **_Por ejemplo_**:
`formData.append('nombre', 'John Serrano')` agrega un campo llamado nombre con el valor 'Juan'.
También puedes agregar archivos directamente, como en el ejemplo con `fileInput.files[0]`.

3. Enviar los datos al servidor:
 - La API `fetch` permite enviar el objeto `FormData` como el cuerpo de una solicitud POST, y automáticamente configura el encabezado `Content-Type` como `multipart/form-data`.

Este método es útil cuando necesitas construir los datos dinámicamente **sin depender de un formulario HTML**.

## Ejemplo utilizando un elemento de formulario

Aquí tienes un ejemplo de cómo crear un objeto `FormData` **utilizando un elemento de formulario HTML**:

```html
<form id="miFormulario">
  <input type="text" name="nombre" value="John Serrano">
  <input type="number" name="edad" value="30">
  <input type="file" name="archivo">
</form>
```

```js
// Seleccionamos el formulario
const formulario = document.getElementById('miFormulario');

// Creamos un objeto FormData a partir del formulario
const formData = new FormData(formulario);

// Enviamos el objeto FormData al servidor con fetch
fetch('https://ejemplo.com/api', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Respuesta del servidor:', data);
  })
  .catch((error) => {
    console.error('Error al enviar los datos:', error);
  });
```

**Explicación**:
1. Formulario HTML:
 - Definimos un formulario con distintos campos, como texto, números y archivos.
Los atributos `name` de cada campo son esenciales, ya que determinan las claves que se usarán en el objeto `FormData`.

2. Creamos el objeto FormData con un formulario:
 - Al pasar el elemento `form` como argumento a `new FormData(formulario)`, el constructor automáticamente recopila todos los datos de los campos del formulario, incluyendo archivos.

3. Enviamos los datos al servidor:
 - De forma similar al ejemplo anterior, se utiliza `fetch` para enviar los datos del formulario como una solicitud **POST**. El navegador se encarga de configurar el encabezado `Content-Type` como `multipart/form-data`.

**Ventaja de este método**:

Es ideal cuando ya **tienes un formulario HTML definido** y quieres enviar todos sus datos sin tener que **procesarlos manualmente**. Esto simplifica la lógica de manejo de formularios dinámicos en aplicaciones web.

## Cómo manipular y serializar los datos enviados desde un formulario

**Algunas API no aceptan objetos FormData**:

Si examinas los datos devueltos en `const formData = new FormData(formulario)`, notarás que la información del formulario no aparece en el objeto de datos recibido.

Esto sucede porque ciertas API, como **JSON Placeholder**, no trabajan con objetos `FormData`. En su lugar, esperan recibir un **objeto JSON**.

Para convertir un objeto `FormData` en un **objeto JSON**, puedes iterar sobre sus valores utilizando un bucle. Esto se logra recorriendo el objeto `FormData` con su método `keys()`, que devuelve un iterador de las claves del formulario. Con un bucle `for...of`, puedes recorrer cada clave, obtener su valor usando el método `get()`, y luego agregarlo a un **nuevo objeto JSON**.

De esta manera, puedes transformar los datos del formulario para que sean **compatibles con API que requieren formato JSON** en lugar de `FormData`.

```js
const obj = {};
const formData = new FormData(form);

for (var key of formData.keys()) {
  obj[key] = formData.get(key);
}
```

Veamos un ejemplo aplicando una serialización de un objeto `FormData` a un **formato JSON** para poder manipular los datos y enviarlos correctamente a una **API que no acepta FormData**:


```js
document.addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target
  const formData = new FormData(form)
  console.log(formData)

  const dataJSON = {};
  for (var key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  console.log(dataJSON)

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJSON)
  }).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(function(data) {
    console.log(data);
  }).catch(function(error) {
    console.warn(error);
  });
});
```

**Explicación del código**:

1. Crear el objeto FormData:
 - Se genera a partir del formulario para recopilar automáticamente todos los datos del mismo.

2. Iterar sobre FormData y serializar:
 - Usamos el método `keys()` para obtener las claves de cada campo del formulario.
Con un bucle `for...of`, iteramos sobre cada clave y utilizamos el método `get()` para obtener su valor.
Cada par **clave-valor** se agrega al objeto **dataJSON**.

3. Enviar los datos serializados:
 - Se convierte el objeto `dataJSON` en una **cadena JSON** con `JSON.stringify()`.
La solicitud se configura con el encabezado `Content-Type: application/json` para que la **API** sepa que está recibiendo **datos en formato JSON**.

## Una alternativa más sencilla usando el método `Object.fromEntries()`

`Object.fromEntries(new FormData(event.target));`

**Ejemplo**:

```js
document.addEventListener('submit', function(event) {

  event.preventDefault();
  
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;'
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(function(data) {
    console.log(data);
  }).catch(function(error) {
    console.warn(error);
  });
});
```

Otra forma también de aplicar el método `Object.fromEntries()` sería así:

```js
const formData = new FormData(form)
const data = Object.fromEntries(formData.entries())
```

Te dejo un carrusel donde te explico las diferentes formas de trabajar con el `new FormData()`, [Objeto FormData() transformando los datos de un formulario con vanilla JS 🔥](https://www.linkedin.com/posts/johnserranodev_objeto-formdata-transformando-los-datos-activity-7193217987410096130-YE_c?utm_source=share&utm_medium=member_desktop).

## Finalmente un ejemplo aplicándolo a React

```jsx
const formRef = useRef(null)

const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.currentTarget
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())

  console.log(data)
  formRef.current ? .reset()
}
```

## Conclusión

En resumen, `new FormData()` es una herramienta poderosa en JavaScript para manejar datos de **formularios de manera sencilla**. Permite capturar todos los campos de un formulario, incluidos archivos, y **enviarlos fácilmente a un servidor**. 

Aunque no todos los `endpoints` aceptan objetos `FormData`, puedes convertirlos a otros **formatos como JSON** si es necesario. Usar `FormData` mejora la **flexibilidad** y la **eficiencia** en el manejo de formularios, especialmente cuando trabajas con **AJAX** o **solicitudes fetch**.

Gracias por leer.
