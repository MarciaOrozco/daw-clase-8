// a.
var mayuscula = "desarrollo y arquitecturas web";
var mayusculaResultado = mayuscula.toUpperCase();
console.log(mayusculaResultado);

// b.
var string = "Sacando primeros 5 caracteres";
var stringRestultado = string.substring(0, 5);
console.log(stringRestultado);

// c.
var string2 = "Sacando ultimos 3 caracteres";
var string2Resultado = string2.substring(string2.length - 3, string2.length);
console.log(string2Resultado);

// d.
var string3 = "solo primera letra en mayuscula y el resto en minuscula";
var string3Resultado =
  string3.substring(0, 1).toUpperCase() +
  string3.substring(1, string3.length).toLowerCase();
console.log(string3Resultado);

// e.
var string4 = "Guardo primer espacio en blanco";
var string4Resultado = string4.indexOf(" ");
console.log(string4Resultado);

// f.
var string5 = "electroencefalografista esternocleidomastoideo";
var espacio = string5.indexOf(" ");
var string5Resultado =
  string5.substring(0, 1).toUpperCase() +
  string5.substring(1, espacio).toLowerCase() +
  " " +
  string5.substring(espacio + 1, espacio + 2).toUpperCase() +
  string5.substring(espacio + 2).toLowerCase();

console.log(string5Resultado);
