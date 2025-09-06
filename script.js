// Functional image slider with dot navigation and slide (translateX) effect

const slider = document.querySelector('.img-slider');
const images = Array.from(document.querySelectorAll('.lad'));
let currentIndex = 0;

// Create dot navigation
const dotsContainer = document.createElement('div');
dotsContainer.className = 'slider-dots';

images.forEach((img, idx) => {
  const dot = document.createElement('i');
  dot.className = 'ri-checkbox-blank-circle-fill';
  dot.style.fontSize = '1.1rem';
  dot.style.cursor = 'pointer';
  dot.style.color = idx === 0 ? '#222' : '#bbb';
  dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
  dot.addEventListener('click', () => goToSlide(idx));
  dotsContainer.appendChild(dot);
});
slider.appendChild(dotsContainer);

function updateSlider() {
  images.forEach((img, idx) => {
    img.style.transition = 'transform 0.7s cubic-bezier(.4,0,.2,1)';
    img.style.transform = `translateX(${(idx - currentIndex) * 100}%)`;
    img.style.zIndex = idx === currentIndex ? 2 : 1;
  });
  // Update dots
  Array.from(dotsContainer.children).forEach((dot, idx) => {
    dot.style.color = idx === currentIndex ? '#222' : '#bbb';
  });
}

function goToSlide(idx) {
  currentIndex = idx;
  updateSlider();
}


let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}, 3000);

slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 5000);
});

// Initialize positions
images.forEach((img, idx) => {
  img.style.position = 'absolute';
  img.style.left = 0;
  img.style.top = 0;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.transform = `translateX(${idx * 100}%)`;
});
updateSlider();


function GotoShop() {
  window.location.href = 'index.html';
}


// feature products cards only three

// collect data

const fData = [
  {
    name: "Arabic Aura",
    ImgPath:"Products/PR5/main.png",
    gallery: [
      "Products/PR5/main.png",
      "Products/PR5/1.jpeg",
      "Products/PR5/2.jpeg",
      "Products/PR5/3.jpeg"
    ],
    info: "Elegant black Arabic Aura wristwatch with minimalist dial featuring Arabic numerals. Crafted with a sleek stainless steel case, leather strap, and precise quartz movement. Perfect for both casual and formal wear, combining modern style with cultural elegance.",
    price: 1250,
  },
  {
    name: "Umrah Saving Box",
    ImgPath:"Products/PR2/main.png",
    gallery: [
      "Products/PR2/main.png",
      "Products/PR2/1.jpeg",
      "Products/PR2/2.jpeg",
    ],
    info: "Durable and practical saving box designed to help you set aside money for your Umrah journey. Features a secure slot for coins and notes, lightweight build, and elegant Islamic-inspired design. Compact enough for home or office use, making daily saving simple and meaningful.",
    price: 350,
  },
  {
    name: "Handy Fan",
    ImgPath:"Products/PR1/main.png",
    gallery: [
      "Products/PR1/main.png",
      "Products/PR1/1.jpeg",
      "Products/PR1/2.jpeg",
      "Products/PR1/3.jpeg"
    ],
    info: "Rechargeable 3-speed portable table fan with 3-blade design, quiet operation, and mobile stand function. Features lightweight build, USB charging, and 2–6 hours working time. Stylish purple-pink finish with gold accents makes it perfect for home, office, travel, or outdoor use.",
    price: 750,
  },
]

// rendering

function showFeatureCards(card){
    // Sirf 3 cards hi load hon
    return card.slice(0, 3).map(fData=>`
       <div class="f-card info">
        <div class="f-img"><img src="${fData.ImgPath}" alt=""></div>
        <div class="f-title">${fData.name}</div>
        <div class="f-info"><h4>${fData.info}</h4></div>
        <div class="f-bt">
          <div class="f-price">Rs ${fData.price}</div>
        <div class="add-btn Add-To-Cart">Add to Cart</div>
        </div>
      </div>
      `).join('');
}

