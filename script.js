console.log("loaded");

$(document).ready(function(){ //checks to make sure HTML is done loading before trying to run any JS inside of this function. Just a failsafe even though JS and CSS are loaded at the bottom of HTML.
  $.get('https://www.reddit.com/r/funny/.json').done(function(responseBody){
    console.log("success");

    var data = responseBody.data.children;
    console.log(data.length);
    console.log(data);

    for (var i = 0; i < data.length; i++){
      var title = responseBody.data.children[i].data.title;
      var url = responseBody.data.children[i].data.url;

      var newElement = $("<p>").html(title);
      $(document.body).append(newElement);
      // $("body").append(responseBody.data.children[i].data.title);
    }
    // $("body").append(responseBody.data.children[0].data.title);
  });
});
