const products = [
  {
    name: "Temple Gold Necklace",
    category: "Necklaces",
    detail: "Traditional necklace design",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "A traditional temple-inspired gold necklace design. Ask us about the available gold purity, weight, and in-store options.",
  },
  {
    name: "Gold Jhumka Earrings",
    category: "Earrings",
    detail: "Classic jhumka style",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "A classic jhumka-style gold earring design. Ask us about the available gold purity, weight, and in-store options.",
  },
  {
    name: "Classic Gold Ring",
    category: "Rings",
    detail: "An elegant everyday design",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "A timeless gold ring design. Ask us about available sizes, gold purity, weight, and in-store options.",
  },
  {
    name: "Traditional Gold Bangles",
    category: "Bangles",
    detail: "A pair for every occasion",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description: "Traditional gold bangles for everyday wear or celebrations. Ask us about the available gold purity, sizes, and in-store options.",
  },
  {
    name: "Bridal Gold Haram",
    category: "Bridal",
    detail: "A statement for your special day",
    tag: "Bridal gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "A statement bridal gold haram design for special occasions. Ask us about the available gold purity, weight, and custom options.",
  },
  {
    name: "Gold Drop Earrings",
    category: "Earrings",
    detail: "A graceful traditional style",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    description: "A graceful drop-style gold earring design. Ask us about the available gold purity, weight, and in-store options.",
  },
  {
    name: "Everyday Gold Chain",
    category: "Chains",
    detail: "A classic chain for daily wear",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80",
    description: "A versatile gold chain design for everyday wear. Ask us about the available gold purity, weight, and lengths.",
  },
  {
    name: "Gold Pendant",
    category: "Pendants",
    detail: "A delicate accent for your chain",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "A delicate gold pendant design to pair with your favourite chain. Ask us about the available gold purity, weight, and in-store options.",
  },
  {
    name: "Lakshmi Kasu Mala",
    category: "Necklaces",
    detail: "Traditional coin necklace",
    tag: "Traditional gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "A traditional kasu mala-inspired gold necklace. Ask us about available gold purity, weight, and in-store designs.",
  },
  {
    name: "Gold Mangalsutra",
    category: "Mangalsutra",
    detail: "A meaningful everyday piece",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80",
    description: "A classic gold mangalsutra design for everyday wear. Ask us about available styles, gold purity, and weight.",
  },
  {
    name: "Gold Kada Pair",
    category: "Bangles",
    detail: "Bold traditional wristwear",
    tag: "Traditional gold",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description: "A pair of traditional gold kadas for festive and everyday wear. Ask us about available sizes, gold purity, and weight.",
  },
  {
    name: "Gold Anklet Pair",
    category: "Anklets",
    detail: "A delicate finishing touch",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "A delicate anklet design. Ask us about available sizes, gold purity, weight, and in-store options.",
  },
  {
    name: "Gold Maang Tikka",
    category: "Bridal",
    detail: "A bridal look finished beautifully",
    tag: "Bridal gold",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    description: "A traditional gold maang tikka for bridal and festive occasions. Ask us about in-store designs and custom options.",
  },
  {
    name: "Gold Nose Pin",
    category: "Nose Pins",
    detail: "A small detail with a golden glow",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "A delicate gold nose pin design. Ask us about available styles, gold purity, and in-store options.",
  },
  {
    name: "Kids Gold Bracelet",
    category: "Kids Jewellery",
    detail: "A keepsake for little moments",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "A sweet gold bracelet design for children. Ask us about available sizes, gold purity, and weight.",
  },
  {
    name: "Gold Toe Rings",
    category: "Rings",
    detail: "Traditional everyday jewellery",
    tag: "Gold ornament",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Traditional toe ring designs. Ask us about available sizes, gold purity, and in-store options.",
  },
];

