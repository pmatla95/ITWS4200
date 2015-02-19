$(document).ready(function(){
	var tweets;
	var hashtags;
	var num_hashtags = 0;
	var avg_hashtags = 0.0;
	var num_chars = 0;
	var avg_chars = 0.0;
	var num_tweets = 0;
	$.getJSON("tweets.json", function(result) { //reads the tweets.json file
		//loop through all the tweets
		for (i=0; i < result.length; i++) {
			num_tweets ++; //for the bonus stats
			//adds the name of the user
			$("#tweets").append("<div class='text'> <h5> " + result[i].user["name"] + "</h5> <p>" + result[i].text + "</p> </div>");
			for (j =0; j < result[i].text.length; j++) {
				num_chars ++; //for the bonus stats
			}
			for (j =0; j < result[i].text.length; j++) {
				if (result[i].text[j] == '#') { //looks for hashtags
					num_hashtags ++; //for the bonus stats
					var string = "";
					while (result[i].text[j] != ' ') { //gets the entire hashtag
						string += result[i].text[j];
						j++;
						if (j == result[i].text.length) {
							break;
						}
					}
					//appends the hashtag string
					$("#hashtags").append("<div class='text'> <p> " + string + "</p> </div>");
					break;
				}
			}
		}
		avg_hashtags = (num_hashtags/num_tweets).toFixed(2);
		avg_chars = (num_chars/num_tweets).toFixed(2);
		//adds all the stats to the stats column
		$("#stats").append("<div class='text'> <p> The total number of tweets are: " + num_tweets + "</p> </div>");
		$("#stats").append("<div class='text'> <p> The total number of characters are: " + num_chars + "</p> </div>"); 
		$("#stats").append("<div class='text'> <p> The average number of characters per tweet are: " + avg_chars + "</p> </div>"); 
		$("#stats").append("<div class='text'> <p> The total number of hashtags are: " + num_hashtags + "</p> </div>"); 
		$("#stats").append("<div class='text'> <p> The average number of hashtags per tweet are: " + avg_hashtags + "</p> </div>");  
	});
});