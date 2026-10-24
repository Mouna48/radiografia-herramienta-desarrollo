# Radiografía de una herramienta de desarrollo

## Herramienta elegida

Visual Studio Code

## Descripción

Visual Studio Code es un editor de código gratuito que permite trabajar con diferentes lenguajes de programación. Esta página informa sobre la herramienta y es interactiva gracias a JavaScript.

## Cómo ejecutar la página desde un servidor local

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Instalar la extensión Live Server.
3. Hacer clic derecho sobre `index.html` y elegir «Open with Live Server».
4. Se abre el navegador con la página (normalmente en `http://127.0.0.1:5500`).

Hay que usar un servidor porque el JavaScript se carga como módulo y los navegadores no permiten módulos al abrir el archivo directamente con `file://`.

## Funcionalidades añadidas

- **Fase A:** al pulsar el botón «Probar JavaScript» se actualiza un mensaje visible en la página con `textContent`. El mismo clic tiene dos manejadores con `addEventListener`: uno actualiza el mensaje y otro escribe en la consola.
- **Fase B:** un botón muestra y oculta la información ampliada sobre la herramienta sin recargar la página, usando `classList` y manteniendo `aria-expanded` sincronizado.
- **Fase C:** las características se generan desde JavaScript a partir de un array de objetos (nombre, categoría y descripción), usando `createElement`, `textContent` y `append`.
- **Fase D:** un campo de búsqueda con etiqueta filtra las características mientras se escribe, por nombre o descripción, y muestra un mensaje cuando no hay coincidencias.

## Explicación: cliente y servidor

El cliente (el navegador) construye la página a partir del HTML, aplica el CSS y ejecuta los módulos JavaScript (`main.js`, `datos.js` e `interfaz.js`), que gestionan los eventos, generan las tarjetas y filtran la búsqueda.
El servidor local solo entrega los archivos (`index.html`, `styles.css` y los `.js`) mediante peticiones HTTP; no ejecuta la lógica de la página.
Para comprobar la carga abrí las herramientas de desarrollo, pestaña Network, y recargué la página.
Allí se ven las peticiones de `index.html`, `styles.css` y los tres módulos, todas con código 200.
En la columna Initiator se comprueba que `main.js` es quien solicita `datos.js` e `interfaz.js` al importarlos.