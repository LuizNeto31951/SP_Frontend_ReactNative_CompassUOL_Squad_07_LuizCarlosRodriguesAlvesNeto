"use strict";
createPost();
function createPost() {
    for (let i = 1; i <= 6; i++) {
        const id = Math.floor(Math.random() * 100);
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
            const postCard = document.querySelector(".posts");
            const post = document.createElement("li");
            post.innerHTML = `
        <a href="post.html?id=${json.id}">
            <img class="post-image" src=${json.thumbnail} width="200" height="200" />
            <h3 class="post-title">${json.title}</h3>
            <p class="post-description">${json.description}</p>
        </a>
`;
            postCard.insertAdjacentElement("beforeend", post);
        });
    }
}
