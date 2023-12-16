const images = document.querySelectorAll('.carousel img');

let index = 0;

function showImage() {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

setInterval(nextImage, 6000); // Cambia la duración en milisegundos para ajustar la velocidad
showImage();
