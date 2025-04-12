function getweather() {
    const location = document.getElementById("location").value;
    const API_KEY = '230b1aec0d87494c9bf115002250904';
    const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

    fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = `
          <strong>Location:</strong> ${data.location.name}, ${data.location.country}<br>
          <strong>Temperature:</strong> ${data.current.temp_c}°C<br>
          <strong>Condition:</strong> ${data.current.condition.text}
        `;
        document.getElementById("data").innerHTML = weatherInfo;

        const iconUrl = "https:" + data.current.condition.icon;
        const iconImg = document.getElementById("weather-icon");
        iconImg.src = iconUrl;
        iconImg.alt = data.current.condition.text;
        iconImg.style.display = "block";
      })
      .catch(error => {
        document.getElementById("data").innerText = "Error: " + error.message;
        document.getElementById("weather-icon").style.display = "none";
      });
  }