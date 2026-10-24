import { caracteristicas } from "./datos.js";
import {
    mostrarMensaje,
    alternarInformacion,
    mostrarCaracteristicas
} from "./interfaz.js";

// Selección de elementos
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
const botonInfo = document.getElementById("btn-info");
const panelInfo = document.getElementById("info-ampliada");
const listaCaracteristicas = document.getElementById("lista-caracteristicas");

// ---------- Fase A: dos manejadores para el mismo clic ----------
let pulsaciones = 0;

// Manejador 1: actualiza el mensaje visible en la página
boton.addEventListener("click", () => {
    pulsaciones += 1;
    const veces = pulsaciones === 1 ? "vez" : "veces";
    mostrarMensaje(
        mensaje,
        `JavaScript funciona correctamente. Has pulsado el botón ${pulsaciones} ${veces}.`
    );
});

// Manejador 2: registra la interacción en la consola
boton.addEventListener("click", (evento) => {
    console.log("JavaScript funciona correctamente.");
    console.log(`Interacción registrada: ${evento.type} en #${evento.currentTarget.id}`);
});

// ---------- Fase B: mostrar y ocultar información ----------
botonInfo.addEventListener("click", () => {
    alternarInformacion(botonInfo, panelInfo);
});

// ---------- Fase C: tarjetas generadas desde el array ----------
mostrarCaracteristicas(listaCaracteristicas, caracteristicas);
