const request = require('request')

const get = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a81c536b0828a1a400302aa7a185e08b&query=' 
        + lattitude + ',' + longitude

    request({url, json: true}, (error, response, {current}) => {
        if(error) {
            callback('Unable to connect to weather service!')
        } else if(response.body.error) {
            callback('Unable to find location')
        } else {
            const temparature = current.temperature
            const feelslike   = current.feelslike
            const description = current.weather_descriptions[0]
            callback(undefined, {temparature, feelslike, description})
        }    
    })
}

module.exports = {
    get: get
}