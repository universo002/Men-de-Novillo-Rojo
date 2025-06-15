// Animación al hacer clic en cada opción
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
      option.addEventListener('click', () => {
        option.classList.add('clicked');
        setTimeout(() => {
          option.classList.remove('clicked');
        }, 300);
      });
    });

    // Agregar la clase .clicked con una animación rápida
    const style = document.createElement('style');
    style.innerHTML = `
      .clicked {
        animation: pop 0.3s ease;
      }

      @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  const showImage = index => {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  };

  carousel.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });
}); const menuToggle = document.getElementById("menu-toggle");
  const sideMenu = document.getElementById("side-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      sideMenu.classList.toggle("open");
    });
  }
const menutoggle = document.getElementById("menu-toggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    menutoggle.classList.add("oculto");
  } else {
    menutoggle.classList.remove("oculto");
  }
});const menuLinks = document.querySelectorAll("#side-menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});const slides = document.querySelectorAll(".carousel-bebidas .slide");
const prevBtn = document.querySelector(".carousel-bebidas .prev");
const nextBtn = document.querySelector(".carousel-bebidas .next");

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Opcional: mostrar primero el slide actual
showSlide(current);
let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarPedido();
}

function mostrarPedido() {
  const detalle = document.getElementById("pedidoDetalle");
  detalle.innerHTML = "<h3>Pedido:</h3>";
  carrito.forEach((item, index) => {
    detalle.innerHTML += `<p>${index + 1} - ${item}</p>`;
  });
}

document.querySelectorAll(".btn-agregar").forEach(boton => {
  boton.addEventListener("click", () => {
    const producto = boton.getAttribute("data-producto");
    agregarAlCarrito(producto);
  });
});function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const observaciones = document.getElementById("observaciones").value;

  if (!nombre || !ubicacion) {
    alert("Por favor completá nombre y ubicación");
    return;
  }

  if (carrito.length === 0) {
    alert("Agregá productos al pedido");
    return;
  }

  const pedido = carrito.join("%0A");
  const telefono = "541141444307";
  const mensaje = `Hola! Soy ${nombre}%0AQuiero pedir:%0A${pedido}%0A%0AUbicación: ${ubicacion}%0AObservaciones: ${observaciones || "Ninguna"}%0A%0ADelivery sin cargo en Villa Urquiza 🚚🔥`;
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}