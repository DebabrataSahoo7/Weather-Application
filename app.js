
async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById("weather-result").innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        document.getElementById("weather-result").innerHTML = `<p>Error fetching data</p>`;
    }
}
