/* Burger */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navText = document.querySelectorAll(".nav-text");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  navText.forEach((n) => {
    n.classList.toggle("active");
  });
});

navText.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* Comentarios */

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
