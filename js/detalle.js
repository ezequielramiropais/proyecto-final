
let codigo = location.search;


let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

//Capturo los datos de la página de detalle 
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');

//Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
//Convierto el objeto literal a un array
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);

//Muestro de manera dinámica los detalles del producto que tengo en el localStorage
codigoFinal.innerHTML = `Código: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre: ${arrayDetalle.nombre}`;
descripcion.innerHTML = `Detalle: ${arrayDetalle.detalle}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`


let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){

    localStorage.clear()
    location.href = 'index.html'
})