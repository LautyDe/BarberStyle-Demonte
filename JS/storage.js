const key = JSON.parse(localStorage.getItem("CARTS_KEY"));

const container = document.querySelector("#items");
function comprobarCarrito() {
  if (!key || key.length == 0) {
    empty.innerHTML = `<h3 class='empty'>Tu carrito está vacío</h3><br>
     <h5class='empty2'>¿No sabés qué comprar? 
     ¡Ve al Shop para ver nuestra variedad de productos!</h5> `;
  } else {
    refreshCart();
  }
}
comprobarCarrito();
function refreshCart() {
  key.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `  
        producto:${element.name}
        precio:${element.price}`;
    container.append(li);
  });
}
