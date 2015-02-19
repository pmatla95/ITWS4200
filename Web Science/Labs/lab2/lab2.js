//hides the weather data framework until request is made
$('#weather-info').hide();
var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) { 
    	//get the current latitude and longitude for the API request
        navigator.geolocation.getCurrentPosition(showWeather);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showIcon(data, icon) {
	//get the proper icon based upon the weather data
	if (icon == "partly-cloudy-night" || icon == "clear-night") {
        $('#location').html("<br><img src='icons/moon.png'> " + data.currently.icon);
	  }
	  else if (icon == "rain") {
	  	$('#location').html("<br><img src='icons/rain.png'> " + data.currently.icon);
	  }
	  else if (icon == "cloudy") {
	  	$('#location').html("<br><img src='icons/cloud.png'> " + data.currently.icon);
	  }
	  else if (icon == "wind") {
	  	$('#location').html("<br><img src='icons/wind.png'> " + data.currently.icon);
	  }
	  else if (icon == "snow") {
	  	$('#location').html("<br><img src='icons/snow.png'> " + data.currently.icon);
	  }
	  else {
	  	$('#location').html("<br><img src='icons/sunny.png'> " + data.currently.icon);
	  }
}

function showWeather(position) {
	//shows the weather, temperature, humidity, and wind speed
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    //makes the API call to forecast.io and has the return in JSON format
    $.getJSON("https://api.forecast.io/forecast/24ebede451bba3c8941078dec654e7b1/"  + 
    latitude + "," + longitude + "?callback=?", function(data) {
              //hides the button and replaces it with the weather display framework
              $('#replace').hide();
              $('#button').hide();
              $('#weather-info').show();

              //gets the icon for the weather
              var icon = data.currently.icon;
              showIcon(data, icon);

              //adds the temp, humidity and wind speed into the tabs within the jumbotron
              $('#temp').append(data.currently.temperature + " degrees F ");
              var humidity = data.currently.humidity;
              humidity *= 100;
              //converts humidity to %
              $('#humidity').append(humidity + " % ");
              $('#wind').append(data.currently.windSpeed + " mph");
    });
}