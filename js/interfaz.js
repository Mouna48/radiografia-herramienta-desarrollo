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
