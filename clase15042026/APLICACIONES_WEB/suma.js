a = process.argv[2];
b = process.argv[3];

function suma(a, b) {
    return a + b;
}
 function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return (a / b).toFixed(2);
}

console.log("La suma de " + a + " y " + b + " es: " + suma(Number(a), Number(b)));
console.log("La resta de " + a + " y " + b + " es: " + restar(Number(a), Number(b)));
console.log("La multiplicación de " + a + " y " + b + " es: " + multiplicar(Number(a), Number(b)));
console.log("La división de " + a + " y " + b + " es: " + dividir(Number(a), Number(b)));