Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Primera promesa resuelta"), 3000)),
    new Promise(resolve => setTimeout(() => resolve("Segunda promesa resuelta"), 2000)),
    new Promise(resolve => setTimeout(() => resolve("Tercera promesa resuelta"), 1000))
])
.then(resultado => console.log("Resultado de Promise.race: " + resultado))
.catch(error => console.error(error))
.finally(() => console.log("Proceso de Promise.race finalizado"));