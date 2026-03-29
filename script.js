const weddingDate = new Date("2027-06-23T00:00:00");

const timelineData = [
  {
    year: "2016",
    title: "Primeros años",
    text: "Una de las primeras fotos juntos. Puedes cambiar el texto y el orden fácilmente.",
    image: "assets/images/01_highschool.jpg"
  },
  {
    year: "2017",
    title: "Etapa de instituto",
    text: "Un recuerdo de juventud que puede formar parte de la línea temporal.",
    image: "assets/images/02_young_couple.jpg"
  },
  {
    year: "2018",
    title: "Evento juntos",
    text: "Una foto divertida de una etapa importante de la relación.",
    image: "assets/images/10_tennis_event.jpg"
  },
  {
    year: "2019",
    title: "Momentos especiales",
    text: "Otra parada de su historia con un estilo visual uniforme.",
    image: "assets/images/09_proposal.jpg"
  },
  {
    year: "2020",
    title: "Días elegantes",
    text: "Recuerdos de celebraciones y eventos importantes.",
    image: "assets/images/12_engagement.jpg"
  },
  {
    year: "2021",
    title: "Planes y viajes",
    text: "Perfecto para añadir nuevas fotos cuando quieras ampliar la web.",
    image: "assets/images/07_lake.jpg"
  },
  {
    year: "2022",
    title: "Lluvia y compañía",
    text: "Una imagen con personalidad que aporta variedad a la galería.",
    image: "assets/images/06_rainy_day.jpg"
  },
  {
    year: "2023",
    title: "Graduación",
    text: "Un hito importante en la historia de la pareja.",
    image: "assets/images/11_graduation.jpg"
  },
  {
    year: "2024",
    title: "Con la mascota",
    text: "Un recuerdo familiar que puedes dejar o sustituir más adelante.",
    image: "assets/images/08_horse_and_dog.jpg"
  },
  {
    year: "2025",
    title: "Celebración",
    text: "Una foto formal ideal para la parte final de la línea temporal.",
    image: "assets/images/04_formal.jpg"
  },
  {
    year: "2026",
    title: "Compromiso",
    text: "El momento que lleva directamente a la boda de 2027.",
    image: "assets/images/05_pool_party.jpg"
  },
  {
    year: "2027",
    title: "Cuenta atrás",
    text: "Últimos recuerdos antes del gran día.",
    image: "assets/images/03_college.jpg"
  }
];

const giftItems = [
  {
    id: 1,
    name: "Cafetera espresso",
    price: 180,
    image: "assets/images/cafetera.jpg",
    description: "Para empezar las mañanas juntos."
  },
  {
    id: 2,
    name: "Vajilla clásica",
    price: 95,
    image: "assets/images/vajilla.jpg",
    description: "Perfecta para comidas especiales."
  },
  {
    id: 3,
    name: "Juego de sábanas",
    price: 75,
    image: "assets/images/sabanas.jpg",
    description: "Un detalle útil para nuestra nueva etapa."
  },
  {
    id: 4,
    name: "Set de copas",
    price: 60,
    image: "assets/images/copas.jpg",
    description: "Para brindar con familia y amigos."
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem("weddingCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("weddingCart", JSON.stringify(cart));
  updateNavCartCount();
}

function updateNavCartCount() {
  const navCount = document.getElementById("navCartCount");
  if (!navCount) return;
  const cart = getCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  navCount.textContent = totalItems;
}

function addToCart(itemId) {
  const cart = getCart();
  const product = giftItems.find(item => item.id === itemId);
  if (!product) return;

  const existing = cart.find(item => item.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert(`Has añadido "${product.name}" al carrito.`);
}

function removeFromCart(itemId) {
  const updatedCart = getCart().filter(item => item.id !== itemId);
  saveCart(updatedCart);
  renderCart();
  renderCheckoutSummary();
}

function clearCart() {
  saveCart([]);
  renderCart();
  renderCheckoutSummary();
}

function setupHoneymoonForm() {
  const honeymoonForm = document.getElementById("honeymoonForm");
  if (!honeymoonForm) return;

  honeymoonForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const amountInput = document.getElementById("honeymoonAmount");
    const amount = Number(amountInput.value);

    if (!amount || amount < 1) return;

    const cart = getCart();

    cart.push({
      id: Date.now(),
      name: "Aportación luna de miel",
      price: amount,
      quantity: 1,
      image: "assets/images/luna-miel.jpg",
      custom: true
    });

    saveCart(cart);
    amountInput.value = "";

    console.log("Carrito después de añadir aportación:", cart);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderGiftList();
  setupHoneymoonForm();
  renderCart();
  updateCartCount();
});

let currentTimelineIndex = 0;

function renderTimelineSlide() {
  const image = document.getElementById("timelineImage");
  const year = document.getElementById("timelineYear");
  const title = document.getElementById("timelineTitle");
  const description = document.getElementById("timelineDescription");

  if (!image || !year || !title || !description) return;

  const item = timelineData[currentTimelineIndex];

  image.src = item.image;
  image.alt = item.title;
  year.textContent = item.year;
  title.textContent = item.title;
  description.textContent = item.description;
}

function setupTimelineSlider() {
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");

  if (!prevButton || !nextButton) return;

  prevButton.addEventListener("click", function () {
    currentTimelineIndex--;
    if (currentTimelineIndex < 0) {
      currentTimelineIndex = timelineData.length - 1;
    }
    renderTimelineSlide();
  });

  nextButton.addEventListener("click", function () {
    currentTimelineIndex++;
    if (currentTimelineIndex >= timelineData.length) {
      currentTimelineIndex = 0;
    }
    renderTimelineSlide();
  });

  renderTimelineSlide();
}

  const cards = grid.querySelectorAll(".timeline-card");
  cards.forEach(card => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.index)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(Number(card.dataset.index));
      }
    });
  });


