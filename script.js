let objTelefono = {
  marca: "sony",
  modelo: "jc5",
  camara: true,
  colores: ["rojo", "verde", "azul"],
  informacion: {
    peso: "120g",
    alto: "21cm",
    ancho: "12cm",
  },

  llamar: () => console.log("El telefono esta llamando"),
  sonarAlarma: () => console.log("la alarama esta sonando"),
};

//recorrer un object:
for (let key in objTelefono) {
  console.log(key);
  console.log(objTelefono[key]);
}

// OBJECT METHOD
// ALMACENAR LAS LLAVES EN UN ARRAY
let llaves = Object.keys(objTelefono);
let valores = Object.values(objTelefono);
console.log(llaves);
console.log(valores);

//clone and object: must use spread, otherwise any change to either version will affect the other
let persona = {
  nombre: "Pepe",
  edad: 19,
  contacto: {
    ciudad: "Madrid",
    telefono: 1234567,
    correo: "pepe@pepe.es",
  },
};

const persona3 = {
  ...persona,
  profesion: "pintor",
};
console.log(persona3);
persona3.nombre = "juan";
console.log(persona3);

//SPREAD OPERATOR
//takes array and converts to individual values (e.g. so that can do math with them etc.)
let miArray = [2, 5, 7, 1, 9];
let minimo = Math.min(...miArray);

// merge arrays
let misConocimientos = [
  "variables",
  "operadores",
  "estructuras de control",
  "funciones",
];
let aprendido = ["rest operator", "spread operator"];
let misConocimientosAmpliados = [
  ...misConocimientos,
  ...aprendido,
  "otra cosa más",
];

//merge objects
const user1 = {
  name: "Jen",
  age: 22,
};

const user2 = {
  name: "Andrew",
  location: "Philadelphia",
};
//key "name" exists twice, value of first will be overwritten by value of second
const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);

//REST
//Rest recoge múltiples elementos y los 'condensa' en uno solo
function add(...rest) {
  // series of numbers passed as argument (e.g.line 93,94,95) are condensed en an array so as to use to for loop
  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}

console.log(add(1)); // returns 1
console.log(add(1, 2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15

//another example
function xyz(x, y, ...z) {
  console.log(x, " ", y); // hey hello

  console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]); // wassup
  console.log(z.length); // 4
}
xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");

//DESTRUCTURING
//arrays

// Guarda a=3 y b=6
let list = [3, 5, 6];
let [a, , b] = list; //let a=b and let b=6
console.log(a);
console.log(b);

// Asignar nombres de parámetros a objetos que pasas por una función
function imprime([name, val]) {
  console.log(`${name}, buenos ${val}`);
}
imprime(["hola", "dias"]);

// Fail-Soft Destructuring
let list2 = [33, 2];
let [n = 3, o = 4, p = 5, q] = list2;
console.log(list2);

//objects

// asignación básica
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user; //like saying,let id=42 and let is_verified=true

console.log(id); // 42
console.log(is_verified); // true

// asignar nuevos nombres de variable
const e = { f: 42, g: true };
const { f: foo, g: bar } = e; //key f will now be called foo (value stays the same), key g is now called bar

console.log(foo); // 42
console.log(bar); // true

// Valores predeterminados
const { h = 10, i = 5 } = { h: 3 };

console.log(h); // 3
console.log(i); // 5
