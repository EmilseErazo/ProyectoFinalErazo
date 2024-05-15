// document.addEventListener('DOMContentLoaded', () => {
//     const carrito = [];
//     const contenedorCarrito = document.querySelector('#carrito-productos');
//     const carritoVacio = document.querySelector('.carrito-vacio');

//Party Box
const productosParty = [
    {
        id: "bolsitas1",
        titulo: "Bolsitas",
        imagen: "./imagenes/bolsitas.jpg",
        categoria: {
            nombre: "Party Box",
            id: "party box"
        },
        Precio: 990
    },

    {
        id: "party2",
        titulo: "Cajitas golosineras",
        imagen: "./imagenes/cajita golosinera.jpg",
        categoria: {
            nombre: "Party Box",
            id: "party box"
        },
        Precio: 990
    },

    {
        id: "party3",
        titulo: "Valita cristal",
        imagen: "./imagenes/valijita cristal.jpg",
        categoria: {
            nombre: "Party Box",
            id: "party box"
        },
        Precio: 990
    }

];

//Decoracion

const productos = [

    {
        id: "deco1",
        titulo: "Brujita deco 1",
        imagen: "./imagenes/Deco 1.jpg",
        categoria: {
            nombre: "Decoracion",
            id: "decoracion"
        },
        Precio: 76700
    },

    {
        id: "deco2",
        titulo: "Brujita deco 2",
        imagen: "./imagenes/LA granja.jpg",
        categoria: {
            nombre: "Decoracion",
            id: "decoracion"
        },
        Precio: 112500
    },

    {
        id: "deco3",
        titulo: "Brujita deco 3",
        imagen: "./imagenes/Argentina.jpg",
        categoria: {
            nombre: "Decoracion",
            id: "decoracion"
        },
        Precio: 163370
    },
    {
        id: "deco4",
        titulo: "Plaza Blanda",
        imagen: "./imagenes/Plaza blanda.jpg",
        categoria: {
            nombre: "Decoracion",
            id: "decoracion"
        },
        Precio: 22300
    }

];

//sublimacion

const productosSublimacion = [

    {
        id: "subli1",
        titulo: "Mochila",
        imagen: "./imagenes/sublimacion/mochila thomas.jpg ",
        categoria: {
            nombre: "Sublimacion",
            id: "sublimacion"
        },
        Precio: 27000
    },
    {
        id: "sublimacion2",
        titulo: "set de jardin",
        imagen: "./imagenes/sublimacion/20240207_162937.jpg ",
        categoria: {
            nombre: "Sublimacion",
            id: "sublimacion"
        },
        Precio: 8800
    }


];

const productosCandy = [

    {
        id: "candy1",
        titulo: "Brujita 1",
        imagen: "./imagenes/BRUJITA 1.jpg",
        categoria: {
            nombre: "Candy Bar",
            id: "candy"
        },
        Precio: 175000
    },
    {
        id: "candy2",
        titulo: "Brujita 2",
        imagen: "./imagenes/simones.jpg",
        categoria: {
            nombre: "Candy Bar",
            id: "candy"
        },
        Precio: 211990
    },
    {
        id: "candy3",
        titulo: "Brujita 3",
        imagen: "./imagenes/emma-4.jpg",
        categoria: {
            nombre: "Candy Bar",
            id: "candy"
        },
        Precio: 289500
    },
    {
        id: "candy4",
        titulo: "Brujita Bar",
        imagen: "./imagenes/Bar brujita.jpg",
        categoria: {
            nombre: "Candy Bar",
            id: "candy"
        },
        Precio: 160000
    }
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");



 function cargarProductos() {

    productos.forEach(producto => {
      

         const div = document.createElement("div");
         div.classList.add("producto");
         div.innerHTML = `

                <img class="producto-imagen" src="${producto.imagen}" alt=${producto.titulo}>
                <div class="producto-detalle">
                     <h3 class= "producto-titulo">${producto.titulo}</h3>
                     <p class="producto-precio"><i class="bi bi-currency-dollar"></i>${producto.Precio}</p>
                     <button class="producto-agregar" id=${producto.id}>Agregar</button>
                </div>   

    `;
        contenedorProductos.append(div);
     });

     //sublimacion
     productosSublimacion.forEach(producto => {
      

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `

               <img class="producto-imagen" src="${producto.imagen}" alt=${producto.titulo}>
               <div class="producto-detalle">
                    <h3 class= "producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio"><i class="bi bi-currency-dollar"></i>${producto.Precio}</p>
                    <button class="producto-agregar" id=${producto.id}>Agregar</button>
               </div>   

   `;
       contenedorProductos.append(div);
    });
    // Candy
    productosCandy.forEach(producto => {
      

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `

               <img class="producto-imagen" src="${producto.imagen}" alt=${producto.titulo}>
               <div class="producto-detalle">
                    <h3 class= "producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio"><i class="bi bi-currency-dollar"></i>${producto.Precio}</p>
                    <button class="producto-agregar" id=${producto.id}>Agregar</button>
               </div>   

   `;
       contenedorProductos.append(div);
    });

}
function cargarProductos1(productosParaCargar = [...productos, ...productosParty, ...productosSublimacion, ...productosCandy]) {
    contenedorProductos.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos productos

    productosParaCargar.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio"><i class="bi bi-currency-dollar"></i>${producto.Precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
}


// cargarProductos();
 cargarProductos1();
 

botonesCategorias.forEach(boton => {
     boton.addEventListener("click", (e) => {
         const categoriaId = e.target.id;
         if (categoriaId === "todos") {
             cargarProductos1([...productos, ...productosSublimacion, ...productosCandy, ...productosParty]);
         } else {
             const productosFiltrados = [...productos, ...productosSublimacion, ...productosCandy, ...productosParty].filter(producto => producto.categoria.id === categoriaId);
             cargarProductos1(productosFiltrados);
         }
     });
 });