const input = document.querySelector('#input')
const button = document.querySelector('#button')
const capital = document.querySelector('#capital')
const region = document.querySelector('#region')
const population = document.querySelector('#population')
const currency = document.querySelector('#currency')
const flag = document.querySelector('#flag')

button.addEventListener('click', (e) => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText)
            const match = data.find((country) => country.name.toLowerCase() === input.value.toLowerCase())
            capital.innerHTML = `The capital of ${match.name} is ${match.capital}`
            region.innerHTML = `${match.name} is located in the ${match.subregion} subregion of ${match.region}`
            population.innerHTML = `${match.name} has a population of ${match.population}!`
            currency.innerHTML = `${match.name} uses the ${match.currencies[0].name} as their primary currency`
            flag.innerHTML = `
            <label>Here's what ${match.name}'s flag looks like:</label>
            <img src="${match.flag}" width="280px" height="168px">
            `
        } else {
            console.log('error')
        }
    }
    request.send()
})