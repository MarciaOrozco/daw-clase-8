// a.
var random = Math.random();
if (random > 0.5) {
  console.log("Greater than 0.5");
} else {
  console.log("Lower than 0.5");
}

// b.
var age = Math.floor(Math.random() * 101);
console.log(age);

if (age < 2) {
  console.log("Bebe");
} else if (age <= 12) {
  console.log("Niño");
} else if (age <= 19) {
  console.log("Adolescente");
} else if (age <= 30) {
  console.log("Joven");
} else if (age <= 60) {
  console.log("Adulto");
} else if (age <= 75) {
  console.log("Adulto mayor");
} else {
  console.log("Anciano");
}
