function shopBtn() {
  const btn1 = document.querySelector("#btn1");
  btn1.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";

  const btn2 = document.querySelector("#btn2");
  btn2.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";

  const btn3 = document.querySelector("#btn3");
  btn3.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";

  const btn4 = document.querySelector("#btn4");
  btn4.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";

  const btn5 = document.querySelector("#btn5");
  btn5.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";

  const btn6 = document.querySelector("#btn6");
  btn6.innerHTML =
    "<button class='plusButton'>+</button> <button class='minusButton'>-</button>";
}

shopBtn();

const tienda = [
  { id: 1, producto: shaver, precio: 6799 },
  { id: 2, producto: shaver, precio: 13999 },
  { id: 3, producto: shaver, precio: 9999 },
  { id: 4, producto: navaja, precio: 2799 },
  { id: 5, producto: navaja, precio: 3999 },
  { id: 6, producto: navaja, precio: 1399 },
];
