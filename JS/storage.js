let key = "";

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}

console.log(key);

if (key.length === 0) {
  const empty = document.querySelector("#items");
  empty.innerHTML =
    "<h3 class='empty'>Tu carrito está vacío</h3><br><h5 class='empty2'>¿No sabés qué comprar? ¡Miles de productos te esperan en nuestro Shop!</h5>";
}
