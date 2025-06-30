// tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// función de euro a dólar
function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

// función de dólar a yen
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
}

// función de yen a libra
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}

// exporto todas las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };