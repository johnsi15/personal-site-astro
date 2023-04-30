---
title: Juego Básico  Piedra Papel y Tijera
slug: juego-basico-con-javascript-piedra-papel-y-tijera
date_published: 2016-04-10T21:21:52.000Z
date_updated: 2016-04-23T02:28:38.000Z
tags: css3, Juego, JavaScript, Html5, programación
---

## Con JavaScript

El día de hoy les traigo un pequeño artículo donde explico cómo realizar un juego con JavaScript Muy básico Solo explicare la parte del **html y del código JavaScript** los estilos están de más ya que es css.

El resultado seria el siguiente.

![Piedra papel Y Tijera](/content/images/2016/04/juegoPP-TJS.jpg)

---

Bueno lo primero será crear nuestra estructura en html la maquetación.

    <!DOCTYPE HTML>
    <html lang="es">
    <head>
       <meta charset="UTF-8">
       <link rel="stylesheet" type="text/css" href="estilo.css">
       <script type="text/javascript" src="script.js"></script>
       <title>Piedra,Papel o Tijera</title>
    </head>
    <body>
    </body>
    </html>
    

Tenemos ya la maquetación simple con doctype de html5, tenemos los estilos y el script que vamos a usar los enlazamos en la parte del head como se puede ver, con esto ya tenemos listo los archivos para escribir nuestro código **JavaScript** y nuestros estilos si así lo queremos pero antes vamos agregar unas cosas como son las opciones del juego.

        <div id="juego">
    	   <h1>Juega Contra la Maquina</h1>
    	   <div onclick="usuario('0');" id="piedra"></div>
           <div onclick="usuario('1');" id="papel"></div>
           <div onclick="usuario('2');" id="tijera"></div>
       </div>
    

Como podemos ver tenemos un div con un id juego hay van nuestras opciones un h1 con un título y seguido tres div cada uno con su id y agregando un **onclick**  con una función llamada usuario que está definida en el archivo **script.js** y esto sirve para pasar por javascript que opción elegimos, si elegimos piedra la opción es 0 y es papel es 1 y si es tijera es 2.

**Nota: El anterior código va entre las etiquetas del body.**

    <div id="informacion">
            <p><a href="https://github.com/johnsi15"><img src="img/gitHub.jpg" alt="Codigo"></a></p>
            <p><a href="http://twitter.com/jandrey15"><img src="img/twitter.jpg" alt="Autor"></a></p>
            <p><a href="https://cursos.mejorando.la/programacion-basica/"><img src="img/mejorandola.png" alt="Universidad"></a></p>
    </div>
    

Acá solo tenemos una información de quien creo el juego y de más.

    <div id="efecto" style="display:none" onclick="quitarEfecto();"> </div>
    

Esto es un div con una función para dar una sombra sobre puesta de todo comenzando la desactivamos con display none.

Ahora si vamos al archivo script.js y escribimos el siguiente código.

    //var opciones = ["piedra", "papel", "tijera"];
    var opciones = [0, 1, 2];
    var eleccionMaquina;
    

Primero que todo declaramos un vector y una variable, en el vector asignamos la opciones que existen y la variable por ahora no hace nada.

          function aleatorio(minimo, maximo){
              var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
              return numero;
          }
    

Con esta función lo que hacemos es enviar un valor mínimo y un valor máximo para que con **math.floor** me calcule un valor entre ese rango y me lo devuelva en este caso tendremos que mandar el **rango de entre 0 y 2 porque esas son las opciones que tenemos,  más claro serian 0, 1 y 2.**

Ahora vamos a declarar la función usuario que ya mencione con un parámetro que es la opción que estamos enviando desde el html.

    function usuario(eleccionUsuario){
        eleccionUsuario = parseInt(eleccionUsuario);
        eleccionMaquina = aleatorio(0,2);
    

Ya declara la función solo tenemos que convertir la opción que pasamos por html de texto plano a un entero y eso lo hacemos con **parsetInt()** guardamos el nuevo valor de tipo entero, ahora obtenemos el valor de la función aleatorio y como ya lo había mencionado tenemos que mandar un rango de número y es función nos devolverá un valor entre ese rango y esa será la opción de la máquina, lo siguiente es comenzar a comparar la opción del usuario con la opción de la máquina para saber quién gano y quien perdió.

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
    }
    

Lo siguiente es comenzar hace una comparaciones para saber quién gano perdió o si empataron, primero preguntamos si el usuario eligió piedra ósea si la opción es igual a cero pace por ese condicional,  listo hasta ahí todo claro  ahora lo que tenemos que hacer es comenzar a obtener el resultado de la máquina para eso hacemos tres condicionales porque ese es el rango que le dimos entonces la maquina nos puede devolver 0, 1 o 2 según esa respuesta pues la comparamos con la que eligió el usuario, en el primer caso si la función de la maquina nos devuelve 1 verdad si es así 1 equivale a papel  y el usuario escogió piedra eso quiere decir que el usuario pierde y le mandamos un mensaje diciéndoselo y si no volvemos a pregunta entonces la maquina eligió fue tijera si es así e usuario gano y le mandamos su respectivo mensaje así hacemos para las demás opciones del usuario hay que hacer unas comparaciones eso es todo no es tan complicado.

    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }
    
    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }
    
    document.getElementById('efecto').style.display = "";
    }
    

Después de mandar el mensaje se activa este document y le mandamos el id efecto un **display vacío** para que nos dé un efecto de sombra negra.

Y por último tenemos una función que es la que nos quita el efecto de sombra negra solo cuando den **click le mandamos al id efecto un display none y listo.**

    function quitarEfecto() {
         document.getElementById('efecto').style.display = "none";
    }
    

Espero que sea de su ayuda este pequeño juego y ejemplo de JavaScript  si tienes pregunta no duden en enviármelas o comentar el código esta en mi repositorio de **[GitHub](https://github.com/johnsi15)** y este ejemplo fue gracias y tomado del **curso básico de programación de platzi** si no tienen ni idea de lo que acabe de hacer o ya tienen algo de idea pueden complementándolo tomando el **[curso gratis de platzi programación básica desde cero](https://platzi.com/cursos/programacion-basica/),** saludos y hasta la próxima amigos.

Descargar el Código Completo del juego **[dar click](http://bit.ly/1qChHY6)**.
