console.log("loaded");

$(document).ready(function(){ //checks to make sure HTML is done loading before trying to run any JS inside of this function. Just a failsafe even though JS and CSS are loaded at the bottom of HTML.
  $.get('https://www.reddit.com/r/funny/.json').done(function(responseBody){
    console.log("success");

    var payload = responseBody.data.children; //all of the info from reddit that I need

    payload.forEach(function(i){
      $('.container').append('<div class="post"><p class = "title">' + i.data.title +
      '</p><p class = "author">Posted by: ' + i.data.author + ' to /r/' + i.data.subreddit +
      '</p><p class = "score">Score: +' + i.data.score + '<br><img src=' + i.data.thumbnail + '></div>');
    })
  });
});
