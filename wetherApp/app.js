
// Init Weather class
const weather = new Weather('Ashkelon', 'IL');
// Init UI class
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// call getWeather on dome load

function getWeather() {
    weather.getData()
        .then(res => {
            ui.paint(res);
        })
        .catch(err => console.log(err));
}