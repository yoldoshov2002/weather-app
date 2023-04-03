const api = {
    key: 'ef1b5a235e32f53ecf4bb1dcccdc404f',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');


searchBox.addEventListener('keypress',setQuery);


function setQuery(e) {
    if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults)
}


function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
     let date = document.querySelector('.location .data')
     date.innerHTML = dateBuilder(now)

     let temp = document.querySelector('.temp')
     temp.innerHTML = `${Math.round(weather.main.temp)} °C`
     
     let weatherEl = document.querySelector('.weather')
     weatherEl.innerHTML = weather.weather[0].main

     let hilow = document.querySelector('.hi-low')
     hilow.innerHTML = `${Math.round(weather.main.temp_min)} °C / ${Math.round(weather.main.temp_max)} °C`
}

function dateBuilder(e){
    let months = ['January',
     'February',
      'March',
      'April',
      'May',
      'June',
      'July',
       'August',
       'September',
       'Octomber',
       'November',
       'December'
]
 let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednezday',
    'Thursday',
    'Friday',
    'Saturday'
 ]
 let day = days[e.getDay()];
 let date = e.getDate()
 let month = months[e.getMonth()]
 let year = e.getFullYear()

 return `${day} ${date},${month},${year}`
}

