// popup.js
chrome.runtime.sendMessage('pageActionClicked');

// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message === 'pageActionClicked') {
		alert("Hola");
	}
});




var tab_h=0;
var tab_w=0; 
var posLeft=0;
var scr_h=0;
var src_w=0;

chrome.browserAction.onClicked.addListener(function(tab) {
  //alert("Hola2");



  chrome.tabs.getSelected( function(tab){

  	tab_h=tab.height;
  	tab_w=tab.width;
  	scr_h=screen.width;
  	src_w=screen.width;

  	posLeft=src_w-380;
  	tab.title="Marcador";

  	alert("Width :" + tab_w + " , Height : " +  tab.height + " , Posicion left :" + posLeft + " Pantalla :" + screen.width + " , " + screen.height);

	//Activar panel de chrome
	chrome.windows.create({
	  url: 'Prueba2.html',
		"type": "panel",
		"focused": true,
		"width": 350,
		"height": 520 ,
		"top" : 100,
		"left" : posLeft
		
	  }, function(window) {
	  	//alert("Paso");
	  	//alert(window.tabs[0].title);
	  	//window.tabs[0].title="Marcador";
	    if (window.type === "panel") {
	      console.log("Panels enabled.")
	    } else {
	      console.log("Panels disabled.")
	      chrome.tabs.create({
	        url:"chrome://flags/#enable-panels"
	      }, function() {
	        alert("Please enable panels.")
	})  }  } 

	      ///alert(ventana.tabs[0].title);

	 );


  } );

	


//posLeft=1060;


});