---
title: Manejo básico de la terminal
publishedDate: 2018-07-23T22:15:00.000Z
updatedDate: 2019-09-03T16:35:43.000Z
pubDate: 2018-07-23T22:15:00.000Z
tags: 
- terminal
- Windows
- Linux
- cmd
- git
excerpt: Lo primero que se debe hacer es perderle el miedo usar la terminal y pensar porque no hacerlo desde la terminal vamos a ver algunos casos de uso.
description: Lo primero que se debe hacer es perderle el miedo usar la terminal y pensar porque no hacerlo desde la terminal vamos a ver algunos casos de uso.
primaryTag: { name: 'terminal', slug: 'terminal' }
canonicalURL: "https://johnserrano.co/blog/manejo-basico-de-la-terminal"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683211064/John%20Serrano/Blog%20Post/manejo-basico-de-la-terminal/terminal_1_cinxhp.jpg"
---

Lo primero que se debe hacer para comenzar a usar la terminal es perderle el miedo, usar primero la **terminal** antes que hacerlo de una forma gráfica, vamos a ver algunos casos de uso y los comando que a mi parecer son los más usados.

**Nota:** Estoy usando un sistema operativo con windows.

Al abrir la terminal por defecto nos ubica en alguna parte de nuestro equipo es decir si estoy usando la terminal de Windows por defecto nos ubica en el home `C:\Users\user_name>` sí usamos la terminal de **git bash** nos ubica `username@WEB-7  ~` se ve un poco diferente pero es el mismo home, voy a explicar los comandos desde la terminal de git bash ya que es mucho más cómodo que la de Windows.

**Nota:** Algunos comandos que se usan en git bash funcionan en la terminal de Windows.

Entonces el primer comando **PWD** con este comando podemos ver la ruta donde estamos ubicados.

    $ pwd
    /c/Users/JOHN_SERRANO
    

Uno de los comandos más usados el **CD** (change directory) que nos permite cambiar de directorio.

`$ cd Documents/`

**Nota:** con la tecla tab podemos completar los nombres de los archivos o directorios.

Con CD .. podemos devolvernos a un directorio anterior.

    ~/Documents/prueba
    $ cd ..
    
    ~/Documents
    

Otro comando muy usado **LS** (list files/directories) que nos permite listar todos los archivos y directorios según donde estemos ubicados.

    ~/Documents
    $ ls
    

**Nota:** en este caso estoy ubicado en documents y aplique un LS.

También podemos pasarle bandera al comando LS como los siguientes:
**ls -l :** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos.

**ls -lt :** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, agregando además, la hora en que fue creado el mismo.

**ls -lh:** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, pero en formato más legible.

**ls -lhr:** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, de reversa.

**ls -lhS:** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, pero en formato más legible, ordenado de mayor a menor peso.

**ls -lhSr:** Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, pero en formato más legible, ordenado de menor a mayor peso.

Tenemos el famoso **CLEAR** que nos ayuda a limpiar la terminal.

    ~/Documents
    $ clear
    

**Nota:** Podemos usar ctrl + l para limpiar la terminal.

Para ver el peso de los directorios usamos **du -h -d 1**

    ~/Documents
    $ du -h -d 1
    

Si necesitamos crear un directorio usamos el comando MKDIR (make directory).

    ~/Documents
    $ mkdir terminal
    
    ~/Documents
    $ cd terminal/
    
    ~/Documents/terminal
    

Ahora bien para crear un archivo podemos usar **TOUCH** si FILE existe, modifica la hora de última modificación al momento de la ejecución del comando, si FILE no existe, lo crea.

    ~/Documents/terminal
    $ touch hola.txt
    
    ~/Documents/terminal
    $ ls 
    

Ahora bien si queremos agregar contenido al archivo podemos usar **VIM** o NANO en este caso vamos a usar VIM.

    ~/Documents/terminal
    $ vim hola.txt
    

Cuando damos enter nos abre un el editor de vim para agregar contenido necesitamos presionar la tecla i ahora si podemos editar nuestro archivo para salir y guardar los cambios le damos a la tecla Esc y agregamos ‘:wq’ de esta forma salva y sale del editor vim.

**Nota:** salir guardando los cambios: `[ESC] :wq![ENTER] `, salir sin guardar cambios: `[ESC] :q! [ENTER]`.

Si queremos ver lo que existe en nuestro archivo usamos CAT.
`$ cat hola.txt`

Hola mundo :)

También podemos usar **TAIL** O **MORE**:

- 
`tail [FILE]`: muestra las últimas 10 lineas de un archivo de texto

- 
`tail -f [FILE]`: tail *forever*, en principio muestra las últimas 10 líneas de FILE, pero mantiene abierto el archivo e imprime los cambios que se vayan escribiendo (secuencialmente) en éste, muy útil para *logs*.

- 
`more [FILE]`: muestra el contenido de un archivo de texto de forma páginada

Para copiar un file o un directorio podemos usar **CP**.

- 
`cp` [archivo/directorio origen] [archivo/directorio destino]: copia un archivo o directorio desde un origen a un destino

- 
`cp -r` [directorio origen] [directorio destino]: copia un directorio y todos sus directorios hijos de forma recursiva

$ cp Documents/prueba.html ~/Documents/terminal/

Otros comandos como eliminar un archivo o directorio o mover un archivo a un directorio:

- `rm [FILE]`: elimina un archivo
- `rm -rf [DIRECTORY]`: elimina un directorio recursivamente **sin preguntar**
- `mv [FILE] [DIRECTORY]`: mueve FILE a DIRECTORY
- `mv [FILE] [NAME]`: renombra FILE a NAME

Para terminar podemos usar pipe para ejecutar varios comandos al mismo tiempo en este ejemplo uso el >> y el | como se puede ver:

    ~/Documents/terminal
    $ echo 'Agregar una nueva linea' >> hola.txt | cat hola.txt
    Hola mundo :)
    Agregar una nueva linea
    
