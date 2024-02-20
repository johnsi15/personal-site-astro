---
title: "Zustand: Aprende a gestionar tu estado en React una alternativa sencilla a Redux"
publishedDate: "2024-02-14T16:29:10.000Z"
updatedDate: "2024-02-15T17:09:31.000Z"
pubDate: "2024-02-14T16:29:10.000Z"
description: "Descubre qué es Zustand, sus ventajas y cómo puedes gestionar el estado de tu aplicación en pocas líneas de código. También compatible con TypeScript."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "TypeScript", "frontend", "front-end", "redux", "zustand", "software", "web", "johnserrano.co", "johnserrano", "estado", "react"]
primaryTag: { name: 'Zustand', slug: 'zustand' }
excerpt: "Descubre qué es Zustand, sus ventajas y cómo puedes gestionar el estado de tu aplicación en pocas líneas de código. También compatible con TypeScript."
canonicalURL: "https://johnserrano.co/blog/zustand-aprende-a-gestionar-tu-estado-en-react-una-alternativa-sencilla-a-redux"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1708016497/John%20Serrano/Blog%20Post/zustand-aprende-a-gestionar-tu-estado-en-react-una-alternativa-sencilla-a-redux/viwegf4ocrn9kvcqkv2d.jpg"
---

## ¿Qué es Zustand?

Zustand es una biblioteca de gestión de estado para **React** que ofrece una forma sencilla y eficiente de administrar el **estado** en las aplicaciones de React. Se pueden gestionar estados pequeños de una forma rápida y escalable.

Zustand es una **alternativa ligera y flexible** a bibliotecas más complejas como **Redux**, ofreciendo una sintaxis más concisa y una **curva de aprendizaje** más suave para aquellos que no están familiarizados con los **patrones de gestión de estado** tradicionales.

## Porque usar zustand ventajas

Zustand ofrece varias ventajas que lo hacen atractivo para la gestión del estado en aplicaciones React:

* Muy fácil de usar utiliza los hooks de React.
* Api simple y concisa lo que facilita la definición y actualización del estado de la aplicación.
* Diseñado para ser eficiente y optimizado para el rendimiento.
* Estado global accesible desde cualquier componente de la aplicación
* No envuelves la aplicación con un `provider` como se hace con Redux.
* Hace los mínimos renderizados que se necesitan solo cuando hay cambios.
* Se escribe menos código en comparación con otros gestores de estado como Redux.

## Requisitos para continuar con el tutorial

Debes tener instalada algunas herramientas y contar con algunos conocimientos básicos:

