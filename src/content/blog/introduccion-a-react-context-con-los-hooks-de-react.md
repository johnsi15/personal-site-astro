---
title: Introducción a React Context con los Hooks de React
publishedDate: "2020-10-02T21:42:03.000Z"
updatedDate: "2020-10-02T22:11:10.000Z"
pubDate: "2020-10-02T21:42:03.000Z"
description: Gracias a los context de React podemos pasar datos a través de componentes sin necesidad de pasar esos datos por los props manualmente en cada nivel.
tags: 
- react
- context
- JavaScript
- nodejs
- desarrollo-web
primaryTag: { name: 'react', slug: 'react' }
excerpt: Gracias a los context de React podemos pasar datos a través de componentes sin necesidad de pasar esos datos por los props manualmente en cada nivel.
canonicalURL: "https://johnserrano.co/blog/introduccion-a-react-context-con-los-hooks-de-react"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682885259/John%20Serrano/Blog%20Post/introduccion-a-react-context-con-los-hooks-de-react/react-context_wcznou.jpg"
---

Gracias a los **context** de **React** podemos pasar datos a través de componentes sin necesidad de pasar esos datos por los **props** manualmente en cada nivel. Como sabemos en una aplicación de React los datos se pasan de componentes padres a componentes hijos por medio de las props.

## Cuidado con el uso de context

Antes de entrar en materia quiero aclarar que los context de **React **se deben usar en casos muy especiales o que realmente se tenga la necesidad de usarlos, algunos ejemplos pueden ser como tener los datos globales de un usuario autenticado, el tema de nuestra aplicación o el idioma.

Si lo único que queremos es pasar algunos props por medio de algunos niveles lo más recomendado es usar **composición de componentes** ya que suele ser una opción más simple que usar context.

## Create context

Una de las primeras cosas que debemos hacer es crear un objeto context con **createContext** y pasándole un valor por defecto a nuestro context. Con este objeto podemos hacer uso del componente **Provider** y el Hook de **useContext **el cual nos va a permitir consumir los datos que se pasen por el provider.

`const MyContext = React.createContext(defaultValue);`

## Context provider

Como ya lo mencioné cada uno de los objetos context que se usen vienen con un componente **Provider** de React el cual permite que los componentes hijos tengas acceso a los datos globales que se pasan al provider.

`<MyContext.Provider value={/* algún valor */}>`

## Use context

El useContext es un consumidor del **Provider** en otras palabras es la forma de acceder o consumir la data que pasamos por el **value** del **Provider** si la data que pasamos por el Provider cambia los consumidores o consumidor en este caso el useContext se va a renderizar nuevamente.

La forma de trabajar con **useContext** es recibiendo el objeto contexto y devuelve el valor del contexto actual, como ya se mencionó el valor del contexto actual se determina por el **value** del **Provider**.

`const value = useContext(MyContext);`

## Requisitos

Tener conocimientos básicos de [React](https://johnserrano.co/blog/primeros-pasos-con-react) y del manejo de los [Hooks](https://johnserrano.co/blog/introduccion-a-los-hooks-de-react).

## Usando React Context

Para este ejemplo vamos a simular el cambio del tema en el Layout de una página web pasando de **light** a **dark**. Me voy apoyar de [create-react-app](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app) y de [codesandbox](https://codesandbox.io/%20) que nos da un entorno listo para comenzar a desarrollar en **React**.

Lo primero que vamos a hacer es crear un archivo llamado ***context.js*** para definir el **context** y los **themes**.

```javascript
// context.js
import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
```
    

Creamos un **object** con los **themes** y también creamos el **context** con un valor inicial y lo exportamos.

En ***App.js*** vamos a definir el **provider** envolviendo a todos los componentes hijos, creamos una función **handleChangeTheme** para hacer el cambio de light a dark, también nos vamos a apoyar del **hook useState **de React.

```javascript
// App.js
import React, { useState } from 'react';
import './styles.css';
import Layout from './components/Layout';
import ThemeContext, { themes } from './context';

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    // console.log(theme);
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <div className="App">
          <h1>React Context</h1>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}

```
    
Lo mas importante de este código es el import del ***context***, los ***themes***, el ***provider*** con su ***value*** y ***handleChangeTheme***.

Dentro del componente App definimos el estado inicial de nuestro **theme** usando **useState**, definimos la funciónhandleChangeTheme donde usamos **setTheme** para hacer el cambio del theme validando si el theme actual es dark o light y devolviendo el valor que corresponda a la validación.

> Si no comprendes muy bien cómo funciona el useState tengo otro artículo donde hablo sobre los [**Hooks de React**](https://johnserrano.co/blog/introduccion-a-los-hooks-de-react).

Para terminar en el **value** inicial del **provider** es un **object** con el theme y la función handleChangeTheme. También podemos ver un componente **Layout** el cual contiene un header y footer ya veremos el código de ese componente.

En el componente **Layout** ya comenzamos a hacer uso del **hook** **useContext** el cual nos permite consumir la data que se pasa por el value del provider.

```javascript
// Layout.js
import React, { useContext } from 'react';
import ThemedButton from './ThemedButton';
import ThemeContext from '../context';

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <header>
        <nav>
          <p>Inicio</p>
          <ThemedButton />
        </nav>
      </header>
      {children}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
```

Dentro del componente ***Layout*** usamos **useContext** y le pasamos el context de nuestro theme. Y obtenemos el theme para darle estilos al layout. Como podemos ver usamos las propiedades background y foreground para definir el background y color de nuestro layout.

Por último, tenemos otro componente llamado **ThemedButton** el cual es el encargado de hacer el cambio del theme consumiendo del context la función **handleChangeTheme **veamos el código de ese componente.

```javascript
// ThemedButton.js
import React, { useContext } from 'react';
import ThemeContext from '../context';

function ThemedButton() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}

export default ThemedButton;

```

En este componente tenemos el mismo caso del componente **Layout** el cual consumimos la data de nuestro context **ThemeContext**, tener en cuenta que debe ser el mismo context con el que se definió el **provider**.

Entonces obtenemos el **theme** y la función **handleChangeTheme** del hook **useContext** y le pasamos las propiedades necesarias al elemento button.

El código completo del ejemplo lo puedes encontrar en ➡ [React Context](https://codesandbox.io/s/react-context-hooks-i4bxo).

## Conclusiones 🤔

✔ Podemos concluir que el uso de los **context** se debe usar en determinas situaciones especiales que ameriten el uso global de cierta data y tener cuidado con los renders innecesarios.

✔ Su uso no es tan complejo gracias al **hook** de **useContext** ya que anteriormente se necesitaba usar **Class.contextType** o **Context.Consumer** que a mi parecer hacia un poco mas complejo la implementación de los context de React.

Espero haya sido de tu ayuda este artículo si estas comenzando con los context de React o si querías repasar su uso, para más información puedes apoyarte de la [documentación](https://es.reactjs.org/docs/context.html), hasta la próxima. 🙌
