---
title: "¿Qué es SOLID? Principios de diseño para programar código limpio en TypeScript y React"
publishedDate: "2025-08-01T16:29:10.000Z"
updatedDate: "2025-08-02T17:09:31.000Z"
pubDate: "2025-08-01T16:29:10.000Z"
description: "Descubre qué es SOLID y cómo aplicar estos principios de diseño para escribir código limpio, mantenible y escalable en TypeScript y React. Aprende con ejemplos prácticos para backend y frontend."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "TypeScript", "frontend", "front-end", "solid", "diseño", "software", "web", "johnserrano.co", "johnserrano", "POO", "react"]
primaryTag: { name: 'SOLID', slug: 'solid' }
excerpt: "Descubre qué es SOLID y cómo aplicar estos principios de diseño para escribir código limpio, mantenible y escalable en TypeScript y React. Aprende con ejemplos prácticos para backend y frontend."
canonicalURL: "https://johnserrano.co/blog/solid-principios-diseno-codigo-limpio-typescript-react"
draft: false
featureImage: "https://download.johnserrano.co/solid.webp"
---

## Introducción a los principios SOLID en la Programación Orientada a Objetos

En el desarrollo de software, escribir código limpio, modular y fácil de mantener es fundamental. Aquí es donde entran los principios **SOLID**: un conjunto de reglas que ayudan a diseñar clases y componentes bien estructurados.  

Pero, ¿qué es SOLID? ¿Es un patrón de diseño, una arquitectura, o algo más?  

**SOLID no es un patrón ni una arquitectura**, sino cinco principios de diseño que nos ayudan a organizar mejor nuestro código, especialmente en la **Programación Orientada a Objetos (POO)**.

En este artículo:
- Explicaremos qué es la POO y por qué es importante para entender SOLID.
- Veremos cada uno de los principios SOLID con ejemplos prácticos en **TypeScript** (backend) y **React** (frontend).
- Analizaremos las ventajas de aplicar SOLID y cómo empezar a implementarlo.

---

## 1. Conceptos básicos de la POO

La **Programación Orientada a Objetos (POO)** es un paradigma que organiza el código en “objetos” que representan elementos del mundo real.  
Cada objeto tiene **atributos** (características) y **métodos** (acciones).

**Ejemplo sencillo:**

```typescript
// TypeScript (Backend)
class Usuario {
  nombre: string;
  correo: string;

  constructor(nombre: string, correo: string) {
    this.nombre = nombre;
    this.correo = correo;
  }

  iniciarSesion() {
    // lógica de autenticación
  }
}
```

```jsx
// React (Frontend)
function Usuario({ nombre, correo }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{correo}</p>
    </div>
  );
}
```

### Clases e instanciación
Las **clases** funcionan como plantillas para crear objetos. Por ejemplo, una clase `SuperHeroe` puede tener métodos como `volar()` y atributos como `nombre`.

### Los 4 pilares de la POO

- **Abstracción**: Resumir lo esencial de un objeto y ocultar los detalles innecesarios.
- **Encapsulamiento**: Proteger los datos internos de un objeto, exponiendo solo lo necesario.
- **Herencia**: Permitir que una clase hija herede atributos y métodos de una clase padre.
- **Polimorfismo**: Permitir que diferentes clases respondan de manera distinta a un mismo método.

### Abstracción
Extraer las características esenciales de un objeto y ocultar los detalles complejos.

```typescript
// Solo exponemos lo necesario de la clase
abstract class Vehiculo {
  abstract moverse(): void;
}

class Auto extends Vehiculo {
  moverse() {
    console.log("El auto avanza sobre ruedas");
  }
}

const miAuto = new Auto();
miAuto.moverse(); // "El auto avanza sobre ruedas"
```
**Explicación**:
La clase `Vehiculo` es una abstracción. No interesa cómo se mueve, solo que puede moverse. Cada subclase implementa el detalle.

### Encapsulamiento
Proteger los datos internos de un objeto y exponer solo una interfaz controlada.

```typescript
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(monto: number) {
    this.saldo += monto;
  }

  obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
// cuenta.saldo = 99999; // Error: saldo es privado
console.log(cuenta.obtenerSaldo()); // 1500
```
**Explicación**:
El atributo saldo está protegido y solo puede ser modificado mediante métodos públicos.

### Herencia
Permitir que una clase hija herede atributos y métodos de una clase padre.

```typescript
class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("Algún sonido...");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau!");
  }
}

const miPerro = new Perro("Rex");
miPerro.hacerSonido(); // "Guau!"
```
**Explicación**:
`Perro` hereda de `Animal` y puede sobreescribir el método hacerSonido.

### Polimorfismo
Permitir que diferentes clases respondan de manera distinta a un mismo método.

```typescript
const animales: Animal[] = [
  new Perro("Rex"),
  new Gato("Michi"),
];

animales.forEach(animal => animal.hacerSonido());
// "Guau!"
// "Miau!"
```
**Explicación**:
Aunque ambos son `Animal`, cada subclase implementa su propia versión de `hacerSonido`.


---

### 2. ¿Qué es SOLID?

