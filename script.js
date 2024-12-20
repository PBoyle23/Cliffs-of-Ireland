// Fetch weather data
const weatherAPIKey = '8c301b44d6224a96a9a202927241812';
const weatherEndpoint = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=Cliffs of Moher`;

fetch(weatherEndpoint)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
      <p>Temperature: ${data.current.temp_c}&#176;C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <p>Precipitation: ${data.current.precip_mm} mm</p>
      <p>Wind Direction: ${data.current.wind_dir}</p>
      <p>Wind Strength: ${data.current.wind_kph} kph</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
  })
  .catch(error => console.log('Error fetching weather data:', error));



// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
});



