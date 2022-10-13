export default class Weather {
    constructor(api_key) {
      this.apiKey = api_key;
  
      // check if there is data in local storage
      // check if timestamp is older than 10 minutes
      if (localStorage.getItem("weather") && Date.now()-localStorage.getItem("timestamp") < 600000) {
          const weatherData = JSON.parse(localStorage.getItem("weather"));
          
          this.displayWeather(weatherData);
          console.log("cache");
      }else{
          this.getLocation();
      }
  
  
      this.getLocation();
    }
  
    getLocation() {
      // check if geolocation is available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }
  
    getWeather(position){
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
    
      fetch(url)
          .then(response => response.json())
          .then(data => {
              // svae to local storage
              localStorage.setItem("weather", JSON.stringify(data));
              // save timestamp
              localStorage.setItem("timestamp", Date.now());
  
              this.displayWeather(data);
          });
    }
  
      displayWeather(data){
        console.log(data)
          const temp = data.main.temp;
          document.querySelector(".weather__temp").innerText = temp + "°C";
  
          const weather = data.weather[0].main;
          document.querySelector(".weather__summary").innerText = weather;

          const description = data.weather[0].description;
          document.querySelector(".weather__subsummary").innerText = description;
  
          const icon = data.weather[0].icon;
          const img = document.createElement("img");
          img.src = "http://openweathermap.org/img/w/" + icon + ".png";
          document.querySelector(".weather__icon").appendChild(img);
  
      }
      
    }
  
    