
//variables
if(true){
var bottonEdad = document.getElementById("bottonEdad");
var contadorAña = document.getElementById("contadorAña");
var contadorRelaciones = document.getElementById("contadorRelaciones");
var contadorCompras = document.getElementById("contadorCompras");
var bottonE = document.getElementById("bottonActividades2");
var bottonC = document.getElementById("buttonTrabajo2");
var bottonV = document.getElementById("buttonTrabajo3");
var contador = 0;
var contadorAno = 0;
}

//boton de Aña+
bottonEdad.onclick = function () {
  
    // Create element: figure
const p = document.createElement("p");

//ponemos el elemento en el html:
document.getElementById(`para`).appendChild(p);

p.setAttribute('id', `p${contador}`);
contadorAña.setAttribute('href',`#p${contador}` )
contador++;
contadorAno++;
    

    /*p en vez de historial*/ 
    p.innerHTML += "Tienes " + contadorAno + " Años" ;


    
/*const p1 = document.createElement("p");

//ponemos el elemento en el html:
document.getElementById(`para`).appendChild(p1);
 
// creamos atributos
p1.setAttribute('id', 'p1');
p1.textContent = `uwu`; */
}

//Lista de Nombres Apellidos y Paises 
if(true){
var paises = ["Perú", "Argentina", "México", "Chile", "España", "USA", "Brasil"];

var nameGirlsPe = ["Maria", "Gabriela", "Paula", "Carla", "Andrea", "Karen", "Cecilia", "Sofia", "Isabella", "Valentina", "Antonella", "Camila", "Daniela", "Valeria", "Mariana"];
var nameBoysPe = ["Juan", "Carlos", "Pedro", "Andres", "Diego", "Jorge", "Fernando", "Mario", "Luis", "Miguel", "Eduardo", "Ricardo", "Francisco", "Javier", "Enrique"];
var sNamePe = ["Castro","Flores","Rodriguez","Perez","Garcia","Gonzalez","Sánchez","Mendoza","Vásquez","Córdova","Rojas","Ramos","Castillo","Cruz","Cervantes"];

var nameGirlsArg = ["Soledad", "Maria", "Gabriela", "Paula", "Carla", "Andrea", "Ana","Lucia","Martina","Valeria","Florencia","Juliana","Agustina","Isabella","Valentina"];
var nameBoysArg = ["Juan", "Carlos", "Pedro", "Andres", "Diego", "Jorge", "Federico","Santiago","Agustin","Lucas","Tomas","Matias","Joaquin","Ezequiel","Leandro"];
var sNameAr = ["García", "González", "Lopez", "Martínez", "Rodríguez", "Sánchez", "Pérez", "Gómez", "Martín", "Juárez", "Vásquez", "Castro", "Romero", "Suarez", "Alvarez"];

var nameGirlsMx = ["Maria", "Gabriela", "Paula", "Carla", "Andrea", "Karen", "Cecilia", "Sofia", "Isabella", "Valentina", "Antonella", "Camila", "Daniela", "Valeria", "Mariana"];
var nameBoysMx = ["Juan", "Carlos", "Pedro", "Andres", "Diego", "Jorge", "Federico","Santiago","Agustin","Lucas","Tomas","Matias","Joaquin","Ezequiel","Leandro"];
var sNameMx = ["García", "González", "Rodríguez", "Martínez", "López", "Pérez", "Sánchez", "Gómez", "Mendoza", "Hernández", "Juárez", "Romero", "Vargas", "Castro", "Castillo", "Torres", "Gómez", "Sosa", "Domínguez", "Ramírez", "Silva", "Benítez", "Cervantes", "Cano", "Vázquez", "Vela", "Montes", "Delgado", "Ríos", "Guerrero", "Flores", "Acosta"];

var nameGirlsCh = ["Isabella", "Valentina", "Antonella", "Camila", "Daniela", "Valeria", "Mariana", "Catalina", "Gabriela", "Paula", "Carla", "Andrea", "Karen", "Cecilia", "Sofia"];
var nameBoysCh = ["Juan", "Carlos", "Pedro", "Andres", "Diego", "Jorge", "Federico","Santiago","Agustin","Lucas","Tomas","Matias","Joaquin","Ezequiel","Leandro"];
var sNameCh = ["Pérez", "García", "González", "Sánchez", "Lopez", "Martínez", "Rodríguez", "Gómez", "Hernández", "Mendoza", "Castro", "Alonso", "Gómez", "Vásquez", "Castillo", "Ramos", "Romero", "Córdova", "Navarro", "Rojas", "Suarez", "Morales", "Gutiérrez", "Castro", "Silva", "Sepúlveda"];

var nameGirlsEs = ["Maria", "Sofia", "Ana", "Marta", "Paula", "Carmen", "Isabel", "Laura", "Maria Teresa", "Manuela", "Cristina", "Elena", "Rocio", "Anabel", "Amaya"];
var nameBoysEs = ["Juan", "Carlos", "Pedro", "Andres", "Diego", "Jorge", "Fernando","Jose", "Luis", "Manuel", "Francisco", "Javier", "David", "Jose Luis","Juan Carlos"];
var sNameEs = ["García", "González", "Rodríguez", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez", "Muñoz", "Romero", "Alonso", "Gutiérrez", "Navarro", "Torres", "Domínguez", "Vázquez", "Ramos", "Gil", "Ramírez"];

var nameGirlsUSA = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Emily", "Abigail", "Madison", "Elizabeth", "Avery", "Evelyn", "Hannah"];
var nameBoysUSA = ["Noah", "Liam", "William", "Mason", "James", "Benjamin", "Jacob","Michael", "Elijah", "Ethan", "Daniel", "Matthew", "Aiden", "Jackson","Logan"];
var sNameUSA = ["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Garcia","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Moore","Young"," Allen"];

var nameGirlsBr = ["Maria", "Gabriela", "Juliana", "Carla", "Andrea", "Isabella", "Valentina", "Antonella", "Camila", "Daniela", "Valeria", "Mariana", "Larissa", "Fernanda", "Beatriz"];
var nameBoysBr = ["Joao", "Carlos", "Pedro", "Andre", "Diego", "Jorge", "Fernando","Jose", "Luis", "Manuel", "Francisco", "Javier", "David", "Lucas","Guilherme"];
var sNameBr = ["Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira", "Lima", "Almeida", "Ferreira", "Ribeiro", "Fernandes", "Alves", "Nunes", "Castro", "Carvalho", "Barbosa", "Moura", "Cavalcante", "Cardoso", "Ramos", "Machado", "Vieira", "Andrade", "Rocha", "Cunha", "Martins"];
}


//boton de Relaciones
bottonE.onclick = function () {
     
    var randomIndex = Math.floor(Math.random() * paises.length);
    var randompaises = paises[randomIndex];
    document.getElementById("pais").innerHTML += " ";
        
    var randomIndex = Math.floor(Math.random() * sNamePe.length);
    var randomsNamePe = sNamePe[randomIndex];
    document.getElementById("sName").innerHTML += " ";

    var randomIndex = Math.floor(Math.random() * nameGirlsPe.length);
    var randomNameGirlsPe = nameGirlsPe[randomIndex];
    document.getElementById("name").innerHTML += " ";


    const script = document.createElement("script");

    //ponemos el elemento en el html:
    document.getElementById(`body`).appendChild(script);
    
    script.innerHTML = `
    var nombre = "${randomNameGirlsPe}";
    var apellido = "${randomsNamePe}";
    var pais = "${randompaises}";
    ` ;

    const pp = document.createElement("p");

    //ponemos el elemento en el html:
    document.getElementById(`para`).appendChild(pp);
    
    pp.setAttribute('id', `p${contador}`);
    contadorRelaciones.setAttribute('href',`#p${contador}` )
    
    contador++;
    
    /*p en vez de historial*/ 
    pp.innerHTML += "Ahora tienes una amiga llamada " + `${randomNameGirlsPe}` + " de " + `${pais}`;
    console.log("aña")


    //barra de progreso
    function randomNumber() {
        return Math.floor(Math.random() * 11);
      }
      
      console.log(randomNumber());
      if(true) {
        const progressBar = document.getElementById("progress");
    
        // Función para actualizar el porcentaje de la barra de progreso
        function updateProgress(percentage) {
        progressBar.style.width = (percentage-randomNumber())+ "%";
        }
    
        // Ejemplo de cómo utilizar la función
        updateProgress(75); // establece el porcentaje en 75
    }
}


//barra de progreso
if(false) {
    const progressBar = document.getElementById("progress");

    // Función para actualizar el porcentaje de la barra de progreso
    function updateProgress(percentage) {
    progressBar.style.width = percentage + "%";
    }

    // Ejemplo de cómo utilizar la función
    updateProgress(75); // establece el porcentaje en 75
}

//--------- Dinero ---------

//boton de Compras
  var contadorDineros = 0;
  bottonC.onclick = function () { 
    if(contadorDineros > 0 ){
      var amount = document.getElementById("dinero");
      contadorDineros = contadorDineros - 10000
      amount.innerHTML = "s/ " + (parseInt(contadorDineros));

      const ppp = document.createElement("p");

      //ponemos el elemento en el html:
      document.getElementById(`para`).appendChild(ppp);
        
      ppp.setAttribute('id', `p${contador}`);
      contadorCompras.setAttribute('href',`#p${contador}` )
        
      contador++;
        
      /*p en vez de historial*/ 
      ppp.innerHTML += "Compraste un auto a " + `${10000}`;
      console.log("aña")
    }
    else if (contadorDineros <= 0){
      alert("No tienes suficiente saldo para ejecutar esta compra.");
    }
    else{
      alert("Error.");
    }

	}

//boton de Ventas}
var contadorDineros = 0;
bottonV.onclick = function () { 
  if(contadorDineros >= 0 ){
    var amount = document.getElementById("dinero");
    contadorDineros = contadorDineros + 10000
    amount.innerHTML = "s/ " + (parseInt(contadorDineros));
  }

  else if (contadorDineros > 370000000000000){
    alert("Es Imposible tener tanto dinero ¿Estas usado hacks?.");
  }
  else{
    alert("Error.");
  }

  const pppp = document.createElement("p");

  //ponemos el elemento en el html:
  document.getElementById(`para`).appendChild(pppp);
    
  pppp.setAttribute('id', `p${contador}`);
  contadorVentas.setAttribute('href',`#p${contador}` )
    
  contador++;
    
  /*p en vez de historial*/ 
  pppp.innerHTML += "Vendiste un auto a " + `${10000}`;
  console.log("aña")
}
//--------------------------

//Actividades
var bottonActiv = document.getElementById('bottonActividades1');
var bottonActivBack = document.getElementById('actividades2');

bottonActiv.onclick = function () {
    document.getElementById('actividades').style.display = "block";

}

bottonActivBack.onclick = function () {
    document.getElementById('actividades').style.display = "none";
}

//Relaciones2

var bottonRela = document.getElementById('bottonActividades3');
var bottonRelaBack = document.getElementById('relaciones2');

bottonRela.onclick = function () {
    document.getElementById('relaciones').style.display = "block";

}

bottonRelaBack.onclick = function () {
    document.getElementById('relaciones').style.display = "none";
}