$(document).ready(function(){
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }	
});





//-------Variables---------

titulo = document.getElementById("title");
body = document.getElementById("body");
container = document.getElementById("container");
xd = document.getElementsByClassName("container")
cars = document.getElementById("cars");
filtro = document.getElementById("filtro");
divM = document.getElementById("tm-gallery-page-general");
logoPag = document.getElementById("logoPag");
c1 = "col-12 text-center";
c2 = "tm-person-about";
c3 = "tm-mb-p";
c4 = "tm-feature-description";
c5 = "text-center"
c6 = "tm-contact-link"
c7 = "address"
t1 = "tm-site-title";
t2 = "tm-site-description";
t3 = "tm-nav-link";
t5 = "panel";
z2 = "accordion";
c8 = "panel-accordion"
z1 = "form-control"
bbb= [t5]
aaa= [z1,z2]
listaDeClases = [c1, c2, c3, c5, c6, c7, c8];
listaTituloos = [t1, t2, t3];

//FUNCION DEL COLOR DE LA PAGINA
function colorCar() {
    if (cars.value == "default") {
      body.style.backgroundColor = "#ccc";
      container.style.backgroundColor = "white";
      titulo.style.color = "black";
      logoPag.src = "img/TEDM-logo-blanco.png"
      colorParrafo();
    } else if (cars.value == "oscuro") {
      body.style.backgroundColor = "rgb(13,23,33)";
      container.style.backgroundColor = "rgb(21,32,43)";
      titulo.style.color = "white";
      logoPag.src = "img/TEDM-logo.png"
      colorParrafo();
    } else if (cars.value == "rojo") {
      body.style.backgroundColor = "rgb(68,10,10)";
      container.style.backgroundColor = "rgb(108,10,10)";
      titulo.style.color = "black";
      logoPag.src = "img/TEDM-logo-blanco.png"
      colorParrafo();
    } else if (cars.value == "azul") {
      body.style.backgroundColor = "rgb(10,10,68)";
      container.style.backgroundColor = "rgb(10,10,98)";
      titulo.style.color = "white";
      logoPag.src = "img/TEDM-logo.png"
      colorParrafo();
    } else if (cars.value == "negro") {
      body.style.backgroundColor = "rgb(5,5,5)";
      container.style.backgroundColor = "rgb(20,20,20)";
      titulo.style.color = "white";
      logoPag.src = "img/TEDM-logo.png"
      colorParrafo();
    }
  }
  
  //FUNCION DEL COLOR DE LOS PARRAFOS
  function colorParrafo() {
    for (i = 0; i < listaDeClases.length; i++) {
      var elemento = document.getElementsByClassName(listaDeClases[i]);
      for (let i = 0; i < elemento.length; i++) {
        if (cars.value == "default") {
          elemento[i].style.color = "#626364";
          titulo.style.color = "black";
        } else if (cars.value == "negro") {
          elemento[i].style.color = "#c7c7c7";
        } else if (cars.value == "rojo") {
          elemento[i].style.color = "#626364";
          titulo.style.color = "black";
        } else if (cars.value == "azul") {
          elemento[i].style.color = "#626364";
          titulo.style.color = "#c7c7c7";
        } else if (cars.value == "oscuro") {
          elemento[i].style.color = "#c7c7c7";
          titulo.style.color = "#c7c7c7";
        } else {
          elemento[i].style.color = "#626364";
        }
      }
    }
  }

  //Fondo de color oscuro (Predeterminado)
  if (true) {
    body.style.backgroundColor = "rgb(13,23,33)";
    container.style.backgroundColor = "rgb(21,32,43)";
    titulo.style.color = "white";
    logoPag.src = "img/TEDM-logo.png"
    colorTituloos();
    colorParrafo();
    colorPanel();
    colorformGroup();
    }
    
    function colorTituloos() {
      for (o = 0; o < listaTituloos.length; o++) {
        var elementoxd = document.getElementsByClassName(listaTituloos[o]);
        for (let o = 0; o < elementoxd.length; o++) {
            elementoxd[o].style.color = "black";
            elementoxd[o].style.textShadow = "none";
            elementoxd[o].style.fontWeight = "550";
      }
      }
    }
    function colorPanel() {
        for (o = 0; o < bbb.length; o++) {
          var elementoxd = document.getElementsByClassName(bbb[o]);
          for (let o = 0; o < elementoxd.length; o++) {
              elementoxd[o].style.backgroundColor = "transparent";
              elementoxd[o].style.color = "rgb(199, 199, 199)";

        }
        }
      }
      function colorformGroup() {
        for (o = 0; o < aaa.length; o++) {
          var elementoxd = document.getElementsByClassName(aaa[o]);
          for (let o = 0; o < elementoxd.length; o++) {
              elementoxd[o].style.backgroundColor = "transparent";
              elementoxd[o].style.border= "1px solid #2F956D";


        }
        }
      }