**SOLID** es el acrónimo de cinco principios de diseño para la POO, propuestos por Robert C. Martin (“Uncle Bob”).  
Su objetivo es ayudarte a escribir código:

- Más limpio
- Más mantenible
- Más flexible y escalable

**Los cinco principios son:**
1. **S**ingle Responsibility Principle (SRP) – Responsabilidad Única
2. **O**pen/Closed Principle (OCP) – Abierto/Cerrado
3. **L**iskov Substitution Principle (LSP) – Sustitución de Liskov
4. **I**nterface Segregation Principle (ISP) – Segregación de Interfaces
5. **D**ependency Inversion Principle (DIP) – Inversión de Dependencias

---

## 3. Los principios SOLID explicados con ejemplos

### 1. Principio de Responsabilidad Única (SRP)

Cada clase o componente debe tener una sola responsabilidad.

**Mal ejemplo (TypeScript):**

```typescript
class Factura {
  calcularTotal() { /* ... */ }
  imprimir() { /* ... */ }
  guardarEnBD() { /* ... */ }
}
```
Esta clase hace demasiadas cosas.

**Mejor ejemplo (TypeScript):**

```typescript
class FacturaCalculo { calcularTotal() { /* ... */ } }
class FacturaImpresion { imprimir() { /* ... */ } }
class FacturaPersistencia { guardarEnBD() { /* ... */ } }
```

**Frontend con React:**

❌ Un componente que muestra y guarda datos al mismo tiempo:

```jsx
function UserProfile({ user }) {
  // Guarda y muestra datos juntos (mala práctica)
  function saveUser() {
    // lógica de guardado
  }

  return (
    <div>
      <span>{user.name}</span>
      <button onClick={saveUser}>Guardar</button>
    </div>
  );
}
```

✅ Separando responsabilidades:

```jsx
function UserProfileView({ user }) {
  return <span>{user.name}</span>;
}

function UserProfileSave({ user, onSave }) {
  return <button onClick={() => onSave(user)}>Guardar</button>;
}

// Uso
<UserProfileView user={user} />
<UserProfileSave user={user} onSave={saveUser} />
```
**Explicación**:
Cada componente tiene una función clara: uno muestra datos, otro los guarda.

---

### 2. Principio de Abierto/Cerrado (OCP)

Las clases deben estar **abiertas para extensión pero cerradas para modificación**.

**Mal ejemplo (TypeScript):**

```typescript
class SuperHeroe {
  habilidad: string;
  usarHabilidad() {
    if (this.habilidad === "volar") { /* ... */ }
    // Si agrego más habilidades, tengo que modificar la clase.
  }
}
```

**Mejor ejemplo (TypeScript):**

```typescript
class SuperHeroe {
  usarHabilidad() { /* implementación base */ }
}

class SuperHeroeVolador extends SuperHeroe {
  usarHabilidad() { /* volar */ }
}
```

**React Frontend:**

❌ Mal ejemplo (modificando para cada tipo de botón)

```jsx
function Button({ type, ...props }) {
  if (type === "primary") return <button className="blue" {...props} />;
  if (type === "danger") return <button className="red" {...props} />;
  // Cada vez hay que modificar esta función para agregar un tipo nuevo
}
```

En vez de modificar un componente para cada variante, extiéndelo o compón con props.

✅ Buen ejemplo (usando composición)

```jsx
function Button({ children, className, ...props }) {
  return <button className={className} {...props}>{children}</button>;
}

// Extender sin modificar:
function PrimaryButton(props) {
  return <Button className="blue" {...props} />;
}

function DangerButton(props) {
  return <Button className="red" {...props} />;
}

function App() {
  return (
    <div>
      <PrimaryButton onClick={() => alert('Primario')}>
        Botón Primario
      </PrimaryButton>
      <DangerButton onClick={() => alert('¡Cuidado!')}>
        Botón de Peligro
      </DangerButton>
    </div>
  );
}
```
**Explicación**:
Se pueden crear nuevos tipos de botones sin modificar el componente base.

---

### 3. Principio de Sustitución de Liskov (LSP)

Las clases hijas deben poder usarse como sus padres, **sin romper la aplicación**.

**Mal ejemplo (TypeScript):**

```typescript
class Ave { volar() {} }
class Pinguino extends Ave { volar() { throw new Error("No puedo volar"); } }
```
Si reemplazo Ave por Pinguino, ¡el código se rompe!

**Mejor ejemplo:**

```typescript
class Ave {}
class AveVoladora extends Ave { volar() {} }
class Pinguino extends Ave {}
```

**En React:**

❌ Mal ejemplo (hijo rompe comportamiento esperado)

```jsx
function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

function ReadOnlyInput(props) {
  // No acepta onChange, rompe el contrato
  return <input value={props.value} readOnly />;
}
```

✅ Mejor ejemplo

