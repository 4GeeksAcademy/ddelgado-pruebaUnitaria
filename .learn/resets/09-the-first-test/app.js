const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))






let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen =  (dollar) => {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY
}

const fromEuroToDollar =  (euros) => {
    return  euros * oneEuroIs.USD;
}

const fromYenToPound =  (yen) => {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP
}

module.exports = { sum,fromDollarToYen, fromEuroToDollar, fromYenToPound};