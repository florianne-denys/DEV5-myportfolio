export default class Photo {
    constructor(api_key) {
        this.apiKey = api_key;
        this.getPhoto();

    }

    getPhoto() {
        let query = "weather";
        //get weather from localstorage
        if (localStorage.getItem("weather") && Date.now()-localStorage.getItem("timestamp") < 600000) {
            const queryData = JSON.parse(localStorage.getItem("weather"));
            query = queryData.weather[0].main;
        }else{
            query = "weather";
        }
        
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1`;
        fetch(url, {
            headers: {
                "Authorization": this.apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.photos);
                this.displayPhoto(data.photos);
            });
    }

    displayPhoto(data) {
        const img = document.createElement("img");
        img.src = data[0].src.medium;
        document.querySelector(".photo").appendChild(img);
    }

    
}