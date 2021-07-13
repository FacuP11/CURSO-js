//VARIABLES
const Stock = [
    {id: 1, item: "Pipeta p/perro hasta 5kg" ,  precio: 270, imagen: "img/pipetaPerro1.png"},
    {id: 2, item: "Pipeta p/perro  5kg a 15kg", precio: 500, imagen:"img/pipetaPerro2.png"},
    {id: 3, item: "Pipeta p/gato hasta 3kg" , precio: 200, imagen:"img/pipetaGato.jpg"},
    {id: 4, item: "Pelota de goma" , precio: 300, imagen:"img/pelotas.png"},
    {id: 5, item: "Hueso de juguete masticable" , precio: 600, imagen:"img/huesoPerro.png"},
    {id: 6, item: "Rascador para gatos" , precio: 12000, imagen:"img/rascador.jfif"},
    {id: 7, item: "Alimento p/perros 5kg" , precio: 1200, imagen:"img/alimentoPerro.jfif"},
    {id: 8, item: "Alimento p/gatos 3kg", precio: 1000,  imagen:"img/alimentoGato.png"},
    
   
    
]

let carrito = [];
let total = 0;

const DOMitems =  document.getElementById('items');
const DOMcarrito = document.getElementById('carrito');
const DOMtotal = document.getElementById('total');
const DOMbtnVaciar = document.getElementById('btnVaciar');
const DOMbtnComprar = document.getElementById('btnComprar');
const miLocalStorage = window.localStorage;

//------------------Crear stock para mostrar---------//
function Productos() {
    Stock.forEach((info) => {
        
        const nodoPadre= document.createElement('div');        
        
        const nodoBody = document.createElement('div');        
       
        const nodoTit = document.createElement('h5');
        nodoTit.textContent = info.item;
        nodoTit.setAttribute(`class`, `text-info`);
    
        const nodoImg = document.createElement('img');        
        nodoImg.setAttribute('src', info.imagen);
        nodoImg.setAttribute(`class`,`rounded-pill `);
        
        const nodoPrecio = document.createElement('p');        
        nodoPrecio.textContent = info.precio + '$';
        
        const nodoBtn = document.createElement('img');
        nodoBtn.setAttribute(`class`, "btnMas" );
        nodoBtn.setAttribute('src',"/img/mas.png");        
        nodoBtn.textContent = '+';
        
        nodoBtn.setAttribute('marcador', info.id);
        nodoBtn.addEventListener('click', AgregarCarrito);

        
        

        
        // Agregar al html

        nodoBody.appendChild(nodoImg);
        nodoBody.appendChild(nodoTit);
        nodoBody.appendChild(nodoPrecio);
        nodoBody.appendChild(nodoBtn);
        nodoPadre.appendChild(nodoBody);
        DOMitems.appendChild(nodoPadre);
    });
}

    
 
 function AgregarCarrito(evento) {
   
    carrito.push(evento.target.getAttribute('marcador'))//Evento en el btn "+"
    
    calcularTotal();
    
    renderizarCarrito();

    guardarCarritoEnLocalStorage();//LOCAL STORAGE
}

//--------CARRITO AGREGANDO COSAS--------
function renderizarCarrito() {
    
    DOMcarrito.textContent = '';
    
    const carritoNew = [...new Set(carrito)];
    
    carritoNew.forEach((item) => {

        // Filtramos el producto del stock
        const miProducto = Stock.filter((productoStock) => {
           
            return productoStock.id === parseInt(item); // Comparamos ID 
        });
        
        const numeroUnidadesProducto = carrito.reduce((total, itemId) => {
            // Comparar ID, si es true indica valor 1, de lo contrario valor2
            return itemId === item/*condicion*/? total += 1 /*valor1*/: total /*valor2*/ ;
        }, 0);
        // Nodo del item del carrito
        const nodoPadre = document.createElement('li');
        
        nodoPadre.textContent = `${numeroUnidadesProducto} x ${miProducto[0].item} - ${miProducto[0].precio}$`;
        // ------------------Boton de borrar producto individual------------

        const BotonBorrar = document.createElement('button');
        BotonBorrar.textContent = 'X';        
        BotonBorrar.dataset.item = item;
        BotonBorrar.addEventListener('click', borrarItemCarrito);
        
        // Agregamos nodos
        nodoPadre.appendChild(BotonBorrar);//Boton "+"
        DOMcarrito.appendChild(nodoPadre);//Lista de prod
    });
}

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    renderizarCarrito();   
    calcularTotal();

    guardarCarritoEnLocalStorage();//LOCAL STORAGE
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miProducto = Stock.filter((productoStock) => {
            return productoStock.id === parseInt(item);
        });
        total = total + miProducto[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}

/**
 * Borrar carrito y redibuja
 */
function vaciarCarrito() {
    // Limpiamos carrito
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}


DOMbtnVaciar.addEventListener('click', vaciarCarrito);// Eventos

//-----Comprar CARRITO-----------------//



    $.get ("descuentos.json", function (data) {
    
    $(".carritoBox").append(` <img  src="/img/regalo.png" class="regalo" ></img>
    
        
    `);
    

    $(".regalo").click(function (e) { 
        e.preventDefault();
        total = total - (total * (data[2].Porcentaje / 100));
        console.log(total)
        
        
    })
    
    
    
    function comprarCarrito (){

        if ( total ===  0  ) {
        alert("El carrito esta vacio")
        }
        else {
        alert (`Compra realizada.  ` + data[2].Mensaje);
        vaciarCarrito();
        }
    }
    DOMbtnComprar.addEventListener('click', comprarCarrito); //Evento en btn para comprar
    })

  




    
//------LOCAL STORAGE------//
function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        renderizarCarrito();
        calcularTotal();    
    }
}






Productos(); //Iniciar

cargarCarritoDeLocalStorage ();
$(".row").append (`<img id="logo" class= "float-left" src="img/LogoIcon.png"> </img>`) //Agregar img al DOM
$("#logo").css("width", "8%");
$("#logo").height("8%");
$("#logo").click (function () { // Funcion para redireccionar la img
    location.href = "https://obsanil.000webhostapp.com"
})














