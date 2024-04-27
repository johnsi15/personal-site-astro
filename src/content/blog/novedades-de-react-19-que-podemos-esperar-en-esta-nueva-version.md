---
title: "Novedades de React 19: ¿Qué podemos esperar en esta nueva versión?"
publishedDate: "2024-04-06T16:29:10.000Z"
updatedDate: "2024-04-06T17:09:31.000Z"
pubDate: "2024-04-06T16:29:10.000Z"
description: "Tras los hooks, React 19 promete ser otro hito en el desarrollo. Descubre más sobre este próximo lanzamiento que seguirá al 18.2.0 de junio de 2022."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "react", "frontend", "front-end", "software", "web", "johnserrano.co", "johnserrano", "sistemas", "programadores", "informatica", "johnserranodev"]
primaryTag: { name: 'React', slug: 'react' }
excerpt: "Tras los hooks, React 19 promete ser otro hito en el desarrollo. Descubre más sobre este próximo lanzamiento que seguirá al 18.2.0 de junio de 2022."
canonicalURL: "https://johnserrano.co/blog/novedades-de-react-19-que-podemos-esperar-en-esta-nueva-version"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1712408986/John%20Serrano/Blog%20Post/novedades-de-react-19-que-podemos-esperar-en-esta-nueva-version/react19_gufm1n.jpg"
---

## React 19 está por llegar, ¿qué hay de nuevo? 🚩

React 19 será otro lanzamiento histórico después de la introducción de los hooks. La última vez que **React** lanzó una **versión fue el 14 de junio de 2022**, siendo el número de **versión 18.2.0**. Es algo curioso que tenga tanto tiempo sin recibir una actualización para una tecnología tan popular como React.

Finalmente ha llegado la noticia de la tan esperada nueva versión de React, algo que la comunidad había estado solicitando **durante mucho tiempo** y que ha generado cierto descontento entre sus miembros. 🤨

El equipo de React ha confirmado que la **próxima versión será una versión major**, siendo el número de **versión 19.0.0**.
Nuevas funciones que podrían lanzarse oficialmente en la versión 19. 🚀

## Automatic Memoization
Es un compilador que ya ha sido implementado en el entorno de producción de Instagram. El equipo de React tiene planes de extender su uso a más plataformas dentro de **Meta** y eventualmente lo convertirá en un proyecto de código abierto.

Con este nuevo compilador ya le podemos decir adiós a los hooks **useMemo**, **useCallback** los cuales nos permitían memorizar o almacenar en caché manualmente los estados para reducir las **reproducciones innecesarias (re-renders)**. Después de años de esfuerzo, el nuevo compilador ha llegado con éxito.

## Actions
React Actions desarrollado como parte de la exploración de soluciones por parte del equipo de React para enviar datos desde el **cliente al servidor**. Esta característica permite a los desarrolladores pasar una función a los elementos del DOM (como `<form/>`).

```jsx
<form action={sendMessage}>
  <input name="message" />
  <button type="submit">Send message</button>
</form>
```

La action function puede ser sincrónica o asincrónica. Al utilizar acciones, React gestiona el ciclo de vida del envío de datos para el desarrollador. Podemos **acceder al estado actual y la respuesta de las operaciones** de formulario a través de los hooks useFormStatus y useFormState.

Las actions se pueden utilizar en **escenarios de interacción cliente-servidor**, como solicitar cambios en la base de datos (agregar, eliminar, actualizar datos) e implementar formularios (como formularios de inicio de sesión, formularios de registro).

Además de combinarse con **useFormStatus** y **useFormState**, las actions también se pueden usar con useOptimistic y use server.

## Directivas: use client y use server
Las directivas use client y use server han estado disponibles en la **versión Canary** por un tiempo y finalmente se unen a la versión Stable en v19.
Las dos directivas mencionadas ya son utilizadas por **distintos frameworks de React** y están principalmente diseñadas para ser usadas en frameworks como **Next.js** y **Remix**.

## Otras actualizaciones

***Andrew Clark, miembro del equipo de React, también reveló que habría los siguientes cambios en 2024:***
+ ✅ forwardRef → ref es un prop: Simplificar la forma en que se hacen las referencias a elementos o componentes internos en un componente secundario al tratar ref como un prop normal.
+ ✅ React.lazy → RSC, promesa como hijo: capacidades mejoradas de división de código y carga diferida.
+ ✅ useContext → use(Context): Ofreciendo una nueva forma de acceder a Context.
+ ✅ throw promise → use(promise): Mejora del manejo de la carga de datos asincrónica.
+ ✅ <Context.Provider> → <Context>: Simplificando el uso de proveedores de contexto.
Sin embargo, el sitio web oficial de React aún no ha proporcionado información detallada sobre estas posibles actualizaciones.

## Conclusiones
En mi opinión, la próxima actualización de React promete ser una mejora significativa que **fortalecerá aún más el ecosistema de React**. Estoy emocionado por **las nuevas características** que se han pedido durante mucho tiempo y creo que estas mejoras contribuirán en gran medida a facilitar el desarrollo web. 

Esperemos que estas actualizaciones lleguen pronto y que React continúe creciendo para ofrecer aún **más beneficios a la comunidad** de desarrolladores.

Gracias por tomarte el tiempo de leer. Si disfrutaste del contenido, te invito a **seguirme en mis redes sociales**, donde comparto contenido regularmente. ¡Saludos y hasta la próxima! 🔥

🔵 [Facebook](https://www.facebook.com/johnserranodev)
🟠 [Instagram](https://www.instagram.com/johnserranodev/)
🔴 [YouTube](https://www.youtube.com/@johnserranodev)