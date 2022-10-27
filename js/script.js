				$(document).ready(function(){
			// Handle click on paging links
			$('.tm-paging-link').click(function(e){
				e.preventDefault();				
				var page = $(this).text().toLowerCase();
				$('.tm-gallery-page').addClass('hidden');
				$('#tm-gallery-page-' + page).removeClass('hidden');
				$('.tm-paging-link').removeClass('active');
				$(this).addClass("active");
			});
		});


		//comprar items
        var contadorDinero = document.getElementById("tm-pagging-money");
		var dineroTotal = new Decimal(370000000000000.0);
        //-------------------------------------------variables---------------------------------------------
		//secccion 1
		if(true){
		  //2/3/22
		  var nevera = {
			  nombre: "nevera",
			  precio: new Decimal(153750).toNumber(),
			  cantidad: 0,
			  max: false
		  }
		  var televisorCaro = {
			  nombre: "televisorCaro",
			  precio: new Decimal(8475000).toNumber(),
			  cantidad: 0,
			  max: false
		  }
		  var laptopCaro= {
			  nombre: "laptopCaro",
			  precio: new Decimal(3750000).toNumber(),
			  cantidad: 0,
			  max: false
		  }

		  // 4/6/22

		  var nike = {
	 	  nombre: "nike",
	 	  precio: new Decimal(176015.0).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var tesla = {
	 	  nombre: "tesla",
	 	  precio: new Decimal(437808.0).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var lamborgini  = {
	 	  nombre: "lamborgini",
	 	  precio: new Decimal(1775248.2).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var tanque = {
	 	  nombre: "tanque",
	 	  precio: new Decimal(8540918.90).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var submarino  = {
	 	  nombre: "submarino ",
	 	  precio: new Decimal(10026296.10).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var superYate = {
	 	  nombre: "superYate",
	 	  precio: new Decimal(35277708.50).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		  var bunker = {
	 	  nombre: "bunker",
	 	  precio: new Decimal(35658336.4).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }

		  //xd
		  /*var chipsAhoy = {
			  nombre: "chipsAhoy",
			  precio: new Decimal(1).toNumber(),
			  cantidad: 0,
			  max: false
		  }
		  */




		}
        //seccion 2
		if(true){
			var googlePlayPass = {
			  nombre: "googlePlayPass",
			  precio: new Decimal(8.9).toNumber(),
			  cantidad: 0,
			  max: false
		    } 
			var primeVideo = {
			  nombre: "primeVideo",
			  precio: new Decimal(16.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var youtubePremium = {
			  nombre: "youtubePremium",
			  precio: new Decimal(20.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var primeGaming = {
			  nombre: "primeGaming",
			  precio: new Decimal(24.5).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var disneyPlus = {
			  nombre: "disneyPlus",
			  precio: new Decimal(25.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var spotifyPremium = {
			  nombre: "spotifyPremium",
			  precio: new Decimal(29.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var hboMax = {
			  nombre: "hboMax",
			  precio: new Decimal(29.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var starPlus = {
			  nombre: "starPlus",
			  precio: new Decimal(37.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var discordNitro = {
			  nombre: "discordNitro",
			  precio: new Decimal(40.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   var netflixFamiliar = {
			  nombre: "netflixFamiliar",
			  precio: new Decimal(44.9).toNumber(),
			  cantidad: 0,
			  max: false
		   }
		   // 4/6/22
		   var windowsPro = {
	 	  nombre: "windowsPro",
	 	  precio: new Decimal(999.99).toNumber(),
	 	  cantidad: 0,
	 	  max: false
		  }
		    
		}

		//seccion 3
		if (true) {
			//4/6/22
		  var islaFlorida = {
	 	  nombre: "islaFlorida",
	 	  precio: new Decimal(19902197.7).toNumber(),
	 	  cantidad: 0,
	 	  max: 1
		  }
		
		  var islaMasCara = {
	 	  nombre: "islaMasCara",
	 	  precio: new Decimal(278508225).toNumber(),
	 	  cantidad: 0,
	 	  max: 1
		  }
		  var realMadrid = {
	 	  nombre: "realMadrid",
	 	  precio: new Decimal(2766515035).toNumber(),
	 	  cantidad: 0,
	 	  max: 1
		  }
		  var barca = {
	 	  nombre: "barca",
	 	  precio: new Decimal(3056163589).toNumber(),
	 	  cantidad: 0,
	 	  max: 1
		  }
		}
		
		//var numero = new Decimal(10.5).toNumber();

        //---------------------------------------------COMPRAR-----------------------------------------------
		var alertCounter = 0;
		function comprar(item){
		  if(dineroTotal >= item.precio){
			if(!item.max || item.cantidad < item.max){  		
			  item.cantidad += 1;
			  document.getElementById(`cantidad-${item.nombre}`).innerHTML = `x${item.cantidad}`;
              dineroTotal = dineroTotal.minus(item.precio); 
			  dineroFinal = ""; //no le pongas VAR
			  formatoDeCifras();
			
			  contadorDinero.innerHTML = `s/ ${dineroFinal}`;
			  if(item.cantidad == item.max){
				document.getElementById("botonComprar").innerHTML = "MÁXIMO";
			  }
		    } else{
				alertCounter += 1;
			    if(alertCounter >= 3){
					alert("Ya has comprado la cantidad máxima de este item.");
					alertCounter = 0;
				}			
			}
		  } else{
			  alert(`¡Increible! Ya no tienes dinero. \nTe falta s/${dineroTotal.minus(item.precio).toString().slice(1)} para comprar este item. \n¡Puedes vender items para tener más dinero!`);
		  }
		}

		//------------------------------------------------VENDER-----------------------------------:4
		var venderCounter = 0;
		 function vender(item){
		  if(item.cantidad > 0){
            item.cantidad -= 1;
		    document.getElementById(`cantidad-${item.nombre}`).innerHTML = `x${item.cantidad}`;
		    dineroTotal = dineroTotal.plus(item.precio);
			dineroFinal = ""; //no le pongas VAR
            formatoDeCifras();
		    contadorDinero.innerHTML = `s/ ${dineroFinal}`;
			if(item.cantidad < item.max){
				document.getElementById("botonComprar").innerHTML = "Comprar";
			}
		  } else{
			 venderCounter += 1;
			 if(venderCounter > 9){
				 venderCounter = 0;
                 alert(`Primero debes comprar este item para venderlo.`);
			    }
		    }
		 }

		
        //------------------------------------Dinero Restante-----------------------
		var enPorcentaje = false;
		var dineroGastado;
		function dineroRestante(){
            if(enPorcentaje == false){
			    //console.log(dineroFinal2);
		     	var dineroInicial = new Decimal(370000000000000);
			    dineroGastado = new Decimal(dineroInicial.minus(dineroTotal));
				
			    //console.log(`${cienxd} - ${dineroFinal2} = ${porcentaje}`);
				dineroFinal3 = "";
				formatoDeCifras2();

				document.getElementById("tm-pagging-money").innerHTML = `- s/ ${dineroFinal3}`;
				enPorcentaje = true;
			} else{
				dineroFinal = "";
				formatoDeCifras();
                document.getElementById("tm-pagging-money").innerHTML = `s/ ${dineroFinal}`;
			}
            
		}
        //--------------------------------------------Formato Cifras-------------------------------:
		 function formatoDeCifras(){
          //sepadaror de cifras de 3 en 3:
			dineroTotal_comas = dineroTotal.toNumber().toLocaleString("es-mx").split(","); //123456 => 123,456 => ["123", "456"]		
            
			for(var i = 0; i < dineroTotal_comas.length; i++){ //["123", "456"] => "123 456"
              dineroFinal += `${dineroTotal_comas[i]} `
			}
			dineroFinal = dineroFinal.slice(0, dineroFinal.length - 1); //para q no haya espacio al final

			if(dineroFinal[dineroFinal.length - 2] != "."){ //123 => 123.00
			
              dineroFinal = `${dineroFinal}.00`
			}

			if(dineroFinal[dineroFinal.length - 3] != "."){ //123.4 => 123.40
              dineroFinal = `${dineroFinal}0`;
			}
			enPorcentaje = false;
		}

		//----------------------------------Formato Cifras 2 ------------------------------------------
		function formatoDeCifras2(){ //para el dinero restante :c
          //sepadaror de cifras de 3 en 3:
			dineroTotal_comas = dineroGastado.toNumber().toLocaleString("es-mx").split(","); //123456 => 123,456 => ["123", "456"]		
            
			for(var i = 0; i < dineroTotal_comas.length; i++){ //["123", "456"] => "123 456"
              dineroFinal3 += `${dineroTotal_comas[i]} `
			}
			dineroFinal3 = dineroFinal3.slice(0, dineroFinal3.length - 1); //para q no haya espacio al final

			if(dineroFinal3[dineroFinal3.length - 2] != "."){ //123 => 123.00
			
              dineroFinal3 = `${dineroFinal3}.00`
			}

			if(dineroFinal3[dineroFinal3.length - 3] != "."){ //123.4 => 123.40
              dineroFinal3 = `${dineroFinal3}0`;
			}
			enPorcentaje = true;
		}
       
		
       //--cosas por hacer:
	      //traducir la pagina y el formato
		 //explicar el proceso de conversion de dolares a soles y la cifra de todo el dinero del mundo(poner la fuente: https://www.saberespractico.com/economia/cuanto-dinero-hay-en-el-mundo-2020/)
	   //Terminar la pagina de Contactanos