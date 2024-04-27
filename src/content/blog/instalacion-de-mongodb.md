---
title: Instalación de MongoDB
publishedDate: "2018-07-22T20:36:58.000Z"
updatedDate: "2019-09-03T20:04:01.000Z"
pubDate: "2018-07-22T20:36:58.000Z"
tags: 
- mongo
- mongodb
- Windows
- Linux
excerpt: Antes de descargar cualquier instalador de MongoDB es importante verificar que versión de MongoDB necesitas.
description: Antes de descargar cualquier instalador de MongoDB es importante verificar que versión de MongoDB necesitas.
primaryTag: { name: 'mongo', slug: 'mongo' }
canonicalURL: "https://johnserrano.co/blog/introduccion-a-next-js-el-framework-de-react"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683212160/John%20Serrano/Blog%20Post/instalacion-de-mongodb/mongo_1_hzcds5.jpg"
---

##### Instalación en Windows

Antes de descargar cualquier instalador de MongoDB es importante verificar que versión de MongoDB necesitas.

La versión de MongoDB se determinará según la versión de Windows que tengas.

Para Windows 7 o superior la versión de MongoDB se llama Windows Server 2008 R2.

Para Windows Vista o inferior la versión de MongoDB se llama Windows Server 2008.

Para descargar la versión de MongoDB debes ir y seleccionar Windows en la siguiente dirección: [https://www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community).

Una vez descargado el archivo .msi, debes abrirlo y proceder a la instalación asistida.

El archivo se debe encontrar por lo general en la carpeta Descargas o Downloads de Windows.

Es importante conocer en que carpeta se instalará ya que allí se encontrarán los binarios para ejecutar el servidor y el cliente de Mongo.

Por lo general se instala en una ruta de C:\Program Files o C:\Archivos de Programas,

En Windows el servidor de Mongo se llama mongod.exe y el cliente o shell mongo.exe.

Ejecutando MongoDB en Windows

Antes de ejecutar por primera vez MongoDB se debe crear la carpeta donde guardará la información de las bases de datos.

Desde una Consola (CMD) ejecutar
`md \data\db`

Luego ejecutar en la misma consola el servidor de Mongo:

"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

Verificar la dirección dónde se encuentre el archivo mongod.exe.

Para el cliente es ejecutar en otra consola el binario mongo.exe.

##### Instalación de MongoDB en Ubuntu Linux

La instalación de MongoDB versión “Community Edition” en Ubuntu es a través del repositorio oficial de MongoDB.

MongoDB oficialmente desde sus repositorios solo soporta versiones LTS de Ubuntu 12.04 LTS (precise), 14.04 LTS (trusty), 16.04 LTS (xenial) y próximamente 18.04.

Al instalar MongoDB desde el repositorio oficial, se instalarán todos los componentes necesarios para ejecutar el servidor (mongodb-org-server - daemon), el shell (mongodb-org-shell) y las demás herramientas de administración de MongoDB.

Ya con esto en mente hay que proceder a realizar la configuración del repositorio para realizar posteriormente la instalación de todos esos componentes.

**Paso 1: Importar la llave pública para el manejador de paquetes**

Desde la consola ejecutar

`$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6Paso`

**2: Agregar el repositorio según la versión de Ubuntu**

***Ubuntu 12.04 (Precise)***

`$ echo"deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`

***Ubuntu 14.04 (Trusty)***

`$ echo"deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`

***Ubuntu 16.04 (Xenial)***

`$ echo"deb [ arch=amd64,arm64 ]http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`

Paso 3: Actualizar los repositorios
`$ sudo apt-get update`

Paso 4: Instalar MongoDB

`$ sudo apt-get install -y mongodb-org`

Ejecutar MongoDB Community Edition en modo “daemon”Ubuntu versión 14.04 y 12.04

`$ sudo service mongod start`

Ubuntu 16.04 utiliza systemd, service funciona ya que redirige a systemctl para hacer el control del “daemon”.

    $ sudo systemctl start mongodDetener MongoDB
    $ sudo service mongod stop
    

o
`$ sudo systemctl stop mongod`

***Verificar la ejecución de MongoDB***

Para verificar si MongoDB está ejecutando correctamente debes verificar los logs de Mongo en `/var/logs/`

`$ cat /var/log/mongodb/mongod.log`

**By [Platzi/mongodb](https://platzi.com/clases/mongodb-redis/)**
