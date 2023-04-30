---
title: Primeros pasos con React
slug: primeros-pasos-con-react
date_published: 2018-04-22T20:49:50.000Z
date_updated: 2019-09-03T16:45:51.000Z
tags: JavaScript, ES2015, development, programación, Vanillajs, react, react.js, reactjs, jsx, virtualDOM, component, library
excerpt: React es una biblioteca de JavaScript para construir interfaces de usuarios, construida y mantenido por Facebook, basada en componentes y uso de un virtual DOM.
---

Hola amigos el día de hoy voy a explicar cómo comenzar a usar react con algunos ejemplos para entender la manera en la cual funciona, pero primero que es **react** para las personas que no saben que es react.js en la página oficial tenemos la siguiente referencia **“A JavaScript library for building user interfaces”** en español una biblioteca de JavaScript para construir interfaces de usuarios.

Ventajas para usar react, construida y mantenido por Facebook, basada en componentes y uso de un **virtual DOM**, alguna desventaja es la de que solamente es una *biblioteca* como ya se ha dicho para construir interfaces y no es un framework como angular o algunos otros pero se puede combinar con diferentes bibliotecas para llegar a formar un framework para manejar rutas, vistas entre otras cosas.

React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; está construida únicamente para utilizar el patrón de diseño modelo–vista–controlador (MVC), y puede ser utilizada conjuntamente con otras bibliotecas de Javascript o más grandes #MVC como AngularJS. *Funte: Wikipedia.*

###### Que es el virtual DOM

React mantiene un virtual DOM propio, en lugar de confiar solamente en el DOM del navegador. Esto deja a la biblioteca determinar qué partes del DOM han cambiado comparando contenidos entre la versión nueva y la almacenada en el virtual DOM, y utilizando el resultado para determinar cómo actualizar eficientemente el DOM del navegador. *Fuente: Wikipedia.*

