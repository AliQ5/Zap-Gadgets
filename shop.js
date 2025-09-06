const products_data = [
  {
    PreviewImgPath: "Products/PR1/main.png",
    gallery: [
      "Products/PR1/1.jpeg",
      "Products/PR1/2.jpeg",
      "Products/PR1/3.jpeg",
    ],
    name: "Handy Fan",
    info: "Rechargeable 3-speed portable table fan with 3-blade design, quiet operation, and mobile stand function. Features lightweight build, USB charging, and 2–6 hours working time. Stylish purple-pink finish with gold accents makes it perfect for home, office, travel, or outdoor use.",
    price: 750,
    category: ["accessories", "home"]
  },
  {
    PreviewImgPath: "Products/PR2/main.png",
    gallery: ["Products/PR2/1.jpeg", "Products/PR2/2.jpeg"],
    name: "Umrah saving box",
    info: "Durable and practical saving box designed to help you set aside money for your Umrah journey. Features a secure slot for coins and notes, lightweight build, and elegant Islamic-inspired design. Compact enough for home or office use, making daily saving simple and meaningful.",
    price: 350,
    category: ["accessories", "home"]
  },
  {
    PreviewImgPath: "Products/PR3/main.png",
    gallery: [
      "Products/PR3/1.jpeg",
      "Products/PR3/2.jpeg",
      "Products/PR3/3.jpeg",
    ],
    name: "Jewelry Organiserx",
    info: "Compact travel-friendly jewelry box made with premium leather finish. Designed with multiple compartments for rings, earrings, necklaces, and bracelets, keeping your accessories safe and neatly arranged. Lightweight, durable, and stylish—perfect for daily use or travel.",
    price: 640,
    category: ["accessories", "organizers"]
  },
  {
    PreviewImgPath: "Products/PR4/main.png",
    gallery: [
      "Products/PR4/1.jpeg",
      "Products/PR4/2.jpeg",
    ],
    name: "Flying Fidget Spinner",
    info: "Rechargeable flying fidget spinner with colorful LED lights and smooth gyroscopic flight. Easy to launch, hover, and pass between friends. Durable ABS material with USB charging makes it a fun stress-relieving toy for kids and adults alike.",
    price: 1200,
    category: ["accessories", "toys"]
  },
  {
    PreviewImgPath: "Products/PR5/main.png",
    gallery: [
      "Products/PR5/1.jpeg",
      "Products/PR5/2.jpeg",
      "Products/PR5/3.jpeg",
    ],
    name: "Arabic Aura Watch",
    info: "Elegant black Arabic Aura wristwatch with minimalist dial featuring Arabic numerals. Crafted with a sleek stainless steel case, leather strap, and precise quartz movement. Perfect for both casual and formal wear, combining modern style with cultural elegance.",
    price: 1250,
    category: ["watches", "accessories"]
  },
  {
    PreviewImgPath: "Products/PR6/main.png",
    gallery: [
      "Products/PR6/1.jpeg",
      "Products/PR6/2.jpeg",
      "Products/PR6/3.jpeg",
    ],
    name: "Acrylic Jewelry Organizer",
    info: "Stylish acrylic jewelry organizer with double-heart shape design and 3 compartments. Perfect for storing rings, earrings, and small accessories.",
    price: 980,
    category: ["organizers", "accessories"]
  },
  {
    PreviewImgPath: "Products/PR7/main.png",
    gallery: [
      "Products/PR7/1.jpeg",
      "Products/PR7/2.jpeg",
      "Products/PR7/3.jpeg",
    ],
    name: "576 Artificial Nails Box",
    info: "Bulk set of 576 artificial nails for long-lasting nail art. Variety of sizes included, ideal for salons or personal use.",
    price: 900,
    category: ["accessories", "beauty"]
  },
  {
    PreviewImgPath: "Products/PR8/main.png",
    gallery: [
      "Products/PR8/1.jpeg",
      "Products/PR8/2.jpeg",
      "Products/PR8/3.jpeg",
    ],
    name: "Crown Candy Box",
    info: "The Crown Candy Box is a stylish double-layer rotating storage container designed to organize and serve snacks, candies, nuts, and dry fruits in an elegant way. With its 360° rotating base, it allows easy access to all compartments without lifting or moving the box. The transparent textured lid keeps contents fresh and visible, while the spacious multi-section design makes it perfect for gatherings, parties, or daily use. Built with durable, food-safe materials and a modern aesthetic, this candy box doubles as a decorative centerpiece for your table.",
    price: 3000,
    category: ["kitchen", "organizers", "home"]
  },
  {
    PreviewImgPath: "Products/PR9/main.png",
    gallery: [
      "Products/PR9/1.jpeg",
      "Products/PR9/2.jpeg",
      "Products/PR9/3.jpeg",
    ],
    name: "Panda Storage Box",
    info: "Cute panda-shaped multipurpose storage box for organizing stationery, cosmetics, or small household items. Durable, lightweight, and practical.",
    price: 300,
    category: ["organizers", "home", "accessories"]
  },
  {
    PreviewImgPath: "Products/PR10/main.png",
    gallery: [
      "Products/PR10/1.jpeg",
      "Products/PR10/2.jpeg",
    ],
    name: "Nano Double Tape 5M",
    info: "Strong transparent nano double-sided tape, reusable and washable. Perfect for mounting, fixing, or organizing without drilling or damaging surfaces. Length 5 meters.",
    price: 450,
    category: ["accessories", "home", "organizers"]
  },
  {
    PreviewImgPath: "Products/PR11/main.png",
    gallery: [
      "Products/PR11/1.jpeg",
      "Products/PR11/2.jpeg",
    ],
    name: "Colourful 5pcs Bowl Set",
    info: "Set of 5 premium stainless steel bowls in vibrant colours. Durable, rust-resistant, and perfect for serving, mixing, or storage.",
    price: 4250,
    category: ["accessories", "home", "organizers", "kitchen"]
  },
  {
    PreviewImgPath: "Products/PR12/main.png",
    gallery: [
      "Products/PR12/1.jpeg",
      "Products/PR12/2.jpeg",
    ],
    name: "85Pcs Sewing Tool Kit",
    info: "Complete sewing kit with 85 essential tools including needles, threads, scissors, tape measure, thimble, and more. Compact and portable for home or travel use.",
    price: 900,
    category: ["accessories", "home"]
  },
  {
    PreviewImgPath: "Products/PR13/main.png",
    gallery: [
      "Products/PR13/1.jpeg",
      "Products/PR13/2.jpeg",
      "Products/PR13/3.jpeg",
    ],
    name: "98pcs Sewing Kit",
    info: "Upgraded 98-piece sewing kit featuring a wide range of tools and accessories for beginners and pros. Neatly organized in a portable case.",
    price: 2100,
    category: ["accessories", "home"]
  },
  {
    PreviewImgPath: "Products/PR14/main.png",
    gallery: [
      "Products/PR14/1.jpeg",
      "Products/PR14/2.jpeg",
      "Products/PR14/3.jpeg",
    ],
    name: "3 Blades Vegetable Chopper",
    info: "The Eotia High Quality 3 Blades Vegetable Chopper is a compact and efficient kitchen tool designed to make food prep faster and easier. Built with three sharp stainless steel blades, it chops vegetables, fruits, nuts, and herbs in just a few pulls. The durable, food-grade plastic body and pull-string mechanism mean you don’t need electricity, making it perfect for everyday use or even outdoor cooking. Its lightweight, portable design, easy-to-clean parts, and mess-free chopping bowl save time while keeping your kitchen tidy. Whether it’s onions, garlic, salads, or dry fruits, this chopper helps you prepare ingredients in seconds with minimal effort.",
    price: 730,
    category: ["accessories", "home", "kitchen"]
  },
];

