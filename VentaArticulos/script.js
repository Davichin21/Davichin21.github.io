
var anchoVentana = window.innerWidth;
console.log("El ancho de la ventana es: " + anchoVentana + " píxeles");

document.addEventListener("DOMContentLoaded", function() {
    var parrafos = document.querySelectorAll(".text");

    parrafos.forEach(function(parrafo) {
        if (parrafo.textContent.length > 80) {
            var textoRecortado = parrafo.textContent.substring(0, 80) + " ...";
            parrafo.textContent = textoRecortado;
        }
    });
});








