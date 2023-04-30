---
title: Menú desplegable con Css
slug: menu-despegable-con-css
date_published: 2016-06-05T21:29:00.000Z
date_updated: 2021-01-03T23:49:22.000Z
tags: html, Html5, css, css3, programación, Developer, Web
---

En este pequeño artículo crearemos un menú desplegable con solo **css** apoyándonos de la **pseudo-clase hover** para poder llevar acabo el menú desplegable, lo primero que tenemos que hacer es crear la estructura  con html y enlazar los estilos que vamos a necesitar.

Bueno lo primero es la estructura del html que costa de un nav div con un id menú luego una lista ul con una clase menup seguido de unos li para la opciones normales y dentro de un li vamos a crear otra lista ul que va hacer el menú desplegable el li llevara una clase dropdown vamos el código para entenderlo un poco más.

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>inicio</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <nav>
    	<div id="menu"> 
    	    <ul class="menup"> 
    	        <li><a href="">opcion</a></li>
    	        <li class="divider"></li> 
    	        <li class="dropdown"><a href="">opcion</a> 
    	            <ul> 
    	                <li><span></span><a href="#opcion1">opcion</a></li>
    	                <hr> 
    	                <li><span></span><a href="#opcion2">opcion</a></li> 
    	            </ul> 
    	        </li>
    	        <li class="divider"></li>  
    	        <li><a href="">opcion</a></li>
    	        <li class="divider"></li>  
    	        <li><a href="">opcion</a></li> 
    	        <li class="divider"></li>
    	        <li class="dropdown"><a href="">opcion</a> 
    	            <ul> 
    	                <li><span></span><a href="#opcion1">opcion</a></li>
    	                <hr> 
    	                <li><span></span><a href="#opcion2">opcion</a></li> 
    	                <hr>
    	                <li><span></span><a href="#opcion3">opcion</a></li>
    	                <hr> 
    	                <li><span></span><a href="#opcion4">opcion</a></li>
    	                <hr> 
    	                <li class="dropdown_2"><span></span><a href="#opcion5">opcion</a>
    	                	
    	                </li> 
    	            </ul> 
    	        </li>
    	        <li class="divider"></li>
    	        <li class="dropdown"><a href="">opcion</a> 
    	            <ul> 
    	                <li><span></span><a href="#opcion1">opcion</a></li>
    	                <hr> 
    	                <li><span></span><a href="#opcion2">opcion</a></li> 
    	                <hr>
    	                <li><span></span><a href="#opcion3">opcion</a></li>
    	            </ul> 
    	        </li>
    	</div>
    </nav>
    </body>
    </html>
    

Listo teniendo esta estructura tendremos que darle los estilos necesarios el código a continuación, y el truco está en saber usar la **pseudo-clase hover** y los **Selector hijos >**.

    @import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);
     body{
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
     }
    
    nav{
    width: 100%;
    height: 35px;
    }
    
    #menu{
    width: 100%;
    height: 35px;
    background: #E6E6E6;
    float: left;
    position: relative;
    } 
    
    #menu .menup{
    width: 960px;
    height: 35px;
    margin: 0 auto;
    padding: 0px;
    }
    
    #menu li{
    float:left;
    position:relative;
    padding: 6px 0;
    margin: 0;
    list-style: none;
    } 
    
    #menu li a{
    color:#424242;
    font-size:12px;
    padding: 10px 10px;
    /* text-shadow: 0px -1px 0px #000; */
    text-decoration: none;
    text-transform: uppercase;
    } 
    
    /*ocultamos el dropdown*/    
    #menu li > ul{
    display:none;
    position:absolute;
    background: #424242;
    padding: 0;
    z-index: 2;
    }
    
    #menu li > ul li{
    padding:0;
    margin:1px 0;
    list-style: none;
    } 
    
    #menu li > ul li:first-child, #menu li:hover > ul li:last-child{
    padding:0;
    margin:0 0;
    }
    
    /*le damos el color blanco al enlance del submenu y el background negro */    
    #menu li:hover > a{
    color:#fff;
    background-color: #424242;
    width: 120px; 
    } 
    
    #menu li > ul li a{
    width: 150px;
    margin: 0 0 0 5px;
    display:block;
    color: #fff;
    } 
    
    /* Con esto mantenemos el codigo submenu activo */
    #menu li:hover > ul{
    display:block;
    width: 150px;
    top: 35px;
     }
    
    #menu .divider{
    border-right: 1px solid #BCBCBC;
    height: 23px;
    }
    #menu .dropdown::after{
    content:"";
    position: absolute;
    top: 15px;
    left: 52px;
    width:0px;
    height:0px;
    border-style: solid;
    border-width: 4.3px;
    border-bottom-width:0px;
    border-color: #BCBCBC transparent transparent transparent;
    }
    
    #menu li:hover::after{
    border-color: #fff transparent transparent transparent;
    }
    
    hr{
    margin: 0;
    padding: 0;
    width: 80%;
    position: relative;
    border-color: rgba(189, 189, 189, 0.6);
    left: 10px;
    }
    
    #menu .dropdown span{
    height: 15px;
    width: 3px;
    position: absolute;
    top: 6px;
    left: 5px;
    }
    

Este seria el resultado final.
![Menu Hover](/content/images/2021/01/menuHover_2.jpg)

Bueno eso es todo espero que sea de su ayuda sé que ha sido bastante corto pero quería compartir esta forma de crear menús desplegables sin usar **Jquery solo con css**, me pareció muy bueno y quise compartirlo bueno hasta la próxima.
