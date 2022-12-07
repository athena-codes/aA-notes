// USING XHR - XML/HTTP request object

function showCountries() {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

    xhr.onload = function() {
      if(xhr.status == 200) {
        console.log('Success')
        let countries = JSON.parse(this.response)
        console.log(countries)
        countries.forEach(country => {
           const countryCard = document.createElement('div')
           countryNameKey = country.name
           countryName = countryNameKey.common
           countryCard.innerHTML = countryName
           document.getElementById('feed').appendChild(countryCard)
           const countryCardImage = document.createElement('img')
           countryFlag = country.flags
           countryCardImage.src = countryFlag.png
           countryCard.appendChild(countryCardImage)

        })
      }
    }
    xhr.send()
}
