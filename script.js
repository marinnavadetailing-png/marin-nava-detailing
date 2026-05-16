// EDIT YOUR WEBSITE HERE ONLY
const pricing = [
  {
    name: "Regular Interior Detail",
    price: "$90-$150",
    description: "Interior cleaning with steam included. Price depends on vehicle size and condition.",
    features: ["Vacuum and wipe down", "Steam cleaning included", "Dashboard & console cleaning", "Seats, carpets, and mats cleaned"]
  },
  {
    name: "Exterior Detail",
    price: "$65-$75",
    description: "Exterior wash and shine to boost curb appeal and leave the vehicle looking fresh.",
    features: ["Full exterior wash", "Wheel & tire cleaning", "Tire shine", "Clean finish"]
  },
  {
    name: "Showroom Package",
    price: "$150-$300",
    description: "Complete interior and exterior refresh for the best overall result.",
    featured: true,
    features: ["Interior + exterior detail", "Steam cleaning included", "Full rejuvenation treatment", "Best overall value"]
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
    price: "$60-$90",
    description: "Removes embedded contaminants and leaves the paint feeling smooth."
  },
  {
    name: "Wax Protection",
    price: "$35-$45",
    description: "Add-on service that adds shine and short-term protection to your paint."
  },
  {
    name: "Clay Bar + Wax",
    price: "$90-$130",
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
