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
                    <p>$${producto.precio.toLocaleString()}</p>
                </div>
                <div class="producto-subtotal-carrito">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
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
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);
    totalElement.innerText = `$${total.toLocaleString()}`;
}

function agregarEventListeners() {
    const botonesEliminar = document.querySelectorAll(".boton-eliminar-carrito");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProductoCarrito);
    });

     //const botonBorrarCompra = document.querySelector(".carrito-acciones-borrar");
    // botonBorrarCompra.addEventListener("click", borrarCompra);
    const botonBorrarCompra = document.querySelector(".carrito-acciones-borrar");
    botonBorrarCompra.addEventListener("click", (e) => {
        e.preventDefault();
        borrarCompra();

    });

    const botonRealizarCompra = document.querySelector(".carrito-acciones-comprar");

    botonRealizarCompra.addEventListener("click", (e) => {
        e.preventDefault();
        realizarCompra();

    });


}

     //botonRealizarCompra.addEventListener("click", realizarCompra);


function eliminarProductoCarrito(e) {
    const idProducto = e.currentTarget.dataset.id;
    const indiceProducto = productosEnCarrito.findIndex(producto => producto.id === idProducto);
    productosEnCarrito.splice(indiceProducto, 1);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

// function borrarCompra() {
//     productosEnCarrito.length = 0;
//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
//     cargarProductosCarrito();
// }
function borrarCompra() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#27024a',
        cancelButtonColor: '#e4cefa',
        confirmButtonText: 'Sí, borrar todo'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
            Swal.fire(
                '¡Borrado!',
                'Tu carrito ha sido vaciado.',
                'success'
            );
        }
    });
}


function realizarCompra() {
    Swal.fire({
        title: 'Atencion estas por tu compra',
        text: "Desea realizar la compra?",
        icon: 'success',
        showCancelButton:true,        
        confirmButtonColor: '#27024a',
        cancelButtonColor: '#e4cefa', 
        confirmButtonText: 'Sí, Comprar todo'

    
      
    }).then((result) => {
        if (result.isConfirmed) {
        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
        
        Swal.fire(
            '¡Compra realizada!',
            'Tu carrito ha sido comprado.',
            'success'
        );
        }
    });
}



       function realizarCompra0() {
     productosEnCarrito.length = 0;
     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
     contenedorCarritoProductos.classList.add("disabled");
     contenedorCarritoAcciones.classList.add("disabled");
     contenedorCarritoComprado.classList.remove("disabled");
 }

// Inicializa la carga de productos del carrito
cargarProductosCarrito();