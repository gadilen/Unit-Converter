const inputEl = document.getElementById("input")

const metFeetEl = document.getElementById("metFeet")
const feetMetEl = document.getElementById("feetMet")
const litGalEl = document.getElementById("litGal")
const galLitEl = document.getElementById("galLit")
const kilPndEl = document.getElementById("kilPnd")
const pndKilEl = document.getElementById("pndKil")

const btnEl = document.getElementById("btnEl")


function meterToFoot () {

const value = Number(inputEl.value)
let conversion = value * 3.281

if (value > 0 || value > 1) {

metFeetEl.textContent = `${value} meters = ${conversion.toFixed(3)} feet`


} else if (value === 1) {

metFeetEl.textContent = `${value} meter = ${conversion.toFixed(3)} feet`

} else if (value < 0) {

metFeetEl.textContent = "N/A"

}

}


function footToMeter () {

const value = Number(inputEl.value)
let conversion = value / 3.281

if (value > 0 || value > 1) {

feetMetEl.textContent = `${value} feet = ${conversion.toFixed(3)} meters`

} else if (value === 1) {

feetMetEl.textContent = `${value} foot = ${conversion.toFixed(3)} meters`

} else if (value < 0) {

feetMetEl.textContent = "N/A"

}

}


function literToGallon () {

const value = Number(inputEl.value)
let conversion = value * 0.264

if (value > 0 || value > 1) {

litGalEl.textContent = `${input.value} liters = ${conversion.toFixed(3)} gallons`

} else if (value === 1) {

litGalEl.textContent = `${value} liter = ${conversion.toFixed(3)} gallons`

} else if (value < 0) {

litGalEl.textContent = "N/A"

}

}

function gallonToLiter () {

const value = Number(inputEl.value)
let conversion = value / 0.264

if (value > 0 || value > 1) {

galLitEl.textContent = `${value} gallons = ${conversion.toFixed(3)} liters`

} else if (value === 1) {

galLitEl.textContent = `${value} gallon = ${conversion.toFixed(3)} liters`

} else if (value < 0) {

galLitEl.textContent = "N/A"

}

}


function kiloToPound () {

const value = Number(inputEl.value)
let conversion = value * 2.204

if (value > 0 || value > 1) {

kilPndEl.textContent = `${value} kilos = ${conversion.toFixed(3)} pounds`

} else if (value === 1) {

kilPndEl.textContent = `${value} kilo = ${conversion.toFixed(3)} pounds`

} else if (value < 0) {

kilPndEl.textContent = "N/A"

}

}


function poundToKilo () {

const value = Number(inputEl.value)
let conversion = value / 2.204

if (value > 0 || value > 1) {

pndKilEl.textContent = `${value} pounds = ${conversion.toFixed(3)} kilos`

} else if (value === 1) {

pndKilEl.textContent = `${value} pound = ${conversion.toFixed(3)} kilos`

} else if (value < 0) {

pndKilEl.textContent = "N/A"

}

}






btnEl.addEventListener("click", function() {

meterToFoot()
footToMeter()
literToGallon()
gallonToLiter()
kiloToPound()
poundToKilo()


})

 