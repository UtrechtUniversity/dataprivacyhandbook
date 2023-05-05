// Section anchors
$(document).ready(function() {

  // Section anchors
  $('.section h1, .section h2, .section h3, .section h4, .section h5').each(function() {
    anchor = '#' + $(this).parent().attr('id');
    $(this).addClass("hasAnchor").prepend('<a href="' + anchor + '" class="anchor"></a>');
  });
});

// Copy code button
$(document).ready(function() {

  // Copy Button
  $chunks = $('pre.sourceCode > code.sourceCode');
  $chunks.each(function(i, val) {
    $(this).prepend("<button class=\"button copy\"><i class=\"fa fa-copy fa-2x\"></i></button>").click(function() {
      var $temp = $("<textarea>");
      $("body").append($temp);
      var content = $(this).clone().children("button").remove().end().text();
      $temp.val(content).select();
      document.execCommand("copy");
      $temp.remove();
    });
  });
  
});

// Collapsibles animated
// Source https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol
//var coll = document.getElementsByClassName("collapsible");
//var i;

//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.maxHeight){
//      content.style.maxHeight = null;
//    } else {
//      content.style.maxHeight = content.scrollHeight + "px";
//    } 
//  });
//}