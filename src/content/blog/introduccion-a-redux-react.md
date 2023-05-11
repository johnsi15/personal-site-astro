---
title: Introducción a Redux + React
publishedDate: "2018-12-02T20:28:53.000Z"
updatedDate: "2020-02-18T15:40:20.000Z"
pubDate: "2018-12-02T20:28:53.000Z"
tags: 
- react
- JavaScript
- Developer
- Front-End
- development
- webdeveloper
- redux
excerpt: Redux es una librería que nos ayuda a controlar estado de nuestras aplicaciones de una forma más fácil y no sufrir como lo vimos en el ejemplo del artículo.
description: Redux es una librería que nos ayuda a controlar estado de nuestras aplicaciones de una forma más fácil y no sufrir como lo vimos en el ejemplo del artículo.
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/introduccion-a-redux-react"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683046444/John%20Serrano/Blog%20Post/introduccion-a-redux-react/react-redux-compressor_ah5feo.jpg"
---

Vamos a seguir hablando de **React** pero ahora con **Redux** en un [artículo](http://bit.ly/2QC23dk) anterior hablamos del manejo del estado con React y de qué forma nos ayudaba a la hora de construir nuestras aplicaciones web, bien notamos que cuando necesitamos manejar el estado global de nuestra app esto se complica con React entonces en este punto es donde entra Redux.

Ahora bien que es Redux, pues bien Redux es una librería que nos ayuda a controlar estado de nuestras aplicaciones de una forma más fácil y no sufrir como lo vimos en el ejemplo del [artículo](http://bit.ly/2QC23dk) anterior.

Cabe destacar que **Redux** está influenciado por la arquitectura **Flux** propuesta por Facebook para las aplicaciones de React y está muy pensado para trabajar con **React** pero tambien se puede trabajar con otras tecnologías como lo son Angular.js, Backbone.js o simplemente con Vanilla JS.

### Redux se basa en tres principios:

##### Una sola fuente de la verdad

Todo el estado de la aplicación está en **único store**,  Redux será la fuente de verdad para tus datos.

##### El estado es de solo lectura

La única forma de modificar el estado es emitir una acción que indique que cambió, esto te asegura que ninguna parte de la aplicación, como pueden ser eventos de la UI, callbacks o sockets, alteren directamente el estado de tu aplicación, en vez de eso emiten una intención de modificarlo. También como los cambios de estado se disparan por las acciones es imposible que se pisen cambios.

##### Los cambios se hacen mediante funciones puras

Para controlar como el **store** es modificado por las acciones se usan **reducers** puros, los reducers son funciones puras que reciben el estado actual de la aplicación y la acción a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual. Más información en este [artículo](https://medium.com/react-redux/introducci%C3%B3n-a-redux-js-8bdf4fe0751e).

Bien vamos ahora a ver como se **instala Redux** y agregarlo en nuestro proyecto.

      npm i -S redux react-redux
    

**Nota:** Si esta comenzado con React.js  le recomiendo que lea **[primeros pasos con React.js](http://bit.ly/2Jjb6Lz)**.

Con npm instalamos redux y react-redux ya que son necesarios para la implementación de Redux, una vez tengamos instalado estas dependencias vamos al **index.js** comencemos por este lado.

En el index.js anteriormente solo teníamos la App y la data ahora vamos a manejar la data desde el estado inicial con **redux** y vamos a envolver a nuestra App en un **provider** de react-redux para gestionar todo el estado de nuestra App.

```javascript
// index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Movies from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer,
  {}, // initialState se controla en el reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = document.getElementById('root')

render(
  <Provider store={store}>
    <Movies name="John Serrano :D" />
  </Provider>,
  app
)

registerServiceWorker()
```
   

Entonces creamos el store a partir de los reducers que tenemos en un directorio, aparte de eso pasamos una extensión de redux la cual nos ayuda a **debuggear** desde el navegador pueden instalar la extensión desde [acá](https://github.com/zalmoxisus/redux-devtools-extension#usage), como dije antes envolvemos nuestra App con el Provider de redux, en este caso la renombre como Movies y le pasamos el store al Provider.

Ahora vamos a los **reducers**, creamos un directorio y dos archivos uno index.js y otro movies.js en el index.js tenemos lo siguiente.

```javascript
// ./reducers/index.js
import { dataMovies, likesCount } from './movies'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  dataMovies, likesCount
})

export default rootReducer
```
    

Importamos los reducers de movies y lo que hacemos es combinar estos reducers en una sola salida gracias a **combineReducers** de Redux, ahora veamos los reducers de movies.js.


```javascript
// ./reducers/movies.js
import * as type from '../actions/types'
import { data } from '../data'

const initialState = {
  likesCount: {
    likeCount: 0,
    unlikeCount: 0
  },
  data: data
}

const likesCount = (state = initialState.likesCount, action) => {
  switch (action.type){
    case type.LIKE: {
      const likes = {
        likeCount: !action.payload.like
          ? state.likeCount + 1
          : state.likeCount - 1,
        unlikeCount: action.payload.unlike
          ? state.unlikeCount - 1
          : state.unlikeCount
      };
      return likes;
    }

    case type.UNLIKE: {
      const unlikes = {
        unlikeCount: !action.payload.unlike
          ? state.unlikeCount + 1
          : state.unlikeCount - 1,
        likeCount: action.payload.like ? state.likeCount - 1 : state.likeCount
      };
      return unlikes;
    }

    default:
      return state;
  }
}

const dataMovies = (state = initialState.data, action) => {
  switch (action.type) {
    case type.ADD: {
      const newMovie = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        like: false,
        unlike: false,
        image: 'https://media.comicbook.com/files/img/default-movie.png'
      }
      return [...state, newMovie]
    }
    case type.LIKE: {
      const newState = state.map(movie => {
        if (movie.id !== action.payload.id) {
          return movie;
        }
        return {
          ...movie,
          like: !movie.like,
          unlike: !movie.like ? false : movie.unlike
        };
      });
      return newState;
    }

    case type.UNLIKE: {
      const newState = state.map(movie => {
        if (movie.id !== action.payload.id) {
          return movie;
        }
        return {
          ...movie,
          like: !movie.unlike ? false : movie.like,
          unlike: !movie.unlike
        };
      });
      return newState;
    }

    default:
      return state;
  }
};

export { dataMovies, likesCount }
```   
    
Como se puede ver tenemos muchas cosas pero vamos paso a paso, lo primero que importamos son los **types** de las acciones ya veremos las acciones y los tipos de acciones concentrémonos en los reducers y la data, lo segundo que importamos es la data la cual es la misma que se usó en el artículo anterior creamos un objeto para el estado inicial con sus respectivos valores en este caso quiero manejar la cuenta de los likes y la data.

Tenemos dos funciones o **reducers**  likesCount y dataMovies, en likesCount recibimos el estado inicial y las acciones la cual vamos a tener en un `switch` cada acción dependiendo del tipo de acción que se envié. Entonces en resumen según el tipo de acción ejecuta nuestro código la lógica es la misma que se usó en el artículo anterior, en el action tenemos el type y también tenemos el **payload** que es donde viene el id, like entre otro campos que pasemos en el payload, en el `switch` siempre se debe devolver el state por default.

Con dataMovies pasa lo mismo tenemos los **types** las **actions** algo que se puede notar con respecto al ejercicio del artículo anterior es que podemos manejar el **state** de los likes y unlikes de una forma mucho más fácil, donde validamos que si el id de la movie que está en `action.payload` es diferente al de la data inicial, es decir si los id son diferentes devuélvame esa movie tal cual esta si no simplemente cambiamos el like o unlike a true o false y pasamos el resto de movies.

Ahora en la parte de las acciones tenemos un directorio **actions** y dentro de este un index.js y el types.js

```js
// types.js
export const LIKE = 'LIKE'
export const UNLIKE = 'UNLIKE'
export const ADD = 'ADD'



// :/actions/index.js
import * as type from './types'

export const like = (id, like, unlike) => {
  return { type: type.LIKE, payload: { id, like, unlike } }
}

export const unlike = (id, unlike, like) => {
  return { type: type.UNLIKE, payload: { id, unlike, like } }
}

export const add = (id, title, description) => {
  return { type: type.ADD, payload: { id, title, description }}
}
```

Tenemos los types solo es una constante y en index.js una función que indica el nombre de cada acción donde se devuelve el **type** y el **payload**.

Listo ahora vamos a App.js

```js
// App.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import './App.css'
import { like, unlike, add } from './actions'

class Movies extends Component {
  
  handlerClickLike = (id, like, unlike) => {
    this.props.like(id, like, unlike)
  }

  handlerClickUnlike = (id, like, unlike) => {
    this.props.unlike(id, unlike, like)
  }

  onAddClick = (e) => {
    e.preventDefault()
    if (!this.title.value.length) {
      return
    }
    this.props.add(Date.now(), this.title.value, this.description.value);
    this.title.value = '';
    this.description.value = '';
  }

  setTitle = element => {
    this.title = element
  }

  setDescription = element => {
    this.description = element
  }

  render() {
    const { data, likesCount: {likeCount}, likesCount: {unlikeCount} } = this.props

    return (
      <section className="container">
        <MovieList 
          movies={ data }
          handlerClickLike={this.handlerClickLike}
          handlerClickUnlike={this.handlerClickUnlike}
        />

        <Footer 
          likeCount={likeCount}
          unlikeCount={unlikeCount}
          all={data.length}
          setTitle={this.setTitle}
          setDescription={this.setDescription}
          onAddClick={this.onAddClick}
        />
      </section>
    )
  }
}

function mapStateToProps(state, props) {
  // console.log(state); // toma el nombre del reducer.
  return {
    data: state.dataMovies,
    likesCount: state.likesCount
  };
}

const mapDispatchToProps = {
  like,
  unlike,
  add
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
```
    

En App.js importamos React,  el componente de **MovieList** y **Footer**, algo muy importante que importamos es el **connect** de react-redux el cual vamos a usar para conectarnos con el estado global de los reducers y por ultimo importamos las acciones.

Dentro del component Movies tenemos los **handleClick** los cuales dispara las acciones, tenemos unos set los cuales hacemos referencia a unos input de un formulario que tenemos en el componente Footer el cual vamos a usar para agregar nuevas movies a la lista.

En el render tenemos los componentes MovieList y Footer y también obtenemos los datos de los props.

```js
const { data, likesCount: {likeCount}, likesCount: {unlikeCount} } = this.props
```
    

Esta línea de código es importante ya que estos props llegan gracias a **connect** a continuación vamos a ver de dónde es que sale estos props.


```js
function mapStateToProps(state, props) {
  return {
    data: state.dataMovies,
    likesCount: state.likesCount
  };
}

const mapDispatchToProps = {
  like,
  unlike,
  add
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
```
    
Esta parte es la más importante la cual está por fuera del componente Movies tenemos una función **mapStateToProps** la cual pasamos al connect y le pasamos el componente Movies, esta función nos devuelve el estado inicial de nuestra aplicación, es decir obtenemos los datos del **store** que definimos en el reducers y tenemos un objecto el cual dispara las acciones llamada **mapDispatchToProps** entonces tenemos la acción de like de unlike y de add y así mismo lo pasamos al connect.

En resumen gracias a connect pasamos la data del store a Movies y las acciones las cuales van a funcionar como **Dispatch**  y se pasan por los props de Movies, gracias a esto podemos controlar todo el estado de nuestra aplicación.

Para terminar en MovieList tenemos.

```js
// MoviewList.js
import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies, handlerClickLike, handlerClickUnlike }) => (
  <ul className="MovieList">
    {movies.map((movie) => (
      <Movie 
        { ...movie } 
        key={ movie.id }
        handlerClickLike={() =>
          handlerClickLike(movie.id, movie.like, movie.unlike)
        }
        handlerClickUnlike={() =>
          handlerClickUnlike(movie.id, movie.like, movie.unlike)
        }
      />
    ))}
  </ul>
)

export default MovieList
```
    

No hay gran cosa en este componente el cual le pasamos propiedades al componente Movie.js.


```js
// Moview.js
import React from 'react'

const Movie = ({ title, description, like, unlike, image, handlerClickLike, handlerClickUnlike }) => (
  <li className="Movie">
    <figure className="Movie-image">
      <img height="160px" width="110" src={ image } alt="title" />
    </figure>
    <div className="Movie-content">
      <div className="Movie-meta">
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
      <div className="Movie-actions">
        <span
          onClick={handlerClickLike}
          className={`icon-like ${like ? 'is-liked' : ''}`}
        >
          &#10003;
        </span>
        <span
          onClick={handlerClickUnlike}
          className={`icon-unlike ${unlike ? 'is-unliked' : ''}`}
        >
          &#10005;
        </span>
      </div>
    </div>
  </li>
)

export default Movie
```
    
    

Para terminar tenemos Footer en el cual agregue un formulario para agregar más movies algo extra al ejemplo del artículo anterior.

```js
// Footer.js
import React from 'react'

const Footer = ({ likeCount, unlikeCount, all, setTitle, setDescription, onAddClick }) => (
  <footer className="Footer">
    <div className="data">
      <p>Likes: <span className="likes">{ likeCount }</span></p>
      <p>Unlikes: <span className="unlikes">{ unlikeCount }</span></p>
      <p>Total: <span className="total">{ all }</span></p>
    </div>
    <div className="add">
      <form onSubmit={onAddClick}>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input ref={setTitle} type="text" name="title" placeholder="Title" />
        </div>
        <div className="form">
          <label htmlFor="description">Description</label>
          <textarea ref={setDescription} name="description"></textarea>
        </div>
        <button className="save">Add</button>
      </form>
    </div>
  </footer>
)

export default Footer
```

Bueno dejo este artículo hasta este punto espero sea de su ayuda y todo se haya entendido ya que es un tema algo complejo cuando estamos iniciando con **React.js** y **Redux.js** pero a medida que practiquemos vamos a ver que se nos va hacer más fácil la implementación de Redux con React en nuestros proyectos, hasta la próxima.

El código del ejercicio esta en [gitHub](https://github.com/blog-johnserrano/React-state/tree/redux).
