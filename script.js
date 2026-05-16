/* EASY EDIT SECTION: change prices/services here */
const mainPackages = [
  { name: "Exterior Detail", price: "$65–$95+", description: "Foam wash, hand wash, wheels, tires, door jambs, exterior windows, wax protection, and tire shine. Price depends on vehicle size and condition." },
  { name: "Interior Detail", price: "$120–$250+", description: "Deep vacuum, steam cleaning, full interior wipe down, dash, door panels, center console, cupholders, steering wheel, trim, tight-spot detailing, seats, carpets, and interior windows." },
  { name: "Showroom Package", price: "$165–$250+", description: "Interior and exterior detail together for a full reset. Price depends on vehicle size, condition, and time required." }
];

const addOns = [
  { name: "Wax Protection", price: "$35–$45", description: "Adds gloss and short-term paint protection after your exterior detail." },
  { name: "Clay Bar Treatment", price: "Starting at $60", description: "Removes embedded contaminants and leaves paint feeling smooth." },
  { name: "Clay Bar + Wax", price: "Starting at $100", description: "Paint decontamination plus wax protection for a smoother, glossier finish." },
  { name: "Headlight Restoration", price: "Quote Required", description: "Restores hazy/yellow headlights for better clarity and appearance." },
  { name: "Water Spot / Water Stain Removal", price: "Quote Required", description: "Price depends on severity, affected areas, and time needed." },
  { name: "Paint Polishing", price: "Coming Soon", description: "Not available yet, but planned for future service options." },
  { name: "Ceramic Coating", price: "Coming Soon", description: "Not available yet, but planned for future service options." }
];

const servicesGrid = document.getElementById("servicesGrid");
const pricingGrid = document.getElementById("pricingGrid");
const addonsGrid = document.getElementById("addonsGrid");

function cardMarkup(item) {
  return `
    <article class="service-card ${item.price === 'Coming Soon' ? 'coming-soon' : ''}">
      <h3>${item.name}</h3>
      <strong>${item.price}</strong>
      <p>${item.description}</p>
    </article>
  `;
}

if (servicesGrid) {
  servicesGrid.innerHTML = [...mainPackages, ...addOns].map(cardMarkup).join("");
}

if (pricingGrid) {
  pricingGrid.innerHTML = mainPackages.map(item => `
    <article class="price-card">
      <h3>${item.name}</h3>
      <strong>${item.price}</strong>
      <p>${item.description}</p>
    </article>
  `).join("");
}

if (addonsGrid) {
  addonsGrid.innerHTML = addOns.map(item => `
    <article class="addon-row ${item.price === 'Coming Soon' ? 'coming-soon' : ''}">
      <span>${item.name}</span>
      <strong>${item.price}</strong>
    </article>
  `).join("");
}

function setupCompareSliders(root = document) {
  root.querySelectorAll('.compare-slider').forEach(slider => {
    const range = slider.querySelector('input[type="range"]');
    if (!range) return;
    const update = () => slider.style.setProperty('--position', `${range.value}%`);
    range.addEventListener('input', update);
    update();
  });
}

setupCompareSliders();
