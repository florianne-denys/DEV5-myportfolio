export default class Photo {
    constructor(api_key) {
        this.apiKey = api_key;
        this.getPhoto();

    }

    getPhoto() {
        const query = "nature";

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