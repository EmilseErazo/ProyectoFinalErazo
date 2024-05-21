const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

const totalElement = document.querySelector("#total");

function cargarProductosCarrito() {
    // Verifica si el carrito está vacío
    if (productosEnCarrito.length === 0) {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    } else {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        // Limpia el contenedor de productos
        contenedorCarritoProductos.innerHTML = "";

        // Agrega los productos al contenedor
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto-carrito");
            div.innerHTML = `
                <img class="producto-imagen-carrito" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-titulo-carrito">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="producto-cantidad-carrito">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="producto-precio-carrito">
                    <small>Precio</small>
                    <p>$${producto.Precio.toLocaleString()}</p>
                </div>
                <div class="producto-subtotal-carrito">
                <small>Subtotal</small>
                <p>$${producto.Precio * producto.cantidad}</p>
            </div>
                <button class="boton-eliminar-carrito" data-id="${producto.id}"><i class="bi bi-trash"></i></button>
            `;
            contenedorCarritoProductos.appendChild(div);
        });

        actualizarTotal();
        agregarEventListeners();
    }
}

function actualizarTotal() {
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad * producto.Precio, 0);
    totalElement.innerText = `$${total.toLocaleString()}`;
}

function agregarEventListeners() {
    const botonesEliminar = document.querySelectorAll(".boton-eliminar-carrito");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProductoCarrito);
    });

    const botonBorrarCompra = document.querySelector(".carrito-acciones-borrar");
    botonBorrarCompra.addEventListener("click", borrarCompra);

    const botonRealizarCompra = document.querySelector(".carrito-acciones-comprar");
    botonRealizarCompra.addEventListener("click", realizarCompra);
}

function eliminarProductoCarrito(e) {
    const idProducto = e.currentTarget.dataset.id;
    const indiceProducto = productosEnCarrito.findIndex(producto => producto.id === idProducto);
    productosEnCarrito.splice(indiceProducto, 1);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function borrarCompra() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function realizarCompra() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}

// Inicializa la carga de productos del carrito
cargarProductosCarrito();