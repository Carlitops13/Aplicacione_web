new Promise ((resolve, reject) => {
    reject("Error inicial");
})
.then(num => num * 2)
.then(num => num + 10)
.then(result => console.log(result))
.catch(error => console.error("Error capturado: " + error))
.finally(() => console.log("Proceso finalizado"));