function renderProducts(card) {
  return card.map(products_data=> `
                    <div class="product-card info">
          <div class="product-image">
            <img src="${products_data.PreviewImgPath}" alt="Product Name" loading="lazy">
          </div>
          <div class="product-info">
            <h4 class="product-name">${products_data.name}</h4>
            <p class="product-desc">${products_data.info}</p>
            <div class="product-bottom">
              <span class="product-price">Rs ${products_data.price}</span>
              <button class="add-to-cart-btn Add-To-Cart" type="button"><i class="ri-shopping-cart-line"></i> Add to Cart</button>
            </div>
          </div>
        </div>
     `
  ).join('');
};


document.addEventListener("DOMContentLoaded", ()=>{
    let PrContainer = document.querySelector(".products-grid");
    if(PrContainer) PrContainer.innerHTML = renderProducts(products_data);
})

// Live search functionality for the search bar with class 'srch'
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector('.srch');
  const productsGrid = document.querySelector('.products-grid');
  const placeholder = document.getElementById('products-placeholder');

  if (!searchInput || !productsGrid) return;

  // Use the same products_data array as used for rendering
  let allProducts = Array.isArray(products_data) ? products_data : [];

  function filterProducts(query) {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      productsGrid.innerHTML = renderProducts(allProducts);
      if (placeholder) placeholder.style.display = "none";
      return;
    }
    // Filter by name or info
    const filtered = allProducts.filter(product =>
      (product.name && product.name.toLowerCase().includes(trimmed)) ||
      (product.info && product.info.toLowerCase().includes(trimmed))
    );
    if (filtered.length > 0) {
      productsGrid.innerHTML = renderProducts(filtered);
      if (placeholder) placeholder.style.display = "none";
    } else {
      productsGrid.innerHTML = "";
      if (placeholder) placeholder.style.display = "";
    }
  }

  // Attach input event directly (no debounce for instant feedback)
  searchInput.addEventListener('input', function(e) {
    filterProducts(e.target.value);
  });

  // Also handle search button click (if user clicks the search icon)
  const searchBtn = document.querySelector('.srch-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      filterProducts(searchInput.value);
    });
  }
});


