---
title: Conectar Mysql con Python & Django
publishedDate: "2016-05-29T23:56:28.000Z"
updatedDate: "2020-05-05T21:49:25.000Z"
pubDate: "2016-05-29T23:56:28.000Z"
tags: 
- Windows
- Python
- Django
- pip
- mysql
- Linux
- conectar
excerpt: Amigos el día de hoy vamos a instalar mysql crear una base de datos y hacer una conexión a través de python y dajngo...
description: Amigos el día de hoy vamos a instalar mysql crear una base de datos y hacer una conexión a través de python y dajngo...
primaryTag: { name: 'python', slug: 'python' }
canonicalURL: "https://johnserrano.co/blog/mysql-con-python-django"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683730124/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_xg1tki.jpg"
---

Amigos el día de hoy vamos a instalar mysql crear una base de datos y hacer una conexión a través de python y django.

## Conexión en Windows

Lo primero es descargar el cliente de mysql para crear la basa de datos para eso vamos a la siguiente página **[http://dev.mysql.com/downloads/windows/installer/5.7.html](http://dev.mysql.com/downloads/windows/installer/5.7.html)**  y descargamos el instalador, una vez descargado lo ejecutamos y le damos a todo siguiente cuando nos pida que tipo de instalación vamos hacer le damos en server only y siguiente, luego en excute esperamos a que descargue el mysql, una vez termine le damos a siguiente, agregamos una clave y le damos siguiente y de nuevo siguiente hasta finalizar.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731163/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_1_itmpzs.jpg)

Terminado esa parte tendremos que agregar a las variables de entorno la ruta donde quedo instalado nuestro mysql, luego vamos a la consola **(CMD)** y escribimos **mysql –u root –p**  nos pedirá la contraseña y listo ya entramos al admin de mysql.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731163/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_3_qbemze.jpg)

**Nota: la siguiente imagen muestra la ruta para agregar la variable de entorno.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731163/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_2_x3s1uj.jpg)

Lo siguiente es crear una base de datos con **create database nombreBaseDeDatos;** y listo para ver si se creó escribimos **show databases;**  y listo por este lado ya estaría todo listo.

Lo siguiente es instalar el conector de mysql para python para eso vamos a la consola nos posicionamos en nuestro proyecto que este en un entorno virtual activado y escribimos **easy_install mysql-python**, una vez descargado vamos al **settings** de nuestro proyecto y nos ubicamos en la parte de la base de datos y agregamos el nombre de usuario y la clave quedando de la siguiente manera.

**Nota: si saben como descargar el conector con pip install mysql-python dejen un comentario.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731164/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_4_rolcpc.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731167/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_5_vp09tu.jpg)

Luego vamos a la consola y hacemos un **python manage.py migrate** para crear las tablas dentro de la base de datos que ya hemos creado.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731164/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_6_vhzqt1.jpg)

Para ver si es verdad volvemos al admi de mysql y verificamos que esas tablas si se crearon correctamente, escribimos **use nombreBasedeDatos** y luego un **show tables;** tendrán que salir las tablas de la siguiente manera.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731164/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_7_jxszds.jpg)

## Conexión en Linux

En linux es prácticamente lo mismo lo único que cambia es la descarga del cliente mysql que sería  de la siguiente forma.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731164/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_8_fvlzvw.jpg)

Despues de eso creamos la base de datos normal como ya lo hicimos y para descargar el conector de mysql con python tenemos que descargar dos archivos uno de la siguiente forma con **sudo apt-get install python-dev**  y el otro **sudo apt-get install libmysqlclient-dev** estos dos paquetes los instalo de forma general en todo el equipo, ya estando en nuestro proyecto con el entorno virtual activado escribimos **pip install mysql-python**  y listo luego hacemos un **python manage.py migrate**.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683731164/John%20Serrano/Blog%20Post/mysql-con-python-django/mysqlDjango_9_s09aoc.jpg)

Bueno espero que sea de su ayuda hasta la próxima y gracias por leer y compartir.
