---
title: Introducción a los Hooks de React
publishedDate: "2020-03-20T14:45:32.000Z"
updatedDate: "2020-03-20T14:45:32.000Z"
pubDate: "2020-03-20T14:45:32.000Z"
tags:
- Hooks
- react
- JavaScript
- nodejs
excerpt: Los Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.
description: Los Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.
primaryTag: { name: 'hooks', slug: 'hooks' }
canonicalURL: "https://johnserrano.co/blog/introduccion-a-los-hooks-de-react"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682887375/John%20Serrano/Blog%20Post/introduccion-a-los-hooks-de-react/react-hooks_crwe4f.jpg"
---

En 2018 se dio a conocer una nueva característica en la librería de React llamada [Hooks](https://es.reactjs.org/docs/hooks-intro.html), esta fue presentada en la [ReactConf 2018](https://youtu.be/dpw9EHDh2bM) por el equipo de Facebook, Sophie Alpert y Dan Abramov presentaron **Hooks**, seguidos por Ryan Florence demostrando cómo refactorizar una aplicación usándolos. Los Hooks son una nueva característica en **React 16.8**. Estos te permiten usar el estado y otras características de React sin escribir una clase.

**React Hooks** resuelven una amplia variedad de problemas vamos a ver qué problemas se presentan con React y cómo podemos usar los Hooks para ayudarnos a resolver dichos problemas.

## Reusabilidad de lógica de estado entre componentes

Este problema consiste en que en **React** es difícil compartir o reusar lógica entre componentes, existen soluciones para esto como componentes de alto orden **(HOC)** o componentes basados en **Render Props**, cualquiera de estas dos formas nos permiten compartir lógica entre componentes, pero tienen algunos problemas en común ya que son muy difíciles de mantener y tenemos que reescribir código cada vez que se quiera crear un componente de este tipo, debido a estos problemas debemos ser muy cuidadosos al realizar algún cambio para no generar nuevos bugs.

## Componentes complejos

Al principio todo componente inicia con pocas líneas de código pero con el pasar del tiempo crecen y se convierten en un lío inmanejable de multiples lógicas de estado y efectos secundarios, dificultando la legibilidad, pero este problema también radica a los ciclos de vida de un componente, ya que entre más complejo es el componente más ciclos de vida este puede tener.

## Las clases son difíciles de entender

El problema típico de todo desarrollador de **React** cuando empiezas a escribir un primer componente seguramente fue una función la cual recibe sus **props** y todo funciona bien pero llega un momento en que necesitas cambiar el estado de un componente y obligatoriamente tiene que pasar a  un componente de clase.

Adicionalmente las clases en React tienen definido unos métodos y buenas prácticas a seguir, si eres nuevo en React seguramente cometas el error de no crear el constructor de la clase o no hacer el bind de una función, tal vez cambies el estado cuando el componente se esté **renderizando**, son errores que pueden generar bugs y demoras en el desarrollo de nuestra aplicación.

## Requisitos para seguir

Debes tener conocimiento básico en [ES6 (arrow functions, destructuring, classes)](https://johnserrano.co/blog/caracteristicas-es2015), [React](https://johnserrano.co/blog/primeros-pasos-con-react), tener instalado o actualizado React a la versión 16.8 tanto **react** y **react-dom** con esto ya podemos usar **Hooks** sin ningún problema.

## Conceptos básicos

Nuestro primer Hook, este es **useState** una función que básicamente reemplazará a nuestro **setState**, con la ventaja que no tenemos que tener un componente como clase para poder hacer un cambio de estado a nuestro componente, veamos un ejemplo simple.

Supongamos que tenemos un componente el cual recibe un nombre por sus props:

```js
function Nombre(props){  
  return <h2>{props.name}</h2>;
}
```

Ahora supongamos que el nombre del usuario sea editable, normalmente tendríamos que pasar este componente a una clase para tener un estado dentro del componente y hacer un **handleChange** de un input para poder editar el nombre.

## Con clases

```js
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  changeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.changeName} />

        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
```
    

## Con Hooks

```js
function Name(props) {
  const [name, changeName] = useState(props.name);
  return (
    <div>
      <label>My name is</label>
      <input value={name} onChange={e => changeName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  );
}
```
    

Utilizando **useState** reducimos nuestro código significativamente, también es más fácil la lectura del código ya que simplemente son funciones, veamos cómo funciona, lo primero que hacemos es declarar dos variables que nos retorna **useState** podemos nombrarlas como nosotros queramos, la primera variable será nuestro estado, este puede ser un objeto, array, string … etc, nuestra segunda variable es la función con la que podemos cambiar nuestro estado y adicionalmente useState recibe un único parámetro y es el estado inicial de nuestro estado.

Ahora bien cuando debería usar un **Hook**, Si creas un componente funcional y descubres que necesitas añadirle estado, antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente funcional existente. Hay algunas reglas especiales sobre donde puedes y no puedes usar Hooks dentro de un componente.

## Reglas de Hooks

*Debemos declarar nuestros Hooks en un orden superior, es decir al inicio de nuestra función.*

*No puedes utilizar Hooks dentro de un componente de tipo clase, ya que no es posible.*

*No puedes llamar Hooks dentro un condicional, bucles o funciones anidadas, ya que React toma el orden en que fueron declarados cada Hook, guardando una referencia por cada uno.*

## Recuperar datos con useEffect

Seguramente necesites ahora hacer un llamado a una API para recuperar datos, actualizar tu componente o agregar y eliminar eventos del DOM, estos eventos son categorizados como efectos secundarios y para ello podemos utilizar un nuevo Hook llamado **useEffect** el cual reemplazaría los siguientes ciclos de vida del componente, **componentDidMount, componentDidUpdate y el componentWillUnmount.**

```js
class Pokemon extends React.Component {
  state = {
    pokemon: undefined,
    height: window.innerHeight / 2 + "px"
  };
  componentDidMount() {
    this.getPokemon();
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps) {
    if (this.props.IdPokemon !== prevProps.IdPokemon) {
      this.getPokemon();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.IdPokemon}/`)
      .then(res => {
        this.setState({ pokemon: res.data });
      });
  };

  handleResize = () => {
    this.setState({ height: window.innerHeight / 2 + "px" });
  };

  pokemon = () => {
    const { pokemon, height } = this.state;
    if (pokemon === undefined) return null;
    return (
      <div>
        <h1>{pokemon.name}:</h1>
        <img src={pokemon.sprites.front_default} height={height} />
      </div>
    );
  };

  render() {
    return this.pokemon();
  }
}

