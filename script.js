const meter = document.querySelector(".scroll-meter");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const projectCards = [...document.querySelectorAll(".project-card")];
const tickerTrack = document.querySelector(".ticker-track");

if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}

const updateScrollMeter = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  meter.style.width = `${Math.min(progress * 100, 100)}%`;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

projectCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
    card.style.transform = `translateY(-5px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

window.addEventListener("scroll", updateScrollMeter, { passive: true });
updateScrollMeter();
