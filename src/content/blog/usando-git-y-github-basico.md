---
title: Instalar Git y Github uso básico
publishedDate: 2016-04-24T22:16:17.000Z
updatedDate: 2016-05-01T20:38:08.000Z
pubDate: 2016-04-24T22:16:17.000Z
tags:
- Developer
- programación
- Windows
- Linux
- Web
- git
- GitHub
- cliente
- controldeversiones
excerpt: El día de hoy les traigo un artículo donde explicare como es la instalación de git y cómo combinarlo con GitHub que son y sus diferencias.
description: El día de hoy les traigo un artículo donde explicare como es la instalación de git y cómo combinarlo con GitHub que son y sus diferencias.
primaryTag: { name: 'git', slug: 'git' }
canonicalURL: "https://johnserrano.co/blog/usando-git-y-github-basico"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683737820/John%20Serrano/Blog%20Post/usando-git-y-github-basico/portadaGityGitHub_mazsyc.jpg"
---

El día de hoy les traigo un artículo donde explicare como es la instalación de git y cómo combinarlo con GitHub que son y sus diferencias.

Primero que todo hay que entender de qué se trata git y GitHub, **git** es un control de versiones local pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente y esto para que me sirve, pues para llevar un control de tu código puedes ir guardando tus versiones de código y volver a una versión anterior cuando quieras, es muy útil para trabajos en equipo varias personas pueden trabajar en un mismo proyecto de forma simultanea pero la mejor forma es por branches.

**Github** es una plataforma para alojar proyectos utilizando el control de versiones git , el código se mantiene en internet ya sale de estar solo en local,  GitHub cuenta con un cliente totalmente grafico a diferencia de git solo trabaja con la terminal o consola se puede trabajar con una interfaz gráfica ya veremos cómo trabajar cada una.

**Nota: git Tienes varios clientes gráficos  [https://git-scm.com/download/gui/win](https://git-scm.com/download/gui/win).**

Tenemos descargar el cliente de git en [https://git-scm.com/downloads](https://git-scm.com/downloads) esta para todos los sistemas operativos, también vamos a descargar un GUI Clients como ya lo mencione git tiene varios clientes gráficos en este artículo vamos a usar GitHub desktop [https://desktop.github.com/](https://desktop.github.com/).

### Instalación del cliente git en Windows

La instalación en Windows es muy sencillo solo descargar el archivo ejecutarlo y darle siguiente a todo, primero vamos a usar solo git como inicializar un repositorio comandos básicos y luego ya pasamos con el cliente gráfico.
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_1_uvc9ai.jpg)

Para comenzar a usar git vamos a la terminal o consola verificamos que tenesmos git con el comando git versión.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_2_uwajht.jpg)

**Nota: si por algún motivo no les reconoce el comando git tienen que agregar una variable de entorno que es la dirección donde quedo instalado git y listo.**

Después de eso solo tenemos que ubicarnos donde se encuentra nuestro proyecto y escribir git init que es el comando para comenzar a usar git e inicializar el repositorio.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_3_bodf5s.jpg)

En este ejemplo voy a usar los archivos de  un juego que se hizo con JavaScript con **git init** ya inicializamos nuestro repositorio lo siguiente es hacer un **git status** para comprobar si se han hecho cambios en el código de nuestro proyecto.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_4_l49u0k.jpg)

En este caso me muestra en rojo quiere decir que hice cambios en todos los archivos y eso fue porque copie y pegue los archivos no hay problema igual a medida que uno modifica un archivo tendremos que agregarlos y comentar esos cambios, y git nos está diciendo que usemos el comando git add file para agregar esos cambios.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_5_zvguye.jpg)

Podemos agregar un archivo uno por uno escribiendo git add name osea nombre del archivo o agregarlos todos con **git add .** Como se puede ver en la imagen y luego hacemos un git staus y nos sale en verde lo que quedaría por hacer es un **git commit –a –m “estado”**, antes de hacer el git commit nos pedirá agregar un correo y un nombre lo hacemos como se ve a continuación.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_6_zlz7s7.jpg)

Si volvemos hacer un git status nos mostrara que no hay cambios, podemos hacer un **git log** para ver los commit que hemos hecho en este repositorio esto quiere decir que cada commit es un cambio en alguna parte del código de nuestro proyecto.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_7_uhdmyn.jpg)

Con un **git help** podemos ver todos los comandos que podemos usar, listo de esta forma podemos tener nuestro proyecto versionado y de forma local se podría contribuir entre varios compañeros.