// Real-time category filter for shop page

document.addEventListener("DOMContentLoaded", function() {
  const categoryCheckboxes = document.querySelectorAll('.category-list input[type="checkbox"]');
  const productsGrid = document.querySelector('.products-grid');
  const placeholder = document.getElementById('products-placeholder');

  if (!categoryCheckboxes.length || !productsGrid) return;

  // Helper: get all checked category values
  function getSelectedCategories() {
    return Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  // Helper: filter products by selected categories
  function filterByCategories(selectedCategories, products) {
    if (!Array.isArray(selectedCategories) || selectedCategories.length === 0) {
      return products;
    }
    return products.filter(product => {
      if (!Array.isArray(product.category)) return false;
      // Check if product has at least one of the selected categories
      return product.category.some(cat => selectedCategories.includes(cat));
    });
  }

  // Render products based on selected categories
  function updateCategoryFilter() {
    const selected = getSelectedCategories();
    const filtered = filterByCategories(selected, products_data);
    productsGrid.innerHTML = renderProducts(filtered);
    if (filtered.length === 0) {
      if (placeholder) placeholder.style.display = "";
    } else {
      if (placeholder) placeholder.style.display = "none";
    }
  }

  // Attach event listeners to all category checkboxes
  categoryCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateCategoryFilter);
  });

  // Initial render (in case some are pre-checked)
  updateCategoryFilter();
});

// Price Range Filter for shop page

document.addEventListener("DOMContentLoaded", function() {
  const minInput = document.querySelector('.price-min');
  const maxInput = document.querySelector('.price-max');
  const applyBtn = document.querySelector('.apply-filter-btn');
  const productsGrid = document.querySelector('.products-grid');
  const placeholder = document.getElementById('products-placeholder');
  const categoryCheckboxes = document.querySelectorAll('.category-list input[type="checkbox"]');

  // Helper: get all checked category values
  function getSelectedCategories() {
    return Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  // Helper: filter products by selected categories
  function filterByCategories(selectedCategories, products) {
    if (!Array.isArray(selectedCategories) || selectedCategories.length === 0) {
      return products;
    }
    return products.filter(product => {
      if (!Array.isArray(product.category)) return false;
      return product.category.some(cat => selectedCategories.includes(cat));
    });
  }

  // Helper: filter products by price range
  function filterByPriceRange(products, min, max) {
    return products.filter(product => {
      if (typeof product.price !== "number") return false;
      if (min !== null && product.price < min) return false;
      if (max !== null && product.price > max) return false;
      return true;
    });
  }

  // Render products based on selected categories and price range
  function updateFilters() {
    const selectedCategories = getSelectedCategories();
    let filtered = filterByCategories(selectedCategories, products_data);

    let min = minInput && minInput.value !== "" ? parseInt(minInput.value, 10) : null;
    let max = maxInput && maxInput.value !== "" ? parseInt(maxInput.value, 10) : null;
    if (isNaN(min)) min = null;
    if (isNaN(max)) max = null;

    filtered = filterByPriceRange(filtered, min, max);

    productsGrid.innerHTML = renderProducts(filtered);
    if (filtered.length === 0) {
      if (placeholder) placeholder.style.display = "";
    } else {
      if (placeholder) placeholder.style.display = "none";
    }
  }

  // Attach event listeners
  if (applyBtn) {
    applyBtn.addEventListener('click', updateFilters);
  }
  if (minInput) {
    minInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') updateFilters();
    });
  }
  if (maxInput) {
    maxInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') updateFilters();
    });
  }
  if (categoryCheckboxes.length) {
    categoryCheckboxes.forEach(cb => {
      cb.addEventListener('change', updateFilters);
    });
  }

  // Initial render
  updateFilters();
});


