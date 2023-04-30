---
title: Primeros pasos con Python 02
slug: primeros-pasos-con-python-02
date_published: 2016-07-04T20:48:52.000Z
date_updated: 2020-05-05T21:42:16.000Z
tags: Python, desarrollo, Developer, ciclos, for, while, listas, diccionarios, vectores
excerpt: En este artículo vamos a seguir donde quedamos, vamos a ver los ciclos y ejemplos, vectores y por ultimo tipo de datos complejos, espero que sea...
---

En este artículo vamos a seguir donde quedamos, vamos a ver los ciclos y ejemplos, vectores y por ultimo tipo de datos complejos, espero que sea de su ayuda así que vamos a comenzar.

Lo primero que se debe saber de ciclos es que son iteraciones repetitivas de un fragmento de código, solo es un una pequeña sentencia de código que se repite una determinada cantidad de veces que le digamos que se cumpla cierto fragmento de código, tenemos dos clases de bucles o ciclos los for y los while primero veamos los for.

#### Ciclo For

En python tenemos dos formas de aplicar los ciclos con rangos y con limitación, con rango le decimos que parte de un punto y termine en otro, con limitación le decimos que cumpla determinada iteraciones, en los ejemplos vamos a ver una iteración con una lista de datos que se va recorrer hasta que se termine los datos de esa lista y la otra con un rango.

      #Tenemos una lista con datos y en el for capturamos con una variable lo que hay dentro de esa lista y limitamos el for a esa lista,  solo pasara 4 veces por el for.
    mi_lista = ['Juan', 'Antonio', 'Pedro', 'Herminio']
    for nombre in mi_lista:
        print nombre
    
    # -*- coding: utf-8 -*-
    #En este ejemplo tendremos un rango de iteraciones y capturamos ese valor que nos devuelve el rango, sin necesidad de incrementar el anio.
    for anio in range(2001, 2016):
        print "Informes del Año", str(anio)
    

#### Ciclo while

Tenemos este tipo de ciclo que es muy parecido al for pero en este caso tenemos que evaluar el rango o límite de iteraciones que necesitamos que recorra ejemplo.

    # -*- coding: utf-8 -*-
    #Creamos y asignamos una variable y luego en el while realizamos como un tipo de condicional hasta que anio sea menor o igual a ese dato y vamos incrementando ese valor de uno en uno.
    anio = 2001
    while anio <= 2016:
        print "Informes del Año", str(anio)
        anio += 1
    

#### Vectores

Un vector es simplemente unos valores asignamos en un orden como una lista de cajas en fila y es que de hecho en python los vectores son de tipo lista, como ya vimos en un ejemplo anterior ya hemos usado una lista que a su vez es un vector porque tengo una lista de datos en orden y en los vectores se comienza a contar de 0 hasta la cantidad de datos que tenemos ejemplo.

    #esto es un vector
    #en este vector juan seria el valor 0 y asi sucesivamente y Herminio es 3 de esta forma podemos solo imprimir todos los datos del vector como se ve en el ejemplo o simplemente escribir mi_lista[3] de esta forma podemos obtener el valor que necesitemos del vector.
    mi_lista = ['Juan', 'Antonio', 'Pedro', 'Herminio']
    print mi_lista
    

#### TIPOS DE DATOS COMPLEJOS

En los tipos de datos tenemos las listas como ya las vimos y que son vectores y tenemos las tuplas y los diccionarios.

Veamos unos ejemplos más de lista porque también podemos tener lista dentro de listas.

    #Esto es una lista
    x = ['abc', 73, 5.28, 'rs', 5]
    print x[0]
    print x[1:4]
    x[1]=45 #modificamos la posicion 1
    print x[1:2]
    
    #Listas dentro de una lista
    x=[123,'Algebra',['john',70],5,73.25]
    print x[0]
    print x[2][0]
    

Tenemos las tuplas a diferencia de las lista no podemos modificar los valores tienen la misma filosofía que las listas, ejemplo.

    #Esto es una tupla
    x = ('abc', 73, 5.28, 'rs', 5)
    print x[0]
    print x[1:4]
    #Los elementos de una tupla no se pueden modificar
    
    #Tupla con componentes de tipo lista
    x=(3,[6,7],8,(4,5),2)
    print x[1]
    x[1][1]=3 #modificamos dentro de la tupla la lista
    print x
    
    #Los strings tambien son un tipo de vector
    x='programa'
    print x[0]
    print x[:4]
    

Por ultimo tenemos los diccionarios que a diferencia de los otros a estos se les asigna una clave de identificación para llamar el dato que necesitemos, dentro de los diccionarios podemos tener listas o tuplas como lo veremos en el siguiente ejemplo, también podemos recorrer un diccionario como si fuera una lista.

    #Esto es un diccionario
    x={123: 'Algebra', 325: 'Física', 215: 'Química'}
    print x[123]
    print x[325]
    
    x[123]='Matemáticas' #se puede modificar el valor
    print x
    
    #Diccionarios con componentes de tipo lista
    x={123:['Anita',25],234:['Elena',34],456:['Carmen',45]}
    print x
    print x[123]
    print x[123][0]
    
    x[123][0]='María' #se puede modificarel valor
    print x
    
    #Eliminar elementos del diccionario dada una clave: del
    del x[234]
    print x
    
    #Listar las claves: keys
    c=x.keys()
    print list(c)
    
    #recorrer un diccionario
    for i in x:
        print(i,x[i])
    #esto es lo mismo que lo de arriba
    diccionario = {'color': 'rosa', 'marca': 'Zara', 'talle': 'U'} 
    for clave, valor in diccionario.iteritems(): 
        print "El valor de la clave %s es %s" % (clave, valor)
    

Bueno eso es todo hasta el día de hoy, espero que sea de su ayuda y que hayan podido entender todo, saludos hasta la próxima.
