// a.
function suma(number1, number2) {
  return number1 + number2;
}

console.log(suma(20, 10));

// b.
function suma2(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    // alert("Uno de los valores no es un numero.");
    return NaN;
  } else {
    return number1 + number2;
  }
}
console.log(suma2(20, "hola"));

// c.
function validateInteger(number) {
  return Number.isInteger(number);
}

console.log(validateInteger(24.5));

// d.
function suma3(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    // alert("Uno de los parámetros no es un número.");
    return NaN;
  } else {
    if (!validateInteger(number1) || !validateInteger(number2)) {
      // alert("Uno de los parámetros tiene decimales.");
      return Math.round(number1) + Math.round(number2);
    } else {
      return number1 + number2;
    }
  }
}

console.log(suma3(4, 2.89));

// e.
function suma4(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    // alert("Uno de los parámetros no es un número.");
    return NaN;
  } else {
    if (!validateIntegers(number1, number2)) {
      // alert("Uno de los parámetros tiene decimales.");
      return Math.round(number1) + Math.round(number2);
    } else {
      return number1 + number2;
    }
  }
}

function validateIntegers(number1, number2) {
  if (Number.isInteger(number1) && Number.isInteger(number2)) {
    return true;
  } else {
    if (number1 !== Math.floor(number1) || number2 !== Math.floor(number2)) {
      return false;
    }
  }
}

console.log(suma4(1.5, 2.89));
