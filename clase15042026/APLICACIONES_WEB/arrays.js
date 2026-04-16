let nombres= ["Carlos", "Ana", "Luis", "Maria"];
nombres.forEach(nombres => {
     console.log("Hola, " + nombres);
});

// objetos 

let persona={
    nombre: "Carlos",
    edad: 26,
    ciudad: "Quito"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

// Evaluar edad 

const evaluarEdad = (edad) => {
    return edad >=18 ? "Eres mayor de edad" : "Eres menor de edad";
}   
console.log(evaluarEdad(20));

// Filtrar datos 

let edades = [15, 22, 30, 17, 25];
let mayores = edades.filter(e => e >= 18);
let menores = edades.filter(e => e < 18);
console.log("Edades mayores de 18: " + mayores);
console.log("Edades menores de 18: " + menores);

// transformar datos con map

let numeros = [1, 2, 3, 4, 5];
let dobles = numeros.map(n => n * 2);
let triples = numeros.map(n => n * 3);
let cuadruples = numeros.map(n => n * 4);
console.log("Números dobles: " + dobles);
console.log("Números triples: " + triples);
console.log("Números cuadruples: " + cuadruples);

// acumular con reduce 

let numeros2 = [1, 2, 3, 4, 5];
let suma = numeros2.reduce((acc, n) => acc + n, 0);
console.log("La suma de los números es: " + suma);

// array de objetos 

let productos =[
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];

let caros = productos.filter(p => p.precio > 50);
console.log(caros);

let baratos = productos.filter(p => p.precio <= 50);
console.log(baratos);   