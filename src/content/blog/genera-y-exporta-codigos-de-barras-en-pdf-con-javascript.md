---
title: "Genera y exporta códigos de barras en PDF con JavaScript"
publishedDate: "2024-09-9T16:29:10.000Z"
updatedDate: "2024-09-09T17:09:31.000Z"
pubDate: "2024-09-09T16:29:10.000Z"
description: "Hace unos días, mientras desarrollaba un sistema de inventario, me enfrenté al desafío de generar códigos de barras que pudieran ser leídos por un lector de códigos."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "codebar", "frontend", "front-end", "codigo-de-barras", "software", "web", "johnserrano.co", "johnserrano", "pdf"]
primaryTag: { name: 'codebar', slug: 'codebar' }
excerpt: "Hace unos días, mientras desarrollaba un sistema de inventario, me enfrenté al desafío de generar códigos de barras que pudieran ser leídos por un lector de códigos."
canonicalURL: "https://johnserrano.co/blog/genera-y-exporta-codigos-de-barras-en-pdf-con-javascript"
draft: false
featureImage: "https://res.cloudinary.com/john-serrano/image/upload/v1708016497/John%20Serrano/Blog%20Post/zustand-aprende-a-gestionar-tu-estado-en-react-una-alternativa-sencilla-a-redux/viwegf4ocrn9kvcqkv2d.jpg"
---

## Introducción

Hoy quiero compartir contigo cómo logré generar estos códigos de barras y exportarlos en un archivo PDF. 📄

Antes de entrar en detalles, te doy un poco de contexto: el sistema requería que cada producto tuviera su propio código de barras, el cual debía ser escaneable con un lector. Además, necesitaban poder exportar los códigos en un PDF para imprimir las etiquetas.

Después de investigar un poco, encontré una librería de JavaScript que me facilitó la creación de los códigos, así como otra para generar los PDFs.

## Instalar librerías necesarias

Lo primero que necesitamos son tres librerías:
* jsbarcode: Generar código de barras
* pdf-lib: Generar archivo pdf
* canvg: Convertir SVG a PNG

Instala estás dependencias con: 
`npm install jsbarcode pdf-lib canvg`

En el ejemplo que te voy a enseñar estoy usando Astro, pero puedes usar las librerías con cualquier otro framework.

## Creando los códigos de barras

Importamos las librerías necesarias, obtenemos los productos a los cuales les vamos a generar un código de barras único. Necesitamos crear un elemento SVG por cada producto para poder generar el código de barras porque SVG para mantener la calidad del código.

