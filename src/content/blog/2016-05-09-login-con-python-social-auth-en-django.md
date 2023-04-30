---
title: Login con Python Social Auth en Django
slug: login-con-python-social-auth-en-django
date_published: 2016-05-09T19:34:32.000Z
date_updated: 2020-05-05T21:51:09.000Z
tags: Python, Django, Developer, programación, Web, Login, Python-social-auth
excerpt: EL día de hoy vamos a realizar un login con python  Social auth  en django , lo vamos hacer con Facebook de igual
---

EL día de hoy vamos a realizar un login con python  Social auth  en django , lo vamos hacer con **Facebook** de igual forma se puede usar con otras redes sociales como **twitter**, lo primero es tener ya un proyecto creado en un entorno virtual con una aplicación si no sabes cómo crear tu proyecto de invito a que veas este otro **[artículo](http://blog.johnserrano.co/mi-primer-proyecto-en-django-con-virtualenv/)**.

Bueno comencemos para realizar este login auth vamos a Facebook developers **[https://developers.facebook.com](https://developers.facebook.com)** , ya estando logeado crearemos una app, ¿porque necesitamos crear una app?  Porque necesitamos el app id y el app secret de esta aplicación  de esta forma podremos hacer el login de forma exitosa.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_2.jpg)

Damos en agregar nueva app elegimos la opción de sitio web o www.
![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_3.jpg)

Le damos un nombre a nuestra app, seguido de esto nos pedirá el correo electrónico y en que categoría se encuentra nuestra app.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_4.jpg)

Seguido de eso tendremos que ingresar una url en este caso colocamos la local donde corre nuestro proyecto de django  si fuera un sitio ya con un dominio pues colocamos el dominio de nuestro sitio web.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_5.jpg)

Una vez creado tendremos algo como esto pero aún falta activar nuestra app ya que se encuentra desactivada, para eso entramos a nuestra app.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_6.jpg)

Vamos donde dice app review y donde dice hacer publica el inicio de sesión le damos que sí, ahora vamos a configuraciones.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_7.jpg)

Ya tenemos los datos necesarios para realizar nuestro login social.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_8.jpg)

Ahora si vamos nuestro **proyecto** vamos a instalar **python-social-auth** de la siguiente forma.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_1.jpg)

Una vez descargado vamos a las configuraciones de nuestro proyecto django y agregamos  esta aplicación, también agregamos nuestra aplicación para agregar las vistas necesarias para el funcionamiento de nuestro login.

    INSTALLED_APPS = (
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'app',
      'social.apps.django_app.default'
    )
    

Ahora vamos a nuestras urls del proyecto y agregamos las urls de nuestra aplicación.

from django.conf.urls import include, url

from django.contrib import admin

    urlpatterns = [
       url(r'^admin/', include(admin.site.urls)),
       #INICIO
       url(r'^', include('app.urls')),#indicamos que vamos a usar la urls de inicio
     ]
    

En las urls de nuestra aplicación tenemos lo siguiente.

    from django.conf.urls import patterns, include, url
    from .views import Index, Menu
    
    urlpatterns = patterns('',
      url(r'^$', Index.as_view(), name='inicio'),
      url(r'^menu/$', Menu.as_view(), name="menu"),
      url('',       include('social.apps.django_app.urls', namespace='social')),
    )
    

La última url es la que me permite conectarme con facebook para hacer el login, en las vistas tenemos dos pequeñas vistas de la siguiente forma.

      from django.shortcuts import render
      from django.views.generic import TemplateView
    
    class Index(TemplateView):
         template_name = 'inicio.html'
    
    class Menu(TemplateView):
         template_name = "menu.html"
    

Creamos nuestra carpeta de templates y agregamos estos dos archivos html inicio y menú.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_11.jpg)

En inicio.html agregamos lo siguiente.

    <div>
       <a href="{% url 'social:begin' 'facebook' %}">INICIA CON FACEBOOK</a>
    </div>
    

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_12.jpg)

En menu.html agregamos lo siguiente.

    <div>
       Hola Bienvenido <strong>  {{user.username|capfirst}}</strong>
    </div>
    

**Nota: agregar la ruta de nuestros tamplates  en la parte de configuraciones os.path.join(BASE_DIR, 'templates').**

Ahora vamos a las configuraciones de nuestro proyecto y agregamos lo siguiente al final.

    AUTHENTICATION_BACKENDS = (
            'social.backends.facebook.FacebookAppOAuth2',
            'social.backends.facebook.FacebookOAuth2',
            'social.backends.twitter.TwitterOAuth',
            'django.contrib.auth.backends.ModelBackend',
    )
    
    SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/menu'
    
    SOCIAL_AUTH_TWITTER_KEY = ''
    SOCIAL_AUTH_TWITTER_SECRET = ''
    
    SOCIAL_AUTH_FACEBOOK_KEY = '283706985304058'
    SOCIAL_AUTH_FACEBOOK_SECRET = ''
    

Donde dice SOCIAL_AUTH_FACEBOOK_KEY agregamos el id que mencione anteriormente y en SOCIAL_AUTH_FACEBOOK_SECRET lo mismo.

Una vez le demos click en iniciar con Facebook nos aparece la siguiente ventana le damos aceptar y pasamos a la vista del menú.

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_9.jpg)

![The Ghost Logo](/content/images/2016/05/SocialLoginAuth_10.jpg)