let currentSlide = 0;

function openLightbox(index) {
  currentSlide = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxText = document.getElementById("lightboxText");
  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxText) return;

  const item = timelineData[currentSlide];
  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = `${item.year} · ${item.title}`;
  lightboxText.textContent = item.text;
  lightbox.classList.remove("hidden");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.add("hidden");
  lightbox.setAttribute("aria-hidden", "true");
}

function showNextSlide(step) {
  currentSlide = (currentSlide + step + timelineData.length) % timelineData.length;
  openLightbox(currentSlide);
}

function setupLightboxControls() {
  const closeButton = document.getElementById("closeLightbox");
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const lightbox = document.getElementById("lightbox");

  if (closeButton) closeButton.addEventListener("click", closeLightbox);
  if (prevButton) prevButton.addEventListener("click", () => showNextSlide(-1));
  if (nextButton) nextButton.addEventListener("click", () => showNextSlide(1));

  if (lightbox) {
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", event => {
    const isOpen = lightbox && !lightbox.classList.contains("hidden");
    if (!isOpen) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNextSlide(1);
    if (event.key === "ArrowLeft") showNextSlide(-1);
  });
}

function startCountdown() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  if (!days || !hours || !minutes || !seconds) return;

  function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      days.textContent = "0";
      hours.textContent = "0";
      minutes.textContent = "0";
      seconds.textContent = "0";
      return;
    }

    days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes.textContent = Math.floor((difference / (1000 * 60)) % 60);
    seconds.textContent = Math.floor((difference / 1000) % 60);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function renderGiftList() {
  const giftList = document.getElementById("giftList");
  if (!giftList) return;

  giftList.innerHTML = giftItems.map(item => `
    <article class="gift-card">
      <img src="${item.image}" alt="${item.name}" class="gift-image">
      <div class="gift-card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="gift-price">${item.price} €</p>
        <button class="btn btn-secondary" onclick="addToCart(${item.id})">
          Añadir al carrito
        </button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const body = document.getElementById("cartItemsBody");
  const emptyMessage = document.getElementById("emptyCartMessage");
  const itemCount = document.getElementById("cartItemCount");
  const total = document.getElementById("cartTotal");

  if (!body || !emptyMessage || !itemCount || !total) return;

  const cart = getCart();

  if (cart.length === 0) {
    body.innerHTML = "";
    emptyMessage.classList.remove("hidden");
    itemCount.textContent = "0";
    total.textContent = "0.00 €";
  } else {
    emptyMessage.classList.add("hidden");

    body.innerHTML = cart.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)} €</td>
        <td>${item.quantity}</td>
        <td>${(item.price * item.quantity).toFixed(2)} €</td>
        <td>
          <button class="button button-secondary" type="button" onclick="removeFromCart(${item.id})">
            Eliminar
          </button>
        </td>
      </tr>
    `).join("");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    itemCount.textContent = totalItems;
    total.textContent = `${totalPrice.toFixed(2)} €`;
  }
}

function renderCheckoutSummary() {
  const summary = document.getElementById("checkoutSummary");
  const total = document.getElementById("checkoutTotal");
  if (!summary || !total) return;

  const cart = getCart();
  if (cart.length === 0) {
    summary.innerHTML = "<p>No hay artículos en el carrito.</p>";
    total.textContent = "0 €";
    return;
  }

  summary.innerHTML = cart.map(item => `
    <p>${item.name} x ${item.quantity} <strong>${(item.price * item.quantity).toFixed(2)} €</strong></p>
  `).join("");

  const finalTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  total.textContent = `${finalTotal.toFixed(2)} €`;
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  const successMessage = document.getElementById("checkoutSuccess");
  if (!form || !successMessage) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    successMessage.classList.remove("hidden");
    form.reset();
    localStorage.removeItem("weddingCart");
    updateNavCartCount();
    renderCheckoutSummary();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavCartCount();
  renderTimeline();
  setupLightboxControls();
  startCountdown();
  renderGiftList();
  renderCart();
  renderCheckoutSummary();
  setupCheckoutForm();

  const clearCartButton = document.getElementById("clearCartButton");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }
});
