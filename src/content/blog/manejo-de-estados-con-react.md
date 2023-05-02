---
title: Manejo de estados con React
slug: manejo-de-estados-con-react
publishedDate: 2018-09-16T16:55:00.000Z
updatedDate: 2019-09-03T15:10:13.000Z
pubDate: 2018-09-16T16:55:00.000Z
tags: 
- react
- webdeveloper
- webdeveloment
- component
- reactjs
- JavaScript
- state
- desarrollo-web
excerpt: En un post anterior se habló de los primeros pasos con React pero nunca tocamos el state, con este nuevo post vamos a ver cómo manejar el estado.
description: En un post anterior se habló de los primeros pasos con React pero nunca tocamos el state, con este nuevo post vamos a ver cómo manejar el estado.
primaryTag: { name: 'react', slug: 'react' }
canonicalURL: "https://johnserrano.co/blog/manejo-de-estados-con-react"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683046917/John%20Serrano/Blog%20Post/manejo-de-estados-con-react/react-state_kopuwv.jpg"
---

El día de hoy vamos a seguir hablando de **React** en un [post anterior](https://blog.johnserrano.co/primeros-pasos-con-react/) se habló de los primeros pasos con React pero nunca tocamos el **state**, con este nuevo post vamos a ver cómo manejar el estado de los componentes en React.

Bueno bien ahora que podemos hacer con los estados en react, algo que podemos hacer con los estados es mantener información de cada componente y manejar esa información es decir cambiando de estado esa información cuando existe un comportamiento del usuario es decir un click en un botón o todo lo que llame a la acción del usuario veamos un ejemplo.

Lo primero que tenemos es un componente **Stateful Component** es decir un componente basado en clases con un constructor en mi caso estoy usando create react app.

```js
class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <h3>Hola mundo</h3>
      </div>
    );
  }
}
```
    

Hasta este punto todo normal un componente que renderea un Hola mundo, ahora bien comencemos a usar los estados para eso definimos un valor **state** en el constructor.

```js
this.state = {
    isToggleOn: true
}
```
    
    

Definimos el state con un objeto con clave valor en este caso en valor en true de isToggleOn.

```js
<button onClick={this.handleClick}>
  {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```
    

Agregamos un button en render del componente donde onClick tiene que ser de esa forma con la C en mayúscula lo otro hacemos this de una función handleClick aún no existe tenemos que crearla que más tenemos hace un condiciona validando si el state de isToggleOn es true o false según el caso muestra el texto ON u OFF.

Vamos a crear la función **handleClick** ahora muestro todo el código completo.

```js
handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}
```
    

Que tenemos en handleClick bien hacemos un **setState** para cambiar el valor del estado inicial cuando hacemos un setState podemos recibir una función solo pasar el estado ya veremos un ejemplo por ahora recibimos una función donde encontramos el estado actual y devolvemos el nuevo valor al isToggleOn con ¡state.isToggleOn lo que hacemos es que lo que venga lo invierta es decir si vienen en true que lo cambie a false.

Ahora si vamos al navegador podemos ver un botón con ON si le damos click vemos que no pasa nada o nos puede dar un error, esto pasa porque el this de esa función no es global por decirlo así tenemos que hace un **bind** de esa función con el this global del todo el componente.

`this.handleClick = this.handleClick.bind(this);`

```js
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <h3>Hola mundo</h3>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
```
    
    

Este sería todo el código si vamos y damos click ahora vemos que cambia a OFF estamos controlando el estado de ese botón ahora bien esto es un ejemplo muy básico veamos algunos ejemplos más.

Otro ejemplo básico es solo cambiar el estado por un valor completamente nuevo veamos ese caso ya que el **setState** cambia un poco.

```js
this.state = {
  isToggleOn: true,
  message: 'Hola mundo'
}
```
    
    

`this.handleClickMessage = this.handleClickMessage.bind(this);`

```js
handleClickMessage() {
  this.setState({
    message: 'Hola John Serrano'
  })
}



render() {
  return (
    <div className="App">
      <h3 onClick={this.handleClickMessage}>{this.state.message}</h3>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
``` 
    
En este caso solo cambiamos el estado de message por uno nuevo cuando hacemos click en el h3 porque lo hacemos de esta forma pues sencillo no necesitamos usar el setState con la función que nos devuelve el estado anterior ya que no vamos a necesitar el estado anterior es decir no vamos hacer una operación o usar como tal el estado anterior un ejemplo sería algo como esto.

```js
this.setState(state => ({
  message: state.message + ' John Serrano'
}))
```
    
    

Con templete string.

```js
this.setState(state => ({
  message: `${state.message} - John Serrano`
}))
```
    
    

Es solo buenas practicas esto de usar el setState con una función y sin función lo otro también es que cuando usamos el setState con función también tenemos los pros.

Ahora veamos un ejemplos más complejo, vamos a mostrar una lista de películas con dos botones uno para dar like y otro unlike y manejar el total de likes y de unlikes que existen todo esto manejando el state en otro post vamos hacer el mismo ejemplo pero con redux y veremos en que nos ayuda redux.

Tenemos nuestro componente **App** donde importamos otros dos componentes **MovieList** y **Footer**, en App iniciamos el estado y tambien definimos dos **handleclick** los cuales son like y unlike donde vamos a manejar el numero de likes y unlikes y si es true o false.


```js
// App.js
import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    const { list } = this.props;
    // Nota: no es muy recomendable para proyectos grandes ya que se maneja el index por callbacks
    this.state = {
      list: list,
      moviesLength: list.length,
      likeCount: 0,
      unlikeCount: 0
    };
    this.onLike = this.onLike.bind(this);
    this.onUnlike = this.onUnlike.bind(this);
  }

  onLike(index) {
    const { list, likeCount, unlikeCount } = this.state;
    const newList = list;
    const { like, unlike } = newList[index];
    newList[index].like = !like;
    newList[index].unlike = !like && unlike ? false : unlike;
    this.setState({
      list: newList,
      likeCount: !like ? likeCount + 1 : likeCount - 1,
      unlikeCount: !like && unlike ? unlikeCount - 1 : unlikeCount
    })
  }

  onUnlike(index) {
    const { list, likeCount, unlikeCount } = this.state;
    const newList = list;
    const { unlike, like } = newList[index];
    newList[index].unlike = !unlike;
    newList[index].like = !unlike && like ? false : like;
    this.setState({
      list: newList,
      unlikeCount: !unlike ? unlikeCount + 1 : unlikeCount - 1,
      likeCount: !unlike && like ? likeCount - 1 : likeCount
    })
  }

  render() {
    const {
      list,
      moviesLength,
      likeCount,
      unlikeCount
    } = this.state;

    return (
      <section className="container">
        <MovieList 
          list={ list }
          onLike={ this.onLike }
          onUnlike={ this.onUnlike }
        />

        <Footer 
          all={ moviesLength }
          likeCount={ likeCount }
          unlikeCount={ unlikeCount }
        />
      </section>
    );
  }
}

export default App;
```

El list lo pasamos de un file data.js en el index de nuestra App.

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { data } from './data';

ReactDOM.render(<App list={ data } />, document.getElementById('root'));
registerServiceWorker();



export const data = [
  {
    title: "Wonder Woman",
    description: "Antes de ser Wonder Woman ...",
    like: false,
    unlike: false,
    image: "https://image.tmdb.org/t/p/w300/yjzHtHSAPDdRQejnTyFbifX2gef.jpg"
  },
  {
    title: "The Mummy",
    like: false,
    unlike: false,
    description: "A pesar de estar enterrada en ...",
    image: "https://image.tmdb.org/t/p/w300/6kCPiZ0eG3BoWvxgTq2Z8AYnEo.jpg"
  },
  {
    title: "Piratas del caribe",
    like: false,
    unlike: false,
    description: "Empujado hacia una nueva aventura ...",
    image: "https://image.tmdb.org/t/p/w300/gB3cNhpfxEWSjiKSGOv8nlmVdeu.jpg"
  },
  {
    title: "Logan",
    like: false,
    unlike: false,
    description: "Sin sus poderes, por primera vez ...",
    image: "https://image.tmdb.org/t/p/w300//5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg"
  },
  {
    title: "John Wick",
    like: false,
    unlike: false,
    description: "Sin sus poderes, por primera vez ...",
    image: "https://image.tmdb.org/t/p/w300/sl3QSDb7rB6dS4wzJoTJbhCVvVF.jpg"
  },
  {
    title: "Guardianes de la Galaxia",
    like: false,
    unlike: false,
    description: "Sin sus poderes, por primera vez ...",
    image: "https://image.tmdb.org/t/p/w300/9Ju7p4daJi5rcTUghYZxHlP15ia.jpg"
  },
  {
    title: "Alien: Covenant",
    like: false,
    unlike: false,
    description: "Sin sus poderes, por primera vez ...",
    image: "https://image.tmdb.org/t/p/w300/ewVHnq4lUiovxBCu64qxq5bT2lu.jpg"
  }
]
```
    
Ahora bien en App es donde vamos a controlar todo el estado de nuestra aplicación no voy a entrar en detalle que es lo que hace el método like y unlike pero en resumen es obtener la lista identificar el elemento que le pasamos más adelante al método por parámetro que es el index del elemento cambiar de false a true o viceversa del like y el unlike y lo mismo para sumar y restar y enviar la nueva lista de elementos modificados.

Realmente es un ejemplo algo complicado pero de esta forma podemos ver en funcionamiento el state de react y también podemos ver la limitación del **estado en forma global** ya que tenemos que pasar el handle del like y unlike a través de componentes y de esta forma saber cuándo debemos usar redux.

Ahora veamos el componenete MovieList el cual creamos otro componente Movie donde vamos a ejecutar el handle de like y unlike.

```js
//MovieList.js
import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  
  render(){
    const { list, onLike, onUnlike } = this.props;

    const listMovies = list.map((movie, index) => (
      <Movie 
        { ...movie } 
        key={ index }
        onLike={ onLike }
        onUnlike={ onUnlike }
        index={ index }
      />
    ));
    return(
      <ul className="movieList">
        { listMovies }
      </ul>
    );
  }
}

