function shopBtn() {
  const btn1 = document.querySelector("#btn1");
  btn1.innerHTML =
    "<button class='plusButton' id='plusOne'>+</button> <button class='minusButton' id='minusOne'>-</button>";

  const btn2 = document.querySelector("#btn2");
  btn2.innerHTML =
    "<button class='plusButton' id='plusTwo'>+</button> <button class='minusButton' id='minusTwo'>-</button>";

  const btn3 = document.querySelector("#btn3");
  btn3.innerHTML =
    "<button class='plusButton' id='plusThree'>+</button> <button class='minusButton' id='minusThree'>-</button>";

  const btn4 = document.querySelector("#btn4");
  btn4.innerHTML =
    "<button class='plusButton' id='plusFour'>+</button> <button class='minusButton' id='minusFour'>-</button>";

  const btn5 = document.querySelector("#btn5");
  btn5.innerHTML =
    "<button class='plusButton' id='plusFive'>+</button> <button class='minusButton' id='minusFive'>-</button>";

  const btn6 = document.querySelector("#btn6");
  btn6.innerHTML =
    "<button class='plusButton' id='plusSix'>+</button> <button class='minusButton' id='minusSix'>-</button>";
}

shopBtn();

class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const ShaverGBS = new Product("Shaver GBS", 6799);
const ShaverBelProf = new Product("Shaver BelProf", 13999);
const ShaverKemei = new Product("Shaver Kemei", 9999);
const NavajaBlack = new Product("Navaja Black", 2799);
const NavajaRodger = new Product("Navaja Rodger", 3999);
const NavajaStandard = new Product("Navaja Standard", 1399);
