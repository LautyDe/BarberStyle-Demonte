let color = localStorage.getItem("mode");
const myBtn = document.querySelector(".darkMode");

!color
  ? ((color = "#14171A"), (myBtn.innerHTML = "Gray mode"))
  : (document.body.style = `background-color:${color}`),
  color === "#14171A"
    ? (myBtn.innerHTML = "Dark mode")
    : (myBtn.innerHTML = "Gray Mode");

myBtn.addEventListener("click", () => {
  color === "#14171A"
    ? ((color = "black"), (myBtn.innerHTML = "Gray mode"))
    : ((color = "#14171A"), (myBtn.innerHTML = "Dark mode"));
  localStorage.setItem("mode", color);
  document.body.style = `background-color:${color}`;
});
