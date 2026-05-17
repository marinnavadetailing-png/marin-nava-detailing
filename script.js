document.querySelectorAll('.compare-slider').forEach((slider) => {
  const input = slider.querySelector('input[type="range"]');
  if (!input) return;

  function update() {
    slider.style.setProperty('--position', `${input.value}%`);
  }

  input.addEventListener('input', update);
  update();
});
