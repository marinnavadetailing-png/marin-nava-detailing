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
// Mobile navigation menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');

    mobileMenuButton.classList.toggle('active', isOpen);
    mobileMenuButton.setAttribute('aria-expanded', isOpen);
    mobileMenuButton.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuButton.classList.remove('active');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Open navigation menu');
    });
  });
}
