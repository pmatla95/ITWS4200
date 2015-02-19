Peter Matla
2/14/15
Web Science
Lab 2 Read.me

Weather API:
	For the weather API application, I used bootstrap as a framework to put a jumbotron on the index page, with a tab above to access the original page after making a request to the API. After pressing the 'Get Location' button, the javascript makes a request to forecast.io with its geolocaion, and returns a JSON file of data for parsing. 

	Parts of the weather shown include:
	Summary with Icon.
	Temperature (in degrees F).
	Humidity (converted to %).
	Wind Speed (in mph).

CHANGES/NOTES:
	The call 'data.currently.icon' is used to get the summary icon for display. The default icon is a Sun, unless otherwise specified.