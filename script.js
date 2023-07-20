 //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
//  5b8eeab282f080cbc1a64a6f96743709

const apiKey = "5b8eeab282f080cbc1a64a6f96743709"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector('.searchu')
const searchBtn = document.querySelector('.btn')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}` )
    
    if (response.status == 404){
        document.querySelector('.error').style.display = "block"
    }
    else{

        var data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round((data.main.temp))+"°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector('.weather').style.display = "block"
}

    }
    
    

searchBtn.onclick = () =>{
    checkWeather(searchBox.value)
}