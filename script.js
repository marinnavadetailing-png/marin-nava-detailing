// EDIT YOUR WEBSITE HERE ONLY
const pricing = [
  {
    name: "Interior Revival",
    price: "$90-$150",
    description: "Deep interior cleaning for vehicles with heavy use, pet hair, stains, or smells.",
    features: ["Deep interior cleaning", "Odor elimination", "Dashboard & console cleaning", "Vacuum and wipe down"]
  },
  {
    name: "Exterior Enhancement",
    price: "$75-$95",
    description: "Exterior wash and shine to boost curb appeal and protect your finish.",
    features: ["Full exterior wash", "Wheel & tire cleaning", "Plastic trim restoration", "Paint protection"]
  },
  {
    name: "Showroom Package",
    price: "$150-$225",
    description: "Complete interior and exterior refresh for the best overall result.",
    featured: true,
    features: ["Interior + exterior detail", "Full rejuvenation treatment", "Paint protection & shine", "Best overall value"]
  }
];

const extras = [
  {
    name: "Headlight Restoration",
    price: "$80 for both headlights",
    description: "Multi-stage restoration to improve clarity, brightness, safety, and appearance."
  },
  {
    name: "Water Spot / Water Stain Removal",
    price: "Quote Required",
    description: "Price depends on severity, affected areas, and whether polishing is needed."
  },
  {
    name: "Carpet / Seat Shampoo",
    price: "$50-$100",
    description: "Deep shampoo and extraction for carpets, seats, stains, dirt, and odors."
  },
  {
    name: "Clay Bar Treatment",
    price: "Starting at $60",
    description: "Removes embedded contaminants and leaves the paint feeling smooth."
  },
  {
    name: "Wax Protection",
    price: "Starting at $50",
    description: "Adds shine and short-term protection to your paint."
  },
  {
    name: "Clay Bar + Wax",
    price: "Starting at $100",
    description: "Paint decontamination followed by wax protection for a smoother, cleaner finish."
  },
  {
    name: "Pet Hair Removal",
    price: "Starting at $40",
    description: "Extra charge depending on the amount of pet hair and vehicle condition."
  },
  {
    name: "Polishing / Ceramic Coating",
    price: "Quote Required",
    description: "Text us for a custom quote based on paint condition and protection wanted."
  }
];

function makeCard(item, index) {
  return `
    <article class="card ${item.featured ? 'featured' : ''}">
      ${item.featured ? '<span class="badge">MOST POPULAR</span>' : ''}
      <h3>${item.name}</h3>
      <div class="price">${item.price}</div>
      <p>${item.description || ''}</p>
      ${item.features ? `<ul>${item.features.map(feature => `<li>${feature}</li>`).join('')}</ul>` : ''}
    </article>
  `;
}

document.querySelector('.pricing-grid').innerHTML = pricing.map(makeCard).join('');
document.querySelector('.extras-grid').innerHTML = extras.map(makeCard).join('');
document.querySelector('#year').textContent = new Date().getFullYear();
