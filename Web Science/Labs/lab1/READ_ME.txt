Peter Matla
2/08/15
Web Science
Lab 1 Read.me

Tweet Ticker:

	My tweet tickers main format was structured using foundations. A banner column shows the title of the site, followed by two columns to display 'tweets' and 'trending #'s'. The HTML doc is a skeleton that will allow the js .getJSON to populate the columns with the data read from the 'tweets.json' file. 

CHANGES/NOTES:
	
	I used jquery animation easy-ticker to make the tweets and hashtags cycle through the ticker smoothly. The tweets and hashtags pause cycling whenever the mouse is hovered over the columns. I also used CSS3 animations to 'blink' the title of the page, while changing its color of text periodically. 
	One change I have made to the site was to display the name of the user, rather than the photo of their profile picture. I noticed the majority (90%) of the image URL's no longer exist, so rather than populate the table with bad URL's, I thought it would be more useful to display the names of the people who have tweeted.

EXTRA:
	
	On top of the main functionality, I also added in a "stats" footer, that appears at the bottom of the page. Every 3 seconds it pans down, showing a new statistic about the tweets gathers (i.e. Number of Tweets, or Average Hashtags). It's a little addition I thought would be useful when analyzing general trends in data analysis.