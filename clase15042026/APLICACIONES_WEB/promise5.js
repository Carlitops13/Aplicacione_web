Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
])
.then(resultados => console.log(resultados)) // Imprime [10, 20, 30]
.catch(error => console.error(error))
.finally(() => console.log("Proceso de Promise.all finalizado"));