export default MovieList;
```
    
    

Pasamos todas las propiedades al componente Movie al igual que el index y todos los props por cada elemento.

```js
//Movie.js
import React, { Component } from 'react';

class Movie extends Component {

  // Esto se puede mejorar con redux.
  onLike = (event) => {
    event.preventDefault();
    this.props.onLike(this.props.index);
  }

  onUnlike = (event) => {
    event.preventDefault();
    this.props.onUnlike(this.props.index);
  }

  render(){
    const {
      image,
      description,
      title,
      like,
      unlike
    } = this.props;

    return(
      <li className="Movie">
        <figure className="Movie-image">
          <img height="160px" width="110" src={ image } />
        </figure>
        <div className="Movie-content">
          <div className="Movie-meta">
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
          <div className="Movie-actions">
            <span onClick={this.onLike} className={`icon-like ${like ? 'is-liked' : '' }`}>&#10003;</span>
            <span onClick={this.onUnlike} className={`icon-unlike ${unlike ? 'is-unliked' : '' }`}>&#10005;</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Movie;
```  

Finalmente ya tenemos el componente Movie el cual muestra la imagen el título y los botones de like y unlike. Como podemos ver en este componente es donde realmente se va ejecutar el handle de like y un like ya que nos llegó por props.

`this.props.onLike(this.props.index);`

Este es el método que definimos en el componenete MovieList y el cual le estamos pasando el index.

```js
// Footer.js
import React from 'react';

const Footer = ({ likeCount, unlikeCount, all }) => {
  // const { likeCount, unlikeCount, all } = this.props;
  return(
    <footer className="footer">
      <p>Likes: <span className="likes">{ likeCount }</span></p>
      <p>Unlikes: <span className="unlikes">{ unlikeCount }</span></p>
      <p>Total: <span className="total">{ all }</span></p>
    </footer>
  )
}

export default Footer;
```

Finalmente tenemos el componente Footer donde mostramos el total de likes de unlikes y el total de elementos que tenemos el data.js, algo más por mencionar es que el único componente que maneja estado es el **componente App** los otros componentes solo manejan props.

Este es el resultado final.

![result](https://res.cloudinary.com/john-serrano/image/upload/v1683047014/John%20Serrano/Blog%20Post/manejo-de-estados-con-react/react_result_y9ttop.jpg)

Bueno espero que sea de su ayuda este artículo lo dejo hasta este punto en un próximo artículo vamos hacer este mismo ejemplo pero con **Redux** y vamos a ver cómo nos ayuda redux a manejar el estado global de nuestra aplicación, todo el código va estar en el siguiente [repositorio](https://github.com/blog-johnserrano/React-state) no siendo más hasta la próxima.
