// a.
var array = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(array[4], array[10]);

// b.
console.log(array.sort());

// c.
array.unshift("Inicio");
array.push("Fin");
console.log(array);

// d.
array.shift();
array.pop();
console.log(array);

// e.
console.log(array.reverse());

// f.
console.log(array.join("-"));

// 7.
var array = [];
array.push(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
var newArray = array.slice(4, 11);
console.log(newArray);
