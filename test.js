//DollarToYen

test("One dollar should be 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const dollars = 3.5;
    const expected = (dollars / 1.07) * 156.5;

    expect(fromDollarToYen(dollars)).toBeCloseTo(expected, 5);
});



// fromEuroToDollar

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Defino los euros que quiero convertir
    const euro = 3.5;

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(euro);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = euro * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected, 5);
});

// fromYenToPound

test("One yen should be 0.0056 pounds", function() {
   const { fromYenToPound} = require('./app.js');

   const yen = 3.5;
   const expected = (yen / 156.5) * 0.87;

   expect(fromYenToPound(yen)).toBe(expected);
});