**Nota: un comando útil es git clone para clonar repositorios desde la plataforma de GitHub, cabe destacar que hay más comandos y solo estoy usando los  más básicos por ejemplo el git branches es muy útil cuando se trabaja con proyecto con muchas personas porque se mantienen los cambios por ramas independientes a la ramas principal y así no hay conflictos a la hora de juntar todo el código en la rama principal.**

Veamos el uso de **git clone**, tendremos que estar registrados en [GitHub](https://github.com/) , lo siguiente es ir a un repositorio si son nuevos entre a cualquier usuario les debe salir la opción del link para clonar el repositorio.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_8_hdli1r.jpg)

Hacemos un git clone y nos clonara el repositorio.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_9_zjmsgc.jpg)

Ahora vamos a combinar git lo que ya hemos hecho hasta el momento con github comenzar a llevar todo en internet.

Lo que yo normalmente hago o se hace es crear un repositorio en Github.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_10_pfmdfz.jpg)

Solo le damos un nombre una descripción y listo le damos crear, ahora bien digamos que no hicimos nada con git ósea hasta ahora voy a comenzar el proyecto tendremos que hacer todo lo mismo que hicimos git init inicializarlo y luego si hacer una conexión con GitHub y si ya tuviéramos inicializado el proyecto lo único que hay que hacer es una viculacion con GitHub y hacer un **git push**.

En este caso digamos que ya está inicializado el repositorio en local todo con git lo primero es crear un archivo llamado **README.md** que es donde va la descripción del proyecto debemos editarlo y escribir algo seguido de #, una vez creado lo siguiente es agregarlo hacer un commit, luego hacemos una conexión con nuestro repositorio que creamos en GiHub y eso se hace con **git remote add** ya lo veremos a continuación.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738523/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_11_rzrg4z.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_12_nhvaql.jpg)

Lo último es hacer un git push para subir los cambios a nuestro repositorio en **GitHub** nos pedirá el user de nuestra cuenta y la clave después de eso subirá los cambios y podremos ver algo como esto.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_13_iiphar.jpg)

Listo ya tenemos nuestro repositorio git en una cuenta GitHub podemos hacer todos los cambios e ir subiéndolos, lo siguiente seria usar todo esto que hicimos por consola de una forma más gráfica sin tocar la consola.

### Intalación del cliente GitHub  GUI

Lo primero es ir a [https://git-scm.com/downloads/guis](https://git-scm.com/downloads/guis) y descargar GitHub Desktop una vez descargado lo instalamos y tendremos que iniciar sesión con nuestra cuenta de GitHub que ya tengamos.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_1_oltc3z.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_2_ek0adt.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_3_ma07uy.jpg)

Bien ahora vamos a clonar el repositorio que ya creamos. También podemos subir repositorios creados localmente sin necesidad de hacer nada con la consola todo desde esta interfaz gráfica.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_4_rvco7k.jpg)

Desde este panel podemos crear un repositorio clonarlo como lo vamos hacer en este ejemplo y agregar uno ya creado, agregar uno quiere decir que ya lo hemos creado en local con git desde la consola, crear uno es que lo vamos hacer todo desde cero.

En este caso voy a clonar el repositorio que llame git.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738522/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_5_otc7vf.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_6_jthaba.jpg)

Así queda una ve clona si vamos y hacemos algún cambio nos indicara que tendremos que hacer un push.

**Nota: Desde esta interfaz se puede visualizar de forma más sencilla el manejo de las ramas.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_7_mde1gj.jpg)

Nos indica que hemos realizado unos cambios y damos un nombre una descripción y agregamos el commit, es lo mismo como lo hicimos por consola.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_8_gvs6ne.jpg)

Para que los cambios se vean reflejados le damos click en Sync y esperamos mientras hace una sincronización  para ver los cambios reflejados en la página de GitHub.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/gitHub_9_dvygdd.jpg)

Listo ya hemos hecho un clone, add, commit y un push desde la interfaz gráfica de GitHub Desktop for Windows.

### Linux Instalación de git

Ahora podremos ver como es la instalación en Linux, en Linux solo tendremos que escribir sudo apt-get install git, también depende de la distribución de Linux que estén usando.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_1_jatlzr.jpg)

Una vez instalados vamos hacer un git clone, hacer algunos cambios y volver hacer todo el procedimiento de add, commit, y push con git.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_2_atrns8.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_3_cjmh73.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_4_bmszbq.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_5_ayhuh7.jpg)
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683738521/John%20Serrano/Blog%20Post/usando-git-y-github-basico/git_linux_6_oqofct.jpg)

Listo hasta acá dejo este articulo espero que les haya servido hasta la próxima.
