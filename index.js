const nav = document.getElementById("side-menu");
const open = document.getElementById("open-bar");
const close = document.getElementById("nav-close");

if (open) {
  open.addEventListener("click", () => {
    nav.classList.add("show-menu");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
}
