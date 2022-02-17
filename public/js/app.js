const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const place = document.querySelector('#place')
const time = document.querySelector('#time')
const des = document.querySelector('#des')
const temp = document.querySelector('#temp')
const rain = document.querySelector('#rain')
const cloud = document.querySelector('#cloud')
const humid = document.querySelector('#humid')
const wind = document.querySelector('#wind')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    place.textContent = 'Loading...'
    time.textContent = ''
    des.textContent = ''
    temp.textContent = ''
    rain.textContent = ''
    cloud.textContent = ''
    humid.textContent = ''
    wind.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return place.textContent = data.error
            }

            place.textContent = data.location
            time.textContent = data.time
            des.textContent = 'It is ' + data.weather + ' outside.'
            temp.textContent = 'It is currently ' + data.temperature + 'C. It feels like ' + data.feelslike + 'C.'
            rain.textContent = 'Precipation: ' + data.rain + '%'
            cloud.textContent = 'Cloud cover: ' + data.cloud + '%'
            humid.textContent = 'Humidity: ' + data.humid + '%'
            wind.textContent = 'Wind: ' + data.wind + 'km/hr'
        })
    })
})