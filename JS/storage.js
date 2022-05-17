let key = JSON.parse(localStorage.getItem("CARTS_KEY"));

if (!key || key.length == 0) {
  const empty = document.querySelector("#items");
  empty.innerHTML =
    "<h3 class='empty'>Tu carrito está vacío</h3><br><h5 class='empty2'>¿No sabés qué comprar? ¡Ve al Shop para ver nuestra variedad de productos!</h5>";
} else {
  refreshCart();
}

function refreshCart() {
  const full = document.querySelector("#items");
}
