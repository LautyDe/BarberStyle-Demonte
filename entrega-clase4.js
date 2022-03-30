/* const clave = 2324;

function ingresarClave() {
  let claveIngresada = parseInt(prompt("Por favor, ingrese una clave:"));
  if (claveIngresada < 1000 || claveIngresada > 9999) {
    alert("Su clave debe tener 4 digitos");
  } else if (isNaN(claveIngresada)) {
    alert("Debe ingresar un numero como clave");
  } else if (claveIngresada != clave) {
    alert("Clave incorrecta");
  } else if (claveIngresada == clave) {
    alert("Clave correcta!");
  }
  return claveIngresada;
}

let claveAEvaluar;
while (claveAEvaluar !== clave) {
  claveAEvaluar = ingresarClave();
}
 */

class Carrito {
  constructor(productos) {
    this.productos = productos;
  }
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  verCarrito() {
    console.log(this.productos);
  }
}

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const tienda = new Carrito([]);

mostrarMenu();

function mostrarMenu() {
  let op = "";
  while (op !== "fin") {
    op = prompt(`Ingrese una opcion (a, b o c)
                        a. Agregar un producto
                        b. Listar los productos
                        c. fin`);
    if (op === "a") {
      const producto = crearProducto();
      tienda.agregarProducto(producto);
    } else if (op === "b") {
      tienda.verCarrito();
    } else if (op === "c") {
      return alert("Gracias por su compra!");
    } else {
      alert("Opcion invalida");
      return mostrarMenu();
    }
  }
}

function crearProducto() {
  let nombre = prompt("Ingrese el nombre del producto: ");
  let precio = prompt("ingrese el precio del producto: ");
  return new Producto(nombre, precio);
}