// Inject CSS and HTML for cart modal
document.addEventListener('DOMContentLoaded', function() {

  // Show/hide modal logic
  const cartBtn = document.querySelector('.cart-btn');
  const cartModalOverlay = document.getElementById('cart-modal-overlay');
  const cartModalClose = document.getElementById('cart-modal-close');

  function openCartModal() {
    cartModalOverlay.classList.add('active');
    cartModalOverlay.setAttribute('aria-hidden', 'false');
    // Trap focus inside modal
    cartModalOverlay.focus();
    document.body.style.overflow = 'hidden';
  }
  function closeCartModal() {
    cartModalOverlay.classList.remove('active');
    cartModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', openCartModal);
  }
  if (cartModalClose) {
    cartModalClose.addEventListener('click', closeCartModal);
  }
  // Close on overlay click (but not modal itself)
  if (cartModalOverlay) {
    cartModalOverlay.addEventListener('mousedown', function(e) {
      if (e.target === cartModalOverlay) closeCartModal();
    });
    // ESC key closes modal
    cartModalOverlay.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeCartModal();
    });
  }
});


// --- CART FUNCTIONALITY ---

// Utility: Get cart from localStorage or empty array, filter out invalid/undefined items
function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (Array.isArray(cart)) {
      // Filter out undefined/null/empty/invalid items
      return cart.filter(
        item =>
          item &&
          typeof item === "object" &&
          typeof item.name === "string" &&
          item.name.trim() !== "" &&
          typeof item.price !== "undefined" &&
          typeof item.img === "string" &&
          item.img.trim() !== ""
      );
    }
    return [];
  } catch (e) {
    return [];
  }
}

// Utility: Save cart to localStorage
function saveCart(cart) {
  // Filter out undefined/null/invalid items before saving
  const filteredCart = Array.isArray(cart)
    ? cart.filter(
        item =>
          item &&
          typeof item === "object" &&
          typeof item.name === "string" &&
          item.name.trim() !== "" &&
          typeof item.price !== "undefined" &&
          typeof item.img === "string" &&
          item.img.trim() !== ""
      )
    : [];
  localStorage.setItem('cart', JSON.stringify(filteredCart));
}

// Utility: Find product in cart by name (assuming unique name)
function findCartItem(cart, name) {
  return cart.find(item => item && item.name === name);
}

// Add product to cart (or increase qty if exists)
function addToCart(product) {
  // Validate product before adding
  if (
    !product ||
    typeof product !== "object" ||
    typeof product.name !== "string" ||
    product.name.trim() === "" ||
    typeof product.price === "undefined" ||
    typeof product.img !== "string" ||
    product.img.trim() === ""
  ) {
    // Invalid product, do not add
    return;
  }
  let cart = getCart();
  let existing = findCartItem(cart, product.name);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  renderCartModal();
}

// Remove product from cart by name
function removeFromCart(name) {
  let cart = getCart().filter(item => item && item.name !== name);
  saveCart(cart);
  renderCartModal();
}

// Update quantity (min 1)
function updateCartQty(name, qty) {
  let cart = getCart();
  let item = findCartItem(cart, name);
  if (item) {
    item.qty = Math.max(1, parseInt(qty, 10) || 1);
    saveCart(cart);
    renderCartModal();
  }
}

// Calculate total price
function getCartTotal() {
  let cart = getCart();
  return cart.reduce(
    (sum, item) =>
      sum +
      ((parseInt(item && item.price, 10) || 0) *
        (parseInt(item && item.qty, 10) || 1)),
    0
  );
}

