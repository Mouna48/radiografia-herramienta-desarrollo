// Funciones que trabajan con el DOM. No registran eventos: eso lo hace main.js.

/**
 * Pasa a minúsculas y quita los acentos para que "depuracion" encuentre "Depuración".
 */
function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim();
}

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

/**
 * Fase D: devuelve las características cuyo nombre o descripción
 * contienen el texto buscado. Si la búsqueda está vacía, devuelve todas.
 */
export function filtrarCaracteristicas(lista, consulta) {
    const termino = normalizar(consulta);

    if (termino === "") {
        return lista;
    }

    return lista.filter(({ nombre, descripcion }) =>
        normalizar(nombre).includes(termino) ||
        normalizar(descripcion).includes(termino)
    );
}

/**
 * Fase D: informa de cuántas características se muestran y, si no hay
 * ninguna coincidencia, explica qué ha pasado.
 */
export function actualizarEstadoBusqueda(elemento, consulta, mostradas, total) {
    let texto;

    if (mostradas === 0) {
        texto = `No hay características que coincidan con «${consulta.trim()}». Prueba con otra palabra, por ejemplo «Git» o «terminal».`;
    } else if (mostradas === total) {
        texto = `Mostrando las ${total} características.`;
    } else {
        texto = `Mostrando ${mostradas} de ${total} características.`;
    }

    elemento.textContent = texto;
    elemento.classList.toggle("estado-vacio", mostradas === 0);
}