const defaultRates = { "24K": 11250, "22K": 10312.5, "18K": 8437.5 };
const ratesStorageKey = "ks-jewellery-store-rates";
const grid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const designDialog = document.querySelector("#design-dialog");
const rateDialog = document.querySelector("#rate-dialog");
let selectedCategory = "All";

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = `${product.name} ${product.category} ${product.detail}`
      .toLocaleLowerCase()
      .includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  grid.replaceChildren(
    ...visibleProducts.map((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      const imageButton = document.createElement("button");
      imageButton.className = "product-image";
      imageButton.type = "button";
      imageButton.setAttribute("aria-label", `View ${product.name}`);
      imageButton.addEventListener("click", () => openProduct(product));

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";

      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.tag;
      imageButton.append(image, tag);

      const info = document.createElement("div");
      info.className = "product-info";

      const category = document.createElement("p");
      category.className = "product-category";
      category.textContent = product.category;

      const name = document.createElement("h3");
      name.className = "product-name";
      name.textContent = product.name;

      const detail = document.createElement("p");
      detail.className = "product-detail";
      detail.textContent = product.detail;
      info.append(category, name, detail);
      card.append(imageButton, info);
      return card;
    }),
  );
  emptyState.hidden = visibleProducts.length > 0;
}

function openProduct(product) {
  document.querySelector("#dialog-image").src = product.image;
  document.querySelector("#dialog-image").alt = product.name;
  document.querySelector("#dialog-category").textContent = product.category;
  document.querySelector("#design-title").textContent = product.name;
  document.querySelector("#dialog-description").textContent = product.description;
  designDialog.showModal();
}

function readRates() {
  const savedRates = localStorage.getItem(ratesStorageKey);
  if (!savedRates) {
    return { rates: defaultRates, updatedAt: null };
  }

  try {
    const parsed = JSON.parse(savedRates);
    const validRates = ["24K", "22K", "18K"].every(
      (karat) => Number.isFinite(parsed.rates?.[karat]) && parsed.rates[karat] > 0,
    );
    if (validRates && typeof parsed.updatedAt === "string") {
      return parsed;
    }
  } catch (error) {
    console.error("Could not read saved gold rates.", error);
  }

  return { rates: defaultRates, updatedAt: null };
}

function renderRates() {
  const { rates, updatedAt } = readRates();
  const rateValues = document.querySelector("#rate-values");
  rateValues.replaceChildren(
    ...["24K", "22K", "18K"].map((karat) => {
      const item = document.createElement("div");
      item.className = "rate-value";

      const label = document.createElement("span");
      label.className = "rate-karat";
      label.textContent = karat;

      const amount = document.createElement("span");
      amount.className = "rate-amount";
      amount.textContent = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(rates[karat]);

      const unit = document.createElement("small");
      unit.textContent = "per gram";
      amount.append(unit);
      item.append(label, amount);
      return item;
    }),
  );

  const updatedLabel = updatedAt
    ? `Updated ${new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(updatedAt))}`
    : "Sample rates — update with your store's prices";
  document.querySelector("#rate-updated").textContent = updatedLabel;
}

document.querySelectorAll(".category-chip").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    document.querySelector(".category-chip.active").classList.remove("active");
    button.classList.add("active");
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

document.querySelector("#edit-rates-button").addEventListener("click", () => {
  const { rates } = readRates();
  const form = document.querySelector("#rate-form");
  ["24K", "22K", "18K"].forEach((karat) => {
    form.elements.namedItem(karat).value = rates[karat];
  });
  rateDialog.showModal();
});

document.querySelector("#close-rate-dialog").addEventListener("click", () => rateDialog.close());
document.querySelector(".dialog-close").addEventListener("click", () => designDialog.close());

document.querySelector("#rate-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const rates = Object.fromEntries(
    ["24K", "22K", "18K"].map((karat) => [karat, Number(formData.get(karat))]),
  );
  if (Object.values(rates).some((rate) => !Number.isFinite(rate) || rate <= 0)) {
    return;
  }

  try {
    localStorage.setItem(ratesStorageKey, JSON.stringify({ rates, updatedAt: new Date().toISOString() }));
  } catch (error) {
    console.error("Could not save gold rates in this browser.", error);
    window.alert("The rates could not be saved in this browser. Please check your browser storage settings.");
    return;
  }

  renderRates();
  rateDialog.close();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProducts();
renderRates();
