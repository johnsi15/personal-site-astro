---
title: Instalación de Ghost en Digital Ocean
slug: instalacion-de-ghost-en-digital-ocean
date_published: 2016-06-19T20:36:52.000Z
date_updated: 2016-06-19T21:09:44.000Z
tags: mysql, Windows, Linux, conectar, ghost, DigitalOcean, SSH, apache, instalar, conexion
---

El día de hoy les explicare como **instalar ghost en DigitalOcean** que es un servicio de hosting cloud, donde podemos crear varios servidores y montar el sistema operativo o cms que necesitemos ellos le llaman **droplets** para cada uno de los servers.

Porque usar Digital ocean porque es un hosting tipo cloud donde nos ofrecen unos precios muy económicos y escalables en recursos según sea la situación que necesitemos, desde **$5 dolares** mensuales pero también depende del tráfico que tenga tu sitio web  si tienes demasiado tráfico consumirás mas del ancho de transferencia y te lo descontaran de tu tarjeta de crédito, también cuenta con una muy buena documentación clara y contundente para lo que necesitemos.

En este caso explicare como crear un **server o droplet** y montar ghost hasta hacer una conexión **ssh vía terminal**.

Lo primero que tenemos que hacer es crear una cuenta ingresado tus datos básicos e ingresando un número de  tarjeta de crédito activa para comenzar a crear droplets te puedes registrar con el siguiente **[link y obtendrás $10 dolares gratis](https://m.do.co/c/66d901bee48b)** de la misma forma podrás dar referidos con tu cuenta ya creada y seguir obteniendo dólares para tus droplets.

Una vez creada tu cuenta y confirmada vía email o correo lo que tendremos que hacer en darle click donde dice **créate droplet**, ahora nos aparece algo como esto.

![The Ghost Logo](/content/images/2016/06/digital_1.jpg)

Lo que tenemos que hacer ahora es seleccionar  **one-click-apps** en este caso porque Digital nos ofrece una forma fácil de **instalar ghost** o cualquier otro servicio que necesitemos si lo hacemos de la otra forma nos instalara solo el sistema operativo sin más nada, bueno una vez que seleccionemos one-click-apps buscaremos ghost, seleccionamos luego un cobro de  **$5 dolares**, y una región por lo general yo la dejo en New York depende en la parte que vivas yo como vivo en Colombia lo dejare como esta.

![The Ghost Logo](/content/images/2016/06/digital_2.jpg)
![The Ghost Logo](/content/images/2016/06/digital_3-1.jpg)
![The Ghost Logo](/content/images/2016/06/digital_4.jpg)

Donde dice más opciones no escogemos nada y en SSH Keys  agregamos una llave ssh, para crea  una llave ssh lo hacemos de la siguiente forma y copiaremos la llave pública que es la que necesitamos.

     $ ssh-keygen -t rsa -C “your_email@example.com”
    
    # Creates a new ssh key, using the provided email as a label # Generating public/private rsa key pair. # Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter] Enter passphrase (empty for no passphrase): [Type a passphrase] # Enter same passphrase again: [Type passphrase again] Your identification has been saved in /Users/you/.ssh/id_rsa. # Your public key has been saved in /Users/you/.ssh/id_rsa.pub. # The key fingerprint is: # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
    

Nos pedirá una frase como clave la ingresamos y listo luego vamos a buscar esa llave de la siguiente forma.

    $ cd  ~/.ssh
    $ cat id_rsa.pub
    

Con cat nos mostrara la clave en la terminal copiamos esa clave nos vamos para DigitalOcean  y donde dice **New SSH Key** le damos click colocamos un nombre y pegamos esa llave de esta forma podremos conectarnos vía SSH desde la laptop al server.

**Nota: para Windows podemos usar la consola de git-bash que nos dejara ingresar todos los comandos que vimos.**

Terminando le damos créate y listo ya tenemos creado nuestro server con una instalación de ghost al igual con una llave SSH podemos ir a la ip que nos muestra como IP Address para comenzar la instalación de ghost.

Lo siguiente es **conectarnos** al server vía SSH eso lo hacemos de la siguiente manera.

    $ ssh root@178.140.2.2 
    

Nos pedirá la clave esta clave fue enviada a tu correo electrónico con la cual te registrarte la primera vez, una vez ingresada nos pedirá cambiarla.

    root@178.140.2.2's password: 
    

Nos debe aparecer en la terminal de la siguiente forma.

    $ root@tudroplet:~#
    

Bueno de esta forma hemos creado un droplet una inatalción de ghost y una conexión SSH vía terminal, con esta misma forma podemos hacerlo para crear cualquier tipo de servicio como wordpress o un espacio de trabajo tipo **MEAN o LAMP**, o solo crear un servicio para **Django o Docker** en fin se puede instalar cualquier tipo de servicio que nos ofrece, también se puede instalar el sistema operativo de tu preferencia e ir instalando las herramientas o servicios que necesites como por ejemplo un server como **Apache** un gestor de base de datos como **MYSQL** etc.

Bueno espero que haya sido de su ayuda y nos vemos hasta la próxima.
