---
title: Mi primer proyecto en Django con virtualenv
publishedDate: 2016-03-29T16:02:26.000Z
updatedDate: 2020-05-05T21:51:44.000Z
pubDate: 2016-03-29T16:02:26.000Z
tags:
- Developer
- Web
- Django
- Back-End
- Python
- Virtualenv
- Windows
- Linux
excerpt: En este pequeño artículo les explicare paso a paso como crear su primer proyecto con Django en virtualenv...
description: En este pequeño artículo les explicare paso a paso como crear su primer proyecto con Django en virtualenv...
primaryTag: { name: 'Django', slug: 'django' }
canonicalURL: "https://johnserrano.co/blog/mi-primer-proyecto-en-django-con-virtualenv"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683823895/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/portadaPrimerProyecto_hdqupv.jpg"
---

## Windows

En este pequeño artículo les explicare paso a paso como crear su primer proyecto con Django en virtualenv, asumiré que ya lo tienen instalado al igual que Python. Si no es así pueden ver este otro **[artículo](http://johnserranoblog.herokuapp.com/instalacion-de-python-virtualenv/)** donde explico la **[instalación de Python y virtualenv.](http://johnserranoblog.herokuapp.com/instalacion-de-python-virtualenv/)**

Primero que todo ejecutamos la consola de comando en Windows vamos a  inicio y escribimos CMD, en Linux vamos a inicio y escribimos terminal, nos situamos donde vamos a crear nuestro entorno virtual en mi caso lo voy a crear en mi carpeta de documentos, escribimos virtualenv seguido del nombre que le vamos a dar a nuestra entorno en este caso yo le asigne como nombre proyecto puede ser cualquier otro y damos enter.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD1_yxg2jj.png)

Revisamos que nuestro proyecto se ha creado con el nombre que le asignamos. Ahora nos ubicamos  en la carpeta scripts, cd proyecto/scripts, para Linux se hace de la misma forma ahora solo escribimos actívate damos enter y listo tenemos nuestro entorno virtual activado, nos ubicamos de nuevo en la carpeta proyecto.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823972/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD2_xhldii.png)

Ahora vamos instalar Django para eso escribimos en la consola **pip install django** en este ejemplo voy a usar la versión 1.8.8 entonces **pip install django==1.8.8** y damos enter , para verificar que si se instaló django en nuestra máquina virtual podemos ir a nuestra ruta donde se encuentra nuestro proyecto y en la carpeta **Lib/site-packages** podremos ver una carpeta con el nombre de Django.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823972/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD3_pxjktr.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823972/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD4_icxmd7.png)

Bien ahora  vamos a crear el proyecto como tal  con la siguiente comando en la consola **python Scripts\django-admin.py startproject nombre** de nuestro proyecto damos enter y listo, en Windows toca escribimos de esa forma si no no funcionara con el entorno virtual, en Linux si podemos escribir django-admin.py startproject name.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD5_hnh2fl.png)

Nos ubicamos en el proyecto tareas cd tareas, escribimos en la consola **python manage.py startapp tarea**, y listo ya tenemos nuestro proyecto con nuestra primera aplicación.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD6_f2vp4o.png)

En la consola **(CMD)** escribimos python manage.py runserver y damos enter.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPD7_resk3q.png)

Revisamos el navegador en la dirección localhost:8000

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/8_iuwmtz.png)

## Linux

Prácticamente es casi lo mismo solo cambian algunas cosas como ya lo he mencionado antes.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/PrimerPDlinux2-1_tfjbxr.png)

**Nota: Si no has instalado Python o Virtualenv, pueden ver otro artículo donde explico como hacerlo. [http://blog.johnserrano.co/instalacion-de-python-virtualenv/](http://blog.johnserrano.co/instalacion-de-python-virtualenv/)**

Listo y si vamos al navegador en la dirección localhost:8000

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823971/John%20Serrano/Blog%20Post/mi-primer-proyecto-en-django-con-virtualenv/8---copia_kbwsr1.png)

Espero que sea de su ayuda este artículo hasta la próxima.
