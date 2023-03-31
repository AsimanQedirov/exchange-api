// api
const api = "https://api.apilayer.com/exchangerates_data/convert?"
const currency = 'https://openexchangerates.org/api/currencies.json'
// elements

const el_currency_from = document.getElementById('currency_one')
const el_currency_to = document.getElementById('currency_two')
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
        el_currency_from.innerHTML += options
        el_currency_to.innerHTML += options
    });

el_btn_calculate.addEventListener('click', function () {
    const api_key = 'Pd4O3bo2AUvGK1IJzdmW2FleI2gpMaJX'
    var myHeaders = new Headers();
    myHeaders.append("apikey", api_key);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    let from = el_currency_from.value;
    let to = el_currency_to.value;
    let amo = amount.value;
   
    el_currency_from.style.borderColor = "black";
    el_currency_to.style.borderColor = "black";
    amount.style.borderColor = "black";

    if (!from) {
        el_currency_from.style.borderColor = "red";
    }
    if (!to) {
        el_currency_to.style.borderColor = "red";
    }
    if (!amo) {
        amount.style.borderColor = "red";
    }
    if (from && to && amo) {
        fetch(`${api}to=${to}&from=${from}&amount=${amo}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                let rate = res.result
                result.innerHTML = `${amo} ${from} = ${rate} ${to}`
            })
    }

})