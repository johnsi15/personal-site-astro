---
title: "¿Cómo crear códigos de barras en JavaScript y exportarlos a PDF?"
publishedDate: "2024-09-09T10:29:10.000Z"
updatedDate: "2024-09-09T17:09:31.000Z"
pubDate: "2024-09-09T10:29:10.000Z"
description: "Desarrollé un sistema de inventario y enfrenté el desafío de generar códigos de barras legibles por un lector. Aquí te muestro cómo hacerlo en JavaScript."
tags: ["JavaScript", "programación", "development", "webdeveloment", "desarrollo-web", "codebar", "frontend", "front-end", "codigo-de-barras", "software", "web", "johnserrano.co", "johnserrano", "pdf"]
primaryTag: { name: 'codebar', slug: 'codebar' }
excerpt: "Desarrollé un sistema de inventario y enfrenté el desafío de generar códigos de barras legibles por un lector. Aquí te muestro cómo hacerlo en JavaScript."
canonicalURL: "https://johnserrano.co/blog/como-crear-codigos-de-barras-en-javascript-y-exportarlos-a-pdf"
draft: false
featureImage: "https://download.johnserrano.co/Captura%20de%20pantalla%202024-08-23%20104748.png"
---

Aprende a generar códigos de barras en JavaScript y a exportarlos a PDF de manera sencilla.

## Introducción

Hoy quiero compartir contigo cómo logré generar estos códigos de barras y exportarlos en un archivo PDF. 📄

Antes de entrar en detalles, te doy un poco de contexto: el sistema requería que cada producto tuviera su propio código de barras, el cual debía ser escaneable con un lector. Además, necesitaban poder exportar los códigos en un PDF para imprimir las etiquetas.

Después de investigar un poco, encontré una librería de JavaScript que me facilitó la creación de los códigos, así como otra para generar los PDFs.

## Instalar librerías necesarias

Lo primero que necesitamos son tres librerías:
* ✅ jsbarcode: Generar código de barras
* ✅ pdf-lib: Generar archivo pdf
* ✅ canvg: Convertir SVG a PNG

Instala estás dependencias con: 
`npm install jsbarcode pdf-lib canvg`

En el ejemplo que te voy a enseñar estoy usando Astro, pero puedes usar las librerías con cualquier otro framework.

## Creando los códigos de barras

Importamos las librerías necesarias, obtenemos los productos a los cuales les vamos a generar un código de barras único. Necesitamos crear un elemento SVG por cada producto para poder generar el código de barras porque SVG para mantener la calidad del código.

```js
import { type PDFImage, PDFDocument } from 'pdf-lib'
import { Canvg } from 'canvg'
import JsBarcode from 'jsbarcode'
const $container = document.querySelector('.container')
const elProducts = document.querySelector('.products') as HTMLElement

const products = JSON.parse(elProducts.dataset.products ?? '') as Array<Record<string, string>>

if (products.length) {
  products.forEach(item => {
    const svgNS = 'http://www.w3.org/2000/svg' // Espacio de nombres SVG
    const svgElement = document.createElementNS(svgNS, 'svg')

    const name = `${item.brand} | ${item.model} | ${item.motorcyclePart}`

    svgElement.dataset.format = 'CODE128'
    svgElement.dataset.value = item.sku
    svgElement.dataset.text = name.slice(0, 90)
    svgElement.dataset.fontsize = '16'
    svgElement.classList.add('code')

    $container?.appendChild(svgElement)
  })
}

JsBarcode('.code').init()
```

Explicando un poco más el código anterior, para poder generar el código de barras necesitamos indicar unos atributos al elemento SVG los cuales son:

1. **1. dataset.format**
2. **2. dataset.value**
3. **3. dataset.text**
4. **4. dataset.fontsize**

Por último le damos una clase y agregamos ese SVG en un container con appendChild y se pueda ver en pantalla el código de barras.

Algunas consideraciones: el format es obligatorio se debe definir un formato, value es el valor del código de barras, y por último el texto que se ve debajo del código de barras. Al final ejecutamos la función `JsBarcode(‘.code’).init()` para todos los elementos que tienen esa clase.

