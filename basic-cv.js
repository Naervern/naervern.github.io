var menuW, bodyW;
var updateSize = function() {
  // Get the menu size
  menuW = $(".menu").width();
  // Get the body size
  bodyW = $("body").width();
  // Update menu with body size
  $(".menu").css("maxWidth", bodyW);
}

// If you need this to happen on window resize
$(window).resize(function() {
  updateSize();
});

// Update the size at the script load
updateSize();

function updateCertPreview() {
  
}

function previewCert1(link){
  document.getElementById('preview-box1').innerHTML= link.startsWith("resources/") ? '<img src="' + link + '"/>' : '<img src="https://' +link + '" id="preview-1"/>' ;
  return 0;
}

var lastField;

function updateField1(){
  //lastField.style.setProperty("color", "white");
  event.currentTarget.style.setProperty("color", "orange");
  //lastField = event.currentTarget;
}

