---
title: CRUD en Django Vistas Basadas en Clases
publishedDate: "2016-03-31T17:00:17.000Z"
updatedDate: "2020-05-05T21:51:24.000Z"
pubDate: "2016-03-31T17:00:17.000Z"
tags: 
- Django
- Back-End
- Python
- Virtualenv
- Windows
- Linux
- Crud
excerpt: El día de hoy les traigo un artículo de la creación de una aplicación web básica con vistas basadas en clases un CRUD completo.
description: El día de hoy les traigo un artículo de la creación de una aplicación web básica con vistas basadas en clases un CRUD completo.
primaryTag: { name: 'django', slug: 'django' }
canonicalURL: "https://johnserrano.co/blog/crud-con-django-y-python-windows-y-linux"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjangoPortada-01_ikzl6o.jpg"
---

El día de hoy les traigo un articulo donde les explico como crear una aplicación web básica con vistas basadas en clases un CRUD completo.

En este ejemplo ya tengo mi proyecto creado con mi primera aplicación si no saben cómo crear su proyecto o aplicación les recomiendo ver otro artículo donde explico cómo hacerlo.
**[http://blog.johnserrano.co/mi-primer-proyecto-en-django-con-virtualenv/](http://blog.johnserrano.co/mi-primer-proyecto-en-django-con-virtualenv/)**

Lo primero que vamos hacer es crear una carpeta llamada apps dentro de esa carpeta creamos un archivo vacío con nombre **init**.py para que python reconozca que es un módulo, dentro del archivo **settings.py** vamos al parte de las aplicaciones y agregamos la aplicación que ya hemos creado previamente de igual manera movemos todos los archivos de la aplicación a esa nueva carpeta quedando de la siguiente manera.

**Nota: en el init.py tienen que agregar ___ ___ antes y después del init.py como se muestra en la imagen a continuación**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango1_tvhy3b.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango2_iodyoa.png)

Ahora vamos a la carpeta principal del proyecto donde esta nuestro **settings y urls** principales, en las urls agregamos la siguiente línea de código.

    urlpatterns = [
          url(r'^admin/', include(admin.site.urls)),
          url(r'^tareas/', include('apps.tarea.urls',   namespace='tareas')),
    ]
    

Creamos una url con el nombre de tareas e incluimos las urls de la aplicación llamada tarea hasta el momento ese archivos urls no existe así que lo creamos dentro de la aplicación quedando de la siguiente manera.

**Nota: Con esto r'^tareas/' le indicamos que en localhost:8000/tareas/ es la url principal.**

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango3_e3kqlu.png)

Lo siguiente es irnos a crear nuestro modelo, para eso vamos a **models.py** y escribimos el siguiente código.

    from django.db import models
    
    class Tarea(models.Model):
        name = models.CharField(max_length=140)
        detalles = models.TextField()
    

**Nota: Creamos una clase con nombre Tareas pasamos unos atributos models.Model luego creamos los campos que va llevar ese modelo como un nombre y un detalle.**

Ahora asemos un **makemigrations** seguido de un migrate en la consola para crear las tablas del modelo.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango4_saztsa.png)

Ahora nos vamos para las vistas abrimos el archivos **views.py** y escribimos el siguiente código.

    from django.shortcuts import render
    from django.views.generic import ListView
    from django.views.generic.detail import DetailView
    from django.views.generic.edit import (CreateView, UpdateView, DeleteView)
    from django.core.urlresolvers import reverse_lazy
    from models import * 
    
    class TareaList(ListView):
        model = Tarea
    

Donde importamos ListView, DetailView, CreateView, UpdateView, DeleteView, todo esto para listar ver detalles crear actualizar y eliminar, por ultimo importamos reverse_lazy para re direccionar e importamos el modelo o los modelos que vamos a usar.

La primera vista la nombre TareaList y le paso el ListView que lo único que hace es listar los datos de ese modelo que el estoy pasando mas abajo.

**Nota: si en la vista no nos toma los templates agregamos la ruta del template quedando de la siguiente forma.**

    class TareaList(ListView):
        template_name = "apps/templates/tarea/tarea_list.html"
        model = Tarea
    

Ahora vamos al archivo urls de la aplicación y agregamos la url para listar nuestras tareas.

    from django.conf.urls import url
    from .views import TareaList
    
    urlpatterns = [
        url(r'^$', TareaList.as_view(), name='list'),
    ]
    

Importamos la vista y agregamos la url con un nombre, ahora vamos a crear una carpeta para agregar los templates de nuestra aplicación quedando de la siguiente manera.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango5_ypnzbd.jpg)

Ahora creamos nuestro **template tarea_list.html** agregando el siguiente código.

