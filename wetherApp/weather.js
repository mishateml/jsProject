class Weather {
    constructor(city, state){
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

//    fetch weather from
   async getData() {
    const  response = fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);


    const responseData = await response.then(res => res.json()).catch(err => console.log(err))
    return responseData.current_observation;
    }

    // Change Weather Location

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}