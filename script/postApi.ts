/*Criando pagina do post*/
const postId = new URLSearchParams(window.location.search).get("id");
fetch(`https://dummyjson.com/products/${postId}`)
  .then((res) => res.json())
  .then((json) => {
    (document.getElementById("site-title") as HTMLTitleElement).textContent = json.title;
    (document.getElementById("post-title") as HTMLHeadingElement).textContent = json.title;
    (document.getElementById("main-img") as HTMLImageElement).src = json.thumbnail;
    (document.getElementById("post-description") as HTMLParagraphElement).textContent = json.description;
    (document.getElementById("alt-img") as HTMLImageElement).src = json.images[2];
  });

/* Comentários */

generateComments();

const submitBtn = document.querySelector(".submit") as HTMLButtonElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const comment = document.querySelector("#comment-text") as HTMLTextAreaElement;
const commentCard = document.querySelector(".create-comment") as HTMLDivElement;
submitBtn.addEventListener("click", submitForm);

let formArr: { id: number; userName: string; userComment: string }[] = [];
let count = 0;

function submitForm(e: MouseEvent) {
  const userForm = userName.value;
  const commentForm = comment.value;
  if (userForm && commentForm !== "") {
    const newComment = {
      id: ++count,
      userName: userForm,
      userComment: commentForm,
    };
    formArr.push(newComment);
    resetForm();
    addComment(newComment);
  }

  e.preventDefault();
}

function resetForm() {
  userName.value = "";
  comment.value = "";
}

function addComment(item: { id: number; userName: string; userComment: string }) {
  const div = document.createElement("div");
  div.classList.add("comment-card");
  div.id = item.id.toString();
  div.innerHTML = `
  <img class="person-icon" src="./img/eu.jpg" />
  <div class="comment-info">
    <p class="nickname">${item.userName}</p>
    <p class="comment">
    ${item.userComment}
    </p>
  `;
  commentCard.insertAdjacentElement("beforeend", div);
}

function generateComments() {
  for (let i = 1; i <= 5; i++) {
    const id = Math.floor(Math.random() * 100);
    fetch(`https://dummyjson.com/user/${id}`)
      .then((res) => res.json())
      .then((img) => {
        fetch(`https://dummyjson.com/comments/${id}`)
          .then((res) => res.json())
          .then((json) => {
            const div = document.createElement("div");
            div.classList.add("comment-card");
            div.id = json.id.toString();
            div.innerHTML = `
            <img class="person-icon" src="${img.image}" />
            <div class="comment-info">
              <p class="nickname">${json.user.username}</p>
              <p class="comment">
              ${json.body}
              </p>
            `;

            commentCard.insertAdjacentElement("beforeend", div);
          });
      });
  }
}