// Render cart modal content
function renderCartModal() {
  const cartContent = document.getElementById('cart-modal-content');
  const totalAmount = document.getElementById('cart-total-amount');
  let cart = getCart();

  if (!cartContent) return;

  if (!Array.isArray(cart) || cart.length === 0) {
    cartContent.innerHTML = `<p class="cart-empty-msg">Your cart is empty.</p>`;
    if (totalAmount) totalAmount.textContent = "Rs0";
    return;
  }

  cartContent.innerHTML = cart
    .map(
      item =>
        item
          ? `
    <div class="cart-item" data-name="${item.name}">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img" style="width:48px;height:48px;border-radius:6px;object-fit:cover;margin-right:0.7em;">
      <div class="cart-item-info" style="flex:1;">
        <div class="cart-item-title" style="font-weight:600;">${item.name}</div>
        <div class="cart-item-price" style="color:#28A745;">Rs ${item.price}</div>
      </div>
      <div class="cart-item-qty-controls" style="display:flex;align-items:center;gap:0.3em;">
        <button class="cart-qty-btn cart-qty-decrease" aria-label="Decrease quantity" tabindex="0">-</button>
        <input type="number" class="cart-qty-input" min="1" value="${item.qty}" style="width:2.5em;text-align:center;font-size:1em;" aria-label="Quantity">
        <button class="cart-qty-btn cart-qty-increase" aria-label="Increase quantity" tabindex="0">+</button>
      </div>
      <button class="cart-item-remove" aria-label="Remove from cart" title="Remove">&times;</button>
    </div>
  `
          : ""
    )
    .join('');

  if (totalAmount) totalAmount.textContent = "Rs" + getCartTotal();

  // Attach event listeners for qty and remove
  cartContent.querySelectorAll('.cart-item').forEach(cartItemEl => {
    const name = cartItemEl.getAttribute('data-name');
    // Remove
    const removeBtn = cartItemEl.querySelector('.cart-item-remove');
    if (removeBtn) {
      removeBtn.onclick = () => removeFromCart(name);
    }
    // Decrease qty
    const decBtn = cartItemEl.querySelector('.cart-qty-decrease');
    if (decBtn) {
      decBtn.onclick = () => {
        let cart = getCart();
        let item = findCartItem(cart, name);
        if (item && item.qty > 1) {
          updateCartQty(name, item.qty - 1);
        }
      };
    }
    // Increase qty
    const incBtn = cartItemEl.querySelector('.cart-qty-increase');
    if (incBtn) {
      incBtn.onclick = () => {
        let cart = getCart();
        let item = findCartItem(cart, name);
        if (item) {
          updateCartQty(name, (parseInt(item.qty, 10) || 1) + 1);
        }
      };
    }
    // Direct input
    const qtyInput = cartItemEl.querySelector('.cart-qty-input');
    if (qtyInput) {
      qtyInput.onchange = (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        updateCartQty(name, val);
      };
    }
  });
}

// Attach event listeners to Add-To-Cart buttons (delegated for dynamic content)
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.Add-To-Cart');
  if (!btn) return;


  let card = btn.closest('.product-card');
  let imgEl, nameEl, priceEl;

  if (card) {
    imgEl = card.querySelector('.product-image img');
    nameEl = card.querySelector('.product-name');
    priceEl = card.querySelector('.product-price');
  } else {
    card = btn.closest('.f-card');
    if (!card) return;
    imgEl = card.querySelector('.f-img img');
    nameEl = card.querySelector('.f-title');
    priceEl = card.querySelector('.f-price');
  }

  // Validate product data before adding to cart
  if (
    !imgEl ||
    !nameEl ||
    !priceEl ||
    !imgEl.getAttribute('src') ||
    !nameEl.textContent.trim() ||
    !priceEl.textContent
  ) {
    return;
  }

  // Parse price (assume format "Rs 1234")
  let priceText = priceEl.textContent.replace(/[^0-9]/g, '');
  let price = parseInt(priceText, 10) || 0;

  // If price or name or img is invalid, do not add
  if (!price || !nameEl.textContent.trim() || !imgEl.getAttribute('src').trim()) {
    return;
  }

  const product = {
    img: imgEl.getAttribute('src'),
    name: nameEl.textContent.trim(),
    price: price
  };

  addToCart(product);

  // Optionally, open cart modal for feedback
  const cartModalOverlay = document.getElementById('cart-modal-overlay');
  if (cartModalOverlay) {
    cartModalOverlay.classList.add('active');
    cartModalOverlay.setAttribute('aria-hidden', 'false');
    cartModalOverlay.focus();
    document.body.style.overflow = 'hidden';
  }
});

