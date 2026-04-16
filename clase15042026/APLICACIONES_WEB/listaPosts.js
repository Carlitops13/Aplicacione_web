const btnCargar = document.getElementById("btnCargar");
const listaPosts = document.getElementById("listaPosts");

btnCargar.addEventListener("click", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    listaPosts.innerHTML = ""; // Limpiar la lista antes de agregar nuevos posts

    data.slice(0, 10).forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        listaPosts.appendChild(li);
    });
});