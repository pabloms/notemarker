function load() {
 chrome.windows.create({ 

      url: 'Prueba2.html',
      "type": "panel",
      "focused": true,
      "width": 350,
      "height": 520 ,
      "alwaysOnTop":true});
}


document.getElementsByTagName( 'body' )[0].onload = function() { load(); };
chrome.pageAction.onClicked.addListener(function(tab){
  alert("Hello\nHow are you?");
});