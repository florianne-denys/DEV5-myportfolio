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
  
      const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}`
  
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
          const temp = data.current.temp_c;
          document.querySelector(".weather__temp").innerText = temp + "°C";
  
          const weather = data.current.condition.text;
          document.querySelector(".weather__summary").innerText = weather;
  
          const icon = data.current.condition.icon;
          //create an image element
          const img = document.createElement("img");
          img.src = icon;
          document.querySelector(".weather__icon").appendChild(img);
  
      }
      
    }
  
  
    // Change weather location
  //   changeLocation(city) {
  //     this.city = city;
  //   }