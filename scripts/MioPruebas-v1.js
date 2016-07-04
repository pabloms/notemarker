
$(window).resize(function() {
    
    var total= $( window ).height();
    var menu= $( "#formatting-container" ).height();

    var diferencia=total-menu-89;

    $( "#editor-container" ).height(diferencia); 
   
});

$( document ).ready(function() {
  var total= $( window ).height();
    var menu= $( "#formatting-container" ).height();

    var diferencia=total-menu-89;

    $( "#editor-container" ).height(diferencia); 



  // Handler for .ready() called.
});









   var editor = new Quill('#editor-container', {
    modules: {
      'toolbar': { container: '#formatting-container' },
      'link-tooltip': true,
      'image-tooltip': true
    }
  });




var rangoSeleccion;



editor.on('selection-change', function(range) {
  console.log('selection-change', range)

  if(range!=null){
    rangoSeleccion=range;
  }  


});
editor.on('text-change', function(delta, source) {
  console.log('text-change', delta, source)
});





function myFunction() {




    /*editor.insertEmbed(rangoSeleccion.end, 'image', 'http://quilljs.com/images/cloud.png');*/

    /* editor.insertText(rangoSeleccion.end, '<a href="http://www.w3schools.com">Visit W3Schools.com!<\/a>', 'bold', true);*/
    editor.insertText(7, 'Enlace automatico');

    editor.formatText(7,28,'link','https://www.google.es','user');
          /*
          rangoSeleccion.start=4;
          rangoSeleccion.end=4;
          rangoSeleccion.setAttribute('href', "http://Prueba");
          */
}

  //TODO - Esto hay que restringirlo mas para que no sea para cualquier evento , se puede hacer solo para una determinada clase de CSS
  //window.onclick = myFunction;








  var activoDos=false;
  var activo=false;
  function ActualizarMenuSecundario(){
    ajustarMenu();

    

  }

  function ActualizarMenuTextSize(){
    ajustarMenu();

    

  }

  function eventFire(el, etype){
      if (el.fireEvent) {
        el.fireEvent('on' + etype);
      } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
      }
    }



  function ActualizarMenuSecundario_dos(){
    var optionElement = document.getElementById("elemento2");
    prueba();
    //optionElement.selected = true;
   // document.getElementById('elemento2').click();


    

  }


/*
  ATENCION si hay varios onload , solamente se dispara el ultimo

*/
window.onload = function() {
  
  // Inicalizamos el valor de size
  document.getElementById("mioid").selectedIndex = "0";
  triggerEvent( elem, 'change' );




};

function initialValur(){
  $('#elemento1').click();


}



window.onclick = myFunction;

/**
  Control de los eventos con el objetivo de redirigir los enlaces.
*/

function myFunction(event) {
 
  //TODO escuchar solamente los eventos de a , con a.onclick
  //Comprobamos que es un evento de un a y ademas que no se corresponde con ningun elemento interior.
  if (event.target.localName == 'a' && event.srcElement.className=='url') {
    console.log('a tag clicked!');
    event.stopPropagation();
    
    
    //Redirigimos donde nos interesa, en nuestro caso al se una extension redirigimos al navegador que contiene la extension.
    window.open("https://www.google.es", "nuevo");
    
    //Anulamos el click estandar del enlace
    return false;  

  }

}

$('.arrow').click(function(){

  var action;
  if ($(this).hasClass("arrow_drop_down")){
    $(this).removeClass("arrow_drop_down");
    $(this).addClass("arrow_drop_up");
    action="open";
  
  }else{
    $(this).removeClass("arrow_drop_up");
    $(this).addClass("arrow_drop_down");   
    action="close";

  }

  var linked=$(this).attr("linked");

   if (linked=="arrowSize"){
      sizeSelectMenu(this);
   }else if(linked=="arrowExtraMenu"){
      extraMenu(this);

   }

});



