const state = {
  locale: localStorage.getItem('metrosoft-locale') || 'ko',
  translations: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const heroTitle = $('[data-hero-title]');
const heroDescription = $('[data-hero-description]');
const heroCta = $('[data-hero-cta]');
const nav = $('[data-nav]');
const localeButtons = $$('[data-locale]');
const metricsTarget = $('[data-metrics]');

const spotlightEyebrow = $('[data-spotlight-eyebrow]');
const spotlightTitle = $('[data-spotlight-title]');
const spotlightDescription = $('[data-spotlight-description]');
const spotlightPoints = $('[data-spotlight-points]');

const ctaTitle = $('[data-cta-title]');
const ctaDescription = $('[data-cta-description]');
const ctaButton = $('[data-cta-button]');

const sectionTargets = {
  highlights: $('[data-highlights]'),
  business: $('[data-business]'),
  product: $('[data-product]'),
  introduce: $('[data-introduce]'),
  customer: $('[data-customer]')
};

const titleTargets = {
  highlights: $('[data-title="highlights"]'),
  business: $('[data-title="business"]'),
  product: $('[data-title="product"]'),
  introduce: $('[data-title="introduce"]'),
  customer: $('[data-title="customer"]')
};

const subTargets = {
  highlights: $('[data-sub="highlights"]'),
  business: $('[data-sub="business"]'),
  product: $('[data-sub="product"]'),
  introduce: $('[data-sub="introduce"]'),
  customer: $('[data-sub="customer"]')
};

const clearChildren = (el) => {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
};

const renderCards = (target, cards = []) => {
  if (!target) return;
  clearChildren(target);

  cards.forEach((card) => {
    const article = document.createElement('article');
    article.className = 'card';

    const title = document.createElement('h3');
    title.textContent = card.title;

    const desc = document.createElement('p');
    desc.textContent = card.description;

    const list = document.createElement('ul');
    (card.points || []).forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      list.appendChild(li);
    });

    article.appendChild(title);
    article.appendChild(desc);
    article.appendChild(list);
    target.appendChild(article);
  });
};

const renderNav = (items = []) => {
  clearChildren(nav);
  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = `#${item.target}`;
    link.textContent = item.label;
    nav.appendChild(link);
  });
};

const renderMetrics = (metrics = []) => {
  clearChildren(metricsTarget);
  metrics.forEach((metric) => {
    const box = document.createElement('div');
    box.className = 'metric';
    box.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
    metricsTarget.appendChild(box);
  });
};

const renderSpotlight = (spotlight = {}) => {
  spotlightEyebrow.textContent = spotlight.eyebrow || '';
  spotlightTitle.textContent = spotlight.title || '';
  spotlightDescription.textContent = spotlight.description || '';
  clearChildren(spotlightPoints);
  (spotlight.points || []).forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    spotlightPoints.appendChild(li);
  });
};

const setLocale = (locale) => {
  state.locale = locale;
  localStorage.setItem('metrosoft-locale', locale);
  render();
};

const render = () => {
  if (!state.translations) return;
  const t = state.translations[state.locale] || state.translations.ko;

  heroTitle.textContent = t.hero.title;
  heroDescription.textContent = t.hero.description;
  heroCta.textContent = t.hero.cta;

  renderNav(t.nav);
  renderMetrics(t.metrics || []);
  renderSpotlight(t.spotlight || {});

  Object.keys(titleTargets).forEach((key) => {
    if (titleTargets[key]) titleTargets[key].textContent = t.titles[key] || key;
    if (subTargets[key]) subTargets[key].textContent = (t.subs && t.subs[key]) || '';
  });

  renderCards(sectionTargets.highlights, t.highlights);
  renderCards(sectionTargets.business, t.business);
  renderCards(sectionTargets.product, t.product);
  renderCards(sectionTargets.introduce, t.introduce);
  renderCards(sectionTargets.customer, t.customer);

  if (t.cta) {
    ctaTitle.textContent = t.cta.title || '';
    ctaDescription.textContent = t.cta.description || '';
    ctaButton.textContent = t.cta.button || '';
  }

  localeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.locale === state.locale);
  });
};

localeButtons.forEach((button) => {
  button.addEventListener('click', () => setLocale(button.dataset.locale));
});

fetch('data/translations.json')
  .then((res) => res.json())
  .then((json) => {
    state.translations = json;
    render();
  })
  .catch((err) => {
    console.error('Failed to load translations:', err);
  });
