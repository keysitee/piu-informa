const products = [
  { id: 'double-face-coat', name: 'Double-Face Wool Coat', category: 'Clothing', price: 890, description: 'A generous, softly structured coat cut from double-faced wool. Finished with a clean interior and a single horn button.', materials: '100% Italian wool. Horn button. Made in Portugal.', sizes: ['XS', 'S', 'M', 'L'], colors: [{ name: 'Camel', hex: '#b29472' }, { name: 'Black', hex: '#171717' }, { name: 'Stone', hex: '#b9b3a8' }], images: ['photo-1551028719-00167b16eac5', 'photo-1551488831-00ddcb6c6bd3', 'photo-1551232864-3f0890e580d9'], isNew: true },
  { id: 'draped-dress', name: 'Draped Evening Dress', category: 'Clothing', price: 640, description: 'A fluid column silhouette in compact crepe, with a softly gathered shoulder and a considered open back.', materials: 'Italian viscose crepe. Cupro lining. Made in Italy.', sizes: ['XS', 'S', 'M', 'L'], colors: [{ name: 'Black', hex: '#171717' }, { name: 'Burgundy', hex: '#623b3c' }], images: ['photo-1551488831-00ddcb6c6bd3', 'photo-1529139574466-a303027c1d8b', 'photo-1551028719-00167b16eac5'], isNew: true },
  { id: 'tailored-trouser', name: 'Column Tailored Trouser', category: 'Clothing', price: 420, description: 'A relaxed straight-leg trouser with a considered rise, pressed crease and adjustable internal tab.', materials: 'Wool and recycled viscose. Dry clean only. Made in Portugal.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: [{ name: 'Black', hex: '#171717' }, { name: 'Stone', hex: '#b9b3a8' }, { name: 'Espresso', hex: '#55443b' }], images: ['photo-1551232864-3f0890e580d9', 'photo-1551488831-00ddcb6c6bd3', 'photo-1551028719-00167b16eac5'], isNew: false },
  { id: 'cashmere-knit', name: 'Sculpted Cashmere Knit', category: 'Clothing', price: 520, description: 'A light, tactile layer knitted in a compact rib with a softly rounded shoulder and an easy, close fit.', materials: '100% Grade-A cashmere. Hand wash cold. Made in Scotland.', sizes: ['XS', 'S', 'M', 'L'], colors: [{ name: 'Ivory', hex: '#e5e0d6' }, { name: 'Camel', hex: '#b29472' }, { name: 'Olive', hex: '#737463' }], images: ['photo-1551488831-00ddcb6c6bd3', 'photo-1551232864-3f0890e580d9', 'photo-1551028719-00167b16eac5'], isNew: true },
  { id: 'leather-overshirt', name: 'Meridian Leather Overshirt', category: 'Clothing', price: 760, description: 'A supple lambskin overshirt with a clean placket, softly dropped shoulder and two understated patch pockets.', materials: 'Responsibly sourced lamb leather. Cupro lining. Made in Italy.', sizes: ['S', 'M', 'L', 'XL'], colors: [{ name: 'Espresso', hex: '#55443b' }, { name: 'Black', hex: '#171717' }], images: ['photo-1551028719-00167b16eac5', 'photo-1551488831-00ddcb6c6bd3', 'photo-1551232864-3f0890e580d9'], isNew: false },
  { id: 'leather-trainer', name: 'Axis Leather Trainer', category: 'Sneakers', price: 390, description: 'A low-profile court trainer built around a softly padded footbed and a considered, tonal finish.', materials: 'Leather upper, leather lining, recycled rubber sole. Made in Portugal.', sizes: ['EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], colors: [{ name: 'Ivory', hex: '#e5e0d6' }, { name: 'Black', hex: '#171717' }, { name: 'Stone', hex: '#b9b3a8' }], images: ['photo-1608231387042-66d1773070a5', 'photo-1542291026-7eec264c27ff', 'photo-1543163521-1bf539c55dd2'], isNew: true },
  { id: 'suede-court', name: 'Approach Suede Court Shoe', category: 'Sneakers', price: 460, description: 'A quiet, tactile court silhouette in brushed suede, balanced on a light natural rubber cupsole.', materials: 'Suede leather upper, leather lining, natural rubber sole. Made in Portugal.', sizes: ['EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44'], colors: [{ name: 'Camel', hex: '#b29472' }, { name: 'Olive', hex: '#737463' }, { name: 'Black', hex: '#171717' }], images: ['photo-1542291026-7eec264c27ff', 'photo-1608231387042-66d1773070a5', 'photo-1543163521-1bf539c55dd2'], isNew: false },
  { id: 'pace-runner', name: 'Pace Technical Runner', category: 'Sneakers', price: 310, description: 'A considered everyday runner with layered mesh, tonal suede and a cushioned, resilient sole.', materials: 'Recycled mesh, suede overlays, EVA midsole. Made in Vietnam.', sizes: ['EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], colors: [{ name: 'Stone', hex: '#b9b3a8' }, { name: 'Olive', hex: '#737463' }, { name: 'Black', hex: '#171717' }], images: ['photo-1608231387042-66d1773070a5', 'photo-1542291026-7eec264c27ff', 'photo-1543163521-1bf539c55dd2'], isNew: true },
  { id: 'leather-weekender', name: 'Orbit Leather Weekender', category: 'Accessories', price: 980, description: 'A soft-sided travel companion with considered interior compartments, a detachable strap and hand-finished edges.', materials: 'Full-grain Italian leather. Cotton lining. Made in Italy.', sizes: ['One size'], colors: [{ name: 'Espresso', hex: '#55443b' }, { name: 'Black', hex: '#171717' }], images: ['photo-1553062407-98eeb64c6a62', 'photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3'], isNew: true },
  { id: 'mini-shoulder-bag', name: 'Frame Mini Shoulder Bag', category: 'Accessories', price: 650, description: 'A compact, sculptural shoulder bag with a softly structured base and a discreet magnetic closure.', materials: 'Calfskin leather. Suede lining. Made in Italy.', sizes: ['One size'], colors: [{ name: 'Black', hex: '#171717' }, { name: 'Camel', hex: '#b29472' }, { name: 'Burgundy', hex: '#623b3c' }], images: ['photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3', 'photo-1590874103328-eac38a683ce7'], isNew: false },
  { id: 'optical-frame', name: 'Form No. 02 Optical Frame', category: 'Accessories', price: 280, description: 'A balanced acetate frame with a softly rounded profile, a considered bridge and optical-grade lenses.', materials: 'Italian acetate. Optical-grade lenses. Includes protective case.', sizes: ['One size'], colors: [{ name: 'Espresso', hex: '#55443b' }, { name: 'Black', hex: '#171717' }, { name: 'Olive', hex: '#737463' }], images: ['photo-1572635196237-14b3f281503f', 'photo-1556306535-38febf6782e7', 'photo-1523275335684-37898b6baf30'], isNew: true },
  { id: 'leather-belt', name: 'Axis Leather Belt', category: 'Accessories', price: 220, description: 'A slim, versatile belt with a softly polished buckle and hand-painted edges.', materials: 'Vegetable-tanned Italian leather. Brushed brass buckle. Made in Italy.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: [{ name: 'Black', hex: '#171717' }, { name: 'Espresso', hex: '#55443b' }], images: ['photo-1553062407-98eeb64c6a62', 'photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3'], isNew: false }
];

const freeDeliveryThreshold = 350;
const money = (value) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
const safeRead = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const cart = new Map(Object.entries(safeRead('orbital-luxury-cart', {})));
const wishlist = new Set(safeRead('orbital-luxury-wishlist', []));
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const productById = (id) => products.find((product) => product.id === id);
let activeProduct = null;
let quickProduct = null;
let selectedDetailColor = '';
let selectedQuickColor = '';
let toastTimer;

function notify(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function productCard(product) {
  const saved = wishlist.has(product.id);
  return `<article class="product-card" data-reveal><div class="product-image-wrap"><button class="product-image-link" type="button" data-open-product="${product.id}" aria-label="View ${product.name}"><img src="https://images.unsplash.com/${product.images[0]}?auto=format&fit=crop&w=900&q=85" alt="${product.name}" loading="lazy" /><span class="product-badge">${product.isNew ? 'Just arrived' : product.category}</span></button><button class="wishlist-button${saved ? ' is-saved' : ''}" type="button" data-wishlist="${product.id}" aria-label="${saved ? 'Remove' : 'Add'} ${product.name} ${saved ? 'from' : 'to'} wishlist" aria-pressed="${saved}">♡</button><button class="quick-view-button" type="button" data-quick-view="${product.id}">Quick view <span>↗</span></button></div><div class="product-card-meta"><div><p>${product.category}</p><h3><button type="button" data-open-product="${product.id}">${product.name}</button></h3></div><strong>${money(product.price)}</strong></div></article>`;
}

function renderProductCards(items, container) {
  container.innerHTML = items.map(productCard).join('');
}

function getFilteredProducts() {
  const query = $('#product-search').value.trim().toLocaleLowerCase();
  const category = $('#category-filter').value;
  const size = $('#size-filter').value;
  const color = $('#color-filter').value;
  const maximumPrice = Number($('#price-filter').value);
  const sort = $('#sort-filter').value;
  let result = products.filter((product) => {
    const searchableText = `${product.name} ${product.category} ${product.description} ${product.colors.map((color) => color.name).join(' ')}`.toLocaleLowerCase();
    const matchesText = !query || searchableText.includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSize = size === 'all' || product.sizes.includes(size);
    const matchesColor = color === 'all' || product.colors.some((variant) => variant.name === color);
    return matchesText && matchesCategory && matchesSize && matchesColor && product.price <= maximumPrice;
  });
  if (sort === 'price-low') result = result.toSorted((first, second) => first.price - second.price);
  if (sort === 'price-high') result = result.toSorted((first, second) => second.price - first.price);
  if (sort === 'name') result = result.toSorted((first, second) => first.name.localeCompare(second.name));
  return result;
}

function renderShop() {
  const query = $('#product-search').value.trim();
  const result = query ? getFilteredProducts() : [];
  renderProductCards(result, $('#shop-grid'));
  $('#result-count').textContent = query ? `${result.length} ${result.length === 1 ? 'piece' : 'pieces'}` : 'Search to explore the collection';
  $('#search-prompt').hidden = Boolean(query);
  $('#no-results').hidden = !query || result.length !== 0;
  observeReveals();
}

function renderSearchSuggestions(searchTerm = $('#product-search').value) {
  const query = searchTerm.trim().toLocaleLowerCase();
  const lists = [['#product-search', '#search-suggestions'], ['#home-search', '#home-suggestions']];
  if (!query) {
    lists.forEach(([inputSelector, listSelector]) => {
      $(listSelector).hidden = true;
      $(inputSelector).setAttribute('aria-expanded', 'false');
    });
    return;
  }
  const matches = products.filter((product) => `${product.name} ${product.category} ${product.description} ${product.colors.map((color) => color.name).join(' ')}`.toLocaleLowerCase().includes(query)).slice(0, 5);
  lists.forEach(([inputSelector, listSelector]) => {
    const list = $(listSelector);
    list.innerHTML = matches.length ? matches.map((product) => `<button type="button" role="option" data-suggestion="${product.id}"><span>${product.name}</span><small>${product.category} · ${money(product.price)}</small></button>`).join('') : '<p>No pieces found.</p>';
    list.hidden = false;
    $(inputSelector).setAttribute('aria-expanded', 'true');
  });
}

function renderSwatches(container, product, selectedColor, onSelect) {
  container.innerHTML = product.colors.map((color) => `<button type="button" class="color-swatch${selectedColor === color.name ? ' is-selected' : ''}" style="--swatch:${color.hex}" title="${color.name}" aria-label="${color.name}" aria-pressed="${selectedColor === color.name}" data-color="${color.name}"></button>`).join('');
  container.querySelectorAll('[data-color]').forEach((button) => button.addEventListener('click', () => onSelect(button.dataset.color)));
}

function setQuickColor(color) {
  selectedQuickColor = color;
  $('#quick-color-name').textContent = color;
  renderSwatches($('#quick-colors'), quickProduct, selectedQuickColor, setQuickColor);
}

function setDetailColor(color) {
  selectedDetailColor = color;
  $('#detail-color-name').textContent = color;
  renderSwatches($('#detail-colors'), activeProduct, selectedDetailColor, setDetailColor);
}

function renderSizeOptions(select, product, placeholder = false) {
  select.innerHTML = `${placeholder ? '<option value="">Choose a size</option>' : ''}${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('')}`;
  if (!placeholder && product.sizes.length === 1) select.value = product.sizes[0];
}

function openQuickView(id) {
  quickProduct = productById(id);
  if (!quickProduct) return;
  $('#quick-image').src = `https://images.unsplash.com/${quickProduct.images[0]}?auto=format&fit=crop&w=1000&q=88`;
  $('#quick-image').alt = quickProduct.name;
  $('#quick-category').textContent = quickProduct.category;
  $('#quick-name').textContent = quickProduct.name;
  $('#quick-price').textContent = money(quickProduct.price);
  $('#quick-description').textContent = quickProduct.description;
  selectedQuickColor = quickProduct.colors[0].name;
  $('#quick-color-name').textContent = selectedQuickColor;
  renderSwatches($('#quick-colors'), quickProduct, selectedQuickColor, setQuickColor);
  renderSizeOptions($('#quick-size'), quickProduct, quickProduct.sizes.length > 1);
  $('#quick-view').showModal();
}

function syncRoute() {
  const id = new URLSearchParams(window.location.search).get('product');
  activeProduct = productById(id);
  const isProductRoute = Boolean(activeProduct);
  $('#site-content').hidden = isProductRoute;
  $('#site-footer').hidden = isProductRoute;
  $('#product-page').hidden = !isProductRoute;
  document.body.classList.toggle('is-product-route', isProductRoute);
  if (isProductRoute) renderProductPage(activeProduct);
  else window.requestAnimationFrame(observeReveals);
}

function openProductPage(id) {
  const product = productById(id);
  if (!product) return;
  history.pushState({ orbitalProduct: id }, '', `${window.location.pathname}?product=${encodeURIComponent(id)}`);
  syncRoute();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderProductPage(product) {
  selectedDetailColor = product.colors[0].name;
  $('#product-breadcrumb-name').textContent = product.name;
  $('#detail-category').textContent = product.category;
  $('#detail-name').textContent = product.name;
  $('#detail-price').textContent = money(product.price);
  $('#detail-add-price').textContent = money(product.price);
  $('#detail-description').textContent = product.description;
  $('#detail-image').src = `https://images.unsplash.com/${product.images[0]}?auto=format&fit=crop&w=1300&q=90`;
  $('#detail-image').alt = product.name;
  $('#gallery-thumbs').innerHTML = product.images.map((image, index) => `<button type="button" class="gallery-thumb${index === 0 ? ' is-active' : ''}" data-image-index="${index}" aria-label="View product image ${index + 1}" aria-pressed="${index === 0}"><img src="https://images.unsplash.com/${image}?auto=format&fit=crop&w=180&q=70" alt="" loading="lazy" /></button>`).join('');
  $$('.gallery-thumb').forEach((button) => button.addEventListener('click', () => {
    const image = product.images[Number(button.dataset.imageIndex)];
    $('#detail-image').src = `https://images.unsplash.com/${image}?auto=format&fit=crop&w=1300&q=90`;
    $$('.gallery-thumb').forEach((thumb) => { thumb.classList.toggle('is-active', thumb === button); thumb.setAttribute('aria-pressed', String(thumb === button)); });
  }));
  renderSwatches($('#detail-colors'), product, selectedDetailColor, setDetailColor);
  $('#detail-color-name').textContent = selectedDetailColor;
  renderSizeOptions($('#detail-size'), product, product.sizes.length > 1);
  $('#product-accordions').innerHTML = `<details><summary>Details &amp; fit</summary><p>${product.description}</p></details><details><summary>Materials &amp; care</summary><p>${product.materials}</p></details><details><summary>Shipping &amp; returns</summary><p>Complimentary delivery over €${freeDeliveryThreshold}. Returns are accepted within 30 days of delivery for unworn pieces in their original condition.</p></details>`;
  const recommendations = products.filter((candidate) => candidate.category === product.category && candidate.id !== product.id).slice(0, 4);
  renderProductCards(recommendations, $('#recommendation-grid'));
}

function addToCart(product, size, color) {
  if (!product || !size) {
    notify('Please choose a size first.');
    return false;
  }
  const key = `${product.id}|${size}|${color}`;
  cart.set(key, (cart.get(key) || 0) + 1);
  localStorage.setItem('orbital-luxury-cart', JSON.stringify(Object.fromEntries(cart)));
  renderCart();
  notify(`${product.name} added to your bag.`);
  return true;
}

function renderCart() {
  const entries = [...cart.entries()].filter(([key]) => productById(key.split('|')[0]));
  const itemCount = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const subtotal = entries.reduce((sum, [key, quantity]) => sum + productById(key.split('|')[0]).price * quantity, 0);
  $('#bag-count').textContent = itemCount;
  $('#cart-count-label').textContent = `(${itemCount})`;
  $('#cart-total').textContent = money(subtotal);
  $('#checkout-start').disabled = itemCount === 0;
  $('#cart-items').innerHTML = itemCount ? entries.map(([key, quantity]) => {
    const [id, size, color] = key.split('|');
    const product = productById(id);
    return `<article class="cart-line"><img src="https://images.unsplash.com/${product.images[0]}?auto=format&fit=crop&w=220&q=72" alt="" loading="lazy" /><div class="cart-line-info"><strong>${product.name}</strong><small>${color} · ${size}</small><div class="quantity-controls"><button type="button" data-quantity="${key}" data-delta="-1" aria-label="Remove one ${product.name}">−</button><span>${quantity}</span><button type="button" data-quantity="${key}" data-delta="1" aria-label="Add one ${product.name}">+</button></div></div><strong class="cart-line-total">${money(product.price * quantity)}</strong></article>`;
  }).join('') : '<p class="cart-empty">Your bag is waiting for something special.</p>';
  const remaining = Math.max(0, freeDeliveryThreshold - subtotal);
  $('#shipping-progress-copy').textContent = remaining ? `You are ${money(remaining)} away from complimentary delivery.` : 'Your order includes complimentary delivery.';
  $('#shipping-progress-bar').style.width = `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%`;
}

function observeReveals() {
  const targets = $$('[data-reveal]:not(.is-revealed)');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-revealed'));
    return;
  }
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((element) => observer.observe(element));
}

function closeMenu() {
  $('#site-nav').classList.remove('is-open');
  $('#menu-toggle').setAttribute('aria-expanded', 'false');
  $('#menu-toggle').setAttribute('aria-label', 'Open navigation');
}

$('#site-nav').addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  closeMenu();
  if (new URLSearchParams(window.location.search).has('product')) {
    event.preventDefault();
    history.pushState({ orbitalHome: true }, '', link.hash);
    syncRoute();
    $(link.hash)?.scrollIntoView({ behavior: 'smooth' });
  }
});
$('#menu-toggle').addEventListener('click', (event) => {
  const open = $('#site-nav').classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
  event.currentTarget.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
$('#search-trigger').addEventListener('click', () => {
  if ($('#site-content').hidden) {
    history.pushState({ orbitalHome: true }, '', `${window.location.pathname}#shop`);
    syncRoute();
  }
  $('#shop').scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => $('#product-search').focus(), 350);
});
window.addEventListener('scroll', () => $('#site-header').classList.toggle('is-scrolled', window.scrollY > 32), { passive: true });
window.addEventListener('popstate', syncRoute);
$$('[data-category-link]').forEach((link) => link.addEventListener('click', () => {
  $('#category-filter').value = link.dataset.categoryLink;
  renderShop();
}));
['#category-filter', '#size-filter', '#color-filter', '#sort-filter'].forEach((selector) => $(selector).addEventListener('change', renderShop));
$('#price-filter').addEventListener('input', (event) => { $('#price-output').textContent = money(Number(event.currentTarget.value)); renderShop(); });
$('#product-search').addEventListener('input', (event) => {
  $('#home-search').value = event.currentTarget.value;
  renderShop();
  renderSearchSuggestions(event.currentTarget.value);
});
$('#home-search').addEventListener('input', (event) => {
  $('#product-search').value = event.currentTarget.value;
  renderShop();
  renderSearchSuggestions(event.currentTarget.value);
});
$('#hero-search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = $('#home-search').value.trim();
  $('#product-search').value = query;
  renderShop();
  renderSearchSuggestions(query);
  $('#shop').scrollIntoView({ behavior: 'smooth' });
});
$('#product-search').addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { $('#search-suggestions').hidden = true; event.currentTarget.setAttribute('aria-expanded', 'false'); }
  if (event.key === 'Enter' && !$('#search-suggestions').hidden) {
    const firstSuggestion = $('#search-suggestions [data-suggestion]');
    if (firstSuggestion) { event.preventDefault(); openProductPage(firstSuggestion.dataset.suggestion); }
  }
});
$('#home-search').addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { $('#home-suggestions').hidden = true; event.currentTarget.setAttribute('aria-expanded', 'false'); }
  if (event.key === 'Enter' && !$('#home-suggestions').hidden) {
    const firstSuggestion = $('#home-suggestions [data-suggestion]');
    if (firstSuggestion) { event.preventDefault(); openProductPage(firstSuggestion.dataset.suggestion); }
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-wrap, .hero-search-wrap')) {
    $('#search-suggestions').hidden = true;
    $('#home-suggestions').hidden = true;
    $('#product-search').setAttribute('aria-expanded', 'false');
    $('#home-search').setAttribute('aria-expanded', 'false');
  }
  const suggestion = event.target.closest('[data-suggestion]');
  if (suggestion) { openProductPage(suggestion.dataset.suggestion); return; }
  const quick = event.target.closest('[data-quick-view]');
  const openProduct = event.target.closest('[data-open-product]');
  const favorite = event.target.closest('[data-wishlist]');
  const categoryLink = event.target.closest('[data-category-link]');
  const quantity = event.target.closest('[data-quantity]');
  if (quick) openQuickView(quick.dataset.quickView);
  if (openProduct) openProductPage(openProduct.dataset.openProduct);
  if (favorite) {
    const id = favorite.dataset.wishlist;
    wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
    localStorage.setItem('orbital-luxury-wishlist', JSON.stringify([...wishlist]));
    renderShop();
    renderProductCards(products.filter((product) => product.isNew).slice(0, 6), $('#arrival-track'));
  }
  if (categoryLink) { $('#category-filter').value = categoryLink.dataset.categoryLink; renderShop(); }
  if (quantity) {
    const key = quantity.dataset.quantity;
    const next = (cart.get(key) || 0) + Number(quantity.dataset.delta);
    if (next < 1) cart.delete(key); else cart.set(key, next);
    localStorage.setItem('orbital-luxury-cart', JSON.stringify(Object.fromEntries(cart)));
    renderCart();
  }
});
$('#clear-filters').addEventListener('click', () => {
  $('#category-filter').value = 'all'; $('#size-filter').value = 'all'; $('#color-filter').value = 'all'; $('#price-filter').value = '1200'; $('#price-output').textContent = money(1200); $('#sort-filter').value = 'featured'; $('#product-search').value = ''; $('#home-search').value = ''; renderSearchSuggestions(''); renderShop();
});
$('#reset-search').addEventListener('click', () => $('#clear-filters').click());
$$('[data-scroll]').forEach((button) => button.addEventListener('click', () => {
  const track = $(`#${button.dataset.scroll}`);
  track.scrollBy({ left: Number(button.dataset.direction) * track.clientWidth * 0.8, behavior: 'smooth' });
}));
$('#quick-add').addEventListener('click', () => {
  const added = addToCart(quickProduct, $('#quick-size').value, selectedQuickColor);
  if (added) { $('#quick-view').close(); $('#cart-dialog').showModal(); }
});
$('#quick-view-product').addEventListener('click', () => { const id = quickProduct.id; $('#quick-view').close(); openProductPage(id); });
$('#detail-add').addEventListener('click', () => {
  const added = addToCart(activeProduct, $('#detail-size').value, selectedDetailColor);
  if (added) $('#cart-dialog').showModal();
});
$('#product-back').addEventListener('click', () => {
  history.pushState({ orbitalHome: true }, '', `${window.location.pathname}#shop`);
  syncRoute();
  $('#shop').scrollIntoView({ behavior: 'smooth' });
});
$('#size-guide-trigger').addEventListener('click', () => $('#size-guide').showModal());
$('#zoom-trigger').addEventListener('click', () => {
  $('#zoom-image').src = $('#detail-image').src.replace('w=1300', 'w=2000');
  $('#zoom-image').alt = $('#detail-image').alt;
  $('#zoom-view').showModal();
});
$$('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => $(`#${button.dataset.closeDialog}`).close()));
[$('#quick-view'), $('#size-guide'), $('#zoom-view'), $('#cart-dialog')].forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }));
$('#bag-trigger').addEventListener('click', () => $('#cart-dialog').showModal());
$('#checkout-start').addEventListener('click', () => { $('#bag-view').hidden = true; $('#checkout-view').hidden = false; $('#payment-placeholder').hidden = true; $('#shipping-form').hidden = false; });
$('#back-to-bag').addEventListener('click', () => { $('#checkout-view').hidden = true; $('#bag-view').hidden = false; });
$('#shipping-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  event.currentTarget.hidden = true;
  $('#payment-placeholder').hidden = false;
});
$('#return-to-delivery').addEventListener('click', () => { $('#payment-placeholder').hidden = true; $('#shipping-form').hidden = false; });
$('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#newsletter-feedback').textContent = 'Thank you. You are on the studio list.';
  event.currentTarget.reset();
});
$('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#contact-feedback').textContent = 'Thank you. Your note is ready for the studio.';
  event.currentTarget.reset();
});
$('#current-year').textContent = new Date().getFullYear();

renderShop();
renderCart();
if (!history.state) history.replaceState({ orbitalHome: true }, '', window.location.href);
syncRoute();
observeReveals();