$('.button').click(function(){

  var action;
  if ($(this).hasClass("ql-active")){
    $(this).removeClass("ql-active");
    action="close";
  
  }else{
    
    $(this).addClass("ql-active");   
    action="open";

  }

  var linked=$(this).attr("linked");

   if (linked=="arrowSize"){
      sizeSelectMenu(this);
   }

});





/**
  sizeType --> down or up
*/
var sizeType;
function sizeSelectMenu(element){

//var o = document.getElementById('elementTextSize');
  x_pos=element.offsetLeft;
  y_pos=element.offsetTop + 30;

  var d = document.getElementById('popupTextSize');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
  
  if(activoDos==false){
    d.style.display="block";
    activoDos=true;
  }else{
    d.style.display="none";
    activoDos=false;
  }  

  
}

function extraMenu(element){

  
  x_pos=element.offsetLeft;
  y_pos=element.offsetTop + 30;

  var d = document.getElementById('extraMenu');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';




  
  if(activo==false){
    d.style.display="flex";
    activo=true;
  }else{
    d.style.display="none";
    activo=false;
  }  

}



function ajustarMenu(){

  


}       





function ajustarMenuTextSize(){

  
  var o = document.getElementById('elementTextSize');
  x_pos=o.offsetLeft;
  y_pos=o.offsetTop + 30;

  var d = document.getElementById('popupTextSize');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
  
  if(activoDos==false){
    d.style.display="block";
    activoDos=true;
  }else{
    d.style.display="none";
    activoDos=false;
  }  

}       

var elem = document.getElementById('mioid');

// Simulate clicking on the specified element.


/**
* Trigger the specified event on the specified element.
* @param  {Object} elem  the target element.
* @param  {String} event the type of the event (e.g. 'click').
*/

function triggerEvent( elem, event ) {
var clickEvent = new Event( event ); // Create the event.
elem.dispatchEvent( clickEvent );    // Dispatch the event.
}


/**
 Hacemos click y probocamos un evento change en el Select que
 contiene el size
*/

/**
  Hay que tener en cuenta que en quilljs , es capaz de identificar 
  el tamaño que esta seleccionado , pero para ello en el combo tiene
  que ser el subconjuto de tamaños que tiene registrado el js

*/

$('#elemento1').click(function(){

  //$('.elemento1_3').trigger("click")

  document.getElementById("mioid").selectedIndex = "0";
  triggerEvent( elem, 'change' );
  $('.sizeOption').parent().removeClass("selectedOption");
  $('#elemento1').parent().addClass("selectedOption");

});

$('#elemento2').click(function(){

//$('.elemento1_3').trigger("click")

  document.getElementById("mioid").selectedIndex = "1";
  triggerEvent( elem, 'change' );
  $('.sizeOption').parent().removeClass("selectedOption");
  $('#elemento2').parent().addClass("selectedOption");


});

$('#elemento3').click(function(){

//$('.elemento1_3').trigger("click")

  document.getElementById("mioid").selectedIndex = "2";
  triggerEvent( elem, 'change' );
  $('.sizeOption').parent().removeClass("selectedOption");
  $('#elemento3').parent().addClass("selectedOption");


});







$('#mioid').on('change', function() {
  
  var selectedIndex = $('#mioid option:selected').index();

  $( "#sizeActual" ).html( sizes[selectedIndex][1]);
});


var size_1 = new Array("13px", "Normal");
var size_2 = new Array("18px", "Mediana");
var size_3 = new Array("24px", "Grande");

var sizes=new Array(size_1,size_2,size_3);



showDropdown = function (element) {
  var event;
  event = document.createEvent('MouseEvents');
  event.initMouseEvent('mousedown', true, true, window);


  element.dispatchEvent(event);

 
};

// This isn't magic.
function prueba() { 
  var dropdown = document.getElementById('mioid');
  showDropdown(dropdown);

};
    


    


    

