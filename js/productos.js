function agregarAlCarrito(producto) {
    //obtener carrito actual del localstorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  //agrega id al carrito
  carrito.push(producto);

  //guardar en localstorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
  console.log(JSON.parse(localStorage.getItem('carrito')) || []);


  alert('producto agregado al carrito');
}