```jsx
// Componente base: Input editable
function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

// Variante: Input solo lectura, pero sigue aceptando onChange para cumplir LSP
function ReadOnlyInput({ value, onChange }) {
  return <input value={value} readOnly onChange={onChange} />;
}

// Componente de formulario que puede alternar entre editable y solo lectura
function Formulario({ readOnly }) {
  const [valor, setValor] = React.useState("Texto inicial");

  // Elegimos el componente según la prop readOnly
  const InputComponent = readOnly ? ReadOnlyInput : Input;

  return (
    <div>
      <label>
        Nombre:
        <InputComponent
          value={valor}
          onChange={e => setValor(e.target.value)}
        />
      </label>
      <p>Valor actual: {valor}</p>
    </div>
  );
}

// Ejemplo de uso en tu app principal
function App() {
  const [soloLectura, setSoloLectura] = React.useState(false);

  return (
    <div>
      <button onClick={() => setSoloLectura(prev => !prev)}>
        {soloLectura ? "Cambiar a editable" : "Cambiar a solo lectura"}
      </button>
      <Formulario readOnly={soloLectura} />
    </div>
  );
}
```
**Explicación**:
`ReadOnlyInput` sigue aceptando las mismas `props`, aunque ignore algunas, no rompe el contrato.

---

### 4. Principio de Segregación de Interfaces (ISP)

No fuerces a implementar métodos que no se necesitan.

**Mal ejemplo (TypeScript):**

```typescript
interface SuperHeroe {
  volar(): void;
  nadar(): void;
}

class Ironman implements SuperHeroe {
  volar() {}
  nadar() { /* Ironman no nada, pero debe implementar igual */ }
}
```

**Mejor ejemplo:**

```typescript
interface Volador { volar(): void; }
interface Nadador { nadar(): void; }

class Ironman implements Volador {
  volar() {}
}
```

**En React:**

❌ Mal ejemplo (props innecesarias)

```jsx
function Animal({ name, fly, swim }) {
  // Algunos animales no vuelan ni nadan
}
```

✅ Buen ejemplo

```jsx
function Animal({ name }) {
  return <span>{name}</span>;
}

function FlyingAnimal({ name, fly }) {
  // Solo para animales que vuelan
}

function SwimmingAnimal({ name, swim }) {
  // Solo para animales que nadan
}
```
**Explicación**:
Cada componente recibe solo las `props` que necesita.

---

### 5. Principio de Inversión de Dependencias (DIP)

Las clases deben depender de **abstracciones** (interfaces), no de implementaciones concretas.

**Mal ejemplo (TypeScript):**

```typescript
class Notificador {
  emailService = new EmailService();
  notificar() { this.emailService.enviar(); }
}
```

**Mejor ejemplo:**

```typescript
interface ServicioNotificacion { enviar(): void; }

class Notificador {
  constructor(private servicio: ServicioNotificacion) {}
  notificar() { this.servicio.enviar(); }
}
```

**En React:**  

❌ Mal ejemplo (componente crea su propia dependencia)

```jsx
function Notification() {
  const service = new NotificationService();

  function notify() {
    service.send("Hola!");
  }

  return <button onClick={notify}>Notificar</button>;
}
```

✅ Buen ejemplo (la dependencia se inyecta)

```jsx
import React from "react";

// Servicio de notificaciones (puede ser email, SMS, etc.)
class NotificationService {
  send(message) {
    alert(`Servicio de notificación: ${message}`);
    // Aquí podrías hacer una llamada a un API, por ejemplo.
  }
}

// Componente que usa el servicio inyectado (DIP)
function Notification({ notificationService }) {
  function notify() {
    notificationService.send("¡Hola usuario!");
  }

  return <button onClick={notify}>Notificar</button>;
}

// Ejemplo de uso en tu aplicación principal
function App() {
  // Instancia concreta del servicio de notificaciones
  const serviceInstance = new NotificationService();

  return (
    <div>
      <h1>Ejemplo de Inversión de Dependencias (DIP) en React</h1>
      <Notification notificationService={serviceInstance} />
    </div>
  );
}

export default App;
```
**Explicación**:
El componente no conoce la implementación concreta, solo usa lo que recibe.

---

## 4. Ventajas y desventajas de aplicar SOLID

**Ventajas:**
- Código más limpio y modular.
- Facilita pruebas (testing) y cambios.
- Escalabilidad y mantenibilidad.

**Desventajas:**
- Puede requerir más clases/archivos.
- A veces añade complejidad innecesaria en proyectos pequeños.

---

## 5. Aplicando SOLID en JavaScript y React

Aunque JavaScript no es estrictamente orientado a objetos, **puedes aplicar SOLID** en frameworks como React:

- **SRP:** Crea componentes pequeños y especializados.
- **OCP:** Extiende componentes mediante composición y props.
- **LSP:** Evita hacer suposiciones de tipos o estructuras internas.
- **ISP:** Define props claras y separa componentes según su función.
- **DIP:** Pasa datos y comportamientos por props/context, no desde dentro del componente.

---

## Conclusión

Los principios SOLID te ayudan a escribir mejor código: más limpio, modular y fácil de mantener.  
Si trabajas en backend (TypeScript) o frontend (React), empezar a aplicar SOLID te ayudará a mejorar la calidad de tus proyectos.

**¿Listo para dar el salto? ¡Empieza a aplicar SOLID en tu próximo proyecto y verás la diferencia!**
