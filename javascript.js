const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "button-1") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "button-2") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "button-3") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "button-4") {
      body.style.backgroundColor = "yellow";
    }
  });
});