class RandomPokemon extends React.Component {
  state = { IdPokemon: 1 };

  changePokemon = () =>
    this.setState({ IdPokemon: Math.floor(Math.random() * 100 + 1) });

  render() {
    return (
      <div>
        <Pokemon IdPokemon={this.state.IdPokemon} />
        <button onClick={this.changePokemon}>change pokemon</button>
      </div>
    );
  }
}
```
    
Tenemos dos componentes donde **RandomPokemon** se encarga de obtener el id de un pokémon de manera aleatoria y el componente **Pokemon** realiza un request segun el id que llegue vía props, adicionalmente el tamaño de la imagen del pokémon es relativa según el alto del navegador, vamos a pasar esto a **Hooks** y dando una explicación detallada.

Vamos a reescribir el componente **RandomPokemon** quedando de la siguiente manera:

```js
const RandomPokemon = () => {
  const [idPokemon, changeIdPokemon] = useState(1);

  const handleClick = () => {
    changeIdPokemon(Math.floor(Math.random() * 100 + 1));
  };
  
  return (
    <div>
      <Pokemon IdPokemon={idPokemon} />
      <button onClick={handleClick}>change pokemon</button>
    </div>
  );
};
```
    

En este componente solo usamos el **Hook useState** para cambiar el idPokemon y enviarlo al componente **Pokemon**.

Ahora vamos con nuestro componente **Pokemon** el cual es mucho más complejo ya que tiene varios ciclos de vida, pero con **useEffect **queda mucho más limpio y legible:

```js
const Pokemon = ({ IdPokemon }) => {
  const [height, updateHeight] = useState(window.innerHeight / 2 + "px");
  const [pokemon, changePokemon] = useState(undefined);

  useEffect(() => {
    getPokemon();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  });


  const handleResize = () => {
    updateHeight(window.innerHeight / 2 + "px");
  };

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}/`).then(res => {
      changePokemon(res.data);
    });
  };

  if (pokemon === undefined) return null;

  return (
    <div>
      <h1>{pokemon.name}:</h1>
      <img src={pokemon.sprites.front_default} height={height} />
    </div>
  );
};
```
    

