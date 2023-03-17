const togglerCont = document.querySelector(".nav");
const hamburger = document.querySelectorAll(".menu");
const list = document.querySelector(".list");
togglerCont.addEventListener("click", function (e) {
  const toggleBtn = e.target.closest(".menu");
  if (!toggleBtn) return;
  list.classList.toggle("toggle-list");
  hamburger.forEach((btn) => btn.classList.toggle("hide-toggle"));
});
