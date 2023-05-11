---
title: Docker para desarrolladores
publishedDate: "2018-08-24T17:12:55.000Z"
updatedDate: "2019-09-03T16:01:12.000Z"
pubDate: "2018-08-24T17:12:55.000Z"
tags: docker, webdeveloper, webdeveloment, container, contenedores, nodejs, wordpress, nginx
excerpt: Hagamos nuestro primer hola mundo en docker, desde la terminal ejecutamos un docker run hello-world en el output debemos ver algo como esto.
description: Hagamos nuestro primer hola mundo en docker, desde la terminal ejecutamos un docker run hello-world en el output debemos ver algo como esto.
primaryTag: { name: 'docker', slug: 'docker' }
canonicalURL: "https://johnserrano.co/blog/docker-para-desarrolladores"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683056872/John%20Serrano/Blog%20Post/docker-para-desarrolladores/DockerDesarrolladores_bj1bsu.jpg"
---

El día de hoy vamos a seguir con **docker** en el último [artículo](https://blog.johnserrano.co/instalacion-de-docker/) quedamos en la instalación hoy vamos a ver como docker nos ayuda a ser mejores desarrolladores web.

Requisitos para seguir leyendo, [tener instalado docker](https://blog.johnserrano.co/instalacion-de-docker/) puede validar desde la terminal o consola haciendo un docker version.

Bueno bien hagamos nuestro primer hola mundo en docker, desde la terminal ejecutamos un `docker run hello-world` en el output debemos ver algo como esto.

    Output
    Hello from Docker.
    This message shows that your installation appears to be working correctly.
    

Entonces que estamos haciendo con `docker run` lo que hacemos es ejecutar o crear un contenedor a partir de una imagen, en este caso la imagen se llama hello-world, donde podemos encontrar más imágenes en [docker hub](https://hub.docker.com/) ahora que es una imagen bueno una imagen es el resultado de un contenedor, es decir podemos crear una imagen a partir de un contenedor.

![docker-images](https://res.cloudinary.com/john-serrano/image/upload/v1683057052/John%20Serrano/Blog%20Post/docker-para-desarrolladores/docker_11_eysupp.png)

Como dije antes las imágenes de docker las podemos encontrar en **docker hub** pero también las podemos buscar desde la terminal.

`docker search Ubuntu`

Nos muestra un resultado de todas las imágenes algunas oficiales otras de terceros, se recomienda siempre usar **imágenes oficiales** entonces en el resultado de la búsqueda tenemos el nombre la descripción las estrellas si es oficial o no.

Ya vimos que con `docker run` podemos descargar y crear un contenedor pero si solo queremos descargar la imagen lo podemos hacer con.

`docker pull Ubuntu`

Después de descargar una imagen podemos ver todas nuestras imágenes descargadas.

`docker images`

    Output
    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
    ubuntu              latest              c5f1cf30c96b        7 days ago          120.8 MB
    hello-world         latest              94df4f0ce8a4        2 weeks ago         967 B
    
    

Tenemos información como el tag de la imagen que es la versión id de la imagen la fecha de creación y el tamaño.

Ahora bien podemos acceder a un contenedor con las banderas -i y -t que nos da acceso interactivo a Shell.

`docker run -it Ubuntu bash`

    Output
    root@d9b100f2f636:/#
    
    

Ya con esto tenemos una Shell de Ubuntu la cual podemos hacer cualquier cosa, algo a tener en cuenta es el id del contenedor **d9b100f2f636** el cual es el identificador único del contenedor, también le podemos dar un nombre a nuestro contenedor con la bandera `--name`.

`docker run --name my-ubuntu -it ubuntu bash`

Cuando inicia una imagen de Docker, puede crear, modificar y eliminar archivos de la misma forma que puede hacerlo con una máquina virtual. Los cambios que realice sólo se aplicarán a ese contenedor. Puede iniciarlo y detenerlo, pero una vez que lo destruya con el comando docker rm, los cambios se perderán definitivamente.

Podemos crear una imagen a partir del id del contenedor haciendo un **commit** aunque se recomienda crear imágenes con **Dockerfile** ya veremos más adelante un ejemplo.

`docker commit id name`

Si queremos destruir la imagen hacemos un `docker rmi id o name` del contenedor.

Con `docker ps` podemos ver los contenedor que se están ejecutando ahora bien con `docker ps –a` podemos ver todos los contenedores es decir los que están corriendo y los que están detenidos, con `docker ps –l` podemos ver el último contenedor creado, ahora con `docker stop container-id` tenemos el contenedor, con `docker rm container-id` destruimos el contenedor, con `docker start container-id` podemos iniciar un contenedor que este en estado de stop.

Podemos subir nuestras imágenes a docker hub, tenemos que estar registrados y ahora desde la terminal hacemos.

`docker login -u docker-registry-username`

Con eso iniciamos sesion a nuestro registry de hub ahora hacemos un tag y push para guardarlo y subirlo al registry.
`docker tag id docker-registry-username/docker-image-name:version1.0`

`docker push docker-registry-username/docker-image-name:version1.0`

Después de hacer push de una imagen a un registro, debe aparecer en el tablero de la cuenta, como en la imagen de abajo.

![docker-hub](https://res.cloudinary.com/john-serrano/image/upload/v1683057052/John%20Serrano/Blog%20Post/docker-para-desarrolladores/docker_12_wk1tsm.png)

Resumiendo vimos como descargar imágenes, verlas, destruirlas y crear contenedores, listarlos, iniciarlos, detenerlos, eliminarlos y como crear una imagen a partir de un contenedor y subirlo al registro de hub.

Ahora bien hasta el momento solo creamos un contenedor de Ubuntu y un hola mundo que realmente no es la gran cosa ahora veamos cómo crear un contenedor de **mysql** otro de **phpmyadmin** y conectarlos.

Primero creamos el contenedor de mysql.

    docker run  --name dbmysql  -v /$PWD/databases:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456 -d -p 3307:3306 mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --innodb_use_native_aio=0
    

Bueno en la primera parte tenemos el `docker run` normal el `--name` para el nombre y lo nuevo es el `-v` que es un volumen para mantener nuestras bases de datos en nuestro equipo esto para no perder nuestras bases de datos si destruimos el contenedor, lo siguiente es `–e MYSQL_ROOT_PASSWORD` que es una variable que necesita mysql ya que es la clave de root pasamos una bandera `-d` para que se ejecute en background con `-p` le indicamos el puerto el **3307** es el puerto de nuestro equipo y el **3306** es el puerto interno donde estará corriendo mysql, ahora la imagen y el tag y por ultimo son una variables para configuración de **mysql** todo esto para manejar todo tipo de caracteres como la ñ.

**Nota:** si están en Windows en el -v deben colocar un / antes del **$PWD**.

Ahora creamos nuestro contenedor de phpmyadmin el cual vamos a conectar con **dbmysql** el otro contenedor.

    docker run -d --name phpmyadmin --link dbmysql -p 3777:80 -e PMA_ARBITRARY=1 phpmyadmin/phpmyadmin
    

Tenemos lo mismo que ya explicamos lo único nuevo es el –link el cual le damos el nombre de nuestro contenedor de mysql para tener una relación entre contenedores.

Ahora si hacemos un `docker ps` podemos ver corriendo estos dos contenedores si vamos a [http://localhost:3777](http://localhost:3777) debemos ver algo como la siguiente imagen.

**Nota:** si estas en Windows tenemos que ir a [http://192.168.99.100:3777](http://192.168.99.100:3777) con `docker-machine ip` podemos ver la ip.

![docker-phpmyadmin](https://res.cloudinary.com/john-serrano/image/upload/v1683057052/John%20Serrano/Blog%20Post/docker-para-desarrolladores/docker_13_ek1hpd.png)

En el servidor va el nombre de nuestro contenedor de mysql el user y la **password** y listo con eso ya tenemos fácilmente corriendo mysql y phpmyadmin.

Ahora bien qué más podemos hacer que tal si le agregamos un **wordpress** a nuestro mysql.

    docker run --name site_wp \
    -e WORDPRESS_DB_NAME=wp_prueba \
    -v /$PWD/site:/var/www/html \
    --link mysqldata:mysql -p 8080:80 -d wordpress:4.9.7
    

Le damos un nombre a nuestro contenedor le pasamos una variable de entorno le damos un volumen hacemos un **link** con la base de datos y le damos un puerto y la imagen con su tag.

**Nota:** si es la primera que se descarga la imagen tomara un tiempo pero después docker guarda eso en cache, es decir si volvemos a crear otro contenedor ya no debe tardar mucho tiempo.

![docker-wordpress](https://res.cloudinary.com/john-serrano/image/upload/v1683057052/John%20Serrano/Blog%20Post/docker-para-desarrolladores/docker_14_nglteh.png)

Como podemos ver ya tenemos  un **wordpress** solo hace falta hacer la instalación del sitio y desde mismo modo podemos crear otro contenedor con wordpress corriendo en otro puerto. La filosofía de **docker** es tener separado todo lo que se pueda en contenedores.

Bueno para terminar veamos un ejemplo más con un **nginx** y un ejemplo de **Dockerfile** con **node.js**, con nginx solo es de buscar la imagen en docker hub.

`docker run --name my-nginx -d -p 8081:80 nginx:1.14`

Si vamos a [http://localhost:8081/](http://localhost:8081/) podemos ver nuestro nginx corriendo, también podemos agregarle un volumen y link para asociar con otro contenedor.

Finalmente veamos un ejemplo de Dockerfile con nodejs, un **Dockerfile** es un archivo o manifiesto donde indicamos que imagen vamos a usar que comandos va ejecutar entre muchas otras cosas.

Debemos tener un Dockerfile.

    FROM node:8.11.4
    EXPOSE 3000
    WORKDIR /app
    COPY package.json /app/
    RUN npm install
    COPY . /app
    CMD ["node", "app"]
    
    

Con **FROM** indicamos la imagen que vamos a usar **EXPOSE** el puerto con **WORKDIR** le indicamos que esta imagen va estar funcionando en ese directorio con **COPY** copiamos archivos o carpetas que estén en nuestro directorio al contenedor, si le damos un punto ( . ) le indicamos que copie todo de nuestro directorio y con **CMD** indicamos un comando a ejecutar por defecto.

Con `docker build -t my-app .` creamos nuestra imagen tener en cuenta que el punto es para indicar donde estar nuestro Dockerfile.

El resto es nuestra app y el package.json.

```js
// app.js
const express = require('express')

const app = express();


app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.listen(3000, () => {
  console.log('on server in port 3000')
})
```
    
    

*package.json*

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "John Serrano <jandreys15@gmail.com> (https://twitter.com/jandrey15)",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3"
  }
}
```
    
Hasta el momento solo tenemos una imagen ahora hay que iniciarla o más bien crear el contendor a partir de nuestra imagen.

`docker run -it --rm --name web-node my-app`

Si creamos nuestro contenedor veremos en pantalla que nuestro server estar corriendo pero si vamos al navegador localhost:3000 no pasa nada esto porque, pues bien porque cuando creamos el contendor no le indicamos un puerto a nuestro maquina física a nuestro host local donde estamos corriendo docker, para detener el contenedor debemos abrir otra terminal y hacer un docker stop web-node.

`docker run --rm --name web-node -d -p 3000:3000 my-app `

Con esto ya podemos ver en [http://localhost:3000/](http://localhost:3000/) nuestro app corriendo, también siempre podemos hacer un `docker ps` y `docker ps -a`.

**Nota:** si están en windows deben ir [http://192.168.99.100:3000](http://192.168.99.100:3000).

Bueno dejo este artículo hasta este punto, como se puede dar cuenta docker nos ayuda a ser mejores desarrolladores si es la primera vez que usa docker de pronto no le va ver mucho sentido o puede que se haga difícil usarlo pero si lo sigue usando a medida que lo use y practique se volverá una herramienta de mucha ayuda que nos hace mucho más fácil la vida como desarrolladores.

Voy a dejar todos los comandos usados en un [gist](https://gist.github.com/johnsi15/e24c39ea8e79e071ef2f4893e031fe74) y no siendo mas hasta el próximo artículo saludo.
