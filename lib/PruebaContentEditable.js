$(document).ready(function(){

 
  var longitud;
  var posicion;
  var nodoSeleccionado;
  var longitudBase;
  var posicionFoco;


  // helper function credit to http://stackoverflow.com/questions/3972014/get-caret-position-in-contenteditable-div
  function getCaretPosition(editableDiv) {
    var caretPos = 0, containerEl = null, sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
           
            var temp = document.createElement('temp');
            range.insertNode(temp);
            
            var Ancestorpadre =range.commonAncestorContainer;
            var preSelectionRange = range.cloneRange();
            preSelectionRange.selectNodeContents(Ancestorpadre);
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
            var start = preSelectionRange.toString().length;
            var comienzo=range.toString().length;




            var Ancestorpadre =range.commonAncestorContainer;
            var id=Ancestorpadre.id;
            longitudBase=sel.anchorNode;
            posidicoFoco=sel.focusNode;


            longitud=Ancestorpadre.length;
            posicion=sel;

          
            
            var padre=Ancestorpadre.parentNode;
            console.log(padre.tagName);
            
            var abuelo=padre.parentNode;
            console.log("-"+ abuelo.tagName);
            
            var tataraAbuelo=abuelo.parentNode;
            console.log("--"+ tataraAbuelo.tagName);





           
            
            
            


            if (range.commonAncestorContainer.parentNode == editableDiv) {
                caretPos = range.endOffset;
            }
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        if (range.parentElement() == editableDiv) {
            var tempEl = document.createElement("span");
            editableDiv.insertBefore(tempEl, editableDiv.firstChild);
            var tempRange = range.duplicate();
            tempRange.moveToElementText(tempEl);
            tempRange.setEndPoint("EndToEnd", range);
            caretPos = tempRange.text.length;
        }
    }
    return caretPos;
  }

  // listener will keep track of caret position
  var position = 0;
  $('#myDiv').keyup(function() { 

     position = getCaretPosition(this);

  });

  // the special span element to insert
  var mySpan = "<span class='mySpan'>Yes!</span>";


  var letraPulsada;
  $("#editor").keypress(function(event){
    var x = event.keyCode || event.which;
    letraPulsada=String.fromCharCode(x);
  });

   $("#editor").keydown(function(event){
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            
            var Ancestorpadre=range.commonAncestorContainer;
            
            longitud=Ancestorpadre.length;
            posicion=sel;
            
            var padre=Ancestorpadre.parentNode;
            console.log(padre.tagName);
            
            var abuelo=padre.parentNode;
            console.log("-"+ abuelo.tagName);
            
            var tataraAbuelo=abuelo.parentNode;
            console.log("--"+ tataraAbuelo.tagName);
        }
  
    }
  });


  $("#editor").keyup(function(event){
    
    position = getCaretPosition(this); 
    var data1 = $("#editor").html().slice(0, position);
    var data2 = $("#editor").html().slice(position,$("#editor").html().length);

    console.log(this.firstChild);
    console.log(this.lastElementChild.tagName);

    var data3=nodoSeleccionado


    /*$("#editor").html(data1+"<b></b>"+data2);*/
    
    if($("#boton1").hasClass('btnpressed')){
        /*$("#editor").html(data1+"<b></b>"+data2);*/

      }else{
       /* $("#editor").html(data1+letraPulsada+data2);*/
      }
      /*if($("#boton2").hasClass('btnpressed')){
        $("#editor").html(data1+"<em>"+letraPulsada+"</em>"+data2);

      }else{
        $("#editor").html(data1+letraPulsada+data2);
      }*/

  }); 

});




$(function() {
            $(".btn").click(function() {
              if($(this).hasClass('btnnopressed')){
                  $(this).removeClass('btnnopressed');
                  $(this).addClass('btnpressed'); //change with .activatebutton
              }else{    
                  $(this).removeClass('btnpressed');
                  $(this).addClass('btnnopressed');
              }
             });

            //etc
      });


function addNodetoText(authResult) {




}




function calculateSelectionData(){
  if (window.getSelection) {
          sel = window.getSelection();
          if (sel.rangeCount) {
              range = sel.getRangeAt(0);
              
              var Ancestorpadre=range.commonAncestorContainer;
              
              longitud=Ancestorpadre.length;
              posicion=sel;

              
              
              var padre=Ancestorpadre.parentNode;
              console.log(padre.tagName);
              
              var abuelo=padre.parentNode;
              console.log("-"+ abuelo.tagName);
              
              var tataraAbuelo=abuelo.parentNode;
              console.log("--"+ tataraAbuelo.tagName);

          }
  }

}
