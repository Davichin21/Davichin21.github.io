
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
c2 = "tm-gallery-description";
c3 = "tm-mb-45";
t1 = "tm-site-title";
t2 = "tm-site-description";
t3 = "tm-nav-link";
listaDeClases = [c1, c2, c3];
listaTituloos = [t1, t2, t3];
//-------------------------------



//Funcion para el inicio de la pagina
function inicioPag(){
 
    document.getElementById("tm-gallery-page-general").innerHTML = "";
    if (filtro.value == "menoramayor") {
        listaGeneral.sort((a, b) => {
          if (a.precio > b.precio) return 1;
          if (a.precio < b.precio) {
            return -1;
          }
        });
       
    
        for (i = 0; i < listaGeneral.length; i++) {
          crearGeneral(listaGeneral[i]);
        }
        colorParrafo();
      } 

          //-------------Servicios-----------
          document.getElementById("tm-gallery-page-servicios").innerHTML = "";
          //Menor a Mayor
           if (filtro.value == "menoramayor") {
            listaServicios.sort((a, b) => {
                if (a.precio > b.precio) return 1;
                if (a.precio < b.precio) {
                  return -1;
                }
              });
             
          
              for (i = 0; i < listaServicios.length; i++) {
                crearServicios(listaServicios[i]);
              }
              colorParrafo();
            }
}

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
      } else if (cars.value == "oscuro") {
        elemento[i].style.color = "#c7c7c7";
        titulo.style.color = "#c7c7c7";
      } else {
        elemento[i].style.color = "#626364";
      }
    }
  }
}

//FUNCION DE LOS FILTROS
function filtroPrecio() {

  document.getElementById("tm-gallery-page-general").innerHTML = "";
//Menor a Mayor
 if (filtro.value == "menoramayor") {
    listaGeneral.sort((a, b) => {
      if (a.precio > b.precio) return 1;
      if (a.precio < b.precio) {
        return -1;
      }
    });
   

    for (i = 0; i < listaGeneral.length; i++) {
      crearGeneral(listaGeneral[i]);
    }
    colorParrafo();
  } 
  //Mayor a Menor
   else if (filtro.value == "mayoramenor") {
    listaGeneral.sort((a, b) => {
      if (a.precio > b.precio) return 1;
      if (a.precio < b.precio) {
        return -1;
      }
    });
 listaGeneral.reverse();
    for (i = 0; i < listaGeneral.length; i++) {
      crearGeneral(listaGeneral[i]);
    }
    colorParrafo();
  }

  //de A a Z
  if (filtro.value == "deAaZ") {
    listaGeneral.sort((a, b) => {

      if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
        return 1;
      }
      if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
        return -1;
      }
      return 0;
    });

    for (i = 0; i < listaGeneral.length; i++) {
      crearGeneral(listaGeneral[i]);
    }
    colorParrafo();
  }


  //de Z a A
  if (filtro.value == "deZaA") {
    listaGeneral.sort((a, b) => {

      if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
        return 1;
      }
      if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    listaGeneral.reverse();

    for (i = 0; i < listaGeneral.length; i++) {
      crearGeneral(listaGeneral[i]);
    }
    colorParrafo();
  }

  if(true) {
    //-------------Servicios---------
      document.getElementById("tm-gallery-page-servicios").innerHTML = "";
    //Menor a Mayor
     if (filtro.value == "menoramayor") {
      listaServicios.sort((a, b) => {
          if (a.precio > b.precio) return 1;
          if (a.precio < b.precio) {
            return -1;
          }
        });
       
    
        for (i = 0; i < listaServicios.length; i++) {
          crearServicios(listaServicios[i]);
        }
        colorParrafo();
      } 
      //Mayor a Menor
       else if (filtro.value == "mayoramenor") {
        listaServicios.sort((a, b) => {
          if (a.precio > b.precio) return 1;
          if (a.precio < b.precio) {
            return -1;
          }
        });
        listaServicios.reverse();
        for (i = 0; i < listaServicios.length; i++) {
          crearServicios(listaServicios[i]);
        }
        colorParrafo();
      }
    
      //de A a Z
      if (filtro.value == "deAaZ") {
        listaServicios.sort((a, b) => {
    
          if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
            return 1;
          }
          if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
            return -1;
          }
          return 0;
        });
    
        for (i = 0; i < listaServicios.length; i++) {
          crearServicios(listaServicios[i]);
        }
        colorParrafo();
      }
    
    
      //de Z a A
      if (filtro.value == "deZaA") {
        listaServicios.sort((a, b) => {
    
          if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
            return 1;
          }
          if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        listaServicios.reverse();
    
        for (i = 0; i < listaServicios.length; i++) {
          crearServicios(listaServicios[i]);
        }
        colorParrafo();
      }
    
    
    
    }

}

//Funcion de los titulos
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

//Fondo de color oscuro (Predeterminado)
if (true) {
body.style.backgroundColor = "rgb(13,23,33)";
container.style.backgroundColor = "rgb(21,32,43)";
titulo.style.color = "white";
logoPag.src = "img/TEDM-logo.png"
colorTituloos();
colorParrafo();
}

