
/* What should the add-on do after it is installed */
function onInstall() {
  onOpen();

}

/* What should the add-on do when a document is opened */
function onOpen() {
  SlidesApp.getUi()
  .createAddonMenu() // Add a new option in the Google Slides Add-ons Menu
  .addItem("Generator", "showSidebar")
  .addToUi();  // Run the showSidebar function when someone clicks the menu
}


/* Show a 300px sidebar with the HTML from htmlstuff.html */
function showSidebar() {
  var html = HtmlService.createTemplateFromFile("htmlstuff")
    .evaluate()
    .setTitle("Slides Background"); // The title shows in the sidebar
  SlidesApp.getUi().showSidebar(html);
}

/* This Google Script function does all the magic. */

function checkMultipleAccountIssue() {
  var owner = Session.getEffectiveUser().getEmail();
//  var current = Session.getActiveUser().getEmail();
  return owner;
}


function addImageSlide(img) {
  var blobImg = Utilities.newBlob(Utilities.base64Decode(img), 'image/png',"Your Generated Background");
  var pres = SlidesApp.getActivePresentation()
  var slide = pres.getSelection().getCurrentPage();
  var image = slide.getBackground().setPictureFill(blobImg); 
}

function addImage(img) {
  
//  var blobImg = Utilities.newBlob(Utilities.base64Decode(img), 'image/png',"Your Generated Background");
  if(img == null)
  {
    return;
  }
  var blobImg = Utilities.newBlob(Utilities.base64Decode(img), 'image/png',"Your Generated Background");
  var slide = SlidesApp.getActivePresentation().getSelection().getCurrentPage();
  var image = slide.insertImage(blobImg); 
}