![codebar](https://download.johnserrano.co/Captura%20de%20pantalla%202024-08-23%20104748.png)

Ya con estos códigos solo que queda generar el archivo PDf para imprimir, hasta este punto estos códigos de barra los puede leer un lector de código de barras sin ningún problema, el valor que devuelve una vez escaneado es el value que se le definió en el `dataset.value = ‘xxxxx’` que en este caso fue un **SKU**. Puede ser cualquier otro valor pero debe ser único.

## Generar archivo PDF

Debemos obtener todos los elementos SVG ya generados que representa cada código de barras, iniciamos la creación del PDF con la librería **pdf-lib** y creamos una nueva página en el documento. Para cada SVG necesitamos convertirlo en PNG ya que no podemos pasar un SVG al PDF debe ser un JPG o PNG.

```js
async function createPDFWithBarcodes() {
  const $container = document.querySelector('.container')
  const svgElements = $container?.querySelectorAll('.code')

  if (!svgElements) return

  // Crear un nuevo documento PDF
  const pdfDoc = await PDFDocument.create()
  let page = pdfDoc.addPage()

  interface SvgCodeItem {
    pngImage: PDFImage
    pngDims: {
      width: number
      height: number
    }
  }

  let twoSvgCode: Array<SvgCodeItem> = []
  let countPage = 14
  let indexPage = 0

  for (const [index, svgElement] of Array.from(svgElements).entries()) {
    const svgData = new XMLSerializer().serializeToString(svgElement)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = svgElement.clientWidth
    canvas.height = svgElement.clientHeight

    if (ctx) {
      const v = await Canvg.from(ctx, svgData)

      // Start SVG rendering with animations and mouse handling.
      v.start()

      const pngDataUrl = canvas.toDataURL('image/png')

      const pngImage = await pdfDoc.embedPng(pngDataUrl)
      const pngDims = pngImage.scale(0.5)

      twoSvgCode.push({ pngImage, pngDims })

      if (index === countPage) {
        page = pdfDoc.addPage()
        countPage = countPage + 14
        indexPage = 0
      }

      const yPos = page.getHeight() - 100 - Math.floor(indexPage / 2) * (pngDims.height + 50)
      indexPage++

      if ((index + 1) % 2 === 0) {
        twoSvgCode.forEach((item, idx) => {
          const xPos =
            idx % 2 === 0
              ? 30 // Izquierda
              : page.getWidth() / 2 + 25

          // console.log({ xPos, yPos })
          page.drawImage(item.pngImage, {
            x: xPos,
            y: yPos,
            width: item.pngDims.width,
            height: item.pngDims.height,
          })
        })

        twoSvgCode = []
      }

      if (svgElements.length === 1) {
        const xPos = 50
        page.drawImage(pngImage, {
          x: xPos,
          y: yPos,
          width: pngDims.width,
          height: pngDims.height,
        })
      }
    }
  }

  const button = document.querySelector('.download')

  button?.addEventListener('click', async () => {
    const pdfBytes = await pdfDoc.save()

    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'barcodes.pdf'
    a.click()
  })
}
```

Recorremos cada elemento SVG creamos un canvas por cada uno de ellos y lo convertimos en un PNG.

Tenemos un array twoSvgCode donde voy guardando dos elementos para colocar un código de barras junto al otro y voy controlando las posiciones **X** y **Y** teniendo en cuando el index para saber en que ciclo voy del recorrido y cada PAR pinto una fila de dos código de barras.

Con `countPage` controlo cuantos elementos se van a pintar por página.

Al final ya solo queda agregar un botón para descargar el archivo generado.

## Conclusiones

Como vimos, con las herramientas adecuadas podemos generar códigos de barras y exportarlos a un archivo PDF.

Si tienes alguna duda, puedes ponerte en contacto conmigo. Me encuentras en Instagram como [@johnserranodev](https://www.instagram.com/johnserranodev/).
