// # Define Global Variables.
// You can edit the start/end times presented on the webpage!:
var start = 9;
var end = 18;


// jQuery
$(document).ready(function () {


// # Initialise the webpage
  // ## Set the clock to the current time:
  $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));

  // ## After 1s, and every second thereafter, update the current time and detect if the correct colours are displayed (which will take effect if the current hour changes):
  $(setInterval(function () {
    $("#currentDay").text(moment().format("hh:mm A, dddd Do MMMM"));
  }
  , 1000));
});