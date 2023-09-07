      
      var conteo=6;
      var tiempoEspera = 1000; // 1 segundo en milisegundos

      function activosCirculantes() {
       if(conteo==7){
           swal({
          title: "¡TERMINASTE TODAS LAS SECCIONES!",
          icon: "img/tiburonActual.png",         
        }); 
	}else{
        swal({
          text: "Ya completaste está sección",
          icon: " img/tiburonYa.png",
        });  
	}
        }  

      function activosNoCirculantes() {
       if(conteo==7){
                  swal({
          title: "¡TERMINASTE TODAS LAS SECCIONES!",
          icon: "img/tiburonActual.png",         
        }); 
	}else{
        swal({
          text: "Ya completaste está sección",
          icon: " img/tiburonYa.png",
        });   
	}  
      }

      function pasivos() {
       if(conteo==7){
                  swal({
          title: "¡TERMINASTE TODAS LAS SECCIONES!",
          icon: "img/tiburonActual.png",         
        }); 
	}else{
        swal({
          text: "Ya completaste está sección",
          icon: " img/tiburonYa.png",
        });  
}    
      }

      function capital() {
       if(conteo==7){
                  swal({
          title: "¡TERMINASTE TODAS LAS SECCIONES!",
          icon: "img/tiburonActual.png",         
        }); 
        }else{

        swal({
          title: "¡YA CASI TERMINAS ES EL ULTIMO!",
          text: "Actualmente estás realizando Capital Contable",
          icon: "img/tiburonActual.png",         
        });  
	}
      }
    
      $(document).ready(function() {
        $(".box").draggable({
          helper: "clone"
        });
        $(".cajaX").droppable({
          accept: ".box",
          drop: function(event, ui) {
            var boxId = ui.draggable.attr("id");
            var cajaXId = $(this).attr("id");
            if (cajaXId === boxId) {
              conteo = conteo + 1;
              $(this).append(ui.draggable);
              ui.helper.remove();
              ui.draggable.addClass("correct");
              $(this).addClass("correct");
              $(".box." + boxId).draggable("option", "revert", false);
              if(conteo===7){
                swal({
                  title: "¡FELICIDADES!",
                  text: "COMPLETASTE TODAS LAS CUENTAS",
                  icon: "img/tiburon.gif",
                });
                $(".swal-overlay").css({"background-image": `url(${"img/efectoConfetti.gif"})`});

                

              }
            } else {
              ui.draggable.addClass("incorrect");
            }
            ui.draggable.draggable("enable");
          }
        });
      });
      $(function() {
        var imagenes = [
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'img/11.jpg',
          'img/12.jpg',
          'img/13.jpg',
          'img/14.jpg',
          'img/15.jpg',
          'img/16.jpg',
          'img/17.jpg',
        ]; 
        function obtenerImagenAleatoria() {
          return imagenes[Math.floor(Math.random() * imagenes.length)];
        }
        var imgElement = document.getElementById("aleatorio1");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio2");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio3");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio4");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio5");
        imgElement.src = obtenerImagenAleatoria() ; 
      });