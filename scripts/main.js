//code for weather API

function getAPIdata() {

	var request = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&lang=nl&appid=3b517a51064be7e3fabc50f5d61b5dad';

    fetch(request)

    .then(function(response){
        return response.json();
    })

    .then(function(response) {
        console.log(response);
        var weatherBox = document.getElementById('weather');
        weatherBox.innetHTML = response;
        weatherBox.innerHTML = response.weather[0].description;
        weatherBox.innerHTML = response.main.temp;

        var degC = Math.floor(response.main.temp - 273.15);
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = degC + '&#176;C <br>';
        var icon = document.getElementsByClassName('icon');
        document.querySelector('.icon').src='http://openweathermap.org/img/w/10d.png';



    });

}




