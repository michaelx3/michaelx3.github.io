      
      var conteo=11;
      var tiempoEspera = 1000; // 1 segundo en milisegundos

      function activosCirculantes() {
        swal({
            title: "¡Estás aquí!",
            text: "Actualmente estás realizando activos circulantes",
            icon: "img/tiburonActual.png",         
          });
      }  

      

      function activosNoCirculantes() {
        if(conteo==12){
          window.open("juegoCuentasActivosNoCirculante.html", "_self");
        }else{
          swal({
            title: "¡Aún no terminas!",
            text: "Arrastra todas las imagenes a su cuenta correspondiente",
            icon: "img/tiburonNo.png",         
          });
        }    
      }

      function pasivos() {
          swal({
            title: "¡Aún no puedes realizar esta sección!",
            text: "Arrastra todas las imagenes a su cuenta correspondiente",
            icon: "img/tiburonNo.png",         
          });         
      }

      function capital() {
          swal({
            title: "¡Aún no puedes realizar esta sección!",
            text: "Arrastra todas las imagenes a su cuenta correspondiente",
            icon: "img/tiburonNo.png",         
          });  
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
              if(conteo===12){
                swal({
                  title: "¡FELICIDADES!",
                  text: "Completaste todas las cuentas en activos circulantes, puedes pasar a ACTIVOS NO CIRCULANTES",
                  icon: "img/tiburon.gif"
                });
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
        var imgElement = document.getElementById("aleatorio6");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio7");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio8");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio9");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio10");
        imgElement.src = obtenerImagenAleatoria() ; 
        var imgElement = document.getElementById("aleatorio11");
        imgElement.src = obtenerImagenAleatoria() ; 
      });