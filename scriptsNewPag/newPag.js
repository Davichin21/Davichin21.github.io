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

body = document.getElementById('body');

var contador = 0;
button.onclick = function () {
if (contador%2 == 0) {
body.style.backgroundColor= '#242a30';
    
}
else if(contador%2 != 0){
    body.style.backgroundColor= '#0d0f12';
    
}
    contador++
    console.log(contador)
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
