let key = JSON.parse(localStorage.getItem("CARTS_KEY"));

/* for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(localStorage.getItem(key));
} */

if (!key || key.length == 0) {
  const empty = document.querySelector("#items");
  empty.innerHTML =
    "<h3 class='empty'>Tu carrito está vacío</h3><br><h5 class='empty2'>¿No sabés qué comprar? ¡Ve al Shop para ver nuestra variedad de productos!</h5>";
} else {
  const full = document.querySelector("#items");
  full.innerHTML = "<div class='full'>HOLA</div>";
}

/* function checkCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  } else if (cart.lenght == 0) {
    return;
  }
  for (let i = 0; i < cart.lenght; i++) {
    addToCart(cart[i]);
  }
}

checkCart(); */