**Nota: los nombres de los templates se toman del nombre que le dimos en el modelo como yo le nombre al modelo tarea entonces se debe crear de esa forma seguido del guion bajo, ejemplo si fuera creado un modelo por nombre cursos entonces seria cursos_list.html.**

    <h1>Tareas</h1>
    <p>
       <a href="{% url "tareas:new" %}">Agregar Tarea</a>
    </p>
    <ul>
    {% for tarea in object_list %}
        <li>
            <p>{{ tarea.name }}</p>
            <p>
                <a href="{% url "tareas:detail" tarea.id %}">Ver</a> | 
                <a href="{% url "tareas:edit" tarea.id %}">Editar</a> | 
                <a href="{% url "tareas:delete" tarea.id %}">Borrar</a> 
            </p>
        </li>
    {% endfor %}
    </ul>
    

**Nota: En el archivo tarea_list lo que estamos haciendo es primero que todo nombrar una url pasandole por el href el nombre del namespace que nombramos en la urls principales de esa forma llamamos a la url que quiero usar de mi aplicación así para todas las demás y en el for recibimos un object_list donde vienen todos los datos del modelo que ya hemos creado.**

Si corremos el server y vamos a **localhost:8000/tareas/** nos va a dar un error porque no hemos agregamos las otras url que son las de detalles actualizar y eliminar, entonces las vamos agregar en las urls de nuestra aplicación y luego si corremos el server y vamos al navegador.

    url(r'^(?P<pk>\d+)$', TareaDetail.as_view(), name='detail'),
    url(r'^nuevo$', TareaCreation.as_view(), name='new'),
    url(r'^editar/(?P<pk>\d+)$', TareaUpdate.as_view(), name='edit'),
    url(r'^borrar/(?P<pk>\d+)$', TareaDelete.as_view(), name='delete'),
    

**Nota: en las urls lo único que hay que tener en cuenta cómo se puede apreciar son los parámetros que vamos a pasar por la url /(?P\d+) y los nombres que le damos a cada url este es el nombre que usamos en el template tarea_list.**

Si vamos al navegador en este momento ya corriendo el server en la consola haciendo **python manage.py runserver** obtendremos el siguiente resultado.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango6-jpg_ot2bls.png)

Ahora bien vamos a agregar las otras vistas al igual  que los templates necesarios.

    class TareaDetail(DetailView):
        model = Tarea
    
    class TareaCreation(CreateView):
        model = Tarea
        success_url = reverse_lazy('tareas:list') 
        fields = ['name', 'detalles']
    
    class TareaUpdate(UpdateView):
        model = Tarea
        success_url = reverse_lazy('tareas:list')
        fields = ['name', 'detalles']
    
    class TareaDelete(DeleteView):
        model = Tarea
        success_url = reverse_lazy('tareas:list')
    

**Nota: Las vistas son muy parecidas solo cambian el atributo que le pasamos por referencia si es de lista o detalle o crear, en el caso de crear usamos reverse_lazy para que nos devuelva a la vista principal y le pasamos los campos que vamos a usar de ese modelo con el fields lo mismo con el update.**

Tenemos que crear el template para los detalles el de crear y actualizar es el mismo y el de eliminar.

## tarea_detail.html

    <h1>{{ tarea.name }}</h1>
    
    <p>{{tarea.detalles}}</p>
    <p>
    <a href="{% url "tareas:list" %}">Regresar</a>
    </p>
    

## tarea_form.html

    <form method="post">{% csrf_token %}
    {{form.as_p}}
    <input type="submit" value="Guardar" />
    </form>
    

## tarea_confirm _delete.html

    <form method="post">{% csrf_token %}
    ¿Estás seguro que deseas borrar la tarea "{{ tarea.name }}"?
    <input type="submit" value="Aceptar" />
    </form>
    <p>
    <a href="{% url "tareas:list" %}">Regresar</a>
    </p>
    

Ahora vamos a nuestro navegador le damos nuevo y agregamos una tarea, recuerden que el server siempre debe estar corriendo.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823510/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango7-jpg_xhwo7v.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudDjango8-jpg_cndrj8.png)

Listo ya hemos agregado una tarea pueden entrar en ver le mostrara los detalles de esa tarea al igual que editar y borrar, espero que sea de su ayuda también podemos hacerlo con Ajax implementando la misma metodología de vistas basadas en clases.

**Nota: tener en cuenta que el server este siempre corriendo con python manage.py runserver.**

## Linux

En Linux se usa el mismo código no hay problema solo voy a mostrar cómo queda y algunos pasos a seguir.

Creamos el proyecto

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudLinux1_cfzk0t.png)

Creamos la app

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudLinux2_vkdjnt.png)

De esta forma quedaría estructurado el proyecto con sus archivos.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudLinux5-1_wgx9dt.png)

Hacemos las migraciones de nuestros modelos.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudLinux3-1_uotwnk.png)

Corremos el servidor y vamos a localhost:8000/tareas/

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudLinux4-2_ehahta.png)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683823509/John%20Serrano/Blog%20Post/crud-con-django-y-python-windows-y-linux/CrudTareasDjangoPythonLinux_hcih2t.png)

Listo este sería el resultado final, espero que sea de su ayuda el código completo esta el github y lo dejare para que lo puedas descargar saludos.

El Codigó Completo [https://github.com/johnsi15/demoCrud](https://github.com/johnsi15/demoCrud)
