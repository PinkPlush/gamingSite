const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


let openFormBtn = document.getElementById("openFormBtn");
let formContainer = document.getElementById("formContainer");
let cancelBtn = document.getElementById("cancelBtn");
let body = document.getElementsByTagName("body")[0];

openFormBtn.addEventListener("click", function() {
  formContainer.style.display = "block";
  body.classList.add("no-scroll");
});

cancelBtn.addEventListener("click", function() {
  formContainer.style.display = "none";
  body.classList.remove("no-scroll");
});
