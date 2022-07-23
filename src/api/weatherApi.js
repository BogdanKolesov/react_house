export const getWeatherData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8c21ad318emsh124be79f1654ad6p16a61bjsnac1900c450d9',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}