const key = JSON.parse(localStorage.getItem("CARTS_KEY"));
let total = 0;
const price = document.querySelector("#price");
const container = document.querySelector("#items");
const totalPrice = document.querySelector("#totalPrice");

function comprobarCarrito() {
  if (!key || key.length == 0) {
    container.innerHTML = `<h3 class='empty'>Tu carrito está vacío</h3><br>
     <h5 class='empty2'>¿No sabés qué comprar? 
     ¡Ve al Shop para ver nuestra variedad de productos!</h5> `;
  } else {
    let flex = document.querySelector("#cartContainer");
    flex.classList.add(".cartFlex");
    refreshCart();
    /* itemPrice(); */
    totalIPrice();
  }
}

comprobarCarrito();

function refreshCart() {
  key.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name}: $${element.price}`;
    container.append(li);
  });
}

/* function itemPrice() {
  key.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `Precio: $${element.price}`;
    price.append(li);
  });
} */

function totalIPrice() {
  const div = document.createElement("div");
  div.innerHTML = `<div>Total: </div><div>$${key.forEach((element) => {
    total += element.price;
    console.log(
      "🚀 ~ file: storage.js ~ line 44 ~ div.innerHTML=`<div>Total:</div><div>$${key.forEach ~ element.price",
      element.price
    );
  })}</div>`;
  totalPrice.append(div);
}
