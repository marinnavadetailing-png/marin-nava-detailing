/* EASY EDIT SECTION: change prices/services here */
const services = [
  { name: "Interior Detail", price: "$90–$150", description: "Vacuum, wipe down, steam cleaning, door jambs, mats, plastics, and interior refresh." },
  { name: "Exterior Detail", price: "$65–$75", description: "Foam wash, hand wash, wheels, tires, windows, and clean exterior finish." },
  { name: "Showroom Package", price: "$150–$300", description: "Interior + exterior detail for a full transformation. Price depends on size and condition." },
  { name: "Clay Bar Treatment", price: "Starting at $60", description: "Removes embedded contaminants and leaves paint feeling smooth." },
  { name: "Wax Protection", price: "$35–$45", description: "Adds gloss and short-term protection after your exterior wash." },
  { name: "Clay Bar + Wax", price: "Starting at $95", description: "Paint decontamination plus gloss protection for a cleaner finish." },
  { name: "Water Spot / Water Stain Removal", price: "Quote Required", description: "Depends on severity, affected areas, and whether polishing is needed." },
  { name: "Pet Hair / Heavy Stain Removal", price: "Quote Required", description: "Extra charge depending on amount of pet hair, stains, or buildup." }
];

const pricing = [
  { name: "Exterior Detail", price: "$65–$75", note: "Wash, wheels, tires, windows" },
  { name: "Interior Detail", price: "$90–$150", note: "Includes steam cleaning" },
  { name: "Showroom Package", price: "$150–$300", note: "Interior + exterior package" },
  { name: "Wax Add-On", price: "$35–$45", note: "Gloss and protection" }
];

const servicesGrid = document.getElementById("servicesGrid");
const pricingGrid = document.getElementById("pricingGrid");

if (servicesGrid) {
  servicesGrid.innerHTML = services.map(service => `
    <article class="service-card">
      <h3>${service.name}</h3>
      <strong>${service.price}</strong>
      <p>${service.description}</p>
    </article>
  `).join("");
}

if (pricingGrid) {
  pricingGrid.innerHTML = pricing.map(item => `
    <article class="price-card">
      <h3>${item.name}</h3>
      <strong>${item.price}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");
}
