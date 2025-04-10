
   const capa= document.getElementById("capa");
   const boton_rojo= document.getElementById("boton_rojo");
   const boton_amarillo= document.getElementById("boton_amarillo");
   const boton_verde= document.getElementById("boton_verde");
   const boton_violeta= document.getElementById("boton_violeta"); 
   const boton_ocultar= document.getElementById("ocultar_botones");
   const boton_mostrar= document.getElementById("mostrar_botones");
   
   boton_rojo.addEventListener("click",rojo);
   boton_amarillo.addEventListener("click",amarillo);
   boton_verde.addEventListener("click",verde);
   boton_violeta.addEventListener("click",violeta);
   boton_ocultar.addEventListener("click",ocultar_botones);
   boton_mostrar.addEventListener("click",mostrar_botones);


function rojo(){
   capa.style.background = "red";
}



function amarillo(){
    capa.style.backgroundColor = "yellow";
 }
 function rojo(){
     capa.style.backgroundColor = "red";
 }
 function verde(){
    capa.style.backgroundColor = "green";
 }
 function ocultar_botones(){
     capa.style.visibility = "hidden";
 }
 function mostrar_botones(){
     capa.style.visibility = "visible";
 }
function cambiarcolor(){
    capa.style.backgroundColor = "blue";
 }

 function violeta(){
     capa.style.backgroundColor = "violet";
 }