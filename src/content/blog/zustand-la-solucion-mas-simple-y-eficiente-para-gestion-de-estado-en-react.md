---
title: "Zustand: La solución más simple y eficiente para gestión de Estado en React"
publishedDate: "2025-04-26T16:29:10.000Z"
updatedDate: "2025-04-27T17:09:31.000Z"
pubDate: "2025-04-26T16:29:10.000Z"
description: "En este artículo te guiaré desde qué es Zustand, sus ventajas sobre otras opciones, hasta cómo implementar un contador utilizando middlewares como persist y devtools, e incluso integrar validaciones con Zod."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "TypeScript", "frontend", "front-end", "redux", "zustand", "software", "web", "johnserrano.co", "johnserrano", "estado", "react"]
primaryTag: { name: 'Zustand', slug: 'zustand' }
excerpt: "En este artículo te guiaré desde qué es Zustand, sus ventajas sobre otras opciones, hasta cómo implementar un contador utilizando middlewares como persist y devtools, e incluso integrar validaciones con Zod."
canonicalURL: "https://johnserrano.co/blog/zustand-la-solucion-mas-simple-y-eficiente-para-gestion-de-estado-en-react"
draft: false
featureImage: "https://download.johnserrano.co/zustand-react-ts.jpg"
---

El manejo de estado en aplicaciones React es un desafío recurrente. Librerías como Redux o Redux Toolkit ofrecen soluciones robustas pero, en muchos casos, demasiado complejas para necesidades simples. **Zustand** emerge como una alternativa moderna, liviana y extremadamente intuitiva.

En este artículo te guiaré desde qué es Zustand, sus ventajas sobre otras opciones, hasta cómo implementar un contador utilizando middlewares como `persist` y `devtools`, e incluso integrar validaciones con **Zod**.

## ¿Qué es Zustand?

**Zustand** ("estado" en alemán) es una librería minimalista de manejo de estado para aplicaciones React. Fue creada por **Poimandres** (los mismos de `jotai` y `react-three-fiber`) y ofrece una API pequeña pero extremadamente poderosa.

Algunas características principales:

- No depende del árbol de componentes.
- No requiere boilerplate.
- Trabaja de forma reactiva pero es independiente de React internamente.
- Permite middlewares para persistencia, devtools, entre otros.


## Comparación con Otras Soluciones

| Característica              | Redux                          | Redux Toolkit                  | Zustand                  |
|------------------------------|--------------------------------|--------------------------------|---------------------------|
| Boilerplate                  | Muy Alto                      | Moderado                      | Muy Bajo                 |
| API                          | Verbosa                       | Simplificada                  | Muy simple               |
| Curva de Aprendizaje         | Alta                           | Media                         | Muy Baja                 |
| Integración Devtools         | Manual + Configuración extra  | Integración automática        | Sencilla y directa        |
| Persistencia de Estado       | Requiere configuración manual | Requiere middlewares adicionales | Integrado vía middleware |
| Uso fuera de componentes     | Difícil                        | Más sencillo pero no nativo   | Muy fácil                |
| Tamaño de la librería         | Grande                         | Medio                         | Pequeño (~1KB gzipped)   |

Como puedes observar, **Zustand** es ideal para quienes buscan una solución directa, moderna y altamente eficiente, mientras que **Redux Toolkit** representa una mejora significativa sobre Redux clásico, pero aún mantiene cierta complejidad estructural.


## Creando un Store de Contador con Zustand

Primero, instalemos Zustand:

```bash
npm install zustand
```

Ahora, creamos el store:

```typescript
// src/stores/counterStore.ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
```

**Notas importantes:**
- El nombre `useCounterStore` sigue la convención de React Hooks.
- El store **debe estar fuera** de los componentes para ser compartido globalmente.


## Usando el Store en un Componente

```tsx
// src/components/Counter.tsx
import { useCounterStore } from '../stores/counterStore'

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  )
}

export default Counter
```

Con esto tienes un contador funcional, sin necesidad de reducers, actions ni context providers.


## Agregando Persistencia y Devtools

Zustand permite utilizar middlewares para ampliar funcionalidades.

Lo primero que debemos hacer es instalar la [extensión Redux DevTools de Chrome](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) para utilizar el middleware devtools.


```typescript
import { devtools } from 'zustand/middleware'

// Envolvemos todo nuestro store con devtools
const usePlainStore = create(devtools((set) => ...))
```

Modificamos el store:

```typescript
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),
      { name: 'counter-storage' }
    )
  )
)
```

**¿Qué logramos?:**
- **`persist`** guarda el estado en `localStorage` o `sessionStorage`.
- **`devtools`** permite inspeccionar el estado con Redux DevTools (sin usar Redux).

Esto facilita el debuggeo y asegura que el contador persista aunque recargues la página.

## Si deseas ver un ejemplo más completo, incluyendo un carrito de compras, te invito a leer el siguiente artículo 👇

[Zustand: Aprende a gestionar tu estado en React una alternativa sencilla a Redux](https://johnserrano.co/blog/zustand-aprende-a-gestionar-tu-estado-en-react-una-alternativa-sencilla-a-redux)

## Integrando Zod para Validaciones

Aunque Zustand no maneja formularios, en una aplicación real puedes querer validar datos antes de actualizar el estado. Para eso **Zod** es una excelente opción.

Instalamos:

```bash
npm install zod
```

Ejemplo básico para validar antes de setear:

```typescript
import { z } from 'zod'

const CountSchema = z.object({
  count: z.number().min(0).max(100),
})

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => {
          const result = CountSchema.safeParse({ count: state.count + 1 })
          if (result.success) {
            return { count: state.count + 1 }
          }
          console.error(result.error)
          return state
        }),
        decrement: () => set((state) => {
          const result = CountSchema.safeParse({ count: state.count - 1 })
          if (result.success) {
            return { count: state.count - 1 }
          }
          console.error(result.error)
          return state
        }),
        reset: () => set({ count: 0 }),
      }),
      { name: 'counter-storage' }
    )
  )
)
```

**Conclusión:** Con Zod evitamos que el contador pase de ciertos límites definidos de manera declarativa.

## Reflexión Final

**Zustand** representa la evolución natural de la gestión de estado en React: simplicidad, flexibilidad y potencia.

Si estás cansado del exceso de configuración de Redux o simplemente buscas una forma más intuitiva de manejar estados globales, **Zustand es, sin duda, una opción que deberías considerar seriamente**.

Gracias por leer. ❤️
