//Brent Marohnic
// AVF 1211
// Full Sail University
//
//

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady (){
}

$(function () {
  $.getJSON("http://search.twitter.com/search.json?q=tony%20horton&from=Tony_Horton&rpp=6&include_entities=true&result_type=recent&callback=?",
            function(data) {
			console.log(data);
			$("#pTweets").text("Got Your Tweets!!!");
			
            for (i=0, j=data.results.length; i<j; i++)
			// alert(data.results[i].text);
			
			$("#ulTweets").append("<li class= 'sub' id='twit" + i + "'>" +
                                  "<p class='ts'>" +
                                  data.results[i].created_at +
                                  "</p>" +
                                  "<p class='sub'>" +
                                  data.results[i].text +
                                  "</p>" +
                                  "</li>"
                                  );
            });
  })