1. Tener instalado [Node.js](https://nodejs.org/en/) y **npm** que siempre viene cuando se instalada Node.js, como mínimo la versión 18.4.x.
2. Contar con un editor de código como [VScode](https://code.visualstudio.com/) o el que más te guste 🙌.
3. Algunos conocimientos básicos en [JavaScript](https://johnserrano.co/blog/fundamentos-de-programacion-con-javascript-mi-primer-ebook), [ReactJS](https://johnserrano.co/tags/react), terminal o línea de comando y [TypeScript](https://johnserrano.co/blog/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos).

Una vez que tengas estos requisitos instalados y configurados en tu sistema, estarás listo para continuar con el tutorial.

## Iniciando y creando el proyecto 🚀

Vamos a crear un estado para gestionar un carrito de compras, lo primero es iniciar el proyecto y darle un nombre lo vamos hacer con **vite** el nombre es de su preferencia. 

`npm create vite@latest`

Nos va hacer varias preguntas como darle un nombre a nuestro proyecto el framework que vamos a utilizar y la variente en este caso vamos a usar **TypeScript** con **SWC** que es una alternativa a babel.

```shell
✔ Project name: … shopping-cart
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

Ahora lo que vamos hacer es entrar a nuestro proyecto y hacer una instalación de todos los paquetes que vienen por defecto.

```shell
cd shopping-cart
npm install
```

## Instalación de Zustand y creando una store

Para este ejemplo, vamos a simular un **carrito de compras** en el cual podremos agregar productos, aumentar la cantidad de un producto, eliminar productos individuales y limpiar completamente el carrito de compras.

Lo primero es instalar Zustand:

`npm install zustand -E`

Con -E para que instale la versión exacta.

Ya cuando tengamos instalada la librería, necesitamos crear una carpeta `src/store` y dentro de la carpeta agregamos un nuevo archivo llamado `shoppingCart.ts` y dentro de este archivo, crearemos nuestra store.

Lo siguiente es importar nuestra librería y crear el **store**.

```ts
import { create } from 'zustand'

export const useShoppingCart = create((set, get) => ({ }))
```

Creamos una constante con el nombre `useShoppingCart` tener en cuenta que se usa el `use` por delante ya que Zustand usa hooks por debajo y en la documentación esta de esa manera.

Definimos la `store` utilizando la función `create`, a la cual le pasamos una función callback como parámetro. Esta función retorna un objeto que representa el **estado inicial**. La función callback recibe dos parámetros: `set` y `get`, que nos permiten modificar y obtener el estado respectivamente.

Ahora vamos agregar un poquito de `ts` tipando nuestro store.

```ts
interface Product {
  id: number
  name: string
  price: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface ShoppingCart {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  increaseQuantity: (productId: number, quantity?: number) => void
  decreaseQuantity: (productId: number, quantity?: number) => void
  getTotalPrice: () => number
  clearCart: () => void
}
```

Después de definir las **interfaces** para nuestros productos, los elementos del carrito y el carrito de compras en sí, el siguiente paso es crear todas las propiedades que tendrá nuestro `store`.

```ts
export const useShoppingCart = create<ShoppingCart>((set, get) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    
  },
  removeItem: productId => {
    
  },
  increaseQuantity: (productId, quantity = 1) => {
    
  },
  decreaseQuantity: (productId, quantity = 1) => {
    
  },
  getTotalPrice: () => {},
  clearCart: () => {}),
}))
```

## Agregando items a la store

Lo primero es ubicarnos en nuestro component `src/App.tsx` e importar la `store` y acceder al método `addItem`.

El método `addItem` se encarga de agregar un nuevo elemento al carrito de compras. Toma como parámetros el producto que se desea agregar y opcionalmente la cantidad del producto a agregar.

```tsx
import { useShoppingCart } from './store/shoppingCart'

interface Product {
  id: number
  name: string
  price: number
}

function App() {
  const addItem = useShoppingCart(state => state.addItem)

  const handlerAdd = (product: Product) => () => {
    addItem(product)
  }

  return (
    <>
      <main>
        <h1>List products</h1>
        <ul>
          <li>
            <span>Product #1: </span>
            <span>Product Price: 500</span>
            <button onClick={handlerAdd({ id: 1, name: 'Product 01', price: 500 })}>Add item cart</button>
          </li>
          <li>
            <span>Product #2: </span>
            <span>Product Price: 700</span>
            <button onClick={handlerAdd({ id: 2, name: 'Product 02', price: 700 })}>Add item cart</button>
          </li>
          <li>
            <span>Product #3: </span>
            <span>Product Price: 300</span>
            <button onClick={handlerAdd({ id: 3, name: 'Product 03', price: 300 })}>Add item cart</button>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
```

Definimos una interfaz llamada `Product` que describe la estructura de un producto, con propiedades como `id`, `name` y `price`.

Obtenemos el método `addItem` del estado del carrito de compras utilizando `useShoppingCart`. Esta función se utiliza para agregar un producto al carrito, como parametro recibimos el **state** y con el podemos acceder al método `addItem`.

Definimos una función llamada `handlerAdd` que recibe un producto como argumento y devuelve otra función. Esta función devuelta se usa como manejador de eventos para los botones "Add item cart" de cada producto en la lista. Cuando se hace clic en un botón, se llama a esta función para agregar el producto correspondiente al carrito utilizando el método `addItem`.

Finalmente dentro del componente `App`, se renderiza una lista de productos con sus respectivos nombres y precios. Para cada producto, hay un botón **"Add item cart"** que, al hacer clic, llama a la función `handlerAdd` para agregar ese producto específico al carrito.

Ahora, en nuestra `store`, utilizamos la función `set` para actualizar el estado. Esta función nos permite modificar el estado de la `store` al pasarle un nuevo valor. La función `set` es proporcionada por **Zustand** y es similar a **useState** en **React**, pero en lugar de manejar un solo estado local, `set` gestiona todo el estado de nuestra `store` global.

```ts
export const useShoppingCart = create<ShoppingCart>((set, get) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    set({ items: [{ product, quantity }] })
  },
}))
```

Cuando llamamos a `set`, pasamos un objeto que representa el **nuevo estado** que queremos establecer en la `store`. Esto puede ser un objeto completamente nuevo que reemplace el estado existente, o podemos realizar cambios en el estado actualizado pasando solo las propiedades que queremos cambiar.

En este caso solo vamos a cambiar los `items` le indicamos que vamos actualizar los items pasando un array con el objecto que identifica el nuevo producto. **Zustand** se encarga de manejar la actualización del estado de manera eficiente y notificar a los componentes que están suscritos a los cambios en la store.

## Accediendo a la store

Acceder a nuestro store es tan sencillo como lo hicimos con `addItem`, y como habrás notado, no necesitamos un Provider para utilizar nuestro store.

```tsx
import { useShoppingCart } from './store/shoppingCart'

