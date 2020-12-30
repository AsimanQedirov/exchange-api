// api
const api = "https://api.exchangeratesapi.io/"
const currency = 'https://openexchangerates.org/api/currencies.json'
// elements

const el_currency_one = document.getElementById('currency_one')
const el_currency_two = document.getElementById('currency_two')
const amount = document.getElementById('amount');
const el_btn_calculate = document.getElementById('btn_calculator')
var result = document.getElementById('result');
// load 
fetch(currency)
    .then(response => response.json())
    .then(res => {
        let options
        let keys = Object.keys(res)
        let values = Object.values(res)
        for (let index = 0; index < keys.length; index++) {
            options += `<option value=${keys[index]}>${values[index]}</option>`
        }
        el_currency_one.innerHTML += options
        el_currency_two.innerHTML += options
    })
el_btn_calculate.addEventListener('click', function () {
    let one = el_currency_one.value;
    let two = el_currency_two.value;
    let amo = amount.value;
    console.log(one)
    console.log(two)
    console.log(amo)
    fetch(`${api}latest?base=${one}`)
    .then(response=>response.json())
    .then(res => {
        let rate = res.rates[two]
        result.innerHTML = `${amo} ${one} = ${amo * rate} ${two}`
    })
})