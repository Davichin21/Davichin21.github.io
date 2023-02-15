//scroll
const scrollables = document.querySelectorAll('.scrollable');

scrollables.forEach(scrollable => {
  scrollable.addEventListener('scroll', () => {
    scrollable.classList.toggle('scroll-top', scrollable.scrollTop === 0);
    scrollable.classList.toggle('scroll-bottom', scrollable.scrollTop + scrollable.clientHeight === scrollable.scrollHeight);
  });
});
//------------

//boton1
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