Con **useEffect** simplificamos el uso de **componentDidMount** y  **componentDidUpdate**  que se usaron en las clases, ya que es una función que se ejecuta en cada render después de que el componente esté montado en el DOM o en pocas palabras una vez se haya renderizado, incluso si es nuestro primer render, es decir que cuando el componente cambie de props o un estado interno, ejecutará nuevamente la función **useEffect** obteniendo un nuevo pokemon, adicionalmente si nuestro efecto requiere un limpieza podemos hacer que este devuelva una función, esta se ejecutará antes de que el componente sea desmontado y allí podemos hacer la limpieza si es necesario.

Nuestro código tiene un problema, cuando el **API** nos responde con un nuevo pokémon entonces realizamos un cambio de estado, esto conlleva a que el componente vuelva hacer un render y por ende la función **useEffect** es nuevamente ejecutada volviendo a ejecutar el llamado al **API**, creando un ciclo infinito, este es un de los casos donde no queremos que nuestro useEffect se ejecute en cada render veamos la solución al problema.

```js
useEffect(() => {
    getPokemon();
}, [IdPokemon]);

useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
});
```
    

La solución es muy simple ya que **useEffect** recibe un segundo argumento donde podemos enviar una arreglo con las dependencias que este tendrá para ser ejecutado, es decir que nuestro efecto solo será ejecutado si nuestro **IdPokemon** cambia, dándonos el control sobre este hook, otro cosa que cambie fue la separación de los **useEffect** ya que React no recomienda realizar en un useEffect varios efectos secundarios, lo mejor es tenerlos por separados.

## React Hook personalizados

Un **hook** personalizado es una función de JavaScript cuyo nombre comienza con “use”. Veamos un ejemplo de un hook propio para extraer datos.

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}

export default useFetch;
```
    

Listo este es nuestro **React Hook** que podemos usar donde lo necesitemos veamos cómo se puede usar.

```js
import React from "react";
import useFetch from "./useFetch";

function DataLoader(props) {
  const { results: data = [] } = useFetch("https://pokeapi.co/api/v2/pokemon");
  // console.log(data);
  return (
    <div>
      <ul>
        {data.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
    

Como podemos ver es fácil usar un hook personalizado en este caso importamos nuestro hook **usefetch** y le pasamos la url y obtendremos los datos.

## Async/await con useEffect

Veamos un ejemplo de cómo se puede hacer y lo más normal de hacer:

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, [url]);

  return data;
}

export default useFetch;
```
    

Nuestro código tiene un pequeño problema ya que si revisamos la consola de nuestro navegador nos va mostrar la siguiente advertencia:

> "Warning: An Effect function must not return anything besides a function, which is used for clean-up." Este es el mensaje que vemos en la consola.

Lo que pasa es que en nuestro **useEffect** no podemos devolver una promesa. Las funciones **asincrónicas** de JavaScript siempre devuelven una promesa y useEffect debe devolver exclusivamente otra función, entonces que podemos hacer para solucionar este problema veamos cómo quedaría nuestro código:

```js
function useFetch(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [url]);

  return data;
}
```
    

Con esto ya la advertencia no se mostrara y todo seguirá funcionando.

## Conclusiones

En el inicio de este artículo entendimos algunos problemas que tiene React, realicemos un chequeo para ver si con **Hooks** los logramos resolver:

**Componentes Gigantes => Resuelto:** Con Hooks podemos omitir las clases y por ende los ciclos de vidas, haciendo nuestros componentes sean más cortos.

**Las clases son difíciles de entender => Resuelto:** Si implementamos Hooks, no tenemos que lidiar con las clases, nuestros componentes son basados en solo funciones y es mucho más fácil leerlos y escribirlos

**Reusabilidad de lógica => Resuelto:** Vimos cómo crear nuestro propio Hook personalizado el cual extrae data de una API y lo podemos usar en cualquier parte de nuestro proyecto haciendo llamado del hook y pasándole la url.

Para terminar React no recomienda que sobre escribas toda tu aplicación a Hooks, ya que las clases seguirán funcionando sin ningún problema, también existe otros **Hooks** los cuales no se explicaron como lo son ***useReducer***, ***useMemo*** entre otros, recomiendo ir a la [documentación ](https://es.reactjs.org/docs/hooks-reference.html)oficial para más información, no siendo más gracias por leer hasta la próxima.

Código de los ejemplos lo puedes ver dando click [aquí](https://codesandbox.io/s/reacthooks-9dwb1).
