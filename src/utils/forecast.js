const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3e3b38410cdd49f5fc5523b3162e9402&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location! Try another search', undefined)
        } else {
            callback(undefined, {
                time: body.location.localtime,
                weather: body.current.weather_descriptions,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                rain: body.current.precip,
                cloud: body.current.cloudcover,
                humid: body.current.humidity,
                wind: body.current.wind_speed
            })
        }

    })
}

module.exports = forecast