const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address) {
    return console.log("Provide a valid location");
}

geocode(address, (error, {latitude, longitude, location} = {}) => {
    
    if(error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {

        if(error) {
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    })
})

