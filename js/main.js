/* ============================================================
   PANDIT COMPUTERS & PRINTERS — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Page Loader ──────────────────────────────────────── */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    // fallback in case load already fired
    setTimeout(() => loader.classList.add('hidden'), 2200);
  }

  /* ── Sticky Navbar ─────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  function handleScroll() {
    if (window.scrollY > 40) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');

    const topBtn = document.querySelector('.float-top');
    if (topBtn) {
      if (window.scrollY > 500) topBtn.classList.add('visible');
      else topBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ── Mobile Menu Toggle ───────────────────────────────── */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  navToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu?.classList.remove('open'));
  });

  /* ── Scroll To Top ─────────────────────────────────────── */
  document.querySelector('.float-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── FAQ Accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q?.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ── Scroll Reveal Animation ──────────────────────────── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  /* ── Site Search (live service search + jump-to-order) ──── */
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('#siteSearchInput');
  const searchResults = document.querySelector('#searchResults');
  const searchChips = document.querySelectorAll('.search-chip');
  let activeChip = '';
  let activeIndex = -1;

  function openSearch() {
    searchOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 100);
    renderResults('');
  }
  function closeSearch() {
    searchOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-search-open]').forEach(btn => {
    btn.addEventListener('click', openSearch);
  });
  document.querySelector('.search-close')?.addEventListener('click', closeSearch);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
    // Keyboard shortcut: Ctrl/Cmd + K opens search from anywhere
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  function scoreMatch(service, query) {
    const q = query.trim().toLowerCase();
    if (!q) return 1;
    const name = service.name.toLowerCase();
    const tags = (service.tags || '').toLowerCase();
    const cat  = (service.cat  || '').toLowerCase();
    if (name.startsWith(q)) return 4;
    if (name.includes(q))   return 3;
    if (cat.includes(q))    return 2;
    if (tags.includes(q))   return 1;
    return 0;
  }

  function renderResults(query) {
    if (!searchResults || typeof serviceSearchData === 'undefined') return;
    const q = query.trim();
    let matches = serviceSearchData
      .map(s => ({ s, score: scoreMatch(s, q) }))
      .filter(m => m.score > 0)
      .filter(m => !activeChip || m.s.cat.includes(activeChip))
      .sort((a, b) => b.score - a.score)
      .map(m => m.s);

    if (!q && !activeChip) matches = matches.slice(0, 9);

    activeIndex = -1;

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty">
          <div class="search-empty-icon">🔍</div>
          <p>No service matches "<strong>${escapeHtml(q)}</strong>"</p>
          <a href="contact.html#contact-form" class="btn-primary btn-sm mt-16">Ask Us Directly →</a>
        </div>`;
      return;
    }

    searchResults.innerHTML = matches.map((s, i) => `
      <a class="search-result-item" href="${s.link}" data-index="${i}">
        <div class="sri-body">
          <div class="sri-name">${highlightMatch(s.name, q)}</div>
          <div class="sri-meta"><span class="sri-cat">${s.cat}</span></div>
        </div>
        <div class="sri-arrow">→</div>
      </a>`).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => { closeSearch(); });
    });
  }

  function highlightMatch(text, q) {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) + '<mark>' + text.slice(idx, idx + q.length) + '</mark>' + text.slice(idx + q.length);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  searchInput?.addEventListener('input', () => renderResults(searchInput.value));

  searchChips.forEach(chip => {
    chip.addEventListener('click', () => {
      searchChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeChip = chip.getAttribute('data-chip') || '';
      renderResults(searchInput ? searchInput.value : '');
    });
  });
  // Default chip = "All"
  if (searchChips.length) searchChips[0].classList.add('active');

  // Keyboard navigation (up/down/enter) through results
  searchInput?.addEventListener('keydown', (e) => {
    const items = searchResults?.querySelectorAll('.search-result-item');
    if (!items || !items.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      updateActiveItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = activeIndex >= 0 ? items[activeIndex] : items[0];
      target?.click();
    }
  });
  function updateActiveItem(items) {
    items.forEach(it => it.classList.remove('active'));
    if (items[activeIndex]) {
      items[activeIndex].classList.add('active');
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  /* ── Highlight & auto-scroll to a service card on arrival ─ */
  (function highlightServiceFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target && target.classList.contains('service-card')) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('search-highlight');
        setTimeout(() => target.classList.remove('search-highlight'), 2600);
      }, 300);
    }
  })();

  /* ── Live Chat Widget ──────────────────────────────────── */
  const chatToggle = document.querySelector('.chat-toggle');
  const chatWidget = document.querySelector('.chat-widget');
  chatToggle?.addEventListener('click', () => chatWidget?.classList.toggle('open'));
  document.querySelector('.chat-close-btn')?.addEventListener('click', () => chatWidget?.classList.remove('open'));
  document.querySelector('.chat-send')?.addEventListener('click', sendChatDemo);
  document.querySelector('.chat-input-row input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatDemo();
  });
  function sendChatDemo() {
    const input = document.querySelector('.chat-input-row input');
    const body = document.querySelector('.chat-body');
    if (input && input.value.trim() && body) {
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-bubble';
      userMsg.style.cssText = 'background:var(--blue);color:#fff;margin-left:auto;border-radius:16px 0 16px 16px;max-width:80%;';
      userMsg.textContent = input.value;
      body.appendChild(userMsg);
      input.value = '';
      body.scrollTop = body.scrollHeight;
      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'chat-bubble';
        reply.textContent = "Thanks for reaching out! Our team will respond shortly. For urgent help, please call or WhatsApp us at +91 98765 43210.";
        body.appendChild(reply);
        body.scrollTop = body.scrollHeight;
      }, 800);
    }
  }

  /* ── Toast Notification ───────────────────────────────── */
  window.showToast = function(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  };

  /* ── Form Validation Helper ───────────────────────────── */
  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const group = field.closest('.form-group');
      let fieldValid = true;

      if (field.type === 'email') {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      } else if (field.type === 'tel') {
        fieldValid = /^[0-9+\-\s()]{8,15}$/.test(field.value.trim());
      } else {
        fieldValid = field.value.trim().length > 0;
      }

      if (!fieldValid) {
        valid = false;
        group?.classList.add('error');
      } else {
        group?.classList.remove('error');
      }
    });
    return valid;
  }

  /* ── Generic Form Submit Handler ──────────────────────── */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form)) {
        const successMsg = form.getAttribute('data-success') || 'Your request has been submitted successfully! We will contact you soon.';
        showToast(successMsg);
        form.reset();
      } else {
        showToast('Please fill in all required fields correctly.');
      }
    });

    // live-clear error on input
    form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group')?.classList.remove('error');
      });
    });
  });

  /* ── Newsletter Form ───────────────────────────────────── */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        showToast('Thanks for subscribing! Watch your inbox for updates.');
        form.reset();
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  });

  /* ── File Upload Preview (Print Order Form) ───────────── */
  const fileInput = document.querySelector('#fileUpload');
  const fileLabel = document.querySelector('#fileUploadLabel');
  fileInput?.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const names = Array.from(fileInput.files).map(f => f.name).join(', ');
      if (fileLabel) fileLabel.textContent = `📎 ${fileInput.files.length} file(s) selected: ${names.slice(0, 60)}${names.length > 60 ? '…' : ''}`;
    } else {
      if (fileLabel) fileLabel.textContent = '📁 Click to upload or drag files here (PDF, JPG, PNG, DOCX)';
    }
  });

  /* ── Order Tracking Demo ──────────────────────────────── */
  document.querySelector('#trackOrderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.querySelector('#trackResult');
    const input = document.querySelector('#trackOrderId');
    if (input && input.value.trim()) {
      result?.classList.remove('d-none');
      showToast('Order found! Tracking details displayed below.');
    } else {
      showToast('Please enter a valid order ID.');
    }
  });

  /* ── Download Price List ──────────────────────────────── */
  document.querySelectorAll('[data-download-pricelist]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Price list download started! Check your downloads folder.');
    });
  });

  /* ── Set Active Nav Link ───────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Gallery Lightbox (simple) ────────────────────────── */
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('.gallery-overlay span')?.textContent || 'Image';
      showToast(`Viewing: ${label}`);
    });
  });

  /* ── Order/Service/Quote Buttons → Scroll or Toast ────── */
  document.querySelectorAll('[data-order-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-order-btn');
      const orderForm = document.querySelector('#printOrderForm, #serviceBookingForm');
      if (orderForm) {
        orderForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const serviceSelect = orderForm.querySelector('select[name="service"]');
        if (serviceSelect) {
          for (let opt of serviceSelect.options) {
            if (opt.textContent.trim() === service) { serviceSelect.value = opt.value; break; }
          }
        }
      } else {
        showToast(`Redirecting you to request "${service}"...`);
      }
    });
  });

  /* ── Counter Animation for Stats ──────────────────────── */
  const counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
  }
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }

  /* ── About Section Carousel ────────────────────────────── */
  const aboutTrack = document.getElementById('aboutCarouselTrack');
  const aboutDots  = document.querySelectorAll('.acd');
  const aboutPrev  = document.getElementById('aboutPrev');
  const aboutNext  = document.getElementById('aboutNext');
  let aboutCurrent = 0;
  const aboutTotal = 4;
  let aboutTimer;

  function goToSlide(idx) {
    aboutCurrent = (idx + aboutTotal) % aboutTotal;
    aboutTrack.style.transform = `translateX(-${aboutCurrent * 100}%)`;
    aboutDots.forEach((d, i) => d.classList.toggle('active', i === aboutCurrent));
  }

  function startAboutAuto() {
    aboutTimer = setInterval(() => goToSlide(aboutCurrent + 1), 3800);
  }
  function resetAboutAuto() {
    clearInterval(aboutTimer);
    startAboutAuto();
  }

  if (aboutTrack) {
    aboutDots.forEach(d => d.addEventListener('click', () => { goToSlide(+d.dataset.idx); resetAboutAuto(); }));
    if (aboutPrev) aboutPrev.addEventListener('click', () => { goToSlide(aboutCurrent - 1); resetAboutAuto(); });
    if (aboutNext) aboutNext.addEventListener('click', () => { goToSlide(aboutCurrent + 1); resetAboutAuto(); });
    startAboutAuto();
  }

});