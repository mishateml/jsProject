class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.detals = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.humidity = document.getElementById('w-humidity');
    }

    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temp_c;
        this.icon.setAttribute('src',weather.icon_url);
        this.humidity.textContent = `Relative Humidity ${weather.relative_humidity}`;
    }

}