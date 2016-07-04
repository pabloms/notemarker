$(document).ready(function(){

  // helper function credit to http://stackoverflow.com/questions/3972014/get-caret-position-in-contenteditable-div
  function getCaretPosition(editableDiv) {
    var caretPos = 0, containerEl = null, sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
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

  $("#myButton").on("click", function(){

    // sorry about this, this can and should be refactored
    var data1 = $("#myDiv").text().slice(0, position);
    var data2 = $("#myDiv").text().slice(position,$("#myDiv").text().length);

    $("#myDiv").html("<span>" + data1 + mySpan + data2 + "</span>");

  });


});