// Init Storage class
const storage = new Storage();
// get Storage location data
const weatherLocation = storage.getLocationData();
// Init Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();


// GetWeather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city,state);
    storage.setLocationData(city,state);
    getWeather();
    document.getElementById('module--btn_close').click();

});
// call getWeather on dome load

function getWeather() {
    weather.getData()
        .then(res => {
            ui.paint(res);
        })
        .catch(err => console.log(err));
}