const nombre = process.argv[3];

function saludar(nombre) {
    return `Hola ${nombre}, bienvenido!`;
}
console.log(saludar(nombre));