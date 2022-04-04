const request = require('request')

const get = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
        + encodeURIComponent(address) 
        + '.json?access_token=pk.eyJ1IjoicHVzbmF5ZWsiLCJhIjoiY2tzZmxxejNiMWJuZjJ6bzJ2d3B6MGpmZiJ9.BE_P0L8R1T2jA92q5AYfNg&limit=1'

    request({url, json: true}, (error, response, body) => {
        if(error) {
            callback('Unable to connect to location service!')
        } else if(response.body.features.length === 0) {
            callback('Unable to find location, try another search')
        } else {
            const lattitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const placeName = response.body.features[0].place_name
            callback(undefined, {lattitude, longitude, placeName})
        }    
    })
}

module.exports = {
    get: get
}