async function cargarPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al cargar los posts: " + error);
    } finally {
        console.log("carga de posts finalizado");
    }
}

cargarPosts();  