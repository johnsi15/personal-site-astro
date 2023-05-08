---
title: Primeros pasos con Python
publishedDate: 2016-06-27T04:14:39.000Z
updatedDate: 2020-05-05T21:42:35.000Z
pubDate: 2016-06-27T04:14:39.000Z
tags: 
- Python
- programacion
- Developer
- desarrollo
- primeros-pasos
- terminal
excerpt: Hola amigos el día de hoy les raigo un artículo donde les explicare la forma de comenzar con python, comenzando de lo más básico y en futuros artículos..
description: Hola amigos el día de hoy les raigo un artículo donde les explicare la forma de comenzar con python, comenzando de lo más básico y en futuros artículos..
primaryTag: { name: 'Python', slug: 'python' }
canonicalURL: "https://johnserrano.co/blog/primeros-pasos-con-python"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683578543/John%20Serrano/Blog%20Post/primeros-pasos-con-python/primerosPasos_rwaa03.jpg"
---

Hola amigos el día de hoy les raigo un artículo donde les explicare la forma de comenzar con python, comenzando de lo más básico y en futuros artículos publicare algo más avanzado, para comenzar debemos tener instalado python para saber si tenemos instalados python podemos escribir en la terminal o consola python y verán algo como lo siguiente.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683578652/John%20Serrano/Blog%20Post/primeros-pasos-con-python/primerosPasos_1_mytfmo.jpg)

Si no es así los invito a que vean el siguiente [artículo](http://blog.johnserrano.co/instalacion-de-python-virtualenv/) donde explico cómo instalar python en sus diferentes sistemas operativos.

Para comenzar debemos tener un editor de texto el que ustedes quieran usar para codear, yo voy a usar sublimet tex que es mi preferido. Creando un archivos nuevo lo podemos guardar con la exención .py de este modo le indicamos que se trata de un archivo de python.

## Encoding # -*- coding: utf-8 -*- y print

La primera línea de código que escribiremos será **# -*- coding: utf-8 -*-** con esta línea de código le indicamos al archivo que vamos a escribir caracteres extraños como son las tildes y las ñ porque python no reconoce ese tipo de caracteres, me parece que es una buena práctica comenzar con esta línea de código para no tener problemas más adelante con los caracteres extraños.

Para ver resultados de texto  podemos hacer un **print “Hola mundo”** o simplemente queremos imprimir una variable print variable o imprimir texto con variable print (“Hola mundo”, variable).

**Nota: Las variables son palabras que hacen referencia a un tipo de dato que tenemos guardado en esa variable ejemplo, soyunavariable = “Hola mundo”.**

```py
# -*- coding: utf-8 -*- 
variable = "Hola mundo!"
print "Hola mundo!"
print variable
print ("John Serrano", variable)
```
    

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683578652/John%20Serrano/Blog%20Post/primeros-pasos-con-python/primerosPasos_2_q5qggh.jpg)

**Nota: para ejecutar el ejemplo nos paramos en la carpeta donde estemos guardando el archivo .py.**

Si escribimos alguna palabra con ñ o tilde y no tenemos el coding veamos lo que pasa.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683578652/John%20Serrano/Blog%20Post/primeros-pasos-con-python/primerosPasos_3_e1fbjf.jpg)

## Tipos de variables o datos

Tenemos varios tipos de variables donde podemos guardar datos, están las variables que guardan textos, las variables que guardan números enteros, números reales, tenemos también variables de varias líneas y por ultimo tenemos las variables de tipo verdadero y falso que guardan un True o un False, ejemplo.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683578653/John%20Serrano/Blog%20Post/primeros-pasos-con-python/primerosPasos_4_nj0alv.jpg)

```py
# -*- coding: utf-8 -*- 
variable = """Hola soy una variable
            de varias lineas """
#los nombre de las variables pueden ser      cualquier palabra
entero = 15
real = 12.38
booleano = True
booleano2 = False

print variable, entero, real, booleano, booleano2
```
    

## Operadores aritméticos

Tenemos los operadores que son suma resta multiplicación y división, también existe exponente y modulo para las divisiones.

```py
Suma + a = 2 + 2
Resta - a = 2 - 1
Multiplicación * a = 2 * 4
Exponente ** a = 2 ** 3
División / a = 4 / 2
Módulo % a = 27 % 4
```
    

## Comentarios

Tenemos lo que son los comentarios para llevar un orden en nuestro código.

```py
# Esto es un comentario de una sola línea
mi_variable = 15 # Este comentario es de una línea también

"""Y este es un comentario
de varias líneas"""
```
    

## Operadores relacionales

Operadores para comparar valores si son iguales si es mayor o menor o si es diferente, sus resultados es un True o un False.

    == Igual que 5 == 7 Falso
    != Distinto que rojo != verde Verdadero
    < Menor que 8 < 12 Verdadero
    > Mayor que 12 > 7 Falso
    <= Menor o igual que 12 <= 12 Verdadero
    >= Mayor o igual que 4 >= 5 Falso
    

## Operadores lógicos

Tenemos los operados lógicos que nos ayudan a realizar varias comparaciones de datos, están el AND, OR y XOR este último casi nunca se usa en particular yo nunca lo he usado.

    5 == 7 and 7 < 12 0 y 0 Falso
    9 < 12 and 12 > 7 1 y 1 Verdadero
    9 < 12 and 12 > 15 1 y 0 Falso
    
    12 == 12 or 15 < 7 1 o 0 Verdadero
    7 > 5 or 9 < 12 1 o 1 Verdadero
    4 == 4 xor 9 > 3 1 o 1 Falso
    4 == 4 xor 9 < 3 1 o 0 Verdadero
    

## Sentencia IF

Con esta sentencia podemos poner a prueba los operadores relacionales y los operadores lógicos.

```py
if semaforo == verde:
    print "Cruzar la calle"
else:
    print "Esperar"

if compra <= 100:
    print "Pago en efectivo"
elif compra > 100 and compra < 300:
    print "Pago con tarjeta de débito"
else:
    print "Pago con tarjeta de crédito"
```
    

Por hoy dejare hasta este punto incluiré ejemplos básicos con la sentencia if y usando todo lo visto hasta el momento gracias por leer y espero que sea de su ayuda.

Ejemplos:

[Área del circulo](https://gist.github.com/johnsi15/1ce53384cf8db5a5b15b91050a2006c7)

[Volumen del cubo](https://gist.github.com/johnsi15/2db174a99d6ad35828c2611b0ddebd83)

[Suma de dos numeros](https://gist.github.com/johnsi15/bb8fdd4ae12865183f543ae4b39d27c3)
