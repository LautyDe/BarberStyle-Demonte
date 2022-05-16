let url = "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    mostrarDatos(data);
  });

function mostrarDatos(data) {
  const nodo = document.querySelector("#timeAPI");
  const div = document.createElement("div");
  div.innerHTML = `${data.datetime}`;
  nodo.appendChild(div);
}
