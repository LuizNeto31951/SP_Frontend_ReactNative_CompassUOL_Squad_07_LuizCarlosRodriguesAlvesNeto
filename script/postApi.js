const postId = new URLSearchParams(window.location.search).get("id");
fetch(`https://dummyjson.com/products/${postId}`)
  .then((res) => res.json())
  .then((json) => {
    document.getElementById("post-title").textContent = json.title;
    document.getElementById("main-img").src = json.thumbnail;
    document.getElementById("post-description").textContent = json.description;
    document.getElementById("alt-img").src = json.images[2];
  });

/* Comentarios */

generateComments();

const submitBtn = document.querySelector(".submit");
const userName = document.querySelector("#name");
const comment = document.querySelector("#comment-text");
const commentCard = document.querySelector(".create-comment");
submitBtn.addEventListener("click", submitForm);

formArr = [];
let count = 0;

function submitForm(e) {
  const userForm = userName.value;
  const commentForm = comment.value;
  if (userForm && commentForm !== "") {
    newComment = {
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

function addComment(item) {
  const div = document.createElement("div");
  div.classList = "comment-card";
  div.id = item.id;
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
    let id = Math.floor(Math.random() * 100);
    fetch(`https://dummyjson.com/user/${id}`)
      .then((res) => res.json())
      .then((img) => {
        fetch(`https://dummyjson.com/comments/${id}`)
          .then((res) => res.json())
          .then((json) => {
            const div = document.createElement("div");
            div.classList = "comment-card";
            div.id = json.id;
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