function App() {
  const items = useShoppingCart(state => state.items)

  return (
    <>
      <main>
        <ul>
          {items.map(item => {
            return (
              <li key={item.product.id}>
                <span>Name: {item.product.name}</span>
                <span>Price: {item.product.price}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
```

Accedemos al `store` utilizando `state.items` y luego recorremos este valor utilizando `map` para obtener cada una de sus propiedades de forma sencilla.

Ahora procederé a implementar los demás métodos que hemos definido, completando así la funcionalidad del carrito de compras. 

```ts
export const useShoppingCart = create<ShoppingCart>((set, get) => ({
  items: [],
  removeItem: productId => {
    const { items } = get()

    set({ items: items.filter(item => item.product.id !== productId) })
  },
  increaseQuantity: (productId, quantity = 1) => {
    const { items } = get()

    const newItems = structuredClone(items)
    const itemIndex = newItems.findIndex(item => item.product.id === productId)
    const itemData = newItems[itemIndex]

    newItems[itemIndex] = { ...itemData, quantity: itemData.quantity + quantity }

    set({ items: newItems })
  },
  decreaseQuantity: (productId, quantity = 1) => {
    const { items } = get()

    const newItems = structuredClone(items)
    const itemIndex = newItems.findIndex(item => item.product.id === productId)
    const itemData = newItems[itemIndex]

    const newQuantity = itemData.quantity !== 1 ? itemData.quantity - quantity : quantity

    newItems[itemIndex] = { ...itemData, quantity: newQuantity }

    set({ items: newItems })
  },
  getTotalPrice: () => {
    const { items } = get()

    return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  },
  clearCart: () => set({ items: [] }),
}))
```

> Nota: Para acceder al estado almacenado en la store, podemos usar el método `get() `que está seguido de `set()`. Con este enfoque, tenemos acceso completo al estado.

¡Perfecto! Ahora vamos a invocar todos estos métodos desde nuestro componente `App` y observemos cómo funciona en acción.

```tsx
import { useShoppingCart } from './store/shoppingCart'
import './App.css'

interface Product {
  id: number
  name: string
  price: number
}

function App() {
  const items = useShoppingCart(state => state.items)
  const addItem = useShoppingCart(state => state.addItem)
  const increaseQuantity = useShoppingCart(state => state.increaseQuantity)
  const decreaseQuantity = useShoppingCart(state => state.decreaseQuantity)
  const removeItem = useShoppingCart(state => state.removeItem)
  const clearCart = useShoppingCart(state => state.clearCart)
  const getTotalPrice = useShoppingCart(state => state.getTotalPrice)

  const handlerAdd = (product: Product) => () => {
    addItem(product)
  }

  const handlerRemove = (id: number) => () => {
    removeItem(id)
  }

  const handlerIncreaseQuantity = (id: number) => () => {
    increaseQuantity(id)
  }

  const handlerDecreaseQuantity = (id: number) => () => {
    decreaseQuantity(id)
  }

  const handlerClearCart = () => {
    clearCart()
  }

  return (
    <>
      <main>
        <h1>List products</h1>
        <ul>
          <li>
            <span>Product #1: </span>
            <span>Product Price: 500</span>
            <button onClick={handlerAdd({ id: 1, name: 'Product 01', price: 500 })}>Add item cart</button>
          </li>
          <li>
            <span>Product #2: </span>
            <span>Product Price: 700</span>
            <button onClick={handlerAdd({ id: 2, name: 'Product 02', price: 700 })}>Add item cart</button>
          </li>
          <li>
            <span>Product #3: </span>
            <span>Product Price: 300</span>
            <button onClick={handlerAdd({ id: 3, name: 'Product 03', price: 300 })}>Add item cart</button>
          </li>
        </ul>

        <section className='list_shopping'>
          <h2>List Shopping cart</h2>
          {items.length === 0 && <p>Cart is empty</p>}
          {items.length > 0 && (
            <div className='totales'>
              <p>Total items: {items.length}</p>
              <h3>Total Price: {getTotalPrice()}</h3>
              <button onClick={handlerClearCart}>Clear cart</button>
            </div>
          )}
        </section>
        <ul>
          {items.map(item => {
            return (
              <li key={item.product.id}>
                <span>Name: {item.product.name}</span>
                <span>Price: {item.product.price}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={handlerIncreaseQuantity(item.product.id)}>+</button>
                <button onClick={handlerDecreaseQuantity(item.product.id)} disabled={item.quantity === 1}>
                  {' '}
                  -{' '}
                </button>
                <button onClick={handlerRemove(item.product.id)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
```

Algo que podemos observar con todo esto es que estamos llamando a cada rato `useShoppingCart` algo que podría hacer es separa nuestro código en pequeños componentes pero quiero también enseñarte una funcionalidad de **Zustand** llamada `shallow`.


Lo primero que debemos hacer es importar el hook `useShallow` de la biblioteca **zustand/react/shallow**. Luego, lo implementamos de la siguiente manera:

```tsx
import { useShallow } from 'zustand/react/shallow'

const { items, addItem, increaseQuantity, decreaseQuantity, removeItem, clearCart, getTotalPrice } = useShoppingCart(
    useShallow(state => ({
      items: state.items,
      addItem: state.addItem,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
      removeItem: state.removeItem,
      clearCart: state.clearCart,
      getTotalPrice: state.getTotalPrice,
    }))
  )
```

Estamos utilizando el hook `useShallow` para evitar que los componentes vuelvan a renderizarse innecesariamente si las propiedades del estado no han cambiado.

Por defecto si no usamos **shallow**, Zustand detecta los cambios con igualdad estricta (old === new), lo cual es eficiente para estados atómicos.

Debido a que la igualdad estricta por defecto no sería útil en este caso para evaluar **objetos**, ya que provocaría **un re-renderizado incluso si el objeto no ha cambiado**. Por eso, utilizamos el hook `useShallow` para evitar este comportamiento y optimizar el rendimiento del componente.

Todo esto aplica en el caso de que deseemos usar **objetos** para recuperar los estados de nuestro `store`.

## Persistir el store 

También existe un **middleware** con el cual podemos persistir el estado de nuesta aplicación debemos important el middleware`import { persist } from 'zustand/middleware'` por defecto usa **localStorage** para persistir la data. Vemoamos como quedaría nuestro `store` implementando el middleware.

```tsx
import { persist } from 'zustand/middleware'

export const useShoppingCart = create<ShoppingCart>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {

      },
      removeItem: productId => {

      },
      increaseQuantity: (productId, quantity = 1) => {

      },
      decreaseQuantity: (productId, quantity = 1) => {

      },
      getTotalPrice: () => {

      },
      clearCart: () => set({ }),
    }),
    {
      name: 'shopping-cart',
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
)
```

Cuando envolvemos nuestro storage con el `middleware`, podemos proporcionarle opciones adicionales, como el nombre. Esto nos permite personalizar cómo se almacena y accede al estado en el almacenamiento persistente.

## Conclusiones

Zustand es una opción **simple** y **eficiente** para gestionar el estado en aplicaciones React, especialmente cuando se trata de **aplicaciones pequeñas o medianas**, Zustand ofrece una solución simple y eficiente.

Una de las ventajas clave de **Zustand** es que no requiere el uso de un **Provider**, lo que simplifica la integración y reduce la necesidad de encadenar proveedores en la jerarquía de componentes. Con Zustand, puedes gestionar el **estado** de manera **flexible**, definiendo tus propias **acciones** y mutadores para actualizar el estado según tus necesidades específicas.

Te dejo todo el código en el siguiente [repositorio](https://github.com/johnsi15/zustand-shopping-cart) si te gusta el contenido deja tu estrellita en el repositorio✨.

