const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return (a / b).toFixed(2);
}
console.log("La suma de 5 y 3 es: " + sumar(5, 3));
console.log("La resta de 5 y 3 es: " + restar(5, 3));
console.log("La multiplicación de 5 y 3 es: " + multiplicar(5, 3));
console.log("La división de 5 y 3 es: " + dividir(5, 3));