// On page load, render cart modal from localStorage and clean up any undefined/invalid items
document.addEventListener('DOMContentLoaded', function() {
  // Clean up cart if there are any undefined/invalid items
  const cart = getCart();
  saveCart(cart); // This will filter and save only valid items
  renderCartModal();
});

// --- Category click navigation from home.html to shop.html with pre-selected filter ---

// This code should be included in shop.js, but it will also run on home.html if included there.
// It enables clicking a category card on home.html to navigate to shop.html and auto-select the relevant filter.

(function() {
  // Only run this on home.html
  if (!window.location.pathname.match(/home\.html$/i)) return;

  // Map data-labels to category values used in shop.html checkboxes
  const labelToValue = {
    "Kitchen Items": "kitchen",
    "Watches": "watches",
    "Smart Phones": "phones",
    "Car Cleaners": "car-cleaners",
    "Diy crafts": "accessories", // If you want "Diy crafts" to map to "accessories"
    "Diy": "accessories", // fallback
    "DIY crafts": "accessories"
  };

  // Find all category cards
  document.querySelectorAll('.ct-card[data-label]').forEach(function(card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const label = card.getAttribute('data-label');
      let value = labelToValue[label] || label.toLowerCase().replace(/\s+/g, '-');
      // Store selected category in sessionStorage
      sessionStorage.setItem('selectedCategory', value);
      // Navigate to shop.html
      window.location.href = 'index.html';
    });
  });
})();

// --- On shop.html, auto-select the category filter if set in sessionStorage ---
(function() {
  // Only run this on shop.html (index.html)
  if (!window.location.pathname.match(/index\.html$/i)) return;

  const selectedCategory = sessionStorage.getItem('selectedCategory');
  if (selectedCategory) {
    // Find the checkbox and check it
    const checkbox = document.querySelector('.category-list input[type="checkbox"][value="' + selectedCategory + '"]');
    if (checkbox) {
      checkbox.checked = true;
      // Optionally, trigger any filter logic if your shop page uses JS to filter products
      if (typeof applyCategoryFilter === 'function') {
        applyCategoryFilter(selectedCategory);
      } else {
        // If you have a filter button, click it
        const filterBtn = document.querySelector('.apply-filter-btn');
        if (filterBtn) filterBtn.click();
      }
    }
    // Remove after use
    sessionStorage.removeItem('selectedCategory');
  }
})();

// Home page (home.html) search-to-shop.html search transfer logic
(function() {
  // Only run on home.html (not index.html/shop.html)
  if (!window.location.pathname.match(/home\.html$/i)) return;

  // Find the home search bar input (class 'srchh' as per prompt, but in context it's 'search-input')
  // We'll support both 'srchh' and 'search-input' for robustness
  var searchInput = document.querySelector('.srchh') || document.querySelector('.search-input');
  if (!searchInput) return;

  // Find the form (if any) to listen for submit/Enter
  var form = searchInput.form || searchInput.closest('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var val = searchInput.value.trim();
      // Store in sessionStorage
      sessionStorage.setItem('shopSearchValue', val);
      // Go to shop page (index.html)
      window.location.href = 'index.html';
    });
  } else {
    // Fallback: listen for Enter key on input
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var val = searchInput.value.trim();
        sessionStorage.setItem('shopSearchValue', val);
        window.location.href = 'index.html';
      }
    });
  }
})();

// On shop.html, if sessionStorage has shopSearchValue, set it in the search bar
(function() {
  if (!window.location.pathname.match(/index\.html$/i)) return;
  var val = sessionStorage.getItem('shopSearchValue');
  if (val) {
    // Find the shop search bar input (class 'search-input')
    var shopInput = document.querySelector('.search-input');
    if (shopInput) {
      shopInput.value = val;
      // Optionally, trigger search logic if you have a function for it
      // For example, if you have a function searchProducts(val), call it here
      if (typeof searchProducts === 'function') {
        searchProducts(val);
      } else {
        // Or trigger the search button click if present
        var searchBtn = document.querySelector('.search-btn');
        if (searchBtn) searchBtn.click();
      }
    }
    sessionStorage.removeItem('shopSearchValue');
  }
})();


