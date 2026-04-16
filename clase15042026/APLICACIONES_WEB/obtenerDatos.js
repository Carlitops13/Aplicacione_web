function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = { nombre: "Juan", edad: 30 };
            resolve(datos);
        }, 2000);
    });
}

obtenerDatos()
.then(data=> console.log(data))
.catch(error => console.error(error))
.finally(() => console.log("Proceso de obtención de datos finalizado"));    