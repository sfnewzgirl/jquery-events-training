console.log("Sanity Check: JS is working!");

var startTime;
var endTime;
var totalTime;

$(document).ready(function(){

  $(window).on("keypress", function handleKeypress(event){

    if ( startTime ) {
      endTime = Date.now();
      totalTime = (endTime - startTime) / 1000;
      $("#total-time").text( totalTime + " seconds" )
    }  else {
      startTime = Date.now();
    }

  })

})
