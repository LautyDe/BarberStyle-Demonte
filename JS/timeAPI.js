/* let url =
  "https://www.timeapi.io/api/Time/current/zone?timeZone=America/Buenos_Aires";

const options = {
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    mostrarDatos(data);
  });

function mostrarDatos(data) {
  const nodo = document.querySelector("#navbarNav");
  const div = document.createElement("div");
  div.innerHTML = `${data.day}/${data.month}/${data.year}`;
  nodo.appendChild(div);
} */
