---
title: Aprende a crear rutas con React Router
publishedDate: 2020-06-14T22:49:11.000Z
updatedDate: 2020-06-15T16:45:25.000Z
pubDate: 2020-06-14T22:49:11.000Z
tags: 
- react
- react-router
- JavaScript
- routes
excerpt: Seguramente habrás escuchando sobre React Router y si no es así el día de hoy vas aprender a trabajar con esta librería la cual nos ayuda con el manejo de ruta.
description: Seguramente habrás escuchando sobre React Router y si no es así el día de hoy vas aprender a trabajar con esta librería la cual nos ayuda con el manejo de ruta.
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682885734/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/react-router_vooifr.jpg"
---

Seguramente habrás escuchando sobre **[React Router](https://reacttraining.com/react-router/)** y si no es así el día de hoy vas aprender a trabajar con esta librería la cual nos ayuda con el manejo de rutas en nuestra aplicación. Al día de hoy **React Router** se puede trabajar tanto para web como para móvil, siendo `react-router-dom` para web y `react-router-native` para móvil.

Vamos a trabajar en la parte web y comenzaremos con una aplicación creada con `creat-react-app` como código base y vamos a convertirla en una **SPA **(single page application) gracias a React Router.

### ¿Qué es React Router?

**React Router** es una colección de componentes de navegación la cual podemos usar como ya lo mencione tanto en web o en móvil con React Native. Con esta librearía vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

### Beneficios de React Router

- Establecer rutas en nuestra aplicación ej: Home, About, User.
- Realizar redirecciones
- Acceso al historial del navegador
- Manejo de rutas con parámetros
- Páginas para el manejo de errores como 404

### Componentes pilares de React Router

**BrowserRouter**

Este componente es el encargado de envolver nuestra aplicación dándonos acceso al API historial de HTML5 (pushState, replaceState y el evento popstate) para mantener su UI sincronizada con la URL.

**Switch**

Este componente es el encargado de que solo se renderice el primer hijo **Route** o **Redirect** que coincide con la ubicación. Si no usar este componente todos los componentes Route o Redirect se van a renderizar mientras cumplan con la condición establecida.

**Route**

Con **Route** podemos definir las rutas de nuestra aplicación, quizás sea el componente más importante de React Router para llegar a comprender todo el manejo de esta librería. Cuando definimos una ruta con Route le indicamos que componente debe renderizar.

Este componente cuanta con algunas propiedades.

**Path:** la ruta donde debemos renderizar nuestro componente podemos pasar un string o un array de string.

**Exact:** Solo vamos a mostrar nuestro componente cuando la ruta sea exacta. Ej: /home === /home.

**Strict:** Solo vamos a mostrar nuestro componente si al final de la ruta tiene un slash. Ej: /home/ === /home/

**Sensitive:** Si le pasamos true vamos a tener en cuenta las mayúsculas y las minúsculas de nuestras rutas. Ej: /Home === /Home

**Component:** Le pasamos un componente para renderizar solo cuando la ubicación coincide. En este caso el componente se monta y se desmonta no se actualiza.

**Render:** Le pasamos una función para montar el componente en línea.

### Requisitos

Tener instalado [node.js](https://nodejs.org/en/) puede usar [nvm](https://github.com/nvm-sh/nvm) para gestionar varias versiones de node.js, yo voy a usar la versión v10.15.3, npm o [yarn](https://yarnpkg.com/) manejo básico de la terminal, un editor de código como [VScode](https://code.visualstudio.com/), tener conocimiento básico de [React](https://johnserrano.co/blog/primeros-pasos-con-react).

### Creando nuestro proyecto

Para crear nuestro proyecto como lo mencione antes vamos a usar `create-react-app` para eso ejecutamos el siguiente comando en la terminal.

`npx create-react-app routes-react`

Esperamos que instale y cree nuestro proyecto y accedemos desde la terminal con: `cd routes-react`

Abrimos nuestro editor de código si estas usando **VScode **puede usar la terminal parado en la raíz de nuestro proyecto usamos `code .` para abrirlo desde VScode.

Si queremos probar nuestro proyecto podemos correr **npm start** o **yarn start** desde la terminal. Hasta el momento tenemos un proyecto de react listo para modificar y agregar nuestros componentes e instalar **React Router**.

![yarn start](https://res.cloudinary.com/john-serrano/image/upload/v1682886038/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/image_1_jf75lq.png)

### Instalación de React Router

Para instalar la librería solo tenemos que ir a la terminal estar ubicados en la raíz de nuestro proyecto y ejecutar el siguiente comando.

`npm install react-router-dom`

`yarn add react-router-dom`

### Trabajando con React Router

Teniendo todo listo ahora si vamos a nuestro editor de código y abrimos el archivo **App.js** que está ubicado en `src/App.js` acá vamos a limpiar muchas cosas hasta que al final tengamos algo como el siguiente código.

```javascript
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
```

Importamos nuestro componente **BrowserRouter** le damos un nombre **Router** también importamos **Route** de `react-router-dom`. Envolvemos nuestra aplicación con Router y definimos nuestra primera ruta en este caso nuestro home le indicamos que debe ser exacta la ruta y que haga render de nuestro componente Home pero donde esta nuestro componente Home bueno vamos a crearlo.

```javascript
// Home.js
import React from 'react'

const Home = () => (
  <section className="Home">
    <h3>Hello Home</h3>
  </section>
)

export default Home
```

Este es nuestro componente **Home **que está dentro de una carpeta llamada `pages/Home` y solo tenemos un `h3` con un texto. Si vamos al navegador a [http://localhost:3000/](http://localhost:3000/) vamos a ver solo el texto.

![Hello Home](https://res.cloudinary.com/john-serrano/image/upload/v1682886015/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/image-1_uqsemb.png)

Ahora vamos a crear otras páginas y una página para manejar el error 404.

```javascript
// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
      <div className="App">
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route component={PageNotFound} />
      </div>
    </Router>
  );
}

export default App;
```
    
Si vamos al navegador después de agregar estas nuevas rutas vamos a tener un pequeño problema y es que también vamos a tener el render de nuestro componente **PageNotFound** para solucionar esto lo que tenemos que hacer es envolver nuestras rutas con el componente **Switch**.

![Hello PageNotFound](https://res.cloudinary.com/john-serrano/image/upload/v1682886084/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/image-2_vevcqt.png)

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/users" render={() => <Users name='John Serrano' />} />
  <Route component={PageNotFound} />
</Switch>
```
    

Listo con esto ya solucionamos ese pequeño problema. Antes de seguir vamos a crear un menú de navegación para precisamente eso recorrer todas nuestras páginas y transformar nuestro proyecto en una **SPA **para esto vamos a usar el componente **Link **de React Router.

> Todos los componentes que están dentro de `./pages` solo tiene un `h3` con un texto.

### Link

Con Link vamos a poder navegar por nuestra aplicación, este componente recibe las siguientes propiedades.

**To:** le podemos pasar un string, object o una function para indicarle la ruta a la cual queremos navegar.

**Replace:** cuando es verdadero, y hacemos clic en el enlace reemplazará la entrada actual en la pila del historial en lugar de agregar una nueva.

```jsx
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/users">Users</Link>
  </li>
  <li>
    <Link to="/hola-mundo">Hello</Link>
  </li>
  </ul>
</nav>
```
    

Agregamos el siguiente código en nuestro componente `App.js` dentro del **div **con la clase App, ahora podemos ver un menú de navegación en nuestra aplicación. Me falto mencionar debemos hacer el **import **de Link.

```javascript
// App.js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```
    

![Hello About](https://res.cloudinary.com/john-serrano/image/upload/v1682886245/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/image-3_wnecxn.png)

### Redirect

Con este componente podemos causar un redireccionamiento a una ruta diferente a la ruta actual reemplazando el **location **actual y el historial de navegación. Tiene las siguientes propiedades.

**From:** le pasamos un string u object para indicarle desde donde se va hacer el redireccionamiento.

**To:** le pasamos un string u object hacia dónde vamos a realizar el redireccionamiento.

**Push:** si es verdadero no modifica el location del historial por el contrario agrega esta nueva locación al historial.

`<Redirect *from*="/redirect" *to*="/about" />`

Agregamos ese componente dentro de **Switch**, ahora si vamos al navegador y en la barra de dirección escribimos lo siguiente [http://localhost:3000/redirect](http://localhost:3000/redirect) vamos a ver que nos hace un redirect a la ruta /about. No olvides hacer el **import **de Redirect.

### Hook useParams

Con este **Hook **podemos acceder a los **params **de las rutas veamos un ejemplo para eso debemos crear un nuevo componente el cual se va encargar de usar el hook y debemos agregar un nuevo link al menú de navegación al igual que un Route.

```javascript
// App.js
import Blog from './pages/Blog'


// App.js
<li>
  <Link to="/blog/aprende-react-router">Aprende</Link>
</li>

<Route exact path="/blog/:slug" component={Blog}></Route>


// pages/Blog.js
import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  let { slug } = useParams()
  
  return (
    <section className="Blog">
      <p>Now showing post {slug}</p>
    </section>
  )
}

export default Blog
```

Lo primero es importar el hook y obtener el **params** que definimos en el **Route**, con este hook es muy fácil acceder al params que indicamos en el Route si vamos al navegador y damos click en el nuevo link que tiene como nombre aprende vamos a ver lo siguiente.
![Hook Params](https://res.cloudinary.com/john-serrano/image/upload/v1682886334/John%20Serrano/Blog%20Post/aprende-a-crear-rutas-con-react-router/image-4_khkzbr.png)
### Conclusiones

Podemos concluir que **React Router** nos provee de todos componentes necesarios para convertir nuestro proyecto en una **SPA **y obtener una navegación entre nuestros componentes sin perder el historial de navegación.

Espero haya sido de tu ayuda este articulo para comenzar o comprender un poco mejor el manejo de esta librería igualmente pueden ir a la [documentación](https://reacttraining.com/react-router/web/guides/quick-start) oficial en la cual pueden encontrar muchos más ejemplos y componentes que no se vieron en este artículo, hasta la próxima.

Código completo del ejemplo esta en [GitHub](https://github.com/blog-johnserrano/routes-react).
