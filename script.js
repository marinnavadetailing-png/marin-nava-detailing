document.querySelectorAll('.compare-slider').forEach((slider) => {
  const input = slider.querySelector('input[type="range"]');
  if (!input) return;

  function update() {
    slider.style.setProperty('--position', `${input.value}%`);
  }

  input.addEventListener('input', update);
  update();
});
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.closest(".faq-item");
    const currentIcon = button.querySelector(".faq-icon");
    const isAlreadyOpen = currentItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");

      const icon = item.querySelector(".faq-icon");

      if (icon) {
        icon.textContent = "+";
      }
    });

    if (!isAlreadyOpen) {
      currentItem.classList.add("active");
      currentIcon.textContent = "−";
    }
  });
});
