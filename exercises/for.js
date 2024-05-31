// a.
var array = ["hola", "manola", "tres", "cuatro", "ultima"];
for (let i = 0; i < array.length; i++) {
  // alert(array[i]);
}

// b.
for (let i = 0; i < array.length; i++) {
  // alert(
  //   array[i].substring(0, 1).toUpperCase() +
  //     array[i].substring(1, array[i].length)
  // );
}

// c.
var sentence = "";
for (let i = 0; i < array.length; i++) {
  sentence = sentence + array[i];
}
// alert(sentence);

// d.
var arrayVacio = [];
for (let i = 0; i < 10; i++) {
  arrayVacio.push(i);
}
console.log(arrayVacio);
