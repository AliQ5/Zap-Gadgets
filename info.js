/**
 * Product Info "Page 7" Module
 * When a card with class 'info' is clicked, show a full-page section at the top of the page
 * (not a popup/overlay) with image slider, name, price, info, and Add to Cart button.
 * Uses the color palette from :root in style.css.
 * 
 * - Images for the slider are taken from the shop.js products_data (gallery and PreviewImgPath).
 * - Does NOT disable the scroll bar when this section appears.
 * 
 * - If the section is already open and another card is clicked, update the section with the new card's data.
 */

(function() {
  // --- BEGIN: products_data import (from shop.js) ---
  // This assumes products_data is available globally, as in shop.js.
  // If not, you can import or require it as needed.
  // --- END: products_data import ---

  // Helper: Find product in products_data by card info (name or data-name)
  function findProductFromCard(card) {
    // Try to get name from card
    let name = card.getAttribute('data-name');
    if (!name) {
      let nameEl = card.querySelector('.product-name, .f-title, .fcard-title, .name, .title');
      if (!nameEl) nameEl = card.querySelector('h2, h3, h4, .ct-title');
      name = nameEl ? nameEl.textContent.trim() : '';
    }
    // Fallback: try to get from data-product-index
    let idx = -1;
    if (card.hasAttribute('data-product-index')) {
      idx = parseInt(card.getAttribute('data-product-index'), 10);
      if (!isNaN(idx) && products_data[idx]) return products_data[idx];
    }
    // Find by name (case-insensitive)
    if (name) {
      let prod = products_data.find(
        p => (p.name && p.name.trim().toLowerCase() === name.trim().toLowerCase())
      );
      if (prod) return prod;
    }
    // Fallback: try to match by image src
    let imgEl = card.querySelector('img');
    if (imgEl && imgEl.src) {
      let prod = products_data.find(
        p => p.PreviewImgPath && imgEl.src.includes(p.PreviewImgPath)
      );
      if (prod) return prod;
    }
    // Not found, return null
    return null;
  }

  // Helper: Compose images for slider from product (gallery and PreviewImgPath)
  function getProductImages(product) {
    if (!product) return ['https://via.placeholder.com/220x220?text=No+Image'];
    let images = [];
    if (product.PreviewImgPath) images.push(product.PreviewImgPath);
    if (Array.isArray(product.gallery)) {
      product.gallery.forEach(src => {
        if (typeof src === 'string' && src.trim() && !images.includes(src)) images.push(src);
      });
    }
    // Remove duplicates, keep order
    images = images.filter((v, i, arr) => arr.indexOf(v) === i);
    if (images.length === 0) images.push('https://via.placeholder.com/220x220?text=No+Image');
    return images;
  }

  // Helper: Create the full-page info section
  function createInfoSection(product, images) {
    const section = document.createElement('section');
    section.className = 'product-info-section zapg-page7';
    section.setAttribute('id', 'page-7');
    section.innerHTML = `
      <div class="zapg-page7-container">
        <button class="zapg-page7-close" aria-label="Close">&times;</button>
        <div class="zapg-page7-content">
          <div class="zapg-page7-slider">
            <button class="zapg-slider-btn zapg-slider-prev" aria-label="Previous Image">&#8592;</button>
            <div class="zapg-slider-images">
              ${images.map((src, i) => `
                <img src="${src}" alt="${product.name} image ${i+1}" class="zapg-slider-img${i===0?' active':''}" loading="lazy">
              `).join('')}
            </div>
            <button class="zapg-slider-btn zapg-slider-next" aria-label="Next Image">&#8594;</button>
          </div>
          <div class="zapg-page7-details">
            <h2 class="zapg-product-name">${product.name}</h2>
            <div class="zapg-product-price">Rs ${product.price}</div>
            <div class="zapg-product-info">${product.info}</div>
            <button class="zapg-add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <style>
        .product-info-section.zapg-page7 {
          width: 100vw;
          min-height: 100vh;
          background: var(--bg-soft, #F7F8FC);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          z-index: 1000;
          font-family: var(--Secondary-font, 'Open Sans', sans-serif);
          padding-top: 48px;
          box-sizing: border-box;
        }
        .zapg-page7-container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          background: var(--bg-light, #F8F9FA);
          border-radius: 18px;
          box-shadow: 0 8px 32px var(--shadow, rgba(0,0,0,0.1));
          padding: 2.5rem 2rem 2.5rem 2rem;
          position: relative;
        }
        .zapg-page7-close {
          position: absolute; top: 18px; right: 18px;
          background: none; border: none; font-size: 2rem; color: var(--danger, #DC3545);
          cursor: pointer; z-index: 2; transition: color 0.2s;
        }
        .zapg-page7-close:hover { color: var(--primary, #007AFF);}
        .zapg-page7-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .zapg-page7-slider {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.2rem;
        }
        .zapg-slider-btn {
          background: var(--primary, #007AFF);
          color: #fff; border: none; border-radius: 50%;
          width: 36px; height: 36px; font-size: 1.2rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; margin: 0 8px; transition: background 0.2s;
        }
        .zapg-slider-btn:hover { background: var(--primary-hover, #66CCFF);}
        .zapg-slider-images {
          width: 260px; height: 260px; display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; border-radius: 12px;
          background: var(--bg-light, #F8F9FA);
        }
        .zapg-slider-img {
          width: 100%; height: 100%; object-fit: contain;
          position: absolute; top:0; left:0; opacity: 0; transition: opacity 0.3s;
          pointer-events: none;
        }
        .zapg-slider-img.active { opacity: 1; pointer-events: auto; position: relative; }
        .zapg-page7-details {
          margin-top: 1.2rem; text-align: center;
        }
        .zapg-product-name {
          font-family: var(--Primary-font, 'Montserrat', sans-serif);
          color: var(--text-main, #343A40);
          font-size: 1.7rem; font-weight: 700; margin-bottom: 0.5rem;
        }
        .zapg-product-price {
          color: var(--primary, #007AFF);
          font-size: 1.2rem; font-weight: 600; margin-bottom: 0.7rem;
        }
        .zapg-product-info {
          color: var(--text-muted, #6C757D);
          font-size: 1rem; margin-bottom: 1.2rem;
        }
        .zapg-add-to-cart-btn {
          background: var(--primary, #007AFF);
          color: #fff; border: none; border-radius: 6px;
          padding: 0.7rem 2.2rem; font-size: 1.1rem; font-weight: 600;
          cursor: pointer; box-shadow: 0 2px 8px var(--shadow, rgba(0,0,0,0.1));
          transition: background 0.2s, box-shadow 0.2s;
        }
        .zapg-add-to-cart-btn:hover {
          background: var(--primary-hover, #66CCFF);
          color: var(--text-strong, #212529);
          box-shadow: 0 4px 16px var(--shadow, rgba(0,0,0,0.13));
        }
        @media (max-width: 700px) {
          .zapg-page7-container { padding: 1.2rem 0.5rem; }
          .zapg-slider-images { width: 140px; height: 140px;}
        }
      </style>
    `;
    return section;
  }

  // Helper: Update the info section with new product data
  function updateInfoSection(section, product, images) {
    // Update images
    const sliderImagesDiv = section.querySelector('.zapg-slider-images');
    sliderImagesDiv.innerHTML = images.map((src, i) => `
      <img src="${src}" alt="${product.name} image ${i+1}" class="zapg-slider-img${i===0?' active':''}" loading="lazy">
    `).join('');
    // Update name, price, info
    section.querySelector('.zapg-product-name').textContent = product.name;
    section.querySelector('.zapg-product-price').textContent = `Rs ${product.price}`;
    section.querySelector('.zapg-product-info').textContent = product.info;
    // Reset Add to Cart button
    const addBtn = section.querySelector('.zapg-add-to-cart-btn');
    addBtn.textContent = "Add to Cart";
    addBtn.disabled = false;
  }

  // Helper: Add to cart (compatible with shop.js)
  function addToCart(product) {
    if (typeof window.addToCart === 'function') {
      window.addToCart(product);
      return;
    }
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e){}
    let idx = cart.findIndex(item => item.name === product.name);
    if (idx >= 0) {
      cart[idx].qty = (parseInt(cart[idx].qty,10)||1) + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Helper: Open cart modal if present
  function openCartModal() {
    const cartModalOverlay = document.getElementById('cart-modal-overlay');
    if (cartModalOverlay) {
      cartModalOverlay.classList.add('active');
      cartModalOverlay.setAttribute('aria-hidden', 'false');
      cartModalOverlay.focus();
      // DO NOT disable scroll bar here!
      // document.body.style.overflow = 'hidden';
    }
  }

  // Section event delegation
  function setupSectionEvents(section, product, images) {
    // Close section
    function closeSection() {
      section.remove();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    section.querySelector('.zapg-page7-close').onclick = closeSection;

    // Image slider logic
    let imgs = section.querySelectorAll('.zapg-slider-img');
    let idx = 0;
    function showImg(i) {
      imgs.forEach((img, j) => img.classList.toggle('active', j === i));
    }
    section.querySelector('.zapg-slider-prev').onclick = function() {
      imgs = section.querySelectorAll('.zapg-slider-img');
      idx = (idx - 1 + imgs.length) % imgs.length;
      showImg(idx);
    };
    section.querySelector('.zapg-slider-next').onclick = function() {
      imgs = section.querySelectorAll('.zapg-slider-img');
      idx = (idx + 1) % imgs.length;
      showImg(idx);
    };

    // Add to Cart button
    section.querySelector('.zapg-add-to-cart-btn').onclick = function() {
      addToCart({
        img: images[0],
        name: product.name,
        price: product.price
      });
      openCartModal();
      this.textContent = "Added!";
      this.disabled = true;
      setTimeout(() => {
        this.textContent = "Add to Cart";
        this.disabled = false;
      }, 1200);
    };
  }

  // Main: Listen for clicks on .info cards
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.info');
    if (!card) return;

    // Find product from products_data
    const product = findProductFromCard(card);
    if (!product) {
      // fallback: show nothing or show a placeholder
      alert("Product not found in products_data.");
      return;
    }
    const images = getProductImages(product);

    let section = document.getElementById('page-7');
    if (!section) {
      // Create and show section at the top of the body
      section = createInfoSection(product, images);
      document.body.insertBefore(section, document.body.firstChild);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setupSectionEvents(section, product, images);
    } else {
      // Section already exists: update its content
      updateInfoSection(section, product, images);

      // Remove and re-add slider event listeners and Add to Cart for new product
      setupSectionEvents(section, product, images);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();


// --- Checkout Section (Page-8) Logic ---

// Helper: Get cart from localStorage, always ensure quantity is at least 1
function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.forEach(item => {
    if (typeof item.quantity !== 'number' || item.quantity < 1) {
      item.quantity = 1;
    }
  });
  return cart;
}

// Helper: Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Helper: Calculate total price (with/without delivery)
function calculateTotal(cart, paymentMethod) {
  let total = 0;
  cart.forEach(item => {
    total += item.price * (item.quantity || 1);
  });
  if (paymentMethod === 'cod') {
    total += 150; // Delivery cost
  }
  return total;
}

// Helper: Find product in cart by name
function findCartItem(cart, name) {
  return cart.find(item => item.name === name);
}

// Remove page-7 if open
function closePage7() {
  const page7 = document.getElementById('page-7');
  if (page7) page7.remove();
}

// Remove page-8 if open
function closePage8() {
  const page8 = document.getElementById('page-8');
  if (page8) page8.remove();
}

// Create and show checkout section (page-8) as a page section, not overlay
function openCheckoutSection() {
  closePage7();
  closePage8();

  const cart = getCart();
  const section = document.createElement('section');
  section.id = 'page-8';
  section.style = `
    width: 100vw;
    min-height: 100vh;
    background: var(--bg-main, #f7f8fa);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
  `;

  // Responsive & modern checkout content as a page section
  section.innerHTML = `
    <div class="checkout-main-box" style="
      background: var(--bg-soft, #fff);
      border-radius: 20px;
      box-shadow: 0 8px 32px var(--shadow, rgba(0,0,0,0.13));
      max-width: 420px;
      width: 96vw;
      padding: 2.2rem 1.2rem 1.5rem 1.2rem;
      position: relative;
      color: var(--text-main, #23272F);
      font-family: var(--Secondary-font, 'Open Sans', sans-serif);
      margin: 2vw auto 2vw auto;
      transition: box-shadow 0.2s, max-width 0.5s cubic-bezier(.4,0,.2,1);
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      min-height: 80vh;
      overflow: visible;
    ">
      <button id="close-checkout-section" style="
        position: absolute; top: 18px; right: 18px;
        background: none; border: none; font-size: 2.1rem;
        color: var(--danger, #DC3545); cursor: pointer; line-height: 1;
        transition: color 0.2s;
      " title="Close">
        <i class="ri-close-circle-line"></i>
      </button>
      <h2 style="font-family: var(--Primary-font, 'Montserrat', sans-serif); font-size: 1.7rem; margin-bottom: 0.7rem; color: var(--primary, #007AFF); text-align:center; letter-spacing:0.01em;">
        <i class="ri-shopping-bag-3-line" style="vertical-align:middle;"></i> Checkout
      </h2>
      <div id="checkout-cart-list" style="margin-bottom: 1.1rem; max-height: 220px; overflow-y: auto; border-radius: 12px;">
        <!-- Cart items will be rendered here -->
      </div>
      <div style="margin-bottom: 1.1rem; position: relative;">
        <label style="font-weight:600;display:block;margin-bottom:0.3rem;"><i class="ri-bank-card-line" style="color:var(--primary,#007AFF);margin-right:0.3em;"></i>Payment Method:</label>
        <div style="margin-top: 0.2rem; display:flex; gap:1.2rem;">
          <label style="display:flex;align-items:center;gap:0.4em;cursor:pointer;">
            <input type="radio" name="payment-method" value="cod" checked style="accent-color:var(--primary,#007AFF);">
            <span><i class="ri-cash-line"></i> Cash on Delivery <span style="color:var(--danger,#DC3545;font-size:0.95em;">(+Rs150)</span></span>
          </label>
          <label style="display:flex;align-items:center;gap:0.4em;cursor:pointer;">
            <input type="radio" name="payment-method" value="online" style="accent-color:var(--primary,#007AFF);">
            <span><i class="ri-qr-scan-2-line"></i> Online (Easypaisa QR)</span>
          </label>
        </div>
        <div id="online-info-panel" class="online-info-panel" style="
          display: none;
        ">
          <div style="flex-shrink:0;display:flex;align-items:center;justify-content:center;">
            <img src="QR/COde.jpeg" alt="Easypaisa QR Code" style="width:140px;height:140px;object-fit:contain;border-radius:10px;border:2px solid var(--border,#E9ECEF);background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:1.08em;margin-bottom:0.4em;">
              <i class="ri-information-line" style="color:var(--primary,#007AFF);margin-right:0.3em;"></i>
              Online Payment Instructions
            </div>
            <ol style="font-size:0.98em;line-height:1.6;margin:0 0 0.5em 1.2em;padding:0;">
              <li>Scan the QR code using your Easypaisa app or any compatible banking app.</li>
              <li>Send the total amount to the following account:</li>
            </ol>
            <div style="margin-bottom:0.5em;padding:0.5em 0.8em;background:#eaf6ff;border-radius:7px;">
              <div style="font-weight:600;">Account Name: <span style="color:var(--primary,#007AFF);">ALI AHMED FAROOQ</span></div>
              <div style="font-weight:600;">Account Type: <span style="color:var(--primary,#007AFF);">Easypaisa</span></div>
            </div>
            <ol start="3" style="font-size:0.98em;line-height:1.6;margin:0 0 0.5em 1.2em;padding:0;">
              <li>After payment, take a screenshot of the successful transaction.</li>
              <li>Upload the screenshot below as proof of payment.</li>
            </ol>
            <form id="online-proof-form" style="margin-top:0.7em;display:flex;flex-direction:column;gap:0.5em;">
              <label style="font-weight:500;font-size:0.98em;">Upload Payment Screenshot (required):</label>
              <input type="file" name="payment_proof" accept="image/*" required style="padding:0.4em 0.2em;">
              <div id="proof-preview" style="margin-top:0.3em;"></div>
            </form>
          </div>
        </div>
      </div>
      <form id="checkout-user-form" autocomplete="off" style="margin-bottom: 1.1rem;display:flex;flex-direction:column;gap:0.6rem;">
        <div>
          <input type="text" name="user_name" placeholder="Your Name" required style="width:100%;padding:0.6rem 0.9rem;border:1.5px solid var(--border,#E9ECEF);border-radius:8px;font-size:1rem;outline:none;transition:border 0.2s;">
        </div>
        <div>
          <input type="text" name="user_address" placeholder="Address" required style="width:100%;padding:0.6rem 0.9rem;border:1.5px solid var(--border,#E9ECEF);border-radius:8px;font-size:1rem;outline:none;transition:border 0.2s;">
        </div>
        <div>
          <input type="tel" name="user_contact" placeholder="Contact No" required pattern="\\d{10,15}" style="width:100%;padding:0.6rem 0.9rem;border:1.5px solid var(--border,#E9ECEF);border-radius:8px;font-size:1rem;outline:none;transition:border 0.2s;">
        </div>
      </form>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.1rem;">
        <span style="font-weight:600;font-size:1.08rem;"><i class="ri-money-dollar-circle-line" style="color:var(--primary,#007AFF);margin-right:0.2em;"></i>Total:</span>
        <span id="checkout-total" style="font-size:1.25rem;color:var(--primary,#007AFF);font-weight:700;">Rs0</span>
      </div>
      <button id="confirm-order-btn" style="
        width:100%;padding:0.85rem 0;
        background: linear-gradient(90deg, var(--primary,#007AFF) 60%, #4f8cff 100%);
        color: #fff; border: none; border-radius: 8px;
        font-size: 1.13rem; font-family: var(--Primary-font, 'Montserrat', sans-serif);
        font-weight: 700; cursor: pointer; transition: background 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 8px rgba(0,122,255,0.08);
        display:flex;align-items:center;justify-content:center;gap:0.6em;
      "><i class="ri-checkbox-circle-line"></i>Confirm Order</button>
      <div id="checkout-status" style="margin-top:1rem;text-align:center;font-size:1rem;min-height:1.2em;"></div>
    </div>
    <style>
      @media (max-width: 600px) {
        #page-8 > div.checkout-main-box {
          max-width: 99vw !important;
          padding: 1.1rem 0.3rem 1.1rem 0.3rem !important;
          border-radius: 0 !important;
        }
        #online-info-panel {
          left: 0 !important;
          right: 0 !important;
          width: 100vw !important;
          max-width: 99vw !important;
          flex-direction: column !important;
          align-items: stretch !important;
          box-shadow: none !important;
          border-radius: 0 0 10px 10px !important;
          top: 100% !important;
          position: static !important;
        }
        #online-info-panel.slide-in {
          transform: none !important;
        }
      }
      @media (min-width: 601px) {
        #page-8 > div.checkout-main-box {
          max-width: 420px !important;
        }
        #online-info-panel {
          min-width: 0;
          width: 350px;
          max-width: 420px;
          position: absolute;
          top: 0;
          right: -420px;
          left: auto;
          z-index: 10;
          background: #f5f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          transition: transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s, right 0.5s;
          opacity: 0;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 0.7rem 0.7rem;
          pointer-events: none;
        }
        #online-info-panel.slide-in {
          transform: translateX(-420px);
          opacity: 1;
          right: 0;
          pointer-events: auto;
          display: flex;
        }
      }
      #page-8 .qty-btn, #page-8 .del-btn {
        transition: background 0.18s, color 0.18s;
      }
      #page-8 .qty-btn:active, #page-8 .del-btn:active {
        background: var(--primary,#007AFF) !important;
        color: #fff !important;
      }
      #page-8 .qty-btn[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }
    </style>
  `;

  // Insert as a page section, not overlay
  document.body.appendChild(section);

  // Render cart items
  function renderCartList() {
    const cart = getCart();
    const list = document.createElement('div');
    if (cart.length === 0) {
      list.innerHTML = `<div style="text-align:center;color:var(--text-muted,#6C757D);margin:1.5rem 0;">
        <i class="ri-shopping-cart-line" style="font-size:2.2em;display:block;margin-bottom:0.3em;"></i>
        Your cart is empty.
      </div>`;
    } else {
      cart.forEach(item => {
        const quantity = (typeof item.quantity === 'number' && item.quantity > 0) ? item.quantity : 1;
        const row = document.createElement('div');
        row.style = `
          display: flex; align-items: center; justify-content: space-between;
          background: #fff; border-radius: 10px; margin-bottom: 0.7rem; padding: 0.7rem 0.7rem;
          box-shadow: 0 1px 6px var(--shadow,rgba(0,0,0,0.07));
          gap: 0.5rem;
        `;
        row.innerHTML = `
          <div style="display:flex;align-items:center;gap:0.7rem;">
            <img src="${item.img}" alt="${item.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;border:1.5px solid var(--border,#E9ECEF);box-shadow:0 1px 4px rgba(0,0,0,0.04);">
            <div>
              <div style="font-weight:600;font-size:1.05em;">${item.name}</div>
              <div style="font-size:0.98rem;color:var(--text-muted,#6C757D);">Rs${item.price}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:0.4rem;">
            <button class="qty-btn" data-action="decrease" data-name="${item.name}" style="
              background:var(--border,#E9ECEF);border:none;border-radius:6px;width:32px;height:32px;font-size:1.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">
              <i class="ri-subtract-line"></i>
            </button>
            <span style="min-width:28px;text-align:center;font-size:1.08em;font-weight:600;">${item.quantity}</span>
            <button class="qty-btn" data-action="increase" data-name="${item.name}" style="
              background:var(--border,#E9ECEF);border:none;border-radius:6px;width:32px;height:32px;font-size:1.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">
              <i class="ri-add-line"></i>
            </button>
            <button class="del-btn" data-name="${item.name}" style="
              background:var(--danger,#DC3545);color:#fff;border:none;border-radius:6px;width:32px;height:32px;font-size:1.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="Remove">
              <i class="ri-delete-bin-6-line"></i>
            </button>
          </div>
        `;
        list.appendChild(row);
      });
    }
    const cartListDiv = section.querySelector('#checkout-cart-list');
    cartListDiv.innerHTML = '';
    cartListDiv.appendChild(list);
  }

  // Update total price
  function updateTotal() {
    const cart = getCart();
    const paymentMethod = section.querySelector('input[name="payment-method"]:checked').value;
    const total = calculateTotal(cart, paymentMethod);
    section.querySelector('#checkout-total').textContent = 'Rs' + total;
  }

  // Initial render
  renderCartList();
  updateTotal();

  // Event: Close section
  section.querySelector('#close-checkout-section').onclick = () => {
    closePage8();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Event: Quantity and delete buttons
  section.querySelector('#checkout-cart-list').onclick = function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.classList.contains('qty-btn')) {
      const name = btn.getAttribute('data-name');
      const action = btn.getAttribute('data-action');
      let cart = getCart();
      const item = findCartItem(cart, name);
      if (!item) return;
      if (typeof item.quantity !== 'number' || item.quantity < 1) item.quantity = 1;
      if (action === 'increase') {
        item.quantity += 1;
      } else if (action === 'decrease') {
        if (item.quantity > 1) item.quantity -= 1;
      }
      saveCart(cart);
      renderCartList();
      updateTotal();
    }
    if (btn.classList.contains('del-btn')) {
      const name = btn.getAttribute('data-name');
      let cart = getCart();
      cart = cart.filter(item => item.name !== name);
      saveCart(cart);
      renderCartList();
      updateTotal();
    }
  };

  // Payment method expand/collapse online info panel (slide out from side)
  function updateOnlinePanel() {
    const onlinePanel = section.querySelector('#online-info-panel');
    const onlineRadio = section.querySelector('input[name="payment-method"][value="online"]');
    if (!onlinePanel) return;
    // Remove both classes first
    onlinePanel.classList.remove('slide-in');
    // Hide by default
    onlinePanel.style.display = "none";
    // If online selected, show and animate
    if (onlineRadio.checked) {
      // Show first so transition can work
      onlinePanel.style.display = "flex";
      // Force reflow for transition
      void onlinePanel.offsetWidth;
      onlinePanel.classList.add('slide-in');
      // For accessibility, focus file input after slide
      setTimeout(() => {
        const fileInput = onlinePanel.querySelector('input[type="file"]');
        if (fileInput) fileInput.focus();
      }, 500);
    }
  }

  // Payment method change event
  section.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.onchange = function() {
      updateTotal();
      updateOnlinePanel();
    };
  });
  // Initial state for online panel
  updateOnlinePanel();

  // Payment proof preview
  const onlinePanel = section.querySelector('#online-info-panel');
  if (onlinePanel) {
    const fileInput = onlinePanel.querySelector('input[type="file"]');
    const previewDiv = onlinePanel.querySelector('#proof-preview');
    if (fileInput && previewDiv) {
      fileInput.addEventListener('change', function() {
        previewDiv.innerHTML = '';
        const file = fileInput.files && fileInput.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function(e) {
            previewDiv.innerHTML = `<img src="${e.target.result}" alt="Proof Preview" style="max-width:100px;max-height:100px;border-radius:7px;border:1px solid #ccc;">`;
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  // Event: Confirm Order
  section.querySelector('#confirm-order-btn').onclick = async function() {
    const cart = getCart();
    if (cart.length === 0) {
      section.querySelector('#checkout-status').textContent = "Your cart is empty.";
      section.querySelector('#checkout-status').style.color = "var(--danger,#DC3545)";
      return;
    }
    const form = section.querySelector('#checkout-user-form');
    if (!form.reportValidity()) return;

    const paymentMethod = section.querySelector('input[name="payment-method"]:checked').value;
    let paymentProofBase64 = null;

    if (paymentMethod === 'online') {
      // Validate proof upload
      const onlinePanel = section.querySelector('#online-info-panel');
      const proofForm = onlinePanel.querySelector('#online-proof-form');
      const fileInput = proofForm.querySelector('input[type="file"]');
      if (!fileInput.files || !fileInput.files[0]) {
        section.querySelector('#checkout-status').textContent = "Please upload your payment screenshot.";
        section.querySelector('#checkout-status').style.color = "var(--danger,#DC3545)";
        return;
      }
      const file = fileInput.files[0];
      if (!file.type.startsWith('image/')) {
        section.querySelector('#checkout-status').textContent = "Please upload a valid image file.";
        section.querySelector('#checkout-status').style.color = "var(--danger,#DC3545)";
        return;
      }
      // Read file as base64
      paymentProofBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          resolve(e.target.result);
        };
        reader.onerror = function() {
          reject();
        };
        reader.readAsDataURL(file);
      });
    }

    // Gather user info
    const user_name = form.user_name.value.trim();
    const user_address = form.user_address.value.trim();
    const user_contact = form.user_contact.value.trim();
    const total = calculateTotal(cart, paymentMethod);

    // Prepare order details
    let productLines = cart.map(item =>
      `${item.name} (x${item.quantity || 1}) - Rs${item.price * (item.quantity || 1)}`
    ).join('\n');
    let paymentText = paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online (Easypaisa QR)';

    // Improved EmailJS send: disables button, shows spinner, handles errors
    const btn = section.querySelector('#confirm-order-btn');
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="display:inline-block;width:1.2em;height:1.2em;border:2.5px solid #fff;border-top:2.5px solid #007AFF;border-radius:50%;animation:spin 0.7s linear infinite;vertical-align:middle;margin-right:0.5em;"></span>Placing Order...`;
    section.querySelector('#checkout-status').textContent = "";
    section.querySelector('#checkout-status').style.color = "var(--text-muted,#6C757D)";

    // Compose email params
    let emailParams = {
      user_name,
      user_address,
      user_contact,
      payment_method: paymentText,
      total_price: 'Rs' + total,
      product_list: productLines
    };
    if (paymentMethod === 'online' && paymentProofBase64) {
      emailParams.payment_proof = paymentProofBase64;
    }

    const EmailJS_Service_ID = "service_1a9azmh";
    const EmailJS_Template_ID = "template_u371czi";
    const EmailJS_User_ID = "Zc77_ZfoVm_5Fo7sW";

    // Advanced error handling for order placement
    try {
      // Correct usage: emailjs.send(service_id, template_id, template_params, user_id)
      const response = await emailjs.send(
        EmailJS_Service_ID,
        EmailJS_Template_ID,
        emailParams,
        EmailJS_User_ID
      );

      // Check for EmailJS response status
      if (response && (response.status === 200 || response.text === "OK")) {
        section.querySelector('#checkout-status').textContent = "Order placed successfully! We'll contact you soon.";
        section.querySelector('#checkout-status').style.color = "var(--success,#28A745)";
        saveCart([]);
        renderCartList();
        updateTotal();
        btn.disabled = false;
        btn.innerHTML = `<i class="ri-checkbox-circle-line"></i>Confirm Order`;

        // Show custom dialog box
        // Remove any existing dialog
        let existingDialog = document.getElementById('jazakallah-dialog');
        if (existingDialog) existingDialog.remove();

        const dialog = document.createElement('div');
        dialog.id = 'jazakallah-dialog';
        dialog.style.position = 'fixed';
        dialog.style.top = '0';
        dialog.style.left = '0';
        dialog.style.width = '100vw';
        dialog.style.height = '100vh';
        dialog.style.background = 'rgba(0,0,0,0.32)';
        dialog.style.display = 'flex';
        dialog.style.alignItems = 'center';
        dialog.style.justifyContent = 'center';
        dialog.style.zIndex = '9999';

        dialog.innerHTML = `
          <div style="
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            max-width: 350px;
            width: 90vw;
            padding: 2.2rem 1.2rem 1.5rem 1.2rem;
            text-align: center;
            font-family: var(--Secondary-font, 'Open Sans', sans-serif);
            color: #23272F;
            position: relative;
            animation: fadeInScale 0.3s;
          ">
            <div style="font-size:2.5rem;color:#28A745;margin-bottom:0.5em;">
              <i class="ri-checkbox-circle-line"></i>
            </div>
            <h2 style="margin:0 0 0.5em 0;font-size:1.5rem;">Jazakallah for shopping</h2>
            <p style="margin-bottom:1.5em;font-size:1.05rem;">Your order has been placed successfully.<br>We appreciate your trust in us!</p>
            <button id="continue-shopping-btn" style="
              background: #007AFF;
              color: #fff;
              border: none;
              border-radius: 8px;
              padding: 0.7em 1.5em;
              font-size: 1.1rem;
              cursor: pointer;
              margin-top: 0.5em;
              transition: background 0.2s;
            ">Continue shopping</button>
          </div>
          <style>
            @keyframes fadeInScale {
              0% { opacity: 0; transform: scale(0.85);}
              100% { opacity: 1; transform: scale(1);}
            }
          </style>
        `;

        document.body.appendChild(dialog);

        // Button event: navigate to shop.html
        dialog.querySelector('#continue-shopping-btn').onclick = function() {
          window.location.href = "index.html";
        };

        // Optional: close dialog on outside click
        dialog.addEventListener('click', function(e) {
          if (e.target === dialog) {
            dialog.remove();
          }
        });

      } else {
        // EmailJS responded but not with success
        let msg = "Failed to place order. Please try again.";
        if (response && response.text) {
          msg += ` [${response.text}]`;
        }
        section.querySelector('#checkout-status').textContent = msg;
        section.querySelector('#checkout-status').style.color = "var(--danger,#DC3545)";
        btn.disabled = false;
        btn.innerHTML = `<i class="ri-checkbox-circle-line"></i>Confirm Order`;
      }
    } catch (error) {
      // Advanced error reporting
      let errorMsg = "Failed to place order. Please try again.";
      if (error && error.status === 0) {
        errorMsg = "Network error: Please check your internet connection and try again.";
      } else if (error && error.text) {
        errorMsg += ` [${error.text}]`;
      } else if (error && error.message) {
        errorMsg += ` [${error.message}]`;
      }
      section.querySelector('#checkout-status').textContent = errorMsg;
      section.querySelector('#checkout-status').style.color = "var(--danger,#DC3545)";
      btn.disabled = false;
      btn.innerHTML = `<i class="ri-checkbox-circle-line"></i>Confirm Order`;
    }
  };

  // Add spinner keyframes
  if (!document.getElementById('checkout-spinner-style')) {
    const style = document.createElement('style');
    style.id = 'checkout-spinner-style';
    style.textContent = `
      @keyframes spin { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
    `;
    document.head.appendChild(style);
  }
}

// Auto-scan QR for online payment on mobile devices ONLY

// Helper: Detect if device is mobile
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
}

const EASYPAY_QR_URL = "QR/COde.jpeg"; // Path to the QR code image

// Backend endpoint that returns the Easypaisa deep link for the QR code
const EASYPAY_DEEPLINK_API = "/api/easypaisa-deeplink"; // You must implement this endpoint in your backend

// Ask user permission before opening Easypaisa app or auto-scanning QR
async function tryOpenEasypaisaAppOrScan(qrImg) {
  const originalTitle = qrImg.title;
  qrImg.title = "Preparing to open Easypaisa...";
  qrImg.style.opacity = "0.6";

  // Ask user for permission
  const userConsent = confirm(
    "Do you want to open the Easypaisa app or auto-scan the QR code?\n\n" +
    "This may attempt to open the Easypaisa app on your device, or scan the QR code automatically if supported. " +
    "If you deny, you can still scan the QR code manually."
  );

  if (!userConsent) {
    qrImg.title = originalTitle;
    qrImg.style.opacity = "1";
    alert("You can still scan the QR code manually using your banking app.");
    return;
  }

  try {
    // 1. Ask backend for the deep link for this QR code (backend may handle permission logic as well)
    const res = await fetch(EASYPAY_DEEPLINK_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qrUrl: EASYPAY_QR_URL, userConsent: true })
    });
    if (!res.ok) throw new Error("Failed to get Easypaisa deep link");
    const data = await res.json();

    // 2. If backend returns a deep link, try to open it
    if (data && data.deeplink) {
      // Try to open the Easypaisa app using the deep link
      window.location.href = data.deeplink;

      // Optionally, after a delay, show a message if the app did not open
      setTimeout(() => {
        qrImg.title = originalTitle;
        qrImg.style.opacity = "1";
        alert("If the Easypaisa app did not open, please make sure it is installed. You can also scan the QR code manually.");
      }, 2500);
      return;
    } else {
      throw new Error("No deep link returned from backend");
    }
  } catch (err) {
    // Fallback: Try to use BarcodeDetector API if available
    if ('BarcodeDetector' in window) {
      try {
        qrImg.title = "Scanning QR...";
        // Fetch the image as a blob
        const response = await fetch(EASYPAY_QR_URL);
        const blob = await response.blob();
        const imgBitmap = await createImageBitmap(blob);

        const detector = new BarcodeDetector({ formats: ['qr_code'] });
        const barcodes = await detector.detect(imgBitmap);

        qrImg.title = originalTitle;
        qrImg.style.opacity = "1";

        if (barcodes.length > 0 && barcodes[0].rawValue) {
          alert("QR Code scanned:\n" + barcodes[0].rawValue);
        } else {
          alert("No QR code detected in the image.");
        }
      } catch (err2) {
        qrImg.title = "Tap to scan QR";
        qrImg.style.opacity = "1";
        alert("Failed to scan QR code. Please try again.");
      }
    } else {
      qrImg.title = originalTitle;
      qrImg.style.opacity = "1";
      // Final fallback: manual instructions
      alert(
        "Auto QR scanning and Easypaisa app opening are not supported on your device/browser.\n" +
        "Please long-press or tap the QR code to open it, then scan it using your banking app."
      );
      window.open(EASYPAY_QR_URL, '_blank');
    }
  }
}

// Helper: Add tip below QR image and make it clickable to open Easypaisa app or auto-scan (MOBILE ONLY)
function enhanceQRScanExperience() {
  // Only run on mobile devices
  if (!isMobileDevice()) return;

  // Wait for the online-info-panel to be visible
  const panel = document.getElementById('online-info-panel');
  if (!panel) return;
  // Find the QR image
  const qrImg = panel.querySelector('img[src="' + EASYPAY_QR_URL + '"]');
  if (!qrImg) return;

  // Add a tip below the QR image if not already present
  let tip = panel.querySelector('.qr-tap-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'qr-tap-tip';
    tip.style.cssText = "text-align:center;font-size:0.98em;color:var(--primary,#007AFF);margin-top:0.4em;cursor:pointer;";
    tip.innerHTML = '<i class="ri-hand-pointer-line" style="margin-right:0.3em;"></i>Tap the QR code to open Easypaisa app or auto-scan';
    qrImg.parentNode.appendChild(tip);
  }

  // Make QR image clickable (on mobile, open Easypaisa app or auto-scan)
  qrImg.style.cursor = "pointer";
  qrImg.title = "Tap to open Easypaisa app or scan QR";
  qrImg.onclick = function() {
    tryOpenEasypaisaAppOrScan(qrImg);
  };

  // Also make the tip clickable
  tip.onclick = function() {
    tryOpenEasypaisaAppOrScan(qrImg);
  };
}

// Listen for payment method change to show QR scan tip and enable tap-to-scan (MOBILE ONLY)
document.addEventListener('change', function(e) {
  if (
    e.target &&
    e.target.name === "payment-method" &&
    e.target.value === "online"
  ) {
    // Wait a bit for the QR panel to show, then enhance (only on mobile)
    setTimeout(enhanceQRScanExperience, 300);
  }
});

// Also enhance if the online panel is already visible (e.g. on reload) (MOBILE ONLY)
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(enhanceQRScanExperience, 500);
});


// Listen for click on .check-out button
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.check-out');
  if (btn) {
    openCheckoutSection();
    window.scrollTo({ top: document.getElementById('page-8').offsetTop, behavior: 'smooth' });
  }
});


