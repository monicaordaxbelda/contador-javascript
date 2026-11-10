// Variable GLOBAL: representa el estado de la aplicación
let contador = 0;
// Función auxiliar para leer el valor del input de paso de forma segura
function leerPaso() {
    const inputPaso = parseInt(document.getElementById("paso").value);
    return isNaN(inputPaso) || inputPaso < 1 ? 1 : inputPaso;
}
// actualizaPantalla() escribe el valor actual en el span
function actualizarPantalla() {
    document.getElementById("valor").textContent = contador;
}
// Incrementar suma el paso recibido (por defecto 1)
function incrementar(paso = 1) {
    contador += paso;
    actualizarPantalla();
}
// Decrementar resta el paso, utilizando Math.max para evitar que baje de 0
function decrementar(paso = 1) {
    contador = Math.max(0, contador - paso);
    actualizarPantalla();
}
// Reiniciar restablece el contador a 0
function reiniciar() {
    contador = 0;
    actualizarPantalla();
}