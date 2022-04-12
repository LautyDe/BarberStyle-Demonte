let color = localStorage.getItem("mode");
const myBtn = document.querySelector(".darkMode");

if (!color) {
  color = "#14171A";
  myBtn.innerHTML = "Gray mode";
} else {
  document.body.style = `background-color:${color}`;
  if (color === "#14171A") {
    myBtn.innerHTML = "Dark mode";
  } else {
    myBtn.innerHTML = "Gray Mode";
  }
}

myBtn.addEventListener("click", () => {
  if (color === "#14171A") {
    color = "black";
    myBtn.innerHTML = "Gray mode";
  } else {
    color = "#14171A";
    myBtn.innerHTML = "Dark mode";
  }
  localStorage.setItem("mode", color);
  document.body.style = `background-color:${color}`;
});
