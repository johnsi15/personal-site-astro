---
title: ¿Que es Firebase y que podemos hacer? Configuración inicial
publishedDate: 2021-01-11T20:37:10.000Z
updatedDate: 2021-01-11T22:42:06.000Z
pubDate: 2021-01-11T20:37:10.000Z
description: Firebase es un conjunto de herramientas conocido como BAAS (Backend as a Service) o Backend como Servicio el cual nos brinda servicios para desarrollar nuestra.
tags:
- JavaScript
- Firebase
- desarrollo-web
- Saas
- Google
- Cloud
primaryTag: { name: 'JavaScript', slug: 'javascript' }
excerpt: Firebase es un conjunto de herramientas conocido como BAAS (Backend as a Service) o Backend como Servicio el cual nos brinda servicios para desarrollar nuestra.
canonicalURL: "https://johnserrano.co/blog/que-es-firebase-y-que-podemos-hacer-configuracion-inicial"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682884284/John%20Serrano/Blog%20Post/que-es-firebase-y-que-podemos-hacer-configuracion-inicial/Firebase_tfewys.jpg"
---

Firebase es un conjunto de **herramientas** conocido como **BAAS** (Backend as a Service) o **Backend como Servicio** el cual nos brinda servicios para desarrollar nuestra app móvil o web de una forma mas sencilla, ágil, robusta y escalable. También hay que mencionar que Firebase es un servicio de Google y ellos se encargan de crear y administrar las funciones, bases de datos e infraestructura de nuestra aplicación.

Firebase nos brinda **servicios** para la construcción, **calidad** y crecimiento del mercado. Además firebase cuenta con integraciones con productos o servicios muy usados en la industria. Toda la infraestructura funciona con **Google Cloud,** así que, tenemos muchas posibilidades para escalar nuestras aplicaciones.

### Servicios mas usados de Firebase

- Firestore
- Autenticación
- Cloud Storage
- Cloud Messaging
- Firebase Hosting

### Integraciones

- Google Ads
- AdMob
- Google Marketing Platform
- Play Store
- Data Studio
- BigQuery
- Slack

### Empresas que usan Firebase

- Trivago
- Venmo
- Duolingo
- The new York Times
- Shazam
- The Economist

Veamos un poco mas en detalle de que se trata cada uno de estos servicios que mencione antes y el aporte que obtenemos para nuestros proyectos.

### Firestore

Es una base de datos NoSQL que nos permite almacenar y sincronizar en tiempo real los datos en nuestra aplicación.  Uno de los beneficios a la hora de usar esta base de datos para los desarrolladores es que no se necesita **soporte complejo backends** ya que Firebase dispone de completos SDKs para una gran variedad de plataformas, incluidas Android, iOS, y Web.

### Autenticación

Es una solución segura para incorporar el inicio de sesión con **múltiples plataformas** como **Google**, **Facebook**, **Twitter**, **GitHub**, Correo/Contraseña, Teléfono y muchas otras. Si la usamos en aplicaciones web el proceso de configuración es realmente sencillo, además nos permite crear, autenticar y administrar los usuarios de nuestra aplicación, también cuenta con un sistema de recuperación de contraseña por correo entre otras cosas.

### Cloud Storage

Este servicio nos permite guardar **archivos estáticos** de nuestra aplicación y también archivos de nuestros usuarios si lo necesitamos como por ejemplo un formulario para **subir imágenes** o foto de perfil de un usuario.

### Cloud Messaging

Este servicio nos permite **enviar notificaciones** a nuestros usuarios y es totalmente gratis.

### Firebase Hosting