Algo más a tener en cuenta react usa **JSX** para crear los componentes si no saben que es JSX pueden ver una descripción en el siguiente link [https://facebook.github.io/jsx/](https://facebook.github.io/jsx/).

Bueno lo primero que vamos hacer un crear un componente con *vanilla.js* y luego si con *react.js* si no sabes que es vanilla puedes ver el siguiente artículo [que es vanilla.js](https://blog.johnserrano.co/que-es-vanilla-js-o-javascript-puro/).

En mi caso voy a usar un editor de texto en línea [https://jsbin.com/](https://jsbin.com/) pero pueden usar codepen o pueden crear un archivo html localmente enlazar *react* y *react-dom* que son necesarios para correr react. Tener en cuenta que si lo hacen localmente también necesitan enlazar **babel**, en resumen lo que tiene que hacer es lo siguiente.

###### Agregar links en el archivo html.

     <script src="https://unpkg.com/react/umd/react.development.js"></script>
     <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
     <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    
    

###### Crear un script dentro del mismo archivo con el siguiente atributo.

    <script type="text/babel"> 
      ...Código
    </script>
    

Como dije yo voy a usar *jsbin* para crear los ejemplos y todo el código que se cree en este post estará en *jsbin*, lo otro es que no vamos a usar *webpack* por conceptos de simplicidad ya que van hacer nuestros primeros pasos con react para futuros post se usara *webpack* tambien los invito a leer [Webpack configuración](https://blog.johnserrano.co/webpack-configuracion/).

Bueno el primer ejemplo es crear un componente con **vanilla o JavaScript puro** vemos como se hace y las diferencias con **react** y en que nos ayuda react a la hora de crear **componentes**.

    // Ejemplo con vanilla js -> javaScript puro
    const el = document.createElement('h1');
    const child = document.createElement('span');
    
    el.setAttribute('id', 'title');
    el.textContent = 'Hola ';
    child.textContent = 'mundo';
    el.appendChild(child)
    document.getElementById('app').appendChild(el);
     
    

Como se puede ver crean dos elementos un **h1** y un **span** con un texto y con unos atributos es bastante complejo crear html o llegar a crear un **componente** de esta forma veamos el mismo ejemplo pero con **react.js**.

    // Un hola mundo con react
    const el = <h1> Hola mundo </h1>
    
    ReactDOM.render(
      el,
      document.getElementById('app')
    );
    
    

Cosas para tener en cuenta se ejecuta **ReactDOM.render** y como primer parámetro se envía el *JSX* de nuestro elemento y como segundo parámetro se le indica a que elemento de nuestro **html** se va enviar nuestro JSX.

    // Ejemplo con React y JSX
    const el = (
      <h1 id="title"> 
        Hola 
        <span>mundo desde React.js</span> 
      </h1>
    )
    
    ReactDOM.render(
      el,
      document.getElementById('app')
    );
    
    

Cosas a tener en cuenta cuando se construye un *JSX* podemos declarar ( ) para agregar código a lo vertical o varias lineas, también hay que tener en cuenta que a la hora de enviar nuestro JSX al render de react solo se puede enviar un elemento padre es decir no se puede hacer lo siguiente.

    const el = (
     <h1 id="title" className="title">
        Hola
       <span>mundo</span> 
     </h1>
      <h2 className="title"></h2>
    );
    // No se debe de enviar dos elementos en el mismo nivel
    

Eso no se puede hacer porque solo debe existir un elemento como padre.

    let a = 5, b = 45;
    
    const el = (
      <h1 id="titleHola" className="holaMundo"> 
        Hola
        <span> mundo desde React.js </span>
        <div>
          {
            a + b
          }
        </div>
        <h3>
          Suma {2 + 2} 
        </h3>
      </h1>
    );
    
    ReactDOM.render(
      el,
      document.getElementById('app')
    );
    
    

Como podemos ver usamos **className** para declarar clases ya que **class** es una palabra reservada de JavaScript, algo más a tener en cuenta es a la hora de declarar id o class si son más de dos palabras se tiene que usar la letra siguiente en mayúscula como se puede ver en el ejemplo, también podemos ver que podemos usar JavaScript normalmente con **{ }** llaves se puede usar JavaScript veamos algún ejemplo más.

    const app = document.getElementById('app');
    
    function reloj(){
      let now = new Date().toLocaleTimeString();
    
      const el = <span>{ now }</span>;
      ReactDOM.render(
        el,
        app
      );
    }
    
    setInterval(reloj, 1000);
     
    

Ahora si vamos a crear nuestro **primer componente** en este caso creamos un componente saludar.

    function Saludar(){
      const el = (
        <h2>Hola amigo como estas :D</h2>
      )
      return el;
    }
    
    const el = (
      <section>
        <Saludar />
      </section>
    )
    
    const app = document.getElementById('app');
    
    ReactDOM.render(el, app);
    
    

Cosas a tener en cuenta el nombre del componente *siempre comienza en mayúscula*, cuando se usan los componentes tenemos que cerrarlo, también se pueden usar como componentes hijos ya veremos un ejemplo, lo siguiente es usar **props**.

    function Saludar(props){
      const el = (
        <h2>
          Hola {props.name} 
          {props.saludo} :D
        </h2>
      )
      return el;
    }
    
    const Container = (props) => {
      return (
        <section>
          <Saludar saludo={props.saludo} name='John Serrano'/>
        </section>
      )
    }
    
    const app = document.getElementById('app');
    
    ReactDOM.render(<Container saludo='¿cómo te va?' />, app);
    
    

Manejando ya los *props* se creó un **component** principal Container y se usó el mismo component saludar pasando props.

    function Saludar(props){
      const {
        saludo,
        name,
      } = props;
      
      const el = (
        <h2>
          Hola {name} - {saludo} :D
        </h2>
      )
      return el;
    }
    
    const Container = (props) => {
      return (
        <section>
          <Saludar saludo={props.saludo} name='John Serrano'/>
          <Saludar saludo={props.saludo} name='Anónimo one'/>
          <Saludar name='Anónimo two'/>
        </section>
      )
    }
    
    const app = document.getElementById('app');
    ReactDOM.render(<Container saludo='¿cómo te va?' />, app);
    
    

Como podemos ver se puede usar un mismo componente muchas veces y pasándole **props** con diferentes datos.

Bueno hasta el momento hemos visto el uso de **Componentes Stateless** que son solo funciones donde manejamos los props pero no los estados para terminar vamos a ver el uso de un **Stateful Component** donde podemos usar estados y muchas más cosas que en este post no vamos a tocar pero son la forma más común de crear componentes.

    const teachers = [
      {
        name: 'John Andrey',
        img: 'https://avatars0.githubusercontent.com/u/2974447?v=4&u=34d9fdc885d305dc858896529ce896023f6ead2a&s=400'
      },
      {
        name: 'John Serrano',
        img: 'http://lorempixel.com/250/250/people/color/'
      },
      {
        name: 'Eduardo',
        img: 'http://lorempixel.com/250/250/people/color/'
      },
      {
        name: 'Roberto',
        img: 'http://lorempixel.com/250/250/people/color/'
      },
      {
        name: 'Jhonatan',
        img: 'http://lorempixel.com/250/250/people/color/'
      },
    ];
    // Tenemos nuestra data en un array de objectos.
    
    function Teacher(props){
      const {
        img,
        name,
      } = props;
      
      const el = (
        <li>
         <h2>
           Hola {name}
         </h2>
         <img src={img} />
        </li>
      )
      return el;
    }
    
    class Container extends React.Component{
      constructor(props){
        super(props)
      }
      
      list(){    
        return teachers.map((teacher, index) => {
          return <Teacher key={index} {...teacher} />
        })
      }
      
      render(){
        return (
          <ul>
            {this.list()}
          </ul>
        )
      }
    }
    
    const app = document.getElementById('app');
    ReactDOM.render(<Container />, app);
     
    

Como vemos usamos el mismo componente varias veces pasándole los props con algo que se llama **operador de propagación** que son los tres puntos **{…data}** y también usamos **.map** para recorrer los datos del array, por ultimo veamos como pasar *componentes hijos*.

     function Teachers(props){
      return (
        <section className="teachers">
          <ul>
            {props.children}
          </ul>
        </section>
      )
    }
    
    class Container extends React.Component{
      constructor(props){
        super(props)
      }
      
      list(){    
        return teachers.map((teacher, index) => {
          return <Teacher key={index} {...teacher} />
        })
      }
      
      render(){
        return (
          <Teachers>
            {this.list()}
          </Teachers>
        )
      }
    }
    
    const app = document.getElementById('app');
    ReactDOM.render(<Container />, app);
    
    

Bueno usamos **props.children** para agregar contenido como hijos de un componente.

Espero que sea de tu ayuda, hizo falta el manejo de los estados con las acciones lo dejaremos para un próximo post y quedan otras herramientas por complementar que no se tocaran en este post como seria **Redux** y **react-router** al igual que **immutable.js** entre otras librerías todo el código que se hizo esta en [primeros pasos con react](https://jsbin.com/wekapop/7/edit?html,js,output),  hasta la próxima saludos.
