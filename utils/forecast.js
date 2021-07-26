const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=09227b26688f1c11ab9c947594c169c0&query=' + latitude + "," +longitude;

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback("Unable to connect weather service!", undefined);
        }
        else if(body.error) {
            callback("Unable to find location!", undefined);
        }
        else {
            const temperature = body.current.temperature;
            const feelslike = body.current.feelslike;
            const data = body.current.weather_descriptions[0] + ". It is currently " +  temperature + " degress out. If feels like " +feelslike + " degrees out.";
            callback(undefined, data);
        }
    })
}

module.exports = forecast;
