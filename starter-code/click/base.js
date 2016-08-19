console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function handleClick(event){
  var clickedExclamation = "You clicked: " + $(this).text() + " at " + Date.now();
  $("ul").append("<li>" + clickedExclamation + "</li>")
  })
})
