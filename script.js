document.querySelectorAll(".card").forEach((card, i) => {
  let move = true;
  setInterval(() => {
    card.style.transform += move ? " translateY(-6px)" : " translateY(0)";
    move = !move;
  }, 2000 + i * 300);
});

document.querySelectorAll(".photo").forEach((img, i) => {
  let dir = i % 2 === 0 ? 1 : -1;
  setInterval(() => {
    img.style.transform += ` translateY(${dir * 6}px)`;
    dir *= -1;
  }, 2500 + i * 300);
});

const card = document.querySelector(".image-card");
let up = true;

setInterval(() => {
  card.style.transform = up
    ? "rotate(6deg) translateY(-8px)"
    : "rotate(6deg) translateY(0)";
  up = !up;
}, 2200);

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 1;

function updateSlider(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index - 1]?.classList.add("active");
}

document.querySelector(".arrow.left").onclick = () => {
  current = current <= 1 ? slides.length - 2 : current - 1;
  updateSlider(current);
};

document.querySelector(".arrow.right").onclick = () => {
  current = current >= slides.length - 2 ? 1 : current + 1;
  updateSlider(current);
};
document.querySelector(".newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for subscribing!");
});

let active = 0;

setInterval(() => {
  dots.forEach(d => d.classList.remove("active"));
  active = (active + 1) % dots.length;
  dots[active].classList.add("active");
}, 3000);

document.querySelector(".subscribe-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Subscribed successfully!");
});


