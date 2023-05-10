---
title: Login con python & Django
publishedDate: 2016-05-15T21:30:52.000Z
updatedDate: 2020-05-05T21:50:23.000Z
pubDate: 2016-05-15T21:30:52.000Z
tags: 
- Python
- Django
- Developer
- programación
- Login
- iniciarsesion
- templates
excerpt: Vamos a crear un login solo con python y django ya en un artículo anterior creamos un login con python social auth.
description: Vamos a crear un login solo con python y django ya en un artículo anterior creamos un login con python social auth.
primaryTag: { name: 'Django', slug: 'django' }
canonicalURL: "https://johnserrano.co/blog/login-con-python-django"
isDraft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1683734197/John%20Serrano/Blog%20Post/login-con-python-django/portadaLoginDjangol_kyq9am.jpg"
---

Vamos a crear un login solo con python y django ya en un **[artículo anterior](http://blog.johnserrano.co/login-con-python-social-auth-en-django/)** creamos un login con python social auth. Este ejemplo lo voy hacer con el mismo proyecto que realice el de python social.

Bueno lo primero que tendremos que hacer es crear una nueva app con **python manage.py startapp name** yo en este caso le di como nombre inicio.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683734594/John%20Serrano/Blog%20Post/login-con-python-django/logindjango_4_ftonkk.jpg)

Ahora creamos el archivo **urls** y agregamos lo siguiente.

```py
from django.conf.urls import patterns, include, url
urlpatterns = patterns('',
url(r'^$', 'django.contrib.auth.views.login',
    {'template_name':'inicio.html'}, name="login"),

url(r'^cerrar/$', 'django.contrib.auth.views.logout_then_login',
    name='logout'),
) 
```
    

En la otra aplicación que le di como **nombre app** solo tendremos que tener en las urls lo siguiente.

```py
from django.conf.urls import patterns, include, url
from .views import Index, Menu

urlpatterns = patterns('',
url(r'^menu/$', Menu.as_view(), name="menu"),
url('', include('social.apps.django_app.urls', namespace='social')),
)
```
    

En la vista tenemos el siguiente código.

```py
from django.shortcuts import render
from django.views.generic import TemplateView

class Index(TemplateView):
    template_name = 'inicio.html'

class Menu(TemplateView):
    template_name = "menu.html"
```
    

En el archivo de configuraciones **“settings”**  agregamos el siguiente código al final.

```py
from django.core.urlresolvers import reverse_lazy
LOGIN_URL = reverse_lazy('login')
LOGIN_REDIRECT_URL = reverse_lazy('menu')
LOGOUT_URL = reverse_lazy('logout')
```
    

En las **urls principales** del proyecto tenemos que agregar las urls de nuestra nueva app.

```py
url(r'^', include('inicio.urls')),#indicamos que vamos a usar la urls de inicio
```
    
En el template de inicio agregamos el siguiente código.

```html
<section>
    <h2>Login Normal </h2>
    <form method="post" action="">{% csrf_token %}
        <label for="user">User</label>
        <input type="text" name="username" placeholder="user">
        <label for="pass">Password</label>
        <input type="password" name="password" placeholder="pass">
        <input type="submit" value="Iniciar">
    </form>
</section>
```
    

Y en el de template menú agregamos este otro código.

```html
<header>
    Hola Bienvenido <strong>{{user.username|capfirst}}</strong>
</header>

<section>
    <a href="/cerrar">Cerrar Sesion</a>
</section>
```

Los archivos del proyecto deben verse de la siguiente manera.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683734594/John%20Serrano/Blog%20Post/login-con-python-django/logindjango_3_ggenhj.jpg)

Lo siguiente es crear un usuario  con **python manage.py createsuperuser**.
![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683734594/John%20Serrano/Blog%20Post/login-con-python-django/logindjango_5_cr4gml.jpg)

Ahora vamos al navegador [http://localhost:8000/](http://localhost:8000/) y podemos iniciar sesión.

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683734595/John%20Serrano/Blog%20Post/login-con-python-django/logindjango_1_hplmry.jpg)

![The Ghost Logo](https://res.cloudinary.com/john-serrano/image/upload/v1683734594/John%20Serrano/Blog%20Post/login-con-python-django/logindjango_2_xnbxwf.jpg)
