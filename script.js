console.log("loaded");

$(document).ready(function(){ //checks to make sure HTML is done loading before trying to run any JS inside of this function. Just a failsafe even though JS and CSS are loaded at the bottom of HTML.
  $.get('https://www.reddit.com/r/funny/.json').done(function(responseBody){
    console.log("success", responseBody);
  });
});
