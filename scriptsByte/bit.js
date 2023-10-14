var nombre;
var apellido;
var edad;
var sexo;
var nacionalidad;
var tipoNacimiento;
var padre; //los personajes deben tener sus propias caracteristicas
var madre;
var hermanos; //lista de hermanos y/o hermanas, cada uno como una variable de un personaje
var mascotas; //que sea poco probable que hayan mascotas

var felicidad, salud, inteligencia, aspecto;
//var dinero, amigos;
//para las variables de probabilidad, usar el sufijo pp --> var ppAmigoNuevo = 10;  --> probabilidad de amigo nuevo de un 10%




document.getElementById("body").innerHTML += `
<style>
@media (height: 0px){
    #container {
    height: 0px ;
    }
    #menu{
        height: 0px
      }
    #div3{
        height: 0px;
    }
}
</style>`;




function AlturaEnTiempoReal() {
    let anchoVentana = window.innerWidth;
    let alturaVentana = window.innerHeight;
    let estilos = document.getElementsByTagName('style');

    // Seleccionamos el primer elemento style
    let estilo = estilos[0];
    
    // Modificamos el contenido del elemento style
    estilo.innerHTML = `
    @media (max-height: ${alturaVentana}px){
    #container {
    height: ${alturaVentana}px ;
    }
    #menu{
        height: ${alturaVentana * 0.11}px
      }
    #div3{
        height: ${alturaVentana* 0.19}px;
    }
    #historial{
        height: ${alturaVentana * 0.44  }px ;
    }
    .progress-bar {
        margin: ${(alturaVentana * 0.21) * 0.10 }px;
        height: ${(alturaVentana * 0.21)* 0.13}px;
    }
}
@media (max-height: 385px){
    .progress-bar {
        #div3{
            height: ${alturaVentana* 0.17}px;
        }
        margin: ${(alturaVentana * 0.21) * 0.10 }px;
        height: ${(alturaVentana * 0.21)* 0.13}px;
    }
}
`;
  }
 setInterval(AlturaEnTiempoReal,0 );





// Obtenemos el ancho y la altura de la ventana del navegador
let anchoVentana = window.innerWidth;
let alturaVentana = window.innerHeight;

// Mostramos el tamaño de la pantalla en la consola
console.log(`El tamaño de la pantalla es ${anchoVentana} x ${alturaVentana}`);
