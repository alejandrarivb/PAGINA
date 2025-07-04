function showImage(src) {
  const modalImage = document.getElementById('modalImage');
  if (modalImage) {
    modalImage.src = src;
  } else {
    console.error("No se encontró el elemento con id 'modalImage'");
  }
}

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  var destino = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(destino).offset().top - 200
  }, 1500);
});