// rendered
document.addEventListener('DOMContentLoaded', ()=>{
  const FrCont = document.querySelector(".fcard-container");
    if(FrCont) FrCont.innerHTML = showFeatureCards(fData)
})




const dData = [
  // {
  //   name: "Deal 3",
  //   gallery: [
  //     "Products/PR5/1.jpeg",
  //     "Products/PR4/1.jpeg",
  //     "Products/PR3/1.jpeg",
  //   ],
  //   orprice: 2500,
  //   dealprice: 2000,
  //   save: 2500 - 2000,
  //   percentage: Math.floor((2500 - 2000) / 2500 * 100),
  //   time: "00h 0m 55s"
  // },
];

// Helper to parse "22h 35m 23s" into seconds
function parseTimeString(str) {
  const match = str.match(/(\d+)h\s*(\d+)m\s*(\d+)s/);
  if (!match) return 0;
  const [, h, m, s] = match.map(Number);
  return h * 3600 + m * 60 + s;
}

// Helper to format seconds as "00h 00m 00s"
function formatTimeLeft(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

// Get expired deals from localStorage
function getExpiredDeals() {
  try {
    const expired = localStorage.getItem('expiredDeals');
    return expired ? JSON.parse(expired) : [];
  } catch (e) {
    return [];
  }
}

// Set expired deals to localStorage
function setExpiredDeals(arr) {
  try {
    localStorage.setItem('expiredDeals', JSON.stringify(arr));
  } catch (e) {}
}

function renderDealCards(deals) {
  return deals.map((deal, idx) => `
    <div class="deal-card" data-deal-idx="${idx}">
      <div class="dc-top"><h1>${deal.name}</h1></div>
      <div class="dc-bottom">
        <div class="dbt-top">
          ${deal.gallery.map(img => `<div class="t-img"><img src="${img}" alt=""></div>`).join('')}
        </div>
        <div class="dbt-bottom">
          <h3 class="or-price">RS <span class="cut-line">${deal.orprice}</span></h3>
          <h3 class="dl-price">Deal Price: <span class="new-pr">${deal.dealprice}</span></h3>
          <div class="save-box">You Save: Rs ${deal.save} (${deal.percentage}%)</div>
          <div class="bt-b">
            <div class="timer" data-timer-idx="${idx}">Ends in: ${deal.time}</div>
            <div class="dl-btn add-btn buy-now Buy-Now-Deal">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function showNoDealsMessage(container) {
  container.innerHTML = `
    <div class="no-deals-message" style="text-align:center; padding:2em; font-size:1.2em;">
      Currently we have no deals, but don't worry—our deals are just taking a nap! 💤<br>
      Check back soon for some jaw-dropping offers (or bring coffee to wake them up).
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const dclut = document.querySelector(".dc-container");
  if (!dclut) return;

  // Get expired deals from localStorage
  let expiredDeals = getExpiredDeals();

  // Only show deals that are not expired
  // Use deal name as unique key (could be improved with a unique id)
  const visibleDeals = dData.filter((deal, idx) => !expiredDeals.includes(deal.name));

  if (visibleDeals.length === 0) {
    showNoDealsMessage(dclut);
    return;
  }

  dclut.innerHTML = renderDealCards(visibleDeals);

  // For each deal, start a countdown timer
  let activeDeals = visibleDeals.length;

  visibleDeals.forEach((deal, idx) => {
    // Find the timer div for this deal (idx is index in visibleDeals, not dData)
    const timerDiv = dclut.querySelector(`.timer[data-timer-idx="${idx}"]`);
    if (!timerDiv) return;

    let secondsLeft = parseTimeString(deal.time);

    function updateTimer() {
      if (secondsLeft <= 0) {
        timerDiv.textContent = "Ends in: 00h 00m 00s";
        // Remove the deal card
        const card = dclut.querySelector(`.deal-card[data-deal-idx="${idx}"]`);
        if (card) {
          card.remove();
          activeDeals--;
          // Add to expired deals in localStorage
          expiredDeals = getExpiredDeals();
          if (!expiredDeals.includes(deal.name)) {
            expiredDeals.push(deal.name);
            setExpiredDeals(expiredDeals);
          }
          // If no deals left, show the message
          if (activeDeals === 0) {
            showNoDealsMessage(dclut);
          }
        }
        clearInterval(interval);
        return;
      }
      timerDiv.textContent = "Ends in: " + formatTimeLeft(secondsLeft);
      secondsLeft--;
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
  });
});

// Listen for changes to dData (e.g., new deals added) and clear expired status for new deals
// This is a simple approach: if a deal in dData is not in expiredDeals, it will show.
// If you want to "reset" all deals (e.g., for admin), you can clear localStorage.expiredDeals manually.








// Team members data
const teamMembers = [
  {
    name: "Maaz Farooq",
    img: "Members/1.jpeg",
    info: "He is the Co-Founder and CEO, guiding the team with fresh ideas and a clear focus on customers."
  },
  {
    name: "Ali Ahmed",
    img: "Members/2.jpeg",
    info: "Ali, our Programmer, built this website and keeps the backend strong and reliable."
  },
  {
    name: "Hussain",
    img: "Members/3.jpeg",
    info: "Hussain is our Delivery Service Manager, making sure every order is handled on time and reaches customers safely."
  },
  {
    name: "Investor",
    img: "Members/4.jpeg",
    info: "Our key investor, the driving force behind our growth and success. Though their identity remains undisclosed, their support powers everything we do."
  }
];

// Dynamically render team member cards
function renderTeamCards(members) {
  return members.map(member => `
    <div class="profile-card">
      <img class="profile-pic" src="${member.img}" alt="${member.name}">
      <div class="profile-name">${member.name}</div>
      <div class="profile-info">${member.info}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const teamCardsContainer = document.getElementById('teamCards');
  if (teamCardsContainer) {
    teamCardsContainer.innerHTML = renderTeamCards(teamMembers);
  }
});


 // Set current year in footer
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footerYear').textContent = new Date().getFullYear();
});

// EmailJS Contact Form
(function() {
  // Replace with your EmailJS user ID and service/template IDs
  const EMAILJS_USER_ID = 'Zc77_ZfoVm_5Fo7sW';
  const EMAILJS_SERVICE_ID = 'service_xi2h0zr';
  const EMAILJS_TEMPLATE_ID = 'template_6na51bd';

  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_USER_ID);
  }

  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      statusDiv.style.color = 'var(--primary, #007AFF)';
      statusDiv.textContent = 'Sending...';

      const userEmail = document.getElementById('user_email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!userEmail || !message) {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Please fill in all fields.';
        return;
      }

      if (typeof emailjs === 'undefined') {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Email service unavailable.';
        return;
      }

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        user_email: userEmail,
        message: message
      })
      .then(function(response) {
        statusDiv.style.color = 'var(--success, #28A745)';
        statusDiv.textContent = 'Message sent successfully!';
        form.reset();
      }, function(error) {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Failed to send. Please try again later.';
      });
    });
  }
})();


(function() {
  // EmailJS config (reuse from above)
  const EMAILJS_USER_ID = 'Zc77_ZfoVm_5Fo7sW';
  const EMAILJS_SERVICE_ID = 'service_xi2h0zr';
  const EMAILJS_TEMPLATE_ID = 'template_6na51bd';

  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_USER_ID);
  }

  // Helper to create the modal HTML
  function createDealModal(dealName) {
    // Remove any existing modal
    const existing = document.getElementById('deal-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'deal-modal';
    modal.style.cssText = `
      position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;
      background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;
    `;

    modal.innerHTML = `
      <div style="background:#fff;max-width:95vw;width:350px;padding:2em 1.2em 1.2em 1.2em;border-radius:10px;box-shadow:0 4px 32px rgba(0,0,0,0.18);position:relative;">
        <button id="deal-modal-close" style="position:absolute;top:0.7em;right:0.7em;background:none;border:none;font-size:1.3em;cursor:pointer;color:#888;">&times;</button>
        <h2 style="margin-top:0;margin-bottom:0.7em;font-size:1.25em;color:var(--primary,#007AFF);text-align:center;">Confirm Your Deal</h2>
        <div style="margin-bottom:0.7em;">
          <strong>Deal:</strong> <span id="deal-modal-name">${dealName}</span>
        </div>
        <div style="margin-bottom:0.7em;">
          <strong>Payment:</strong> Cash on Delivery<br>
          <strong>Delivery Charges:</strong> Rs 150
        </div>
        <form id="deal-modal-form" autocomplete="off">
          <div style="margin-bottom:0.6em;">
            <input type="text" id="deal-user-name" name="name" placeholder="Your Name" style="width:100%;padding:0.5em;border:1px solid #ccc;border-radius:5px;" required>
          </div>
          <div style="margin-bottom:0.6em;">
            <input type="text" id="deal-user-address" name="address" placeholder="Your Address" style="width:100%;padding:0.5em;border:1px solid #ccc;border-radius:5px;" required>
          </div>
          <div style="margin-bottom:0.6em;">
            <input type="tel" id="deal-user-number" name="number" placeholder="Your Number" style="width:100%;padding:0.5em;border:1px solid #ccc;border-radius:5px;" required pattern="^\\d{10,15}$" title="Enter a valid number">
          </div>
          <div id="deal-modal-status" style="min-height:1.5em;font-size:0.98em;margin-bottom:0.5em;"></div>
          <button type="submit" id="deal-modal-confirm" style="width:100%;padding:0.7em 0;background:var(--primary,#007AFF);color:#fff;border:none;border-radius:5px;font-size:1.08em;cursor:pointer;">Confirm Deal</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal on X or background click
    modal.querySelector('#deal-modal-close').onclick = function() {
      modal.remove();
    };
    modal.onclick = function(e) {
      if (e.target === modal) modal.remove();
    };

    // Handle form submit
    const form = modal.querySelector('#deal-modal-form');
    const statusDiv = modal.querySelector('#deal-modal-status');
    form.onsubmit = function(e) {
      e.preventDefault();
      statusDiv.style.color = 'var(--primary, #007AFF)';
      statusDiv.textContent = 'Sending...';

      const name = modal.querySelector('#deal-user-name').value.trim();
      const address = modal.querySelector('#deal-user-address').value.trim();
      const number = modal.querySelector('#deal-user-number').value.trim();

      if (!name || !address || !number) {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Please fill in all fields.';
        return;
      }

      if (!/^\d{10,15}$/.test(number)) {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Please enter a valid number (10-15 digits).';
        return;
      }

      if (typeof emailjs === 'undefined') {
        statusDiv.style.color = 'var(--danger, #DC3545)';
        statusDiv.textContent = 'Email service unavailable.';
        return;
      }

      // Prepare email params
      const params = {
        deal_name: dealName,
        user_name: name,
        user_address: address,
        user_number: number,
        payment_method: 'Cash on Delivery',
        delivery_charges: 'Rs 150'
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(function(response) {
          statusDiv.style.color = 'var(--success, #28A745)';
          statusDiv.textContent = 'Your deal is confirmed! We will contact you soon.';
          form.reset();
          setTimeout(() => { modal.remove(); }, 1800);
        }, function(error) {
          statusDiv.style.color = 'var(--danger, #DC3545)';
          statusDiv.textContent = 'Failed to confirm. Please try again later.';
        });
    };
  }

  // Listen for click on .Buy-Now-Deal
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.Buy-Now-Deal');
    if (btn) {
      // Find the closest .deal-card ancestor to get the deal name
      let dealCard = btn.closest('.deal-card');
      let dealName = 'Special Deal';
      if (dealCard) {
        // The deal name is in the .dc-top > h1
        const h1 = dealCard.querySelector('.dc-top h1');
        if (h1 && h1.textContent.trim()) {
          dealName = h1.textContent.trim();
        }
      }
      createDealModal(dealName);
    }
  });
})();
