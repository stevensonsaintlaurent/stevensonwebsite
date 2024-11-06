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

//  ========================= form contact ======================

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
