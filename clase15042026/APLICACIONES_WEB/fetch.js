fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error al obtener los datos: " + error))
    .finally(() => console.log("Proceso de fetch finalizado"));

    