/*
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
-------------------  Start of the main javascript of a page that I am testing --------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
*/


//-------------------------------------- Scroll -------------------------------------------//
if (true) {
const scrollables = document.querySelectorAll('.scrollable');

scrollables.forEach(scrollable => {
  scrollable.addEventListener('scroll', () => {
    scrollable.classList.toggle('scroll-top', scrollable.scrollTop === 0);
    scrollable.classList.toggle('scroll-bottom', scrollable.scrollTop + scrollable.clientHeight === scrollable.scrollHeight);
  });
});
}
//-----------------------------------------------------------------------------------------//


//------------------------------------- Boton 3 -------------------------------------------//
if (true) {
button = document.getElementById('button-3')
container = document.getElementById('container');
body = document.getElementById('body');

var contador = 0;
button.onclick = function () {
if (contador%2 == 0) {   //primer cambio del boton
  container.style.maxWidth = "100%";
    
}
else if(contador%2 != 0){// segundo cambio del boton
  container.style.maxWidth = "100%";
    
}
    contador++
    console.log(contador)
}
}
if (true) {
  const iframe = document.querySelectorAll('.iframe');

if (container.style.maxWidth == "100%") {
  for (let i = 0; i < iframe.length; i++) {
    iframe[i].style.width = '400px';
  }
  
}
else if(  container.style.maxWidth == "1200px"){
  for (let i = 0; i < iframe.length; i++) {
    iframe[i].style.width = '450px';
  }
  
}
else{

}
}
//-----------------------------------------------------------------------------------------//


//------------------------------------- Url -------------------------------------------//
function cambiarTexto() {
  var input = document.getElementById("inputUrl").value;
  if (input.startsWith("https://")) {
  document.getElementById("gameContent").innerHTML += `<iframe src="${input}" title="Iframe Example" ></iframe>`;
  document.getElementById("p").innerHTML = " ";
  setTimeout(function() {
    document.getElementById("inputUrl").value = "";
  }, 100);
  }
  else{  
    document.getElementById("p").innerHTML = 'Por favor, introduce un enlace que comience con https://'
    setTimeout(function() {
    document.getElementById("p").innerHTML = ''
  }, 3000);
    
    setTimeout(function() {
      document.getElementById("inputUrl").value = "";
    }, 100);
  }
}

var input = document.getElementById("inputUrl");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cambiarTexto();
  }
});
//----------------------------------------------------------------------------------------------//


//------------------------------------ Creandor de espacios ------------------------------------//
var buttonAdd = document.getElementById("buttonAdd");
var container = document.getElementById("container");
var ndiv = 0;
function iframeAdd(){
  ++ndiv;
  document.getElementById("container").innerHTML += `
  <div id="inputs">
  <ul id="ul-inputs">  
      <li class="li">
          <input type="text" placeholder="Enter url" id="inputUrl" pattern="^https://.*" title="Por favor, introduce un enlace que comience con https://">
          <button onclick="cambiarTexto()" id="bubuton">→</button>
          <div class="item">   
              <a id="aa" >Otras</a>
              <div class="menu">       
                  <ul>
                      <li><a >Opcion 1</a></li>
                      <li><a >Opcion 2</a></li>
                  </ul>
              </div>
          </div> 
          <p id="p${ndiv}" ></p>
      </li>  
  </ul>
      <iframe src="index.html" title="Iframe Example" ></iframe>
</div>`
}


//----------------------------------------------------------------------------------------------//