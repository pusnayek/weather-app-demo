const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode.get(process.argv[2], (error, {lattitude, longitude, placeName}) => {
    if(error) {
        return console.log(error)
    } 
    console.log(placeName)
    forecast.get(lattitude, longitude, (error, {description, temparature, feelslike}) => {
        if(error) {
            return console.log(error)
        }
        console.log(description, '-It is ' + temparature + ' degrees out, feels like ' + feelslike + ' degrees')
    })
})