Con este servicios podemos alojar un sitio estático obteniendo automáticamente **SSL y HTTP2**. Que quiero decir con un [sitio estático](https://johnserrano.co/blog/crea-un-sitio-web-con-gatsbyjs-y-react-introduccion), es un sitio que tiene html, css y js si usamos una librería como [React](https://johnserrano.co/blog/primeros-pasos-con-react) y usamos un framework como [next.js](https://johnserrano.co/blog/introduccion-a-next-js-el-framework-de-react) podemos hacer un build de nuestro sitio y obtener los **estáticos** y usar Firebase Hosting para alojarlo.

Si necesariamente necesitamos que nuestra aplicación corra en el backend podemos usar entonces otro servicio de Firebase llamado **Cloud Functions**. Una vez desplegada nuestra aplicación hará parte del CDN de Firebase y se replicará en servidores a lo largo de todo el mundo.

### Lenguajes de programación que puedo usar con Firebase

Actualmente Firebase soporta y tiene **SDK** para múltiples lenguajes de **programación** comenzando con **JavaScript**, [Node.js](https://johnserrano.co/blog/servidor-basico-con-node-js), para desarrollar aplicaciones de iOS(Swift y Objective C) y Android(Java). Aun así, el SDK de Firebase está disponible también para **Python** y aplicaciones Java. También podemos usarlo con C++ y Unity.

### ¿Cuánto cuesta usar Firebase?

La parte buena de este servicio es que tiene una capa gratuita prácticamente para todos sus servicios y claro también cuenta con unos planes pagos los cuales son un plan fijo y uno de pago según **servicios consumidos** como un servicio **cloud**.

Para comenzar con el **plan gratuito** es mas que suficiente si ya tienes una empresa relativamente grande con muchas visitas al mes creo que los mas recomendable es usar otro tipo de servicios ya que Firebase se vuelve bastante costoso cuando nuestra aplicación tiene mucho flujo de usuarios.

### Configuración inicial de un proyecto con Firebase

En este caso vamos a ver la configuración para un proyecto en la web con **JavaScript**, lo primero que tenemos que hacer es crear una cuenta en firebase si ya tiene un correo gmail lo único que tienes que hacer es ingresar a [https://console.firebase.google.com/](https://console.firebase.google.com/).

Listo una vez dentro de la consola de firebase lo que tenemos que hacer es crear un proyecto.
![Añadir proyecto en Firebase](https://static.johnserrano.co/content/images/2021/01/image.png)
Le damos click en añadir proyecto esto constara de 3 pasos el primero es darle un nombre el segundo es activar google analytics si quieren lo pueden desactivar y el tercero es darle a **crear el proyecto** y esperamos que termine ese proceso.
![Consola de administración](/content/images/2021/01/image-1.png)
Este serie el resultado final, con esto tenemos acceso a varios de sus servicios. Hacemos click en el **icono Web** para iniciar el flujo de trabajo de configuración.
![Aplicación en Firebase](/content/images/2021/01/image-2.png)
Le damos un nombre y le damos registrar, ese nombre es interno solo se puede ver en la consola, con esto obtenemos el código para inicializar nuestra **aplicación**, podemos copiar ese código ir a nuestro editor de código favorito crear un html y pegar ese código, algo así como esto.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Firebase init</title>

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="<https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js>"></script>
  </head>
  <body>
    <!-- TODO: Add SDKs for Firebase products that you want to use
      <https://firebase.google.com/docs/web/setup#available-libraries> -->

    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: 'xxxxx',
        authDomain: 'xxxx',
        projectId: 'xxxx',
        storageBucket: 'xxxx',
        messagingSenderId: 'xxxx',
        appId: 'xxxxx',
      }
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
    </script>
  </body>
</html>
```
    

InitializeApp
Gracias a la **CDN** podemos importar solo los servicios que necesitamos, siempre debemos importar el servicio de **firebase-app.js** pero del resto podemos importar solo los que necesitamos.

```html
<!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
<script src="<https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js>"></script>

<!-- Add Firebase products that you want to use -->
<script src="<https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js>"></script>
<script src="<https://www.gstatic.com/firebasejs/8.2.2/firebase-firestore.js>"></script>
```
    

Con esto ya tenemos todo preparado para comenzar a usar cualquiera de sus servicios, esta es la configuración mínima para iniciar.

### Conclusiones

Dejo este artículo hasta este punto pero cabe mencionar que este es uno de **varios artículos** que voy a escribir donde vamos a ver la configuración y uso de cada uno de los servicios mas usados por Firebase.

Si tienes dudas con respecto a cada uno de los servicios de **Firebase** los animo a que visiten la documentación, una de las grandes cosas que tiene esta herramienta es su [documentación](https://firebase.google.com/docs/web/setup) es muy completa para cada uno de sus servicios en los diferentes **lenguajes de programación** y SDK. No siendo mas espero tener pronto otro artículo hablando de alguno de sus servicios, hasta la próxima.
