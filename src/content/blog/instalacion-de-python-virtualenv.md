---
title: Instalación de Python & Virtualenv
publishedDate: "2016-03-27T22:12:03.000Z"
updatedDate: "2020-05-05T21:52:01.000Z"
pubDate: "2016-03-27T22:12:03.000Z"
description: En este artículo aprenderemos a instalar Python en estos dos sistemas operativos al igual que la instalación de virtualenv y la creación de un entorno
tags: 
- Developer
- Web
- Django
- Back-End
- Python
- Virtualenv
- Windows
- Linux
- pip
primaryTag: { name: 'Python', slug: 'python' }
excerpt: "En este artículo aprenderemos a instalar Python en estos dos sistemas operativos al igual que la instalación de virtualenv y la creación de un entorno"
canonicalURL: "https://johnserrano.co/blog/instalacion-de-python-virtualenv"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1682779382/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/portadaInstalacionVirtuaalPython_kdbywj.jpg"
---

En este artículo  aprenderemos a instalar Python en estos dos sistemas operativos al igual que la instalación de virtualenv y la creación de un entorno virtual. Pero antes de hacer la instalación que es virtualenv y para qué sirve, es un paquete de python que nos permite  crear entornos virtuales  y que hacemos con esos entornos virtuales, sirven para separar versiones de paquetes que instalamos con pip, **un ejemplo seria que en un entorno virtual tenemos Django con una versión 1.6 y en otro entorno tenemos Django con una versión más reciente como la 1.8,** al igual no tendremos que instalar nunca paquetes dentro de nuestro equipo si no que todo ocurre en nuestros entornos virtuales.

## Instalación en Windows

Lo primero que tenemos que hacer es dirigirnos al sitio oficial de Python **[www.python.org](http://www.python.org)** y descargar la **versión estable  2.7.11, está ya viene con Pip** que es la herramienta encargada de instalar los paquetes de python y en este caso vamos a  instalar virtualenv.

Ejecutamos el archivo que hemos descargado doble click le damos siguiente a todo hasta terminar la instalación.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779246/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT1_ecuk9i.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779246/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT2_wubezx.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779364/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT3_i6rtf9.jpg)

Una vez terminada la instalación si vamos a la consola y escribimos python no nos va a reconocer python para que lo reconozca tenemos que agregar unas variables de entorno que es solo la ruta de donde quedo instalado nuestro python, vamos a mi equipo propiedades del sistema y en la parte izquierda dice configuración avanzada del sistema damos clic y nos abrirá otra ventada.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT4_arsqca.jpg)

Ahora nos dirigimos hacia la parte inferior donde dice variables de entorno damos clic , ahora donde dice variables del sistema buscamos una que se llama path damos doble clic  y agregamos lo **siguiente ;C:\Python27;C:\Python27\Scripts\ no importa el orden lo importante es el ; seguido de las rutas una es para python y la otra es para pip.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT6_m5opvk.jpg)

Ahora si vamos a la **consola (CMD) y escribimos python** ya nos va a reconocer python, lo siguiente es escribir **pip install virtualenv** y listo ya tenemos instalado nuestro virtualenv y solo queda crear el entorno virtual y activarlo.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779246/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT7_xu03eb.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT8_oj2fyn.jpg)

Para crear nuestro entorno virtual solo tenemos que escribir **virtualenv name y el nombre que le queremos dar a nuestro entorno,** una vez creado solo queda activarlo entrando a la carpeta **scripts y escribiendo activate.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT9_ljimav.jpg)

**Nota: al lado izquierdo de la ruta aparece entre Paréntesis el nombre de nuestro entorno, de esa forma sabemos que esta activo nuestro entorno.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT12_jbmaf2.png)

## Instalación en Linux

En las distribuciones de Linux ya viene por defecto python, **en mi ejemplo voy a usar Linux mint con python 2.7.6**  y solo tendremos que instalar virtualenv escribiendo en la terminal **sudo apt-get install python-virtualenv,** también podemos instalarlo con sudo pip install virtualenv.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT13_b90urf.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT14_ktjlf1.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779247/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT15_vheoxm.png)

Por ultimo solo queda activarlo escribiendo **source bin/actívate** y listo queda activado al lado izquierdo podemos ver que sobrepone nuestro nombre de entorno virtual.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1682779246/John%20Serrano/Blog%20Post/instalacion-de-python-virtualenv/InstalacionPVT16_ugoqld.png)
