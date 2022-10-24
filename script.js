// alert("man");

const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const aside = document.querySelector(".aside-mobile");

open.addEventListener("click", () => {
  aside.style.display = "flex";
});

close.addEventListener("click", () => {
  aside.style.display = "none";
});
