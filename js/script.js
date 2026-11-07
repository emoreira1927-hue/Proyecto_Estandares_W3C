document.addEventListener("DOMContentLoaded", function () {

    var botonInformacion = document.getElementById("boton-informacion");
    var informacion = document.getElementById("informacion-adicional");

    if (botonInformacion && informacion) {

        botonInformacion.addEventListener("click", function () {

            var estaExpandido = botonInformacion.getAttribute("aria-expanded") === "true";

            botonInformacion.setAttribute("aria-expanded", String(!estaExpandido));

            informacion.hidden = estaExpandido;

            if (estaExpandido) {
                botonInformacion.textContent = "Mostrar información";
            } else {
                botonInformacion.textContent = "Ocultar información";
            }

        });
    }

    var formulario = document.getElementById("formulario-contacto");
    var resultado = document.getElementById("resultado-formulario");

    if (formulario && resultado) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            resultado.textContent = "Tu consulta fue revisada correctamente. Este formulario es una demostración y no envía datos a un servidor.";

        });
    }

});