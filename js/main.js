const classnav = document.querySelector("#classnav");

const abrir = document.querySelector ("#abrir");
const cerrar = document.querySelector ("#cerrar");

abrir.addEventListener("click", () => {
    classnav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    classnav.classList.remove("visible");
});

const carrito = {
   producto: "Bolsitas",
    precio: 1100,
  
}

console.log(carrito?.producto?. brujitacandybar || "No existe ese producto")