---
title: Instalación de docker
slug: instalacion-de-docker
publishedDate: "2018-08-19T16:24:19.000Z"
updatedDate: "2019-09-03T16:02:52.000Z"
pubDate: "2018-08-19T16:24:19.000Z"
tags: 
- Windows
- Linux
- Developer
- development
- docker
- docker-machine
- container
- desarrollo
- contenedores
excerpt: La esencia de docker es poder crear contenedores ligeros, portables para todo tipo de aplicación que se puedan ejecutar en cualquier maquina con docker.
description: La esencia de docker es poder crear contenedores ligeros, portables para todo tipo de aplicación que se puedan ejecutar en cualquier maquina con docker.
primaryTag: { name: 'docker', slug: 'docker' }
canonicalURL: "https://johnserrano.co/blog/instalacion-de-docker"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683147403/John%20Serrano/Blog%20Post/instalacion-de-docker/Docker_bwniuf.jpg"
---

El día de hoy vamos hablar sobre **docker** que es y como instalarlo, que es todo esto sobre **contenedores**, con docker podemos construir, administrar y proteger todas nuestras aplicaciones donde sea.

![docker_1](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_1_x1o67w.png)

## ¿Qué es docker?

La esencia de docker es poder crear contenedores ligeros, portables para todo tipo de aplicación que se puedan ejecutar en cualquier maquina con docker instalado, independiente del sistema operativo con solo tener docker instalado ya podemos ejecutar las aplicaciones y facilitando los despliegues.

Ahora que es un **contenedor**, los contenedores son un concepto antiguo que viene de Linux, los ejemplos más cercanos a la vida real son los contenedores que llevan los barcos.  Ahora bien en nuestras maquinas tener un contenedor es tener un pedazo de nuestra aplicación ejecutándose independientemente, es decir podemos tener un contenedor ejecutando mysql y otro ejecutando wordpress cada uno independiente pero relacionados.

![docker_2](https://res.cloudinary.com/john-serrano/image/upload/v1683148216/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_2_ea2rtv.png)

Para tener en cuenta que docker en Windows y Mac no corre nativamente, por lo tanto necesitamos de una máquina virtual para que pueda ejecutar el demonio de docker ya que docker originalmente se creó para ejecutarse en Linux y también gracias a docker-machine que nos permite crear estas máquinas.

![docker_3](https://res.cloudinary.com/john-serrano/image/upload/v1683148216/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_3_p4smo5.png)

Docker **simplifica la experiencia del desarrollador** como la experiencia devops, para los desarrolladores hace que el uso de **Docker** hace que puedan centrarse en desarrollar su código sin preocuparse de si dicho código funcionará en la máquina en la que se ejecutará.

Ahora bien que diferencia existe entre **una máquina virtual** y **Docker**, el concepto es algo similar, pero un contenedor no es lo mismo que una máquina virtual. Un contenedor es más ligero, ya que mientras que a una máquina virtual necesitas instalarle un sistema operativo para funcionar, un contenedor de Docker funciona utilizando el sistema operativo que tiene la máquina en la que se ejecuta el contenedor.

![dockerVSvms](https://res.cloudinary.com/john-serrano/image/upload/v1683148216/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_4_gdpigx.png)

## Instalación de docker en Windows

Lo primero que tenemos que hacer es descargar el instalador del siguiente enlace [https://docs.docker.com/toolbox/toolbox_install_windows/](https://docs.docker.com/toolbox/toolbox_install_windows/) le damos al botón **Get Docker Toolbox for Windows**, una vez descargado el instalador le damos doble clic y hacemos la instalación como cualquier otro programa.

Tener en cuenta que debemos tener un sistema operativo de 64 bits y tener activado la virtualización como se puede apreciar en la siguiente imagen.

![docker_windows](https://res.cloudinary.com/john-serrano/image/upload/v1683148216/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_5_ayci8x.png)

En la instalación dejamos todo por defecto.

![docker_install](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_6_kwobth.png)

![docker_install_2](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_7_de7hnl.png)

Le damos doble clic al Docker QuickStart, con esto comienza a crear la máquina virtual en virtual box donde estará el demonio de docker corriendo, con esto podremos ejecutar el cliente de docker desde nuestra máquina.

![docker_initial](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_8_yrzvcf.png)

Con `docker-machine ls` podemos ver la máquina que fue creada y que está corriendo.

**Nota:** si tienen problemas para iniciar la maquina pueden ir a la terminal y hacer lo siguiente.

![docker-machine](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_9_x7nyj1.png)

Lo primero que hacemos es listar las máquinas de docker que tenemos creadas, lo segundo es activar la máquina que docker nos crea por defecto y lo tercero es cargar unas variables de entorno que docker necesita para poder ejecutar todos los comandos, con  `docker version` podemos ver la versión de docker.

**Nota:** siempre que abrimos una nueva ventana de la terminal o iniciemos la máquina de virtual box debemos cargar las variables es decir `docker-machine env`.

### Instalación en Linux

Lo primero es actualizar la base de datos de paquetes:
`sudo apt-get update`

**Nota:** en esta instalación use Linux Mint, debe funcionar igual con Ubuntu y todos sus otros clones.

Ahora vamos a instalar Docker. Agregue la clave GPG para el repositorio oficial de Docker al sistema:
`sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D`

Esperamos y ahora agregue el repositorio Docker a fuentes APT:
`sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'`

Actualice la base de datos de paquetes nuevamente:
`sudo apt-get update`

Asegúrese de que está a punto de instalar desde el repositorio de Docker en lugar del repositorio predeterminado.

Debería ver una salida similar a la siguiente:

```yaml
docker-engine:
Instalados: (ninguno)
Candidato:  17.05.0~ce-0~ubuntu-xenial
Tabla de versión:
   17.05.0~ce-0~ubuntu-xenial 0
      500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
   17.04.0~ce-0~ubuntu-xenial 0
      500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
   17.03.1~ce-0~ubuntu-xenial 0
```
    
    

Por último, instale Docker:
`sudo apt-get install -y docker-engine`

Con `service docker status` podemos ver que está corriendo docker.

![docker version](https://res.cloudinary.com/john-serrano/image/upload/v1683148215/John%20Serrano/Blog%20Post/instalacion-de-docker/docker_10_uooj50.png)

Si desea evitar escribir sudo cada vez que ejecute el comando docker, añada su nombre de usuario al grupo docker:
`sudo usermod -aG docker $(whoami)`

**Nota:** para aplicar los cambios debemos cerrar la sesión y volver a iniciar, otra cosa que hay que tener en cuenta es que esta instalación no viene con `docker-machine` ni `docker-compose` hay que realizar su propia instalación cada uno de ellos.

Bueno por ahora dejo este artículo hasta este punto en un próximo [artículo](https://blog.johnserrano.co/docker-para-desarrolladores/) vamos a ver los [comandos básicos](https://blog.johnserrano.co/docker-para-desarrolladores/) de docker y como nos ayuda a desarrollar nuestras app, espero que sea de tu ayuda y hasta la próxima.
