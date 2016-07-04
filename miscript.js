
var idNuevo= 0;

       jQuery(document).ready(function($) {
       //     new EasyEditor('#editor', {
       //         buttons: ['bold', 'italic', 'link', 'h2', 'h3', 'h4', 'alignleft', 'aligncenter', 'alignright', 'custombutton']
        //    });
        });


window.onload = resizeDIV;



function resizeDIV() {
    var total= $( window ).height();
    var menu= $( "#formatting-container" ).height();

    var diferencia=total-menu-89;

    $( "#editor-container" ).height(diferencia); 
}





$(function () {
	$( "#tipotexto" ).click(function() {
		var addHTML="<div id='TextBoxDiv1'><input type='textbox' id='textbox1' ></div>";
		var addTextAreaHTML="<div id='TextBoxDiv1'><textarea data-autoresize rows='2'></textarea></div>";
		$( "#main" ).append(addTextAreaHTML);

	  
		jQuery.each(jQuery('textarea[data-autoresize]'), function() {

			
		    var offset = this.offsetHeight - this.clientHeight;
		 
		    var resizeTextarea = function(el) {
		        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
		    };
		    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
		});

	});	

});	

$(function () {

	$( "#tipoEnlace" ).click(function() {

		
		//chrome.tabs.create({"url": "http://google.com"});

		


		chrome.tabs.query({ active: true}, function (tabs) {
			var tabActiva = tabs[0];
			  //alert (tabActiva.url);
			  //var addHTMLa="<div id='TextBoxDiv2'><a href='"+tabActiva.url+"'>"+tabActiva.url+"</a></div>";
	    	idNuevo=idNuevo+1;
			var newID="input"+idNuevo;  
	    	var addHTMLa="<div id='TextBoxDiv2'><label id='"+newID+"' class='enlace' >"+tabActiva.url+"</label></div>";

			$( "#main" ).append(addHTMLa);

		  	$( "#"+newID ).click(function() {

		  		

				chrome.tabs.create({"url": $(this).text()});
				

			});


   			
		});


		chrome.tabs.getSelected(null, function(tab) {
			  var url1 = tab.url;

			  //alert (url1);
			  
		});



		
	});




});

$(function () {
$( "#authorize-button" ).click(function() {
	
	handleAuthClick(event);
	});
});	


$(function () {
	$( "#activar-button" ).click(function() {
		
		alert("Dentro");

		//chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
	  // Use the token.

	  	checkAuth();


		//});
	});
});	


//CUIDADO , cada vez que cargamos la extension se modifica el id de la extension y hay que cambiarlo en la consola



 // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '790289388639-0t649gisborqm9oa0h2lhn0c4c8uhebu.apps.googleusercontent.com';

      var SCOPES = ['https://www.googleapis.com/auth/drive'];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {

      	alert ("entrada"); 
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);

			       
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
        	
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadDriveApi();
        } else {
        	
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Drive API client library.
       */
      function loadDriveApi() {
        gapi.client.load('drive', 'v3', listFiles);
      }

      /**
       * Print files.
       */
      function listFiles() {
        var request = gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name)"
          });

          request.execute(function(resp) {
            appendPre('Files:');
            var files = resp.files;
            if (files && files.length > 0) {
              for (var i = 0; i < files.length; i++) {
                var file = files[i];
                appendPre(file.name + ' (' + file.id + ')');
              }
            } else {
              appendPre('No files found.');
            }
          });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }


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