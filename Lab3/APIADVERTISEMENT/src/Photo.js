export default class Photo {
    constructor(api_key) {
        this.apiKey = api_key;
        // check if there is data in local storage
        if (localStorage.getItem("photo") && Date.now()-localStorage.getItem("timestamp") < 600000) {
            const photo = JSON.parse(localStorage.getItem("photo"));
            this.displayPhoto(photo);
            console.log("cache");
        }else{
            this.getPhoto();
        }

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
                localStorage.setItem("photo", JSON.stringify(data.photos));
                localStorage.setItem("timestamp", Date.now());
                this.displayPhoto(data.photos);
            });
    }

    displayPhoto(data) {
        const img = document.createElement("img");
        img.src = data[0].src.medium;
        document.querySelector(".photo").appendChild(img);
    }

    
}