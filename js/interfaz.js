// Funciones que trabajan con el DOM. No registran eventos: eso lo hace main.js.

/**
 * Fase A: escribe un mensaje visible en la página.
 */
export function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
}

/**
 * Fase B: muestra u oculta el panel con classList y mantiene
 * sincronizado aria-expanded en el botón.
 */
export function alternarInformacion(boton, panel) {
    const ahoraOculto = panel.classList.toggle("oculto");
    boton.setAttribute("aria-expanded", String(!ahoraOculto));
}

/**
 * Fase C: construye la tarjeta de una característica con createElement,
 * textContent y append (sin montar HTML a partir de cadenas de texto).
 */
function crearTarjeta({ nombre, categoria, descripcion }) {
    const tarjeta = document.createElement("li");
    tarjeta.classList.add("feature");

    const etiqueta = document.createElement("span");
    etiqueta.classList.add("feature-index");
    etiqueta.textContent = categoria;

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.textContent = descripcion;

    tarjeta.append(etiqueta, titulo, texto);
    return tarjeta;
}

/**
 * Fase C: sustituye el contenido del contenedor por las tarjetas de la lista.
 */
export function mostrarCaracteristicas(contenedor, lista) {
    contenedor.replaceChildren(...lista.map(crearTarjeta));
}
